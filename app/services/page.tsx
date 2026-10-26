import { services } from '@/lib/services';
import { h1 } from '@/lib/ui';
import Image from 'next/image'

export default function Services() {
  return (
    <section className="container-x min-h-[70vh] py-16">
      <h1 className={h1}>Services</h1>
      <div className="mt-5 grid gap-8">
        {services.map((s) => (
          <article key={s.title} className="grid gap-10 rounded-[18px] border border-line bg-surface p-4 md:grid-cols-2">
            {/* <Image src={s.image} alt={s.title} className="order-first h-56 w-full rounded-xl object-cover md:order-0 md:h-full" /> */}
            <Image
              src={s.image}
              alt={s.title}
              width={600}
              height={400}
              className="order-first h-56 w-full rounded-xl object-cover md:order-0 md:h-full"
            />
            <div className="flex flex-col items-start">
              <h2 className="mb-3 text-3xl font-bold">{s.title}</h2>
              <h5 className="mb-3 text-1xl font-bold">{s.highlight}</h5>
              <p className="mb-6 text-muted">{s.description}</p>
              <p className="mb-6 text-muted">{s.description2}</p>
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
