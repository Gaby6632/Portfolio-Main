import Link from 'next/link';

export default function Tutorials() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
    <div className="flex max-w-2xl flex-col items-center gap-5">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"> Well, this is awkward.</h1>
      <p className="max-w-xl text-base leading-7 text-gray-500 sm:text-lg"> This page is still under development. Apparently, writing code takes longer than writing this message.</p>
      <p className="max-w-xl text-sm leading-6 text-gray-500 sm:text-base"> Need something in the meantime? Feel free to reach out through my{" "} <Link href="/contact" className="font-medium text-accent underline-offset-4 transition-colors hover:underline" >contact form</Link>.</p>
    </div>
  </section>
  )
};
