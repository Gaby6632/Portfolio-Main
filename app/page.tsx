import Link from 'next/link';
import SkillsCarousel from '@/components/SkillsCarousel';
import { btnFill, linkBtn, btnFillDark, btnOutlineDark, h1, h2, iconGH, iconLI } from '@/lib/ui';
import { FaArrowRight, FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      {/* 1. Header */}
      <section className="hero-section relative isolate overflow-hidden">
        {/* Diagonal background */}
        <div
          aria-hidden="true"
          className="hero-diagonal absolute -right-[18%] -top-[12%] -z-10 h-[210%] w-[75%] rotate-[35deg] bg-[#171917]"
        />

        <div className="container-x grid min-h-[calc(105vh-68px)] items-center gap-12 py-16 md:grid-cols-[1.1fr_.9fr]">
          <div>
            <h1 className={h1}>
              Building modern
              <span className="block font-serif text-accent">
                digital experiences.
              </span>
            </h1>

            <p className="mt-6 max-w-[520px] text-lg leading-8 text-muted">
              I design and develop modern websites and web applications,
              combining clean design, reliable functionality and performance.
              From frontend interfaces to backend systems, I turn ideas into
              practical digital solutions.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className={btnFill}>Contact Me</Link>
              <a href="https://www.linkedin.com/in/gabi-j-5b4199355/" target="_blank" rel="noopener noreferrer" className={iconLI}>
                <FaLinkedinIn />
              </a>
              <a href="https://github.com/Gaby6632" target="_blank" rel="noopener noreferrer" className={iconGH}>
                <FaGithub />
              </a>
            </div>

            <div className="mt-7 flex flex-col items-start gap-5">
              <Link href="/hire-me" className={linkBtn}>
                Hire Me <FaArrowRight className="text-xs" />
              </Link>

              <Link href="/services" className={linkBtn}>
                Explore my services <FaArrowRight className="text-xs" />
              </Link>
            </div>
          </div>

          <img
            className="order-first max-h-96 w-full object-cover md:order-none md:max-h-[600px]"
            src="https://placehold.co/500x600?text=Your+Photo"
            alt="Your photo"
          />
        </div>
      </section>

      {/* 2. Description */}
      <section className="description-section relative isolate overflow-hidden py-24">

        {/* Background image */}
        <div className="description-bg absolute inset-0 -z-20" />

        {/* Dark overlay */}
      <div className="absolute inset-0 -z-10 bg-black/85" />

        <div className="container-x grid items-center gap-12 md:grid-cols-2">

          <div className="description-content">
            <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.18em] text-[#A0AD8A]">
              Beyond the interface
            </span>

            <h2 className={`${h2} text-white`}>
              More than just websites.
            </h2>

            <p className="mt-5 text-base leading-8 text-white/75">
              I focus on building complete web solutions that combine thoughtful
              design with solid technical foundations. My work goes beyond
              creating visually appealing interfaces, covering everything from
              responsive frontend development to backend logic, database
              integration and deployment.
            </p>

            <p className="mt-4 text-base leading-8 text-white/75">
              Whether it's a simple business website or a more complex web
              application, my goal is to create solutions that are reliable,
              maintainable and built around real-world needs.
            </p>

            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-[#A0AD8A] transition-colors hover:text-white"
            >
              More about me <span aria-hidden="true">→</span>
            </Link>
          </div>

        </div>
      </section>

      {/* 3. Skills */}
      <section className="overflow-hidden bg-surface py-16">
        <div className="container-x">
          <h2 className={h2}>Skills &amp; tools</h2>
          <p className="text-muted">Drag to browse, click a card for more details.</p>
        </div>
        <SkillsCarousel />
      </section>
      
      {/* 4. Get Started */}
      <section className="relative isolate overflow-hidden bg-[#cdced291] py-32 text-center">
        <span className="absolute -top-20 left-[6%] -z-20 size-[340px] rounded-full bg-red-500 opacity-85 blur-[80px]" />
        <span className="absolute -bottom-24 left-[30%] -z-20 size-[340px] rounded-full bg-blue-500 opacity-85 blur-[80px]" />
        <span className="absolute -top-16 right-[30%] -z-20 size-[340px] rounded-full bg-yellow-400 opacity-85 blur-[80px]" />
        <span className="absolute -bottom-20 right-[6%] -z-20 size-[340px] rounded-full bg-green-500 opacity-85 blur-[80px]" />
        {/* cloud layer */}
        <span className="absolute inset-0 -z-10 bg-white/5 bg-[radial-gradient(ellipse_280px_140px_at_15%_30%,rgba(255,255,255,.16),transparent_70%),radial-gradient(ellipse_340px_160px_at_45%_75%,rgba(255,255,255,.14),transparent_70%),radial-gradient(ellipse_300px_150px_at_75%_25%,rgba(255,255,255,.16),transparent_70%),radial-gradient(ellipse_260px_130px_at_90%_80%,rgba(255,255,255,.12),transparent_70%)] backdrop-blur-[28px]" />
        <div className="container-x">
          <h2 className="text-4xl font-extrabold text-white md:text-6xl">Get Started</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link href="/hire-me" className={btnFillDark}>Hire Me</Link>
            <Link href="/services" className={btnOutlineDark}>Services</Link>
          </div>
        </div>
      </section>
    </>
  );
}