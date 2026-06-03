import { products } from "@/lib/products";

export default function sitemap() {
  const staticPages = [
    {
      url: "https://epinox.com/tr",
      lastModified: new Date()
    },

    {
      url: "https://epinox.com/en",
      lastModified: new Date()
    },

    {
      url: "https://epinox.com/tr/products",
      lastModified: new Date()
    },

    {
      url: "https://epinox.com/en/products",
      lastModified: new Date()
    },

    {
      url: "https://epinox.com/tr/about",
      lastModified: new Date()
    },

    {
      url: "https://epinox.com/en/about",
      lastModified: new Date()
    },

    {
      url: "https://epinox.com/tr/contact",
      lastModified: new Date()
    },

    {
      url: "https://epinox.com/en/contact",
      lastModified: new Date()
    }
  ];

  const productPages = products.flatMap((product) => [
    {
      url: `https://epinox.com/tr/products/${product.slug}`,
      lastModified: new Date()
    },

    {
      url: `https://epinox.com/en/products/${product.slug}`,
      lastModified: new Date()
    }
  ]);

  return [...staticPages, ...productPages];
}