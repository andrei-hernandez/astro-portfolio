import { defineConfig, envField, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import node from "@astrojs/node";

// Railway sets RAILWAY_PUBLIC_DOMAIN at build time once the service has a public domain
const site = process.env.RAILWAY_PUBLIC_DOMAIN
  ? `https://${process.env.RAILWAY_PUBLIC_DOMAIN}`
  : "http://localhost:4321";

// https://astro.build/config
export default defineConfig({
  site,
  i18n: { locales: ["en", "es"], defaultLocale: "en" },
  // Trust Railway's proxy for this host; without it the contact form POST fails the origin check (403)
  security: { allowedDomains: [{ hostname: new URL(site).hostname, protocol: "https" }] },
  env: {
    schema: {
      // Read at runtime, so the key never lands in the build output
      RESEND_API_KEY: envField.string({ context: "server", access: "secret", optional: true }),
    },
  },
  // Self-hosted at build time as woff2, only the weights the site uses
  fonts: [
    { provider: fontProviders.google(), name: "Inter", cssVariable: "--font-inter", weights: [400, 500, 600, 700], subsets: ["latin"], fallbacks: ["sans-serif"] },
    { provider: fontProviders.google(), name: "Outfit", cssVariable: "--font-outfit", weights: [400, 600, 700], subsets: ["latin"], fallbacks: ["sans-serif"] },
  ],
  integrations: [sitemap({
    changefreq: "weekly",
    priority: 0.7,
    lastmod: new Date(),
    entryLimit: 10000,
    i18n: { defaultLocale: "en", locales: { en: "en", es: "es" } }
  })],
  vite: {
    plugins: [tailwindcss()]
  },
  // Railway routes traffic to 0.0.0.0:$PORT
  server: { host: true },
  adapter: node({ mode: "standalone" })
});
