"use client";

import { useEffect, useState } from "react";

const statsData = [
  { label: "Happy Clients", value: 10000, suffix: "+" },
  { label: "Properties Sold", value: 1200, suffix: "+" },
  { label: "Cities Covered", value: 25, suffix: "+" },
  { label: "Years Experience", value: 12, suffix: "+" },
];

export default function Achievements() {
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const duration = 2500; // ⬅️ SLOWER ANIMATION (2.5s)
    const frameRate = 30;
    const steps = duration / frameRate;

    const intervals = statsData.map((item, index) => {
      const increment = item.value / steps;

      return setInterval(() => {
        setCounts((prev) => {
          const updated = [...prev];

          if (updated[index] < item.value) {
            updated[index] = Math.min(
              item.value,
              updated[index] + increment
            );
          }

          return updated;
        });
      }, frameRate);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section className="relative py-24 bg-[#fbfaf8] overflow-hidden">

      {/* Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Jost:wght@300;400;500;600&display=swap');

        .font-heading {
          font-family: 'Cormorant Garamond', serif;
        }

        .font-body {
          font-family: 'Jost', sans-serif;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .fade-up {
          animation: fadeUp 0.9s ease forwards;
        }
      `}</style>

      {/* glow */}
      <div className="absolute top-[-140px] left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#b88a44]/10 blur-[150px] rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* heading */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-black">
            Our Achievements
          </h2>

          <p className="font-body mt-3 text-gray-500">
            Built with trust, luxury & long-term value
          </p>
        </div>

        {/* stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {statsData.map((item, i) => (
            <div
              key={i}
              className="relative bg-white border border-black/5 rounded-3xl p-8 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 fade-up"
              style={{ animationDelay: `${i * 150}ms` }}
            >

              {/* NUMBER */}
              <h3 className="font-heading text-3xl md:text-4xl font-semibold text-black">
                {Math.floor(counts[i])}
                {item.suffix}
              </h3>

              {/* line */}
              <div className="w-10 h-[2px] bg-[#b88a44] mx-auto my-4 transition-all duration-300 group-hover:w-14" />

              {/* label */}
              <p className="font-body text-gray-500 text-sm md:text-base">
                {item.label}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}