import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

type Props = {
  params: Promise<{
    locale: "tr" | "en" | "de";
  }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;

  const productGroups =
    locale === "tr"
      ? [
          "Laminant",
          "Compact",
          "Kenar Bandı",
          "PVC",
          "Sarma / PP Folyo",
          "Tutkal Grupları",
          "Kapı Sereni",
          "Hırdavat Grupları"
        ]
      : locale === "de"
        ? [
            "Laminat",
            "Compact",
            "Kantenband",
            "PVC",
            "Wickel- / PP-Folie",
            "Klebstoffgruppen",
            "Türrahmenholz",
            "Beschlaggruppen"
          ]
        : [
            "Laminate",
            "Compact",
            "Edge Banding",
            "PVC",
            "Wrapping / PP Foil",
            "Adhesive Groups",
            "Door Rails",
            "Hardware Groups"
          ];

  const whyUsItems =
    locale === "tr"
      ? [
          "Proje bazlı ürün desteği",
          "Geniş ürün ve renk seçeneği",
          "Hızlı teklif ve iletişim",
          "İhracat odaklı tedarik yapısı"
        ]
      : locale === "de"
        ? [
            "Projektbezogene Produktunterstützung",
            "Große Auswahl an Produkten und Farben",
            "Schnelle Angebote und Kommunikation",
            "Exportorientierte Lieferstruktur"
          ]
        : [
            "Project-based product support",
            "Wide range of products and colors",
            "Fast quotation and communication",
            "Export-oriented supply structure"
          ];

  return (
    <main className="bg-[#f7f8f5] text-[#111111] min-h-screen">
      <Navbar />

      <section className="pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <p className="text-[#0f7a3b] uppercase tracking-widest text-xs md:text-sm font-semibold">
                  DARİN ORMAN ÜRÜNLERİ
                </p>

                <h1 className="text-5xl md:text-7xl font-bold leading-tight mt-5">
                  {locale === "tr"
                    ? "Modern İç Mekanlar İçin Premium Ürün Çözümleri"
                    : locale === "de"
                      ? "Premium-Produkte für moderne Innenräume"
                      : "Premium Product Solutions for Modern Interiors"}
                </h1>

                <p className="text-gray-600 text-lg md:text-xl leading-relaxed mt-8 max-w-2xl">
                  {locale === "tr"
                    ? "Laminant, compact, kenar bandı, PVC, sarma folyo ve hırdavat gruplarında profesyonel tedarik çözümleri sunuyoruz."
                    : locale === "de"
                      ? "Wir bieten professionelle Lieferlösungen für Laminat, Compact, Kantenband, PVC, Wickelfolie und Beschlaggruppen."
                      : "We provide professional supply solutions in laminate, compact, edge band, PVC, wrapping foil and hardware groups."}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-10">
                  <Link
                    href={`/${locale}/products`}
                    className="bg-[#0f7a3b] text-white px-8 py-4 rounded-2xl font-semibold text-center hover:bg-[#095c2b] duration-300"
                  >
                    {locale === "tr"
                      ? "Ürünleri İncele"
                      : locale === "de"
                        ? "Produkte ansehen"
                        : "Explore Products"}
                  </Link>

                  <Link
                    href={`/${locale}/contact`}
                    className="border border-[#0f7a3b] text-[#0f7a3b] px-8 py-4 rounded-2xl font-semibold text-center hover:bg-[#0f7a3b] hover:text-white duration-300"
                  >
                    {locale === "tr"
                      ? "Teklif Al"
                      : locale === "de"
                        ? "Angebot anfordern"
                        : "Get Quote"}
                  </Link>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#0f7a3b]/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#0f7a3b]/10 rounded-full blur-3xl" />

                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600"
                  alt="Modern interior"
                  className="relative w-full h-[420px] md:h-[620px] object-cover rounded-[40px] border border-black/10 shadow-xl"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white border-y border-black/10">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <FadeIn>
            <div className="max-w-3xl mb-14">
              <p className="text-[#0f7a3b] uppercase tracking-widest text-xs md:text-sm font-semibold">
                {locale === "tr"
                  ? "Ürün Grupları"
                  : locale === "de"
                    ? "Produktgruppen"
                    : "Product Groups"}
              </p>

              <h2 className="text-4xl md:text-5xl font-bold mt-4">
                {locale === "tr"
                  ? "Geniş Ürün Yelpazesi"
                  : locale === "de"
                    ? "Breites Produktsortiment"
                    : "Wide Product Range"}
              </h2>

              <p className="text-gray-600 mt-6 text-lg">
                {locale === "tr"
                  ? "Projeleriniz için ihtiyacınız olan ürün gruplarını tek çatı altında sunuyoruz."
                  : locale === "de"
                    ? "Wir bieten die Produktgruppen, die Sie für Ihre Projekte benötigen, aus einer Hand."
                    : "We offer the product groups you need for your projects under one roof."}
              </p>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productGroups.map((item) => (
              <FadeIn key={item}>
                <div className="bg-[#f7f8f5] border border-black/10 rounded-3xl p-8 hover:border-[#0f7a3b] hover:-translate-y-1 hover:shadow-xl duration-300">
                  <h3 className="text-2xl font-bold">{item}</h3>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <FadeIn>
              <div>
                <p className="text-[#0f7a3b] uppercase tracking-widest text-xs md:text-sm font-semibold">
                  {locale === "tr"
                    ? "Neden Biz?"
                    : locale === "de"
                      ? "Warum wir?"
                      : "Why Us?"}
                </p>

                <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
                  {locale === "tr"
                    ? "Kaliteli Ürün, Güvenilir Tedarik, Profesyonel Hizmet"
                    : locale === "de"
                      ? "Qualitätsprodukte, zuverlässige Lieferung, professioneller Service"
                      : "Quality Products, Reliable Supply, Professional Service"}
                </h2>
              </div>
            </FadeIn>

            <div className="grid gap-5">
              {whyUsItems.map((item) => (
                <FadeIn key={item}>
                  <div className="bg-white border border-black/10 rounded-2xl p-6 text-xl font-semibold hover:border-[#0f7a3b] duration-300">
                    {item}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <FadeIn>
            <div className="bg-[#0f7a3b] text-white rounded-[40px] p-10 md:p-16 text-center">
              <h2 className="text-4xl md:text-5xl font-bold">
                {locale === "tr"
                  ? "Projeniz İçin Teklif Alın"
                  : locale === "de"
                    ? "Fordern Sie ein Angebot für Ihr Projekt an"
                    : "Get a Quote for Your Project"}
              </h2>

              <p className="text-white/80 mt-6 text-lg max-w-2xl mx-auto">
                {locale === "tr"
                  ? "Ürün gruplarımız hakkında detaylı bilgi ve fiyat teklifi almak için bizimle iletişime geçin."
                  : locale === "de"
                    ? "Kontaktieren Sie uns für detaillierte Informationen und ein Angebot zu unseren Produktgruppen."
                    : "Contact us for detailed information and quotation about our product groups."}
              </p>

              <Link
                href={`/${locale}/contact`}
                className="inline-block mt-10 bg-white text-[#0f7a3b] px-8 py-4 rounded-2xl font-semibold hover:opacity-90 duration-300"
              >
                {locale === "tr"
                  ? "İletişime Geç"
                  : locale === "de"
                    ? "Kontakt aufnehmen"
                    : "Contact Us"}
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}