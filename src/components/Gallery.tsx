import { Expand } from 'lucide-react';
import { useState } from 'react';
import { galleryImages } from '../data/gallery';
import GalleryLightbox from './GalleryLightbox';

export default function Gallery() {
  const [index, setIndex] = useState<number | null>(null);

  const close = () => setIndex(null);
  const prev = () =>
    setIndex((i) => (i === null ? i : (i - 1 + galleryImages.length) % galleryImages.length));
  const next = () =>
    setIndex((i) => (i === null ? i : (i + 1) % galleryImages.length));

  return (
    <>
      <section id="gallery" className="bg-white py-16 lg:py-24 xl:py-28">
        <div className="container-lux">
          <div className="mx-auto max-w-[40rem] text-center">
            <span className="eyebrow justify-center">Explore</span>
            <h2 className="heading-xl mt-4 text-charcoal">Our Gallery</h2>
            <p className="lead mt-4">
              A glimpse of the clinic, its environment, and its aesthetic
              services.
            </p>
          </div>

          {/* Bento grid: featured tile on desktop, clean stack on mobile */}
          <div className="mt-12 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 sm:auto-rows-[240px] lg:mt-16 lg:auto-rows-[260px] lg:grid-cols-3">
            {galleryImages.map((image, i) => (
              <button
                key={image.id}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Open image ${i + 1} of ${galleryImages.length}: ${image.alt}`}
                className={`group relative overflow-hidden rounded-lg ring-1 ring-champagne/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${
                  i === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
                }`}
              >
                <img
                  src={image.src}
                  srcSet={image.srcSet}
                  sizes={i === 0 ? '(min-width: 1024px) 62vw, 92vw' : '(min-width: 1024px) 30vw, 92vw'}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-charcoal/45 via-transparent to-transparent opacity-40 transition-opacity duration-500 group-hover:opacity-70"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-charcoal backdrop-blur-sm">
                  {image.category}
                </span>
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-12 w-12 scale-90 items-center justify-center rounded-full bg-white/90 text-charcoal opacity-0 shadow-sm backdrop-blur-sm transition-all duration-500 group-hover:scale-100 group-hover:opacity-100">
                    <Expand size={18} aria-hidden="true" />
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {index !== null && (
        <GalleryLightbox
          images={galleryImages}
          currentIndex={index}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </>
  );
}