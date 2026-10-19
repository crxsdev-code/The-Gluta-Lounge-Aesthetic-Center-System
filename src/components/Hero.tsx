import { ArrowRight, Sparkles } from 'lucide-react';
import { scrollToSection } from '../lib/scroll';
import { unsplash } from '../data/treatments';

const HERO_PHOTO = 'photo-1524504388940-b1c1722653e1';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-ivory">
      {/* Soft ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-24 h-[420px] w-[420px] rounded-full bg-champagne/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-24 h-[360px] w-[360px] rounded-full bg-cream/60 blur-3xl"
      />

      <div className="container-lux relative">
        <div className="grid items-center gap-10 py-28 lg:min-h-screen lg:grid-cols-2 lg:gap-16 lg:py-24 xl:gap-24">
          {/* Left — copy */}
          <div className="animate-fade-up order-2 text-center lg:order-1 lg:text-left">
            <span className="eyebrow justify-center lg:justify-start">
              The Gluta Lounge &amp; Aesthetic Center – QC
            </span>

            <h1 className="display mt-6 text-charcoal">
              Enhance Your{' '}
              <span className="italic text-gold">Natural Beauty</span>
            </h1>

            <p className="lead mx-auto mt-6 max-w-[30rem] lg:mx-0">
              Discover personalized aesthetic and wellness treatments in a
              comfortable, welcoming environment designed around your beauty
              goals.
            </p>

            <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center sm:items-center lg:justify-start">
              <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="btn btn-primary">
                Book an Appointment
                <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a href="#treatments" onClick={(e) => scrollToSection(e, '#treatments')} className="btn btn-outline">
                Explore Treatments
              </a>
            </div>

            {/* Trust indicators */}
            <dl className="mx-auto mt-12 flex max-w-[26rem] items-center justify-center divide-x divide-champagne/70 border-y border-champagne/60 py-5 lg:mx-0 lg:justify-start">
              <div className="flex-1 px-4 text-center lg:text-left">
                <dt className="sr-only">Google rating</dt>
                <dd className="font-heading text-[26px] font-semibold leading-none text-charcoal">4.5</dd>
                <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">Star Rating</p>
              </div>
              <div className="flex-1 px-4 text-center lg:text-left">
                <dt className="sr-only">Google reviews</dt>
                <dd className="font-heading text-[26px] font-semibold leading-none text-charcoal">131+</dd>
                <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">Google Reviews</p>
              </div>
              <div className="flex-1 px-4 text-center lg:text-left">
                <dt className="sr-only">Location</dt>
                <dd className="font-heading text-[26px] font-semibold leading-none text-charcoal">QC</dd>
                <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">Metro Manila</p>
              </div>
            </dl>
          </div>

          {/* Right — portrait */}
          <div className="animate-fade-up delay-200 order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="relative w-full max-w-[26rem] sm:max-w-[30rem] lg:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[10px] ring-1 ring-champagne/60 shadow-[0_40px_80px_-40px_rgba(33,29,26,0.35)]">
                <img
                  src={unsplash(HERO_PHOTO, 900, 1125)}
                  srcSet={`${unsplash(HERO_PHOTO, 600, 750)} 600w, ${unsplash(HERO_PHOTO, 900, 1125)} 900w, ${unsplash(HERO_PHOTO, 1200, 1500)} 1200w`}
                  sizes="(min-width: 1024px) 45vw, (min-width: 640px) 70vw, 90vw"
                  alt="Client with radiant, natural-looking skin"
              className="h-full w-full object-cover object-center"
                  fetchPriority="high"
                  decoding="async"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-charcoal/15 via-transparent to-transparent" />
              </div>
              {/* Thin accent frame */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-4 -left-4 -z-10 hidden h-32 w-32 rounded-[10px] border border-gold/40 lg:block"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-3 -top-3 -z-10 hidden h-20 w-20 rounded-full bg-gold/10 lg:block"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom hairline */}
      <div className="container-lux">
        <div className="flex items-center gap-4 pb-8 text-gold">
          <Sparkles size={16} aria-hidden="true" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-muted">
            Personalized aesthetic &amp; wellness care
          </span>
          <span className="h-px flex-1 bg-champagne" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}