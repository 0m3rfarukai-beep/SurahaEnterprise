/**
 * CMS INTEGRATION LAYER — Suraha Enterprise
 *
 * This is the ONLY file that needs updating when connecting Sanity CMS.
 * All pages import from here, never directly from /data files.
 *
 * SANITY SETUP STEPS:
 * 1. Run: npm install @sanity/client @sanity/image-url
 * 2. Create: src/lib/sanityClient.js (see comment below)
 * 3. Replace each function body with the GROQ query shown in its comment
 * 4. Delete the local data imports at the top
 *
 * SANITY CLIENT (src/lib/sanityClient.js):
 * ─────────────────────────────────────────
 * import { createClient } from '@sanity/client';
 * export const sanityClient = createClient({
 *   projectId: 'YOUR_PROJECT_ID',   // from sanity.io/manage
 *   dataset: 'production',
 *   useCdn: true,
 *   apiVersion: '2024-01-01',
 * });
 */

import blogPostsData, { categories as categoriesData } from '@/data/blogPosts';

// ─── Blog Posts ────────────────────────────────────────────────────────────────

/**
 * Get all published posts, sorted newest first.
 *
 * GROQ REPLACEMENT:
 * import { sanityClient } from './sanityClient';
 * const POSTS_QUERY = `*[_type == "post" && status == "published"] | order(publishedAt desc) {
 *   "id": slug.current, slug, title, category, excerpt, readTime, author, status,
 *   "date": publishedAt, hasAffiliate, metaTitle, metaDescription,
 *   "featuredImage": featuredImage.asset->url
 * }`;
 * export async function getAllPosts() {
 *   return sanityClient.fetch(POSTS_QUERY);
 * }
 */
export async function getAllPosts() {
  return blogPostsData;
}

/**
 * Get a single post by its slug string.
 *
 * GROQ REPLACEMENT:
 * const POST_QUERY = `*[_type == "post" && slug.current == $slug][0] {
 *   "id": slug.current, slug, title, category, excerpt, readTime, author, status,
 *   "date": publishedAt, hasAffiliate, metaTitle, metaDescription,
 *   "featuredImage": featuredImage.asset->url,
 *   content[]{ _type, type, body, "image": image.asset->url, alt, caption },
 *   cta { heading, description, primaryLabel, primaryLink, secondaryLabel, secondaryLink },
 *   "relatedPosts": relatedPosts[]->{ "id": slug.current, title, category, readTime, excerpt, "date": publishedAt }
 * }`;
 * export async function getPostBySlug(slug) {
 *   return sanityClient.fetch(POST_QUERY, { slug });
 * }
 */
export async function getPostBySlug(slug) {
  return blogPostsData.find(p => p.id === slug) || null;
}

/**
 * Get all unique post categories.
 *
 * GROQ REPLACEMENT:
 * export async function getCategories() {
 *   const cats = await sanityClient.fetch(`array::unique(*[_type == "post"].category)`);
 *   return ['All', ...cats];
 * }
 */
export async function getCategories() {
  return categoriesData;
}

/**
 * Get related posts for a given post.
 * Uses explicit relatedPosts field if set, otherwise falls back to same-category.
 *
 * GROQ REPLACEMENT: handled inline in getPostBySlug query above.
 */
export async function getRelatedPosts(post) {
  if (post.relatedPosts && post.relatedPosts.length > 0) {
    return post.relatedPosts;
  }
  return blogPostsData
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);
}
