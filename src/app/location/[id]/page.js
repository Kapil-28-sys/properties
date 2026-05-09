"use client";

const categories = [
  {
    id: 1,
    title: "Luxury Villas",
    subtitle: "450 Premium Listings",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    span: "md:col-span-6 md:row-span-2",
    featured: true,
  },
  {
    id: 2,
    title: "Apartments",
    subtitle: "220 Listings",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    span: "md:col-span-3",
  },
  {
    id: 3,
    title: "Upcoming Projects",
    subtitle: "300 Listings",
    span: "md:col-span-3",
    bg: "bg-gradient-to-br from-blue-500 to-purple-600",
    icon: "🔥",
  },
  {
    id: 4,
    title: "Commercial Property",
    subtitle: "906 Listings",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    span: "md:col-span-3 md:row-span-2",
  },
  {
    id: 5,
    title: "Dubai Hills",
    subtitle: "145 Listings",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    span: "md:col-span-3",
  },
  {
    id: 6,
    title: "Premium Homes",
    subtitle: "180 Listings",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80",
    span: "md:col-span-3",
  },
];

export default function PropertyGallery() {
  return (
    <section className="max-w-7xl mx-auto px-5 py-20">
      {/* HEADER */}
      <div className="flex items-end justify-between mb-12">
        <div>
          <p className="text-orange-500 font-semibold uppercase tracking-[4px]">
            Featured Collection
          </p>

          <h2 className="text-5xl font-black mt-3 text-gray-900">
            Popular Properties
          </h2>
        </div>

        <button className="hidden md:flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-full hover:bg-black hover:text-white transition-all duration-300">
          View All
        </button>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[220px]">
        {categories.map((item) => (
          <div
            key={item.id}
            className={`relative overflow-hidden rounded-[30px] group cursor-pointer ${item.span} ${
              item.bg ? item.bg : ""
            }`}
          >
            {/* IMAGE */}
            {item.image && (
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />
            )}

            {/* DARK OVERLAY */}
            {item.image && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            )}

            {/* TEXT CONTENT */}
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-3xl font-bold leading-tight">
                {item.title}
              </h3>
              <p className="text-gray-200 mt-1">{item.subtitle}</p>
            </div>

            {/* ICON CARD */}
            {item.icon && (
              <div className="absolute top-5 right-5 bg-white rounded-full p-3 shadow-lg text-xl">
                {item.icon}
              </div>
            )}

            {/* FEATURED TAG */}
            {item.featured && (
              <div className="absolute top-5 left-5 bg-white/20 backdrop-blur-xl text-white px-4 py-2 rounded-full text-sm">
                Featured
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}