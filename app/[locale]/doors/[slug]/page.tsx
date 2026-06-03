import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FadeIn from "@/components/FadeIn";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { doorModels } from "@/lib/doorData";

type Props = {
  params: Promise<{
    locale: "tr" | "en" | "de";
    slug: string;
  }>;
};

export default async function DoorDetailPage({ params }: Props) {
  const { locale, slug } = await params;

  const door = doorModels.find((item) => item.slug === slug);

  if (!door) {
    return notFound();
  }

  const title =
    locale === "tr"
      ? door.titleTR
      : locale === "de"
        ? door.titleDE
        : door.titleEN;

  const wing =
    locale === "tr"
      ? door.wingTR
      : locale === "de"
        ? door.wingDE
        : door.wingEN;

  const frame =
    locale === "tr"
      ? door.frameTR
      : locale === "de"
        ? door.frameDE
        : door.frameEN;

  const architrave =
    locale === "tr"
      ? door.architraveTR
      : locale === "de"
        ? door.architraveDE
        : door.architraveEN;

  return (
    <main className="bg-[#f7f8f5] min-h-screen text-[#111111]">
      <Navbar />

      <section className="pt-32 md:pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <FadeIn>
              <Image
                src={door.image}
                alt={title}
                width={900}
                height={1000}
                className="w-full h-[520px] md:h-[720px] object-cover rounded-[36px] border border-black/10 bg-white shadow-sm"
              />
            </FadeIn>

            <FadeIn>
              <div>
                <Link
                  href={`/${locale}/doors`}
                  className="text-[#0f7a3b] font-semibold"
                >
                  ←{" "}
                  {locale === "tr"
                    ? "Kapılara Dön"
                    : locale === "de"
                      ? "Zurück zu Türen"
                      : "Back to Doors"}
                </Link>

                <h1 className="text-4xl md:text-6xl font-bold mt-6">
                  {title}
                </h1>

                <div className="space-y-5 mt-10">
                  <div className="bg-white border-2 border-[#d7eadf] rounded-2xl p-6 hover:border-[#0f7a3b] duration-300">
                    <h2 className="text-[#0f7a3b] font-bold text-xl mb-3">
                      1 -{" "}
                      {locale === "tr"
                        ? "Kanat"
                        : locale === "de"
                          ? "Türblatt"
                          : "Door Leaf"}
                    </h2>

                    <p className="text-gray-600 leading-relaxed">
                      {wing}
                    </p>
                  </div>

                  <div className="bg-white border-2 border-[#d7eadf] rounded-2xl p-6 hover:border-[#0f7a3b] duration-300">
                    <h2 className="text-[#0f7a3b] font-bold text-xl mb-3">
                      2 -{" "}
                      {locale === "tr"
                        ? "Kasa"
                        : locale === "de"
                          ? "Zarge"
                          : "Frame"}
                    </h2>

                    <p className="text-gray-600 leading-relaxed">
                      {frame}
                    </p>
                  </div>

                  <div className="bg-white border-2 border-[#d7eadf] rounded-2xl p-6 hover:border-[#0f7a3b] duration-300">
                    <h2 className="text-[#0f7a3b] font-bold text-xl mb-3">
                      3 -{" "}
                      {locale === "tr"
                        ? "Pervazlar"
                        : locale === "de"
                          ? "Zierbekleidungen"
                          : "Architraves"}
                    </h2>

                    <p className="text-gray-600 leading-relaxed">
                      {architrave}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-10">
                  <a
                    href={door.catalogUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#0f7a3b] text-white px-7 py-4 rounded-2xl font-semibold text-center hover:bg-[#095c2b] duration-300"
                  >
                    {locale === "tr"
                      ? "Katalog İndir"
                      : locale === "de"
                        ? "Katalog herunterladen"
                        : "Download Catalog"}
                  </a>

                  <a
                    href={`https://wa.me/905312682121?text=${encodeURIComponent(
                      locale === "tr"
                        ? `${title} ürünü hakkında bilgi ve teklif almak istiyorum.`
                        : locale === "de"
                          ? `Ich möchte Informationen und ein Angebot für ${title} erhalten.`
                          : `I would like information and a quotation for ${title}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-[#0f7a3b] text-[#0f7a3b] px-7 py-4 rounded-2xl font-semibold text-center hover:bg-[#0f7a3b] hover:text-white duration-300"
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