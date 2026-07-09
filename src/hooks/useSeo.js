import { useEffect } from 'react';

const SITE_URL = 'https://www.smartcomputeracademy.online';
const OG_IMAGE = `${SITE_URL}/og-image.png`;

function upsertMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

/**
 * Client-side per-route SEO for this SPA: updates the document title,
 * meta description, canonical URL and Open Graph / Twitter tags whenever
 * the active page changes.
 */
export default function useSeo({ title, description, path = '' }) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;

    if (title) document.title = title;
    upsertMeta('name', 'description', description);
    upsertLink('canonical', url);

    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:image', OG_IMAGE);

    upsertMeta('property', 'twitter:title', title);
    upsertMeta('property', 'twitter:description', description);
    upsertMeta('property', 'twitter:image', OG_IMAGE);
  }, [title, description, path]);
}
