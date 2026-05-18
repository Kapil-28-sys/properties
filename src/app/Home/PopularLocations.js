"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const rajasthanLocations = [
  { id: 1, name: "Ajmer", image: "https://www.rajasthantourpackages.in/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fx7ulapdbp%2F2edd1481-8338-419b-a9ea-06354e9b2300-ana-sagar-lake-ajmer-tour.jpg&w=3840&q=75", properties: 420, featured: false },
  { id: 2, name: "Alwar", image: "https://www.revv.co.in/blogs/wp-content/uploads/2020/05/road-trip-delhi-to-alwar.jpg", properties: 380, featured: false },
  { id: 3, name: "Bharatpur", image: "https://upload.wikimedia.org/wikipedia/commons/3/30/Purana_mehal.jpg", properties: 290, featured: false },
  { id: 4, name: "Bikaner", image: "https://static.tripclap.com/uploads/story/850X450/1667751632-1667751632-9801e.webp", properties: 510, featured: false },
  { id: 5, name: "Chittorgarh", image: "https://magikindia.com/wp-content/uploads/2018/08/chittorgarh-fort-1024x683.jpg", properties: 260, featured: false },
  { id: 6, name: "Jaipur", image: "https://www.agoda.com/wp-content/uploads/2024/05/Nahargarh-Fort-jaipur-india-1244x700.jpg", properties: 1200, featured: true },
  { id: 7, name: "Udaipur", image: "https://beantowntraveller.com/wp-content/uploads/2020/02/UNADJUSTEDNONRAW_thumb_b808-1024x680.jpg", properties: 860, featured: true },
  { id: 8, name: "Jaisalmer", image: "https://www.thepalaceonwheels.org/storage/jaislamer_fort_night_view_1914%20(1).jpg", properties: 640, featured: true },
];

export default function PopularLocations() {
  const router = useRouter();
  const [showAll, setShowAll] = useState(false);

  const visibleLocations = showAll
    ? rajasthanLocations
    : rajasthanLocations.slice(0, 8);

  return (
    <section className="pl-section">
      <style>{`
       
        .pl-section {
          background: var(--background);
          padding: 4rem 1.5rem;
          font-family: 'Jost', sans-serif;
          position: relative;
          overflow: hidden;
        }

        /* ---------- map watermark ---------- */
        .pl-map-bg {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: min(900px, 140%);
          opacity: 0.04;
          pointer-events: none;
          z-index: 0;
        }

        .pl-inner { position: relative; z-index: 1; }

        /* ---------- header ---------- */
        .pl-header { text-align: center; margin-bottom: 2.5rem; }

        .pl-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: var(--primary);
          margin-bottom: .75rem;
        }
        .pl-eyebrow::before,
        .pl-eyebrow::after {
          content: '';
          display: block;
          width: 28px;
          height: 1px;
          background: var(--primary);
        }

        .pl-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 600;
          color: var(--text);
          margin: 0 0 .5rem;
          line-height: 1.15;
        }

        .pl-subtitle {
          font-size: 14px;
          color: var(--text-light);
          margin: 0;
        }

        /* ---------- grid ---------- */
        .pl-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          max-width: 900px;
          margin: 0 auto;
        }

        @media (max-width: 640px) {
          .pl-grid { grid-template-columns: repeat(2, 1fr); }
        }

        /* ---------- card ---------- */
        .pl-card {
          background: var(--white);
          border: 0.5px solid var(--border);
          border-radius: var(--radius);
          overflow: hidden;
          cursor: pointer;
          transition: var(--transition);
        }
        .pl-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-md);
          border-color: var(--primary-light);
        }

        /* image */
        .pl-img-wrap {
          position: relative;
          height: 140px;
          overflow: hidden;
        }
        .pl-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform .5s ease;
        }
        .pl-card:hover .pl-img-wrap img { transform: scale(1.08); }

        .pl-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,.48) 0%, transparent 60%);
        }

        .pl-badge {
          position: absolute;
          top: 10px; left: 10px;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: .06em;
          padding: 3px 10px;
          border-radius: 99px;
          background: var(--primary);
          color: #fff;
        }

        /* body */
        .pl-body { padding: 14px 14px 12px; }

        .pl-name {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text);
          margin: 0 0 2px;
          transition: color .25s;
        }
        .pl-card:hover .pl-name { color: var(--primary-dark); }

        .pl-count {
          font-size: 12px;
          color: var(--text-light);
          margin: 0 0 12px;
        }

        .pl-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .pl-explore {
          font-size: 11px;
          color: var(--text-light);
          letter-spacing: .04em;
        }

        .pl-arrow {
          width: 30px; height: 30px;
          border-radius: 50%;
          background: #fef3c7;
          color: var(--primary-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          transition: var(--transition);
        }
        .pl-card:hover .pl-arrow {
          background: var(--primary);
          color: #fff;
        }

        /* ---------- button ---------- */
        .pl-btn-wrap { text-align: center; margin-top: 2.5rem; }

        .pl-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 32px;
          border-radius: 99px;
          background: var(--secondary);
          color: #fff;
          font-family: 'Jost', sans-serif;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: .04em;
          border: none;
          cursor: pointer;
          transition: var(--transition);
          box-shadow: var(--shadow-sm);
        }
        .pl-btn:hover { background: var(--primary); }
      `}</style>

      {/* Map watermark */}
      <img
        className="pl-map-bg"
        src="https://static.vecteezy.com/system/resources/previews/038/097/442/non_2x/rajasthan-india-outline-map-vector.jpg"
        alt=""
        aria-hidden="true"
      />

      <div className="pl-inner">
        {/* Header */}
        <div className="pl-header">
          <div className="pl-eyebrow">Discover</div>
          <h2 className="pl-title">Explore Rajasthan</h2>
          <p className="pl-subtitle">Discover districts through premium property insights</p>
        </div>

        {/* Grid */}
        <div className="pl-grid">
          {visibleLocations.map((loc) => (
            <div
              key={loc.id}
              className="pl-card"
              onClick={() => router.push(`/Home/propertyLocationGrid`)}
            >
              <div className="pl-img-wrap">
                <img src={loc.image} alt={loc.name} loading="lazy" />
                <div className="pl-img-overlay" />
                {loc.featured && <span className="pl-badge">Featured</span>}
              </div>

              <div className="pl-body">
                <p className="pl-name">{loc.name}</p>
                <p className="pl-count">{loc.properties.toLocaleString()} properties</p>
                <div className="pl-footer">
                  <span className="pl-explore">Explore</span>
                  <div className="pl-arrow">→</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Toggle button */}
        <div className="pl-btn-wrap">
          <button className="pl-btn" onClick={() => setShowAll(!showAll)}>
            {showAll ? "↑ Show less" : "🗺 Explore all districts"}
          </button>
        </div>
      </div>
    </section>
  );
}