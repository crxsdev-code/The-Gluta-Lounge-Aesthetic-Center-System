import { ArrowRight } from 'lucide-react';
import { scrollToSection } from '../lib/scroll';
import { unsplash } from '../data/treatments';

const PROMO_PHOTO = 'photo-1487412947147-5cebf100ffc2';

export default function PromotionalBanner() {
  return (
    <section className="bg-cream py-16 lg:py-24 xl:py-28">
      <div className="container-lux">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* Content */}
          <div className="animate-fade-up order-2 text-center lg:order-1 lg:text-left">
            <span className="eyebrow justify-center lg:justify-start">Your Glow Awaits</span>
            <h2 className="heading-xl mt-4 text-charcoal">
              Beauty, Wellness &amp; <span className="italic">Self-Care</span> in
              One Place
            </h2>
            <p className="lead mx-auto mt-5 max-w-[30rem] lg:mx-0">
              Explore aesthetic services and discover options that fit your
              personal goals — from skin rejuvenation to body contouring.
            </p>
            <a
              href="#treatments"
              onClick={(e) => scrollToSection(e, '#treatments')}
              className="btn btn-primary mt-8"
            >
              Explore Our Treatments
              <ArrowRight size={15} aria-hidden="true" />
            </a>
          </div>

          {/* Image */}
          <div className="animate-fade-up delay-200 order-1 lg:order-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[10px] ring-1 ring-champagne/70 shadow-[0_30px_60px_-35px_rgba(33,29,26,0.4)]">
              <img
                src={unsplash(PROMO_PHOTO, 1000, 750)}
                srcSet={`${unsplash(PROMO_PHOTO, 700, 525)} 700w, ${unsplash(PROMO_PHOTO, 1000, 750)} 1000w, ${unsplash(PROMO_PHOTO, 1400, 1050)} 1400w`}
                sizes="(min-width: 1024px) 46vw, 92vw"
                alt="Curated beauty and wellness essentials"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}