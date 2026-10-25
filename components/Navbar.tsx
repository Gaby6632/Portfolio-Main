'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
  { href: '/', label: 'Main page' },
  { href: '/tutorials', label: 'Tutorials' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About me' },
  { href: '/contact', label: 'Contact Me' },
  { href: '/hire-me', label: 'Hire Me', cta: true }, // must stay last
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur">
      <div className="container-x flex h-[68px] items-center justify-between">
        <Link href="/" className="text-xl font-extrabold text-accent" onClick={() => setOpen(false)}>YourName</Link>

        <button className="flex flex-col gap-[5px] p-1.5 md:hidden" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          <span className="block h-0.5 w-6 bg-ink" />
          <span className="block h-0.5 w-6 bg-ink" />
          <span className="block h-0.5 w-6 bg-ink" />
        </button>

        <nav
          className={`absolute inset-x-0 top-[68px] flex-col gap-1 border-b border-line bg-white px-[4%] py-4
            md:static md:flex md:flex-row md:items-center md:border-0 md:bg-transparent md:p-0
            ${open ? 'flex' : 'hidden'}`}
        >
          {links.map((l) => {
            const active = pathname === l.href;
            const cls = l.cta
              ? `rounded-lg border-2 border-accent px-5 py-2 text-center font-semibold transition md:ml-2 ${
                  active ? 'bg-transparent text-accent' : 'bg-accent text-white hover:bg-transparent hover:text-accent'
                }`
              : `rounded-lg px-3.5 py-2 transition hover:bg-accent/10 hover:text-accent ${
                  active ? 'bg-accent/10 text-accent' : 'text-muted'
                }`;
            return (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className={cls}>
                {l.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
