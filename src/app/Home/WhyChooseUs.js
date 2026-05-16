import {
  ArrowUpRight,
  Building2,
  ShieldCheck,
  TrendingUp,
  Sparkles,
} from "lucide-react";

const cards = [
  {
    icon: <Building2 size={20} />,
    title: "Prime Properties",
    desc: "Luxury homes in premium curated locations across India's most sought-after neighbourhoods.",
  },
  {
    icon: <TrendingUp size={20} />,
    title: "Investment Growth",
    desc: "High-return assets with consistent appreciation and transparent portfolio performance.",
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "Verified Deals",
    desc: "Secure, fully documented and trusted real estate experiences from day one.",
  },
];

const stats = [
  ["10K+", "Happy Clients"],
  ["500+", "Premium Homes"],
  ["18%", "Avg. ROI"],
];

export default function WhyChooseUs() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background: "var(--background)",
        padding: "96px 0",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .wcu * { box-sizing: border-box; }

        @keyframes wcu-fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        @keyframes wcu-float {
          0%,100% { transform: translateY(0px);  }
          50%     { transform: translateY(-8px); }
        }

        .wcu-fade-up { animation: wcu-fadeUp 0.75s cubic-bezier(0.22,1,0.36,1) forwards; }
        .wcu-float   { animation: wcu-float 5.5s ease-in-out infinite; }

        .wcu-stat-card {
          transition: var(--transition);
        }
        .wcu-stat-card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-md);
        }

        .wcu-cta {
          position: relative;
          overflow: hidden;
          transition: var(--transition);
        }
        .wcu-cta::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, var(--primary), var(--primary-dark));
          transform: translateX(-101%);
          transition: transform 0.42s cubic-bezier(0.22,1,0.36,1);
          z-index: 0;
        }
        .wcu-cta:hover::before  { transform: translateX(0); }
        .wcu-cta:hover          { border-color: var(--primary) !important; }
        .wcu-cta > *            { position: relative; z-index: 1; }

        .wcu-feature-card {
          transition: var(--transition);
        }
        .wcu-feature-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-md);
        }
        .wcu-feature-card:hover .wcu-icon-wrap {
          background: var(--primary) !important;
          color: var(--white) !important;
        }

        .wcu-icon-wrap {
          transition: var(--transition);
        }

        .wcu-img {
          transition: transform 0.8s cubic-bezier(0.22,1,0.36,1);
        }
        .wcu-img-wrap:hover .wcu-img {
          transform: scale(1.07);
        }
      `}</style>

      {/* ── Ambient blobs ── */}
      <div
        style={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 380,
          height: 380,
          borderRadius: "50%",
          background: "rgba(245,158,11,0.08)",
          filter: "blur(110px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -100,
          left: -80,
          width: 320,
          height: 320,
          borderRadius: "50%",
          background: "rgba(15,61,145,0.07)",
          filter: "blur(100px)",
          pointerEvents: "none",
        }}
      />

      {/* ── Grid texture ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.06,
          backgroundImage: `
            linear-gradient(rgba(245,158,11,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245,158,11,0.4) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(circle at 60% 40%, black 40%, transparent 80%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="wcu"
        style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "0 28px" }}
      >

        {/* ── Top grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "56px",
            alignItems: "center",
          }}
        >

          {/* ── Left column ── */}
          <div className="wcu-fade-up">

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
              <Sparkles size={13} style={{ color: "var(--primary)" }} />
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
                Why Choose Us
              </span>
            </div>

            {/* Heading */}
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(3rem, 5vw, 5.2rem)",
                lineHeight: 0.92,
                letterSpacing: "-0.03em",
                fontWeight: 300,
                color: "var(--text)",
                margin: 0,
              }}
            >
              Luxury Living
              <span
                style={{
                  display: "block",
                  fontWeight: 600,
                  fontStyle: "italic",
                  color: "var(--primary)",
                }}
              >
                Reimagined
              </span>
            </h2>

            {/* Description */}
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                marginTop: 18,
                fontSize: 14.5,
                lineHeight: 1.85,
                color: "var(--text-light)",
                maxWidth: 480,
              }}
            >
              Premium real estate crafted for modern lifestyles, long-term
              value, and refined living experiences across India's finest cities.
            </p>

            {/* Stats */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 10,
                marginTop: 32,
              }}
            >
              {stats.map(([val, label], i) => (
                <div
                  key={i}
                  className="wcu-stat-card"
                  style={{
                    background: "var(--white)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius)",
                    padding: "16px 22px",
                    minWidth: 112,
                    boxShadow: "var(--shadow-sm)",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "2rem",
                      fontWeight: 600,
                      color: "var(--text)",
                      margin: 0,
                      lineHeight: 1,
                    }}
                  >
                    {val}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 11,
                      color: "var(--text-light)",
                      margin: "6px 0 0",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              className="wcu-cta"
              style={{
                marginTop: 32,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "13px 28px",
                borderRadius: 100,
                border: "1px solid var(--border)",
                background: "var(--text)",
                color: "var(--white)",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                cursor: "pointer",
                boxShadow: "var(--shadow-md)",
              }}
            >
              <span>Explore Properties</span>
              <ArrowUpRight size={15} />
            </button>

          </div>

          {/* ── Right: image ── */}
          <div className="wcu-float" style={{ position: "relative" }}>

            <div
              className="wcu-img-wrap"
              style={{
                height: 500,
                borderRadius: 30,
                overflow: "hidden",
                boxShadow: "var(--shadow-md)",
                border: "1px solid var(--border)",
                position: "relative",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d"
                alt="Luxury Property"
                className="wcu-img"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transform: "scale(1.03)",
                }}
              />

              {/* Gradient */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.12) 55%, rgba(0,0,0,0) 100%)",
                }}
              />

              {/* Float card */}
              <div
                style={{
                  position: "absolute",
                  bottom: 20,
                  left: 20,
                  right: 20,
                }}
              >
                <div
                  style={{
                    background: "rgba(255,255,255,0.92)",
                    backdropFilter: "blur(16px)",
                    borderRadius: "var(--radius)",
                    padding: "18px 20px",
                    border: "1px solid var(--border)",
                    boxShadow: "var(--shadow-md)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 16,
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 9,
                        letterSpacing: "0.28em",
                        textTransform: "uppercase",
                        color: "var(--text-light)",
                        margin: "0 0 4px",
                      }}
                    >
                      Client Satisfaction
                    </p>
                    <h3
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "2.6rem",
                        fontWeight: 600,
                        color: "var(--text)",
                        margin: 0,
                        lineHeight: 1,
                      }}
                    >
                      98%
                    </h3>
                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 12,
                        color: "var(--text-light)",
                        margin: "4px 0 0",
                      }}
                    >
                      Trusted Experience
                    </p>
                  </div>

                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 14,
                      background: "var(--primary)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--white)",
                      flexShrink: 0,
                    }}
                  >
                    <ShieldCheck size={20} />
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative accent ring */}
            <div
              style={{
                position: "absolute",
                top: -14,
                right: -14,
                width: 90,
                height: 90,
                borderRadius: "50%",
                border: "1.5px dashed rgba(245,158,11,0.35)",
                pointerEvents: "none",
              }}
            />

          </div>
        </div>

        {/* ── Feature cards ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 16,
            marginTop: 52,
          }}
        >
          {cards.map((item, i) => (
            <div
              key={i}
              className="wcu-feature-card"
              style={{
                padding: "28px 26px",
                borderRadius: 24,
                background: "var(--white)",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              {/* Icon */}
              <div
                className="wcu-icon-wrap"
                style={{
                  width: 44,
                  height: 44,
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

              {/* Title */}
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.45rem",
                  fontWeight: 600,
                  color: "var(--text)",
                  margin: "18px 0 8px",
                  letterSpacing: "-0.01em",
                }}
              >
                {item.title}
              </h3>

              {/* Divider */}
              <div
                style={{
                  width: 36,
                  height: 1,
                  background: "linear-gradient(to right, var(--primary), transparent)",
                  marginBottom: 12,
                }}
              />

              {/* Desc */}
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
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}