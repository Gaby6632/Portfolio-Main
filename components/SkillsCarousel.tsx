'use client';
import { useEffect, useRef, useState } from 'react';
import { skills, type Skill } from '@/lib/skills';

const SPEED = 0.5; // px per frame, moves left -> right
const items = [...skills, ...skills]; // duplicated for a seamless loop

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
        className="mt-8 h-100 cursor-grab touch-pan-y bg-surface select-none overflow-hidden active:cursor-grabbing"
        onPointerDown={down}
        onPointerMove={move}
        onPointerUp={up}
        onPointerCancel={up}
        onPointerEnter={(e) => { if (e.pointerType === 'mouse') hovering.current = true; }}
        onPointerLeave={() => { hovering.current = false; }}
      >
        <div className="flex w-max mt-7 will-change-transform" ref={trackRef}>
          {items.map((s, i) => (
            <div
              key={i}
              data-i={i}
              className={`mr-5 flex w-[260px] shrink-0 flex-col gap-2.5 rounded-[18px] p-5 text-white ${s.shadow}`}
              style={{ background: `linear-gradient(to bottom right, ${s.light}, ${s.middle}, ${s.dark})` }}
            >
              <div className='flex justify-center'><img src={s.logo} alt={`${s.name} logo`} draggable={false} className="h-15 w-15 p-1 bg-white rounded-xl object-cover" /></div>
              <h3 className="text-xl text-center font-bold">{s.name}</h3>
              <p className="text-sm opacity-95">{s.short}</p>
              <img src={s.image} alt={`${s.name} logo`} draggable={false} className="mt-auto w-full rounded-xl" />
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-[100] w-full h-full grid place-items-center justify-center overflow-y-auto bg-ink/65" onClick={() => setSelected(null)}>
            <div
              className="w-[90%] max-w-[900px] m-10 flex-col gap-2.5 rounded-[18px] p-8 text-white shadow-[0_10px_30px_rgba(15,23,42,.2)]"
              onClick={(e) => e.stopPropagation()}
              style={{ background: `linear-gradient(to bottom right, ${selected.light}, ${selected.middle}, ${selected.dark}) ` }}
            >
              <div className='flex justify-center'><img src={selected.logo} alt={`${selected.name} logo`} draggable={false} className="h-15 w-15 p-1 bg-white rounded-xl object-cover" /></div>
              <h3 className="text-2xl font-bold">{selected.name}</h3>
              <p>{selected.short}</p>
              <img src={selected.image} alt={`${selected.name} logo`} className="w-full bg-white p-1 mt-6 rounded-xl" />
              <p className="mt-2">{selected.long}</p>
            </div>
        </div>
      )}
    </>
  );
}
