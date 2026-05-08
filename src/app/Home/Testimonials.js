"use client";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Rohit Sharma",
    role: "Home Buyer",
    property: "2BHK Apartment, Jaipur",
    review: "Found my dream home within days. Super smooth experience!",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Anjali Verma",
    role: "Investor",
    property: "Luxury Villa, Udaipur",
    review: "Best platform for property investment. Very transparent!",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Mohit Jain",
    role: "Dealer",
    property: "Commercial Shop, Ajmer",
    review: "Clients love this UI. Very fast and clean experience.",
    img: "https://images.unsplash.com/photo-1501183638710-841dd1904471?w=800",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    name: "Sneha Gupta",
    role: "Buyer",
    property: "3BHK Flat, Jodhpur",
    review: "Very easy to search and compare properties.",
    img: "https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Aman Singh",
    role: "Investor",
    property: "Farmhouse, Pushkar",
    review: "Good investment options with proper details.",
    img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    name: "Priya Sharma",
    role: "Tenant",
    property: "Studio Apartment, Jaipur",
    review: "Got rental home quickly without stress.",
    img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
    avatar: "https://randomuser.me/api/portraits/women/21.jpg",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () =>
    setIndex((prev) => (prev + 1) % testimonials.length);

  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, []);

  const getPosition = (i) => {
    const total = testimonials.length;
    const diff = (i - index + total) % total;

    if (diff === 0) return "center";
    if (diff === 1) return "right";
    if (diff === total - 1) return "left";
    return "hidden";
  };

  return (
    <section className="relative py-24 bg-[#f6f2ea] overflow-hidden font-body">

      {/* ✨ Fonts + Animations */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Jost:wght@300;400;500&display=swap');

        .font-heading { font-family: 'Cormorant Garamond', serif; }
        .font-body { font-family: 'Jost', sans-serif; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .fade-up { animation: fadeUp 0.8s ease forwards; }

        .card {
          transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .glass {
          backdrop-filter: blur(10px);
          background: rgba(255,255,255,0.85);
        }

        .btn {
          transition: all 0.3s ease;
        }

        .btn:hover {
          transform: scale(1.08);
          background: #b88a44;
          color: white;
        }
      `}</style>

      {/* HEADER */}
      <div className="text-center mb-14 fade-up">

        <h2 className="font-heading text-5xl lg:text-6xl font-semibold text-[#1f1f1f]">
          What People Say
        </h2>

        <p className="mt-3 text-gray-600">
          Real experiences from our happy clients
        </p>

      </div>

      {/* CAROUSEL */}
      <div className="relative max-w-6xl mx-auto flex items-center justify-center h-[520px]">

        {testimonials.map((t, i) => {
          const pos = getPosition(i);

          return (
            <div
              key={i}
              className={`
                absolute card w-[370px] rounded-3xl overflow-hidden shadow-xl border border-[#d9c3a0]/25
                ${pos === "center"
                  ? "scale-110 z-30 opacity-100"
                  : pos === "left"
                  ? "-translate-x-[420px] scale-90 opacity-40"
                  : pos === "right"
                  ? "translate-x-[420px] scale-90 opacity-40"
                  : "opacity-0 scale-75"
                }
              `}
            >

              {/* IMAGE */}
              <div className="relative h-52 overflow-hidden">

                <img
                  src={t.img}
                  className="w-full h-full object-cover scale-105"
                  alt={t.name}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {/* PROPERTY TAG */}
                <div className="absolute bottom-3 left-3 text-xs px-3 py-1 rounded-full bg-[#b88a44] text-white shadow">
                  {t.property}
                </div>

              </div>

              {/* CONTENT */}
              <div className="p-5 glass">

                <p className="text-gray-700 italic leading-6">
                  “{t.review}”
                </p>

                {/* USER */}
                <div className="mt-5 flex items-center gap-3">

                  <img
                    src={t.avatar}
                    className="w-11 h-11 rounded-full border-2 border-[#b88a44]"
                  />

                  <div>
                    <h4 className="font-heading text-lg font-semibold text-[#1f1f1f]">
                      {t.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {t.role}
                    </p>
                  </div>

                </div>

              </div>

            </div>
          );
        })}

        {/* CONTROLS */}
        <button onClick={prev} className="btn absolute left-4 w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center">
          ❮
        </button>

        <button onClick={next} className="btn absolute right-4 w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center">
          ❯
        </button>

      </div>

      {/* DOTS */}
      <div className="flex justify-center gap-2 mt-6">

        {testimonials.map((_, i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              i === index ? "bg-[#b88a44] scale-125" : "bg-gray-300"
            }`}
          />
        ))}

      </div>

    </section>
  );
}