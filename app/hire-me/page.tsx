import Link from 'next/link';
import { FaArrowRight, FaCode, FaGlobe, FaRocket, FaCheck } from 'react-icons/fa';
import { btnFill, btnOutline, h1 } from '@/lib/ui';

const benefits = [
  'Modern and responsive design',
  'Clean and maintainable code',
  'Performance and SEO optimization',
  'Hosting and maintenance available',
];

export default function HireMe() {
  return (
    <section className="container-x min-h-[80vh] py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-center gap-2 text-sm font-medium text-blue-500">
          <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          Available for new projects
        </div>

        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <h1 className={`${h1} leading-tight`}>
              Let's build something
              <span className="block font-serif italic text-blue-500">
                remarkable.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-500 dark:text-gray-400">
              Need a professional website for your business? I build modern,
              responsive and high-performance websites tailored to your needs,
              helping your business establish a strong online presence.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/services" className={btnFill}>
                Explore services <FaArrowRight className="ml-2 inline" />
              </Link>

              <Link href="/contact" className={btnOutline}>
                Let's talk
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-3xl bg-blue-500/10 blur-3xl" />

            <div className="relative rounded-3xl border border-gray-200 bg-white p-7 shadow-xl dark:border-white/10 dark:bg-[#111]">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">What I can build</p>
                  <h2 className="mt-1 text-xl font-bold">Your next project</h2>
                </div>
                <FaCode className="text-2xl text-blue-500" />
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500">
                    <FaGlobe />
                  </div>
                  <div>
                    <h3 className="font-semibold">Business websites</h3>
                    <p className="mt-1 text-sm leading-6 text-gray-500 dark:text-gray-400">
                      Professional websites that showcase your brand and services.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-500">
                    <FaCode />
                  </div>
                  <div>
                    <h3 className="font-semibold">Custom web applications</h3>
                    <p className="mt-1 text-sm leading-6 text-gray-500 dark:text-gray-400">
                      Interactive applications built around your requirements.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-500/10 text-green-500">
                    <FaRocket />
                  </div>
                  <div>
                    <h3 className="font-semibold">Deployment and hosting</h3>
                    <p className="mt-1 text-sm leading-6 text-gray-500 dark:text-gray-400">
                      Get your website online with optional hosting and maintenance.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-gray-200 pt-6 dark:border-white/10">
                <p className="mb-4 text-sm font-semibold">What you can expect</p>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <FaCheck className="shrink-0 text-green-500" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 rounded-3xl border border-gray-200 bg-gray-50 p-8 text-center dark:border-white/10 dark:bg-white/[0.03] md:p-12">
          <h2 className="text-2xl font-bold md:text-3xl">
            Have a project in mind?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-500 dark:text-gray-400">
            Let's discuss your ideas, requirements and how I can help bring your project to life.
          </p>
          <Link href="/contact" className={`${btnFill} mt-7 inline-flex`}>
            Start a project <FaArrowRight className="ml-2 inline" />
          </Link>
        </div>
      </div>
    </section>
  );
}