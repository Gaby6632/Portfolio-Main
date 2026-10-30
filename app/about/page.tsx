import Link from 'next/link';
import Image from 'next/image';
import { skills } from '@/lib/skills';

import {
  FaArrowRight,
  FaLaptopCode,
  FaDatabase,
  FaServer,
  FaLightbulb,
  FaGlobe,
  FaGithub,
  FaLinkedin,
  FaExternalLinkAlt,
} from 'react-icons/fa';

const interests = [
  {
    icon: FaLaptopCode,
    title: 'Web Development',
    description:
      'Building websites and applications, from simple static pages to more complex projects with interactive features and backend functionality.',
  },
  {
    icon: FaDatabase,
    title: 'Backend & Databases',
    description:
      'Working with application logic, data management, database integration and the systems that make applications function.',
  },
  {
    icon: FaLightbulb,
    title: 'Learning & Experimenting',
    description:
      'Exploring different technologies, understanding how things work and trying new approaches to development.',
  },
];

export default function About() {
  return (
    <main className="container-x py-16 md:py-24">

      {/* Introduction */}
      <section className="mx-auto max-w-4xl">
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
          <span className="h-2 w-2 rounded-full bg-blue-500" />
          About me
        </span>

        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
          I'm Gabriel, a developer interested in building things with
          <span className="font-serif text-blue-500"> technology.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-base leading-8 text-muted md:text-lg">
          I work on web development projects, combining frontend design
          with backend functionality to build websites that are practical,
          responsive and easy to use.
        </p>

        <p className="mt-4 max-w-2xl text-base leading-8 text-muted">
          I'm interested in more than just how a website looks. I enjoy
          understanding what happens behind the interface, how different
          technologies communicate and how individual parts come together
          to form a working application.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-5">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Get in touch
            <FaArrowRight className="text-xs" />
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-semibold text-muted transition hover:text-blue-600"
          >
            My services
            <FaArrowRight className="text-xs" />
          </Link>
        </div>
      </section>

      {/* Divider */}
      <div className="my-20 border-t border-line md:my-28" />

      {/* What I do */}
      <section>
        <div className="mb-10 max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-600">
            What I do
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            The areas I work with.
          </h2>

          <p className="mt-4 leading-7 text-muted">
            My interests cover different parts of software development.
            These are some of the areas I enjoy working with.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {interests.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-line bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-600">
                  <Icon />
                </div>

                <h3 className="text-lg font-bold">{item.title}</h3>

                <p className="mt-3 text-sm leading-7 text-muted">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Technologies */}
      <section className="mt-20 md:mt-28">
        <div className="mb-10 max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-600">
            Technologies
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Tools I work with.
          </h2>

          <p className="mt-4 leading-7 text-muted">
            I use different languages, frameworks and platforms depending
            on what a project requires. Here are some of the technologies
            I work with.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group flex min-h-[76px] items-center gap-3 rounded-xl border border-line/70 bg-white px-4 py-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-[0_8px_25px_rgba(37,99,235,0.10)]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg  transition-colors duration-300">
                <Image
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  width={28}
                  height={28}
                  className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110"
                  unoptimized
                />
              </div>

              <span className="min-w-0 text-sm font-semibold text-ink transition-colors duration-300 group-hover:text-blue-600">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Approach */}
      <section className="mt-20 rounded-3xl bg-slate-950 px-7 py-12 text-white md:mt-28 md:px-14 md:py-16">
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-400">
            My approach
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
            Good development starts with understanding the problem.
          </h2>

          <p className="mt-6 max-w-2xl leading-8 text-slate-400">
            Every project has different requirements. I focus on
            understanding what needs to be built before choosing the
            technologies and approach that make the most sense.
          </p>

          <p className="mt-4 max-w-2xl leading-8 text-slate-400">
            My goal is to deliver something that works properly, looks
            good across different devices and can be maintained as
            the project evolves.
          </p>
        </div>
      </section>

      {/* Services / Freelancing */}
      <section className="mt-20 grid items-center gap-10 md:mt-28 md:grid-cols-2">
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-600">
            Freelance development
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Working on something?
          </h2>

          <p className="mt-5 leading-8 text-muted">
            I offer freelance web development services for individuals,
            personal projects and businesses. Depending on the project,
            this can include website development, responsive layouts,
            interactive features, backend functionality and deployment.
          </p>

          <p className="mt-4 leading-8 text-muted">
            Hosting and ongoing maintenance can also be arranged
            separately when needed.
          </p>

          <div className="mt-8 flex flex-wrap gap-5">
            <Link
              href="/hire-me"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Hire me
              <FaArrowRight className="text-xs" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-semibold text-muted transition hover:text-blue-600"
            >
              Explore services
              <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </div>

        {/* Find me online */}
        <div className="flex flex-col gap-4 rounded-2xl border border-line bg-slate-50 p-7 md:p-9">
          <div className="flex items-center gap-3">
            <FaGlobe className="text-xl text-blue-600" />
            <h3 className="text-lg font-bold">Find me online</h3>
          </div>

          <p className="text-sm leading-7 text-muted">
            You can explore my freelance profile, check out my projects
            and connect with me through my professional profiles.
          </p>

          <div className="mt-2 grid gap-3">
            {/* Freelancer */}
            <a
              href="https://www.freelancer.com/u/gabij5"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-xl border border-line bg-white p-4 transition hover:border-blue-300 hover:shadow-sm"
            >
              <span className="font-semibold transition-colors group-hover:text-blue-600">
                Freelancer.com
              </span>

              <FaExternalLinkAlt className="text-sm text-blue-600 transition-transform group-hover:translate-x-0.5" />
            </a>

            {/* GitHub */}
            <a
              href="YOUR_GITHUB_PROFILE_URL"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-xl border border-line bg-white p-4 transition hover:border-blue-300 hover:shadow-sm"
            >
              <span className="flex items-center gap-3 font-semibold transition-colors group-hover:text-blue-600">
                <FaGithub className="text-lg" />
                GitHub
              </span>

              <FaExternalLinkAlt className="text-sm text-blue-600 transition-transform group-hover:translate-x-0.5" />
            </a>

            {/* LinkedIn */}
            <a
              href="YOUR_LINKEDIN_PROFILE_URL"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-xl border border-line bg-white p-4 transition hover:border-blue-300 hover:shadow-sm"
            >
              <span className="flex items-center gap-3 font-semibold transition-colors group-hover:text-blue-600">
                <FaLinkedin className="text-lg" />
                LinkedIn
              </span>

              <FaExternalLinkAlt className="text-sm text-blue-600 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}