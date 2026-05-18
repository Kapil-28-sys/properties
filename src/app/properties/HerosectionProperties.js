"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

export default function PropertiesHeroSection() {
  return (
    <>
      <style jsx global>{`
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

      <section
        className="relative w-full h-[92vh] overflow-hidden"
        style={{ background: "var(--background)" }}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-white/50" />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-white/70" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full backdrop-blur-md mb-7 fade-up"
                style={{
                  border: "1px solid var(--border)",
                  background: "rgba(255,255,255,0.75)",
                  color: "var(--secondary)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <Building2 size={18} />
                <span className="text-sm tracking-[2px] uppercase font-jost">
                  Premium Properties Collection
                </span>
              </div>

              {/* Heading */}
              <h1
                className="font-cormorant text-5xl md:text-7xl lg:text-8xl leading-[0.95] font-semibold fade-up"
                style={{ color: "var(--text)" }}
              >
                Discover
                <span
                  className="block"
                  style={{ color: "var(--primary)" }}
                >
                  Luxury Living
                </span>
              </h1>

              {/* Description */}
              <p
                className="font-jost text-lg md:text-xl mt-8 max-w-2xl leading-relaxed fade-up"
                style={{ color: "var(--text-light)" }}
              >
                Explore exceptional residences, premium apartments,
                modern villas, and commercial spaces crafted for
                elevated lifestyles and smart investments.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-5 mt-10 fade-up">
                
                {/* Primary Button */}
                <button
                  className="px-8 py-4 rounded-full font-medium font-jost transition-all duration-300 hover:scale-105"
                  style={{
                    background: "var(--primary)",
                    color: "var(--white)",
                    boxShadow: "var(--shadow-md)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background =
                      "var(--primary-dark)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "var(--primary)")
                  }
                >
                  Explore Properties
                </button>

                {/* Secondary Button */}
                <button
                  className="px-8 py-4 rounded-full font-medium font-jost backdrop-blur-md transition-all duration-300 hover:scale-105"
                  style={{
                    border: "1px solid var(--border)",
                    background: "rgba(255,255,255,0.75)",
                    color: "var(--secondary)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "var(--secondary)";
                    e.currentTarget.style.color = "var(--white)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      "rgba(255,255,255,0.75)";
                    e.currentTarget.style.color =
                      "var(--secondary)";
                  }}
                >
                  Contact Us
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Fade */}
        <div
          className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t to-transparent"
          style={{
            backgroundImage:
              "linear-gradient(to top, var(--background), transparent)",
          }}
        />
      </section>
    </>
  );
}