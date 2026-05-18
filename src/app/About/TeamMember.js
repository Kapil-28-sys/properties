"use client";

import { useState } from "react";

const team = [
  {
    name: "Aarav Sharma",
    role: "Founder & CEO",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    number: "01",
    bio: "Visionary leader with 10+ years building scalable products.",
    socials: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Meera Joshi",
    role: "UI/UX Designer",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
    number: "02",
    bio: "Crafting beautiful, user-first experiences that convert.",
    socials: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Rohan Mehta",
    role: "Full Stack Developer",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    number: "03",
    bio: "Engineering pixel-perfect frontends and rock-solid APIs.",
    socials: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Simran Kaur",
    role: "Marketing Head",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop&crop=face",
    number: "04",
    bio: "Growth strategist turning ideas into market momentum.",
    socials: { twitter: "#", linkedin: "#" },
  },
];

const TwitterIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.912-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function TeamMembers() {
  const [hovered, setHovered] = useState(null);

  return (
    <>
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }

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

        .team-section {
          background: var(--background);
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          font-family: var(--font-body);
        }

        .team-section::before {
          content: '';
          position: absolute;
          top: -20%;
          left: -5%;
          width: 480px;
          height: 480px;
          background: radial-gradient(
            circle,
            rgba(245,158,11,0.10) 0%,
            transparent 70%
          );
          pointer-events: none;
        }

        .team-section::after {
          content: '';
          position: absolute;
          bottom: -15%;
          right: -8%;
          width: 380px;
          height: 380px;
          background: radial-gradient(
            circle,
            rgba(15,61,145,0.08) 0%,
            transparent 70%
          );
          pointer-events: none;
        }

        .eyebrow {
          font-size: 0.72rem;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: var(--primary);
          font-weight: 600;
        }

        .section-title {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: clamp(3rem, 6vw, 5rem);
          line-height: 1;
          color: var(--text);
          letter-spacing: -0.03em;
        }

        .section-title em {
          font-style: italic;
          color: var(--primary);
          font-weight: 500;
        }

        .section-subtitle {
          margin-top: 1.2rem;
          font-size: 1rem;
          font-weight: 400;
          color: var(--text-light);
          max-width: 460px;
          line-height: 1.8;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.5rem;
        }

        .card {
          position: relative;
          background: rgba(255,255,255,0.85);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          overflow: hidden;
          cursor: pointer;
          backdrop-filter: blur(18px);
          transition: var(--transition);
          box-shadow: var(--shadow-sm);
        }

        .card.is-hovered {
          transform: translateY(-6px);
          border-color: rgba(245,158,11,0.35);
          box-shadow:
            0 20px 50px rgba(245,158,11,0.15),
            var(--shadow-md);
        }

        .card-inner {
          padding: 2.2rem 1.8rem;
          position: relative;
          z-index: 1;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .card-number {
          font-family: var(--font-heading);
          font-size: 0.9rem;
          color: rgba(245,158,11,0.45);
          letter-spacing: 0.2em;
          margin-bottom: 1.4rem;
          transition: var(--transition);
        }

        .card.is-hovered .card-number {
          color: var(--primary);
        }

        .card-image-wrap {
          position: relative;
          width: 78px;
          height: 78px;
          margin-bottom: 1.4rem;
        }

        .card-image-wrap::before {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          background: conic-gradient(
            from 0deg,
            transparent 55%,
            var(--primary) 100%
          );
          opacity: 0;
          transition: opacity 0.4s ease;
          animation: spin 4s linear infinite;
        }

        .card.is-hovered .card-image-wrap::before {
          opacity: 1;
        }

        .card-image {
          width: 78px;
          height: 78px;
          border-radius: 50%;
          object-fit: cover;
          position: relative;
          z-index: 1;
          border: 2px solid var(--border);
          transition: var(--transition);
        }

        .card.is-hovered .card-image {
          transform: scale(1.05);
        }

        .card-name {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.08rem;
          color: var(--text);
          letter-spacing: -0.01em;
          margin-bottom: 0.3rem;
        }

        .card-role {
          font-size: 0.72rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--primary);
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .card-bio {
          font-size: 0.96rem;
          line-height: 1.75;
          color: var(--text-light);
          flex: 1;
          transition: var(--transition);
        }

        .card.is-hovered .card-bio {
          color: var(--text);
        }

        .card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 1.5rem;
          padding-top: 1.1rem;
          border-top: 1px solid var(--border);
        }

        .card-line {
          height: 1px;
          width: 0;
          background: linear-gradient(
            90deg,
            var(--primary),
            transparent
          );
          transition: width 0.5s ease;
          flex: 1;
          margin-right: 1rem;
        }

        .card.is-hovered .card-line {
          width: 100%;
        }

        .social-links {
          display: flex;
          gap: 0.5rem;
        }

        .social-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1px solid var(--border);
          background: transparent;
          color: var(--text-light);
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: var(--transition);
        }

        .card.is-hovered .social-btn {
          border-color: rgba(245,158,11,0.35);
          color: var(--primary);
          background: rgba(245,158,11,0.08);
        }

        .social-btn:hover {
          transform: scale(1.1);
          background: rgba(245,158,11,0.15) !important;
        }

        .ambient-glow {
          position: absolute;
          bottom: -50px;
          right: -50px;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(245,158,11,0.15) 0%,
            transparent 70%
          );
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.5s ease;
        }

        .card.is-hovered .ambient-glow {
          opacity: 1;
        }

        .fade-in {
          opacity: 0;
          transform: translateY(18px);
          animation: fadeUp 0.65s forwards;
        }

        .fade-in:nth-child(1) { animation-delay: 0.08s; }
        .fade-in:nth-child(2) { animation-delay: 0.18s; }
        .fade-in:nth-child(3) { animation-delay: 0.28s; }
        .fade-in:nth-child(4) { animation-delay: 0.38s; }

        .heading-fade {
          opacity: 0;
          animation: fadeUp 0.75s 0.04s forwards;
        }
      `}</style>

      <section className="team-section py-28 px-6">
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Header */}
          <div className="heading-fade" style={{ marginBottom: "3.5rem" }}>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>
              — The people
            </p>

            <h2 className="section-title">
              Built by <em>remarkable</em>
              <br />
              humans
            </h2>

            <p className="section-subtitle">
              A small, dedicated team obsessed with craft, quality, and
              building things that matter.
            </p>
          </div>

          {/* Grid */}
          <div className="team-grid">
            {team.map((member, i) => (
              <div
                key={i}
                className={`card fade-in ${
                  hovered === i ? "is-hovered" : ""
                }`}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="ambient-glow" />

                <div className="card-inner">
                  <div className="card-number">{member.number}</div>

                  <div className="card-image-wrap">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="card-image"
                    />
                  </div>

                  <h3 className="card-name">{member.name}</h3>

                  <p className="card-role">{member.role}</p>

                  <p className="card-bio">{member.bio}</p>

                  <div className="card-footer">
                    <div className="card-line" />

                    <div className="social-links">
                      <a
                        href={member.socials.twitter}
                        className="social-btn"
                        aria-label="Twitter"
                      >
                        <TwitterIcon />
                      </a>

                      <a
                        href={member.socials.linkedin}
                        className="social-btn"
                        aria-label="LinkedIn"
                      >
                        <LinkedInIcon />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom accent */}
          <div
            style={{
              marginTop: "3rem",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              opacity: 0.55,
            }}
          >
            <div
              style={{
                height: "1px",
                flex: 1,
                background: "var(--border)",
              }}
            />

            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.72rem",
                letterSpacing: "0.2em",
                color: "var(--primary)",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              Est. 2024
            </span>

            <div
              style={{
                height: "1px",
                flex: 1,
                background: "var(--border)",
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
}