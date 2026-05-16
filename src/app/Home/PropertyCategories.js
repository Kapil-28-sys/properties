"use client";

import { Home, Building2, Trees, MapPin, ArrowUpRight } from "lucide-react";

const categories = [
  {
    title: "Luxury Villas",
    desc: "Premium villas with modern amenities and serene surroundings.",
    icon: Home,
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=900",
    count: "240+ Listings",
  },
  {
    title: "Apartments",
    desc: "Comfortable city living spaces with premium urban access.",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=900",
    count: "580+ Listings",
  },
  {
    title: "Plots",
    desc: "Secure land investment opportunities in prime locations.",
    icon: MapPin,
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=900",
    count: "320+ Listings",
  },
  {
    title: "Farmhouses",
    desc: "Peaceful countryside lifestyle with expansive green spaces.",
    icon: Trees,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900",
    count: "110+ Listings",
  },
];

export default function PropertyCategories() {
  return (
    <section
      style={{
        position: "relative",
        padding: "96px 0",
        background: "var(--background)",
        overflow: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .pc * { box-sizing: border-box; }

        @keyframes pc-fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0);    }
        }

        .pc-fade-up { animation: pc-fadeUp 0.75s cubic-bezier(0.22,1,0.36,1) forwards; }

        .pc-card {
          transition: var(--transition);
          position: relative;
          overflow: hidden;
        }
        .pc-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-md);
        }
        .pc-card:hover .pc-img {
          transform: scale(1.08);
        }
        .pc-card:hover .pc-title {
          color: var(--primary) !important;
        }
        .pc-card:hover .pc-bottom-line {
          width: 100% !important;
        }
        .pc-card:hover .pc-arrow {
          background: var(--primary) !important;
          color: var(--white) !important;
          border-color: var(--primary) !important;
        }
        .pc-card:hover .pc-icon-wrap {
          background: var(--primary) !important;
          color: var(--white) !important;
        }

        .pc-img {
          transition: transform 0.75s cubic-bezier(0.22,1,0.36,1);
          transform: scale(1.03);
        }

        .pc-bottom-line {
          transition: width 0.5s cubic-bezier(0.22,1,0.36,1);
        }

        .pc-arrow {
          transition: var(--transition);
        }

        .pc-icon-wrap {
          transition: var(--transition);
        }
      `}</style>

      {/* ── Dot pattern ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.12,
          backgroundImage: "radial-gradient(var(--primary) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          pointerEvents: "none",
        }}
      />

      {/* ── Center glow ── */}
      <div
        style={{
          position: "absolute",
          top: -180,
          left: "50%",
          transform: "translateX(-50%)",
          width: 640,
          height: 640,
          borderRadius: "50%",
          background: "rgba(245,158,11,0.07)",
          filter: "blur(130px)",
          pointerEvents: "none",
        }}
      />

      <div
        className="pc"
        style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "0 28px" }}
      >

        {/* ── Header ── */}
        <div
          className="pc-fade-up"
          style={{ textAlign: "center", marginBottom: 56 }}
        >
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 16px 6px 10px",
              borderRadius: 100,
              background: "rgba(245,158,11,0.08)",
              border: "1px solid rgba(245,158,11,0.22)",
              marginBottom: 20,
            }}
          >
            <span
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
              Browse By Type
            </span>
          </div>

          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(3rem, 5.5vw, 5.4rem)",
              lineHeight: 0.9,
              letterSpacing: "-0.03em",
              fontWeight: 300,
              color: "var(--text)",
              margin: 0,
            }}
          >
            Property{" "}
            <span
              style={{
                fontStyle: "italic",
                fontWeight: 600,
                color: "var(--primary)",
              }}
            >
              Categories
            </span>
          </h2>

          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              marginTop: 14,
              fontSize: 14.5,
              lineHeight: 1.8,
              color: "var(--text-light)",
              maxWidth: 460,
              margin: "14px auto 0",
            }}
          >
            Discover premium spaces crafted for modern living, smart investment, and refined lifestyles.
          </p>
        </div>

        {/* ── Grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: 18,
          }}
        >
          {categories.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="pc-card"
                style={{
                  borderRadius: 24,
                  overflow: "hidden",
                  background: "var(--white)",
                  border: "1px solid var(--border)",
                  boxShadow: "var(--shadow-sm)",
                  cursor: "pointer",
                }}
              >
                {/* Image */}
                <div style={{ position: "relative", height: 210, overflow: "hidden" }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="pc-img"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />

                  {/* Overlay */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 55%, transparent 100%)",
                    }}
                  />

                  {/* Icon */}
                  <div
                    className="pc-icon-wrap"
                    style={{
                      position: "absolute",
                      top: 14,
                      left: 14,
                      width: 42,
                      height: 42,
                      borderRadius: 14,
                      background: "rgba(255,255,255,0.92)",
                      backdropFilter: "blur(10px)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "var(--shadow-sm)",
                      color: "var(--primary)",
                    }}
                  >
                    <Icon size={18} />
                  </div>

                  {/* Count pill */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 12,
                      right: 12,
                      background: "rgba(255,255,255,0.15)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255,255,255,0.22)",
                      borderRadius: 100,
                      padding: "3px 11px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 10,
                        color: "#fff",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {item.count}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: "18px 20px 20px" }}>
                  <h3
                    className="pc-title"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.4rem",
                      fontWeight: 600,
                      color: "var(--text)",
                      margin: 0,
                      letterSpacing: "-0.01em",
                      transition: "var(--transition)",
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* Divider */}
                  <div
                    style={{
                      width: 30,
                      height: 1,
                      background: "linear-gradient(to right, var(--primary), transparent)",
                      margin: "10px 0",
                    }}
                  />

                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 13,
                      lineHeight: 1.75,
                      color: "var(--text-light)",
                      margin: 0,
                    }}
                  >
                    {item.desc}
                  </p>

                  {/* CTA row */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginTop: 16,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 11,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "var(--primary)",
                        fontWeight: 500,
                      }}
                    >
                      Explore
                    </span>

                    <div
                      className="pc-arrow"
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        border: "1px solid var(--border)",
                        background: "var(--background)",
                        color: "var(--text-light)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <ArrowUpRight size={14} />
                    </div>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div
                  className="pc-bottom-line"
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
            );
          })}
        </div>

      </div>
    </section>
  );
}