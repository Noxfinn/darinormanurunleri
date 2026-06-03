"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Locale = "tr" | "en" | "de";

export default function Footer() {
  const pathname = usePathname();

  const currentLocale: Locale = pathname.startsWith("/de")
    ? "de"
    : pathname.startsWith("/en")
      ? "en"
      : "tr";

  return (
    <footer className="border-t border-black/10 bg-white mt-24">
      <div className="max-w-7xl mx-auto px-5 md:px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-[#111111]">
              Darin Orman Ürünleri
            </h2>

            <p className="text-gray-600 mt-6 leading-relaxed">
              {currentLocale === "tr"
                ? "Kapı sistemleri, laminant, compact, kenar bandı, PVC, sarma / PP folyo, tutkal ve hırdavat gruplarında profesyonel tedarik çözümleri sunuyoruz."
                : currentLocale === "de"
                  ? "Wir bieten professionelle Lieferlösungen für Türsysteme, Laminat, Compact, Kantenband, PVC, PP-Folie, Klebstoffe und Beschläge."
                  : "We provide professional supply solutions in door systems, laminate, compact, edge banding, PVC, wrapping / PP foil, adhesive and hardware groups."}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">
              {currentLocale === "tr"
                ? "Ürün Grupları"
                : currentLocale === "de"
                  ? "Produktgruppen"
                  : "Product Groups"}
            </h3>

            <div className="flex flex-col gap-4 text-gray-600">
              <Link href={`/${currentLocale}/products`} className="hover:text-[#0f7a3b]">
                {currentLocale === "de" ? "Laminat" : "Laminant"}
              </Link>

              <Link href={`/${currentLocale}/products`} className="hover:text-[#0f7a3b]">
                Compact
              </Link>

              <Link href={`/${currentLocale}/doors`} className="hover:text-[#0f7a3b]">
                {currentLocale === "tr"
                  ? "Kapılar"
                  : currentLocale === "de"
                    ? "Türen"
                    : "Doors"}
              </Link>

              <Link href={`/${currentLocale}/products`} className="hover:text-[#0f7a3b]">
                {currentLocale === "tr"
                  ? "Kenar Bandı"
                  : currentLocale === "de"
                    ? "Kantenband"
                    : "Edge Banding"}
              </Link>

              <Link href={`/${currentLocale}/products`} className="hover:text-[#0f7a3b]">
                PVC
              </Link>

              <Link href={`/${currentLocale}/products`} className="hover:text-[#0f7a3b]">
                {currentLocale === "tr"
                  ? "Tutkal Grupları"
                  : currentLocale === "de"
                    ? "Klebstoffgruppen"
                    : "Adhesive Groups"}
              </Link>

              <Link href={`/${currentLocale}/products`} className="hover:text-[#0f7a3b]">
                {currentLocale === "tr"
                  ? "Hırdavat Grupları"
                  : currentLocale === "de"
                    ? "Beschlaggruppen"
                    : "Hardware Groups"}
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">
              {currentLocale === "tr"
                ? "Kurumsal"
                : currentLocale === "de"
                  ? "Unternehmen"
                  : "Corporate"}
            </h3>

            <div className="flex flex-col gap-4 text-gray-600">
              <Link href={`/${currentLocale}`} className="hover:text-[#0f7a3b]">
                {currentLocale === "tr"
                  ? "Ana Sayfa"
                  : currentLocale === "de"
                    ? "Startseite"
                    : "Home"}
              </Link>

              <Link href={`/${currentLocale}/about`} className="hover:text-[#0f7a3b]">
                {currentLocale === "tr"
                  ? "Hakkımızda"
                  : currentLocale === "de"
                    ? "Über Uns"
                    : "About Us"}
              </Link>

              <Link href={`/${currentLocale}/contact`} className="hover:text-[#0f7a3b]">
                {currentLocale === "tr"
                  ? "İletişim"
                  : currentLocale === "de"
                    ? "Kontakt"
                    : "Contact"}
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">
              {currentLocale === "tr"
                ? "İletişim"
                : currentLocale === "de"
                  ? "Kontakt"
                  : "Contact"}
            </h3>

            <div className="space-y-4 text-gray-600">
              <p>
                {currentLocale === "de"
                  ? "Diyarbakır / Türkei"
                  : "Diyarbakır / Türkiye"}
              </p>

              <a
                href="tel:+905312682121"
                className="block hover:text-[#0f7a3b] duration-300"
              >
                +90 531 268 21 21
              </a>

              <a
                href="mailto:darinormanurunleri@gmail.com"
                className="block hover:text-[#0f7a3b] duration-300"
              >
                darinormanurunleri@gmail.com
              </a>

              <p className="leading-relaxed">
                Seyrantepe Sanayi Sitesi,
                <br />
                Sanayi 31. Sokak No: 2A,
                <br />
                21100 Yenişehir / Diyarbakır
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-black/10 mt-12 pt-8 text-gray-500 text-sm">
          {currentLocale === "tr"
            ? "© 2026 Darin Orman Ürünleri. Tüm hakları saklıdır."
            : currentLocale === "de"
              ? "© 2026 Darin Orman Ürünleri. Alle Rechte vorbehalten."
              : "© 2026 Darin Forest Products. All rights reserved."}
        </div>
      </div>
    </footer>
  );
}