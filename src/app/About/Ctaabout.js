"use client";

export default function CTASection() {
  return (
    <section className="cta-section relative py-24 overflow-hidden">
      <style>{`
        .cta-section {
          background: var(--background);
          font-family: var(--font-body);
        }

        .cta-card {
          position: relative;
          overflow: hidden;
          border-radius: calc(var(--radius) + 14px);
          border: 1px solid var(--border);
          background: rgba(255,255,255,0.82);
          backdrop-filter: blur(20px);
          box-shadow: var(--shadow-md);
        }

        .cta-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              120deg,
              transparent 0%,
              rgba(245,158,11,0.08) 40%,
              rgba(15,61,145,0.06) 100%
            );
          pointer-events: none;
        }

        .cta-glow {
          position: absolute;
          top: -120px;
          left: 50%;
          transform: translateX(-50%);
          width: 700px;
          height: 360px;
          border-radius: 999px;
          background: rgba(245,158,11,0.10);
          filter: blur(150px);
          pointer-events: none;
        }

        .cta-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 8px 18px;
          border-radius: 999px;
          border: 1px solid var(--border);
          background: rgba(255,255,255,0.75);
          backdrop-filter: blur(14px);
          box-shadow: var(--shadow-sm);
          margin-bottom: 1.5rem;
        }

        .cta-badge-dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: var(--primary);
          box-shadow: 0 0 14px rgba(245,158,11,0.45);
        }

        .cta-badge-text {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: var(--primary);
        }

        .cta-title {
          font-family: var(--font-heading);
          font-size: clamp(2.7rem, 5vw, 4.8rem);
          line-height: 1.05;
          font-weight: 700;
          letter-spacing: -0.03em;
          color: var(--text);
        }

        .cta-title span {
          color: var(--primary);
          font-style: italic;
          font-weight: 500;
        }

        .cta-text {
          margin-top: 1.4rem;
          color: var(--text-light);
          font-size: 1rem;
          line-height: 1.9;
          max-width: 680px;
          margin-inline: auto;
        }

        .cta-btn {
          position: relative;
          overflow: hidden;
          margin-top: 2.2rem;
          padding: 1rem 2.4rem;
          border-radius: 999px;
          border: none;
          background: linear-gradient(
            135deg,
            var(--primary),
            var(--primary-dark)
          );
          color: var(--white);
          font-family: var(--font-body);
          font-size: 0.95rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          cursor: pointer;
          transition: var(--transition);
          box-shadow:
            0 14px 34px rgba(245,158,11,0.22);
        }

        .cta-btn:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow:
            0 20px 44px rgba(245,158,11,0.30);
        }

        .cta-btn::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              120deg,
              transparent,
              rgba(255,255,255,0.22),
              transparent
            );
          transform: translateX(-120%);
          transition: transform 0.7s ease;
        }

        .cta-btn:hover::before {
          transform: translateX(120%);
        }

        .cta-border-line {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(245,158,11,0.10),
              transparent
            );
          opacity: 0.9;
          pointer-events: none;
        }
      `}</style>

      {/* Ambient Glow */}
      <div className="cta-glow" />

      <div className="relative max-w-5xl mx-auto px-6">
        <div className="cta-card px-8 md:px-14 py-16 text-center">
          <div className="cta-border-line" />

          <div className="relative z-10">
            {/* Badge */}
            <div className="cta-badge">
              <span className="cta-badge-dot" />
              <span className="cta-badge-text">
                Premium Properties
              </span>
            </div>

            {/* Heading */}
            <h2 className="cta-title">
              Find Your Dream Property
              <br />
              in <span>Rajasthan</span>
            </h2>

            {/* Description */}
            <p className="cta-text">
              Explore luxury homes, premium villas, and investment
              opportunities crafted for modern lifestyles and timeless living.
            </p>

            {/* Button */}
            <button className="cta-btn">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}