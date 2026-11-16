import type { BrandAnswers } from './brand-signal';

export type BrandVisualReference = {
  title: string;
  imageUrl: string;
  sourceUrl: string;
  alt: string;
  lens: string;
  search: string;
};

type ReferenceSeed = Omit<BrandVisualReference, 'imageUrl' | 'sourceUrl'> & { photoId: string };

const image = (photoId: string) =>
  `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=1200&q=82`;

const referenceSets: Record<string, ReferenceSeed[]> = {
  fashion: [
    { photoId: 'photo-1529139574466-a303027c1d8b', title: 'The editorial gesture', alt: 'Fashion editorial photograph', lens: 'Study how an assertive silhouette and clean crop can make a point of view feel immediate.', search: 'fashion editorial campaign photography' },
    { photoId: 'photo-1503342217505-b0a15ec3261c', title: 'The human detail', alt: 'Fashion portrait reference', lens: 'Look for natural movement, tactile styling, and a human subject rather than a catalogue pose.', search: 'fashion portrait natural light' },
    { photoId: 'photo-1483985988355-763728e1935b', title: 'The world around it', alt: 'Fashion retail and wardrobe reference', lens: 'Notice how context and visual rhythm can help a product sit inside a larger lifestyle.', search: 'fashion lifestyle visual identity' },
  ],
  food: [
    { photoId: 'photo-1509042239860-f550ce710b93', title: 'The daily ritual', alt: 'Coffee ritual reference photograph', lens: 'A familiar product becomes a brand moment through light, framing, and a sense of pause.', search: 'coffee brand editorial photography' },
    { photoId: 'photo-1445116572660-236099ec97a0', title: 'The gathering place', alt: 'Cafe atmosphere reference photograph', lens: 'Look for hospitality cues, material warmth, and how the environment invites people to stay.', search: 'cafe hospitality visual identity' },
    { photoId: 'photo-1495474472287-4d71bcdd2085', title: 'The crafted detail', alt: 'Coffee preparation and product detail reference', lens: 'Use close crops and visible craft to make provenance and process easier to communicate.', search: 'food beverage product art direction' },
  ],
  technology: [
    { photoId: 'photo-1518770660439-4636190af475', title: 'The signal in the system', alt: 'Technology component detail reference photograph', lens: 'Translate technical complexity into a single legible visual motif rather than decoration.', search: 'technology brand editorial art direction' },
    { photoId: 'photo-1519389950473-47ba0277781c', title: 'The people behind progress', alt: 'Technology team working reference photograph', lens: 'Balance product clarity with human context to make innovation feel useful and approachable.', search: 'technology team brand photography' },
    { photoId: 'photo-1600607687939-ce8a6c25118c', title: 'The composed interface', alt: 'Minimal architectural space reference photograph', lens: 'Borrow the restraint: strong geometry, intentional space, and one clear point of focus.', search: 'minimal technology visual identity geometry' },
  ],
  beauty: [
    { photoId: 'photo-1547887538-e3a2f32cb1cc', title: 'The sensory close-up', alt: 'Beauty and skincare product reference photograph', lens: 'Tactile surfaces and close framing can make a product story feel personal, not clinical.', search: 'beauty skincare product art direction' },
    { photoId: 'photo-1611930022073-b7a4ba5fcccd', title: 'The considered object', alt: 'Beauty product still-life reference photograph', lens: 'Notice how a restrained set and one decisive accent can make a product feel ownable.', search: 'beauty product still life branding' },
    { photoId: 'photo-1529139574466-a303027c1d8b', title: 'The human expression', alt: 'Beauty editorial portrait reference photograph', lens: 'Use expression and real texture to keep a polished identity warm and relatable.', search: 'beauty editorial portrait campaign' },
  ],
  property: [
    { photoId: 'photo-1600607687939-ce8a6c25118c', title: 'The architectural frame', alt: 'Modern residential architecture reference photograph', lens: 'Let strong lines and natural light make the space the hero without over-styling it.', search: 'real estate architecture brand photography' },
    { photoId: 'photo-1600210492486-724fe5c67fb0', title: 'The lived-in interior', alt: 'Residential interior styling reference photograph', lens: 'A lived-in detail can communicate a feeling of home better than an empty-room catalogue shot.', search: 'real estate interior editorial photography' },
    { photoId: 'photo-1600607687920-4e2a09cf159d', title: 'The material story', alt: 'Interior materials and space reference photograph', lens: "Use material, light, and proportion to make a property's character immediately legible.", search: 'interior architecture property art direction' },
  ],
  healthcare: [
    { photoId: 'photo-1576091160399-112ba8d25d1d', title: 'The human connection', alt: 'Healthcare professional and patient reference photograph', lens: 'Lead with dignity, trust, and real human interaction rather than sterile stock conventions.', search: 'healthcare brand human-centered photography' },
    { photoId: 'photo-1579684385127-1ef15d508118', title: 'The care in practice', alt: 'Clinical care reference photograph', lens: 'Show expertise through calm, clear interactions that help people feel informed and supported.', search: 'healthcare patient care visual identity' },
    { photoId: 'photo-1518770660439-4636190af475', title: 'The science behind it', alt: 'Healthcare technology detail reference photograph', lens: 'Use technical detail sparingly, connecting evidence and process back to patient benefit.', search: 'health technology brand art direction' },
  ],
  other: [
    { photoId: 'photo-1513364776144-60967b0f800f', title: 'The expressive mark', alt: 'Creative practice and color reference photograph', lens: 'Notice how a single confident gesture can give an identity a repeatable visual signature.', search: 'creative brand expressive visual identity' },
    { photoId: 'photo-1600607687939-ce8a6c25118c', title: 'The quiet frame', alt: 'Minimal composition and architecture reference photograph', lens: 'Use negative space and a clear focal point to help the main idea land.', search: 'editorial brand composition minimal' },
    { photoId: 'photo-1503342217505-b0a15ec3261c', title: 'The human point of view', alt: 'Portrait and natural-light reference photograph', lens: 'Bring the audience into the story through natural expression and an unforced moment.', search: 'brand portrait photography natural light' },
  ],
};

function getReferenceSet(industry: string) {
  const normalized = industry.toLowerCase();
  if (/fashion|lifestyle/.test(normalized)) return referenceSets.fashion;
  if (/food|beverage|restaurant|coffee/.test(normalized)) return referenceSets.food;
  if (/technology|saas|software|tech/.test(normalized)) return referenceSets.technology;
  if (/beauty|wellness|cosmetic|skin/.test(normalized)) return referenceSets.beauty;
  if (/real estate|property|architecture/.test(normalized)) return referenceSets.property;
  if (/health|medical|clinic/.test(normalized)) return referenceSets.healthcare;
  return referenceSets.other;
}

export function getBrandVisualReferences(answers: BrandAnswers): BrandVisualReference[] {
  return getReferenceSet(answers.industry).map(({ photoId, ...reference }) => ({
    ...reference,
    imageUrl: image(photoId),
    sourceUrl: image(photoId),
  }));
}
