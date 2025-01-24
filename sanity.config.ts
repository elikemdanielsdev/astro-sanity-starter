import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemas } from "./src/sanity/schemas";

export default defineConfig({
  name: "default",
  title: "astro-sanity-studio",

  projectId: "oj31mwik",
  dataset: "production",

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemas,
  },
});
