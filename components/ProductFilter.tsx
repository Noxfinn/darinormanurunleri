"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import FadeIn from "@/components/FadeIn";

type Product = {
  _id: string;
  titleTR?: string;
  titleEN?: string;
  slug: string;
  category?: string;
  model?: string;
  descriptionTR?: string;
  descriptionEN?: string;
  image?: string;
};

type Props = {
  products: Product[];
  showCategories?: boolean;
};

const categories = [
  "Tüm Ürünler",
  "Kapılar",
  "Kapı Kasaları",
  "Pervazlar",
  "Aksesuarlar"
];

export default function ProductFilter({
  products,
  showCategories = true
}: Props) {
  const pathname = usePathname();
  const currentLocale = pathname.startsWith("/en") ? "en" : "tr";

  const [selectedCategory, setSelectedCategory] = useState("Tüm Ürünler");
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const title =
        currentLocale === "tr"
          ? product.titleTR || ""
          : product.titleEN || product.titleTR || "";

      const description =
        currentLocale === "tr"
          ? product.descriptionTR || ""
          : product.descriptionEN || product.descriptionTR || "";

      const model = product.model || "";
      const category = product.category || "";

      const categoryMatch =
        !showCategories || selectedCategory === "Tüm Ürünler"
          ? true
          : category === selectedCategory;

      const searchText = `${title} ${model} ${description}`.toLowerCase();
      const searchMatch = searchText.includes(search.toLowerCase());

      return categoryMatch && searchMatch;
    });
  }, [products, selectedCategory, search, currentLocale, showCategories]);

  return (
    <div>
      <div className="mb-10">
        <input
          type="text"
          placeholder={currentLocale === "tr" ? "Ürün ara..." : "Search product..."}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-white border border-black/10 rounded-2xl px-6 py-5 text-[#111111] outline-none focus:border-[#0f7a3b] duration-300"
        />
      </div>

      {showCategories && (
        <div className="flex flex-wrap gap-4 mb-14">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-xl border duration-300 ${
                selectedCategory === category
                  ? "bg-[#0f7a3b] text-white border-[#0f7a3b]"
                  : "border-black/10 text-[#111111] hover:border-[#0f7a3b] hover:text-[#0f7a3b]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      <div className="grid md:grid-cols-3 gap-8">
        {filteredProducts.map((product) => {
          const title =
            currentLocale === "tr"
              ? product.titleTR || ""
              : product.titleEN || product.titleTR || "";

          const description =
            currentLocale === "tr"
              ? product.descriptionTR || ""
              : product.descriptionEN || product.descriptionTR || "";

          return (
            <FadeIn key={product._id}>
              <Link href={`/${currentLocale}/products/${product.slug}`}>
                <div className="bg-white rounded-3xl overflow-hidden border border-black/10 hover:border-[#0f7a3b] hover:-translate-y-2 hover:shadow-2xl duration-300">
                  {product.image && (
                    <Image
                      src={product.image}
                      alt={title}
                      width={800}
                      height={600}
                      placeholder="blur"
                      blurDataURL={product.image}
                      className="w-full h-[260px] md:h-[320px] object-cover"
                    />
                  )}

                  <div className="p-8">
                    <p className="text-[#0f7a3b] uppercase text-sm font-semibold">
                      {product.category}
                    </p>

                    <h2 className="text-3xl font-semibold mt-3">
                      {title}
                    </h2>

                    <p className="text-gray-500 mt-3">
                      Model: {product.model}
                    </p>

                    <p className="mt-6 text-gray-600">
                      {description}
                    </p>

                    <button className="mt-8 border border-[#0f7a3b] text-[#0f7a3b] px-5 py-3 rounded-xl hover:bg-[#0f7a3b] hover:text-white duration-300">
                      {currentLocale === "tr" ? "Ürünü İncele" : "View Product"}
                    </button>
                  </div>
                </div>
              </Link>
            </FadeIn>
          );
        })}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-20 text-gray-500 text-xl">
          {currentLocale === "tr" ? "Ürün bulunamadı." : "No products found."}
        </div>
      )}
    </div>
  );
}