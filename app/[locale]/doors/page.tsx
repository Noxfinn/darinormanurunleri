import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FadeIn from "@/components/FadeIn";

import Image from "next/image";
import Link from "next/link";

import { doorModels } from "@/lib/doorData";

type Props = {
  params: Promise<{
    locale: "tr" | "en" | "de";
  }>;
};

export default async function DoorsPage({ params }: Props) {
  const { locale } = await params;

  return (
    <main className="bg-[#f7f8f5] min-h-screen text-[#111111]">
      <Navbar />

      <section className="pt-32 md:pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className="text-[#0f7a3b] uppercase tracking-[0.25em] text-sm font-semibold">
                {locale === "tr" ? "Kapılar" : locale === "de" ? "Türen" : "Doors"}
              </p>

              <h1 className="text-4xl md:text-6xl font-bold mt-5">
                {locale === "tr"
                  ? "Kapı Modelleri"
                  : locale === "de"
                    ? "Türmodelle"
                    : "Door Models"}
              </h1>

              <p className="text-gray-600 text-lg mt-6">
                {locale === "tr"
                  ? "Kapı modellerimizi inceleyin ve teknik detaylara ulaşın."
                  : locale === "de"
                    ? "Entdecken Sie unsere Türmodelle und sehen Sie technische Details."
                    : "Explore our door models and view technical details."}
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {doorModels.map((door) => {
              const title =
                locale === "tr"
                  ? door.titleTR
                  : locale === "de"
                    ? door.titleDE || door.titleEN
                    : door.titleEN;

              return (
                <FadeIn key={door.slug}>
                  <Link href={`/${locale}/doors/${door.slug}`}>
                    <div className="bg-white border-2 border-[#d7eadf] rounded-3xl overflow-hidden hover:border-[#0f7a3b] hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(15,122,59,0.18)] duration-300">
                      <Image
                        src={door.image}
                        alt={title}
                        width={600}
                        height={700}
                        className="w-full h-[260px] md:h-[340px] object-cover"
                      />

                      <div className="p-5">
                        <h2 className="text-xl font-bold text-[#111111]">
                          {title}
                        </h2>

                        <p className="text-gray-500 text-sm mt-2">
                          {locale === "tr"
                            ? "Detayları incele"
                            : locale === "de"
                              ? "Details ansehen"
                              : "View details"}
                        </p>
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