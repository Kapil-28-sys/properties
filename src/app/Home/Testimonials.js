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

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const interval = setInterval(next, 4500);
    return () => clearInterval(interval);
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
    <section className="py-24 bg-[#f7f7f7] overflow-hidden">
      <h2 className="text-4xl font-bold text-center mb-14 text-gray-800">
        What People Say
      </h2>

      <div className="relative max-w-6xl mx-auto flex items-center justify-center h-[500px]">

        {testimonials.map((t, i) => {
          const pos = getPosition(i);

          return (
            <div
              key={i}
              className={`
                absolute transition-all duration-700 ease-in-out
                w-[360px] bg-white rounded-2xl shadow-lg overflow-hidden
                ${
                  pos === "center"
                    ? "scale-110 z-30 opacity-100"
                    : pos === "left"
                    ? "-translate-x-[420px] scale-90 opacity-40 blur-[1px]"
                    : pos === "right"
                    ? "translate-x-[420px] scale-90 opacity-40 blur-[1px]"
                    : "opacity-0 scale-75"
                }
              `}
            >
              {/* IMAGE */}
              <img
                src={t.img}
                className="w-full h-52 object-cover"
                alt={t.name}
              />

              <div className="p-5">
                <p className="text-gray-600 italic">“{t.review}”</p>

                <div className="mt-3 inline-block px-3 py-1 text-sm bg-[#b88a44] text-white rounded-full">
                  {t.property}
                </div>

                <div className="mt-5 flex items-center gap-3">
                  <img
                    src={t.avatar}
                    className="w-11 h-11 rounded-full border-2 border-[#b88a44]"
                  />

                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {t.name}
                    </h4>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* CONTROLS */}
        <button
          onClick={prev}
          className="absolute left-4 bg-white shadow px-4 py-2 rounded-full"
        >
          ❮
        </button>

        <button
          onClick={next}
          className="absolute right-4 bg-white shadow px-4 py-2 rounded-full"
        >
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