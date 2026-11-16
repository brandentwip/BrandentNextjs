import { sanityClient } from './client';
import { draftMode } from 'next/headers';

export const BLOG_REVALIDATE_SECONDS = 60;

export async function sanityFetch<T>(
  query: string,
  params: Record<string, string | number | string[] | boolean | null | undefined> = {},
): Promise<T> {
  const isDraftMode = (await draftMode()).isEnabled;
  const queryParams = query.includes('$includeDrafts') ? { ...params, includeDrafts: isDraftMode } : params;

  if (isDraftMode) {
    const token = process.env.SANITY_API_READ_TOKEN;
    if (!token) {
      throw new Error('Draft preview requires a server-side SANITY_API_READ_TOKEN.');
    }
    return sanityClient.withConfig({ token, useCdn: false, perspective: 'previewDrafts' })
      .fetch<T>(query, queryParams, { cache: 'no-store' });
  }

  return sanityClient.fetch<T>(query, queryParams, {
    next: { revalidate: BLOG_REVALIDATE_SECONDS, tags: ['sanity', 'blog'] },
  });
}
