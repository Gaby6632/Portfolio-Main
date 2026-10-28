import Link from 'next/link';
import { btnFill, btnOutline, h1 } from '@/lib/ui';

export default function HireMe() {
  return (
    <section className="container-x min-h-[70vh] py-16">
      <h1 className={h1}>You need a website for your <span className='text-blue-500 font-serif'>Business</span>?</h1>
      <p>Just order one of my <a className='text-blue-600' href="/services">Service</a> or <a className='text-blue-600' href="/contact">Contact Me</a></p>
      <div className="mt-6 flex flex-wrap gap-4">
        <Link href="/services" className={btnFill}>See services</Link>
        <Link href="/contact" className={btnOutline}>Contact Me</Link>
      </div>
    </section>
  );
}
