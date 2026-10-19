import { Star, ExternalLink, Quote } from 'lucide-react';

const GOOGLE_MAPS_LINK =
  'https://www.google.com/maps/search/?api=1&query=The+Gluta+Lounge+%26+Aesthetic+Center+QC+Quezon+City';

interface Review {
  id: number;
  rating: number;
  text: string;
}

// NOTE (development): The 4.5 / 131 figure comes from the supplied Google
// Maps data. The individual cards below are clearly-marked placeholders and
// must be replaced with verified public review excerpts before publication.
const reviews: Review[] = [
  {
    id: 1,
    rating: 5,
    text: 'Very clean and welcoming clinic. The staff were friendly and explained everything before the procedure. Will definitely come back!',
  },
  {
    id: 2,
    rating: 5,
    text: 'Great experience! The treatment room was well-maintained and the process was comfortable. Highly recommended for anyone looking for quality aesthetic services.',
  },
  {
    id: 3,
    rating: 4,
    text: 'Nice ambiance and professional service. The clinic is conveniently located and the staff took the time to address all my questions.',
  },
];

function Stars({ rating, size = 15 }: { rating: number; size?: number }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={i < rating ? 'fill-gold text-gold' : 'text-champagne'}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="bg-ivory py-16 lg:py-24 xl:py-28">
      <div className="container-lux">
        {/* Header */}
        <div className="mx-auto max-w-[40rem] text-center">
          <span className="eyebrow justify-center">Testimonials</span>
          <h2 className="heading-xl mt-4 text-charcoal">What Our Clients Say</h2>
        </div>

        {/* Rating summary bar */}
        <div className="mx-auto mt-10 flex max-w-[46rem] flex-col items-center gap-5 rounded-xl border border-champagne/60 bg-white px-6 py-7 sm:flex-row sm:gap-8 sm:px-8">
          <div className="flex flex-col items-center sm:items-start">
            <div className="flex items-baseline gap-1.5">
              <span className="font-heading text-[52px] font-semibold leading-none text-charcoal">4.5</span>
              <span className="text-[14px] text-muted">/5</span>
            </div>
            <div className="mt-2">
              <Stars rating={4} size={18} />
            </div>
          </div>
          <div className="hidden h-16 w-px bg-champagne sm:block" aria-hidden="true" />
          <div className="text-center sm:text-left">
            <p className="font-heading text-[20px] font-semibold text-charcoal">
              Rated Excellent on Google
            </p>
            <p className="mt-1 text-[13px] text-muted">
              Based on{' '}
              <a
                href={GOOGLE_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-gold underline-offset-2 hover:underline"
              >
                131 Google reviews
              </a>
            </p>
          </div>
        </div>

        {/* Cards — horizontal scroll-snap on mobile, grid from md up */}
        <div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="card-lux flex w-[85%] shrink-0 snap-start flex-col p-6 sm:w-[70%] md:w-auto md:shrink"
            >
              <Stars rating={review.rating} />
              <p className="mt-4 flex-1 text-[14.5px] italic leading-relaxed text-charcoal/80">
                <Quote size={16} className="mb-1 mr-1 inline text-gold/60" aria-hidden="true" />
                {review.text}
              </p>
              <p className="mt-5 border-t border-champagne/50 pt-4 text-[11px] italic text-muted/70">
                Placeholder review — replace with verified content
              </p>
            </article>
          ))}
        </div>

        <div className="mt-9 text-center">
          <a
            href={GOOGLE_MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-gold transition-colors hover:text-charcoal"
          >
            View All Reviews on Google
            <ExternalLink size={13} className="transition-transform duration-300 group-hover:-translate-y-0.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}