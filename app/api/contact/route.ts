import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name =
      typeof body.name === 'string' ? body.name.trim() : '';

    const email =
      typeof body.email === 'string' ? body.email.trim() : '';

    const message =
      typeof body.message === 'string' ? body.message.trim() : '';

    if (!name || !email || !message) {
      return Response.json(
        { error: 'Please fill in all fields.' },
        { status: 400 },
      );
    }

    if (
      name.length > 100 ||
      email.length > 254 ||
      message.length > 5000
    ) {
      return Response.json(
        { error: 'One or more fields exceed the allowed length.' },
        { status: 400 },
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: [process.env.CONTACT_TO_EMAIL!],
      replyTo: email,
      subject: `New contact message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto;">
          <h1>New Contact Form Message</h1>

          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>

          <h3>Message:</h3>
          <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);

      return Response.json(
        { error: 'Unable to send your message.' },
        { status: 500 },
      );
    }

    return Response.json({ success: true, data });
  } catch (error) {
    console.error('Contact form error:', error);

    return Response.json(
      { error: 'An unexpected error occurred.' },
      { status: 500 },
    );
  }
}