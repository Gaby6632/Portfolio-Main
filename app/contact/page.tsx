'use client';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { btnFill, field, h1 } from '@/lib/ui';

export default function Contact() {
  return (
    <section className="container-x min-h-[70vh] py-16">
      <h1 className={h1}>Contact Me</h1>
      <p className="text-muted">Placeholder text. Tell visitors how to reach you.</p>
      <div className="mt-8 grid gap-12 md:grid-cols-[1.2fr_.8fr]">
        <form className="flex flex-col items-start gap-4" onSubmit={(e) => e.preventDefault()}>
          <input className={field} placeholder="Your name" required />
          <input className={field} type="email" placeholder="Your email" required />
          <textarea className={field} rows={5} placeholder="Your message" required />
          <button className={btnFill} type="submit">Send</button>
        </form>
        <div className="space-y-3 text-accent">
          <p className="flex items-center gap-2.5"><FaPhone /> +40 000 000 000</p>
          <p className="flex items-center gap-2.5"><FaEnvelope /> you@example.com</p>
        </div>
      </div>
    </section>
  );
}
