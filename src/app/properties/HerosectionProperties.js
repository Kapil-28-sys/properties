"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

export default function PropertiesHeroSection() {
  return (
    <>
      {/* Fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Jost:wght@300;400;500;600&display=swap');

        .font-heading {
          font-family: 'Cormorant Garamond', serif;
        }

        .font-body {
          font-family: 'Jost', sans-serif;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-up {
          animation: fadeUp 0.7s ease forwards;
        }
      `}</style>

      <section className="relative w-full h-[92vh] overflow-hidden bg-white">
        
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop')",
          }}
        />

        {/* Light Overlay */}
        <div className="absolute inset-0 bg-white/45" />

        {/* Soft Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-white/60" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
            
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              
              {/* Premium Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-black/10 bg-white/70 backdrop-blur-md text-black mb-7 fade-up shadow-sm">
                <Building2 size={18} />
                <span className="text-sm tracking-[2px] uppercase font-body">
                  Premium Properties Collection
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-[#111111] font-heading text-5xl md:text-7xl lg:text-8xl leading-[0.95] font-semibold fade-up">
                Discover
                <span className="block text-[#C9A227]">
                  Luxury Living
                </span>
              </h1>

              {/* Description */}
              <p className="text-gray-700 font-body text-lg md:text-xl mt-8 max-w-2xl leading-relaxed fade-up">
                Explore exceptional residences, premium apartments,
                modern villas, and commercial spaces crafted for
                elevated lifestyles and smart investments.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-5 mt-10 fade-up">
                <button className="px-8 py-4 bg-[#C9A227] hover:bg-[#b8931f] text-white rounded-full font-medium font-body transition-all duration-300 shadow-lg">
                  Explore Properties
                </button>

                <button className="px-8 py-4 border border-black/10 bg-white/70 hover:bg-black hover:text-white text-black rounded-full font-medium font-body backdrop-blur-md transition-all duration-300">
                  Contact Us
                </button>
              </div>

            </motion.div>
          </div>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />
      </section>
    </>
  );
}