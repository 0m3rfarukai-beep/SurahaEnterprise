import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: '9sjxn4lw',
  dataset: 'production',
  apiVersion: '2026-05-07',
  useCdn: true,
});
