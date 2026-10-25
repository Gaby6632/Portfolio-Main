import Link from 'next/link';
import { btnFill, btnOutline, h1 } from '@/lib/ui';

export default function HireMe() {
  return (
    <section className="container-x min-h-[70vh] py-16">
      <h1 className={h1}>Hire Me</h1>
      <p>Placeholder text. Explain how the process works, what you need from the client and how long projects take.</p>
      <div className="mt-6 flex flex-wrap gap-4">
        <Link href="/services" className={btnFill}>See services</Link>
        <Link href="/contact" className={btnOutline}>Contact Me</Link>
      </div>
    </section>
  );
}
