import { h1 } from '@/lib/ui';

export default function About() {
  return (
    <section className="container-x grid min-h-[70vh] items-center gap-12 py-16 md:grid-cols-2">
      <div>
        <h1 className={h1}>About me</h1>
        <p>Write your story here: who you are, where you are from, what you do and what drives you.</p>
      </div>
      <img className="w-full rounded-2xl" src="https://placehold.co/500x600?text=Your+Photo" alt="" />
    </section>
  );
}
