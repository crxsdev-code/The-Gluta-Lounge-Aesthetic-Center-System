import { ArrowUpRight } from 'lucide-react';
import { unsplash } from '../data/treatments';
import type { Treatment } from '../data/treatments';

interface TreatmentCardProps {
  treatment: Treatment;
  onSelect: (treatment: Treatment) => void;
}

export default function TreatmentCard({ treatment, onSelect }: TreatmentCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(treatment)}
      aria-label={`View details about ${treatment.name}`}
      className="card-lux group flex h-full w-full flex-col overflow-hidden text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
    >
      {/* Image */}
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <img
          src={unsplash(treatment.photoId, 600, 750)}
          srcSet={`${unsplash(treatment.photoId, 400, 500)} 400w, ${unsplash(treatment.photoId, 600, 750)} 600w, ${unsplash(treatment.photoId, 900, 1125)} 900w`}
          sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
          alt={treatment.alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-charcoal/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        <span className="absolute right-4 top-4 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-white/90 text-charcoal opacity-0 shadow-sm backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight size={16} aria-hidden="true" />
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 lg:p-6">
        <h3 className="font-heading text-[21px] font-semibold text-charcoal transition-colors duration-300 group-hover:text-gold lg:text-[23px]">
          {treatment.name}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-[13.5px] leading-relaxed text-muted">
          {treatment.description}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-gold">
          View Details
          <ArrowUpRight size={13} aria-hidden="true" />
        </span>
      </div>
    </button>
  );
}