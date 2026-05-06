/**
 * Sanity Schema: Post (Blog Article)
 * Maps directly to the blogPosts.js data shape.
 *
 * INSTALL: npm install @sanity/cli && npx sanity init
 * Place this file in your Sanity studio's /schemas/ folder.
 */

export const postSchema = {
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  groups: [
    { name: 'content',  title: 'Content',  default: true },
    { name: 'seo',      title: 'SEO' },
    { name: 'settings', title: 'Settings' },
  ],
  fields: [
    // ── Core ──────────────────────────────────────────────────────────────────
    {
      name: 'title', title: 'Title', type: 'string', group: 'content',
      validation: R => R.required().max(100)
    },
    {
      name: 'slug', title: 'Slug (URL)', type: 'slug', group: 'content',
      options: { source: 'title', maxLength: 96 },
      validation: R => R.required()
    },
    {
      name: 'category', title: 'Category', type: 'string', group: 'content',
      options: {
        list: [
          'Domain & Hosting', 'Website Design', 'SEO',
          'Digital Marketing', 'WordPress Tools',
          'Business Growth', 'AI Tools', 'Case Studies'
        ]
      },
      validation: R => R.required()
    },
    {
      name: 'excerpt', title: 'Excerpt', type: 'text', group: 'content',
      rows: 3, validation: R => R.required().max(200)
    },
    {
      name: 'author', title: 'Author', type: 'string', group: 'content',
      initialValue: 'Suraha Editorial Team'
    },
    {
      name: 'publishedAt', title: 'Published Date', type: 'datetime', group: 'content',
      initialValue: () => new Date().toISOString()
    },
    {
      name: 'readTime', title: 'Read Time', type: 'string', group: 'content',
      placeholder: 'e.g. 5 min read'
    },
    {
      name: 'featuredImage', title: 'Featured Image', type: 'image', group: 'content',
      options: { hotspot: true },
      fields: [{ name: 'alt', title: 'Alt Text', type: 'string' }]
    },
    // ── Content Blocks ────────────────────────────────────────────────────────
    {
      name: 'content', title: 'Article Content', type: 'array', group: 'content',
      of: [
        {
          type: 'object', name: 'textBlock', title: 'Paragraph',
          fields: [
            { name: 'type',  type: 'string', hidden: true, initialValue: 'text' },
            { name: 'body',  title: 'Text',  type: 'text', rows: 4 }
          ]
        },
        {
          type: 'object', name: 'headingBlock', title: 'Heading',
          fields: [
            { name: 'type',  type: 'string', hidden: true, initialValue: 'heading' },
            { name: 'body',  title: 'Heading Text', type: 'string' }
          ]
        },
        {
          type: 'object', name: 'calloutBlock', title: 'Callout Box',
          fields: [
            { name: 'type',    type: 'string', hidden: true, initialValue: 'callout' },
            { name: 'body',    title: 'Callout Text', type: 'text', rows: 2 },
            { name: 'variant', title: 'Variant', type: 'string',
              options: { list: ['info', 'warning', 'tip'] }, initialValue: 'info' }
          ]
        },
        {
          type: 'object', name: 'imageBlock', title: 'Image',
          fields: [
            { name: 'type',    type: 'string', hidden: true, initialValue: 'image' },
            { name: 'image',   title: 'Image', type: 'image', options: { hotspot: true } },
            { name: 'alt',     title: 'Alt Text',  type: 'string' },
            { name: 'caption', title: 'Caption',   type: 'string' }
          ]
        },
        {
          type: 'object', name: 'listBlock', title: 'Bullet List',
          fields: [
            { name: 'type',  type: 'string', hidden: true, initialValue: 'list' },
            { name: 'items', title: 'List Items', type: 'array',
              of: [{ type: 'string' }] }
          ]
        }
      ]
    },
    // ── CTA Override ──────────────────────────────────────────────────────────
    {
      name: 'cta', title: 'Custom CTA (leave blank for default)', type: 'object',
      group: 'content',
      fields: [
        { name: 'heading',       title: 'Heading',         type: 'string' },
        { name: 'description',   title: 'Description',     type: 'text', rows: 2 },
        { name: 'primaryLabel',  title: 'Primary Button Label', type: 'string' },
        { name: 'primaryLink',   title: 'Primary Button URL',   type: 'string' },
        { name: 'secondaryLabel',title: 'Secondary Button Label', type: 'string' },
        { name: 'secondaryLink', title: 'Secondary Button URL',   type: 'string' },
      ]
    },
    // ── Related Posts ─────────────────────────────────────────────────────────
    {
      name: 'relatedPosts', title: 'Related Posts', type: 'array',
      group: 'content',
      of: [{ type: 'reference', to: [{ type: 'post' }] }]
    },
    // ── SEO ───────────────────────────────────────────────────────────────────
    {
      name: 'metaTitle', title: 'Meta Title (SEO)', type: 'string', group: 'seo',
      description: 'Defaults to post title if blank. Keep under 60 characters.',
      validation: R => R.max(60)
    },
    {
      name: 'metaDescription', title: 'Meta Description (SEO)', type: 'text', group: 'seo',
      rows: 2,
      description: 'Defaults to excerpt if blank. Keep under 160 characters.',
      validation: R => R.max(160)
    },
    // ── Settings ──────────────────────────────────────────────────────────────
    {
      name: 'status', title: 'Status', type: 'string', group: 'settings',
      options: { list: ['published', 'draft', 'archived'], layout: 'radio' },
      initialValue: 'draft'
    },
    {
      name: 'hasAffiliate', title: 'Contains Affiliate Links?', type: 'boolean',
      group: 'settings', initialValue: false,
      description: 'Shows affiliate disclosure banner at top of article.'
    },
  ],
  preview: {
    select: { title: 'title', category: 'subtitle', status: 'status' },
    prepare({ title, category, status }) {
      return {
        title,
        subtitle: `${category || 'No category'} · ${status || 'draft'}`
      };
    }
  }
};

export default postSchema;
