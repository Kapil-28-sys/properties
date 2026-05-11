"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

/* -------------------- RAJASTHAN DISTRICTS -------------------- */
const rajasthanLocations = [
  {
    id: 1,
    name: "Ajmer",
    image:
      "https://www.rajasthantourpackages.in/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fx7ulapdbp%2F2edd1481-8338-419b-a9ea-06354e9b2300-ana-sagar-lake-ajmer-tour.jpg&w=3840&q=75",
    properties: 420,
    featured: false,
  },
  {
    id: 2,
    name: "Alwar",
    image:
      "https://www.revv.co.in/blogs/wp-content/uploads/2020/05/road-trip-delhi-to-alwar.jpg",
    properties: 380,
    featured: false,
  },
  {
    id: 3,
    name: "Bharatpur",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/30/Purana_mehal.jpg",
    properties: 290,
    featured: false,
  },
  {
    id: 4,
    name: "Bikaner",
    image:
      "https://static.tripclap.com/uploads/story/850X450/1667751632-1667751632-9801e.webp",
    properties: 510,
    featured: false,
  },
  {
    id: 5,
    name: "Chittorgarh",
    image:
      "https://magikindia.com/wp-content/uploads/2018/08/chittorgarh-fort-1024x683.jpg",
    properties: 260,
    featured: false,
  },
  {
    id: 6,
    name: "Jaipur",
    image:
      "https://www.agoda.com/wp-content/uploads/2024/05/Nahargarh-Fort-jaipur-india-1244x700.jpg",
    properties: 1200,
    featured: true,
  },
  {
    id: 7,
    name: "Udaipur",
    image:
      "https://beantowntraveller.com/wp-content/uploads/2020/02/UNADJUSTEDNONRAW_thumb_b808-1024x680.jpg",
    properties: 860,
    featured: true,
  },
  {
    id: 8,
    name: "Jaisalmer",
    image:
      "https://www.thepalaceonwheels.org/storage/jaislamer_fort_night_view_1914%20(1).jpg",
    properties: 640,
    featured: true,
  },
];

export default function PopularLocations() {
  const router = useRouter();
  const [showAll, setShowAll] = useState(false);

  const visibleLocations = showAll
    ? rajasthanLocations
    : rajasthanLocations.slice(0, 8);

  return (
    <section className="relative py-24 overflow-hidden bg-[#f6f2ea] font-body">
      {/* ✨ Fonts + Animations */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Jost:wght@300;400;500&display=swap');

        .font-heading {
          font-family: 'Cormorant Garamond', serif;
        }

        .font-body {
          font-family: 'Jost', sans-serif;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-up {
          animation: fadeUp 0.8s ease forwards;
        }

        .card-hover {
          transition: all 0.35s ease;
          cursor: pointer;
        }

        .card-hover:hover {
          transform: translateY(-6px);
          box-shadow: 0 25px 60px rgba(0,0,0,0.12);
        }
      `}</style>

      {/* BACKGROUND MAP */}
      <div className="absolute inset-0 flex justify-center items-center opacity-[0.08] pointer-events-none">
        <img
          src="https://static.vecteezy.com/system/resources/previews/038/097/442/non_2x/rajasthan-india-outline-map-vector.jpg"
          className="w-[1400px]"
          alt="map"
        />
      </div>

      {/* HEADER */}
      <div className="text-center mb-14 fade-up">
        <h2 className="font-heading text-5xl lg:text-6xl font-semibold text-[#1f1f1f]">
          Explore Rajasthan
        </h2>

        <p className="mt-3 text-gray-600 text-base">
          Discover districts through premium property insights
        </p>
      </div>

      {/* GRID */}
      <div className="relative max-w-6xl mx-auto px-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {visibleLocations.map((item, i) => (
          <div
            key={i}
            onClick={() => router.push("/Home/propertyLocationGrid")}
            className="group card-hover bg-white/80 backdrop-blur border border-[#d9c3a0]/20 rounded-3xl overflow-hidden"
          >
            {/* IMAGE */}
            <div className="relative h-32 overflow-hidden">
              <img
                src={item.image}
                className="w-full h-full object-cover scale-105 group-hover:scale-110 transition duration-500"
                alt={item.name}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

              {item.featured && (
                <span className="absolute top-3 left-3 text-[10px] tracking-wide px-3 py-1 rounded-full bg-[#b88a44] text-white">
                  Featured
                </span>
              )}
            </div>

            {/* CONTENT */}
            <div className="p-4">
              <h3 className="font-heading text-lg font-semibold text-[#1f1f1f] group-hover:text-[#b88a44] transition">
                {item.name}
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                {item.properties} Properties
              </p>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-gray-400">
                  Explore →
                </span>

                <div className="w-8 h-8 rounded-full bg-[#f3e6d1] text-[#b88a44] flex items-center justify-center group-hover:bg-[#b88a44] group-hover:text-white transition">
                  →
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* BUTTON */}
      <div className="text-center mt-14 fade-up">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-10 py-3 rounded-full bg-[#1f1f1f] text-white text-sm font-medium hover:bg-[#b88a44] transition shadow-lg"
        >
          {showAll ? "Show Less" : "Explore All Districts"}
        </button>
      </div>
    </section>
  );
}