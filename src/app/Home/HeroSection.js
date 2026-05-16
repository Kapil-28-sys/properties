"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Calendar, MapPin, Search } from "lucide-react";

const stats = [
  { value: "10K+", label: "Happy Clients" },
  { value: "500+", label: "Premium Homes" },
  { value: "18%",  label: "Avg. ROI"      },
  { value: "50+",  label: "Districts"     },
];

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .hs * { box-sizing: border-box; }

        /* ── Background zoom ── */
        @keyframes hs-zoom {
          from { transform: scale(1.08); }
          to   { transform: scale(1);    }
        }
        .hs-bg-img {
          animation: hs-zoom 7s cubic-bezier(0.22,1,0.36,1) forwards;
        }

        /* ── Staggered content entrance ── */
        @keyframes hs-up {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        @keyframes hs-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        .hs-d1 { animation: hs-up 0.8s 0.2s cubic-bezier(0.22,1,0.36,1) both; }
        .hs-d2 { animation: hs-up 0.8s 0.4s cubic-bezier(0.22,1,0.36,1) both; }
        .hs-d3 { animation: hs-up 0.8s 0.55s cubic-bezier(0.22,1,0.36,1) both; }
        .hs-d4 { animation: hs-up 0.8s 0.7s cubic-bezier(0.22,1,0.36,1) both; }
        .hs-d5 { animation: hs-up 0.8s 0.85s cubic-bezier(0.22,1,0.36,1) both; }
        .hs-d6 { animation: hs-up 0.8s 1.0s cubic-bezier(0.22,1,0.36,1) both; }

        /* ── Ping dot ── */
        @keyframes hs-ping {
          0%    { transform: scale(1);   opacity: 0.7; }
          80%,100% { transform: scale(2.2); opacity: 0;   }
        }
        .hs-ping { animation: hs-ping 1.8s ease-out infinite; }

        /* ── Buttons ── */
        .hs-btn-primary {
          position: relative;
          overflow: hidden;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
          cursor: pointer;
        }
        .hs-btn-primary::before {
          content: "";
          position: absolute;
          inset: 0;
          background: var(--primary);
          transform: translateX(-101%);
          transition: transform 0.42s cubic-bezier(0.22,1,0.36,1);
          z-index: 0;
        }
        .hs-btn-primary:hover::before { transform: translateX(0); }
        .hs-btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 32px rgba(245,158,11,0.32);
          color: #fff !important;
          border-color: var(--primary) !important;
        }
        .hs-btn-primary > * { position: relative; z-index: 1; }

        .hs-btn-outline {
          position: relative;
          overflow: hidden;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
          cursor: pointer;
        }
        .hs-btn-outline::before {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0.12);
          transform: translateX(-101%);
          transition: transform 0.42s cubic-bezier(0.22,1,0.36,1);
          z-index: 0;
        }
        .hs-btn-outline:hover::before { transform: translateX(0); }
        .hs-btn-outline:hover { transform: translateY(-3px); }
        .hs-btn-outline > * { position: relative; z-index: 1; }

        /* ── Search bar ── */
        .hs-search-input {
          outline: none;
          transition: background 0.3s ease;
        }
        .hs-search-input:focus { background: rgba(255,255,255,0.18) !important; }

        /* ── Stat cards ── */
        .hs-stat {
          transition: transform 0.35s ease;
        }
        .hs-stat:hover { transform: translateY(-4px); }

        /* ── Scroll hint ── */
        @keyframes hs-scroll {
          0%,100% { transform: translateY(0);  opacity: 0.6; }
          50%      { transform: translateY(6px); opacity: 1;   }
        }
        .hs-scroll-dot { animation: hs-scroll 1.8s ease-in-out infinite; }
      `}</style>

      {/* ── Background image ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          zIndex: 0,
        }}
      >
        <img
          src="https://www.luxuryresidences.in/seo-assest/images/the-ark-voyage-banner.webp"
          alt="Premium Property"
          className="hs-bg-img"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transformOrigin: "center",
          }}
        />
        {/* Multi-layer overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(110deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.22) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 50%)",
          }}
        />
      </div>

      {/* ── Decorative glows ── */}
      <div style={{ position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none", overflow: "hidden" }}>
        {/* Orange top-left */}
        <div style={{ position: "absolute", top: -100, left: -60, width: 400, height: 400, borderRadius: "50%", background: "rgba(245,158,11,0.18)", filter: "blur(120px)" }} />
        {/* Blue bottom-right */}
        <div style={{ position: "absolute", bottom: -120, right: -80, width: 450, height: 450, borderRadius: "50%", background: "rgba(15,61,145,0.22)", filter: "blur(140px)" }} />
        {/* Accent green mid */}
        <div style={{ position: "absolute", top: "42%", right: "16%", width: 150, height: 150, borderRadius: "50%", background: "rgba(63,163,77,0.14)", filter: "blur(80px)" }} />

        {/* Grid lines */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)",
          backgroundSize: "88px 88px",
        }} />

        {/* Decorative circles */}
        <div style={{ position: "absolute", top: 120, right: 200, width: 240, height: 240, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.07)" }} />
        <div style={{ position: "absolute", top: 80, right: 160, width: 340, height: 340, borderRadius: "50%", border: "1px dashed rgba(245,158,11,0.1)" }} />
        <div style={{ position: "absolute", bottom: 100, left: 80, width: 190, height: 190, borderRadius: "50%", border: "1px solid rgba(245,158,11,0.12)" }} />
      </div>

      {/* ── Main content ── */}
      <div
        className="hs"
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: 1200,
          width: "100%",
          margin: "0 auto",
          padding: "0 28px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingTop: 100,
          paddingBottom: 60,
        }}
      >
        <div style={{ maxWidth: 720 }}>

          {/* Badge */}
          <div
            className="hs-d1"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 20px 8px 14px",
              borderRadius: 100,
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.13)",
              backdropFilter: "blur(12px)",
              marginBottom: 28,
            }}
          >
            <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span
                className="hs-ping"
                style={{
                  position: "absolute",
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  background: "rgba(245,158,11,0.3)",
                }}
              />
              <span style={{ position: "relative", width: 7, height: 7, borderRadius: "50%", background: "var(--primary)", display: "inline-block" }} />
            </div>
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 10,
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.72)",
                fontWeight: 500,
              }}
            >
              A Step For Future Properties
            </span>
          </div>

          {/* Heading */}
          <h1
            className="hs-d2"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(3.6rem, 7vw, 7.2rem)",
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: 6,
            }}
          >
            <span style={{ fontWeight: 300, color: "rgba(255,255,255,0.95)" }}>
              Find Your
            </span>
            <span style={{ fontWeight: 600, color: "var(--primary)" }}>
              Dream Property
            </span>
            <span style={{ fontWeight: 300, fontStyle: "italic", color: "rgba(255,255,255,0.72)" }}>
              For A Better Future
            </span>
          </h1>

          {/* Divider */}
          <div
            className="hs-d3"
            style={{
              width: 70,
              height: 2,
              borderRadius: 2,
              background: "linear-gradient(to right, var(--primary), transparent)",
              marginTop: 28,
            }}
          />

          {/* Description */}
          <p
            className="hs-d4"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              marginTop: 24,
              fontSize: 16,
              lineHeight: 1.9,
              color: "rgba(255,255,255,0.72)",
              maxWidth: 560,
            }}
          >
            Experience premium real estate with luxury homes, smart investments,
            and modern living spaces crafted for comfort, elegance, and long-term value.
          </p>

          {/* Buttons */}
          <div
            className="hs-d5"
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: 12,
              marginTop: 36,
            }}
          >
            <button
              className="hs-btn-primary"
              style={{
                padding: "14px 30px",
                borderRadius: 100,
                border: "1px solid var(--primary)",
                background: "transparent",
                color: "var(--primary)",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span>Explore Properties</span>
              <ArrowUpRight size={14} />
            </button>

            <button
              className="hs-btn-outline"
              style={{
                padding: "14px 30px",
                borderRadius: 100,
                border: "1px solid rgba(255,255,255,0.22)",
                background: "rgba(255,255,255,0.07)",
                backdropFilter: "blur(10px)",
                color: "rgba(255,255,255,0.85)",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Calendar size={14} />
              <span>Schedule Consultation</span>
            </button>
          </div>

         
        </div>

      
      </div>

      {/* ── Scroll hint ── */}
      <div
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
        }}
      >
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 9,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.35)",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: 1,
            height: 40,
            background: "linear-gradient(to bottom, rgba(255,255,255,0.35), transparent)",
            position: "relative",
          }}
        >
          <div
            className="hs-scroll-dot"
            style={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: 5,
              height: 5,
              borderRadius: "50%",
              background: "var(--primary)",
            }}
          />
        </div>
      </div>
    </section>
  );
}