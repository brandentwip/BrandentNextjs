import { createImageUrlBuilder } from '@sanity/image-url';
import type { Image } from 'sanity';
import { sanityClient } from './client';

const builder = createImageUrlBuilder(sanityClient);

export function imageUrl(image: Image | null | undefined, width: number, height?: number) {
  if (!image?.asset) return undefined;
  const imageBuilder = builder.image(image).width(width).auto('format').fit('max');
  return height ? imageBuilder.height(height).url() : imageBuilder.url();
}
