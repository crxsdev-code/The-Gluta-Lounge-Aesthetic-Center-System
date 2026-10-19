import { unsplash } from './treatments';

export interface GalleryImage {
  id: number;
  photoId: string;
  src: string;
  srcSet: string;
  alt: string;
  category: string;
  wide?: boolean;
}

const build = (photoId: string, w: number, h: number) => unsplash(photoId, w, h);

// Editorial bento layout: first image is the large hero tile on desktop.
type RawImage = Pick<GalleryImage, 'photoId' | 'alt' | 'category'> &
  Partial<Pick<GalleryImage, 'wide'>>;

const raw: RawImage[] = [
  { photoId: 'photo-1629909615184-74f495363b67', alt: 'Elegant clinic reception area with warm lighting', category: 'Reception', wide: true },
  { photoId: 'photo-1631217868264-e5b90bb7e133', alt: 'Clean treatment room prepared for a session', category: 'Treatment Room' },
  { photoId: 'photo-1560750588-73207b1ef5b8', alt: 'Relaxing spa and treatment environment', category: 'Treatment' },
  { photoId: 'photo-1522337360788-8b13dee7a37e', alt: 'Thoughtfully designed clinic interior', category: 'Interior' },
  { photoId: 'photo-1540555700478-4be289fbecef', alt: 'Serene wellness and self-care setting', category: 'Wellness' },
  { photoId: 'photo-1512207846876-bb54ef5056fe', alt: 'Curated aesthetic products and details', category: 'Details' },
];

export const galleryImages: GalleryImage[] = raw.map((img, index) => ({
  id: index + 1,
  photoId: img.photoId,
  src: build(img.photoId, 900, 720),
  srcSet: `${build(img.photoId, 600, 480)} 600w, ${build(img.photoId, 900, 720)} 900w, ${build(img.photoId, 1400, 1120)} 1400w`,
  alt: img.alt,
  category: img.category,
  wide: img.wide ?? false,
}));
