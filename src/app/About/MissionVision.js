"use client";

import { useState } from "react";
import { Eye, Target } from "lucide-react";

const GOLD       = "#d4af37";
const GOLD_LIGHT = "rgba(212,175,55,0.12)";
const INK        = "#1a1612";

export default function MissionVision() {
  const [mHov, setMHov] = useState(false);
  const [vHov, setVHov] = useState(false);

  return (
    <section style={{ position:"relative", overflow:"hidden", background:"#faf8f3", padding:"7rem 0", fontFamily:"'DM Sans', sans-serif" }}>

      {/* Fonts + keyframes */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        @keyframes mvPing {
          0%   { transform:scale(1); opacity:0.7; }
          100% { transform:scale(2.4); opacity:0; }
        }
        @keyframes mvFloat {
          0%,100% { transform:translateY(0);  opacity:0.5; }
          50%      { transform:translateY(-7px); opacity:1; }
        }
        @keyframes mvFadeUp {
          from { opacity:0; transform:translateY(20px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes mvShine {
          0%   { left:-120%; }
          100% { left:150%;  }
        }

        .mv-grid-light {
          background-image:
            linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px);
          background-size: 36px 36px;
          transform: perspective(900px) rotateX(55deg) scale(2);
          transform-origin: top;
        }
        .mv-grid-dark {
          background-image:
            linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px);
          background-size: 36px 36px;
          transform: perspective(900px) rotateX(55deg) scale(2);
          transform-origin: top;
        }
        .mv-float   { animation: mvFloat 3.2s ease-in-out infinite; }
        .mv-float-2 { animation: mvFloat 3.2s ease-in-out 0.4s infinite; }
        .mv-float-3 { animation: mvFloat 3.2s ease-in-out 0.8s infinite; }

        .mv-shine-inner {
          position:absolute; top:0; height:100%; width:55%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.38), transparent);
          transform: skewX(-12deg);
        }
        .mv-shine-run { animation: mvShine 1.6s cubic-bezier(0.23,1,0.32,1) forwards; }
      `}</style>

      {/* Top ambient glow */}
      <div aria-hidden style={{ position:"absolute", pointerEvents:"none", top:-120, left:"50%", transform:"translateX(-50%)", width:900, height:500, background:"rgba(212,175,55,0.09)", filter:"blur(180px)" }} />

      {/* Decorative rings */}
      {[
        { top:40,   left:20,   w:220, h:220, r:50, rot:"rotate(16deg)",  bc:"rgba(212,175,55,0.10)" },
        { top:80,   right:30,  w:180, h:180, r:40, rot:"rotate(-12deg)", bc:"rgba(212,175,55,0.08)" },
        { bottom:30,left:60,   w:260, h:260, r:60, rot:"rotate(20deg)",  bc:"rgba(0,0,0,0.04)"      },
        { bottom:20,right:20,  w:300, h:300, r:70, rot:"rotate(10deg)",  bc:"rgba(212,175,55,0.07)" },
      ].map((d,i) => (
        <div key={i} aria-hidden style={{
          position:"absolute", pointerEvents:"none",
          top:d.top, left:d.left, right:d.right, bottom:d.bottom,
          width:d.w, height:d.h,
          border:`1px solid ${d.bc}`,
          borderRadius:d.r,
          transform:d.rot,
        }} />
      ))}

      {/* ── Content ── */}
      <div style={{ position:"relative", zIndex:10, maxWidth:1280, margin:"0 auto", padding:"0 2rem" }}>

        {/* Heading */}
        <div style={{ textAlign:"center", maxWidth:700, margin:"0 auto", animation:"mvFadeUp 0.75s both" }}>

          {/* Badge */}
          <div style={{
            display:"inline-flex", alignItems:"center", gap:10,
            padding:"8px 20px", borderRadius:999,
            border:"1px solid rgba(0,0,0,0.08)",
            background:"rgba(255,255,255,0.80)",
            backdropFilter:"blur(16px)",
            boxShadow:"0 4px 20px rgba(0,0,0,0.04)",
            position:"relative",
          }}>
            <span style={{ position:"absolute", width:12, height:12, borderRadius:"50%", background:"rgba(212,175,55,0.25)", animation:"mvPing 1.8s ease-out infinite" }} />
            <span style={{ position:"relative", width:8, height:8, borderRadius:"50%", background:GOLD, flexShrink:0 }} />
            <span style={{ fontSize:10, letterSpacing:"0.35em", textTransform:"uppercase", color:"rgba(0,0,0,0.50)", fontWeight:500 }}>
              Mission & Vision
            </span>
          </div>

          {/* Title */}
          <h2 style={{
            fontFamily:"'Playfair Display', serif",
            fontWeight:600,
            fontSize:"clamp(3rem, 6vw, 5.5rem)",
            lineHeight:0.9, letterSpacing:"-0.04em",
            color:INK, margin:"2rem 0 0",
            display:"flex", flexDirection:"column", gap:"0.1em", alignItems:"center",
          }}>
            Crafted For
            <em style={{ fontStyle:"italic", fontWeight:300, color:GOLD }}>
              Timeless Impact
            </em>
          </h2>
        </div>

        {/* Cards */}
        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",
          gap:"1.5rem",
          marginTop:"4.5rem",
        }}>
          <MissionCard hov={mHov} onEnter={() => setMHov(true)} onLeave={() => setMHov(false)} />
          <VisionCard  hov={vHov} onEnter={() => setVHov(true)} onLeave={() => setVHov(false)} />
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── */
/*  Mission Card (light)     */
/* ───────────────────────── */
function MissionCard({ hov, onEnter, onLeave }) {
  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        position:"relative", overflow:"hidden",
        borderRadius:36,
        border: hov ? "1px solid rgba(212,175,55,0.22)" : "1px solid rgba(0,0,0,0.08)",
        background:"rgba(255,255,255,0.92)",
        backdropFilter:"blur(20px)",
        padding:"2.8rem",
        boxShadow: hov
          ? "0 28px 100px rgba(212,175,55,0.13), 0 6px 24px rgba(0,0,0,0.06)"
          : "0 20px 80px rgba(0,0,0,0.06)",
        transform: hov ? "translateY(-10px)" : "translateY(0)",
        transition:"all 0.65s cubic-bezier(0.23,1,0.32,1)",
        animation:"mvFadeUp 0.7s 0.1s both",
      }}
    >
      {/* Grid texture */}
      <div aria-hidden style={{ position:"absolute", inset:0, opacity:0.04, pointerEvents:"none" }}>
        <div className="mv-grid-light" style={{ height:"100%", width:"100%" }} />
      </div>

      {/* Top-right glow */}
      <div aria-hidden style={{
        position:"absolute", top:-100, right:-60,
        width:320, height:320, borderRadius:"50%",
        background:"rgba(212,175,55,0.10)", filter:"blur(110px)",
        opacity: hov ? 1 : 0,
        transform: hov ? "scale(1.2)" : "scale(1)",
        transition:"opacity 0.7s ease, transform 0.7s ease",
        pointerEvents:"none",
      }} />

      {/* Shine sweep */}
      <div aria-hidden style={{ position:"absolute", inset:0, overflow:"hidden", pointerEvents:"none", opacity: hov ? 1 : 0, transition:"opacity 0.4s" }}>
        <div className={`mv-shine-inner ${hov ? "mv-shine-run" : ""}`} />
      </div>

      {/* Floating dots */}
      <div style={{ position:"absolute", top:28, right:28, display:"flex", gap:8 }}>
        <span className="mv-float"   style={{ width:7, height:7, borderRadius:"50%", background:GOLD, display:"block" }} />
        <span className="mv-float-2" style={{ width:7, height:7, borderRadius:"50%", background:"rgba(0,0,0,0.18)", display:"block" }} />
        <span className="mv-float-3" style={{ width:7, height:7, borderRadius:"50%", background:"rgba(212,175,55,0.55)", display:"block" }} />
      </div>

      {/* Body */}
      <div style={{ position:"relative", zIndex:2 }}>

        {/* Icon + number */}
        <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between" }}>
          <div style={{
            width:64, height:64, borderRadius:20,
            background:"linear-gradient(135deg, #1a1612, #2d2926)",
            display:"flex", alignItems:"center", justifyContent:"center",
            boxShadow: hov ? "0 16px 40px rgba(0,0,0,0.22)" : "0 10px 30px rgba(0,0,0,0.15)",
            transform: hov ? "scale(1.06)" : "scale(1)",
            transition:"transform 0.35s ease, box-shadow 0.35s ease",
            flexShrink:0,
          }}>
            <Target style={{ width:26, height:26, color:"#fff" }} />
          </div>
          <span style={{
            fontFamily:"'Playfair Display', serif",
            fontSize:"5.5rem", fontWeight:600, lineHeight:1,
            letterSpacing:"-0.1em",
            color: hov ? "rgba(212,175,55,0.11)" : "rgba(0,0,0,0.04)",
            transition:"color 0.4s ease", userSelect:"none",
          }}>01</span>
        </div>

        {/* Text */}
        <div style={{ marginTop:"3.5rem" }}>
          <p style={{ fontSize:10, letterSpacing:"0.35em", textTransform:"uppercase", color:"rgba(0,0,0,0.38)", fontWeight:500, margin:0 }}>
            Our Mission
          </p>

          <h3 style={{
            fontFamily:"'Playfair Display', serif",
            fontSize:"clamp(2.2rem, 4vw, 3rem)",
            fontWeight:600, lineHeight:0.92,
            letterSpacing:"-0.05em", color:INK,
            margin:"1.1rem 0 0",
            display:"flex", flexDirection:"column", gap:"0.05em",
          }}>
            Elegant
            <em style={{ fontStyle:"italic", fontWeight:300, color:GOLD }}>Experiences</em>
          </h3>

          <p style={{ marginTop:"1.4rem", fontSize:14.5, lineHeight:1.75, color:"rgba(0,0,0,0.54)", maxWidth:400 }}>
            Creating sophisticated living experiences through refined architecture,
            emotional storytelling, and timeless luxury aesthetics designed for modern lifestyles.
          </p>

          {/* Rule */}
          <div style={{ display:"flex", alignItems:"center", gap:12, marginTop:"2.2rem" }}>
            <div style={{ height:1, width: hov ? 100 : 72, background:`linear-gradient(90deg, ${GOLD}, transparent)`, transition:"width 0.5s ease" }} />
            <span style={{
              width:7, height:7, borderRadius:"50%", background:GOLD, flexShrink:0,
              boxShadow: hov ? "0 0 0 4px rgba(212,175,55,0.20)" : "none",
              transition:"box-shadow 0.35s ease",
            }} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────── */
/*  Vision Card (dark)       */
/* ───────────────────────── */
function VisionCard({ hov, onEnter, onLeave }) {
  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        position:"relative", overflow:"hidden",
        borderRadius:36,
        border: hov ? "1px solid rgba(212,175,55,0.30)" : "1px solid rgba(212,175,55,0.18)",
        background:"linear-gradient(135deg, #121212 0%, #1e1a13 50%, #151515 100%)",
        padding:"2.8rem",
        boxShadow: hov
          ? "0 28px 110px rgba(212,175,55,0.18), 0 6px 24px rgba(0,0,0,0.25)"
          : "0 20px 90px rgba(212,175,55,0.10)",
        transform: hov ? "translateY(-10px)" : "translateY(0)",
        transition:"all 0.65s cubic-bezier(0.23,1,0.32,1)",
        animation:"mvFadeUp 0.7s 0.2s both",
      }}
    >
      {/* Grid texture */}
      <div aria-hidden style={{ position:"absolute", inset:0, opacity:0.05, pointerEvents:"none" }}>
        <div className="mv-grid-dark" style={{ height:"100%", width:"100%" }} />
      </div>

      {/* Bottom-left gold glow */}
      <div aria-hidden style={{
        position:"absolute", bottom:-100, left:-60,
        width:380, height:380, borderRadius:"50%",
        background:"rgba(212,175,55,0.20)", filter:"blur(140px)",
        opacity: hov ? 1 : 0.6,
        transform: hov ? "scale(1.25)" : "scale(1)",
        transition:"opacity 0.7s ease, transform 0.7s ease",
        pointerEvents:"none",
      }} />

      {/* Shine sweep (subtle on dark) */}
      <div aria-hidden style={{ position:"absolute", inset:0, overflow:"hidden", pointerEvents:"none", opacity: hov ? 1 : 0, transition:"opacity 0.4s" }}>
        <div className={`mv-shine-inner ${hov ? "mv-shine-run" : ""}`} style={{ background:"linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)" }} />
      </div>

      {/* Floating dots */}
      <div style={{ position:"absolute", top:28, right:28, display:"flex", gap:8 }}>
        <span className="mv-float"   style={{ width:7, height:7, borderRadius:"50%", background:GOLD, display:"block" }} />
        <span className="mv-float-2" style={{ width:7, height:7, borderRadius:"50%", background:"rgba(255,255,255,0.18)", display:"block" }} />
        <span className="mv-float-3" style={{ width:7, height:7, borderRadius:"50%", background:"rgba(212,175,55,0.60)", display:"block" }} />
      </div>

      {/* Body */}
      <div style={{ position:"relative", zIndex:2 }}>

        {/* Icon + number */}
        <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between" }}>
          <div style={{
            width:64, height:64, borderRadius:20,
            background:GOLD,
            display:"flex", alignItems:"center", justifyContent:"center",
            boxShadow: hov ? "0 0 60px rgba(212,175,55,0.50)" : "0 0 40px rgba(212,175,55,0.32)",
            transform: hov ? "scale(1.06)" : "scale(1)",
            transition:"transform 0.35s ease, box-shadow 0.35s ease",
            flexShrink:0,
          }}>
            <Eye style={{ width:26, height:26, color:"#1a1200" }} />
          </div>
          <span style={{
            fontFamily:"'Playfair Display', serif",
            fontSize:"5.5rem", fontWeight:600, lineHeight:1,
            letterSpacing:"-0.1em",
            color: hov ? "rgba(212,175,55,0.12)" : "rgba(255,255,255,0.04)",
            transition:"color 0.4s ease", userSelect:"none",
          }}>02</span>
        </div>

        {/* Text */}
        <div style={{ marginTop:"3.5rem" }}>
          <p style={{ fontSize:10, letterSpacing:"0.35em", textTransform:"uppercase", color:"rgba(255,255,255,0.32)", fontWeight:500, margin:0 }}>
            Our Vision
          </p>

          <h3 style={{
            fontFamily:"'Playfair Display', serif",
            fontSize:"clamp(2.2rem, 4vw, 3rem)",
            fontWeight:600, lineHeight:0.92,
            letterSpacing:"-0.05em", color:"#f5f0e8",
            margin:"1.1rem 0 0",
            display:"flex", flexDirection:"column", gap:"0.05em",
          }}>
            Future
            <em style={{ fontStyle:"italic", fontWeight:300, color:GOLD }}>Luxury</em>
          </h3>

          <p style={{ marginTop:"1.4rem", fontSize:14.5, lineHeight:1.75, color:"rgba(255,255,255,0.55)", maxWidth:400 }}>
            Redefining modern architecture with emotionally connected spaces that
            inspire innovation, elegance, and globally admired luxury living experiences.
          </p>

          {/* Rule */}
          <div style={{ display:"flex", alignItems:"center", gap:12, marginTop:"2.2rem" }}>
            <div style={{ height:1, width: hov ? 100 : 72, background:`linear-gradient(90deg, ${GOLD}, transparent)`, transition:"width 0.5s ease" }} />
            <span style={{
              width:7, height:7, borderRadius:"50%", background:GOLD, flexShrink:0,
              boxShadow: hov ? "0 0 0 4px rgba(212,175,55,0.25)" : "none",
              transition:"box-shadow 0.35s ease",
            }} />
          </div>
        </div>
      </div>
    </div>
  );
}