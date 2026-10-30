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
  { href: '/hire-me', label: 'Hire Me', cta: true },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur-md">
      <div className="container-x flex h-[55px] items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="text-xl font-extrabold tracking-tight text-accent transition-opacity hover:opacity-80"
        >
          Gabriel I. Joian<span className="text-blue-500">.</span>
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          className="relative flex h-10 w-10 flex-col items-center justify-center gap-[6px] rounded-lg transition-colors hover:bg-accent/10 md:hidden"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className={`h-0.5 w-5 origin-center rounded-full bg-ink transition-all duration-300 ${open ? 'translate-y-[7.85px] rotate-45' : ''}`} />
          <span className={`h-0.5 w-5 rounded-full bg-ink transition-all duration-300 ${open ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`h-0.5 w-5 origin-center rounded-full bg-ink transition-all duration-300 ${open ? '-translate-y-[7.85px] -rotate-45' : ''}`} />
        </button>

        {/* Navigation */}
        <nav
          className={`
            absolute inset-x-0 top-[72px] flex-col gap-1
            border-b border-line bg-white px-[4%] py-4
            md:static md:flex md:flex-row md:items-center md:gap-1
            md:border-0 md:bg-transparent md:p-0
            ${open ? 'flex' : 'hidden md:flex'}
          `}
        >
          {links.map((link) => {
            const active = pathname === link.href;

            const cls = link.cta
              ? `rounded-lg border border-accent px-5 py-2.5 text-center text-sm font-semibold transition-colors duration-200 md:ml-3 ${
                  active
                    ? 'bg-transparent text-accent'
                    : 'bg-accent text-white hover:bg-transparent hover:text-accent'
                }`
              : `rounded-lg px-3.5 py-2.5 text-sm font-medium transition-colors duration-200 ${
                  active
                    ? 'bg-accent/10 text-accent'
                    : 'text-muted hover:bg-accent/5 hover:text-accent'
                }`;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={active ? 'page' : undefined}
                className={cls}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}