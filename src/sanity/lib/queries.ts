import { defineQuery } from 'next-sanity';

const postFields = `
  _id,
  _updatedAt,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  featured,
  noIndex,
  seoTitle,
  seoDescription,
  canonicalUrl,
  featuredImage { ..., asset->{_id, url, metadata{dimensions}} },
  seoImage { ..., asset->{_id, url, metadata{dimensions}} },
  author->{name, "slug": slug.current, bio, image{..., asset->{_id, url, metadata{dimensions}}}},
  "categories": coalesce(categories[]->{title, "slug": slug.current, description}, []),
  tags,
  body[]{
    ...,
    _type == "image" => {..., asset->{_id, url, metadata{dimensions}}}
  }
`;

const publishedFilter = '_type == "post" && defined(slug.current) && ($includeDrafts == true || (defined(publishedAt) && publishedAt <= now()))';

export const blogPostsQuery = defineQuery(`*[${publishedFilter}] | order(publishedAt desc) {${postFields}}`);

export const listingPostsQuery = defineQuery(`
  *[${publishedFilter}
    && (!defined($category) || $category in categories[]->slug.current)
    && (!defined($search) || title match $search || excerpt match $search)
    && (!defined($exclude) || _id != $exclude)
  ] | order(publishedAt desc) [$skip...$end] {${postFields}}
`);

export const listingCountQuery = defineQuery(`
  count(*[${publishedFilter}
    && (!defined($category) || $category in categories[]->slug.current)
    && (!defined($search) || title match $search || excerpt match $search)
    && (!defined($exclude) || _id != $exclude)
  ])
`);

export const featuredPostQuery = defineQuery(`*[${publishedFilter} && featured == true] | order(publishedAt desc)[0]{${postFields}}`);

export const postBySlugQuery = defineQuery(`*[${publishedFilter} && slug.current == $slug][0]{${postFields}}`);

export const categoryBySlugQuery = defineQuery(`
  *[_type == "category" && slug.current == $slug][0]{title, "slug": slug.current, description}
`);

export const categoriesQuery = defineQuery(`*[_type == "category"] | order(title asc){title, "slug": slug.current}`);

export const categoryPostsQuery = defineQuery(`
  *[${publishedFilter} && $slug in categories[]->slug.current]
  | order(publishedAt desc) [$skip...$end] {${postFields}}
`);

export const categoryCountQuery = defineQuery(`
  count(*[${publishedFilter} && $slug in categories[]->slug.current])
`);

export const relatedPostsQuery = defineQuery(`
  *[${publishedFilter} && _id != $id && count((categories[]->slug.current)[@ in $categoryIds]) > 0]
  | order(publishedAt desc)[0...3] {${postFields}}
`);
