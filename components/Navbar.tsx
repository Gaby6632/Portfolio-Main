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
    <header className="sticky top-0 z-50 border-b border-line/70 bg-ink/95 backdrop-blur-xl">
      <div className="container-x flex h-[68px] items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="text-xl font-extrabold tracking-tight text-accent transition-opacity duration-300 hover:opacity-75"
        >
          Gabriel I. Joian<span>.</span>
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          className="relative flex h-10 w-10 flex-col items-center justify-center gap-[6px] rounded-lg transition-colors duration-300 hover:bg-accent/10 md:hidden"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span
            className={`h-0.5 w-5 rounded-full bg-muted transition-all duration-300 ${
              open ? 'translate-y-[8px] rotate-45' : ''
            }`}
          />
          <span
            className={`h-0.5 w-5 rounded-full bg-muted transition-all duration-300 ${
              open ? 'scale-x-0 opacity-0' : ''
            }`}
          />
          <span
            className={`h-0.5 w-5 rounded-full bg-muted transition-all duration-300 ${
              open ? '-translate-y-[8px] -rotate-45' : ''
            }`}
          />
        </button>

        {/* Navigation */}
        <nav
          className={`
            absolute inset-x-0 top-full flex-col gap-2
            border-b border-line/70 bg-ink/95 px-[4%] py-5 backdrop-blur-xl
            md:static md:flex md:flex-row md:items-center md:gap-7
            md:border-0 md:bg-transparent md:p-0 md:backdrop-blur-none
            ${
              open
                ? 'flex animate-in fade-in slide-in-from-top-2 duration-200'
                : 'hidden md:flex'
            }
          `}
        >
          {links.map((link) => {
            const active = pathname === link.href;

            if (link.cta) {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? 'page' : undefined}
                  className={`
                    relative mt-2 inline-flex items-center justify-center
                    rounded-lg border px-5 py-2.5 text-sm
                    transition-all duration-300
                    md:mt-0
                    ${
                      active
                        ? 'border-accent bg-accent text-white font-semibold shadow-sm shadow-accent/20'
                        : 'border-accent bg-accent text-white font-medium hover:border-accent hover:bg-ink hover:text-accent'
                    }
                  `}
                >
                  {link.label}
                </Link>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={active ? 'page' : undefined}
                className={`
                  group relative w-fit py-2 text-sm
                  transition-colors duration-300
                  ${
                    active
                      ? 'font-semibold text-accent'
                      : 'font-medium text-muted hover:text-accent'
                  }
                `}
              >
                {link.label}

                {/* Active indicator */}
                <span
                  className={`
                    absolute bottom-0 left-0 h-[2px] rounded-full bg-accent
                    transition-all duration-300 ease-out
                    ${
                      active
                        ? 'w-full opacity-100'
                        : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-60'
                    }
                  `}
                />
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}