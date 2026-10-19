import { useEffect, useState } from 'react';
import { X, Phone } from 'lucide-react';
import { treatments, unsplash } from '../data/treatments';
import type { Treatment } from '../data/treatments';
import TreatmentCard from './TreatmentCard';

const PHONE_HREF = 'tel:09352056384';

export default function Treatments() {
  const [selected, setSelected] = useState<Treatment | null>(null);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [selected]);

  return (
    <>
      <section id="treatments" className="bg-ivory py-16 lg:py-24 xl:py-28">
        <div className="container-lux">
          {/* Section header */}
          <div className="mx-auto max-w-[40rem] text-center">
            <span className="eyebrow justify-center">Services</span>
            <h2 className="heading-xl mt-4 text-charcoal">Our Treatments</h2>
            <p className="lead mt-4">
              Explore aesthetic and wellness services and find an option suited
              to your personal goals.
            </p>
          </div>

          {/* Grid */}
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4">
            {treatments.map((treatment) => (
              <TreatmentCard key={treatment.id} treatment={treatment} onSelect={setSelected} />
            ))}
          </div>
        </div>
      </section>

      {/* Detail modal — bottom sheet on mobile, centered card on desktop */}
      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center sm:p-6"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="treatment-modal-title"
        >
          <div className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm animate-fade-in" />
          <div
            className="relative flex max-h-[92vh] w-full max-w-[36rem] flex-col overflow-hidden rounded-t-2xl bg-white shadow-2xl animate-scale-in sm:rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              autoFocus
              className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-charcoal shadow-sm backdrop-blur-sm transition-colors hover:text-gold"
              aria-label="Close details"
            >
              <X size={18} />
            </button>

            <div className="relative aspect-[16/9] w-full shrink-0 overflow-hidden sm:aspect-[16/8]">
              <img
                src={unsplash(selected.photoId, 900, 506)}
                alt={selected.alt}
                className="h-full w-full object-cover"
                decoding="async"
              />
            </div>

            <div className="overflow-y-auto p-6 sm:p-8">
              <span className="eyebrow">Treatment</span>
              <h3 id="treatment-modal-title" className="heading-lg mt-3 text-charcoal">
                {selected.name}
              </h3>
              <p className="lead mt-4">{selected.description}</p>
              <p className="mt-4 text-[13px] leading-relaxed text-muted/85">
                For availability, pricing, and scheduling, please contact the
                clinic directly. Our team will gladly discuss the options suited
                to your goals and answer any questions.
              </p>
              <a href={PHONE_HREF} className="btn btn-primary mt-7 w-full sm:w-auto">
                <Phone size={15} aria-hidden="true" />
                Contact the Clinic
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}