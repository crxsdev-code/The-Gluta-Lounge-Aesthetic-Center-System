import { ShieldCheck, Cpu, HeartHandshake, Leaf } from 'lucide-react';

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Safe & Professional',
    description: 'Care provided by qualified professionals.',
  },
  {
    icon: Cpu,
    title: 'Modern Technology',
    description: 'A focus on appropriate equipment and treatment options.',
  },
  {
    icon: HeartHandshake,
    title: 'Personalized Care',
    description: 'Treatment options discussed according to individual needs.',
  },
  {
    icon: Leaf,
    title: 'Comfortable Environment',
    description: 'A welcoming and relaxing clinic experience.',
  },
];

export default function Benefits() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container-lux">
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-champagne/60 bg-champagne/60 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group flex flex-col items-center bg-white px-6 py-10 text-center transition-colors duration-300 hover:bg-ivory/70 lg:px-8"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-champagne/70 bg-ivory transition-colors duration-300 group-hover:border-gold/60 group-hover:bg-gold/10">
                <benefit.icon size={22} strokeWidth={1.5} className="text-gold" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-heading text-[21px] font-semibold text-charcoal">
                {benefit.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-muted">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}