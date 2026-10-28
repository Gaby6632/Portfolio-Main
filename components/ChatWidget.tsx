'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import ReactMarkdown, { type Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { FaComments, FaChevronDown, FaPaperPlane } from 'react-icons/fa';

type Message = { role: 'user' | 'assistant'; content: string };

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading, open]);

  const linkCls = 'font-medium text-accent underline underline-offset-2';

  const md: Components = {
    a: ({ href = '', children }) =>
      href.startsWith('/') ? (
        <Link href={href} onClick={() => setOpen(false)} className={linkCls}>
          {children}
        </Link>
      ) : (
        <a href={href} target="_blank" rel="noopener noreferrer" className={linkCls}>
          {children}
        </a>
      ),
    img: ({ src, alt }) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={typeof src === 'string' ? src : ''}
        alt={alt ?? ''}
        loading="lazy"
        className="my-2 block w-full rounded-xl object-cover"
      />
    ),
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    ul: ({ children }) => <ul className="my-2 list-disc space-y-1 pl-5">{children}</ul>,
    ol: ({ children }) => <ol className="my-2 list-decimal space-y-1 pl-5">{children}</ol>,
    p: ({ children }) => <p className="my-2 first:mt-0 last:mb-0">{children}</p>,
  };

  async function send(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;
    const next: Message[] = [...messages, { role: 'user', content: text }];
    setMessages(next);
    setInput('');
    setLoading(true);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      setMessages([...next, { role: 'assistant', content: data.reply || 'Something went wrong. Please try again.' }]);
    } catch {
      setMessages([...next, { role: 'assistant', content: 'Connection error. Please try again.' }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {!open && (
        <button
          aria-label="Open chat"
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-[90] grid size-[58px] place-items-center rounded-full bg-accent text-2xl text-white shadow-lg shadow-accent/40 transition hover:scale-105"
        >
          <FaComments />
        </button>
      )}

      <div
        onClick={() => setOpen(false)}
        className={open ? 'fixed inset-0 z-[94] bg-ink/50 sm:hidden' : 'hidden'}
      />

      <section
        aria-hidden={!open}
        className={`fixed bottom-0 right-[5vw] z-[95] flex h-[70vh] w-[90vw] flex-col overflow-hidden rounded-t-[20px] border border-line bg-white shadow-2xl transition duration-300
          sm:bottom-6 sm:right-6 sm:h-[560px] sm:max-h-[calc(100vh-48px)] sm:w-[370px] sm:rounded-[20px]
          ${open ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-full opacity-0 sm:translate-y-5'}`}
      >
        <div className="flex items-center justify-between border-b border-line px-4 py-3.5 font-semibold">
          <span>AI Assistant</span>
          <button aria-label="Close chat" onClick={() => setOpen(false)} className="rounded-full bg-gray-200 p-2 text-lg">
            <FaChevronDown />
          </button>
        </div>

        <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-4">
          <div className="break-words">Hi! Ask me anything about my services or work.</div>
          {messages.map((m, i) =>
            m.role === 'user' ? (
              <div key={i} className="max-w-[85%] self-end whitespace-pre-wrap break-words rounded-2xl bg-[#eef2f7] px-3.5 py-2.5">
                {m.content}
              </div>
            ) : (
              <div key={i} className="break-words">
                <ReactMarkdown remarkPlugins={[remarkGfm]} components={md}>
                  {m.content}
                </ReactMarkdown>
              </div>
            )
          )}
          {loading && (
            <div className="flex gap-1">
              {[0, 150, 300].map((d) => (
                <span key={d} className="size-[7px] animate-blink rounded-full bg-muted" style={{ animationDelay: `${d}ms` }} />
              ))}
            </div>
          )}
          <div ref={endRef} />
        </div>

        <form onSubmit={send} className="flex gap-2 border-t border-line p-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 rounded-full border border-line bg-surface px-4 py-2.5 outline-none focus:border-accent2"
          />
          <button type="submit" aria-label="Send" disabled={loading} className="grid size-[42px] place-items-center rounded-full bg-accent text-white disabled:opacity-50">
            <FaPaperPlane />
          </button>
        </form>
      </section>
    </>
  );
}