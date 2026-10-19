import { useCallback, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { unsplash } from '../data/treatments';
import type { GalleryImage } from '../data/gallery';

interface Props {
  images: GalleryImage[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function GalleryLightbox({ images, currentIndex, onClose, onPrev, onNext }: Props) {
  const current = images[currentIndex];
  const touchX = useRef<number | null>(null);

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [handleKey]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.changedTouches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 50) (dx > 0 ? onPrev : onNext)();
    touchX.current = null;
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/92 px-4 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Gallery image: ${current.alt}`}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25 lg:right-6 lg:top-6"
        aria-label="Close lightbox"
      >
        <X size={20} />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25 lg:left-6 lg:h-12 lg:w-12"
        aria-label="Previous image"
      >
        <ChevronLeft size={24} />
      </button>

      <figure
        className="flex max-h-full max-w-[90vw] flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={unsplash(current.photoId, 1400, 1120)}
          alt={current.alt}
          className="max-h-[78vh] w-auto rounded-lg object-contain shadow-2xl"
          decoding="async"
        />
        <figcaption className="mt-4 max-w-[90vw] text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
            {current.category}
          </span>
          <p className="mt-1 text-[13.5px] text-white/80">{current.alt}</p>
        </figcaption>
      </figure>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25 lg:right-6 lg:h-12 lg:w-12"
        aria-label="Next image"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[13px] tracking-[0.1em] text-white/70">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}