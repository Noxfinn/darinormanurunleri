import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "y50junbp",

  dataset: "production",

  apiVersion: "2025-05-15",

  useCdn: false
});