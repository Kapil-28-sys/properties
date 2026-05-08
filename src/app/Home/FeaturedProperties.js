"use client";

import { useState } from "react";

const properties = [
  {
    id: 1,
    title: "Modern Luxury Villa",
    location: "Jaipur, Rajasthan",
    price: "₹2.4 Cr",
    image: "https://media.istockphoto.com/id/2223376026/photo/luxury-tropical-pool-villa-at-dusk.jpg?s=612x612&w=0&k=20&c=KmXb1-GWZvz-Fa6TvMKIbNsxfEs09t6Nm5NEzrMBy3E=",
  },
  {
    id: 2,
    title: "Premium Penthouse",
    location: "Mumbai, Maharashtra",
    price: "₹4.8 Cr",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/640698051.jpg?k=afa25b2244b230b9f14d8c0694efd16e84ae773e2dfad67de9e6e12f822eebd0&o=",
  },
  {
    id: 3,
    title: "Elegant Family Residence",
    location: "Delhi NCR",
    price: "₹3.1 Cr",
    image: "https://www.prodom.sk/userfiles/products/ELEGANT%20121/___zoom____projektydomov_elegant_121_persp_2_var_4.jpg",
  },
  {
    id: 4,
    title: "Skyline Luxury Apartment",
    location: "Bangalore, Karnataka",
    price: "₹2.9 Cr",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
  },
    {
    id: 5,
    title: "Modern Luxury Villa",
    location: "Jaipur, Rajasthan",
    price: "₹2.4 Cr",
    image: "https://media.istockphoto.com/id/2223376026/photo/luxury-tropical-pool-villa-at-dusk.jpg?s=612x612&w=0&k=20&c=KmXb1-GWZvz-Fa6TvMKIbNsxfEs09t6Nm5NEzrMBy3E=",
  },
  {
    id: 6,
    title: "Premium Penthouse",
    location: "Mumbai, Maharashtra",
    price: "₹4.8 Cr",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/640698051.jpg?k=afa25b2244b230b9f14d8c0694efd16e84ae773e2dfad67de9e6e12f822eebd0&o=",
  },
  {
    id: 7,
    title: "Elegant Family Residence",
    location: "Delhi NCR",
    price: "₹3.1 Cr",
    image: "https://www.prodom.sk/userfiles/products/ELEGANT%20121/___zoom____projektydomov_elegant_121_persp_2_var_4.jpg",
  },
  
];

export default function FeaturedProperties() {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <section className="relative py-20 bg-[#faf8f3] overflow-hidden">

      {/* Fonts + Animations */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@200;300;400;500&display=swap');

        @keyframes ping {
          0%   { transform: scale(1); opacity: 0.7; }
          100% { transform: scale(2.4); opacity: 0; }
        }
        @keyframes cardFade {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .font-cormorant { font-family: 'Cormorant Garamond', serif; }
        .font-jost      { font-family: 'Jost', sans-serif; }

        .animate-ping-gold { animation: ping 1.8s ease-out infinite; }
        .animate-card-fade { animation: cardFade 0.7s ease forwards; }
        .animate-fade-up   { animation: fadeUp 0.8s ease forwards; }

        .btn-explore::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #C59E2A;
          transform: translateX(-101%);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .btn-explore:hover::before { transform: translateX(0); }
        .btn-explore:hover          { color: #fff; }
      `}</style>

      {/* Ambient Glows */}
      <div className="absolute top-[-120px] right-[-100px] w-[350px] h-[350px] rounded-full bg-[rgba(197,158,42,0.10)] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-120px] left-[-100px] w-[350px] h-[350px] rounded-full bg-[rgba(197,158,42,0.07)] blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[1300px] mx-auto px-6 lg:px-10">

        {/* ── Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14 flex-wrap">

          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-[20px] py-2 rounded-full border border-black/9 bg-white/82 backdrop-blur-xl mb-5 relative">
              <span className="absolute w-[13px] h-[13px] rounded-full bg-[rgba(197,158,42,0.22)] animate-ping-gold" />
              <span className="relative w-[7px] h-[7px] rounded-full bg-[#C59E2A] shadow-[0_0_10px_1px_rgba(197,158,42,0.5)] flex-shrink-0" />
              <span className="font-jost text-[10px] font-light tracking-[0.35em] uppercase text-black/48">
                Featured Collection
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-cormorant text-[clamp(2.4rem,4.5vw,4rem)] leading-[0.9] tracking-[-0.03em] font-light text-[#1a1612]/88">
              Luxury Properties
              <strong className="block font-semibold text-[#C59E2A] not-italic">Crafted For</strong>
              <em className="block italic font-light text-[#1a1612]/65">Modern Living</em>
            </h2>
          </div>

          {/* Indicators */}
          <div className="flex items-center gap-[10px] flex-shrink-0">
            {properties.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveCard(i)}
                className={`rounded-full border-none cursor-pointer transition-all duration-500 h-[10px] ${
                  activeCard === i
                    ? "w-9 bg-[#C59E2A]"
                    : "w-[10px] bg-[#ddd4c0]"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ── Mobile Cards ── */}
        <div className="flex flex-col gap-4 lg:hidden">
          {properties.map((property, index) => {
            const isActive = activeCard === index;
            return (
              <div
                key={property.id}
                onClick={() => setActiveCard(index)}
                className={`relative overflow-hidden rounded-[28px] cursor-pointer transition-all duration-700 shadow-[0_20px_60px_rgba(0,0,0,0.08)] ${
                  isActive ? "h-[460px]" : "h-[110px]"
                }`}
              >
                <img src={property.image} alt={property.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/20 to-transparent" />

                {/* Closed */}
                {!isActive && (
                  <div className="relative z-10 flex items-end justify-between h-full p-5">
                    <div>
                      <p className="font-jost text-[9px] uppercase tracking-[0.22em] text-white/55 mb-1 font-light">{property.location}</p>
                      <h3 className="font-cormorant text-[1.3rem] font-light text-white leading-tight">{property.title}</h3>
                    </div>
                    <span className="font-cormorant text-sm text-white/50">0{index + 1}</span>
                  </div>
                )}

                {/* Active */}
                {isActive && (
                  <div className="absolute inset-0 flex flex-col justify-between p-6 animate-card-fade z-10">
                    <div className="flex items-start justify-between">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/88 backdrop-blur-xl">
                        <span className="w-[6px] h-[6px] rounded-full bg-[#C59E2A]" />
                        <span className="font-jost text-[10px] font-light tracking-[0.15em] uppercase text-[#1a1612]/70">Premium Property</span>
                      </div>
                      <span className="font-cormorant text-sm text-white/50">0{index + 1}</span>
                    </div>
                    <div>
                      <p className="font-jost text-[10px] uppercase tracking-[0.28em] text-white/60 font-light">{property.location}</p>
                      <h3 className="font-cormorant text-[2rem] font-light text-white leading-[0.92] tracking-[-0.03em] mt-2">
                        {property.title.split(" ").slice(0, Math.ceil(property.title.split(" ").length / 2)).join(" ")}
                        <em className="block italic font-light">
                          {property.title.split(" ").slice(Math.ceil(property.title.split(" ").length / 2)).join(" ")}
                        </em>
                      </h3>
                      <div className="w-10 h-px bg-gradient-to-r from-[#C59E2A] to-transparent my-4" />
                      <div className="flex items-end justify-between gap-4 flex-wrap">
                        <div>
                          <p className="font-jost text-[10px] uppercase tracking-[0.15em] text-white/50 font-light mb-1">Starting From</p>
                          <div className="font-cormorant text-[2.2rem] font-semibold text-[#C59E2A] leading-none">{property.price}</div>
                        </div>
                        <button className="btn-explore relative overflow-hidden px-6 py-3 rounded-full border border-[#C59E2A] bg-transparent text-[#C59E2A] font-jost text-[10px] font-normal tracking-[0.2em] uppercase cursor-pointer transition-colors duration-[400ms]">
                          <span className="relative z-10 flex items-center gap-2">
                            Explore Property
                            <svg width="10" height="10" viewBox="0 0 11 11" fill="none">
                              <path d="M1 10L10 1M10 1H3M10 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ── Desktop Cards ── */}
        <div className="hidden lg:flex gap-4 h-[520px] xl:h-[560px]">
          {properties.map((property, index) => {
            const isActive = activeCard === index;
            const words = property.title.split(" ");
            const half = Math.ceil(words.length / 2);
            const t1 = words.slice(0, half).join(" ");
            const t2 = words.slice(half).join(" ");

            return (
              <div
                key={property.id}
                onClick={() => setActiveCard(index)}
                style={{ transition: "flex 1000ms cubic-bezier(0.22,1,0.36,1)" }}
                className={`relative overflow-hidden rounded-[28px] cursor-pointer shadow-[0_20px_70px_rgba(0,0,0,0.08)] group flex-shrink-0 ${
                  isActive ? "flex-[0_0_62%]" : "flex-[0_0_80px]"
                }`}
              >
                <img
                  src={property.image}
                  alt={property.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/20 to-transparent" />

                {/* Closed */}
                {!isActive && (
                  <div className="absolute inset-0 flex flex-col justify-between p-5">
                    <span className="font-cormorant text-sm text-white/50">0{index + 1}</span>
                    <div className="flex flex-col items-center gap-4 pb-2">
                      <p className="font-jost text-[9px] uppercase tracking-[0.22em] text-white/50 font-light rotate-[-90deg] whitespace-nowrap">
                        {property.location}
                      </p>
                      <h3 className="font-cormorant text-[18px] font-light text-white leading-none" style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
                        {property.title}
                      </h3>
                    </div>
                  </div>
                )}

                {/* Active */}
                {isActive && (
                  <div className="absolute inset-0 flex flex-col justify-between p-8 animate-card-fade z-10">
                    <div className="flex items-start justify-between">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/88 backdrop-blur-xl">
                        <span className="w-[6px] h-[6px] rounded-full bg-[#C59E2A]" />
                        <span className="font-jost text-[10px] font-light tracking-[0.15em] uppercase text-[#1a1612]/70">Premium Property</span>
                      </div>
                      <span className="font-cormorant text-sm text-white/50">0{index + 1}</span>
                    </div>
                    <div>
                      <p className="font-jost text-[10px] uppercase tracking-[0.28em] text-white/60 font-light">{property.location}</p>
                      <h3 className="font-cormorant text-[clamp(2rem,3.5vw,3rem)] font-light text-white leading-[0.92] tracking-[-0.03em] mt-3">
                        {t1}
                        <em className="block italic font-light">{t2}</em>
                      </h3>
                      <div className="w-10 h-px bg-gradient-to-r from-[#C59E2A] to-transparent my-5" />
                      <div className="flex items-end justify-between gap-5 flex-wrap">
                        <div>
                          <p className="font-jost text-[10px] uppercase tracking-[0.15em] text-white/50 font-light mb-1">Starting From</p>
                          <div className="font-cormorant text-[2.6rem] font-semibold text-[#C59E2A] leading-none">{property.price}</div>
                        </div>
                        <button className="btn-explore relative overflow-hidden px-7 py-[13px] rounded-full border border-[#C59E2A] bg-transparent text-[#C59E2A] font-jost text-[10px] font-normal tracking-[0.2em] uppercase cursor-pointer transition-colors duration-[400ms]">
                          <span className="relative z-10 flex items-center gap-2">
                            Explore Property
                            <svg width="10" height="10" viewBox="0 0 11 11" fill="none">
                              <path d="M1 10L10 1M10 1H3M10 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}