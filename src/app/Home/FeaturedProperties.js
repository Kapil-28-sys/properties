"use client";

import { useState } from "react";

const properties = [
  {
    id: 1,
    title: "Modern Luxury Villa",
    location: "Jaipur, Rajasthan",
    price: "₹2.4 Cr",
    image:
      "https://media.istockphoto.com/id/2223376026/photo/luxury-tropical-pool-villa-at-dusk.jpg?s=612x612&w=0&k=20&c=KmXb1-GWZvz-Fa6TvMKIbNsxfEs09t6Nm5NEzrMBy3E=",
  },
  {
    id: 2,
    title: "Premium Penthouse",
    location: "Mumbai, Maharashtra",
    price: "₹4.8 Cr",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/640698051.jpg?k=afa25b2244b230b9f14d8c0694efd16e84ae773e2dfad67de9e6e12f822eebd0&o=",
  },
  {
    id: 3,
    title: "Elegant Family Residence",
    location: "Delhi NCR",
    price: "₹3.1 Cr",
    image:
      "https://www.prodom.sk/userfiles/products/ELEGANT%20121/___zoom____projektydomov_elegant_121_persp_2_var_4.jpg",
  },
  {
    id: 4,
    title: "Skyline Luxury Apartment",
    location: "Bangalore, Karnataka",
    price: "₹2.9 Cr",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function FeaturedProperties() {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <section className="relative py-14 sm:py-16 lg:py-20 bg-[#f8f5ef] overflow-hidden">
      
      {/* Background Blur */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-120px] right-[-100px] w-[300px] sm:w-[350px] h-[300px] sm:h-[350px] rounded-full bg-[#ead7bd]/40 blur-[120px]" />

        <div className="absolute bottom-[-120px] left-[-100px] w-[300px] sm:w-[350px] h-[300px] sm:h-[350px] rounded-full bg-[#f1e5d4]/50 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10 lg:mb-12">
          
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-3 text-[#b88a44] text-[10px] sm:text-xs uppercase tracking-[0.28em] font-medium">
              
              <div className="w-8 sm:w-10 h-[1px] bg-[#b88a44]" />
              
              Featured Collection
            </span>

            <h2 className="mt-4 sm:mt-5 text-[2rem] sm:text-5xl lg:text-[64px] font-semibold text-[#1a1a1a] leading-[1.05] tracking-[-1px] sm:tracking-[-2px]">
              Luxury Properties

              <span className="block text-[#b88a44]">
                Crafted For Modern Living
              </span>
            </h2>
          </div>

          {/* Indicators */}
          <div className="flex items-center gap-3">
            {properties.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveCard(index)}
                className={`rounded-full transition-all duration-500 ${
                  activeCard === index
                    ? "w-9 sm:w-10 h-3 bg-[#b88a44]"
                    : "w-3 h-3 bg-[#d8c4a7]"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ===== MOBILE VIEW ===== */}
        <div className="flex flex-col gap-5 lg:hidden">
          {properties.map((property, index) => {
            const isActive = activeCard === index;

            return (
              <div
                key={property.id}
                onClick={() => setActiveCard(index)}
                className={`relative overflow-hidden rounded-[28px] cursor-pointer transition-all duration-700 shadow-[0_20px_60px_rgba(0,0,0,0.08)] ${
                  isActive ? "h-[460px]" : "h-[120px]"
                }`}
              >
                {/* Image */}
                <img
                  src={property.image}
                  alt={property.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Closed Mobile Card */}
                {!isActive && (
                  <div className="relative z-10 flex items-end justify-between h-full p-5">
                    <div>
                      <p className="text-white/60 text-[10px] uppercase tracking-[0.2em] mb-2">
                        {property.location}
                      </p>

                      <h3 className="text-white text-lg font-semibold leading-tight max-w-[220px]">
                        {property.title}
                      </h3>
                    </div>

                    <span className="text-white/70 text-sm">
                      0{index + 1}
                    </span>
                  </div>
                )}

                {/* Active Mobile Card */}
                {isActive && (
                  <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-6 animate-fade">
                    
                    <div className="flex items-start justify-between">
                      <div className="px-4 py-2 rounded-full bg-white/85 backdrop-blur-xl text-[#1f1f1f] text-[11px] font-medium shadow-lg">
                        Premium Property
                      </div>

                      <span className="text-white/70 text-sm">
                        0{index + 1}
                      </span>
                    </div>

                    <div>
                      <p className="text-white/70 text-[11px] uppercase tracking-[0.22em]">
                        {property.location}
                      </p>

                      <h3 className="mt-3 text-2xl sm:text-3xl font-semibold text-white leading-tight">
                        {property.title}
                      </h3>

                      <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
                        
                        <div>
                          <p className="text-white/60 text-sm">
                            Starting From
                          </p>

                          <h4 className="text-2xl font-bold text-[#f0d2a4]">
                            {property.price}
                          </h4>
                        </div>

                        <button className="w-full sm:w-auto px-6 py-3 rounded-full bg-white text-[#1f1f1f] text-sm font-semibold hover:scale-[1.03] transition-all duration-300 shadow-xl">
                          Explore Property
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ===== DESKTOP VIEW ===== */}
        <div className="hidden lg:flex gap-5 h-[520px] xl:h-[560px]">
          {properties.map((property, index) => {
            const isActive = activeCard === index;

            return (
              <div
                key={property.id}
                onClick={() => setActiveCard(index)}
                className={`
                  relative overflow-hidden rounded-[34px] cursor-pointer
                  transition-all duration-[1000ms]
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  shadow-[0_20px_70px_rgba(0,0,0,0.08)]
                  group
                  ${isActive ? "w-[65%]" : "w-[11%]"}
                `}
              >
                {/* Image */}
                <img
                  src={property.image}
                  alt={property.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Closed Card */}
                {!isActive && (
                  <div className="absolute inset-0 flex flex-col justify-between p-5">
                    
                    <span className="text-white/70 text-sm font-medium">
                      0{index + 1}
                    </span>

                    <div className="flex items-end justify-center h-full pb-4">
                      <div className="flex flex-col items-center gap-4">
                        
                        <p className="text-white/60 text-[10px] uppercase tracking-[0.22em] rotate-[-90deg] whitespace-nowrap">
                          {property.location}
                        </p>

                        <h3 className="text-white text-[20px] font-semibold tracking-wide [writing-mode:vertical-rl] rotate-180 leading-none">
                          {property.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                )}

                {/* Active Card */}
                {isActive && (
                  <div className="absolute inset-0 flex flex-col justify-between p-8 animate-fade">
                    
                    <div className="flex items-start justify-between">
                      <div className="px-4 py-2 rounded-full bg-white/85 backdrop-blur-xl text-[#1f1f1f] text-xs font-medium shadow-lg">
                        Premium Property
                      </div>

                      <span className="text-white/70 text-sm font-medium">
                        0{index + 1}
                      </span>
                    </div>

                    <div>
                      <p className="text-white/70 text-xs uppercase tracking-[0.22em]">
                        {property.location}
                      </p>

                      <h3 className="mt-3 text-4xl font-semibold text-white leading-tight max-w-xl">
                        {property.title}
                      </h3>

                      <div className="mt-7 flex items-center justify-between flex-wrap gap-5">
                        
                        <div>
                          <p className="text-white/60 text-sm">
                            Starting From
                          </p>

                          <h4 className="text-3xl font-bold text-[#f0d2a4]">
                            {property.price}
                          </h4>
                        </div>

                        <button className="px-6 py-3 rounded-full bg-white text-[#1f1f1f] text-sm font-semibold hover:scale-105 transition-all duration-300 shadow-xl">
                          Explore Property
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

      {/* Animation */}
      <style jsx>{`
        .animate-fade {
          animation: fadeUp 0.8s ease;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0px);
          }
        }
      `}</style>
    </section>
  );
}