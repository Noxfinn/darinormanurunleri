import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactForm from "@/components/ContactForm";
import FadeIn from "@/components/FadeIn";

type Props = {
  params: Promise<{
    locale: "tr" | "en" | "de";
  }>;
};

const companyInfo = {
  name: "Darin Orman Ürünleri",
  phoneDisplay: "+90 531 268 21 21",
  phoneHref: "tel:+905312682121",
  whatsappDisplay: "+90 531 268 21 21",
  whatsappHref: "https://wa.me/905312682121",
  email: "darinormanurunleri@gmail.com",
  addressTR:
    "Seyrantepe Sanayi Sitesi, Sanayi 31. Sokak No: 2A, 21100 Yenişehir / Diyarbakır",
  addressEN:
    "Seyrantepe Industrial Site, Sanayi 31st Street No: 2A, 21100 Yenişehir / Diyarbakır",
  addressDE:
    "Seyrantepe Industriegebiet, Sanayi 31. Straße Nr. 2A, 21100 Yenişehir / Diyarbakır",
  mapQuery:
    "Darin Orman Ürünleri Seyrantepe Sanayi Sitesi Sanayi 31. Sokak No 2A Yenişehir Diyarbakır"
};

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;

  const address =
    locale === "tr"
      ? companyInfo.addressTR
      : locale === "de"
        ? companyInfo.addressDE
        : companyInfo.addressEN;

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
                  ? "İletişim"
                  : locale === "de"
                    ? "Kontakt"
                    : "Contact"}
              </h1>

              <p className="text-gray-600 mt-6 max-w-2xl text-base md:text-lg">
                {locale === "tr"
                  ? "Teklif almak veya detaylı bilgi için bizimle iletişime geçebilirsiniz."
                  : locale === "de"
                    ? "Kontaktieren Sie uns für Angebote oder detaillierte Informationen."
                    : "Contact us for quotations and detailed information."}
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-10 md:gap-16">
            <FadeIn>
              <div className="space-y-8 md:space-y-10">
                <div className="bg-white border-2 border-[#d7eadf] rounded-3xl p-7 md:p-10 shadow-sm">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">
                    {locale === "tr"
                      ? "İletişim Bilgileri"
                      : locale === "de"
                        ? "Kontaktinformationen"
                        : "Contact Information"}
                  </h2>

                  <div className="space-y-5 text-gray-600 text-base md:text-lg">
                    <p>
                      <span className="font-semibold text-[#111111]">
                        {companyInfo.name}
                      </span>
                    </p>

                    <p>📍 {address}</p>

                    <p>
                      📞{" "}
                      <a
                        href={companyInfo.phoneHref}
                        className="hover:text-[#0f7a3b] duration-300"
                      >
                        {companyInfo.phoneDisplay}
                      </a>
                    </p>

                    <p>
                      💬{" "}
                      <a
                        href={companyInfo.whatsappHref}
                        target="_blank"
                        className="hover:text-[#0f7a3b] duration-300"
                      >
                        WhatsApp: {companyInfo.whatsappDisplay}
                      </a>
                    </p>

                    <p>
                      ✉️{" "}
                      <a
                        href={`mailto:${companyInfo.email}`}
                        className="hover:text-[#0f7a3b] duration-300"
                      >
                        {companyInfo.email}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="border-2 border-[#d7eadf] rounded-3xl overflow-hidden h-[320px] md:h-[420px] shadow-sm bg-white">
                  <iframe
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(
                      companyInfo.mapQuery
                    )}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                    width="100%"
                    height="100%"
                    loading="lazy"
                  />
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <ContactForm locale={locale} />
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}