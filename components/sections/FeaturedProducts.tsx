const products = [
  {
    title: "Modern Lake Kapı",
    code: "LK-101",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200"
  },
  {
    title: "Premium Melamin Kapı",
    code: "MK-202",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200"
  },
  {
    title: "Ahşap Kapı Kasası",
    code: "AK-301",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200"
  }
];

export default function FeaturedProducts() {
  return (
    <section className="pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-5xl font-bold mb-14">
          Öne Çıkan Ürünler
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((item) => (
            <div
              key={item.code}
              className="bg-[#171717] rounded-3xl overflow-hidden border border-gray-800"
            >
              <img
                src={item.image}
                className="w-full h-[320px] object-cover"
              />

              <div className="p-8">
                <h3 className="text-3xl font-semibold">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-3">
                  Model Kodu: {item.code}
                </p>

                <ul className="mt-6 text-gray-300 space-y-2">
                  <li>42mm Kalınlık</li>
                  <li>Özel Ölçü Üretim</li>
                  <li>Dayanıklı Yüzey</li>
                </ul>

                <button className="mt-8 border border-white px-5 py-3 rounded-xl hover:bg-white hover:text-black duration-300">
                  İncele
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}