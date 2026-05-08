"use client";

import { Home, TrendingUp, HandCoins } from "lucide-react";

export default function BuyerSellerSection() {
  return (
    <>
      {/* ===== FONTS ===== */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Jost:wght@300;400;500&display=swap');

        .font-heading { font-family: 'Cormorant Garamond', serif; }
        .font-body { font-family: 'Jost', sans-serif; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(25px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .fade-up { animation: fadeUp 0.9s ease forwards; }
      `}</style>

      <section className="relative w-full py-24 px-4 bg-[#f8f8f8] overflow-hidden font-body">

        {/* ===== BACKGROUND (SOFTER + CLEANER) ===== */}
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, #e6e6e6 1px, transparent 1px), linear-gradient(to bottom, #e6e6e6 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(#b88a44 1px, transparent 1px)",
              backgroundSize: "20px 20px",
              opacity: 0.18,
            }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto">

          {/* ===== TITLE ===== */}
          <div className="text-center mb-14 fade-up">
            <h2 className="font-heading text-5xl md:text-6xl text-black font-semibold tracking-wide">
              Property Services
            </h2>
            <p className="text-gray-600 mt-4 text-lg font-body max-w-2xl mx-auto">
              We help you buy, sell & invest in premium real estate with trust, speed, and transparency.
            </p>
          </div>

          {/* ===== SERVICE CARDS ===== */}
          <div className="grid md:grid-cols-3 gap-7 fade-up">

            {/* BUY */}
            <div className="group bg-white/90 backdrop-blur-xl border border-gray-200 rounded-3xl p-7 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-xl bg-[#b88a44]/10">
                  <Home className="text-[#b88a44]" />
                </div>
                <h3 className="font-heading text-3xl font-semibold text-black">
                  Buy Property
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Find your dream home with verified listings, expert guidance, and hassle-free buying experience.
              </p>
            </div>

            {/* SELL */}
            <div className="group bg-white/90 backdrop-blur-xl border border-gray-200 rounded-3xl p-7 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-xl bg-[#b88a44]/10">
                  <TrendingUp className="text-[#b88a44]" />
                </div>
                <h3 className="font-heading text-3xl font-semibold text-black">
                  Sell Property
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                List your property easily and get the best market value with our trusted buyer network.
              </p>
            </div>

            {/* INVEST */}
            <div className="group bg-white/90 backdrop-blur-xl border border-gray-200 rounded-3xl p-7 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-xl bg-[#b88a44]/10">
                  <HandCoins className="text-[#b88a44]" />
                </div>
                <h3 className="font-heading text-3xl font-semibold text-black">
                  Invest
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Discover high-return property investments curated by real estate experts.
              </p>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}