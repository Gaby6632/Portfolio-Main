import { NextRequest, NextResponse } from 'next/server';
import SYSTEM_PROMPT from '@/lib/ai/system-prompt';

const MODEL = 'gemini-3.5-flash-lite';

async function findImage(q: string): Promise<string> {
  const key = process.env.PIXABAY_API_KEY;

  if (key) {
    try {
      const r = await fetch(
        `https://pixabay.com/api/?key=${key}&q=${encodeURIComponent(q)}&image_type=photo&orientation=horizontal&safesearch=true&per_page=3`
      );
      const d = await r.json();
      const url = d?.hits?.[0]?.largeImageURL;
      if (url) return url;
    } catch {}
  }

  // Fallback: Wikimedia Commons (no key needed)
  try {
    const r = await fetch(
      `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(q)}&gsrnamespace=6&gsrlimit=8&prop=imageinfo&iiprop=url|mime&iiurlwidth=800&format=json`,
      { headers: { 'User-Agent': 'PortfolioChat/1.0 (gabriel.joian15@gmail.com)' } }
    );
    const d = await r.json();
    type WikiPage = { imageinfo?: { mime?: string; thumburl?: string }[] };
    const pages = Object.values(d?.query?.pages ?? {}) as WikiPage[];
    const hit = pages.find((p) => p.imageinfo?.[0]?.mime === 'image/jpeg');
    return hit?.imageinfo?.[0]?.thumburl ?? '';
  } catch {
    return '';
  }
}

async function resolveImages(text: string): Promise<string> {
  const matches = [...text.matchAll(/\[\[image:\s*(.+?)\]\]/gi)].slice(0, 2);
  let out = text;

  for (const m of matches) {
    const url = await findImage(m[1]);
    out = out.replace(m[0], () => (url ? `![${m[1]}](${url})` : ''));
  }
  return out.replace(/\[\[image:[^\]]*\]\]/gi, '');
}

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { reply: 'Server configuration error: Gemini API key is missing.' },
        { status: 500 }
      );
    }

    const { messages } = await req.json();

    if (!Array.isArray(messages) || messages.length > 30) {
      return NextResponse.json({ reply: 'Invalid request.' }, { status: 400 });
    }

    const contents = (messages as { role: string; content: string }[]).map((m) => ({
      role: m.role === 'user' ? 'user' : 'model',
      parts: [{ text: m.content }],
    }));

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': apiKey,
        },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
          contents,
        }),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      console.error('Gemini API error:', data);
      return NextResponse.json(
        { reply: 'The AI service is temporarily unavailable.' },
        { status: 502 }
      );
    }

    const reply = data?.candidates?.[0]?.content?.parts
      ?.map((p: { text: string }) => p.text)
      .join('');

    if (!reply) {
      return NextResponse.json(
        { reply: 'Sorry, I could not answer that.' },
        { status: 502 }
      );
    }

    return NextResponse.json({ reply: await resolveImages(reply) });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { reply: 'Server error. Please try again.' },
      { status: 500 }
    );
  }
}