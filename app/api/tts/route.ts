import { getTTSProvider } from '@/lib/tts';
import { TTSConfigurationError, TTSProviderError } from '@/lib/tts/types';

const MAX_TEXT_LENGTH = 5_000;
const MAX_BODY_LENGTH = 32_000;

export async function POST(request: Request) {
  if (!request.headers.get('content-type')?.toLowerCase().startsWith('application/json')) {
    return Response.json({ error: 'Content-Type must be application/json.' }, { status: 415 });
  }

  const contentLength = Number(request.headers.get('content-length'));
  if (Number.isFinite(contentLength) && contentLength > MAX_BODY_LENGTH) {
    return Response.json({ error: 'Request body is too large.' }, { status: 413 });
  }

  let body: unknown;
  try {
    const rawBody = await request.text();
    if (rawBody.length > MAX_BODY_LENGTH) {
      return Response.json({ error: 'Request body is too large.' }, { status: 413 });
    }
    body = JSON.parse(rawBody);
  } catch {
    return Response.json({ error: 'Request body must be valid JSON.' }, { status: 400 });
  }

  const text =
    typeof body === 'object' && body !== null && 'text' in body && typeof body.text === 'string'
      ? body.text.trim()
      : '';

  if (!text) {
    return Response.json({ error: 'Text is required.' }, { status: 400 });
  }
  if (text.length > MAX_TEXT_LENGTH) {
    return Response.json({ error: `Text must be ${MAX_TEXT_LENGTH} characters or fewer.` }, { status: 413 });
  }

  try {
    const audio = await getTTSProvider().synthesize(text, request.signal);
    return new Response(audio.data, {
      headers: {
        'Content-Type': audio.contentType,
        'Content-Length': String(audio.data.byteLength),
        'Cache-Control': 'no-store',
      },
    });
  } catch (error) {
    if (error instanceof TTSConfigurationError) {
      return Response.json({ error: 'The speech service is not configured correctly.' }, { status: 503 });
    }
    if (error instanceof TTSProviderError) {
      return Response.json({ error: error.message }, { status: error.statusCode });
    }
    if (error instanceof Error && error.name === 'AbortError') {
      return new Response(null, { status: 499 });
    }
    return Response.json({ error: 'Unable to generate speech right now.' }, { status: 502 });
  }
}
