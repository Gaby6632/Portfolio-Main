'use client';
import { useEffect, useRef, useState } from 'react';
import { skills, type Skill } from '@/lib/skills';

const SPEED = 0.5; // px per frame, moves left -> right
const items = [...skills, ...skills]; // duplicated for a seamless loop


type ListSkill = {
  name: string;
  logo: string;
};

const getSkills = (names: string[]): ListSkill[] =>
  names.flatMap((name) => {
    const skill = skills.find((s) => s.name === name);

    return skill
      ? [{ name: skill.name, logo: skill.logo }]
      : [];
  });

const skillCategories: {
  title: string;
  skills: ListSkill[];
}[] = [
  {
    title: 'Using Now',
    skills: getSkills([
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Next.js',
      'Node.js',
      'Git',
      'Tailwind CSS',
      'Python',
      'SQL',
    ]),
  },
  {
   title: 'Learning',
    skills: [
      ...getSkills([
        'TypeScript',
        'Rust',
      ]),
      {
        name: 'Spanish',
        logo: 'https://cdn.jsdelivr.net/npm/flag-icons@7.2.3/flags/4x3/es.svg',
      },
    ],
  },
  {
    title: 'Other Skills',
    skills: [
      ...getSkills([
        'GitHub',
        'Supabase',
        'Vercel',
      ]),
      {
        name: 'Linux',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg',
      },
    ],
  },
  {
    title: 'Languages',
    skills: [
      {
        name: 'Romanian',
        logo: 'https://cdn.jsdelivr.net/npm/flag-icons@7.2.3/flags/4x3/ro.svg',
      },
      {
        name: 'English',
        logo: 'https://cdn.jsdelivr.net/npm/flag-icons@7.2.3/flags/4x3/gb.svg',
      },
    ],
  },
];

export default function SkillsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useRef(0);
  const hovering = useRef(false);
  const drag = useRef<{ active: boolean; startX: number; startPos: number; moved: boolean; index: number | null }>({
    active: false, startX: 0, startPos: 0, moved: false, index: null,
  });
  const [selected, setSelected] = useState<Skill | null>(null);
  const selectedRef = useRef<Skill | null>(null);
  useEffect(() => {
    selectedRef.current = selected;
  }, [selected]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    x.current = -track.scrollWidth / 2;
    let raf = 0;
    const tick = () => {
      const half = track.scrollWidth / 2;
      if (!hovering.current && !drag.current.active && selectedRef.current === null) x.current += SPEED;
      if (x.current >= 0) x.current -= half;
      if (x.current < -half) x.current += half;
      track.style.transform = `translate3d(${x.current}px,0,0)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setSelected(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const down = (e: React.PointerEvent<HTMLDivElement>) => {
    const card = (e.target as HTMLElement).closest<HTMLElement>('[data-i]');
    drag.current = { active: true, startX: e.clientX, startPos: x.current, moved: false, index: card ? Number(card.dataset.i) : null };
  };
  const move = (e: React.PointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    if (!d.active) return;
    const dx = e.clientX - d.startX;
    if (!d.moved && Math.abs(dx) > 6) {
      d.moved = true;
      e.currentTarget.setPointerCapture(e.pointerId);
    }
    if (d.moved) x.current = d.startPos + dx;
  };
  const up = () => {
    const d = drag.current;
    if (d.active && !d.moved && d.index !== null) setSelected(items[d.index]);
    drag.current.active = false;
  };


  return (
    <>
      <div
        className="h-[clamp(260px,35vw,380px)] w-full cursor-grab touch-pan-y bg-surface select-none overflow-hidden active:cursor-grabbing"
        onPointerDown={down}
        onPointerMove={move}
        onPointerUp={up}
        onPointerCancel={up}
        onPointerEnter={(e) => { if (e.pointerType === 'mouse') hovering.current = true; }}
        onPointerLeave={() => { hovering.current = false; }}
      >
        <div className="flex w-max my-1 will-change-transform" ref={trackRef}>
          {items.map((s, i) => (
            <div
              key={i}
              data-i={i}
              className={`mr-3 sm:mr-5 my-[clamp(10px,2vw,20px)] flex w-[clamp(150px,20vw,220px)] shrink-0 flex-col gap-[clamp(6px,1vw,10px)] rounded-[10px] p-[clamp(10px,1.5vw,20px)] text-white ${s.shadow}`}
              style={{ background: `linear-gradient(to bottom right, ${s.light}, ${s.middle}, ${s.dark})` }}
            >
              <div className='flex justify-center'><img src={s.logo} alt={`${s.name} logo`} draggable={false} className="size-[clamp(32px,5vw,60px)] p-1 bg-white rounded-xl object-cover"/></div>
              <h3 className="text-[clamp(14px,1.5vw,20px)] text-center font-bold">{s.name}</h3>
              <p className="text-[clamp(11px,1vw,14px)] opacity-95">{s.short}</p>
              <img src={s.image} alt={`${s.name} logo`} draggable={false} className="mt-auto w-full rounded-xl" />
            </div>
          ))}
        </div>
      </div>

      {/* Skills List */}

<div className="mt-16 space-y-14">
  {skillCategories.map((category) => (
    <section key={category.title}>
      <h2 className="mb-8 text-center text-3xl font-bold text-accent">
        {category.title}
      </h2>

      <div className="mx-auto grid max-w-4xl grid-cols-[repeat(auto-fit,minmax(100px,1fr))] justify-items-center gap-x-6 gap-y-8">
        {category.skills.map((skill) => (
          <div
            key={skill.name}
            className="flex w-full max-w-[130px] flex-col items-center gap-3 rounded-xl p-4 transition-transform duration-200 hover:-translate-y-1"
          >
            <div className="flex size-16 items-center justify-center">
              <img
                src={skill.logo}
                alt={`${skill.name} logo`}
                loading="lazy"
                draggable={false}
                className="size-12 object-contain"
              />
            </div>

            <span className="text-center text-sm font-semibold text-paper">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  ))}
</div>

{selected && (
  <div
    className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/60 p-3 backdrop-blur-md sm:p-6"
    onClick={() => setSelected(null)}
  >
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="selected-card-title"
      className="relative my-auto flex max-h-[92dvh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-white/15 shadow-2xl sm:rounded-3xl"
      onClick={(e) => e.stopPropagation()}
      style={{
        background: `#20231F`,
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-4 border-b border-white/15 p-4 pr-16 sm:p-6 sm:pr-20">
        <div className="flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-1.5 shadow-sm sm:size-14">
          <img
            src={selected.logo}
            alt={`${selected.name} logo`}
            draggable={false}
            className="size-full rounded-lg object-contain"
          />
        </div>

        <div className="min-w-0 flex-1">
          <h3
            id="selected-card-title"
            className="text-lg font-bold tracking-tight text-white sm:text-2xl"
          >
            {selected.name}
          </h3>
          <p className="mt-1 text-xs text-white/75 sm:text-sm">
            Skill overview
          </p>
        </div>

        {/* Close button */}
        {/* <button
          type="button"
          onClick={() => setSelected(null)}
          aria-label="Close project details"
          className="absolute right-3 top-3 flex size-10 items-center justify-center rounded-full border border-white/20 bg-black/15 text-white/90 transition hover:bg-white/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 sm:right-5 sm:top-5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="size-5"
            aria-hidden="true"
          >
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button> */}
      </div>

      {/* Scrollable content */}
      <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
        <div className="p-4 sm:p-6">
          <p className="mb-5 text-sm leading-6 text-white/90 sm:text-base sm:leading-7">
            {selected.short}
          </p>

          {/* Project image */}
          <div className="overflow-hidden rounded-xl border border-white/15 bg-white shadow-lg sm:rounded-2xl">
            <img
              src={selected.image}
              alt={`${selected.name} project preview`}
              draggable={false}
              className="block h-auto max-h-[45dvh] w-full object-contain"
            />
          </div>

          {/* Full description */}
          <div className="mt-6">
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/65">
              About this skill
            </h4>

            <p className="whitespace-pre-line text-sm leading-7 text-white/90 sm:text-base">
              {selected.long}
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-center border-t border-white/15 px-4 py-3 sm:px-6 sm:py-4">

        <button
          type="button"
          onClick={() => setSelected(null)}
          className="rounded-lg border border-white/30 bg-gray/30 px-4 py-2 w-50 text-sm font-medium text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}

    </>
  );
}
