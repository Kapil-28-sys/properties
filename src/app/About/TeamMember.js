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
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Syne:wght@400;500;700&display=swap');

        /* ── Palette ──
           bg:       #faf7f2  warm parchment
           surface:  #ffffff
           border:   rgba(0,0,0,0.07)
           accent:   #c9963a  warm gold
           text:     #1e1a17  warm near-black
           muted:    #8c7b6e  warm taupe
        */

        .team-section {
          font-family: 'Syne', sans-serif;
          background: #faf7f2;
          min-height: 100vh;
          position: relative;
          overflow: hidden;
        }

        .team-section::before {
          content: '';
          position: absolute;
          top: -20%;
          left: -5%;
          width: 480px;
          height: 480px;
          background: radial-gradient(circle, rgba(201,150,58,0.10) 0%, transparent 70%);
          pointer-events: none;
        }

        .team-section::after {
          content: '';
          position: absolute;
          bottom: -15%;
          right: -8%;
          width: 380px;
          height: 380px;
          background: radial-gradient(circle, rgba(201,150,58,0.07) 0%, transparent 70%);
          pointer-events: none;
        }

        .eyebrow {
          font-family: 'Syne', sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #c9963a;
        }

        .section-title {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-size: clamp(3rem, 6vw, 5rem);
          line-height: 1;
          color: #1e1a17;
          letter-spacing: -0.02em;
        }

        .section-title em {
          font-style: italic;
          color: #c9963a;
        }

        .section-subtitle {
          margin-top: 1.2rem;
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.1rem;
          font-weight: 300;
          color: #8c7b6e;
          max-width: 420px;
          line-height: 1.7;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.5rem;
        }

        .card {
          position: relative;
          background: #ffffff;
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          transition: box-shadow 0.4s ease, transform 0.35s ease, border-color 0.35s ease;
          box-shadow: 0 2px 12px rgba(0,0,0,0.04);
        }

        .card.is-hovered {
          transform: translateY(-5px);
          box-shadow: 0 16px 48px rgba(201,150,58,0.16), 0 4px 16px rgba(0,0,0,0.06);
          border-color: rgba(201,150,58,0.40);
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
          font-family: 'Cormorant Garamond', serif;
          font-size: 0.8rem;
          color: rgba(201,150,58,0.40);
          letter-spacing: 0.2em;
          margin-bottom: 1.4rem;
          transition: color 0.3s ease;
        }

        .card.is-hovered .card-number {
          color: #c9963a;
        }

        .card-image-wrap {
          position: relative;
          width: 76px;
          height: 76px;
          margin-bottom: 1.4rem;
        }

        .card-image-wrap::before {
          content: '';
          position: absolute;
          inset: -3px;
          border-radius: 50%;
          background: conic-gradient(from 0deg, transparent 55%, rgba(201,150,58,0.70) 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
          animation: spin 4s linear infinite;
        }

        .card.is-hovered .card-image-wrap::before {
          opacity: 1;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .card-image {
          width: 76px;
          height: 76px;
          border-radius: 50%;
          object-fit: cover;
          position: relative;
          z-index: 1;
          transition: transform 0.4s ease;
          border: 2px solid rgba(0,0,0,0.07);
        }

        .card.is-hovered .card-image {
          transform: scale(1.05);
        }

        .card-name {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 1.05rem;
          color: #1e1a17;
          letter-spacing: -0.01em;
          margin-bottom: 0.25rem;
        }

        .card-role {
          font-size: 0.68rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #c9963a;
          margin-bottom: 1.1rem;
          font-weight: 500;
        }

        .card-bio {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-size: 1rem;
          line-height: 1.65;
          color: #a0918a;
          flex: 1;
          transition: color 0.3s ease;
        }

        .card.is-hovered .card-bio {
          color: #7a6f68;
        }

        .card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 1.4rem;
          padding-top: 1.1rem;
          border-top: 1px solid rgba(0,0,0,0.06);
        }

        .card-line {
          height: 1px;
          width: 0;
          background: linear-gradient(90deg, #c9963a, transparent);
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
          width: 30px;
          height: 30px;
          border-radius: 50%;
          border: 1px solid rgba(0,0,0,0.09);
          background: transparent;
          color: #b0a59e;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .card.is-hovered .social-btn {
          border-color: rgba(201,150,58,0.50);
          color: #c9963a;
          background: rgba(201,150,58,0.07);
        }

        .social-btn:hover {
          background: rgba(201,150,58,0.15) !important;
          transform: scale(1.12);
        }

        .ambient-glow {
          position: absolute;
          bottom: -50px;
          right: -50px;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(201,150,58,0.12) 0%, transparent 70%);
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

        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0); }
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
        <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>

          {/* Header */}
          <div className="heading-fade" style={{ marginBottom: "3.5rem" }}>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>— The people</p>
            <h2 className="section-title">
              Built by <em>remarkable</em><br />humans
            </h2>
            <p className="section-subtitle">
              A small, dedicated team obsessed with craft, quality, and building things that matter.
            </p>
          </div>

          {/* Grid */}
          <div className="team-grid">
            {team.map((member, i) => (
              <div
                key={i}
                className={`card fade-in ${hovered === i ? "is-hovered" : ""}`}
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
                      <a href={member.socials.twitter} className="social-btn" aria-label="Twitter">
                        <TwitterIcon />
                      </a>
                      <a href={member.socials.linkedin} className="social-btn" aria-label="LinkedIn">
                        <LinkedInIcon />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom accent */}
          <div style={{
            marginTop: "3rem",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            opacity: 0.45
          }}>
            <div style={{ height: "1px", flex: 1, background: "rgba(0,0,0,0.1)" }} />
            <span style={{ fontFamily: "'Syne', sans-serif", fontSize: "0.65rem", letterSpacing: "0.2em", color: "#c9963a", textTransform: "uppercase" }}>
              Est. 2024
            </span>
            <div style={{ height: "1px", flex: 1, background: "rgba(0,0,0,0.1)" }} />
          </div>

        </div>
      </section>
    </>
  );
}