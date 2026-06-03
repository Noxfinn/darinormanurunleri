"use client";

import Image from "next/image";

type Variant = {
  materialType?: string;
  collection?: string;
  colorNameTR?: string;
  colorNameEN?: string;
  colorCode?: string;
  image?: string;
};

type Props = {
  variants?: Variant[];
  locale: "tr" | "en";
};

export default function ProductVariants({ variants = [], locale }: Props) {
  if (!variants || variants.length === 0) {
    return null;
  }

  const groupedByMaterial = variants.reduce<Record<string, Variant[]>>(
    (acc, variant) => {
      const material = variant.materialType || "Other";

      if (!acc[material]) {
        acc[material] = [];
      }

      acc[material].push(variant);

      return acc;
    },
    {}
  );

  return (
    <section className="mt-14">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">
        {locale === "tr" ? "Renk ve Koleksiyonlar" : "Colors and Collections"}
      </h2>

      <div className="space-y-10">
        {Object.entries(groupedByMaterial).map(([material, materialVariants]) => {
          const groupedByCollection = materialVariants.reduce<
            Record<string, Variant[]>
          >((acc, variant) => {
            const collection = variant.collection || "Other";

            if (!acc[collection]) {
              acc[collection] = [];
            }

            acc[collection].push(variant);

            return acc;
          }, {});

          return (
            <div
              key={material}
              className="border border-gray-800 rounded-3xl p-6 md:p-8 bg-[#171717]"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-8">
                {material}
              </h3>

              <div className="space-y-10">
                {Object.entries(groupedByCollection).map(
                  ([collection, collectionVariants]) => (
                    <div key={collection}>
                      <h4 className="text-xl font-semibold mb-5 text-gray-300">
                        {collection}
                      </h4>

                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                        {collectionVariants.map((variant, index) => {
                          const colorName =
                            locale === "tr"
                              ? variant.colorNameTR || variant.colorNameEN
                              : variant.colorNameEN || variant.colorNameTR;

                          return (
                            <div
                              key={`${collection}-${index}`}
                              className="border border-gray-800 rounded-2xl overflow-hidden bg-[#0f0f0f]"
                            >
                              {variant.image && (
                                <Image
                                  src={variant.image}
                                  alt={colorName || "Color"}
                                  width={500}
                                  height={400}
                                  className="w-full h-32 md:h-40 object-cover"
                                />
                              )}

                              <div className="p-4">
                                <h5 className="font-semibold">
                                  {colorName || "-"}
                                </h5>

                                {variant.colorCode && (
                                  <p className="text-gray-400 text-sm mt-1">
                                    {variant.colorCode}
                                  </p>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}