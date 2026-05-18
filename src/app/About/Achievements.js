"use client";

import { useEffect, useState } from "react";

const statsData = [
  { label: "Happy Clients", value: 10000, suffix: "+" },
  { label: "Properties Sold", value: 1200, suffix: "+" },
  { label: "Cities Covered", value: 25, suffix: "+" },
  { label: "Years Experience", value: 12, suffix: "+" },
];

export default function Achievements() {
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const duration = 2500;
    const frameRate = 30;
    const steps = duration / frameRate;

    const intervals = statsData.map((item, index) => {
      const increment = item.value / steps;

      return setInterval(() => {
        setCounts((prev) => {
          const updated = [...prev];

          if (updated[index] < item.value) {
            updated[index] = Math.min(
              item.value,
              updated[index] + increment
            );
          }

          return updated;
        });
      }, frameRate);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section className="achievements-section relative py-24 overflow-hidden">
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .achievements-section {
          background: var(--background);
          font-family: var(--font-body);
        }

        .fade-up {
          opacity: 0;
          animation: fadeUp 0.8s ease forwards;
        }

        .stats-card {
          position: relative;
          overflow: hidden;
          border-radius: calc(var(--radius) + 8px);
          border: 1px solid var(--border);
          background: rgba(255,255,255,0.82);
          backdrop-filter: blur(18px);
          padding: 2rem;
          text-align: center;
          box-shadow: var(--shadow-sm);
          transition: var(--transition);
        }

        .stats-card:hover {
          transform: translateY(-8px);
          border-color: rgba(245,158,11,0.28);
          box-shadow:
            0 20px 50px rgba(245,158,11,0.14),
            var(--shadow-md);
        }

        .stats-card::before {
          content: "";
          position: absolute;
          top: -80px;
          right: -80px;
          width: 180px;
          height: 180px;
          border-radius: 999px;
          background: radial-gradient(
            circle,
            rgba(245,158,11,0.16) 0%,
            transparent 70%
          );
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .stats-card:hover::before {
          opacity: 1;
        }

        .stats-line {
          width: 42px;
          height: 2px;
          margin: 1rem auto;
          border-radius: 999px;
          background: linear-gradient(
            90deg,
            var(--primary),
            var(--primary-light)
          );
          transition: width 0.35s ease;
        }

        .stats-card:hover .stats-line {
          width: 64px;
        }

        .stats-number {
          font-family: var(--font-heading);
          font-size: clamp(2.2rem, 4vw, 3.3rem);
          font-weight: 700;
          line-height: 1;
          letter-spacing: -0.03em;
          color: var(--text);
        }

        .stats-label {
          color: var(--text-light);
          font-size: 0.95rem;
          line-height: 1.6;
          font-weight: 500;
        }

        .section-title {
          font-family: var(--font-heading);
          font-size: clamp(2.8rem, 5vw, 4.6rem);
          font-weight: 700;
          line-height: 1;
          letter-spacing: -0.03em;
          color: var(--text);
        }

        .section-title span {
          color: var(--primary);
          font-style: italic;
          font-weight: 500;
        }

        .section-subtitle {
          color: var(--text-light);
          font-size: 1rem;
          margin-top: 1rem;
          line-height: 1.8;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 8px 18px;
          border-radius: 999px;
          border: 1px solid var(--border);
          background: rgba(255,255,255,0.8);
          backdrop-filter: blur(14px);
          box-shadow: var(--shadow-sm);
          margin-bottom: 1.5rem;
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: var(--primary);
          box-shadow: 0 0 16px rgba(245,158,11,0.45);
        }

        .badge-text {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: var(--primary);
        }
      `}</style>

      {/* Ambient Glow */}
      <div className="absolute top-[-140px] left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[rgba(245,158,11,0.10)] blur-[150px] rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16 fade-up">
          <div className="badge mx-auto w-fit">
            <span className="badge-dot" />
            <span className="badge-text">Our Success</span>
          </div>

          <h2 className="section-title">
            Our <span>Achievements</span>
          </h2>

          <p className="section-subtitle">
            Built with trust, luxury, innovation & long-term value
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {statsData.map((item, i) => (
            <div
              key={i}
              className="stats-card fade-up"
              style={{
                animationDelay: `${i * 140}ms`,
              }}
            >
              {/* Number */}
              <h3 className="stats-number">
                {Math.floor(counts[i])}
                {item.suffix}
              </h3>

              {/* Line */}
              <div className="stats-line" />

              {/* Label */}
              <p className="stats-label">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}