// Central helper for responsive Unsplash imagery (verified live).
export const unsplash = (photoId: string, w: number, h: number) =>
  `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

export interface Treatment {
  id: string;
  name: string;
  description: string;
  photoId: string;
  alt: string;
}

export const treatments: Treatment[] = [
  {
    id: 'hifu',
    name: 'HIFU',
    description:
      'A non-invasive skin tightening treatment that uses focused ultrasound energy to target deeper skin layers for a firmer appearance.',
    photoId: 'photo-1570172619644-dfd03ed5d881',
    alt: 'Non-invasive skin tightening treatment session',
  },
  {
    id: 'lip-fillers',
    name: 'Lip Fillers',
    description:
      'Enhance lip volume and shape with dermal filler treatments, tailored to achieve a natural and balanced look.',
    photoId: 'photo-1531746020798-e6953c6e8e04',
    alt: 'Close-up of naturally enhanced lips',
  },
  {
    id: 'chin-filler',
    name: 'Chin Filler',
    description:
      'Improve chin definition and facial balance with carefully placed dermal filler injections.',
    photoId: 'photo-1612817288484-6f916006741a',
    alt: 'Facial profile showing balanced chin contour',
  },
  {
    id: 'glutathione-iv-drip',
    name: 'Glutathione IV Drip',
    description:
      'An intravenous drip therapy delivering glutathione, an antioxidant associated with skin brightening and overall wellness.',
    photoId: 'photo-1576091160550-2173dba999ef',
    alt: 'Intravenous wellness drip therapy',
  },
  {
    id: 'facial-treatments',
    name: 'Facial Treatments',
    description:
      'Professional facial services designed to cleanse, exfoliate, and nourish the skin for a refreshed complexion.',
    photoId: 'photo-1616394584738-fc6e612e71b9',
    alt: 'Relaxing professional facial treatment',
  },
  {
    id: 'botox',
    name: 'Botox',
    description:
      'Botulinum toxin injections to help reduce the appearance of fine lines and wrinkles for a smoother look.',
    photoId: 'photo-1629909613654-28e377c37b09',
    alt: 'Precision aesthetic injection treatment',
  },
  {
    id: 'skin-rejuvenation',
    name: 'Skin Rejuvenation',
    description:
      'A range of treatments aimed at revitalizing skin texture, tone, and radiance for a youthful appearance.',
    photoId: 'photo-1552693673-1bf958298935',
    alt: 'Radiant, rejuvenated skin close-up',
  },
  {
    id: 'body-contouring',
    name: 'Body Contouring',
    description:
      'Non-surgical body shaping options that target specific areas for a more sculpted and defined silhouette.',
    photoId: 'photo-1519824145371-296894a0daa9',
    alt: 'Body contouring and wellness treatment',
  },
];
