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
    size: "tall",
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
      const q = item.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const t = type === "All" || item.type === type;

      return q && t;
    });
  }, [search, type]);

  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:wght@600;700&display=swap");

        .property-section {
          background: #f7f5f1;
          padding: 90px 0;
          overflow: hidden;
          font-family: "Inter", sans-serif;
        }

        .property-container {
          max-width: 1500px;
          margin: auto;
          padding: 0 24px;
        }

        .top-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 24px;
        }

        .top-line {
          width: 50px;
          height: 1px;
          background: #b8912a;
        }

        .top-text {
          color: #b8912a;
          letter-spacing: 4px;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
        }

        .hero-title {
          font-family: "Playfair Display", serif;
          font-size: 84px;
          line-height: 0.95;
          color: #141414;
          margin-bottom: 0;
          letter-spacing: -2px;
        }

        .hero-title span {
          color: #b8912a;
          font-style: italic;
        }

        .hero-para {
          color: #847a68;
          font-size: 15px;
          line-height: 1.8;
          max-width: 320px;
          margin-left: auto;
        }

        .filter-box {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(18px);
          border: 1px solid #ece4d7;
          border-radius: 34px;
          padding: 34px;
          margin-top: 60px;
          margin-bottom: 60px;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.05);
        }

        .chip {
          border: 1px solid #e8dfd1;
          background: #fff;
          color: #6f675a;
          border-radius: 999px;
          padding: 11px 20px;
          font-size: 13px;
          font-weight: 600;
          transition: 0.3s;
          cursor: pointer;
        }

        .chip.active {
          background: linear-gradient(135deg, #b8912a, #d4ae45);
          border-color: transparent;
          color: white;
          box-shadow: 0 12px 30px rgba(184, 145, 42, 0.25);
        }

        .search-wrap {
          position: relative;
        }

        .search-icon {
          position: absolute;
          left: 18px;
          top: 50%;
          transform: translateY(-50%);
          width: 18px;
          height: 18px;
          color: #b8912a;
        }

        .search-input {
          width: 100%;
          height: 62px;
          border-radius: 18px;
          border: 1px solid #e8dfd1;
          background: white;
          padding: 0 20px 0 52px;
          outline: none;
          font-size: 14px;
          transition: 0.3s;
        }

        .search-input:focus {
          border-color: #b8912a;
          box-shadow: 0 0 0 4px rgba(184, 145, 42, 0.08);
        }

        .search-btn {
          width: 100%;
          height: 62px;
          border-radius: 18px;
          border: none;
          background: linear-gradient(135deg, #b8912a, #d7b048);
          color: white;
          font-weight: 700;
          font-size: 14px;
          transition: 0.35s;
        }

        .search-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(184, 145, 42, 0.3);
        }

        .property-card {
          position: relative;
          overflow: hidden;
          border-radius: 34px;
          cursor: pointer;
          transition: 0.45s cubic-bezier(0.23, 1, 0.32, 1);
          isolation: isolate;
        }

        .property-card:hover {
          transform: translateY(-10px);
        }

        .property-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: 0.7s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .property-card:hover img {
          transform: scale(1.08);
        }

        .card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(8, 8, 8, 0.92) 0%,
            rgba(8, 8, 8, 0.45) 40%,
            rgba(8, 8, 8, 0.05) 100%
          );
          z-index: 1;
        }

        .glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at bottom left,
            rgba(184, 145, 42, 0.35),
            transparent 45%
          );
          opacity: 0;
          transition: 0.4s;
          z-index: 2;
        }

        .property-card:hover .glow {
          opacity: 1;
        }

        .badge-custom {
          position: absolute;
          top: 24px;
          left: 24px;
          z-index: 5;
          background: rgba(184, 145, 42, 0.92);
          color: white;
          border-radius: 999px;
          padding: 8px 15px;
          font-size: 10px;
          letter-spacing: 1.8px;
          text-transform: uppercase;
          font-weight: 700;
          backdrop-filter: blur(10px);
        }

        .card-content {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 5;
          padding: 30px;
        }

        .card-type {
          color: #d7b048;
          font-size: 10px;
          letter-spacing: 4px;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .card-title {
          color: white;
          font-family: "Playfair Display", serif;
          font-size: 38px;
          line-height: 1.05;
          margin-bottom: 14px;
        }

        .small-title {
          font-size: 26px;
        }

        .info-wrap {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
        }

        .info-text {
          color: rgba(255, 255, 255, 0.72);
          font-size: 13px;
          font-weight: 500;
        }

        .dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: rgba(215, 176, 72, 0.6);
        }

        @media (max-width: 991px) {
          .hero-title {
            font-size: 58px;
          }

          .hero-para {
            max-width: 100%;
            margin-left: 0;
            margin-top: 24px;
          }
        }

        @media (max-width: 767px) {
          .property-section {
            padding: 60px 0;
          }

          .property-container {
            padding: 0 16px;
          }

          .hero-title {
            font-size: 42px;
          }

          .filter-box {
            padding: 22px;
            border-radius: 26px;
          }

          .property-card {
            height: 280px !important;
          }

          .card-content {
            padding: 22px;
          }

          .card-title {
            font-size: 28px !important;
          }
        }
      `}</style>

      <section className="property-section">
        <div className="property-container">
          {/* HEADER */}

          <div className="row align-items-end">
            <div className="col-lg-8">
              <div className="top-badge">
                <div className="top-line"></div>
                <span className="top-text">
                  Premium Collection
                </span>
              </div>

              <h1 className="hero-title">
                Property for Sale
                <br />
                <span>in Rajasthan</span>
              </h1>
            </div>

            <div className="col-lg-4">
              <p className="hero-para">
                Explore premium residences, commercial hubs &
                ultra luxury villas crafted for modern lifestyle.
              </p>
            </div>
          </div>

          {/* FILTER */}

          <div className="filter-box">
            <div className="d-flex flex-wrap gap-2 mb-4">
              {typeOptions.map((t) => (
                <button
                  key={t}
                  onClick={() => setType(t)}
                  className={`chip ${
                    type === t ? "active" : ""
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            <div className="row g-3 align-items-center">
              <div className="col-lg-9">
                <div className="search-wrap">
                  <svg
                    className="search-icon"
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
                    className="search-input"
                    placeholder="Search premium properties..."
                    value={search}
                    onChange={(e) =>
                      setSearch(e.target.value)
                    }
                  />
                </div>
              </div>

              <div className="col-lg-3">
                <button className="search-btn">
                  Search Property
                </button>
              </div>
            </div>
          </div>

          {/* GRID */}

          <div className="row g-4">
            {filtered.map((item) => (
              <div
                key={item.id}
                className={
                  item.size === "hero"
                    ? "col-lg-6"
                    : item.size === "wide"
                    ? "col-lg-6"
                    : "col-lg-3 col-md-6"
                }
              >
                <Link
                  href="/Home/propertiesdetailspage"
                  className="text-decoration-none"
                >
                  <div
                    className="property-card"
                    style={{
                      height:
                        item.size === "hero"
                          ? "620px"
                          : item.size === "tall"
                          ? "620px"
                          : item.size === "wide"
                          ? "360px"
                          : "300px",
                    }}
                  >
                    <img src={item.image} alt={item.title} />

                    <div className="card-overlay"></div>

                    <div className="glow"></div>

                    {item.badge && (
                      <div className="badge-custom">
                        {item.badge}
                      </div>
                    )}

                    <div className="card-content">
                      <div className="card-type">
                        {item.type}
                      </div>

                      <h3
                        className={`card-title ${
                          item.size === "small"
                            ? "small-title"
                            : ""
                        }`}
                      >
                        {item.title}
                      </h3>

                      <div className="info-wrap">
                        <span className="info-text">
                          {item.listings} listings
                        </span>

                        <span className="dot"></span>

                        <span className="info-text">
                          {item.price}
                        </span>

                        <span className="dot"></span>

                        <span className="info-text">
                          {item.beds} Beds
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}