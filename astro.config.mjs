// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sanity from "@sanity/astro";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    sanity({
      projectId: "oj31mwik",
      dataset: "production",
      useCdn: true,
      studioBasePath: "/studio",
    }),
  ],

  output: "static",
  adapter: vercel(),
});
