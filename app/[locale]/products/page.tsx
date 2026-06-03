import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FadeIn from "@/components/FadeIn";

import Link from "next/link";
import Image from "next/image";

import { client } from "@/lib/sanity";
import { categoriesQuery } from "@/lib/queries";

type Props = {
  params: Promise<{
    locale: "tr" | "en" | "de";
  }>;
};

export default async function ProductsPage({ params }: Props) {
  const { locale } = await params;

  const categories = await client.fetch(categoriesQuery);

  return (
    <main className="bg-[#f7f8f5] text-[#111111] min-h-screen">
      <Navbar />

      <section className="pt-28 md:pt-32 pb-20 md:pb-24">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <FadeIn>
            <div className="mb-16 md:mb-20">
              <p className="text-[#0f7a3b] uppercase tracking-widest text-xs md:text-sm font-semibold">
                DARİN ORMAN ÜRÜNLERİ
              </p>

              <h1 className="text-4xl md:text-6xl font-bold mt-4">
                {locale === "tr"
                  ? "Ürün Kategorileri"
                  : locale === "de"
                    ? "Produktkategorien"
                    : "Product Categories"}
              </h1>

              <p className="text-gray-600 mt-6 max-w-2xl text-base md:text-lg">
                {locale === "tr"
                  ? "Laminant, compact, kenar bandı, PVC, folyo ve hırdavat gruplarımızı inceleyin."
                  : locale === "de"
                    ? "Entdecken Sie unsere Produktgruppen Laminat, Compact, Kantenband, PVC, Folie und Beschläge."
                    : "Explore our laminate, compact, edge band, PVC, foil and hardware product groups."}
              </p>
            </div>
          </FadeIn>

          <div
            id="categories"
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {categories.map((category: any) => {
              const title =
                locale === "tr"
                  ? category.titleTR
                  : locale === "de"
                    ? category.titleDE || category.titleEN || category.titleTR
                    : category.titleEN || category.titleTR;

              return (
                <FadeIn key={category._id}>
                  <Link href={`/${locale}/categories/${category.slug}`}>
                    <div className="bg-white rounded-3xl overflow-hidden border-2 border-[#d7eadf] hover:border-[#0f7a3b] hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(15,122,59,0.18)] duration-300">
                      {category.image && (
                        <Image
                          src={category.image}
                          alt={title}
                          width={800}
                          height={600}
                          placeholder="blur"
                          blurDataURL={category.image}
                          className="w-full h-[260px] md:h-[320px] object-cover"
                        />
                      )}

                      <div className="p-8">
                        <h2 className="text-3xl font-bold">{title}</h2>

                        <button className="mt-8 border border-[#0f7a3b] text-[#0f7a3b] px-5 py-3 rounded-xl hover:bg-[#0f7a3b] hover:text-white duration-300">
                          {locale === "tr"
                            ? "Kategoriyi İncele"
                            : locale === "de"
                              ? "Kategorie ansehen"
                              : "Explore Category"}
                        </button>
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}