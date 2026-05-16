"use client";

import { useState, useEffect } from "react";
import { MapPin, ArrowUpRight, Heart, BedDouble, Bath, Square } from "lucide-react";

const properties = [
  {
    id: 1,
    title: "Modern Luxury Villa",
    location: "Jaipur, Rajasthan",
    price: "₹2.4 Cr",
    beds: "4",
    baths: "3",
    area: "4,200",
    tag: "Villa",
    image:
      "https://media.istockphoto.com/id/2223376026/photo/luxury-tropical-pool-villa-at-dusk.jpg?s=612x612&w=0&k=20&c=KmXb1-GWZvz-Fa6TvMKIbNsxfEs09t6Nm5NEzrMBy3E=",
  },
  {
    id: 2,
    title: "Premium Penthouse",
    location: "Mumbai, Maharashtra",
    price: "₹4.8 Cr",
    beds: "5",
    baths: "4",
    area: "6,200",
    tag: "Penthouse",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/640698051.jpg?k=afa25b2244b230b9f14d8c0694efd16e84ae773e2dfad67de9e6e12f822eebd0&o=",
  },
  {
    id: 3,
    title: "Elegant Residence",
    location: "Delhi NCR",
    price: "₹3.1 Cr",
    beds: "4",
    baths: "3",
    area: "5,100",
    tag: "Residence",
    image:
      "https://www.prodom.sk/userfiles/products/ELEGANT%20121/___zoom____projektydomov_elegant_121_persp_2_var_4.jpg",
  },
  {
    id: 4,
    title: "Skyline Apartment",
    location: "Bangalore, Karnataka",
    price: "₹2.9 Cr",
    beds: "3",
    baths: "2",
    area: "3,600",
    tag: "Apartment",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
  },
    {
    id: 5,
    title: "Modern Luxury Villa",
    location: "Jaipur, Rajasthan",
    price: "₹2.4 Cr",
    beds: "4",
    baths: "3",
    area: "4,200",
    tag: "Villa",
    image:
      "https://media.istockphoto.com/id/2223376026/photo/luxury-tropical-pool-villa-at-dusk.jpg?s=612x612&w=0&k=20&c=KmXb1-GWZvz-Fa6TvMKIbNsxfEs09t6Nm5NEzrMBy3E=",
  },
  {
    id: 6,
    title: "Premium Penthouse",
    location: "Mumbai, Maharashtra",
    price: "₹4.8 Cr",
    beds: "5",
    baths: "4",
    area: "6,200",
    tag: "Penthouse",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/640698051.jpg?k=afa25b2244b230b9f14d8c0694efd16e84ae773e2dfad67de9e6e12f822eebd0&o=",
  },
  {
    id: 7,
    title: "Elegant Residence",
    location: "Delhi NCR",
    price: "₹3.1 Cr",
    beds: "4",
    baths: "3",
    area: "5,100",
    tag: "Residence",
    image:
      "https://www.prodom.sk/userfiles/products/ELEGANT%20121/___zoom____projektydomov_elegant_121_persp_2_var_4.jpg",
  },
];

const StatPill = ({ icon: Icon, label }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "7px",
      padding: "8px 14px",
      borderRadius: "100px",
      background: "rgba(255,255,255,0.10)",
      border: "1px solid rgba(255,255,255,0.13)",
      backdropFilter: "blur(10px)",
    }}
  >
    <Icon size={13} color="rgba(255,255,255,0.55)" />
    <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.75)", letterSpacing: "0.02em" }}>
      {label}
    </span>
  </div>
);

export default function FeaturedProperties() {
  const [active, setActive] = useState(0);
  const [liked, setLiked] = useState({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleLike = (e, id) => {
    e.stopPropagation();
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section
      style={{
        position: "relative",
        padding: "96px 0",
        background: "var(--background)",
        overflow: "hidden",
        fontFamily: "'Georgia', 'Times New Roman', serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .fp-section * { box-sizing: border-box; }

        @keyframes fp-fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        @keyframes fp-fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        .fp-fade-up  { animation: fp-fadeUp  0.55s cubic-bezier(0.22,1,0.36,1) forwards; }
        .fp-fade-in  { animation: fp-fadeIn  0.4s ease forwards; }

        .fp-card-slot {
          transition: flex 0.72s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.5s ease;
        }
        .fp-card-slot img {
          transition: transform 1.6s cubic-bezier(0.22,1,0.36,1);
        }
        .fp-card-slot:hover img {
          transform: scale(1.06);
        }

        .fp-dot {
          transition: width 0.45s cubic-bezier(0.22,1,0.36,1),
                      background 0.45s ease;
        }

        .fp-explore-btn {
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: color 0.35s ease, border-color 0.35s ease;
        }
        .fp-explore-btn::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, var(--primary), var(--primary-dark));
          transform: translateX(-101%);
          transition: transform 0.42s cubic-bezier(0.22,1,0.36,1);
          z-index: 0;
        }
        .fp-explore-btn:hover::before { transform: translateX(0); }
        .fp-explore-btn:hover { border-color: var(--primary) !important; color: var(--text) !important; }
        .fp-explore-btn > * { position: relative; z-index: 1; }

        .fp-like-btn {
          transition: transform 0.25s ease, background 0.3s ease;
        }
        .fp-like-btn:hover { transform: scale(1.15); }

        .fp-mobile-card {
          transition: height 0.68s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.4s ease;
        }

        .fp-stat-row { display: flex; gap: 8px; flex-wrap: wrap; }

        /* Scrollbar hide for mobile scroll */
        .fp-hscroll::-webkit-scrollbar { display: none; }
        .fp-hscroll { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div
        className="fp-section"
        style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 28px" }}
      >

        {/* ── Header ─────────────────────────────────── */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "28px",
            marginBottom: "52px",
          }}
        >
          {/* Left */}
          <div style={{ maxWidth: "620px" }}>
            {/* Label */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "6px 18px 6px 10px",
                borderRadius: "100px",
                background: "rgba(245,158,11,0.08)",
                border: "1px solid rgba(245,158,11,0.22)",
                marginBottom: "22px",
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
                  fontSize: "10px",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "var(--primary-dark)",
                  fontWeight: 500,
                }}
              >
                Featured Properties
              </span>
            </div>

            {/* Heading */}
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(3rem, 5.5vw, 5.8rem)",
                lineHeight: 0.88,
                letterSpacing: "-0.03em",
                fontWeight: 300,
                color: "var(--text)",
                margin: 0,
              }}
            >
              Find Your{" "}
              <span
                style={{
                  display: "block",
                  fontWeight: 600,
                  fontStyle: "italic",
                  color: "var(--primary)",
                }}
              >
                Perfect Home
              </span>
            </h2>

            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                marginTop: "18px",
                fontSize: "14.5px",
                lineHeight: 1.85,
                color: "var(--text-light)",
                maxWidth: "500px",
              }}
            >
              Curated premium homes with refined interiors, considered
              architecture, and exceptional living experiences across India.
            </p>
          </div>

          {/* Dots */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {properties.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="fp-dot"
                style={{
                  height: 9,
                  width: active === i ? 40 : 9,
                  borderRadius: "100px",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  background:
                    active === i
                      ? "linear-gradient(135deg,var(--primary),var(--primary-dark))"
                      : "var(--border)",
                }}
                aria-label={`View property ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ── Desktop Accordion Slider ────────────────── */}
        <div
          style={{
            display: "none",
            gap: "12px",
            height: "580px",
            overflow: "hidden",
          }}
          className="fp-desktop-slider"
        >
          <style>{`
            @media (min-width: 1024px) {
              .fp-desktop-slider { display: flex !important; }
              .fp-mobile-list    { display: none !important; }
            }
          `}</style>
          {properties.map((p, i) => {
            const isActive = active === i;
            return (
              <div
                key={p.id}
                onClick={() => setActive(i)}
                className="fp-card-slot"
                style={{
                  position: "relative",
                  borderRadius: "28px",
                  overflow: "hidden",
                  cursor: "pointer",
                  flex: isActive ? "0 0 56%" : "0 0 80px",
                  height: "100%",
                  boxShadow: isActive
                    ? "0 30px 90px rgba(15,61,145,0.18), 0 0 0 1.5px rgba(245,158,11,0.18)"
                    : "var(--shadow-sm)",
                }}
              >
                {/* Image */}
                <img
                  src={p.image}
                  alt={p.title}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />

                {/* Gradient overlay — deeper when active */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: isActive
                      ? "linear-gradient(160deg,rgba(15,61,145,0.38) 0%,rgba(0,0,0,0.0) 40%,rgba(0,0,0,0.88) 100%)"
                      : "linear-gradient(to top,rgba(0,0,0,0.75),rgba(0,0,0,0.2))",
                    transition: "background 0.6s ease",
                  }}
                />

                {/* ── ACTIVE content ── */}
                {isActive && (
                  <div
                    className="fp-fade-up"
                    style={{
                      position: "absolute",
                      inset: 0,
                      padding: "28px 32px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    {/* Top row */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                      {/* Tag */}
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "7px",
                          padding: "6px 14px 6px 9px",
                          borderRadius: "100px",
                          background: "rgba(255,255,255,0.12)",
                          border: "1px solid rgba(255,255,255,0.18)",
                          backdropFilter: "blur(12px)",
                        }}
                      >
                        <span
                          style={{
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            background: "var(--primary)",
                            display: "inline-block",
                          }}
                        />
                        <span
                          style={{
                            fontFamily: "'DM Sans',sans-serif",
                            fontSize: "9px",
                            letterSpacing: "0.3em",
                            textTransform: "uppercase",
                            color: "rgba(255,255,255,0.85)",
                          }}
                        >
                          {p.tag}
                        </span>
                      </div>

                      {/* Like */}
                      <button
                        onClick={(e) => toggleLike(e, p.id)}
                        className="fp-like-btn"
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: "50%",
                          border: "1px solid rgba(255,255,255,0.18)",
                          background: liked[p.id]
                            ? "rgba(245,158,11,0.25)"
                            : "rgba(255,255,255,0.10)",
                          backdropFilter: "blur(10px)",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        aria-label="Save property"
                      >
                        <Heart
                          size={15}
                          fill={liked[p.id] ? "var(--primary)" : "none"}
                          color={liked[p.id] ? "var(--primary)" : "rgba(255,255,255,0.7)"}
                        />
                      </button>
                    </div>

                    {/* Bottom block */}
                    <div>
                      {/* Location */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                          marginBottom: "10px",
                        }}
                      >
                        <MapPin size={13} color="rgba(255,255,255,0.5)" />
                        <span
                          style={{
                            fontFamily: "'DM Sans',sans-serif",
                            fontSize: "10px",
                            letterSpacing: "0.28em",
                            textTransform: "uppercase",
                            color: "rgba(255,255,255,0.55)",
                          }}
                        >
                          {p.location}
                        </span>
                      </div>

                      {/* Title */}
                      <h3
                        style={{
                          fontFamily: "'Cormorant Garamond',serif",
                          fontSize: "clamp(2.4rem,3.5vw,3.8rem)",
                          lineHeight: 0.9,
                          fontWeight: 300,
                          color: "#fff",
                          margin: "0 0 6px",
                        }}
                      >
                        {p.title.split(" ").slice(0, 2).join(" ")}
                        <span
                          style={{
                            display: "block",
                            fontStyle: "italic",
                            fontWeight: 300,
                            color: "rgba(255,255,255,0.88)",
                          }}
                        >
                          {p.title.split(" ").slice(2).join(" ")}
                        </span>
                      </h3>

                      {/* Divider */}
                      <div
                        style={{
                          width: 56,
                          height: 1,
                          margin: "20px 0",
                          background:
                            "linear-gradient(to right,var(--primary),transparent)",
                        }}
                      />

                      {/* Stats */}
                      <div className="fp-stat-row" style={{ marginBottom: "24px" }}>
                        <StatPill icon={BedDouble} label={`${p.beds} Bedrooms`} />
                        <StatPill icon={Bath} label={`${p.baths} Baths`} />
                        <StatPill icon={Square} label={`${p.area} ft²`} />
                      </div>

                      {/* Price + CTA */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-end",
                          justifyContent: "space-between",
                          gap: "16px",
                          flexWrap: "wrap",
                        }}
                      >
                        <div>
                          <p
                            style={{
                              fontFamily: "'DM Sans',sans-serif",
                              fontSize: "9px",
                              letterSpacing: "0.3em",
                              textTransform: "uppercase",
                              color: "rgba(255,255,255,0.4)",
                              margin: "0 0 6px",
                            }}
                          >
                            Starting From
                          </p>
                          <span
                            style={{
                              fontFamily: "'Cormorant Garamond',serif",
                              fontSize: "clamp(2.6rem,3vw,3.4rem)",
                              fontWeight: 600,
                              color: "var(--primary-light)",
                              lineHeight: 1,
                            }}
                          >
                            {p.price}
                          </span>
                        </div>

                        <button
                          className="fp-explore-btn"
                          style={{
                            padding: "13px 26px",
                            borderRadius: "100px",
                            border: "1px solid rgba(245,158,11,0.4)",
                            background: "rgba(255,255,255,0.06)",
                            backdropFilter: "blur(10px)",
                            color: "var(--primary-light)",
                            fontFamily: "'DM Sans',sans-serif",
                            fontSize: "10px",
                            letterSpacing: "0.24em",
                            textTransform: "uppercase",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                          }}
                        >
                          <span>Explore Property</span>
                          <ArrowUpRight size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* ── COLLAPSED content ── */}
                {!isActive && (
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "24px 0",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'DM Sans',sans-serif",
                        fontSize: "11px",
                        color: "rgba(255,255,255,0.3)",
                        letterSpacing: "0.05em",
                      }}
                    >
                      0{i + 1}
                    </span>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "20px",
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "'DM Sans',sans-serif",
                          fontSize: "8px",
                          letterSpacing: "0.3em",
                          textTransform: "uppercase",
                          color: "rgba(255,255,255,0.4)",
                          writingMode: "vertical-rl",
                          transform: "rotate(180deg)",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {p.location}
                      </p>
                      <h4
                        style={{
                          fontFamily: "'Cormorant Garamond',serif",
                          fontSize: "18px",
                          fontWeight: 300,
                          color: "rgba(255,255,255,0.85)",
                          writingMode: "vertical-rl",
                          transform: "rotate(180deg)",
                          whiteSpace: "nowrap",
                          margin: 0,
                        }}
                      >
                        {p.title}
                      </h4>
                    </div>
                    {/* bottom accent line */}
                    <div
                      style={{
                        width: 1,
                        height: 32,
                        background:
                          "linear-gradient(to bottom,var(--primary),transparent)",
                        borderRadius: "1px",
                      }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ── Mobile List ───────────────────────────────── */}
        <div
          className="fp-mobile-list"
          style={{ display: "flex", flexDirection: "column", gap: "12px" }}
        >
          {properties.map((p, i) => {
            const isActive = active === i;
            return (
              <div
                key={p.id}
                onClick={() => setActive(i)}
                className="fp-mobile-card"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "24px",
                  height: isActive ? "490px" : "108px",
                  cursor: "pointer",
                  boxShadow: isActive
                    ? "0 24px 60px rgba(15,61,145,0.16)"
                    : "var(--shadow-sm)",
                }}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top,rgba(0,0,0,0.9) 0%,rgba(0,0,0,0.25) 55%,rgba(0,0,0,0.05) 100%)",
                  }}
                />

                {!isActive ? (
                  <div
                    style={{
                      position: "relative",
                      zIndex: 1,
                      height: "100%",
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "space-between",
                      padding: "18px 20px",
                    }}
                  >
                    <div>
                      <p
                        style={{
                          fontFamily: "'DM Sans',sans-serif",
                          fontSize: "9px",
                          letterSpacing: "0.28em",
                          textTransform: "uppercase",
                          color: "rgba(255,255,255,0.45)",
                          margin: "0 0 5px",
                        }}
                      >
                        {p.location}
                      </p>
                      <h3
                        style={{
                          fontFamily: "'Cormorant Garamond',serif",
                          fontSize: "22px",
                          fontWeight: 300,
                          color: "#fff",
                          margin: 0,
                        }}
                      >
                        {p.title}
                      </h3>
                    </div>
                    <span
                      style={{
                        fontFamily: "'DM Sans',sans-serif",
                        fontSize: "12px",
                        color: "rgba(255,255,255,0.35)",
                        letterSpacing: "0.05em",
                      }}
                    >
                      0{i + 1}
                    </span>
                  </div>
                ) : (
                  <div
                    className="fp-fade-up"
                    style={{
                      position: "absolute",
                      inset: 0,
                      padding: "22px 22px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    {/* Top */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          padding: "6px 14px",
                          borderRadius: "100px",
                          background: "rgba(255,255,255,0.12)",
                          border: "1px solid rgba(255,255,255,0.15)",
                          backdropFilter: "blur(10px)",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "'DM Sans',sans-serif",
                            fontSize: "9px",
                            letterSpacing: "0.25em",
                            textTransform: "uppercase",
                            color: "rgba(255,255,255,0.8)",
                          }}
                        >
                          Premium {p.tag}
                        </span>
                      </div>
                      <button
                        onClick={(e) => toggleLike(e, p.id)}
                        className="fp-like-btn"
                        style={{
                          width: 38,
                          height: 38,
                          borderRadius: "50%",
                          border: "1px solid rgba(255,255,255,0.18)",
                          background: liked[p.id]
                            ? "rgba(245,158,11,0.22)"
                            : "rgba(255,255,255,0.1)",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Heart
                          size={14}
                          fill={liked[p.id] ? "var(--primary)" : "none"}
                          color={liked[p.id] ? "var(--primary)" : "rgba(255,255,255,0.7)"}
                        />
                      </button>
                    </div>

                    {/* Bottom */}
                    <div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                          marginBottom: "8px",
                        }}
                      >
                        <MapPin size={12} color="rgba(255,255,255,0.45)" />
                        <span
                          style={{
                            fontFamily: "'DM Sans',sans-serif",
                            fontSize: "9px",
                            letterSpacing: "0.28em",
                            textTransform: "uppercase",
                            color: "rgba(255,255,255,0.5)",
                          }}
                        >
                          {p.location}
                        </span>
                      </div>

                      <h3
                        style={{
                          fontFamily: "'Cormorant Garamond',serif",
                          fontSize: "clamp(2rem,9vw,2.8rem)",
                          fontWeight: 300,
                          lineHeight: 0.95,
                          color: "#fff",
                          margin: 0,
                        }}
                      >
                        {p.title}
                      </h3>

                      <div
                        style={{
                          width: 50,
                          height: 1,
                          margin: "18px 0",
                          background:
                            "linear-gradient(to right,var(--primary),transparent)",
                        }}
                      />

                      {/* Stat pills */}
                      <div
                        style={{
                          display: "flex",
                          gap: "8px",
                          marginBottom: "22px",
                          flexWrap: "wrap",
                        }}
                      >
                        <StatPill icon={BedDouble} label={`${p.beds} Beds`} />
                        <StatPill icon={Bath} label={`${p.baths} Baths`} />
                        <StatPill icon={Square} label={`${p.area} ft²`} />
                      </div>

                      {/* Price + CTA */}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-end",
                          gap: "12px",
                        }}
                      >
                        <div>
                          <p
                            style={{
                              fontFamily: "'DM Sans',sans-serif",
                              fontSize: "9px",
                              letterSpacing: "0.28em",
                              textTransform: "uppercase",
                              color: "rgba(255,255,255,0.4)",
                              margin: "0 0 5px",
                            }}
                          >
                            Starting From
                          </p>
                          <span
                            style={{
                              fontFamily: "'Cormorant Garamond',serif",
                              fontSize: "clamp(2.2rem,8vw,2.8rem)",
                              fontWeight: 600,
                              color: "var(--primary-light)",
                              lineHeight: 1,
                            }}
                          >
                            {p.price}
                          </span>
                        </div>

                        <button
                          className="fp-explore-btn"
                          style={{
                            padding: "12px 22px",
                            borderRadius: "100px",
                            border: "1px solid rgba(245,158,11,0.4)",
                            background: "rgba(255,255,255,0.07)",
                            color: "var(--primary-light)",
                            fontFamily: "'DM Sans',sans-serif",
                            fontSize: "9px",
                            letterSpacing: "0.22em",
                            textTransform: "uppercase",
                            display: "flex",
                            alignItems: "center",
                            gap: "7px",
                          }}
                        >
                          <span>Explore</span>
                          <ArrowUpRight size={13} />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ── Footer row ───────────────────────────────── */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "40px",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <p
            style={{
              fontFamily: "'DM Sans',sans-serif",
              fontSize: "13px",
              color: "var(--text-light)",
            }}
          >
            Showing{" "}
            <strong style={{ color: "var(--text)" }}>{properties.length}</strong>{" "}
            curated properties
          </p>

          <button
            className="fp-explore-btn"
            style={{
              padding: "12px 28px",
              borderRadius: "100px",
              border: "1px solid var(--border)",
              background: "var(--white)",
              color: "var(--secondary)",
              fontFamily: "'DM Sans',sans-serif",
              fontSize: "11px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              boxShadow: "var(--shadow-sm)",
              cursor: "pointer",
            }}
          >
            <span style={{ fontWeight: 500 }}>View All Properties</span>
            <ArrowUpRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}