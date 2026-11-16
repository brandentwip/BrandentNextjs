import { defineField, defineType } from 'sanity';

const articleBody = [
  { title: 'Normal', value: 'normal' },
  { title: 'Heading 2', value: 'h2' },
  { title: 'Heading 3', value: 'h3' },
  { title: 'Quote', value: 'blockquote' },
];

export const post = defineType({
  name: 'post',
  title: 'Blog post',
  type: 'document',
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', group: 'content', validation: (rule) => rule.required().max(120) }),
    defineField({
      name: 'slug',
      title: 'URL slug',
      type: 'slug',
      group: 'content',
      options: { source: 'title', maxLength: 96, slugify: (input) => input.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').slice(0, 96) },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: 'excerpt', title: 'Short description', type: 'text', rows: 3, group: 'content', validation: (rule) => rule.required().max(240) }),
    defineField({
      name: 'featuredImage',
      title: 'Featured image',
      type: 'image',
      group: 'content',
      options: { hotspot: true },
      fields: [defineField({ name: 'alt', title: 'Alternative text', type: 'string', validation: (rule) => rule.required() })],
      validation: (rule) => rule.required(),
    }),
    defineField({ name: 'author', title: 'Author', type: 'reference', to: [{ type: 'author' }], group: 'content', validation: (rule) => rule.required() }),
    defineField({ name: 'publishedAt', title: 'Publication date', type: 'datetime', group: 'content', validation: (rule) => rule.required() }),
    defineField({ name: 'categories', title: 'Categories', type: 'array', of: [{ type: 'reference', to: [{ type: 'category' }] }], group: 'content' }),
    defineField({ name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }], options: { layout: 'tags' }, group: 'content' }),
    defineField({ name: 'featured', title: 'Featured article', type: 'boolean', initialValue: false, group: 'content' }),
    defineField({
      name: 'body',
      title: 'Article',
      type: 'array',
      group: 'content',
      of: [
        {
          type: 'block',
          styles: articleBody,
          marks: {
            decorators: [{ title: 'Bold', value: 'strong' }, { title: 'Italic', value: 'em' }, { title: 'Code', value: 'code' }],
            annotations: [
              {
                name: 'link',
                title: 'Link',
                type: 'object',
                fields: [
                  defineField({ name: 'href', title: 'URL', type: 'url', validation: (rule) => rule.required() }),
                  defineField({ name: 'blank', title: 'Open in new tab', type: 'boolean', initialValue: false }),
                ],
              },
            ],
          },
          lists: [{ title: 'Bullet', value: 'bullet' }, { title: 'Numbered', value: 'number' }],
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({ name: 'alt', title: 'Alternative text', type: 'string', validation: (rule) => rule.required() }),
            defineField({ name: 'caption', title: 'Caption', type: 'string' }),
            defineField({ name: 'fullWidth', title: 'Full-width image', type: 'boolean', initialValue: false }),
          ],
        },
      ],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({ name: 'seoTitle', title: 'SEO title', type: 'string', group: 'seo', validation: (rule) => rule.max(70) }),
    defineField({ name: 'seoDescription', title: 'SEO meta description', type: 'text', rows: 2, group: 'seo', validation: (rule) => rule.max(160) }),
    defineField({ name: 'seoImage', title: 'Social sharing image', type: 'image', group: 'seo', options: { hotspot: true } }),
    defineField({ name: 'canonicalUrl', title: 'Canonical URL', type: 'url', group: 'seo' }),
    defineField({ name: 'noIndex', title: 'Hide from search engines', type: 'boolean', initialValue: false, group: 'seo' }),
  ],
  orderings: [{ title: 'Publication date, newest', name: 'publishedAtDesc', by: [{ field: 'publishedAt', direction: 'desc' }] }],
  preview: { select: { title: 'title', subtitle: 'publishedAt', media: 'featuredImage' } },
});
