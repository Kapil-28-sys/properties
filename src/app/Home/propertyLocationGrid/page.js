"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const locations = [
  {
    id: 1,
    title: "Upcoming Projects",
    listings: 229,
    type: "Projects",
    price: "133k - 500k",
    beds: "1-2",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop",
    badge: "New Launch",
    size: "tall",
  },
  {
    id: 2,
    title: "Dubai Marina",
    listings: 39,
    type: "Apartment",
    price: "500k - 1M",
    beds: "2-3",
    image:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1200&auto=format&fit=crop",
    size: "wide",
  },
  {
    id: 3,
    title: "Business Bay",
    listings: 112,
    type: "Commercial",
    price: "1M - 5M",
    beds: "3-4",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    badge: "Featured",
    size: "small",
  },
  {
    id: 4,
    title: "DAMAC Hills",
    listings: 44,
    type: "Villa",
    price: "500k - 1M",
    beds: "2-3",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1200&auto=format&fit=crop",
    size: "small",
  },
  {
    id: 5,
    title: "The Palm Jumeirah",
    listings: 37,
    type: "Luxury",
    price: "5M+",
    beds: "4+",
    image:
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?q=80&w=1200&auto=format&fit=crop",
    badge: "Ultra Premium",
    size: "hero",
  },
  {
    id: 6,
    title: "Commercial Space",
    listings: 907,
    type: "Commercial",
    price: "1M - 5M",
    beds: "3-4",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
    size: "tall",
  },
  {
    id: 7,
    title: "Dubai Hills Estate",
    listings: 15,
    type: "Luxury",
    price: "5M+",
    beds: "4+",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    size: "wide",
  },
];

const sizeClass = {
  hero: "col-span-2 row-span-3",
  tall: "col-span-1 row-span-3",
  wide: "col-span-2 row-span-2",
  small: "col-span-1 row-span-1",
};

const typeOptions = [
  "All",
  "Apartment",
  "Villa",
  "Luxury",
  "Commercial",
  "Projects",
];

const priceOptions = [
  "Any Price",
  "133k - 500k",
  "500k - 1M",
  "1M - 5M",
  "5M+",
];

const bedOptions = ["Any Beds", "1-2", "2-3", "3-4", "4+"];

const quickTags = [
  "Luxury Villas",
  "Commercial",
  "Beachfront",
  "Modern Homes",
  "Penthouse",
];

export default function PropertyLocationGrid() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");
  const [price, setPrice] = useState("Any Price");
  const [beds, setBeds] = useState("Any Beds");
  const [activeTag, setActiveTag] = useState(null);

  const filtered = useMemo(
    () =>
      locations.filter((item) => {
        const q = item.title
          .toLowerCase()
          .includes(search.toLowerCase());

        const t = type === "All" || item.type === type;
        const p = price === "Any Price" || item.price === price;
        const b = beds === "Any Beds" || item.beds === beds;

        return q && t && p && b;
      }),
    [search, type, price, beds]
  );

  return (
    <section
      style={{
        fontFamily: "'DM Sans',sans-serif",
        background: "#faf9f6",
        minHeight: "100vh",
        padding: "72px 28px 80px",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,500&family=DM+Sans:wght@300;400;500;600&display=swap');

        .pc {
          position: relative;
          overflow: hidden;
          border-radius: 26px;
          cursor: pointer;
          transition: box-shadow .45s cubic-bezier(.23,1,.32,1),
          transform .45s cubic-bezier(.23,1,.32,1);
          text-decoration: none;
        }

        .pc:hover {
          transform: translateY(-7px);
          box-shadow: 0 40px 80px rgba(140,110,40,.2);
        }

        .pc img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform .7s cubic-bezier(.23,1,.32,1);
        }

        .pc:hover img {
          transform: scale(1.09);
        }

        .pc:hover .pc-arrow {
          background: #b8912a;
          border-color: #b8912a;
        }

        .pc:hover .pc-glow {
          opacity: 1;
        }

        .pc-arrow {
          width: 37px;
          height: 37px;
          border-radius: 50%;
          background: rgba(255,255,255,.15);
          border: 1px solid rgba(255,255,255,.28);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all .3s;
          flex-shrink: 0;
        }

        .pc-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            ellipse at 20% 90%,
            rgba(184,145,42,.22) 0%,
            transparent 58%
          );
          opacity: 0;
          transition: opacity .5s;
          pointer-events: none;
        }

        .fi {
          background: #fff;
          border: 1.5px solid #e8e2d6;
          color: #1a1814;
          outline: none;
          transition: all .3s;
          font-family: 'DM Sans',sans-serif;
          border-radius: 14px;
        }

        .fi::placeholder {
          color: #b8ae9e;
        }

        .fi:focus {
          border-color: #b8912a;
          box-shadow: 0 0 0 4px rgba(184,145,42,.09);
          background: #fffdf8;
        }

        .fi option {
          background: #fff;
          color: #1a1814;
        }

        .tc {
          transition: all .25s;
          cursor: pointer;
          border-radius: 100px;
          font-family: 'DM Sans',sans-serif;
          border: 1.5px solid #e8e2d6;
          font-size: 13px;
          padding: 7px 19px;
          background: #fff;
          color: #7a7060;
          font-weight: 400;
        }

        .tc:hover {
          border-color: #c9a84c;
          color: #9a7418;
          background: #fdfaf2;
        }

        .tc.on {
          border-color: #b8912a;
          background: linear-gradient(135deg,#fef4d8,#fffdf5);
          color: #7a5c0e;
          font-weight: 600;
          box-shadow: 0 4px 18px rgba(184,145,42,.16);
        }

        .pt {
          border: 1.5px solid #e8e2d6;
          border-radius: 100px;
          padding: 5px 14px;
          font-size: 12px;
          background: transparent;
          color: #9a9080;
          font-family: 'DM Sans',sans-serif;
          cursor: pointer;
          transition: all .25s;
        }

        .pt:hover {
          border-color: #c9a84c;
          color: #9a7418;
        }

        .pt.on {
          border-color: #b8912a;
          background: #fdf4de;
          color: #7a5c0e;
        }

        .sbtn {
          background: linear-gradient(
            135deg,
            #b8912a 0%,
            #d9b84a 50%,
            #b8912a 100%
          );

          background-size: 200% auto;
          border: none;
          border-radius: 14px;
          color: #fff;
          font-family: 'DM Sans',sans-serif;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all .4s;
          white-space: nowrap;
        }

        .sbtn:hover {
          background-position: right center;
          box-shadow: 0 12px 32px rgba(184,145,42,.4);
          transform: translateY(-1px);
        }

        @keyframes rise {
          from {
            opacity: 0;
            transform: translateY(20px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .rise {
          animation: rise .65s ease both;
        }

        .r1 {
          animation-delay: .08s;
        }

        .r2 {
          animation-delay: .18s;
        }

        .r3 {
          animation-delay: .26s;
        }
      `}</style>

      <div style={{ maxWidth: "1360px", margin: "0 auto" }}>
        {/* HEADER */}

        <div
          className="rise"
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "52px",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "14px",
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "1.5px",
                  background: "#b8912a",
                }}
              />

              <span
                style={{
                  fontSize: "10px",
                  letterSpacing: "4.5px",
                  textTransform: "uppercase",
                  color: "#b8912a",
                  fontWeight: 600,
                }}
              >
                Premium Collection
              </span>
            </div>

            <h1
              style={{
                fontFamily: "'Playfair Display',serif",
                fontSize: "clamp(44px,5.5vw,76px)",
                fontWeight: 700,
                color: "#1a1814",
                lineHeight: 1.05,
                margin: 0,
              }}
            >
              Property for Sale
              <br />

              <em
                style={{
                  fontStyle: "italic",
                  fontWeight: 500,
                  color: "#b8912a",
                }}
              >
                in Rajasthan
              </em>
            </h1>
          </div>

          <p
            style={{
              color: "#9a9080",
              fontSize: "15px",
              fontWeight: 300,
              maxWidth: "250px",
              lineHeight: 1.65,
              textAlign: "right",
            }}
          >
            Explore luxury properties & iconic locations across the
            region
          </p>
        </div>

        {/* FILTER PANEL */}

        <div className="rise r1" style={{ marginBottom: "52px" }}>
          <div
            style={{
              background: "#fff",
              border: "1.5px solid #e8e2d6",
              borderRadius: "26px",
              padding: "30px 30px 24px",
              boxShadow: "0 8px 48px rgba(0,0,0,.055)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "22px",
              }}
            >
              <div>
                <p
                  style={{
                    margin: "0 0 5px",
                    fontSize: "10px",
                    letterSpacing: "4px",
                    textTransform: "uppercase",
                    color: "#b8912a",
                    fontWeight: 600,
                  }}
                >
                  Smart Filters
                </p>

                <h2
                  style={{
                    fontFamily: "'Playfair Display',serif",
                    color: "#1a1814",
                    fontSize: "21px",
                    margin: 0,
                    fontWeight: 600,
                  }}
                >
                  Find Your Property
                </h2>
              </div>

              <div
                style={{
                  fontSize: "12px",
                  color: "#b0a898",
                  display: "flex",
                  alignItems: "center",
                  gap: "7px",
                }}
              >
                <span
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    background: "#b8912a",
                    display: "block",
                  }}
                />

                {filtered.length} results
              </div>
            </div>

            <div
              style={{
                height: "1px",
                background:
                  "linear-gradient(90deg,transparent,#ddd5c0,transparent)",
                marginBottom: "22px",
              }}
            />

            {/* TYPE CHIPS */}

            <div
              style={{
                display: "flex",
                gap: "8px",
                flexWrap: "wrap",
                marginBottom: "20px",
              }}
            >
              {typeOptions.map((t) => (
                <button
                  key={t}
                  className={`tc ${type === t ? "on" : ""}`}
                  onClick={() => setType(t)}
                >
                  {t}
                </button>
              ))}
            </div>

            {/* FILTERS */}

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto auto auto",
                gap: "12px",
                alignItems: "center",
              }}
            >
              <div style={{ position: "relative" }}>
                <svg
                  style={{
                    position: "absolute",
                    left: "16px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "17px",
                    height: "17px",
                    color: "#b8912a",
                  }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>

                <input
                  type="text"
                  placeholder="Search locations..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="fi"
                  style={{
                    width: "100%",
                    height: "52px",
                    paddingLeft: "46px",
                    paddingRight: "16px",
                    fontSize: "14px",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              <div style={{ position: "relative" }}>
                <select
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="fi"
                  style={{
                    height: "52px",
                    padding: "0 40px 0 16px",
                    fontSize: "14px",
                    appearance: "none",
                    minWidth: "148px",
                  }}
                >
                  {priceOptions.map((p) => (
                    <option key={p}>{p}</option>
                  ))}
                </select>
              </div>

              <div style={{ position: "relative" }}>
                <select
                  value={beds}
                  onChange={(e) => setBeds(e.target.value)}
                  className="fi"
                  style={{
                    height: "52px",
                    padding: "0 40px 0 16px",
                    fontSize: "14px",
                    appearance: "none",
                    minWidth: "128px",
                  }}
                >
                  {bedOptions.map((b) => (
                    <option key={b}>{b}</option>
                  ))}
                </select>
              </div>

              <button
                className="sbtn"
                style={{
                  height: "52px",
                  padding: "0 26px",
                }}
              >
                Search
              </button>
            </div>
          </div>
        </div>

        {/* CARD GRID */}

        <div
          className="rise r2"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gridAutoRows: "170px",
            gap: "18px",
          }}
        >
          {filtered.map((item) => {
            const isHero = item.size === "hero";
            const isSmall = item.size === "small";

            const titleSize = isHero
              ? "clamp(28px,3vw,44px)"
              : isSmall
              ? "16px"
              : "clamp(20px,2.2vw,30px)";

            const pad = isSmall ? "14px 18px" : "24px 28px";

            return (
              <Link
                href="/Home/propertiesdetailspage"
                key={item.id}
                className={`pc ${sizeClass[item.size]}`}
              >
                <img src={item.image} alt={item.title} />

                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(12,9,4,.86) 0%, rgba(12,9,4,.3) 48%, rgba(12,9,4,.06) 100%)",
                  }}
                />

                <div className="pc-glow" />

                {item.badge && (
                  <div
                    style={{
                      position: "absolute",
                      top: "16px",
                      left: "16px",
                      background: "rgba(184,145,42,.92)",
                      backdropFilter: "blur(10px)",
                      borderRadius: "100px",
                      padding: "4px 13px",
                      fontSize: "9px",
                      fontWeight: 700,
                      letterSpacing: "1.5px",
                      textTransform: "uppercase",
                      color: "#fff",
                    }}
                  >
                    {item.badge}
                  </div>
                )}

                <div
                  className="pc-arrow"
                  style={{
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                  }}
                >
                  <svg
                    style={{
                      width: "13px",
                      height: "13px",
                      color: "#fff",
                    }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 17L17 7M17 7H7M17 7v10"
                    />
                  </svg>
                </div>

                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: pad,
                  }}
                >
                  <p
                    style={{
                      fontSize: "9px",
                      letterSpacing: "3.5px",
                      textTransform: "uppercase",
                      color: "#d4a93c",
                      margin: "0 0 6px",
                      fontWeight: 600,
                    }}
                  >
                    {item.type}
                  </p>

                  <h3
                    style={{
                      fontFamily: "'Playfair Display',serif",
                      color: "#faf7f0",
                      fontSize: titleSize,
                      margin: "0 0 9px",
                      fontWeight: 700,
                      lineHeight: 1.12,
                    }}
                  >
                    {item.title}
                  </h3>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      flexWrap: "wrap",
                    }}
                  >
                    {[
                      `${item.listings} listings`,
                      item.price,
                      `${item.beds} beds`,
                    ].map((txt, i) => (
                      <span
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "11px",
                            color: "rgba(255,255,255,.6)",
                          }}
                        >
                          {txt}
                        </span>

                        {i < 2 && (
                          <span
                            style={{
                              width: "3px",
                              height: "3px",
                              borderRadius: "50%",
                              background: "rgba(212,169,60,.55)",
                              display: "block",
                            }}
                          />
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* EMPTY */}

        {filtered.length === 0 && (
          <div
            style={{
              textAlign: "center",
              padding: "90px 0",
            }}
          >
            <div
              style={{
                fontSize: "44px",
                marginBottom: "16px",
              }}
            >
              🔍
            </div>

            <h3
              style={{
                fontFamily: "'Playfair Display',serif",
                fontSize: "38px",
                color: "#1a1814",
                margin: "0 0 10px",
              }}
            >
              No Properties Found
            </h3>

            <p
              style={{
                color: "#9a9080",
                fontSize: "15px",
              }}
            >
              Try adjusting filters or your search keyword.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}