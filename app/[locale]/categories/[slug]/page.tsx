import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FadeIn from "@/components/FadeIn";
import CategoryProductExplorer from "@/components/CategoryProductExplorer";

import { client } from "@/lib/sanity";
import {
  categoryBySlugQuery,
  productsByCategorySlugQuery
} from "@/lib/queries";

import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    locale: "tr" | "en" | "de";
    slug: string;
  }>;
};

export default async function CategoryDetailPage({
  params
}: Props) {
  const { locale, slug } = await params;

  const category = await client.fetch(
    categoryBySlugQuery,
    { slug }
  );

  if (!category) {
    return notFound();
  }

  const products = await client.fetch(
    productsByCategorySlugQuery,
    { slug }
  );

  const title =
    locale === "tr"
      ? category.titleTR
      : locale === "de"
        ? category.titleDE || category.titleEN || category.titleTR
        : category.titleEN || category.titleTR;

  return (
    <main className="bg-[#f7f8f5] text-[#111111] min-h-screen">
      <Navbar />

      <section className="pt-28 md:pt-32 pb-20 md:pb-24">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <FadeIn>
            <div className="mb-16">
              <p className="text-[#0f7a3b] uppercase tracking-widest text-xs md:text-sm font-semibold">
                {locale === "tr"
                  ? "Kategori"
                  : locale === "de"
                    ? "Kategorie"
                    : "Category"}
              </p>

              <h1 className="text-4xl md:text-6xl font-bold mt-4 text-[#111111]">
                {title}
              </h1>
            </div>
          </FadeIn>

          <CategoryProductExplorer
            products={products}
            locale={locale}
            categorySlug={slug}
          />
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}