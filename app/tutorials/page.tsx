// import Link from 'next/link';

// export default function Tutorials() {
//   return (
//     <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
//     <div className="flex max-w-2xl flex-col items-center gap-5">
//       <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"> Well, this is awkward.</h1>
//       <p className="max-w-xl text-base leading-7 text-gray-500 sm:text-lg"> This page is still under development. Apparently, writing code takes longer than writing this message.</p>
//       <p className="max-w-xl text-sm leading-6 text-gray-500 sm:text-base"> Need something in the meantime? Feel free to reach out through my{" "} <Link href="/contact" className="font-medium text-accent underline-offset-4 transition-colors hover:underline" >contact form</Link>.</p>
//     </div>
//   </section>
//   )
// };


import Link from "next/link";
import type { Metadata } from "next";
import { tutorials } from "./tutorials";

export const metadata: Metadata = {
  title: "Tutorials",
  description: "Step-by-step guides for my clients.",
};

export default function TutorialsPage() {
  return (
    <main className="min-h-screen bg-ink text-paper">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Tutorials</h1>
          <p className="mt-3 max-w-2xl text-paper-dim">
            Step-by-step guides to help you set everything up. Pick a tutorial to get started.
          </p>
        </header>

        <ul className="grid gap-6 sm:grid-cols-2">
          {tutorials.map((tutorial) => (
            <li key={tutorial.slug}>
              <article className="flex h-full flex-col rounded-2xl border border-line bg-ink-soft p-6 transition-colors hover:border-line-light">
                <h2 className="text-xl font-semibold">{tutorial.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-paper-dim">
                  {tutorial.description}
                </p>
                <Link
                  href={`/tutorials/${tutorial.slug}`}
                  className="mt-6 block w-full rounded-xl bg-ink outline-2 outline-gray-500 px-4 py-3 text-center text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-ink-soft"
                >
                  Open tutorial
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}