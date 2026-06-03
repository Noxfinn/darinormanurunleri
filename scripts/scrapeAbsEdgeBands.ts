import axios from "axios";
import * as cheerio from "cheerio";
import fs from "fs";
import path from "path";
import slugify from "slugify";

const collections = [
  {
    subCategory: "ABS",
    collection: "Unicolour",
    url: "https://boyutplastik.com.tr/products/edge-band/abs-edge-band/abs-unicolour"
  },
  {
    subCategory: "ABS",
    collection: "Woodgrain",
    url: "https://boyutplastik.com.tr/products/edge-band/abs-edge-band/abs-woodgrain"
  },
  {
    subCategory: "ABS",
    collection: "High Gloss Unicolour",
    url: "https://boyutplastik.com.tr/products/edge-band/abs-edge-band/abs-hg-unicolour"
  },
  {
    subCategory: "ABS",
    collection: "High Gloss Woodgrain",
    url: "https://boyutplastik.com.tr/products/edge-band/abs-edge-band/abs-hg-desen"
  },
  {
    subCategory: "ABS",
    collection: "Fantasy",
    url: "https://boyutplastik.com.tr/products/edge-band/abs-edge-band/abs-fantezi"
  },
  {
    subCategory: "ABS",
    collection: "Silvery",
    url: "https://boyutplastik.com.tr/products/edge-band/abs-edge-band/abs-silvery"
  },
  {
    subCategory: "ABS",
    collection: "Soft Touch",
    url: "https://boyutplastik.com.tr/products/edge-band/abs-edge-band/abs-soft-touch"
  }
];

const products: any[] = [];

function cleanTitle(text: string) {
  return text
    .replace(/\s+/g, " ")
    .replace(/Boyut Code:/gi, "")
    .trim();
}

async function downloadImage(url: string, filename: string) {
  const filepath = path.join("public/imported", filename);

  if (fs.existsSync(filepath)) {
    return `/imported/${filename}`;
  }

  const response = await axios({
    url,
    responseType: "arraybuffer"
  });

  fs.writeFileSync(filepath, response.data);

  return `/imported/${filename}`;
}

async function scrapeCollection(item: any) {
  console.log(`Scraping ABS: ${item.collection}`);

  const response = await axios.get(item.url);
  const $ = cheerio.load(response.data);

  $("a").each( (_, el) => {
    const rawText = $(el).text().replace(/\s+/g, " ").trim();
    const href = $(el).attr("href") || "";

    if (!rawText.includes("Boyut Code:")) return;

    const [namePart, codePart] = rawText.split("Boyut Code:");

    const title = cleanTitle(namePart);
    const model = cleanTitle(codePart || "");

    if (!title || !model) return;

    const image =
      $(el).find("img").attr("src") ||
      $(el).find("img").attr("data-src") ||
      $(el).parent().find("img").attr("src") ||
      "";

    let localImage = "";

    if (image) {
      try {
        const imageUrl = image.startsWith("http")
          ? image
          : `https://boyutplastik.com.tr${image}`;

        const filename =
          slugify(`${item.subCategory}-${item.collection}-${title}-${model}`, {
            lower: true,
            strict: true
          }) + ".jpg";

        localImage = await downloadImage(imageUrl, filename);
      } catch {
        console.log("Görsel indirilemedi:", title);
      }
    }

    const slug = slugify(`${item.subCategory}-${item.collection}-${title}-${model}`, {
      lower: true,
      strict: true
    });

    products.push({
      titleTR: title,
      titleEN: title,
      category: "Kenar Bandı",
      subCategory: item.subCategory,
      collection: item.collection,
      model,
      image: localImage,
      sourceUrl: href.startsWith("http")
        ? href
        : `https://boyutplastik.com.tr${href}`,
      slug
    });

    console.log(`✓ ${title} - ${model}`);
  });
}

async function main() {
  fs.mkdirSync("data", { recursive: true });
  fs.mkdirSync("public/imported", { recursive: true });

  for (const item of collections) {
    await scrapeCollection(item);
  }

  fs.writeFileSync(
    "data/abs-edge-bands.json",
    JSON.stringify(products, null, 2),
    "utf8"
  );

  console.log("ABS scrape tamamlandı.");
  console.log("Ürün sayısı:", products.length);
}

main();
