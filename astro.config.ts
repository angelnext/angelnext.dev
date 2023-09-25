import mdx from "@astrojs/mdx";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import AstroPWA from "@vite-pwa/astro";
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  site: "https://angelnext.dev/",
  integrations: [
    mdx(),
    sitemap(),
    AstroPWA({
      manifest: {
        name: "AngelNext",
        short_name: "AngelNext",
        start_url: ".",
        display: "standalone",
        background_color: "#F7F8FA",
        theme_color: "#FFFFFF",
        description: "Welcome to my website!",
        icons: [{
          src: "/favicon.svg",
          sizes: "any",
          type: "image/svg+xml",
        }, {
          src: "/icon512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable",
        }],
      },
      workbox: {
        globDirectory: "dist",
        globPatterns: [
          "**/*.{js,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico,html}",
        ],
        navigateFallback: "/404",
      },
    }),
    prefetch(),
  ],
});
