"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  BadgeCheck,
  Building2,
  Sparkles,
} from "lucide-react";

export default function CTABanner() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShow(true);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const cards = [
    {
      title: "Verified Listings",
      desc: "Trusted premium properties across Rajasthan.",
      icon: <BadgeCheck size={22} />,
    },
    {
      title: "Luxury Locations",
      desc: "Modern homes in high-growth premium cities.",
      icon: <Building2 size={22} />,
    },
    {
      title: "Smooth Experience",
      desc: "Fast, transparent and effortless property journey.",
      icon: <Sparkles size={22} />,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f6f2ea] py-24 font-body">

      {/* ✨ Fonts + Animations */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Jost:wght@300;400;500&display=swap');

        .font-heading { font-family: 'Cormorant Garamond', serif; }
        .font-body { font-family: 'Jost', sans-serif; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(25px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .fade-up { animation: fadeUp 0.8s ease forwards; }

        .glass {
          backdrop-filter: blur(14px);
          background: rgba(255,255,255,0.75);
        }

        .card {
          transition: all 0.4s ease;
        }

        .card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 70px rgba(0,0,0,0.12);
        }

        .gold-line {
          position: relative;
          overflow: hidden;
        }

        .gold-line::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0%;
          height: 3px;
          background: #b88a44;
          transition: 0.5s ease;
        }

        .gold-line:hover::after {
          width: 100%;
        }
      `}</style>

      {/* BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:26px_26px]" />

      {/* GLOW */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-[#b88a44]/10 blur-[140px]" />

      <div
        ref={ref}
        className={`relative mx-auto max-w-6xl px-5 transition-all duration-1000 ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >

        {/* MAIN CONTAINER */}
        <div className="glass rounded-[40px] border border-[#d9c3a0]/30 shadow-[0_20px_80px_rgba(0,0,0,0.06)] p-8 md:p-14">

          {/* BADGE */}
          <div className="flex justify-center fade-up">

            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#b88a44]/20 bg-[#b88a44]/10 text-[#b88a44] text-sm font-medium">

              <span className="w-2 h-2 rounded-full bg-[#b88a44] animate-pulse" />

              Rajasthan Property Hub

            </div>

          </div>

          {/* HEADING */}
          <div className="text-center mt-8 fade-up">

            <h2 className="font-heading text-4xl md:text-6xl font-semibold text-[#1f1f1f] leading-tight">

              Discover Your
              <span className="text-[#b88a44] mx-2 relative">
                Dream Property
              </span>
              In Rajasthan

            </h2>

            <p className="mt-5 max-w-2xl mx-auto text-gray-600 text-base md:text-lg leading-7">
              Explore verified homes, luxury villas, apartments, and
              investment properties with a seamless premium experience.
            </p>

          </div>

          {/* CARDS */}
          <div className="mt-14 grid md:grid-cols-3 gap-6">

            {cards.map((item, i) => (
              <div
                key={i}
                className="card relative p-7 rounded-3xl bg-white/70 border border-[#d9c3a0]/20 shadow-sm"
              >

                {/* ICON */}
                <div className="w-12 h-12 rounded-2xl bg-[#b88a44]/10 text-[#b88a44] flex items-center justify-center transition group-hover:scale-110">

                  {item.icon}

                </div>

                <h3 className="font-heading mt-5 text-xl font-semibold text-[#1f1f1f]">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-gray-600 leading-6">
                  {item.desc}
                </p>

              </div>
            ))}

          </div>

          {/* BUTTONS */}
          <div className="mt-14 flex flex-wrap justify-center gap-4">

            {/* PRIMARY */}
            <button className="group relative overflow-hidden rounded-full bg-[#b88a44] px-8 py-3.5 text-white text-sm font-medium shadow-lg hover:scale-[1.03] transition">

              <div className="absolute inset-0 bg-gradient-to-r from-[#d8a85b] to-[#b88a44] translate-y-full group-hover:translate-y-0 transition" />

              <span className="relative flex items-center gap-2">

                Explore Properties
                <ArrowUpRight
                  size={16}
                  className="group-hover:rotate-45 transition"
                />

              </span>

            </button>

            {/* SECONDARY */}
            <button className="gold-line rounded-full border border-black/10 bg-white px-8 py-3.5 text-sm font-medium text-[#1f1f1f] hover:bg-[#1f1f1f] hover:text-white transition">

              Contact Agent

            </button>

          </div>

        </div>
      </div>
    </section>
  );
}