import dotenv from "dotenv";
dotenv.config({ path: ".env.local", override: true });

import fs from "fs";
import path from "path";
import { createClient } from "@sanity/client";

if (!process.env.SANITY_WRITE_TOKEN) {
  throw new Error("SANITY_WRITE_TOKEN bulunamadı. .env.local kontrol et.");
}

const client = createClient({
  projectId: "y50junbp",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false
});

const products = JSON.parse(
  fs.readFileSync("data/abs-edge-bands.json", "utf8")
);

async function getCategoryRef() {
  const category = await client.fetch(
    `*[_type == "category" && slug.current == "kenar-bandi"][0]{_id}`
  );

  if (!category?._id) {
    throw new Error("Kenar Bandı kategorisi bulunamadı. Slug: kenar-bandi olmalı.");
  }

  return category._id;
}

async function uploadImage(localImagePath?: string) {
  if (!localImagePath) return null;

  const cleanPath = localImagePath.startsWith("/")
    ? localImagePath.slice(1)
    : localImagePath;

  const fullPath = path.join(process.cwd(), "public", cleanPath);

  if (!fs.existsSync(fullPath)) {
    console.log("Görsel bulunamadı:", fullPath);
    return null;
  }

  const imageAsset = await client.assets.upload(
    "image",
    fs.createReadStream(fullPath),
    {
      filename: path.basename(fullPath)
    }
  );

  return imageAsset._id;
}

async function main() {
  console.log("ABS import başlıyor...");
  console.log("Ürün sayısı:", products.length);

  const categoryId = await getCategoryRef();

  for (const item of products) {
    const existing = await client.fetch(
      `*[_type == "product" && slug.current == $slug][0]{_id}`,
      { slug: item.slug }
    );

    if (existing?._id) {
      console.log("Zaten var:", item.titleTR);
      continue;
    }

    const assetId = await uploadImage(item.image);

    await client.create({
      _type: "product",

      titleTR: item.titleTR,
      titleEN: item.titleEN,

      slug: {
        _type: "slug",
        current: item.slug
      },

      category: {
        _type: "reference",
        _ref: categoryId
      },

      subCategory: "ABS",
      collection: item.collection,
      model: item.model,

      descriptionTR: `${item.titleTR} ABS kenar bandı ürünüdür.`,
      descriptionEN: `${item.titleEN} ABS edge band product.`,

      mainImage: assetId
        ? {
            _type: "image",
            asset: {
              _type: "reference",
              _ref: assetId
            }
          }
        : undefined
    });

    console.log("Eklendi:", item.titleTR);
  }

  console.log("ABS import tamamlandı.");
}

main();