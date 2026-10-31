import { ElevenLabsProvider } from './elevenlabs';
import { TTSConfigurationError, type TTSProvider } from './types';

export function getTTSProvider(): TTSProvider {
  const provider = (process.env.TTS_PROVIDER || 'elevenlabs').toLowerCase();

  if (provider === 'elevenlabs') return new ElevenLabsProvider();

  throw new TTSConfigurationError(`Unsupported TTS provider: ${provider}.`);
}
