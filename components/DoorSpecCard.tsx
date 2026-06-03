"use client";

import Image from "next/image";

type Props = {
  image: string;
  title: string;
  wing: string;
  frame: string;
  architrave: string;
  catalogUrl?: string;
};

export default function DoorSpecCard({
  image,
  title,
  wing,
  frame,
  architrave,
  catalogUrl
}: Props) {
  return (
    <div className="bg-white border border-black/10 rounded-3xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 duration-300">

      <div className="relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={1200}
          height={900}
          className="w-full h-[420px] object-cover"
        />
      </div>

      <div className="p-8">

        <h2 className="text-3xl font-bold text-[#111111] mb-8">
          {title}
        </h2>

        <div className="space-y-6">

          <div className="border border-black/10 rounded-2xl p-5">
            <h3 className="text-[#0f7a3b] font-semibold text-lg mb-3">
              1 - Kanat
            </h3>

            <p className="text-gray-600 leading-relaxed">
              {wing}
            </p>
          </div>

          <div className="border border-black/10 rounded-2xl p-5">
            <h3 className="text-[#0f7a3b] font-semibold text-lg mb-3">
              2 - Kasa
            </h3>

            <p className="text-gray-600 leading-relaxed">
              {frame}
            </p>
          </div>

          <div className="border border-black/10 rounded-2xl p-5">
            <h3 className="text-[#0f7a3b] font-semibold text-lg mb-3">
              3 - Pervazlar
            </h3>

            <p className="text-gray-600 leading-relaxed">
              {architrave}
            </p>
          </div>

        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-10">

          {catalogUrl && (
            <a
              href={catalogUrl}
              target="_blank"
              className="bg-[#0f7a3b] text-white px-6 py-4 rounded-2xl text-center font-semibold hover:bg-[#095c2b] duration-300"
            >
              Katalog İndir
            </a>
          )}

          <a
            href="https://wa.me/905555555555"
            target="_blank"
            className="border border-black/10 px-6 py-4 rounded-2xl text-center font-semibold text-[#111111] hover:border-[#0f7a3b] hover:text-[#0f7a3b] duration-300"
          >
            WhatsApp Teklif Al
          </a>

        </div>

      </div>

    </div>
  );
}