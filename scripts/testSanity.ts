import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "y50junbp",
  dataset: "production",
  apiVersion: "2025-05-15",

  token: process.env.SANITY_WRITE_TOKEN,

  useCdn: false,

  perspective: "published"
});

async function main() {
  try {
    const result = await client.fetch(
      `*[_type == "category"][0]`
    );

    console.log(result);
  } catch (err) {
    console.error(err);
  }
}

main();