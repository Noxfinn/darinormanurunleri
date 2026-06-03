import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProductGallery from "@/components/ProductGallery";
import FadeIn from "@/components/FadeIn";

import { client } from "@/lib/sanity";
import { productBySlugQuery } from "@/lib/queries";

import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    locale: "tr" | "en" | "de";
    slug: string;
  }>;
};

export default async function ProductDetailPage({
  params
}: Props) {
  const { locale, slug } = await params;

  const product = await client.fetch(
    productBySlugQuery,
    { slug }
  );

  if (!product) {
    return notFound();
  }

  const title =
    locale === "tr"
      ? product.titleTR
      : locale === "de"
        ? product.titleDE || product.titleEN || product.titleTR
        : product.titleEN || product.titleTR;

  const description =
    locale === "tr"
      ? product.descriptionTR
      : locale === "de"
        ? product.descriptionDE ||
          product.descriptionEN ||
          product.descriptionTR
        : product.descriptionEN || product.descriptionTR;

  const gallery =
    product.gallery && product.gallery.length > 0
      ? product.gallery
      : product.image
        ? [product.image]
        : [];

  const showTechnicalDetails =
    product.showTechnicalDetails === true;

  return (
    <main className="bg-[#f7f8f5] text-[#111111] min-h-screen">
      <Navbar />

      <section className="pt-32 md:pt-36 pb-20 md:pb-24">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            <FadeIn>
              <ProductGallery
                images={gallery}
                categorySlug={product.categorySlug}
              />
            </FadeIn>

            <FadeIn>
              <div>
                <p className="text-[#0f7a3b] uppercase tracking-widest text-xs md:text-sm font-semibold">
                  {product.category}
                </p>

                <h1 className="text-4xl md:text-6xl font-bold mt-4 leading-tight text-[#111111]">
                  {title}
                </h1>

                {description && (
                  <p className="mt-6 md:mt-8 text-gray-600 text-base md:text-lg leading-relaxed">
                    {description}
                  </p>
                )}

                {showTechnicalDetails && (
                  <div className="mt-10 md:mt-14 bg-white border-2 border-[#d7eadf] rounded-3xl overflow-hidden shadow-sm">
                    <div className="flex justify-between gap-6 p-5 border-b border-[#d7eadf]">
                      <span className="text-gray-500">
                        Model
                      </span>

                      <span className="text-right text-[#111111]">
                        {product.model || "-"}
                      </span>
                    </div>

                    <div className="flex justify-between gap-6 p-5 border-b border-[#d7eadf]">
                      <span className="text-gray-500">
                        {locale === "tr"
                          ? "Kalınlık"
                          : locale === "de"
                            ? "Stärke"
                            : "Thickness"}
                      </span>

                      <span className="text-right text-[#111111]">
                        {product.thickness || "-"}
                      </span>
                    </div>

                    <div className="flex justify-between gap-6 p-5 border-b border-[#d7eadf]">
                      <span className="text-gray-500">
                        {locale === "tr"
                          ? "Yüzey"
                          : locale === "de"
                            ? "Oberfläche"
                            : "Surface"}
                      </span>

                      <span className="text-right text-[#111111]">
                        {product.surface || "-"}
                      </span>
                    </div>

                    <div className="flex justify-between gap-6 p-5 border-b border-[#d7eadf]">
                      <span className="text-gray-500">
                        {locale === "tr"
                          ? "Üretim"
                          : locale === "de"
                            ? "Produktion"
                            : "Production"}
                      </span>

                      <span className="text-right text-[#111111]">
                        {product.production || "-"}
                      </span>
                    </div>

                    <div className="flex justify-between gap-6 p-5">
                      <span className="text-gray-500">
                        {locale === "tr"
                          ? "Yalıtım"
                          : locale === "de"
                            ? "Isolierung"
                            : "Insulation"}
                      </span>

                      <span className="text-right text-[#111111]">
                        {product.insulation || "-"}
                      </span>
                    </div>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4 mt-10 md:mt-12">
                  <a
                    href={`https://wa.me/905312682121?text=${encodeURIComponent(
                      locale === "tr"
                        ? `Merhaba, ${title} ürünü hakkında bilgi almak istiyorum.`
                        : locale === "de"
                          ? `Hallo, ich möchte Informationen über ${title} erhalten.`
                          : `Hello, I would like information about ${title}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#0f7a3b] text-white px-8 py-4 rounded-2xl font-semibold text-center hover:bg-[#095c2b] duration-300"
                  >
                    {locale === "tr"
                      ? "WhatsApp Teklif Al"
                      : locale === "de"
                        ? "Angebot per WhatsApp"
                        : "Get Quote on WhatsApp"}
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}