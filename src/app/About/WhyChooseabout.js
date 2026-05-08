"use client";

import { useState } from "react";
import { Crown, Gem, Building } from "lucide-react";

const features = [
  {
    id: "01",
    title: ["Luxury", "Design"],
    desc: "Elegant interiors with timeless aesthetics crafted for premium modern living.",
    icon: Crown,
  },
  {
    id: "02",
    title: ["Premium", "Quality"],
    desc: "Exceptional craftsmanship and refined materials built for lasting excellence.",
    icon: Gem,
  },
  {
    id: "03",
    title: ["Modern", "Spaces"],
    desc: "Emotion-driven architecture blended with comfort and contemporary innovation.",
    icon: Building,
  },
];

const GOLD       = "#d4af37";
const GOLD_LIGHT = "#f0d060";
const GOLD_SOFT  = "rgba(212,175,55,0.13)";
const INK        = "#1a1612";

export default function WhyChooseUs() {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#f8f5ef",
        padding: "7rem 0",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* ── Fonts + keyframes ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');
        @keyframes wycPing {
          0%   { transform: scale(1); opacity: 0.7; }
          100% { transform: scale(2.4); opacity: 0; }
        }
        @keyframes wycFadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* ── Decorative border rings ── */}
      {[
        { style: { top:48,  left:32,  width:200, height:200, borderRadius:44,  transform:"rotate(14deg)",   borderColor:"rgba(212,175,55,0.12)" } },
        { style: { top:110, left:110, width:96,  height:96,  borderRadius:22,  transform:"rotate(14deg)",   borderColor:"rgba(212,175,55,0.18)" } },
        { style: { top:32,  right:48, width:240, height:240, borderRadius:44,  transform:"rotate(-14deg)",  borderColor:"rgba(212,175,55,0.10)" } },
        { style: { bottom:40, left:60, width:280, height:280, borderRadius:60, transform:"rotate(18deg)",   borderColor:"rgba(0,0,0,0.04)"      } },
        { style: { bottom:24, right:24,width:320, height:320, borderRadius:70, transform:"rotate(12deg)",   borderColor:"rgba(212,175,55,0.08)" } },
      ].map((d, i) => (
        <div key={i} aria-hidden="true" style={{
          position:"absolute", pointerEvents:"none",
          border:"1px solid", borderColor: d.style.borderColor,
          ...d.style,
        }} />
      ))}

      {/* Centre diamond */}
      <div aria-hidden="true" style={{
        position:"absolute", pointerEvents:"none",
        top:"50%", left:"50%",
        width:480, height:480,
        border:"1px solid rgba(0,0,0,0.03)",
        borderRadius:80,
        transform:"translate(-50%,-50%) rotate(45deg)",
      }} />

      {/* Top ambient glow */}
      <div aria-hidden="true" style={{
        position:"absolute", pointerEvents:"none",
        top:-160, left:"50%", transform:"translateX(-50%)",
        width:700, height:340,
        background:"rgba(212,175,55,0.10)",
        filter:"blur(130px)",
      }} />

      {/* ── Main content ── */}
      <div style={{ position:"relative", zIndex:10, maxWidth:1200, margin:"0 auto", padding:"0 2rem" }}>

        {/* Header row */}
        <div style={{
          display:"flex", flexWrap:"wrap",
          alignItems:"flex-end", justifyContent:"space-between",
          gap:"3rem", marginBottom:"4rem",
        }}>

          {/* Left — heading */}
          <div style={{ maxWidth:560 }}>

            {/* Badge */}
            <div style={{
              display:"inline-flex", alignItems:"center", gap:10,
              padding:"8px 18px", borderRadius:999,
              border:"1px solid rgba(0,0,0,0.07)",
              background:"rgba(255,255,255,0.85)",
              backdropFilter:"blur(16px)",
              boxShadow:"0 2px 12px rgba(0,0,0,0.04)",
              marginBottom:"1.6rem",
              position:"relative",
            }}>
              <span style={{
                position:"absolute", width:12, height:12, borderRadius:"50%",
                background:"rgba(212,175,55,0.25)",
                animation:"wycPing 1.8s ease-out infinite",
              }} />
              <span style={{
                position:"relative", width:8, height:8,
                borderRadius:"50%", background:GOLD, flexShrink:0,
              }} />
              <span style={{
                fontSize:10, letterSpacing:"0.32em",
                textTransform:"uppercase", color:"rgba(0,0,0,0.45)", fontWeight:500,
              }}>
                Why Choose Us
              </span>
            </div>

            {/* H2 */}
            <h2 style={{
              fontFamily:"'Playfair Display', serif",
              fontWeight:600,
              fontSize:"clamp(3rem, 6vw, 5.2rem)",
              lineHeight:0.92, letterSpacing:"-0.03em",
              color:INK,
              display:"flex", flexDirection:"column", gap:"0.12em",
              margin:0,
            }}>
              Crafted For
              <em style={{ fontStyle:"italic", fontWeight:300, color:"#c9a227", letterSpacing:"-0.02em" }}>
                Luxury Living
              </em>
            </h2>

            <p style={{
              marginTop:"1.4rem", fontSize:15, lineHeight:1.75,
              color:"rgba(0,0,0,0.48)", maxWidth:440, margin:"1.4rem 0 0",
            }}>
              Sophisticated architecture, elegant interiors, and premium experiences
              designed for the way you want to live.
            </p>
          </div>

          {/* Right — experience pill */}
          <ExperienceCard />
        </div>

        {/* Feature cards */}
        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",
          gap:"1.2rem",
        }}>
          {features.map((item, i) => (
            <FeatureCard
              key={i}
              item={item}
              index={i}
              active={hovered === i}
              onEnter={() => setHovered(i)}
              onLeave={() => setHovered(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── */
/*  Experience Card              */
/* ───────────────────────────── */
function ExperienceCard() {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position:"relative", overflow:"hidden", flexShrink:0,
        borderRadius:28,
        border: hov ? "1px solid rgba(212,175,55,0.28)" : "1px solid rgba(0,0,0,0.06)",
        background:"rgba(255,255,255,0.85)",
        backdropFilter:"blur(20px)",
        padding:"2rem 2.4rem",
        minWidth:240,
        boxShadow: hov
          ? "0 20px 64px rgba(212,175,55,0.14), 0 4px 20px rgba(0,0,0,0.06)"
          : "0 12px 48px rgba(0,0,0,0.05)",
        transition:"box-shadow 0.4s ease, border-color 0.4s ease",
      }}
    >
      {/* Shine tint */}
      <div style={{
        position:"absolute", inset:0, pointerEvents:"none",
        background:"linear-gradient(135deg, transparent 40%, rgba(212,175,55,0.06) 100%)",
      }} />

      <p style={{ fontSize:10, letterSpacing:"0.28em", textTransform:"uppercase", color:"rgba(0,0,0,0.35)", fontWeight:500, margin:0 }}>
        Years of Excellence
      </p>

      <h3 style={{
        fontFamily:"'Playfair Display', serif",
        fontSize:"5rem", fontWeight:600,
        lineHeight:1, letterSpacing:"-0.05em",
        color:INK, margin:"0.25rem 0 0.1rem",
      }}>
        10<span style={{ color:"#c9a227", fontStyle:"italic", fontWeight:300 }}>+</span>
      </h3>

      <p style={{ fontSize:13, color:"rgba(0,0,0,0.40)", margin:"0.3rem 0 0" }}>
        Delivering premium spaces since 2014
      </p>

      {/* Progress bar */}
      <div style={{ marginTop:"1.2rem", height:2, background:"rgba(0,0,0,0.07)", borderRadius:999, overflow:"hidden" }}>
        <div style={{
          height:"100%", width:"72%",
          background:`linear-gradient(90deg, ${GOLD}, ${GOLD_LIGHT})`,
          borderRadius:999,
        }} />
      </div>
    </div>
  );
}

/* ───────────────────────────── */
/*  Feature Card                 */
/* ───────────────────────────── */
function FeatureCard({ item, index, active, onEnter, onLeave }) {
  const Icon = item.icon;

  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        position:"relative", overflow:"hidden",
        borderRadius:28,
        border: active ? "1px solid rgba(212,175,55,0.25)" : "1px solid rgba(0,0,0,0.06)",
        background:"rgba(255,255,255,0.82)",
        backdropFilter:"blur(20px)",
        boxShadow: active
          ? "0 24px 72px rgba(212,175,55,0.13), 0 4px 20px rgba(0,0,0,0.06)"
          : "0 2px 16px rgba(0,0,0,0.04)",
        transform: active ? "translateY(-6px)" : "translateY(0)",
        transition:"transform 0.4s cubic-bezier(0.23,1,0.32,1), box-shadow 0.4s ease, border-color 0.4s ease",
        cursor:"default",
        animation:`wycFadeUp 0.65s ${index * 0.1}s both`,
      }}
    >
      {/* Hover glow blob */}
      <div style={{
        position:"absolute", top:-80, right:-80,
        width:240, height:240, borderRadius:"50%",
        background:"rgba(212,175,55,0.12)",
        filter:"blur(80px)",
        opacity: active ? 1 : 0,
        transition:"opacity 0.6s ease",
        pointerEvents:"none",
      }} />

      {/* Subtle grid texture */}
      <div style={{
        position:"absolute", inset:0, pointerEvents:"none",
        backgroundImage:`
          linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)
        `,
        backgroundSize:"28px 28px",
        opacity:0.55,
      }} />

      {/* Card body */}
      <div style={{ position:"relative", zIndex:2, padding:"2.2rem 2rem" }}>

        {/* Top row: icon + ghost number */}
        <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", marginBottom:"2.6rem" }}>

          <div style={{
            width:60, height:60, borderRadius:20,
            background:`linear-gradient(135deg, #f7e9ba, ${GOLD})`,
            display:"flex", alignItems:"center", justifyContent:"center",
            boxShadow: active ? "0 12px 40px rgba(212,175,55,0.40)" : "0 8px 32px rgba(212,175,55,0.28)",
            transform: active ? "scale(1.08)" : "scale(1)",
            transition:"transform 0.35s ease, box-shadow 0.35s ease",
            flexShrink:0,
          }}>
            <Icon style={{ width:26, height:26, color:"#2a1f00" }} />
          </div>

          <span style={{
            fontFamily:"'Playfair Display', serif",
            fontSize:"5rem", fontWeight:600,
            lineHeight:1, letterSpacing:"-0.06em",
            color: active ? GOLD_SOFT : "rgba(0,0,0,0.045)",
            transition:"color 0.35s ease",
            userSelect:"none",
          }}>
            {item.id}
          </span>
        </div>

        {/* Title */}
        <h3 style={{
          fontFamily:"'Playfair Display', serif",
          fontWeight:600, fontSize:"2rem",
          lineHeight:0.95, letterSpacing:"-0.04em",
          color:INK, margin:0,
          display:"flex", flexDirection:"column", gap:"0.05em",
        }}>
          {item.title[0]}
          <em style={{ fontStyle:"italic", fontWeight:300, color:"#c9a227" }}>
            {item.title[1]}
          </em>
        </h3>

        {/* Description */}
        <p style={{ marginTop:"1rem", fontSize:13.5, lineHeight:1.72, color:"rgba(0,0,0,0.50)" }}>
          {item.desc}
        </p>

        {/* Bottom rule */}
        <div style={{ display:"flex", alignItems:"center", gap:10, marginTop:"2rem" }}>
          <span style={{
            width:7, height:7, borderRadius:"50%",
            background:GOLD, flexShrink:0,
            boxShadow: active ? "0 0 0 4px rgba(212,175,55,0.20)" : "none",
            transition:"box-shadow 0.35s ease",
          }} />
          <span style={{
            display:"block", height:1,
            width: active ? 120 : 72,
            background:`linear-gradient(90deg, ${GOLD} 0%, transparent 100%)`,
            transition:"width 0.5s ease",
          }} />
        </div>
      </div>
    </div>
  );
}