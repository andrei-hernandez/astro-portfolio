import type { APIRoute } from "astro";

// Same output astro-robots-txt produced, built from `site` in astro.config.mjs
export const GET: APIRoute = ({ site }) =>
  new Response(`User-agent: *\nAllow: /\nSitemap: ${new URL("sitemap-index.xml", site)}\n`);
