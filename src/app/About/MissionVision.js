"use client";

import { useState } from "react";
import { Eye, Target } from "lucide-react";

export default function MissionVision() {
  const [mHov, setMHov] = useState(false);
  const [vHov, setVHov] = useState(false);

  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background: "var(--background)",
        padding: "7rem 0",
      }}
    >
      {/* Animations */}
      <style>{`
        @keyframes mvPing {
          0% { transform: scale(1); opacity: 0.7; }
          100% { transform: scale(2.4); opacity: 0; }
        }

        @keyframes mvFloat {
          0%,100% { transform: translateY(0); opacity: 0.5; }
          50% { transform: translateY(-7px); opacity: 1; }
        }

        @keyframes mvFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes mvShine {
          0% { left: -120%; }
          100% { left: 150%; }
        }

        .mv-grid-light {
          background-image:
            linear-gradient(rgba(15,23,42,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15,23,42,0.05) 1px, transparent 1px);
          background-size: 36px 36px;
          transform: perspective(900px) rotateX(55deg) scale(2);
          transform-origin: top;
        }

        .mv-grid-dark {
          background-image:
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px);
          background-size: 36px 36px;
          transform: perspective(900px) rotateX(55deg) scale(2);
          transform-origin: top;
        }

        .mv-float { animation: mvFloat 3.2s ease-in-out infinite; }
        .mv-float-2 { animation: mvFloat 3.2s ease-in-out 0.4s infinite; }
        .mv-float-3 { animation: mvFloat 3.2s ease-in-out 0.8s infinite; }

        .mv-shine-inner {
          position: absolute;
          top: 0;
          height: 100%;
          width: 55%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,0.38),
            transparent
          );
          transform: skewX(-12deg);
        }

        .mv-shine-run {
          animation: mvShine 1.6s cubic-bezier(0.23,1,0.32,1) forwards;
        }
      `}</style>

      {/* Ambient Glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          pointerEvents: "none",
          top: -120,
          left: "50%",
          transform: "translateX(-50%)",
          width: 900,
          height: 500,
          background: "rgba(245,158,11,0.10)",
          filter: "blur(180px)",
        }}
      />

      {/* Decorative Rings */}
      {[
        {
          top: 40,
          left: 20,
          w: 220,
          h: 220,
          r: 50,
          rot: "rotate(16deg)",
          bc: "rgba(245,158,11,0.12)",
        },
        {
          top: 80,
          right: 30,
          w: 180,
          h: 180,
          r: 40,
          rot: "rotate(-12deg)",
          bc: "rgba(37,99,235,0.10)",
        },
        {
          bottom: 30,
          left: 60,
          w: 260,
          h: 260,
          r: 60,
          rot: "rotate(20deg)",
          bc: "rgba(15,23,42,0.06)",
        },
        {
          bottom: 20,
          right: 20,
          w: 300,
          h: 300,
          r: 70,
          rot: "rotate(10deg)",
          bc: "rgba(245,158,11,0.08)",
        },
      ].map((d, i) => (
        <div
          key={i}
          aria-hidden
          style={{
            position: "absolute",
            pointerEvents: "none",
            top: d.top,
            left: d.left,
            right: d.right,
            bottom: d.bottom,
            width: d.w,
            height: d.h,
            border: `1px solid ${d.bc}`,
            borderRadius: d.r,
            transform: d.rot,
          }}
        />
      ))}

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 2rem",
        }}
      >
        {/* Heading */}
        <div
          style={{
            textAlign: "center",
            maxWidth: 700,
            margin: "0 auto",
            animation: "mvFadeUp 0.75s both",
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 20px",
              borderRadius: 999,
              border: "1px solid var(--border)",
              background: "rgba(255,255,255,0.82)",
              backdropFilter: "blur(16px)",
              boxShadow: "var(--shadow-sm)",
              position: "relative",
            }}
          >
            <span
              style={{
                position: "absolute",
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: "rgba(245,158,11,0.25)",
                animation: "mvPing 1.8s ease-out infinite",
              }}
            />

            <span
              style={{
                position: "relative",
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "var(--primary)",
                flexShrink: 0,
              }}
            />

            <span
              style={{
                fontSize: 10,
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: "var(--text-light)",
                fontWeight: 500,
              }}
            >
              Mission & Vision
            </span>
          </div>

          {/* Title */}
          <h2
            style={{
              fontWeight: 700,
              fontSize: "clamp(3rem, 6vw, 5.5rem)",
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              color: "var(--text)",
              margin: "2rem 0 0",
              display: "flex",
              flexDirection: "column",
              gap: "0.1em",
              alignItems: "center",
            }}
          >
            Crafted For

            <em
              style={{
                fontStyle: "italic",
                fontWeight: 400,
                color: "var(--primary)",
              }}
            >
              Timeless Impact
            </em>
          </h2>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "1.5rem",
            marginTop: "4.5rem",
          }}
        >
          <MissionCard
            hov={mHov}
            onEnter={() => setMHov(true)}
            onLeave={() => setMHov(false)}
          />

          <VisionCard
            hov={vHov}
            onEnter={() => setVHov(true)}
            onLeave={() => setVHov(false)}
          />
        </div>
      </div>
    </section>
  );
}

/* Mission Card */
function MissionCard({ hov, onEnter, onLeave }) {
  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "var(--radius)",
        border: hov
          ? "1px solid rgba(245,158,11,0.25)"
          : "1px solid var(--border)",
        background: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(20px)",
        padding: "2.8rem",
        boxShadow: hov
          ? "0 28px 100px rgba(245,158,11,0.15)"
          : "var(--shadow-md)",
        transform: hov ? "translateY(-10px)" : "translateY(0)",
        transition: "var(--transition)",
        animation: "mvFadeUp 0.7s 0.1s both",
      }}
    >
      {/* Grid */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.04,
          pointerEvents: "none",
        }}
      >
        <div className="mv-grid-light" style={{ height: "100%", width: "100%" }} />
      </div>

      {/* Glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: -100,
          right: -60,
          width: 320,
          height: 320,
          borderRadius: "50%",
          background: "rgba(245,158,11,0.12)",
          filter: "blur(110px)",
          opacity: hov ? 1 : 0,
          transition: "0.7s",
        }}
      />

      {/* Icon */}
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: 20,
          background:
            "linear-gradient(135deg,var(--secondary),var(--secondary-dark))",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "var(--shadow-md)",
        }}
      >
        <Target style={{ width: 26, height: 26, color: "#fff" }} />
      </div>

      {/* Text */}
      <div style={{ marginTop: "3rem" }}>
        <p
          style={{
            fontSize: 10,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "var(--text-light)",
            fontWeight: 500,
          }}
        >
          Our Mission
        </p>

        <h3
          style={{
            fontSize: "clamp(2.2rem,4vw,3rem)",
            fontWeight: 700,
            lineHeight: 0.95,
            color: "var(--text)",
            marginTop: "1rem",
          }}
        >
          Elegant{" "}
          <em
            style={{
              fontStyle: "italic",
              fontWeight: 400,
              color: "var(--primary)",
            }}
          >
            Experiences
          </em>
        </h3>

        <p
          style={{
            marginTop: "1.4rem",
            fontSize: 15,
            lineHeight: 1.8,
            color: "var(--text-light)",
            maxWidth: 400,
          }}
        >
          Creating sophisticated living experiences through refined
          architecture, emotional storytelling, and timeless luxury aesthetics.
        </p>
      </div>
    </div>
  );
}

/* Vision Card */
function VisionCard({ hov, onEnter, onLeave }) {
  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "var(--radius)",
        border: "1px solid rgba(245,158,11,0.20)",
        background:
          "linear-gradient(135deg,var(--secondary-dark),var(--secondary))",
        padding: "2.8rem",
        boxShadow: hov
          ? "0 28px 100px rgba(15,61,145,0.30)"
          : "var(--shadow-md)",
        transform: hov ? "translateY(-10px)" : "translateY(0)",
        transition: "var(--transition)",
        animation: "mvFadeUp 0.7s 0.2s both",
      }}
    >
      {/* Grid */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.05,
          pointerEvents: "none",
        }}
      >
        <div className="mv-grid-dark" style={{ height: "100%", width: "100%" }} />
      </div>

      {/* Glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: -100,
          left: -60,
          width: 380,
          height: 380,
          borderRadius: "50%",
          background: "rgba(245,158,11,0.20)",
          filter: "blur(140px)",
        }}
      />

      {/* Icon */}
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: 20,
          background: "var(--primary)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 0 40px rgba(245,158,11,0.35)",
        }}
      >
        <Eye style={{ width: 26, height: 26, color: "var(--secondary-dark)" }} />
      </div>

      {/* Text */}
      <div style={{ marginTop: "3rem" }}>
        <p
          style={{
            fontSize: 10,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.55)",
            fontWeight: 500,
          }}
        >
          Our Vision
        </p>

        <h3
          style={{
            fontSize: "clamp(2.2rem,4vw,3rem)",
            fontWeight: 700,
            lineHeight: 0.95,
            color: "white",
            marginTop: "1rem",
          }}
        >
          Future{" "}
          <em
            style={{
              fontStyle: "italic",
              fontWeight: 400,
              color: "var(--primary-light)",
            }}
          >
            Luxury
          </em>
        </h3>

        <p
          style={{
            marginTop: "1.4rem",
            fontSize: 15,
            lineHeight: 1.8,
            color: "rgba(255,255,255,0.72)",
            maxWidth: 400,
          }}
        >
          Redefining modern architecture with emotionally connected spaces
          that inspire innovation and globally admired luxury living.
        </p>
      </div>
    </div>
  );
}