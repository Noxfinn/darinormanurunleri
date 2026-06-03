const categories = [
  {
    title: "Amerikan Panel Kapı",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200"
  },
  {
    title: "Lake Kapı",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200"
  },
  {
    title: "Kapı Kasaları",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200"
  },
  {
    title: "Pervazlar",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200"
  }
];

export default function Categories() {
  return (
    <section id="categories" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-5xl font-bold mb-14">
          Ürün Kategorileri
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {categories.map((item) => (
            <div
              key={item.title}
              className="relative h-[350px] rounded-3xl overflow-hidden group cursor-pointer"
            >
              <img
                src={item.image}
                className="w-full h-full object-cover group-hover:scale-110 duration-500"
              />

              <div className="absolute inset-0 bg-black/40" />

              <div className="absolute bottom-8 left-8">
                <h3 className="text-2xl font-semibold">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}