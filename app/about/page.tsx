import Link from 'next/link';
import { FaArrowRight, FaCode, FaLaptopCode, FaLightbulb } from 'react-icons/fa';
import { h1 } from '@/lib/ui';

export default function About() {
  return (
    <section className="container-x flex min-h-[70vh] flex-col items-center justify-center gap-12 py-16">
      <div>

        <h1 className='mb-4 text-4xl font-bold leading-tight md:text-6xl text-center'>
          Turning ideas into
          <span className="block font-serif text-blue-500">
            digital solutions.
          </span>
        </h1>

        <p className="mt-16 max-w-xl text-base leading-8 text-muted">
          I'm Gabriel, a developer with a strong interest in technology,
          software development and building things that solve real problems.
          I enjoy exploring how things work, experimenting with new
          technologies and turning ideas into functional digital products.
        </p>

        <p className="mt-4 max-w-xl text-base leading-8 text-muted">
          My main focus is web development, working across both frontend
          and backend technologies. I enjoy creating clean interfaces,
          developing application logic and connecting different parts
          of a project into a complete solution.
        </p>

        <p className="mt-4 max-w-xl text-base leading-8 text-muted">
          I'm constantly learning, improving my skills and exploring
          different approaches to software development. I believe good
          development is not just about writing code, but understanding
          problems and finding effective ways to solve them.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-line p-4">
            <FaCode className="mb-3 text-xl text-blue-500" />
            <h3 className="font-semibold">Development</h3>
            <p className="mt-1 text-xs leading-5 text-muted">
              Building functional web solutions.
            </p>
          </div>

          <div className="rounded-xl border border-line p-4">
            <FaLaptopCode className="mb-3 text-xl text-blue-500" />
            <h3 className="font-semibold">Technology</h3>
            <p className="mt-1 text-xs leading-5 text-muted">
              Exploring tools and technologies.
            </p>
          </div>

          <div className="rounded-xl border border-line p-4">
            <FaLightbulb className="mb-3 text-xl text-blue-500" />
            <h3 className="font-semibold">Problem solving</h3>
            <p className="mt-1 text-xs leading-5 text-muted">
              Finding practical solutions.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-semibold text-blue-600 transition-colors hover:text-blue-700"
          >
            Explore my services <FaArrowRight className="text-xs" />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-semibold text-muted transition-colors hover:text-blue-600"
          >
            Get in touch <FaArrowRight className="text-xs" />
          </Link>
        </div>
      </div>

      {/* <img
        className="w-full rounded-2xl object-cover"
        src="https://placehold.co/500x600?text=Your+Photo"
        alt="Gabriel"
      /> */}
    </section>
  );
}