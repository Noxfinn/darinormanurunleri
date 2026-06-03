"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  images: string[];
  categorySlug?: string;
};

export default function ProductGallery({
  images,
  categorySlug
}: Props) {
  const [selectedImage, setSelectedImage] =
    useState(images?.[0]);

  if (!images || images.length === 0) {
    return null;
  }

  const isEdgeBand =
    categorySlug === "kenar-bandi" ||
    categorySlug?.includes("kenar");

  return (
    <div>
      <div
        className={`overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm ${
          isEdgeBand ? "p-6" : ""
        }`}
      >
        <Image
          src={selectedImage}
          alt="Product Image"
          width={1200}
          height={1000}
          className={`w-full bg-white ${
            isEdgeBand
              ? "h-[180px] md:h-[240px] object-contain"
              : "h-[420px] md:h-[700px] object-cover"
          }`}
        />
      </div>

      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-4 mt-5">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image)}
              className={`overflow-hidden rounded-2xl border-2 bg-white duration-300 ${
                selectedImage === image
                  ? "border-[#0f7a3b]"
                  : "border-black/10 hover:border-[#0f7a3b]"
              }`}
            >
              <Image
                src={image}
                alt={`Thumbnail ${index}`}
                width={400}
                height={400}
                className={`w-full bg-white ${
                  isEdgeBand
                    ? "h-16 md:h-20 object-contain p-2"
                    : "h-24 md:h-32 object-cover"
                }`}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}