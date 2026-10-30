'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import ReactMarkdown, { type Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { FaChevronDown, FaPaperPlane, FaRegCopy, FaCheck, FaVolumeUp, FaStop, FaRedo } from 'react-icons/fa';
import { RiRobot2Fill } from 'react-icons/ri';

type Message = { role: 'user' | 'assistant'; content: string };

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);
  const [speakingIdx, setSpeakingIdx] = useState<number | null>(null);
  const [voice, setVoice] = useState<SpeechSynthesisVoice | null>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading, open]);

  // pick a British male voice when available
  useEffect(() => {
    const synth = window.speechSynthesis;
    if (!synth) return;

    const pick = () => {
      const gb = synth
        .getVoices()
        .filter((v) => v.lang.replace('_', '-').toLowerCase().startsWith('en-gb'));
      const female = /(female|libby|sonia|maisie|hazel|kate|serena|susan|fiona|martha)/i;
      const male = /(male|daniel|ryan|george|thomas|arthur|oliver|james)/i;

      setVoice(
        gb.find((v) => male.test(v.name) && !female.test(v.name)) ??
          gb.find((v) => !female.test(v.name)) ??
          gb[0] ??
          null
      );
    };

    pick();
    synth.addEventListener('voiceschanged', pick); // voices load async in Chrome
    return () => synth.removeEventListener('voiceschanged', pick);
  }, []);

  // stop speech when the component unmounts
  useEffect(() => () => window.speechSynthesis?.cancel(), []);

  // close (and stop speech) when clicking outside the chat card
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        window.speechSynthesis?.cancel();
        setSpeakingIdx(null);
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, [open]);

  // strip markdown so it reads/copies as plain text
  const plain = (s: string) =>
    s
      .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
      .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
      .replace(/[*_`#>]/g, '')
      .trim();

  async function copy(i: number, text: string) {
    try {
      await navigator.clipboard.writeText(plain(text));
      setCopiedIdx(i);
      setTimeout(() => setCopiedIdx(null), 1500);
    } catch {}
  }

  function speak(i: number, text: string) {
    const synth = window.speechSynthesis;
    if (!synth) return;
    if (speakingIdx === i) {
      synth.cancel();
      setSpeakingIdx(null);
      return;
    }
    synth.cancel();
    const u = new SpeechSynthesisUtterance(plain(text));
    if (voice) {
      u.voice = voice;
      u.lang = voice.lang;
    } else {
      u.lang = 'en-GB';
    }
    u.rate = 1.1;
    u.pitch = 0.9;
    u.onend = () => setSpeakingIdx(null);
    u.onerror = () => setSpeakingIdx(null);
    setSpeakingIdx(i);
    synth.speak(u);
  }

  async function ask(history: Message[]) {
    setLoading(true);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history }),
      });
      const data = await res.json();
      setMessages([...history, { role: 'assistant', content: data.reply || 'Something went wrong. Please try again.' }]);
    } catch {
      setMessages([...history, { role: 'assistant', content: 'Connection error. Please try again.' }]);
    } finally {
      setLoading(false);
    }
  }

  function regenerate(i: number) {
    if (loading) return;
    window.speechSynthesis?.cancel();
    setSpeakingIdx(null);
    const history = messages.slice(0, i);
    setMessages(history);
    ask(history);
  }

  function closeChat() {
    window.speechSynthesis?.cancel();
    setSpeakingIdx(null);
    setOpen(false);
  }

  function send(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;
    const next: Message[] = [...messages, { role: 'user', content: text }];
    setMessages(next);
    setInput('');
    ask(next);
  }

  const linkCls = 'font-medium text-accent underline underline-offset-2';

  const md: Components = {
    a: ({ href = '', children }) =>
      href.startsWith('/') ? (
        <Link href={href} onClick={closeChat} className={linkCls}>
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

  return (
    <>
      {!open && (
        <button
          aria-label="Open chat"
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-90 grid size-14.5 place-items-center rounded-full bg-accent text-2xl text-white shadow-lg shadow-accent/40 transition hover:scale-105"
        >
          <RiRobot2Fill />
        </button>
      )}

      <div
        onClick={closeChat}
        className={open ? 'fixed inset-0 z-94 bg-ink/50 sm:hidden' : 'hidden'}
      />

      <section
        ref={panelRef}
        aria-hidden={!open}
        className={`fixed bottom-0 right-0 z-95 flex h-[90dvh] w-full max-w-full flex-col overflow-hidden
        rounded-t-3xl border border-line/70 bg-white
        shadow-[0_12px_60px_rgba(15,23,42,0.18)]
        transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
        sm:bottom-6 sm:right-6 sm:h-150 sm:max-h-[calc(100dvh-48px)]
        sm:w-97.5 sm:rounded-3xl
        ${open
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-full opacity-0 sm:translate-y-6'
        }`}
      >
        <div className="flex items-center justify-between border-b border-line px-4 py-3.5 font-semibold">
          <span>AI Assistant</span>
          <button aria-label="Close chat" onClick={closeChat} className="rounded-full bg-gray-200 p-2 text-lg">
            <FaChevronDown />
          </button>
        </div>

        <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-4">
          <div className="wrap-break-word">Hi! Ask me anything about my services or work.</div>
          {messages.map((m, i) =>
            m.role === 'user' ? (
              <div key={i} className="max-w-[85%] self-end whitespace-pre-wrap wrap-break-word rounded-2xl bg-[#eef2f7] px-3.5 py-2.5">
                {m.content}
              </div>
            ) : (
              <div key={i} className="wrap-break-word">
                <ReactMarkdown remarkPlugins={[remarkGfm]} components={md}>
                  {m.content}
                </ReactMarkdown>
                <div className="mt-2 flex gap-1 text-muted">
                  <button
                    aria-label="Copy response"
                    onClick={() => copy(i, m.content)}
                    className="rounded-md p-1.5 text-sm transition hover:bg-gray-100"
                  >
                    {copiedIdx === i ? <FaCheck /> : <FaRegCopy />}
                  </button>
                  <button
                    aria-label={speakingIdx === i ? 'Stop reading' : 'Read aloud'}
                    onClick={() => speak(i, m.content)}
                    className="rounded-md p-1.5 text-sm transition hover:bg-gray-100"
                  >
                    {speakingIdx === i ? <FaStop /> : <FaVolumeUp />}
                  </button>
                  <button
                    aria-label="Regenerate response"
                    onClick={() => regenerate(i)}
                    disabled={loading}
                    className="rounded-md p-1.5 text-sm transition hover:bg-gray-100 disabled:opacity-40"
                  >
                    <FaRedo />
                  </button>
                </div>
              </div>
            )
          )}
          {loading && (
            <div className="flex gap-1">
              {[0, 150, 300].map((d) => (
                <span key={d} className="size-1.75 animate-blink rounded-full bg-muted" style={{ animationDelay: `${d}ms` }} />
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
          <button type="submit" aria-label="Send" disabled={loading} className="grid size-10.5 place-items-center rounded-full bg-accent text-white disabled:opacity-50">
            <FaPaperPlane />
          </button>
        </form>
      </section>
    </>
  );
}