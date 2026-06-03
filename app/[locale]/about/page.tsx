import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FadeIn from "@/components/FadeIn";

type Props = {
  params: Promise<{
    locale: "tr" | "en" | "de";
  }>;
};

const stats = [
  {
    number: "15+",
    tr: "Yıllık Deneyim",
    en: "Years Experience",
    de: "Jahre Erfahrung"
  },
  {
    number: "20+",
    tr: "Ülkeye İhracat",
    en: "Export Countries",
    de: "Exportländer"
  },
  {
    number: "500+",
    tr: "Tamamlanan Proje",
    en: "Completed Projects",
    de: "Abgeschlossene Projekte"
  },
  {
    number: "100%",
    tr: "Kalite Odaklı Hizmet",
    en: "Quality-Focused Service",
    de: "Qualitätsorientierter Service"
  }
];

const features = [
  {
    tr: "Kapı Sistemleri",
    en: "Door Systems",
    de: "Türsysteme"
  },
  {
    tr: "Laminant ve Compact",
    en: "Laminate and Compact",
    de: "Laminat und Compact"
  },
  {
    tr: "Kenar Bandı ve PVC",
    en: "Edge Banding and PVC",
    de: "Kantenband und PVC"
  },
  {
    tr: "Sarma / PP Folyo",
    en: "Wrapping / PP Foil",
    de: "Wickel- / PP-Folie"
  },
  {
    tr: "Tutkal Grupları",
    en: "Adhesive Groups",
    de: "Klebstoffgruppen"
  },
  {
    tr: "Hırdavat Grupları",
    en: "Hardware Groups",
    de: "Beschlaggruppen"
  }
];

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;

  return (
    <main className="bg-[#f7f8f5] text-[#111111] min-h-screen">
      <Navbar />

      <section className="pt-32 md:pt-40 pb-20 md:pb-24">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <FadeIn>
            <div className="mb-16 md:mb-20">
              <p className="text-[#0f7a3b] uppercase tracking-widest text-xs md:text-sm font-semibold">
                DARİN ORMAN ÜRÜNLERİ
              </p>

              <h1 className="text-4xl md:text-6xl font-bold mt-4 leading-tight max-w-4xl">
                {locale === "tr"
                  ? "Premium Ürün Gruplarında Güvenilir Tedarikçi"
                  : locale === "de"
                    ? "Zuverlässiger Lieferant für Premium-Produktgruppen"
                    : "Trusted Supplier in Premium Product Groups"}
              </h1>

              <p className="text-gray-600 mt-6 max-w-3xl text-base md:text-lg leading-relaxed">
                {locale === "tr"
                  ? "Kapı sistemleri, laminant, compact, kenar bandı, PVC, sarma folyo, tutkal ve hırdavat gruplarında kaliteli ürün ve profesyonel tedarik çözümleri sunuyoruz."
                  : locale === "de"
                    ? "Wir bieten hochwertige Produkte und professionelle Lieferlösungen in den Bereichen Türsysteme, Laminat, Compact, Kantenband, PVC, Wickelfolie, Klebstoffe und Beschläge."
                    : "We provide quality products and professional supply solutions in door systems, laminate, compact, edge banding, PVC, wrapping foil, adhesive and hardware groups."}
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="rounded-[32px] md:rounded-[40px] overflow-hidden border-2 border-[#d7eadf] mb-20 md:mb-24 shadow-sm">
              <img
                src="/about-products.png"
                alt="Darin Orman Ürünleri product groups"
                className="w-full h-[320px] md:h-[620px] object-cover"
              />
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-20 md:mb-24">
            {stats.map((item) => (
              <FadeIn key={item.tr}>
                <div className="bg-white border-2 border-[#d7eadf] rounded-3xl p-8 md:p-10 text-center hover:border-[#0f7a3b] hover:shadow-[0_20px_60px_rgba(15,122,59,0.18)] duration-300">
                  <h2 className="text-4xl md:text-6xl font-bold text-[#0f7a3b]">
                    {item.number}
                  </h2>

                  <p className="text-gray-600 mt-5 text-base md:text-lg">
                    {locale === "tr"
                      ? item.tr
                      : locale === "de"
                        ? item.de
                        : item.en}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center mb-20 md:mb-24">
            <FadeIn>
              <div>
                <p className="text-[#0f7a3b] uppercase tracking-widest text-xs md:text-sm font-semibold">
                  {locale === "tr"
                    ? "Ürün ve Tedarik"
                    : locale === "de"
                      ? "Produkte und Lieferung"
                      : "Products and Supply"}
                </p>

                <h2 className="text-3xl md:text-5xl font-bold leading-tight mt-4">
                  {locale === "tr"
                    ? "Geniş Ürün Yelpazesi ve Güçlü Tedarik Yapısı"
                    : locale === "de"
                      ? "Breites Produktsortiment und starke Lieferstruktur"
                      : "Wide Product Range and Strong Supply Structure"}
                </h2>

                <p className="text-gray-600 text-base md:text-lg leading-relaxed mt-8">
                  {locale === "tr"
                    ? "Darin Orman Ürünleri olarak mobilya, kapı ve iç mekan çözümlerine yönelik farklı ürün gruplarını tek çatı altında sunuyoruz. Proje bazlı ihtiyaçlara uygun ürün seçimi, hızlı iletişim ve ihracat odaklı hizmet anlayışıyla müşterilerimize değer katıyoruz."
                    : locale === "de"
                      ? "Als Darin Orman Ürünleri bieten wir verschiedene Produktgruppen für Möbel, Türen und Innenraumlösungen aus einer Hand an. Mit projektbezogener Produktauswahl, schneller Kommunikation und exportorientiertem Service schaffen wir Mehrwert für unsere Kunden."
                      : "As Darin Forest Products, we offer various product groups for furniture, doors and interior solutions under one roof. We add value to our customers with product selection for project-based needs, fast communication and export-oriented service."}
                </p>
              </div>
            </FadeIn>

            <div className="grid sm:grid-cols-2 gap-5">
              {features.map((item) => (
                <FadeIn key={item.tr}>
                  <div className="bg-white border-2 border-[#d7eadf] rounded-2xl p-6 text-lg md:text-xl font-semibold hover:border-[#0f7a3b] hover:shadow-xl duration-300">
                    {locale === "tr"
                      ? item.tr
                      : locale === "de"
                        ? item.de
                        : item.en}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          <section className="pb-4">
            <div className="grid md:grid-cols-3 gap-8">
              <FadeIn>
                <div className="bg-white border-2 border-[#d7eadf] rounded-3xl p-8 hover:border-[#0f7a3b] hover:shadow-xl duration-300">
                  <h3 className="text-2xl font-bold text-[#111111] mb-4">
                    {locale === "tr"
                      ? "Premium Kapı Sistemleri"
                      : locale === "de"
                        ? "Premium-Türsysteme"
                        : "Premium Door Systems"}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {locale === "tr"
                      ? "Modern iç mekanlara uygun lake, laminant, kaplamalı ve panel kapı çözümleri sunuyoruz."
                      : locale === "de"
                        ? "Wir bieten Lack-, Laminat-, Furnier- und Paneeltürlösungen für moderne Innenräume."
                        : "We provide lacquer, laminate, veneered and panel door solutions for modern interior spaces."}
                  </p>
                </div>
              </FadeIn>

              <FadeIn>
                <div className="bg-white border-2 border-[#d7eadf] rounded-3xl p-8 hover:border-[#0f7a3b] hover:shadow-xl duration-300">
                  <h3 className="text-2xl font-bold text-[#111111] mb-4">
                    {locale === "tr"
                      ? "Mobilya Yan Ürünleri"
                      : locale === "de"
                        ? "Möbelzubehörprodukte"
                        : "Furniture Supplementary Products"}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {locale === "tr"
                      ? "Kenar bandı, PVC, PP folyo, tutkal ve hırdavat gruplarıyla üretim süreçlerini destekliyoruz."
                      : locale === "de"
                        ? "Wir unterstützen Produktionsprozesse mit Kantenband, PVC, PP-Folie, Klebstoffen und Beschlaggruppen."
                        : "We support production processes with edge banding, PVC, PP foil, adhesive and hardware groups."}
                  </p>
                </div>
              </FadeIn>

              <FadeIn>
                <div className="bg-white border-2 border-[#d7eadf] rounded-3xl p-8 hover:border-[#0f7a3b] hover:shadow-xl duration-300">
                  <h3 className="text-2xl font-bold text-[#111111] mb-4">
                    {locale === "tr"
                      ? "İhracat Odaklı Hizmet"
                      : locale === "de"
                        ? "Exportorientierter Service"
                        : "Export-Oriented Service"}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {locale === "tr"
                      ? "Yurtiçi ve yurtdışı projeler için hızlı teklif, ürün danışmanlığı ve güvenilir tedarik desteği sağlıyoruz."
                      : locale === "de"
                        ? "Wir bieten schnelle Angebote, Produktberatung und zuverlässige Lieferunterstützung für nationale und internationale Projekte."
                        : "We provide fast quotations, product consultancy and reliable supply support for local and international projects."}
                  </p>
                </div>
              </FadeIn>
            </div>
          </section>
        </div>
      </section>

      <Footer />

      <WhatsAppButton />
    </main>
  );
}