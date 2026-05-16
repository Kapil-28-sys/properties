"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowUpRight, MapPin } from "lucide-react";

const rajasthanLocations = [
  {
    id: 1,
    name: "Ajmer",
    image: "https://www.rajasthantourpackages.in/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fx7ulapdbp%2F2edd1481-8338-419b-a9ea-06354e9b2300-ana-sagar-lake-ajmer-tour.jpg&w=3840&q=75",
    properties: 420,
    featured: false,
  },
  {
    id: 2,
    name: "Alwar",
    image: "https://www.revv.co.in/blogs/wp-content/uploads/2020/05/road-trip-delhi-to-alwar.jpg",
    properties: 380,
    featured: false,
  },
  {
    id: 3,
    name: "Bharatpur",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/30/Purana_mehal.jpg",
    properties: 290,
    featured: false,
  },
  {
    id: 4,
    name: "Bikaner",
    image: "https://static.tripclap.com/uploads/story/850X450/1667751632-1667751632-9801e.webp",
    properties: 510,
    featured: false,
  },
  {
    id: 5,
    name: "Chittorgarh",
    image: "https://magikindia.com/wp-content/uploads/2018/08/chittorgarh-fort-1024x683.jpg",
    properties: 260,
    featured: false,
  },
  {
    id: 6,
    name: "Jaipur",
    image: "https://www.agoda.com/wp-content/uploads/2024/05/Nahargarh-Fort-jaipur-india-1244x700.jpg",
    properties: 1200,
    featured: true,
  },
  {
    id: 7,
    name: "Udaipur",
    image: "https://beantowntraveller.com/wp-content/uploads/2020/02/UNADJUSTEDNONRAW_thumb_b808-1024x680.jpg",
    properties: 860,
    featured: true,
  },
  {
    id: 8,
    name: "Jaisalmer",
    image: "https://www.thepalaceonwheels.org/storage/jaislamer_fort_night_view_1914%20(1).jpg",
    properties: 640,
    featured: true,
  },
];

export default function PopularLocations() {
  const router = useRouter();
  const [showAll, setShowAll] = useState(false);

  const visibleLocations = showAll
    ? rajasthanLocations
    : rajasthanLocations.slice(0, 8);

  return (
    <section
      style={{
        position: "relative",
        padding: "96px 0",
        overflow: "hidden",
        background: "var(--background)",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .pl * { box-sizing: border-box; }

        @keyframes pl-fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0);    }
        }

        .pl-fade-up { animation: pl-fadeUp 0.75s cubic-bezier(0.22,1,0.36,1) forwards; }

        .pl-card {
          transition: var(--transition);
          cursor: pointer;
        }
        .pl-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-md);
        }
        .pl-card:hover .pl-card-img {
          transform: scale(1.08);
        }
        .pl-card:hover .pl-card-name {
          color: var(--primary) !important;
        }
        .pl-card:hover .pl-arrow-btn {
          background: var(--primary) !important;
          color: var(--white) !important;
          border-color: var(--primary) !important;
        }

        .pl-card-img {
          transition: transform 0.7s cubic-bezier(0.22,1,0.36,1);
          transform: scale(1.03);
        }

        .pl-arrow-btn {
          transition: var(--transition);
        }

        .pl-toggle-btn {
          position: relative;
          overflow: hidden;
          transition: var(--transition);
          cursor: pointer;
        }
        .pl-toggle-btn::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, var(--primary), var(--primary-dark));
          transform: translateX(-101%);
          transition: transform 0.42s cubic-bezier(0.22,1,0.36,1);
          z-index: 0;
        }
        .pl-toggle-btn:hover::before { transform: translateX(0); }
        .pl-toggle-btn:hover { border-color: var(--primary) !important; }
        .pl-toggle-btn > * { position: relative; z-index: 1; }
      `}</style>

      {/* ── Ambient blobs ── */}
      <div
        style={{
          position: "absolute",
          top: -80,
          right: -80,
          width: 360,
          height: 360,
          borderRadius: "50%",
          background: "rgba(245,158,11,0.07)",
          filter: "blur(100px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -80,
          left: -60,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "rgba(15,61,145,0.06)",
          filter: "blur(90px)",
          pointerEvents: "none",
        }}
      />

      {/* ── Rajasthan map watermark ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          opacity: 0.045,
        }}
      >
        <img
          src="https://static.vecteezy.com/system/resources/previews/038/097/442/non_2x/rajasthan-india-outline-map-vector.jpg"
          style={{ width: 1300 }}
          alt=""
        />
      </div>

      <div
        className="pl"
        style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "0 28px" }}
      >

        {/* ── Header ── */}
        <div className="pl-fade-up" style={{ textAlign: "center", marginBottom: 56 }}>

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
            <MapPin size={13} style={{ color: "var(--primary)" }} />
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
              Popular Locations
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
            Explore{" "}
            <span
              style={{
                fontStyle: "italic",
                fontWeight: 600,
                color: "var(--primary)",
              }}
            >
              Rajasthan
            </span>
          </h2>

          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              marginTop: 14,
              fontSize: 14.5,
              lineHeight: 1.8,
              color: "var(--text-light)",
              maxWidth: 480,
              margin: "14px auto 0",
            }}
          >
            Discover premium properties across Rajasthan's most iconic districts and heritage cities.
          </p>
        </div>

        {/* ── Grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: 16,
          }}
        >
          {visibleLocations.map((item, i) => (
            <div
              key={item.id}
              className="pl-card"
              onClick={() => router.push("/Home/propertyLocationGrid")}
              style={{
                borderRadius: 24,
                overflow: "hidden",
                background: "var(--white)",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              {/* Image */}
              <div style={{ position: "relative", height: 148, overflow: "hidden" }}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="pl-card-img"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />

                {/* Overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.08) 60%, transparent 100%)",
                  }}
                />

                {/* Featured badge */}
                {item.featured && (
                  <span
                    style={{
                      position: "absolute",
                      top: 12,
                      left: 12,
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 9,
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      padding: "4px 10px",
                      borderRadius: 100,
                      background: "var(--primary)",
                      color: "var(--white)",
                      fontWeight: 500,
                    }}
                  >
                    Featured
                  </span>
                )}

                {/* Property count pill on image */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 10,
                    right: 10,
                    background: "rgba(255,255,255,0.18)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.25)",
                    borderRadius: 100,
                    padding: "3px 10px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 10,
                      color: "#fff",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {item.properties.toLocaleString()} listed
                  </span>
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: "16px 18px 18px" }}>
                <h3
                  className="pl-card-name"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.35rem",
                    fontWeight: 600,
                    color: "var(--text)",
                    margin: 0,
                    letterSpacing: "-0.01em",
                    transition: "var(--transition)",
                  }}
                >
                  {item.name}
                </h3>

                {/* Divider */}
                <div
                  style={{
                    width: 28,
                    height: 1,
                    background: "linear-gradient(to right, var(--primary), transparent)",
                    margin: "10px 0",
                  }}
                />

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 12,
                      color: "var(--text-light)",
                      margin: 0,
                      letterSpacing: "0.03em",
                    }}
                  >
                    {item.properties.toLocaleString()} Properties
                  </p>

                  <div
                    className="pl-arrow-btn"
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
                      flexShrink: 0,
                    }}
                  >
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Toggle button ── */}
        <div style={{ textAlign: "center", marginTop: 52 }}>
          <button
            onClick={() => setShowAll(!showAll)}
            className="pl-toggle-btn"
            style={{
              padding: "13px 36px",
              borderRadius: 100,
              border: "1px solid var(--border)",
              background: "var(--text)",
              color: "var(--white)",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              boxShadow: "var(--shadow-md)",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span>{showAll ? "Show Less" : "Explore All Districts"}</span>
            <ArrowUpRight
              size={14}
              style={{
                transform: showAll ? "rotate(180deg)" : "rotate(0deg)",
                transition: "var(--transition)",
              }}
            />
          </button>
        </div>

      </div>
    </section>
  );
}