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
    desc: "Secure land investment opportunities",
    icon: MapPin,
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=900",
  },
  {
    title: "Farmhouses",
    desc: "Peaceful countryside lifestyle",
    icon: Trees,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900",
  },
];

export default function PropertyCategories() {
  return (
    <section className="relative py-24 bg-[#fbf7f0] overflow-hidden font-body">

      {/* ✨ Fonts + Animations */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Jost:wght@300;400;500&display=swap');

        .font-heading { font-family: 'Cormorant Garamond', serif; }
        .font-body { font-family: 'Jost', sans-serif; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(25px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .fade-up {
          animation: fadeUp 0.8s ease forwards;
        }

        .card {
          transition: all 0.35s ease;
        }

        .card:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 70px rgba(0,0,0,0.12);
        }

        .shine {
          position: relative;
          overflow: hidden;
        }

        .shine::after {
          content: "";
          position: absolute;
          top: 0;
          left: -120%;
          width: 60%;
          height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.35), transparent);
          transition: 0.6s;
        }

        .shine:hover::after {
          left: 120%;
        }
      `}</style>

      {/* BACKGROUND DOTS */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: "radial-gradient(#b88a44 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* GOLD GLOW */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#b88a44]/10 blur-[140px] rounded-full" />

      <div className="relative max-w-6xl mx-auto px-5">

        {/* HEADER */}
        <div className="text-center mb-14 fade-up">

          <h2 className="font-heading text-5xl lg:text-6xl font-semibold text-[#1f1f1f]">
            Property Categories
          </h2>

          <p className="mt-3 text-gray-600 text-base">
            Discover premium spaces designed for modern living & investment
          </p>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7">

          {categories.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group card bg-white/80 backdrop-blur border border-[#d9c3a0]/25 rounded-3xl overflow-hidden"
              >

                {/* IMAGE */}
                <div className="relative h-56 overflow-hidden">

                  <img
                    src={item.image}
                    className="w-full h-full object-cover scale-105 group-hover:scale-110 transition duration-700"
                    alt={item.title}
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* ICON */}
                  <div className="absolute top-4 left-4 w-11 h-11 flex items-center justify-center rounded-xl bg-white/90 backdrop-blur shadow-md">

                    <Icon className="w-5 h-5 text-[#b88a44]" />

                  </div>

                </div>

                {/* CONTENT */}
                <div className="p-5">

                  <h3 className="font-heading text-lg font-semibold text-[#1f1f1f] group-hover:text-[#b88a44] transition">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-600 mt-1 leading-6">
                    {item.desc}
                  </p>

                  {/* CTA */}
                  <div className="mt-4 flex items-center text-sm font-medium text-[#b88a44]">

                    Explore
                    <span className="ml-2 group-hover:ml-3 transition-all duration-300">
                      →
                    </span>

                  </div>

                </div>

                {/* GOLD LINE */}
                <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#b88a44] group-hover:w-full transition-all duration-500" />

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}