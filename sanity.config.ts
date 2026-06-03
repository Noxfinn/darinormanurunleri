import { defineConfig } from "sanity";

import { structureTool } from "sanity/structure";

import { visionTool } from "@sanity/vision";

import { schemaTypes } from "./sanity/schemaTypes";

export default defineConfig({
  name: "default",

  title: "Darin CMS",

  projectId: "y50junbp",

  dataset: "production",

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes
  }
});