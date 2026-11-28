import Link from "next/link";
import type { ReactNode } from "react";

export function TutorialLayout({
  title,
  intro,
  videoId,
  children,
}: {
  title: string;
  intro?: string;
  videoId?: string;
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen bg-ink text-paper">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <Link href="/tutorials" className="text-sm underline outline-accent text-paper-dim transition-colors hover:text-accent">
          ← Back to tutorials
        </Link>

        <header className="mt-6 mb-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
          {intro && <p className="mt-3 leading-relaxed text-paper-dim">{intro}</p>}
        </header>

        <div className="mb-12">
          <Video videoId={videoId} title={title} />
        </div>

        <div className="space-y-8">{children}</div>

        <Link
          href="/tutorials"
          className="mt-12 block w-full rounded-xl bg-accent px-4 py-3 text-center text-sm font-medium text-on-accent transition-colors hover:bg-accent-soft"
        >
          Back to all tutorials
        </Link>
      </div>
    </main>
  );
}

function getYouTubeId(input?: string): string | null {
  if (!input) return null;
  const value = input.trim();
  if (/^[\w-]{11}$/.test(value)) return value;
  const match = value.match(/(?:v=|youtu\.be\/|embed\/|shorts\/)([\w-]{11})/);
  return match ? match[1] : null;
}

function Video({ videoId, title }: { videoId?: string; title: string }) {
  const id = getYouTubeId(videoId);
  if (!id) {
    return (
      <div className="flex aspect-video w-full flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-line-light bg-ink-soft text-paper-dim">
        <svg viewBox="0 0 24 24" className="h-12 w-12" fill="currentColor" aria-hidden="true">
          <path d="M8 5v14l11-7z" />
        </svg>
        <p className="text-sm">YouTube video tutorial coming soon</p>
      </div>
    );
  }
  return (
    <div className="aspect-video w-full overflow-hidden rounded-2xl border border-line bg-ink-soft">
      <iframe
        className="h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        title={`${title} video`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}

/* ---------- Content blocks ---------- */

export function Step({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="rounded-2xl border border-line bg-ink-soft p-6">
      <h2 className="mb-4 text-xl font-semibold text-accent">{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

export function P({ children }: { children: ReactNode }) {
  return <p className="leading-relaxed text-paper">{children}</p>;
}

export function List({ items }: { items: ReactNode[] }) {
  return (
    <ul className="list-disc space-y-1.5 pl-5 leading-relaxed text-paper marker:text-accent">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

export function Note({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-xl border-l-4 border-sage bg-ink p-4 text-sm text-paper-dim">{children}</div>
  );
}

export function Warning({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-xl border-l-4 border-accent bg-ink p-4 text-sm font-medium text-paper">
      {children}
    </div>
  );
}

export function Code({ children }: { children: string }) {
  return (
    <pre className="overflow-x-auto rounded-xl border border-line bg-ink p-4 text-sm text-paper">
      <code>{children}</code>
    </pre>
  );
}

export function Example({ platform, steps }: { platform: string; steps: ReactNode[] }) {
  return (
    <div className="rounded-xl border border-line bg-ink p-4">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-sage">Example: {platform}</p>
      <ol className="list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-paper marker:text-paper-dim">
        {steps.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ol>
    </div>
  );
}