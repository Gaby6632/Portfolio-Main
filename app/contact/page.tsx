'use client';

import { useState } from 'react';

import {
  FiMessageSquare,
  FiPhone,
  FiArrowUpRight,
  FiCheckCircle,
  FiAlertCircle,
} from 'react-icons/fi';

import { MdOutlineMailOutline } from 'react-icons/md';

import {
  field,
  h1,
  paragraph,
  btnFill,
} from '@/lib/ui';

export default function Contact() {
  const [status, setStatus] = useState<{
    message: string;
    type: 'success' | 'error';
  } | null>(null);

  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setStatus(null);
    setIsSending(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send your message.');
      }

      setStatus({
        message: 'Message sent successfully!',
        type: 'success',
      });

      form.reset();
    } catch (error) {
      setStatus({
        message:
          error instanceof Error
            ? error.message
            : 'Something went wrong. Please try again later.',
        type: 'error',
      });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <main className="container-x py-16 md:py-24">

      {/* Heading */}
      <section className="mx-auto mb-14 max-w-3xl text-center">

        <h1 className={h1}>Get in Touch</h1>

        <p className={paragraph}>
          Have questions about my services or need assistance with an
          existing project? Feel free to get in touch. Send me a message,
          and I’ll get back to you as soon as possible.
        </p>
      </section>

      {/* Contact layout */}
      <section className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">

        {/* Contact form */}
        <div className="rounded-2xl border border-line bg-panel p-6 shadow-sm sm:p-9">
          <div className="mb-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-2xl text-accent">
              <FiMessageSquare />
            </div>

            <h2 className="text-2xl font-bold tracking-tight text-paper">
              Send Me a Message
            </h2>

            <p className="mt-2 text-sm leading-7 text-paper-dim">
              Fill out the form below, and I’ll get back to you within 24 hours.
            </p>
          </div>

          <form
            className="flex flex-col gap-5"
            onSubmit={handleSubmit}
          >
            <div className="w-full">
              <label
                className="mb-2 block text-sm font-semibold text-paper"
                htmlFor="contact-name"
              >
                Name
              </label>

              <input
                id="contact-name"
                className={field}
                name="name"
                placeholder="Your name"
                autoComplete="name"
                required
              />
            </div>

            <div className="w-full">
              <label
                className="mb-2 block text-sm font-semibold text-paper"
                htmlFor="contact-email"
              >
                Email address
              </label>

              <input
                id="contact-email"
                className={field}
                name="email"
                type="email"
                placeholder="Your email"
                autoComplete="email"
                required
              />
            </div>

            <div className="w-full">
              <label
                className="mb-2 block text-sm font-semibold text-paper"
                htmlFor="contact-message"
              >
                Message
              </label>

              <textarea
                id="contact-message"
                className={`${field} min-h-[150px] resize-y`}
                name="message"
                rows={5}
                placeholder="Tell me about your project..."
                required
              />
            </div>

            <button
              className={`${btnFill} mt-2 w-full justify-center disabled:cursor-not-allowed disabled:opacity-60`}
              type="submit"
              disabled={isSending}
            >
              {isSending ? 'Sending...' : 'Send Message'}
              {!isSending && <FiArrowUpRight />}
            </button>

            {status && (
              <div
                role="status"
                aria-live="polite"
                className={`flex items-center gap-3 rounded-xl border p-4 text-sm font-medium ${
                  status.type === 'success'
                    ? 'border-accent/30 bg-accent/10 text-accent-soft'
                    : 'border-sage/30 bg-sage/10 text-sage'
                }`}
              >
                {status.type === 'success' ? (
                  <FiCheckCircle className="shrink-0 text-lg" />
                ) : (
                  <FiAlertCircle className="shrink-0 text-lg" />
                )}

                <p>{status.message}</p>
              </div>
            )}
          </form>
        </div>

        {/* Alternative contact methods */}
        <aside className="flex flex-col gap-6">

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-paper">
              Other Ways to Reach Me
            </h2>

            <p className="mt-2 text-sm leading-7 text-paper-dim">
              Prefer a different way to communicate? You can also reach me
              directly through these channels.
            </p>
          </div>

          {/* Email */}
          <a
            href="mailto:gabriel.joian15@gmail.com"
            className="group rounded-2xl border border-line bg-panel p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-2xl text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-on-accent">
                <MdOutlineMailOutline />
              </div>

              <FiArrowUpRight className="text-xl text-paper-dim transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" />
            </div>

            <h3 className="mt-5 text-lg font-bold text-paper">
              Email Me
            </h3>

            <p className="mt-2 text-sm leading-7 text-paper-dim">
              Have a question about my services or a potential project?
            </p>

            <p className="mt-4 break-all text-sm font-semibold text-accent">
              gabriel.joian15@gmail.com
            </p>
          </a>

          {/* Phone */}
          <a
            href="tel:+40752857960"
            className="group rounded-2xl border border-line bg-panel p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sage/10 text-2xl text-sage transition-colors duration-300 group-hover:bg-sage group-hover:text-on-accent">
                <FiPhone />
              </div>

              <FiArrowUpRight className="text-xl text-paper-dim transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" />
            </div>

            <h3 className="mt-5 text-lg font-bold text-paper">
              Let&apos;s Talk
            </h3>

            <p className="mt-2 text-sm leading-7 text-paper-dim">
              Have an idea for a website or need a developer for your next project?
            </p>

            <p className="mt-4 text-sm font-semibold text-accent">
              +40 752 857 960
            </p>
          </a>

          {/* Availability note */}
          <div className="rounded-2xl border border-line bg-ink-soft p-6">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-30" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
              </span>

              <span className="text-sm font-semibold text-paper">
                Open to new projects
              </span>
            </div>

            <p className="mt-3 text-sm leading-7 text-paper-dim">
              Feel free to contact me to discuss your ideas, requirements
              or potential collaborations.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}