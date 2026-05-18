"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const locations = [
  {
    id: 1,
    title: "Upcoming Projects",
    listings: 229,
    type: "Projects",
    price: "₹1.3Cr - ₹5Cr",
    beds: "1-2",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop",
    badge: "New Launch",
    size: "tall",
  },
  {
    id: 2,
    title: "Dubai Marina",
    listings: 39,
    type: "Apartment",
    price: "₹5Cr - ₹10Cr",
    beds: "2-3",
    image:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1600&auto=format&fit=crop",
    size: "wide",
  },
  {
    id: 3,
    title: "Business Bay",
    listings: 112,
    type: "Commercial",
    price: "₹10Cr - ₹50Cr",
    beds: "3-4",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
    badge: "Featured",
    size: "small",
  },
  {
    id: 4,
    title: "DAMAC Hills",
    listings: 44,
    type: "Villa",
    price: "₹5Cr - ₹10Cr",
    beds: "2-3",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1600&auto=format&fit=crop",
    size: "small",
  },
  {
    id: 5,
    title: "Palm Jumeirah",
    listings: 37,
    type: "Luxury",
    price: "₹50Cr+",
    beds: "4+",
    image:
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?q=80&w=1600&auto=format&fit=crop",
    badge: "Ultra Premium",
    size: "hero",
  },
  {
    id: 6,
    title: "Commercial Space",
    listings: 907,
    type: "Commercial",
    price: "₹10Cr - ₹50Cr",
    beds: "3-4",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop",
    size: "medium",
  },
];

const typeOptions = [
  "All",
  "Apartment",
  "Villa",
  "Luxury",
  "Commercial",
  "Projects",
];

export default function PropertyLocationGrid() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");

  const filtered = useMemo(() => {
    return locations.filter((item) => {
      const q = item.title.toLowerCase().includes(search.toLowerCase());
      const t = type === "All" || item.type === type;
      return q && t;
    });
  }, [search, type]);

  return (
    <>
      <style jsx global>{`
       
        .plg-section {
          background: var(--background);
          padding: 90px 0;
          overflow: hidden;
          font-family: "DM Sans", sans-serif;
        }

        .plg-container {
          max-width: 1440px;
          margin: auto;
          padding: 0 32px;
        }

        /* ── HEADER ── */
        .plg-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
        }

        .plg-eyebrow-line {
          width: 44px;
          height: 2px;
          background: var(--primary);
          border-radius: 2px;
        }

        .plg-eyebrow-text {
          color: var(--primary-dark);
          letter-spacing: 3px;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          font-family: "DM Sans", sans-serif;
        }

        .plg-hero-title {
          font-family: "DM Serif Display", serif;
          font-size: 72px;
          line-height: 1;
          color: var(--text);
          margin: 0;
          letter-spacing: -1.5px;
        }

        .plg-hero-title em {
          color: var(--primary);
          font-style: italic;
        }

        .plg-hero-para {
          color: var(--text-light);
          font-size: 15px;
          line-height: 1.8;
          max-width: 300px;
          margin-left: auto;
          font-family: "DM Sans", sans-serif;
        }

        /* ── FILTER BOX ── */
        .plg-filter-box {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 28px 32px;
          margin-top: 52px;
          margin-bottom: 52px;
          box-shadow: var(--shadow-sm);
        }

        .plg-chip {
          border: 1.5px solid var(--border);
          background: var(--white);
          color: var(--text-light);
          border-radius: 999px;
          padding: 9px 20px;
          font-size: 13px;
          font-weight: 600;
          font-family: "DM Sans", sans-serif;
          transition: var(--transition);
          cursor: pointer;
        }

        .plg-chip.active,
        .plg-chip:hover {
          background: var(--secondary);
          border-color: var(--secondary);
          color: var(--white);
          box-shadow: var(--shadow-sm);
        }

        .plg-search-wrap {
          position: relative;
        }

        .plg-search-icon {
          position: absolute;
          left: 18px;
          top: 50%;
          transform: translateY(-50%);
          width: 18px;
          height: 18px;
          color: var(--primary);
        }

        .plg-search-input {
          width: 100%;
          height: 56px;
          border-radius: var(--radius);
          border: 1.5px solid var(--border);
          background: var(--background);
          padding: 0 20px 0 50px;
          outline: none;
          font-size: 14px;
          font-family: "DM Sans", sans-serif;
          color: var(--text);
          transition: var(--transition);
        }

        .plg-search-input::placeholder {
          color: var(--text-light);
        }

        .plg-search-input:focus {
          border-color: var(--secondary-light);
          background: var(--white);
          box-shadow: 0 0 0 4px rgba(15, 61, 145, 0.06);
        }

        .plg-search-btn {
          width: 100%;
          height: 56px;
          border-radius: var(--radius);
          border: none;
          background: var(--secondary);
          color: var(--white);
          font-weight: 700;
          font-size: 14px;
          font-family: "DM Sans", sans-serif;
          letter-spacing: 0.5px;
          cursor: pointer;
          transition: var(--transition);
        }

        .plg-search-btn:hover {
          background: var(--secondary-dark);
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        /* ── BENTO GRID ── */
        .plg-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          grid-auto-rows: 80px;
          gap: 18px;
        }

        /* Size mappings → column / row spans */
        .plg-col-hero   { grid-column: span 7; grid-row: span 7; }
        .plg-col-tall   { grid-column: span 5; grid-row: span 7; }
        .plg-col-wide   { grid-column: span 7; grid-row: span 4; }
        .plg-col-medium { grid-column: span 5; grid-row: span 4; }
        .plg-col-small  { grid-column: span 6; grid-row: span 3; }

        /* ── CARD ── */
        .plg-card {
          position: relative;
          overflow: hidden;
          border-radius: var(--radius);
          cursor: pointer;
          isolation: isolate;
          transition: var(--transition);
          display: block;
          text-decoration: none;
          width: 100%;
          height: 100%;
        }

        .plg-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-md);
        }

        .plg-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .plg-card:hover img {
          transform: scale(1.07);
        }

        .plg-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(5, 5, 10, 0.88) 0%,
            rgba(5, 5, 10, 0.4) 45%,
            rgba(5, 5, 10, 0.05) 100%
          );
          z-index: 1;
        }

        /* blue tint shimmer on hover */
        .plg-card-shimmer {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at bottom left,
            rgba(15, 61, 145, 0.3),
            transparent 50%
          );
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 2;
        }

        .plg-card:hover .plg-card-shimmer {
          opacity: 1;
        }

        /* badge */
        .plg-badge {
          position: absolute;
          top: 18px;
          left: 18px;
          z-index: 5;
          background: var(--primary);
          color: var(--white);
          border-radius: 999px;
          padding: 6px 14px;
          font-size: 10px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          font-weight: 700;
          font-family: "DM Sans", sans-serif;
        }

        /* content */
        .plg-card-content {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 5;
          padding: 24px;
        }

        .plg-card-type {
          color: var(--primary-light);
          font-size: 10px;
          letter-spacing: 3px;
          font-weight: 700;
          text-transform: uppercase;
          font-family: "DM Sans", sans-serif;
          margin-bottom: 8px;
        }

        .plg-card-title {
          color: var(--white);
          font-family: "DM Serif Display", serif;
          font-size: 32px;
          line-height: 1.1;
          margin: 0 0 12px;
          letter-spacing: -0.3px;
        }

        .plg-card-title.sm { font-size: 22px; }
        .plg-card-title.md { font-size: 26px; }

        .plg-info-row {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
        }

        .plg-info-text {
          color: rgba(255, 255, 255, 0.72);
          font-size: 12.5px;
          font-weight: 500;
          font-family: "DM Sans", sans-serif;
        }

        .plg-dot {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: var(--primary-light);
          opacity: 0.6;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1100px) {
          .plg-hero-title { font-size: 56px; }

          .plg-col-hero   { grid-column: span 12; grid-row: span 5; }
          .plg-col-tall   { grid-column: span 12; grid-row: span 5; }
          .plg-col-wide   { grid-column: span 12; grid-row: span 4; }
          .plg-col-medium { grid-column: span 12; grid-row: span 4; }
          .plg-col-small  { grid-column: span 6;  grid-row: span 3; }
        }

        @media (max-width: 767px) {
          .plg-section { padding: 56px 0; }
          .plg-container { padding: 0 16px; }
          .plg-hero-title { font-size: 38px; }
          .plg-hero-para { max-width: 100%; margin-left: 0; margin-top: 20px; }
          .plg-filter-box { padding: 18px; border-radius: var(--radius); }
          .plg-grid { grid-auto-rows: 60px; gap: 12px; }

          .plg-col-hero,
          .plg-col-tall,
          .plg-col-wide,
          .plg-col-medium { grid-column: span 12; grid-row: span 5; }
          .plg-col-small  { grid-column: span 12; grid-row: span 4; }

          .plg-card-title    { font-size: 24px !important; }
        }
      `}</style>

      <section className="plg-section">
        <div className="plg-container">

          {/* ── HEADER ── */}
          <div className="row align-items-end mb-2">
            <div className="col-lg-7">
              <div className="plg-eyebrow">
                <div className="plg-eyebrow-line" />
                <span className="plg-eyebrow-text">Premium Collection</span>
              </div>
              <h1 className="plg-hero-title">
                Property for Sale<br />
                <em>in Rajasthan</em>
              </h1>
            </div>
            <div className="col-lg-5">
              <p className="plg-hero-para">
                Explore premium residences, commercial hubs &amp; ultra luxury
                villas crafted for modern lifestyle.
              </p>
            </div>
          </div>

          {/* ── FILTER BOX ── */}
          <div className="plg-filter-box">
            <div className="d-flex flex-wrap gap-2 mb-3">
              {typeOptions.map((t) => (
                <button
                  key={t}
                  onClick={() => setType(t)}
                  className={`plg-chip ${type === t ? "active" : ""}`}
                >
                  {t}
                </button>
              ))}
            </div>

            <div className="row g-3 align-items-center">
              <div className="col-lg-9">
                <div className="plg-search-wrap">
                  <svg
                    className="plg-search-icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-4.3-4.3m1.3-5.7a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <input
                    type="text"
                    className="plg-search-input"
                    placeholder="Search premium properties..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <button className="plg-search-btn">Search Property</button>
              </div>
            </div>
          </div>

          {/* ── BENTO GRID ── */}
          <div className="plg-grid">
            {filtered.map((item) => {
              const colClass =
                item.size === "hero"   ? "plg-col-hero"   :
                item.size === "tall"   ? "plg-col-tall"   :
                item.size === "wide"   ? "plg-col-wide"   :
                item.size === "medium" ? "plg-col-medium" :
                                         "plg-col-small";

              const titleSize =
                item.size === "hero" || item.size === "tall"  ? ""   :
                item.size === "wide" || item.size === "medium" ? "md" :
                "sm";

              return (
                <div key={item.id} className={colClass}>
                  <Link href="/Home/propertiesdetailspage" className="plg-card">
                    <img src={item.image} alt={item.title} />
                    <div className="plg-card-overlay" />
                    <div className="plg-card-shimmer" />

                    {item.badge && (
                      <div className="plg-badge">{item.badge}</div>
                    )}

                    <div className="plg-card-content">
                      <div className="plg-card-type">{item.type}</div>
                      <h3 className={`plg-card-title ${titleSize}`}>
                        {item.title}
                      </h3>
                      <div className="plg-info-row">
                        <span className="plg-info-text">{item.listings} listings</span>
                        <span className="plg-dot" />
                        <span className="plg-info-text">{item.price}</span>
                        <span className="plg-dot" />
                        <span className="plg-info-text">{item.beds} Beds</span>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}