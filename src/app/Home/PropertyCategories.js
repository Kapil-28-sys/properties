"use client";

import {
  Home,
  Building2,
  Trees,
  MapPin,
} from "lucide-react";

const categories = [
  {
    title: "Luxury Villas",
    desc: "Premium villas with modern amenities",
    icon: Home,
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=900",
  },
  {
    title: "Apartments",
    desc: "Comfortable city living spaces",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=900",
  },
  {
    title: "Plots",
    desc: "Buy land for future investment",
    icon: MapPin,
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=900",
  },
  {
    title: "Farmhouses",
    desc: "Peaceful countryside properties",
    icon: Trees,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900",
  },
];

export default function PropertyCategories() {
  return (
    <section className="relative py-28 px-6 bg-gradient-to-b from-[#fbf7f0] to-white overflow-hidden">

      {/* 🌑 DOT PATTERN BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage:
            "radial-gradient(#b88a44 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* soft glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#b88a44]/10 blur-[140px] rounded-full" />

      <div className="relative max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900">
          Property Categories
        </h2>

        <p className="text-center text-gray-500 mt-3 mb-14">
          Discover premium spaces designed for modern living & investment
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group relative rounded-3xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
              >
                {/* image */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  <div className="absolute top-4 left-4 w-11 h-11 flex items-center justify-center rounded-xl bg-white/90 shadow-md backdrop-blur">
                    <Icon className="w-5 h-5 text-[#b88a44]" />
                  </div>
                </div>

                {/* content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#b88a44] transition">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    {item.desc}
                  </p>

                  <div className="mt-4 flex items-center text-sm font-medium text-[#b88a44]">
                    Explore
                    <span className="ml-2 group-hover:ml-3 transition-all duration-300">
                      →
                    </span>
                  </div>
                </div>

                {/* bottom glow line */}
                <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#b88a44] group-hover:w-full transition-all duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}