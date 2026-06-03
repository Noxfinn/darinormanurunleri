import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

import Link from "next/link";
import Image from "next/image";

import { client } from "@/lib/sanity";
import { categoriesQuery } from "@/lib/queries";

type Props = {
  params: Promise<{
    locale: "tr" | "en";
  }>;
};

export default async function CategoriesPage({
  params
}: Props) {
  const { locale } = await params;

  const categories = await client.fetch(
    categoriesQuery
  );

  return (
    <main className="bg-[#0f0f0f] text-white min-h-screen">

      <Navbar />

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          {/* HEADER */}
          <div className="mb-20">

            <p className="text-gray-400 uppercase tracking-widest">
              EPINOX
            </p>

            <h1 className="text-6xl font-bold mt-4">

              {locale === "tr"
                ? "Kategoriler"
                : "Categories"}

            </h1>

            <p className="text-gray-400 mt-6 max-w-2xl text-lg">

              {locale === "tr"
                ? "Kapı, kapı kasası ve pervaz kategorilerimizi inceleyin."
                : "Explore our door, frame and molding categories."}

            </p>

          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-3 gap-8">

            {categories.map((category: any) => {

              const title =
                locale === "tr"
                  ? category.titleTR
                  : category.titleEN || category.titleTR;

              return (

                <Link
                  key={category._id}

                  href={`/${locale}/categories/${category.slug}`}
                >

                  <div className="bg-[#171717] rounded-3xl overflow-hidden border border-gray-800 hover:border-white duration-300">

                    {category.image && (

                      <Image
                        src={category.image}
                        alt={title}
                        width={800}
                        height={600}
                        className="w-full h-[300px] object-cover"
                      />

                    )}

                    <div className="p-8">

                      <h2 className="text-3xl font-bold">
                        {title}
                      </h2>

                      <button className="mt-8 border border-white px-5 py-3 rounded-xl">

                        {locale === "tr"
                          ? "Kategoriyi İncele"
                          : "Explore Category"}

                      </button>

                    </div>

                  </div>

                </Link>

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