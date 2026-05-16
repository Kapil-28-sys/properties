"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, BadgeCheck, Building2, Sparkles, Phone } from "lucide-react";

const cards = [
  {
    title: "Verified Listings",
    desc: "Every property is thoroughly vetted and documented for a fully trusted experience.",
    icon: <BadgeCheck size={22} />,
  },
  {
    title: "Luxury Locations",
    desc: "Modern homes in Rajasthan's highest-growth premium cities and heritage districts.",
    icon: <Building2 size={22} />,
  },
  {
    title: "Smooth Experience",
    desc: "Fast, transparent and entirely effortless from first browse to final handover.",
    icon: <Sparkles size={22} />,
  },
];

export default function CTABanner() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setShow(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, []);

  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background: "var(--background)",
        padding: "96px 0",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .cta * { box-sizing: border-box; }

        @keyframes cta-pulse {
          0%,100% { opacity: 1; transform: scale(1);    }
          50%      { opacity: 0.6; transform: scale(1.3); }
        }
        @keyframes cta-spin {
          from { transform: rotate(0deg);   }
          to   { transform: rotate(360deg); }
        }

        .cta-pulse { animation: cta-pulse 2.2s ease-in-out infinite; }

        .cta-card {
          transition: var(--transition);
          position: relative;
          overflow: hidden;
        }
        .cta-card:hover {
          transform: translateY(-7px);
          box-shadow: var(--shadow-md);
        }
        .cta-card:hover .cta-card-icon {
          background: var(--primary) !important;
          color: var(--white) !important;
        }
        .cta-card:hover .cta-card-line {
          width: 100% !important;
        }

        .cta-card-icon { transition: var(--transition); }

        .cta-card-line {
          transition: width 0.5s cubic-bezier(0.22,1,0.36,1);
        }

        .cta-primary-btn {
          position: relative;
          overflow: hidden;
          transition: var(--transition);
          cursor: pointer;
        }
        .cta-primary-btn::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, var(--primary-light), var(--primary));
          transform: translateY(101%);
          transition: transform 0.42s cubic-bezier(0.22,1,0.36,1);
          z-index: 0;
        }
        .cta-primary-btn:hover::before { transform: translateY(0); }
        .cta-primary-btn:hover { transform: scale(1.03); }
        .cta-primary-btn > * { position: relative; z-index: 1; }

        .cta-secondary-btn {
          position: relative;
          overflow: hidden;
          transition: var(--transition);
          cursor: pointer;
        }
        .cta-secondary-btn::before {
          content: "";
          position: absolute;
          inset: 0;
          background: var(--text);
          transform: translateX(-101%);
          transition: transform 0.42s cubic-bezier(0.22,1,0.36,1);
          z-index: 0;
        }
        .cta-secondary-btn:hover::before { transform: translateX(0); }
        .cta-secondary-btn:hover { border-color: var(--text) !important; color: var(--white) !important; }
        .cta-secondary-btn > * { position: relative; z-index: 1; }
      `}</style>

      {/* ── Dot pattern ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.07,
          backgroundImage: "radial-gradient(var(--text) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          pointerEvents: "none",
        }}
      />

      {/* ── Center glow ── */}
      <div
        style={{
          position: "absolute",
          top: -140,
          left: "50%",
          transform: "translateX(-50%)",
          width: 680,
          height: 680,
          borderRadius: "50%",
          background: "rgba(245,158,11,0.08)",
          filter: "blur(130px)",
          pointerEvents: "none",
        }}
      />

      {/* ── Decorative orbit ring ── */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: 700,
          height: 700,
          borderRadius: "50%",
          border: "1px dashed rgba(245,158,11,0.1)",
          pointerEvents: "none",
        }}
      />

      <div
        className="cta"
        style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "0 28px" }}
      >
        <div
          ref={ref}
          style={{
            transition: "opacity 0.9s ease, transform 0.9s cubic-bezier(0.22,1,0.36,1)",
            opacity: show ? 1 : 0,
            transform: show ? "translateY(0)" : "translateY(28px)",
          }}
        >

          {/* ── Main container ── */}
          <div
            style={{
              borderRadius: 36,
              border: "1px solid var(--border)",
              background: "rgba(255,255,255,0.78)",
              backdropFilter: "blur(18px)",
              boxShadow: "var(--shadow-md)",
              padding: "56px 48px",
            }}
          >

            {/* ── Badge ── */}
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 32 }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "7px 18px 7px 12px",
                  borderRadius: 100,
                  background: "rgba(245,158,11,0.08)",
                  border: "1px solid rgba(245,158,11,0.22)",
                }}
              >
                <span
                  className="cta-pulse"
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: "var(--primary)",
                    display: "inline-block",
                  }}
                />
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 10,
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "var(--primary-dark)",
                    fontWeight: 500,
                  }}
                >
                  Rajasthan Property Hub
                </span>
              </div>
            </div>

            {/* ── Heading ── */}
            <div style={{ textAlign: "center" }}>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(2.8rem, 5.5vw, 5.6rem)",
                  lineHeight: 0.92,
                  letterSpacing: "-0.03em",
                  fontWeight: 300,
                  color: "var(--text)",
                  margin: 0,
                }}
              >
                Discover Your
                <span
                  style={{
                    display: "block",
                    fontWeight: 600,
                    fontStyle: "italic",
                    color: "var(--primary)",
                    margin: "4px 0",
                  }}
                >
                  Dream Property
                </span>
                In Rajasthan
              </h2>

              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  marginTop: 20,
                  fontSize: 15,
                  lineHeight: 1.85,
                  color: "var(--text-light)",
                  maxWidth: 560,
                  margin: "20px auto 0",
                }}
              >
                Explore verified homes, luxury villas, apartments, and investment
                properties with a seamless, premium end-to-end experience.
              </p>
            </div>

            {/* ── Cards ── */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: 16,
                marginTop: 52,
              }}
            >
              {cards.map((item, i) => (
                <div
                  key={i}
                  className="cta-card"
                  style={{
                    padding: "26px 24px 28px",
                    borderRadius: 22,
                    background: "var(--white)",
                    border: "1px solid var(--border)",
                    boxShadow: "var(--shadow-sm)",
                  }}
                >
                  {/* Icon */}
                  <div
                    className="cta-card-icon"
                    style={{
                      width: 46,
                      height: 46,
                      borderRadius: 14,
                      background: "rgba(245,158,11,0.09)",
                      color: "var(--primary)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {item.icon}
                  </div>

                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.4rem",
                      fontWeight: 600,
                      color: "var(--text)",
                      margin: "18px 0 0",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* Divider */}
                  <div
                    className="cta-card-line"
                    style={{
                      width: 32,
                      height: 1,
                      background: "linear-gradient(to right, var(--primary), transparent)",
                      margin: "10px 0 12px",
                    }}
                  />

                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 13.5,
                      lineHeight: 1.8,
                      color: "var(--text-light)",
                      margin: 0,
                    }}
                  >
                    {item.desc}
                  </p>

                  {/* Bottom accent line on hover */}
                  <div
                    className="cta-card-line"
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: 0,
                      height: 3,
                      background: "linear-gradient(to right, var(--primary), var(--primary-light))",
                      borderRadius: "0 2px 0 0",
                    }}
                  />
                </div>
              ))}
            </div>

            {/* ── Buttons ── */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 12,
                marginTop: 52,
              }}
            >
              {/* Primary */}
              <button
                className="cta-primary-btn"
                style={{
                  padding: "14px 32px",
                  borderRadius: 100,
                  border: "none",
                  background: "var(--primary)",
                  color: "var(--white)",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  boxShadow: "0 8px 28px rgba(245,158,11,0.32)",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span>Explore Properties</span>
                <ArrowUpRight size={15} />
              </button>

              {/* Secondary */}
              <button
                className="cta-secondary-btn"
                style={{
                  padding: "14px 32px",
                  borderRadius: 100,
                  border: "1px solid var(--border)",
                  background: "var(--white)",
                  color: "var(--text)",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  boxShadow: "var(--shadow-sm)",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <Phone size={14} />
                <span>Contact Agent</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}