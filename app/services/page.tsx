import { services } from '@/lib/services';
import { h1 } from '@/lib/ui';

export default function Services() {
  return (
    <section className="container-x min-h-[70vh] py-16">
      <h1 className={h1}>Services</h1>
      <div className="mt-8 grid gap-8">
        {services.map((s) => (
          <article key={s.title} className="grid gap-8 rounded-[18px] border border-line bg-surface p-6 md:grid-cols-2">
            <img src={s.image} alt={s.title} className="order-first h-56 w-full rounded-xl object-cover md:order-none md:h-full" />
            <div className="flex flex-col items-start">
              <h2 className="mb-3 text-2xl font-bold">{s.title}</h2>
              <p className="mb-6 text-muted">{s.description}</p>
              <a
                href={s.orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto self-end rounded-[10px] border-2 border-accent bg-accent px-7 py-2.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-transparent hover:text-accent hover:shadow-lg hover:shadow-accent/25"
              >
                Order
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
