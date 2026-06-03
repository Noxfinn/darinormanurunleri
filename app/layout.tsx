import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Darin Orman Ürünleri",
    template: "%s | Darin Orman Ürünleri"
  },

  description:
    "Kapı sistemleri, laminant, compact, kenar bandı, PVC, sarma folyo, tutkal ve hırdavat gruplarında profesyonel tedarik çözümleri.",

  keywords: [
    "Darin Orman Ürünleri",
    "kapı",
    "kapı sistemleri",
    "iç mekan kapısı",
    "lake kapı",
    "laminant kapı",
    "kaplamalı kapı",
    "panel kapı",
    "kenar bandı",
    "PVC",
    "compact",
    "laminant",
    "tutkal",
    "hırdavat",
    "Diyarbakır"
  ],

  openGraph: {
    title: "Darin Orman Ürünleri",
    description:
      "Kapı sistemleri, laminant, compact, kenar bandı, PVC, sarma folyo, tutkal ve hırdavat gruplarında profesyonel tedarik çözümleri.",

    url: "https://darinormanurunleri.com",

    siteName: "Darin Orman Ürünleri",

    images: [
      {
        url: "/about-products.jpg",
        width: 1920,
        height: 1080
      }
    ],

    locale: "tr_TR",
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}