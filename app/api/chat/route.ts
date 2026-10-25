import { NextRequest, NextResponse } from 'next/server';

const MODEL = 'gemini-3.5-flash-lite';

const SYSTEM_PROMPT = `
You are the AI assistant on my portfolio website.
ABOUT ME: [write here]
SERVICES AND PRICES: [write here]
CONTACT: [write here]
RULES: Be friendly and concise. Only answer using the information above. If you don't know, suggest contacting me.
`;

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

    const contents = (
      messages as { role: string; content: string }[]
    ).map((m) => ({
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
          systemInstruction: {
            parts: [{ text: SYSTEM_PROMPT }],
          },
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

    return NextResponse.json({ reply });
  } catch (error) {
    console.error('Chat API error:', error);

    return NextResponse.json(
      { reply: 'Server error. Please try again.' },
      { status: 500 }
    );
  }
}
