"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

type Locale = "tr" | "en" | "de";

export default function Navbar() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  const currentLocale: Locale = pathname.startsWith("/de")
    ? "de"
    : pathname.startsWith("/en")
      ? "en"
      : "tr";

  const switchToLocale = (targetLocale: Locale) => {
    if (
      pathname.startsWith("/tr") ||
      pathname.startsWith("/en") ||
      pathname.startsWith("/de")
    ) {
      return pathname.replace(/^\/(tr|en|de)/, `/${targetLocale}`);
    }

    return `/${targetLocale}`;
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-black/10">
      <div className="max-w-7xl mx-auto px-5 md:px-6 h-28 flex items-center justify-between">
        <Link href={`/${currentLocale}`} className="flex items-center shrink-0">
          <div className="bg-white rounded-xl px-4 py-3 overflow-hidden">
            <Image
              src="/logo.png"
              alt="Darin Orman Ürünleri Logo"
              width={760}
              height={220}
              priority
              className="h-20 md:h-24 w-auto object-contain mix-blend-multiply"
            />
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 xl:gap-12">
          <Link
            href={`/${currentLocale}`}
            className="text-sm uppercase tracking-[0.14em] text-[#111111] hover:text-[#0f7a3b] duration-300 font-medium"
          >
            {currentLocale === "tr"
              ? "Ana Sayfa"
              : currentLocale === "de"
                ? "Startseite"
                : "Home"}
          </Link>

          <Link
            href={`/${currentLocale}/products`}
            className="text-sm uppercase tracking-[0.14em] text-[#111111] hover:text-[#0f7a3b] duration-300 font-medium"
          >
            {currentLocale === "tr"
              ? "Ürünler"
              : currentLocale === "de"
                ? "Produkte"
                : "Products"}
          </Link>

          <Link
            href={`/${currentLocale}/doors`}
            className="text-sm uppercase tracking-[0.14em] text-[#111111] hover:text-[#0f7a3b] duration-300 font-medium"
          >
            {currentLocale === "tr"
              ? "Kapılar"
              : currentLocale === "de"
                ? "Türen"
                : "Doors"}
          </Link>

          <Link
            href={`/${currentLocale}/about`}
            className="text-sm uppercase tracking-[0.14em] text-[#111111] hover:text-[#0f7a3b] duration-300 font-medium"
          >
            {currentLocale === "tr"
              ? "Kurumsal"
              : currentLocale === "de"
                ? "Über Uns"
                : "About"}
          </Link>

          <Link
            href={`/${currentLocale}/contact`}
            className="text-sm uppercase tracking-[0.14em] text-[#111111] hover:text-[#0f7a3b] duration-300 font-medium"
          >
            {currentLocale === "tr"
              ? "İletişim"
              : currentLocale === "de"
                ? "Kontakt"
                : "Contact"}
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <div className="relative">
            <button
              onClick={() => setLanguageOpen(!languageOpen)}
              className="text-sm border border-black/10 px-5 py-3 rounded-full hover:bg-[#0f7a3b] hover:text-white duration-300 text-[#111111]"
            >
              {currentLocale.toUpperCase()}
            </button>

            {languageOpen && (
              <div className="absolute right-0 mt-2 w-20 bg-white border border-black/10 rounded-xl overflow-hidden shadow-xl z-50">
                <Link
                  href={switchToLocale("tr")}
                  onClick={() => setLanguageOpen(false)}
                  className="block px-4 py-3 hover:bg-[#0f7a3b] hover:text-white duration-300"
                >
                  TR
                </Link>

                <Link
                  href={switchToLocale("en")}
                  onClick={() => setLanguageOpen(false)}
                  className="block px-4 py-3 hover:bg-[#0f7a3b] hover:text-white duration-300"
                >
                  EN
                </Link>

                <Link
                  href={switchToLocale("de")}
                  onClick={() => setLanguageOpen(false)}
                  className="block px-4 py-3 hover:bg-[#0f7a3b] hover:text-white duration-300"
                >
                  DE
                </Link>
              </div>
            )}
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-1"
          >
            <span className="w-7 h-[2px] bg-[#111111]" />
            <span className="w-7 h-[2px] bg-[#111111]" />
            <span className="w-7 h-[2px] bg-[#111111]" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-black/10 bg-white">
          <nav className="flex flex-col px-6 py-6">
            <Link
              href={`/${currentLocale}`}
              onClick={() => setMenuOpen(false)}
              className="py-4 border-b border-black/10 text-[#111111] hover:text-[#0f7a3b] duration-300"
            >
              {currentLocale === "tr"
                ? "Ana Sayfa"
                : currentLocale === "de"
                  ? "Startseite"
                  : "Home"}
            </Link>

            <Link
              href={`/${currentLocale}/products`}
              onClick={() => setMenuOpen(false)}
              className="py-4 border-b border-black/10 text-[#111111] hover:text-[#0f7a3b] duration-300"
            >
              {currentLocale === "tr"
                ? "Ürünler"
                : currentLocale === "de"
                  ? "Produkte"
                  : "Products"}
            </Link>

            <Link
              href={`/${currentLocale}/doors`}
              onClick={() => setMenuOpen(false)}
              className="py-4 border-b border-black/10 text-[#111111] hover:text-[#0f7a3b] duration-300"
            >
              {currentLocale === "tr"
                ? "Kapılar"
                : currentLocale === "de"
                  ? "Türen"
                  : "Doors"}
            </Link>

            <Link
              href={`/${currentLocale}/about`}
              onClick={() => setMenuOpen(false)}
              className="py-4 border-b border-black/10 text-[#111111] hover:text-[#0f7a3b] duration-300"
            >
              {currentLocale === "tr"
                ? "Kurumsal"
                : currentLocale === "de"
                  ? "Über Uns"
                  : "About"}
            </Link>

            <Link
              href={`/${currentLocale}/contact`}
              onClick={() => setMenuOpen(false)}
              className="py-4 border-b border-black/10 text-[#111111] hover:text-[#0f7a3b] duration-300"
            >
              {currentLocale === "tr"
                ? "İletişim"
                : currentLocale === "de"
                  ? "Kontakt"
                  : "Contact"}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}