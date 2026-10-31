import { TTSConfigurationError, TTSProviderError, type TTSProvider, type TTSAudio } from './types';

const DEFAULT_MODEL = 'eleven_multilingual_v2';

function getSetting(name: string, fallback: number, min: number, max: number): number {
  const value = process.env[name];
  if (!value) return fallback;

  const parsed = Number(value);
  if (!Number.isFinite(parsed) || parsed < min || parsed > max) {
    throw new TTSConfigurationError(`${name} must be a number between ${min} and ${max}.`);
  }
  return parsed;
}

export class ElevenLabsProvider implements TTSProvider {
  async synthesize(text: string, signal?: AbortSignal): Promise<TTSAudio> {
    const apiKey = process.env.ELEVENLABS_API_KEY;
    const voiceId = process.env.ELEVENLABS_VOICE_ID;

    if (!apiKey || !voiceId) {
      throw new TTSConfigurationError('ElevenLabs is not configured.');
    }

    const voiceSettings = {
      stability: getSetting('ELEVENLABS_STABILITY', 0.5, 0, 1),
      similarity_boost: getSetting('ELEVENLABS_SIMILARITY_BOOST', 0.75, 0, 1),
      style: getSetting('ELEVENLABS_STYLE', 0, 0, 1),
      use_speaker_boost: true,
    };

    let response: Response;
    try {
      response = await fetch(
        `https://api.elevenlabs.io/v1/text-to-speech/${encodeURIComponent(voiceId)}?output_format=mp3_44100_128`,
        {
          method: 'POST',
          headers: {
            'xi-api-key': apiKey,
            'Content-Type': 'application/json',
            Accept: 'audio/mpeg',
          },
          body: JSON.stringify({
            text,
            model_id: process.env.ELEVENLABS_MODEL_ID || DEFAULT_MODEL,
            voice_settings: voiceSettings,
          }),
          signal,
          cache: 'no-store',
        }
      );
    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') throw error;
      throw new TTSProviderError('Unable to reach the speech provider.');
    }

    if (!response.ok) {
      if (response.status === 401 || response.status === 403) {
        throw new TTSConfigurationError('ElevenLabs rejected the configured credentials or voice.');
      }
      throw new TTSProviderError(
        response.status === 429
          ? 'The speech provider is temporarily rate limited.'
          : 'The speech provider could not generate audio.',
        response.status === 429 ? 503 : 502
      );
    }

    return {
      data: await response.arrayBuffer(),
      contentType: 'audio/mpeg',
    };
  }
}
