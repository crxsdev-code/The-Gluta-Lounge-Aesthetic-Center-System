import { useState } from 'react';
import { ArrowRight, Check, Minus, Plus } from 'lucide-react';
import { scrollToSection } from '../lib/scroll';
import { unsplash } from '../data/treatments';

const ABOUT_PHOTO = 'photo-1629909615184-74f495363b67';
const DETAIL_PHOTO = 'photo-1600334089648-b0d9d3028eb2';

const highlights = [
  'Personalized treatment planning',
  'Comfortable, private treatment rooms',
  'A full range of aesthetic & wellness services',
  'Friendly staff to guide you through each visit',
];

export default function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="bg-white py-16 lg:py-24 xl:py-28">
      <div className="container-lux">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* Media */}
          <div className="relative animate-fade-up">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[10px] ring-1 ring-champagne/60 shadow-[0_30px_60px_-35px_rgba(33,29,26,0.4)] sm:aspect-[5/4] lg:aspect-[4/5]">
              <img
                src={unsplash(ABOUT_PHOTO, 1000, 1250)}
                srcSet={`${unsplash(ABOUT_PHOTO, 700, 875)} 700w, ${unsplash(ABOUT_PHOTO, 1000, 1250)} 1000w, ${unsplash(ABOUT_PHOTO, 1400, 1750)} 1400w`}
                sizes="(min-width: 1024px) 46vw, 92vw"
                alt="Warm, welcoming reception area at The Gluta Lounge"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Inset detail image */}
            <div className="absolute -bottom-6 -right-2 hidden h-40 w-36 overflow-hidden rounded-[8px] border-4 border-white shadow-xl sm:block lg:h-52 lg:w-44">
              <img
                src={unsplash(DETAIL_PHOTO, 400, 500)}
                alt="Serene treatment corner inside the clinic"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Copy */}
          <div className="animate-fade-up delay-200 lg:pl-4">
            <span className="eyebrow">Our Clinic</span>
            <h2 className="heading-xl mt-4 text-charcoal">
              About The <span className="italic">Gluta Lounge</span>
            </h2>
            <div className="rule-gold mt-6" aria-hidden="true" />
            <p className="lead mt-6">
              The Gluta Lounge &amp; Aesthetic Center is an aesthetic and
              wellness destination in Quezon City, Metro Manila — built around
              personalized service and a comfortable client experience.
            </p>
            <p className="lead mt-4">
              From facials and skin rejuvenation to contouring and injectables,
              every visit begins with a conversation about your goals so the
              team can discuss the options suited to you.
            </p>

            <ul className="mt-7 grid gap-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14.5px] leading-relaxed text-charcoal/85">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15">
                    <Check size={12} strokeWidth={2.5} className="text-gold" aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Expandable extra info */}
            <div
              id="about-more"
              className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
                expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div className="mt-7 rounded-lg border border-champagne/70 bg-ivory/70 p-6">
                  <h3 className="font-heading text-[19px] font-semibold text-charcoal">
                    What to expect
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-muted">
                    Visits begin with a consultation so treatment options can be
                    discussed openly. The team will explain each service, answer
                    questions, and help you choose an approach aligned with your
                    comfort and goals. For the latest service availability,
                    simply call the clinic.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => setExpanded((v) => !v)}
                aria-expanded={expanded}
                aria-controls="about-more"
                className="btn btn-outline"
              >
                {expanded ? (
                  <>
                    <Minus size={15} aria-hidden="true" /> Show Less
                  </>
                ) : (
                  <>
                    <Plus size={15} aria-hidden="true" /> Learn More
                  </>
                )}
              </button>
              <a
                href="#treatments"
                onClick={(e) => scrollToSection(e, '#treatments')}
                className="group inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-charcoal transition-colors hover:text-gold"
              >
                Explore Our Treatments
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}