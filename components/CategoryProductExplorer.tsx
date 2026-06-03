"use client";

import { useMemo, useState } from "react";

import Link from "next/link";
import Image from "next/image";

type Product = {
  _id: string;
  titleTR?: string;
  titleEN?: string;
  titleDE?: string;
  slug: string;
  subCategory?: string;
  collection?: string;
  image?: string;
};

type Props = {
  products: Product[];
  locale: "tr" | "en" | "de";
  categorySlug: string;
};

export default function CategoryProductExplorer({
  products,
  locale,
  categorySlug
}: Props) {
  const subCategories = [
    ...new Set(products.map((p) => p.subCategory).filter(Boolean))
  ] as string[];

  const hasSubCategories = subCategories.length > 0;

  const [selectedSubCategory, setSelectedSubCategory] = useState(
    subCategories[0] || ""
  );

  const collections = hasSubCategories
    ? ([
        ...new Set(
          products
            .filter((p) => p.subCategory === selectedSubCategory)
            .map((p) => p.collection)
            .filter(Boolean)
        )
      ] as string[])
    : [];

  const hasCollections = collections.length > 0;

  const [selectedCollection, setSelectedCollection] = useState(
    collections[0] || ""
  );

  const filteredProducts = useMemo(() => {
    if (!hasSubCategories) {
      return products;
    }

    if (!hasCollections) {
      return products.filter(
        (product) => product.subCategory === selectedSubCategory
      );
    }

    return products.filter(
      (product) =>
        product.subCategory === selectedSubCategory &&
        product.collection === selectedCollection
    );
  }, [
    products,
    hasSubCategories,
    hasCollections,
    selectedSubCategory,
    selectedCollection
  ]);

  const isEdgeBandPage =
    categorySlug === "kenar-bandi" || categorySlug.includes("kenar");

  return (
    <div className="space-y-12">
      {hasSubCategories && (
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#111111] mb-6">
            {locale === "tr"
              ? "Alt Kategoriler"
              : locale === "de"
                ? "Unterkategorien"
                : "Sub Categories"}
          </h2>

          <div className="flex flex-wrap gap-4">
            {subCategories.map((item) => (
              <button
                key={item}
                onClick={() => {
                  setSelectedSubCategory(item);

                  const firstCollection =
                    products.find((p) => p.subCategory === item)?.collection ||
                    "";

                  setSelectedCollection(firstCollection);
                }}
                className={`px-6 py-3 rounded-xl border duration-300 ${
                  selectedSubCategory === item
                    ? "bg-[#0f7a3b] text-white border-[#0f7a3b]"
                    : "bg-white border-black/10 text-[#111111] hover:border-[#0f7a3b] hover:text-[#0f7a3b]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}

      {hasCollections && (
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#111111] mb-6">
            {locale === "tr"
              ? "Koleksiyonlar"
              : locale === "de"
                ? "Kollektionen"
                : "Collections"}
          </h2>

          <div className="flex flex-wrap gap-4">
            {collections.map((item) => (
              <button
                key={item}
                onClick={() => setSelectedCollection(item)}
                className={`px-6 py-3 rounded-xl border duration-300 ${
                  selectedCollection === item
                    ? "bg-[#0f7a3b] text-white border-[#0f7a3b]"
                    : "bg-white border-black/10 text-[#111111] hover:border-[#0f7a3b] hover:text-[#0f7a3b]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
        {filteredProducts.map((product) => {
          const title =
            locale === "tr"
              ? product.titleTR
              : locale === "de"
                ? product.titleDE || product.titleEN || product.titleTR
                : product.titleEN || product.titleTR;

          return (
            <Link
              key={product._id}
              href={`/${locale}/products/${product.slug}`}
            >
              <div className="bg-white rounded-2xl overflow-hidden border-2 border-[#d7eadf] hover:border-[#0f7a3b] hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(15,122,59,0.18)] duration-300">
                {product.image && (
                  <Image
                    src={product.image}
                    alt={title || ""}
                    width={900}
                    height={500}
                    className={`w-full bg-white ${
                      isEdgeBandPage
                        ? "h-[90px] md:h-[105px] object-contain p-3"
                        : "h-[180px] object-cover"
                    }`}
                  />
                )}

                <div className="p-5 bg-white text-[#111111]">
                  <h3 className="text-lg font-semibold text-[#111111] leading-snug">
                    {title}
                  </h3>

                  {product.subCategory && (
                    <p className="text-gray-500 mt-2 text-sm">
                      {product.subCategory}
                      {product.collection ? ` / ${product.collection}` : ""}
                    </p>
                  )}
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-20 text-gray-500 text-xl">
          {locale === "tr"
            ? "Ürün bulunamadı."
            : locale === "de"
              ? "Keine Produkte gefunden."
              : "No products found."}
        </div>
      )}
    </div>
  );
}