import { sanityClient } from './sanityClient';

const POST_FIELDS = `
  _id,
  title,
  "id": slug.current,
  "slug": slug.current,
  "category": categories[0]->title,
  "categories": categories[]->title,
  "author": author->name,
  "date": publishedAt,
  publishedAt,
  "featuredImage": mainImage.asset->url,
  "featuredImageAlt": coalesce(mainImage.alt, title),
  body[]{
    ...,
    _type == "image" => {
      ...,
      "imageUrl": asset->url,
      "alt": coalesce(alt, "")
    }
  },
  "plainText": pt::text(body)
`;

export const ALL_POSTS_QUERY = `
  *[
    _type == "post" &&
    defined(slug.current) &&
    !(_id in path("drafts.**")) &&
    (!defined(publishedAt) || publishedAt <= now())
  ] | order(coalesce(publishedAt, _createdAt) desc) {
    ${POST_FIELDS}
  }
`;

export const SINGLE_POST_QUERY = `
  *[
    _type == "post" &&
    slug.current == $slug &&
    !(_id in path("drafts.**")) &&
    (!defined(publishedAt) || publishedAt <= now())
  ][0] {
    ${POST_FIELDS}
  }
`;

const DEFAULT_AUTHOR = 'Suraha Editorial Team';

function estimateReadTime(text = '') {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 220));
  return `${minutes} min read`;
}

function createExcerpt(text = '') {
  const clean = text.replace(/\s+/g, ' ').trim();
  if (clean.length <= 155) return clean;
  return `${clean.slice(0, 152).trim()}...`;
}

export function normalizeSanityPost(post) {
  if (!post) return null;

  const plainText = post.plainText || '';

  return {
    ...post,
    id: post.id || post.slug,
    slug: post.slug || post.id,
    category: post.category || 'Business Growth',
    categories: post.categories?.filter(Boolean) || [],
    author: post.author || DEFAULT_AUTHOR,
    date: post.date || post.publishedAt,
    excerpt: post.excerpt || createExcerpt(plainText),
    readTime: post.readTime || estimateReadTime(plainText),
    hasAffiliate: Boolean(post.hasAffiliate),
    status: 'published',
    body: post.body || [],
    content: post.content || [],
  };
}

export async function fetchPublishedPosts() {
  const posts = await sanityClient.fetch(ALL_POSTS_QUERY);
  return posts.map(normalizeSanityPost).filter(Boolean);
}

export async function fetchPostBySlug(slug) {
  const post = await sanityClient.fetch(SINGLE_POST_QUERY, { slug });
  return normalizeSanityPost(post);
}
