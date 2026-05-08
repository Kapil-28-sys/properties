"use client";

import { useState } from "react";
import { MapPinned, ArrowUpRight, Sparkles } from "lucide-react";

const locations = {
  India: [
    { name: "Mumbai", count: 120, x: "62%", y: "58%" },
    { name: "Delhi", count: 200, x: "58%", y: "38%" },
    { name: "Bangalore", count: 90, x: "60%", y: "75%" },
    { name: "Hyderabad", count: 75, x: "57%", y: "66%" },
  ],
  Rajasthan: [
    { name: "Jaipur", count: 80, x: "47%", y: "45%" },
    { name: "Udaipur", count: 50, x: "42%", y: "62%" },
    { name: "Jodhpur", count: 30, x: "38%", y: "50%" },
    { name: "Ajmer", count: 40, x: "45%", y: "52%" },
  ],
};

/* ================= REAL LOOK SVG MAP ================= */

const IndiaMapSVG = () => (
  <svg viewBox="0 0 800 900" className="w-full h-full">
    
    {/* India silhouette (clean visible shape) */}
    <path
      d="M300 100
         L420 120
         L520 200
         L540 320
         L500 450
         L430 580
         L380 700
         L300 760
         L220 700
         L180 580
         L150 430
         L170 300
         L210 180
         Z"
      fill="#f0e2d0"
      stroke="#b88a44"
      strokeWidth="3"
    />

    {/* internal border lines (fake states grid look) */}
    <path
      d="M300 100 L300 760
         M200 200 L500 200
         M180 350 L520 350
         M200 500 L500 500
         M250 650 L450 650"
      stroke="#d1b48a"
      strokeWidth="1.5"
      opacity="0.7"
    />
  </svg>
);

const RajasthanMapSVG = () => (
  <svg viewBox="0 0 500 500" className="w-full h-full">

    <path
      d="M120 80
         L300 60
         L380 140
         L360 260
         L280 360
         L150 340
         L80 220
         Z"
      fill="#f0e2d0"
      stroke="#b88a44"
      strokeWidth="3"
    />

    {/* internal district feel */}
    <path
      d="M140 120 L320 120
         M120 200 L360 200
         M140 280 L340 280"
      stroke="#d1b48a"
      strokeWidth="1.2"
      opacity="0.7"
    />

  </svg>
);

/* ================= COMPONENT ================= */

export default function MapSection() {
  const [tab, setTab] = useState("India");
  const [active, setActive] = useState(locations.India[0]);

  return (
    <section className="relative bg-[#f7f3ee] py-14 overflow-hidden">

      {/* GRID BG */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(184,138,68,0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(184,138,68,0.2) 1px, transparent 1px)
          `,
          backgroundSize: "55px 55px",
        }}
      />

      <div className="relative max-w-[1300px] mx-auto px-4">

        {/* HEADER */}
        <div className="flex justify-between items-end mb-8 flex-wrap gap-5">

          <div>
            <div className="flex items-center gap-2 text-[#b88a44] text-xs uppercase tracking-[0.3em]">
              <Sparkles size={14} />
              Investment Map
            </div>

            <h2 className="text-4xl font-semibold mt-2 text-[#1f1f1f]">
              Explore Properties
            </h2>
          </div>

          {/* TOGGLE */}
          <div className="flex bg-white rounded-full p-1 border shadow-sm">
            {Object.keys(locations).map((item) => (
              <button
                key={item}
                onClick={() => {
                  setTab(item);
                  setActive(locations[item][0]);
                }}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition ${
                  tab === item
                    ? "bg-[#b88a44] text-white"
                    : "text-gray-600"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

        </div>

        {/* MAP + SIDE */}
        <div className="grid lg:grid-cols-[1fr_320px] gap-5">

          {/* MAP BOX */}
          <div className="relative h-[520px] bg-white rounded-[28px] border shadow-lg overflow-hidden flex items-center justify-center">

            {/* SVG MAP */}
            <div className="w-full h-full p-6">
              {tab === "India" ? <IndiaMapSVG /> : <RajasthanMapSVG />}
            </div>

            {/* MARKERS */}
            {locations[tab].map((loc, i) => (
              <div
                key={i}
                onClick={() => setActive(loc)}
                className="absolute cursor-pointer"
                style={{ left: loc.x, top: loc.y }}
              >
                <div className="relative flex items-center justify-center">

                  <span className="absolute w-10 h-10 bg-[#b88a44]/30 rounded-full animate-ping" />

                  <div
                    className={`w-3 h-3 rounded-full border-2 border-white shadow ${
                      active.name === loc.name
                        ? "bg-black scale-125"
                        : "bg-[#b88a44]"
                    }`}
                  />

                </div>
              </div>
            ))}

          </div>

          {/* SIDE PANEL */}
          <div className="bg-white rounded-[28px] border shadow-lg p-6">

            <div className="w-12 h-12 bg-[#b88a44]/10 text-[#b88a44] flex items-center justify-center rounded-xl">
              <MapPinned />
            </div>

            <h3 className="mt-5 text-2xl font-semibold">
              {active.name}
            </h3>

            <p className="text-gray-500 text-sm mt-2">
              Available Properties
            </p>

            <h2 className="text-4xl font-bold text-[#b88a44] mt-2">
              {active.count}
            </h2>

            <button className="mt-6 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-[#b88a44] transition">
              <ArrowUpRight size={18} />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}