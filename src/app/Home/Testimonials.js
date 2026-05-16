"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rohit Sharma",
    role: "Home Buyer",
    property: "2BHK Apartment, Jaipur",
    review: "Found my dream home within days. The entire experience was seamless and stress-free from start to finish.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    name: "Anjali Verma",
    role: "Investor",
    property: "Luxury Villa, Udaipur",
    review: "Best platform for property investment. The transparency and documentation process was truly impressive.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
  },
  {
    name: "Mohit Jain",
    role: "Dealer",
    property: "Commercial Shop, Ajmer",
    review: "Clients absolutely love this interface. Very fast, clean and professional experience throughout.",
    img: "https://images.unsplash.com/photo-1501183638710-841dd1904471?w=800",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    rating: 5,
  },
  {
    name: "Sneha Gupta",
    role: "Buyer",
    property: "3BHK Flat, Jodhpur",
    review: "Searching and comparing properties has never been easier. Found exactly what I needed at the right price.",
    img: "https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 4,
  },
  {
    name: "Aman Singh",
    role: "Investor",
    property: "Farmhouse, Pushkar",
    review: "Excellent investment options with proper details and verified listings. A truly trustworthy platform.",
    img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Tenant",
    property: "Studio Apartment, Jaipur",
    review: "Got my rental home quickly and without any stress. The team was incredibly supportive throughout.",
    img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
    avatar: "https://randomuser.me/api/portraits/women/21.jpg",
    rating: 5,
  },
];

const StarRow = ({ count }) => (
  <div style={{ display: "flex", gap: 3 }}>
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill={i < count ? "var(--primary)" : "var(--border)"}
        style={{ flexShrink: 0 }}
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01z" />
      </svg>
    ))}
  </div>
);

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = () => setIndex((p) => (p + 1) % testimonials.length);
  const prev = () => setIndex((p) => (p - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [paused]);

  const getPos = (i) => {
    const total = testimonials.length;
    const diff = (i - index + total) % total;
    if (diff === 0) return "center";
    if (diff === 1) return "right";
    if (diff === total - 1) return "left";
    return "hidden";
  };

  return (
    <section
      style={{
        position: "relative",
        padding: "96px 0 80px",
        background: "var(--background)",
        overflow: "hidden",
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .tm * { box-sizing: border-box; }

        @keyframes tm-fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0);    }
        }

        .tm-fade-up { animation: tm-fadeUp 0.75s cubic-bezier(0.22,1,0.36,1) forwards; }

        .tm-card {
          transition: all 0.65s cubic-bezier(0.22,1,0.36,1);
          position: absolute;
          width: 360px;
        }

        .tm-nav-btn {
          transition: var(--transition);
        }
        .tm-nav-btn:hover {
          background: var(--primary) !important;
          color: var(--white) !important;
          border-color: var(--primary) !important;
          transform: scale(1.08);
        }

        .tm-dot {
          transition: var(--transition);
          cursor: pointer;
          border: none;
          padding: 0;
        }
        .tm-dot:hover {
          transform: scale(1.2);
        }
      `}</style>

      {/* ── Ambient blobs ── */}
      <div
        style={{
          position: "absolute",
          top: -100,
          left: "50%",
          transform: "translateX(-50%)",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "rgba(245,158,11,0.07)",
          filter: "blur(120px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -60,
          right: -60,
          width: 280,
          height: 280,
          borderRadius: "50%",
          background: "rgba(15,61,145,0.06)",
          filter: "blur(90px)",
          pointerEvents: "none",
        }}
      />

      <div
        className="tm"
        style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "0 28px" }}
      >

        {/* ── Header ── */}
        <div
          className="tm-fade-up"
          style={{ textAlign: "center", marginBottom: 60 }}
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
              Client Stories
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
            What People{" "}
            <span
              style={{
                fontStyle: "italic",
                fontWeight: 600,
                color: "var(--primary)",
              }}
            >
              Say
            </span>
          </h2>

          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              marginTop: 14,
              fontSize: 14.5,
              lineHeight: 1.8,
              color: "var(--text-light)",
              maxWidth: 440,
              margin: "14px auto 0",
            }}
          >
            Real experiences from verified buyers, investors and tenants across Rajasthan.
          </p>
        </div>

        {/* ── Carousel ── */}
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 540,
          }}
        >
          {testimonials.map((t, i) => {
            const pos = getPos(i);

            const posStyle = (() => {
              if (pos === "center")
                return { transform: "translateX(0) scale(1)", zIndex: 30, opacity: 1 };
              if (pos === "left")
                return { transform: "translateX(-400px) scale(0.88)", zIndex: 10, opacity: 0.38 };
              if (pos === "right")
                return { transform: "translateX(400px) scale(0.88)", zIndex: 10, opacity: 0.38 };
              return { transform: "scale(0.72)", zIndex: 0, opacity: 0, pointerEvents: "none" };
            })();

            return (
              <div
                key={i}
                className="tm-card"
                style={{
                  ...posStyle,
                  borderRadius: 26,
                  overflow: "hidden",
                  background: "var(--white)",
                  border: "1px solid var(--border)",
                  boxShadow: pos === "center" ? "var(--shadow-md)" : "var(--shadow-sm)",
                  cursor: pos !== "center" ? "pointer" : "default",
                }}
                onClick={() => pos !== "center" && setIndex(i)}
              >
                {/* Image */}
                <div style={{ position: "relative", height: 200, overflow: "hidden" }}>
                  <img
                    src={t.img}
                    alt={t.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transform: "scale(1.05)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 55%, transparent 100%)",
                    }}
                  />

                  {/* Property pill */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 12,
                      left: 12,
                      padding: "4px 12px",
                      borderRadius: 100,
                      background: "var(--primary)",
                      boxShadow: "0 4px 14px rgba(245,158,11,0.35)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 9,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "var(--white)",
                        fontWeight: 500,
                      }}
                    >
                      {t.property}
                    </span>
                  </div>

                  {/* Quote icon */}
                  <div
                    style={{
                      position: "absolute",
                      top: 14,
                      right: 14,
                      width: 36,
                      height: 36,
                      borderRadius: 10,
                      background: "rgba(255,255,255,0.15)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "rgba(255,255,255,0.8)",
                    }}
                  >
                    <Quote size={16} />
                  </div>
                </div>

                {/* Content */}
                <div
                  style={{
                    padding: "20px 22px 22px",
                    background: "var(--white)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  {/* Stars */}
                  <StarRow count={t.rating} />

                  {/* Review */}
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontStyle: "italic",
                      fontSize: "1.15rem",
                      lineHeight: 1.65,
                      color: "var(--text)",
                      margin: "12px 0 0",
                    }}
                  >
                    "{t.review}"
                  </p>

                  {/* Divider */}
                  <div
                    style={{
                      width: 36,
                      height: 1,
                      background: "linear-gradient(to right, var(--primary), transparent)",
                      margin: "16px 0",
                    }}
                  />

                  {/* User row */}
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <img
                      src={t.avatar}
                      alt={t.name}
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: "50%",
                        objectFit: "cover",
                        border: "2px solid var(--primary)",
                        flexShrink: 0,
                      }}
                    />
                    <div>
                      <h4
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: "1.15rem",
                          fontWeight: 600,
                          color: "var(--text)",
                          margin: 0,
                          lineHeight: 1.2,
                        }}
                      >
                        {t.name}
                      </h4>
                      <p
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: 11,
                          color: "var(--text-light)",
                          margin: "3px 0 0",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* ── Nav buttons ── */}
          <button
            onClick={prev}
            className="tm-nav-btn"
            style={{
              position: "absolute",
              left: 0,
              zIndex: 40,
              width: 44,
              height: 44,
              borderRadius: "50%",
              border: "1px solid var(--border)",
              background: "var(--white)",
              color: "var(--text)",
              boxShadow: "var(--shadow-sm)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            aria-label="Previous"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={next}
            className="tm-nav-btn"
            style={{
              position: "absolute",
              right: 0,
              zIndex: 40,
              width: 44,
              height: 44,
              borderRadius: "50%",
              border: "1px solid var(--border)",
              background: "var(--white)",
              color: "var(--text)",
              boxShadow: "var(--shadow-sm)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            aria-label="Next"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* ── Dots ── */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 8,
            marginTop: 36,
          }}
        >
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className="tm-dot"
              style={{
                height: 9,
                width: i === index ? 36 : 9,
                borderRadius: 100,
                background:
                  i === index
                    ? "linear-gradient(135deg, var(--primary), var(--primary-dark))"
                    : "var(--border)",
                transition: "width 0.4s cubic-bezier(0.22,1,0.36,1), background 0.35s ease",
              }}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}