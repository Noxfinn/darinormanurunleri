"use client";

import { motion } from "framer-motion";

type HeroProps = {
  title: string;
  description: string;
  catalogButton: string;
  offerButton: string;
};

export default function Hero({
  title,
  description,
  catalogButton,
  offerButton
}: HeroProps) {
  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden bg-[#f7f8f5]">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1800')"
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#f7f8f5] via-[#f7f8f5]/90 to-[#f7f8f5]/40" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-6 w-full pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <p className="text-[#0f7a3b] uppercase tracking-[0.25em] md:tracking-[0.4em] mb-5 text-xs md:text-sm font-semibold">
            Darin Orman Ürünleri
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight text-[#111111]">
            {title}
          </h1>

          <p className="mt-6 md:mt-8 text-gray-600 max-w-2xl text-base md:text-xl leading-relaxed">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10 md:mt-12">
            <a
              href="#categories"
              className="bg-[#0f7a3b] text-white px-7 py-4 rounded-2xl font-semibold text-center hover:bg-[#095c2b] duration-300"
            >
              {catalogButton}
            </a>

            <a
              href="/tr/contact"
              className="border border-[#0f7a3b] text-[#0f7a3b] px-7 py-4 rounded-2xl text-center hover:bg-[#0f7a3b] hover:text-white duration-300"
            >
              {offerButton}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}