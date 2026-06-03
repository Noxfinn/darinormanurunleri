"use client";

import { usePathname } from "next/navigation";

export default function WhatsAppButton() {
  const pathname = usePathname();

  const locale = pathname.startsWith("/de")
    ? "de"
    : pathname.startsWith("/en")
      ? "en"
      : "tr";

  const phoneNumber = "905312682121";

  const message =
    locale === "tr"
      ? "Merhaba, Darin Orman Ürünleri ürünleri hakkında bilgi ve teklif almak istiyorum."
      : locale === "de"
        ? "Hallo, ich möchte Informationen und ein Angebot zu den Produkten von Darin Orman Ürünleri erhalten."
        : "Hello, I would like to get information and a quotation about Darin Orman Ürünleri products.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 bg-[#0f7a3b] text-white px-4 py-3 rounded-full shadow-xl font-medium hover:scale-105 hover:bg-[#0c6430] duration-300 text-xs md:text-sm"
    >
      <span className="hidden sm:inline">
        {locale === "tr"
          ? "WhatsApp Teklif Al"
          : locale === "de"
            ? "WhatsApp Angebot"
            : "Get Quote on WhatsApp"}
      </span>

      <span className="sm:hidden">WhatsApp</span>
    </a>
  );
}