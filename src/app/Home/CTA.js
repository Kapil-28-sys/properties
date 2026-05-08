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
      desc: "Trusted and premium properties across Rajasthan.",
      icon: <BadgeCheck size={24} />,
    },
    {
      title: "Luxury Locations",
      desc: "Explore modern homes in top growing cities.",
      icon: <Building2 size={24} />,
    },
    {
      title: "Smooth Experience",
      desc: "Fast communication and effortless process.",
      icon: <Sparkles size={24} />,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f8f6f1] py-28 px-6">

      {/* dots */}
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* top glow */}
      <div className="absolute left-1/2 top-0 h-[350px] w-[650px] -translate-x-1/2 rounded-full bg-[#b88a44]/10 blur-[140px]" />

      {/* floating blur */}
      <div className="absolute bottom-0 right-0 h-[220px] w-[220px] rounded-full bg-[#b88a44]/10 blur-[120px]" />

      <div
        ref={ref}
        className={`relative mx-auto max-w-6xl transition-all duration-1000 ${
          show
            ? "translate-y-0 opacity-100"
            : "translate-y-12 opacity-0"
        }`}
      >
        {/* main container */}
        <div className="relative overflow-hidden rounded-[40px] border border-black/5 bg-white/70 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.06)] p-8 md:p-14">

          {/* subtle lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent,rgba(184,138,68,0.05),transparent)]" />

          {/* badge */}
          <div className="flex justify-center">
            <div className="group inline-flex items-center gap-2 rounded-full border border-[#b88a44]/20 bg-[#b88a44]/10 px-5 py-2 text-sm font-medium text-[#b88a44] transition-all duration-300 hover:scale-105">
              <span className="h-2 w-2 rounded-full bg-[#b88a44] animate-pulse" />
              Rajasthan Property Hub
            </div>
          </div>

          {/* heading */}
          <div className="mx-auto mt-8 max-w-4xl text-center">
            <h2 className="text-4xl font-semibold leading-tight tracking-tight text-[#111] md:text-6xl">
              Discover Your
              <span className="relative mx-3 inline-block text-[#b88a44]">
                Dream Property
                <div className="absolute -bottom-2 left-0 h-[10px] w-full rounded-full bg-[#b88a44]/15 blur-md" />
              </span>
              In Rajasthan
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#666] md:text-lg">
              Explore verified homes, luxury villas, apartments, and
              investment properties with a premium and seamless experience.
            </p>
          </div>

          {/* cards */}
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {cards.map((item, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-[30px] border border-black/5 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(184,138,68,0.12)]"
              >
                {/* hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#b88a44]/0 via-[#b88a44]/0 to-[#b88a44]/5 opacity-0 transition-all duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#b88a44]/10 text-[#b88a44] transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    {item.icon}
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-[#111]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#666]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* buttons */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-5">

            {/* primary */}
            <button className="group relative overflow-hidden rounded-full bg-[#b88a44] px-8 py-4 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_10px_30px_rgba(184,138,68,0.35)]">
              <div className="absolute inset-0 translate-y-full bg-gradient-to-r from-[#d8a85b] to-[#b88a44] transition-all duration-500 group-hover:translate-y-0" />

              <div className="relative z-10 flex items-center gap-2">
                Explore Properties
                <ArrowUpRight
                  size={17}
                  className="transition-all duration-300 group-hover:rotate-45"
                />
              </div>
            </button>

            {/* secondary */}
            <button className="group rounded-full border border-black/10 bg-white px-8 py-4 text-sm font-medium text-[#111] transition-all duration-300 hover:-translate-y-1 hover:border-[#b88a44]/30 hover:bg-[#111] hover:text-white">
              Contact Agent
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}