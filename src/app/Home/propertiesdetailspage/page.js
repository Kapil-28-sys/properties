"use client";

import { useState } from "react";

export default function PropertyDetailsPage() {
  const property = {
    title: "Luxury Villa in Goa",
    location: "Goa, India",
    price: "₹85,00,000",
    description:
      "Experience premium luxury living with this modern villa featuring spacious interiors, ocean views, private garden, swimming pool, and elegant architecture.",

    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop",
    ],

    details: {
      type: "Villa",
      area: "4,500 sqft",
      bedrooms: "4 Bedrooms",
      bathrooms: "3 Bathrooms",
      parking: "2 Parking",
      furnishing: "Fully Furnished",
      facing: "Sea View",
      status: "Available",
    },
  };

  const [currentImage, setCurrentImage] = useState(0);

  const nextSlide = () =>
    setCurrentImage((prev) =>
      prev === property.images.length - 1 ? 0 : prev + 1
    );

  const prevSlide = () =>
    setCurrentImage((prev) =>
      prev === 0 ? property.images.length - 1 : prev - 1
    );

  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@400;500;600;700&display=swap");

        /* ── BASE ── */
        .pdp-section {
          background: var(--background);
          min-height: 100vh;
          font-family: "DM Sans", sans-serif;
          color: var(--text);
        }

        /* ── HERO ── */
        .pdp-hero {
          position: relative;
          width: 100%;
          height: 90vh;
          overflow: hidden;
        }

        .pdp-hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.7s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .pdp-hero-dim {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.72) 0%,
            rgba(0, 0, 0, 0.25) 55%,
            rgba(0, 0, 0, 0.05) 100%
          );
        }

        /* hero content */
        .pdp-hero-content {
          position: absolute;
          bottom: 72px;
          left: 0;
          width: 100%;
          padding: 0 40px;
          z-index: 10;
        }

        .pdp-hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 18px;
        }

        .pdp-hero-eyebrow-line {
          width: 36px;
          height: 2px;
          background: var(--primary);
          border-radius: 2px;
        }

        .pdp-hero-eyebrow-text {
          color: var(--primary-light);
          font-size: 10px;
          letter-spacing: 4px;
          text-transform: uppercase;
          font-weight: 700;
        }

        .pdp-hero-title {
          font-family: "DM Serif Display", serif;
          font-size: 72px;
          color: var(--white);
          line-height: 1;
          margin: 0 0 20px;
          letter-spacing: -1.5px;
        }

        .pdp-hero-meta {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }

        .pdp-hero-location {
          color: rgba(255, 255, 255, 0.82);
          font-size: 16px;
        }

        .pdp-hero-divider {
          width: 1px;
          height: 22px;
          background: rgba(255, 255, 255, 0.3);
        }

        .pdp-hero-price {
          font-size: 22px;
          font-weight: 700;
          color: var(--primary-light);
          font-family: "DM Sans", sans-serif;
        }

        /* slider buttons */
        .pdp-slider-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 20;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          border: 1.5px solid rgba(255, 255, 255, 0.3);
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(10px);
          color: var(--white);
          font-size: 20px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition);
        }

        .pdp-slider-btn:hover {
          background: var(--primary);
          border-color: var(--primary);
          transform: translateY(-50%) scale(1.08);
        }

        .pdp-slider-prev { left: 22px; }
        .pdp-slider-next { right: 22px; }

        /* thumbnails */
        .pdp-thumbs {
          position: absolute;
          bottom: 22px;
          right: 22px;
          z-index: 20;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .pdp-thumb-btn {
          width: 76px;
          height: 76px;
          border-radius: 14px;
          overflow: hidden;
          border: 2.5px solid transparent;
          padding: 0;
          cursor: pointer;
          transition: var(--transition);
          opacity: 0.65;
        }

        .pdp-thumb-btn.active {
          border-color: var(--primary);
          opacity: 1;
          transform: scale(1.06);
        }

        .pdp-thumb-btn img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* ── MAIN BODY ── */
        .pdp-body {
          max-width: 1440px;
          margin: 0 auto;
          padding: 72px 40px;
        }

        .pdp-layout {
          display: grid;
          grid-template-columns: 1.7fr 0.9fr;
          gap: 28px;
          align-items: start;
        }

        /* ── CARDS ── */
        .pdp-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 36px;
          box-shadow: var(--shadow-sm);
        }

        .pdp-card + .pdp-card {
          margin-top: 24px;
        }

        /* section label */
        .pdp-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 14px;
        }

        .pdp-label-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--primary);
          flex-shrink: 0;
        }

        .pdp-label-text {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 3.5px;
          text-transform: uppercase;
          color: var(--primary-dark);
          font-family: "DM Sans", sans-serif;
        }

        /* card headings */
        .pdp-card-heading {
          font-family: "DM Serif Display", serif;
          font-size: 42px;
          color: var(--text);
          margin: 0 0 20px;
          letter-spacing: -0.5px;
          line-height: 1.05;
        }

        .pdp-card-para {
          color: var(--text-light);
          line-height: 1.9;
          font-size: 15px;
        }

        /* property detail tiles */
        .pdp-details-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .pdp-detail-tile {
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 18px 20px;
          transition: var(--transition);
        }

        .pdp-detail-tile:hover {
          border-color: var(--secondary-light);
          box-shadow: var(--shadow-sm);
        }

        .pdp-detail-key {
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--text-light);
          font-weight: 600;
          margin-bottom: 6px;
        }

        .pdp-detail-val {
          font-size: 15px;
          font-weight: 600;
          color: var(--text);
        }

        /* amenity chips */
        .pdp-amenities-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        .pdp-amenity {
          background: var(--background);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 14px 16px;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: var(--transition);
        }

        .pdp-amenity:hover {
          border-color: var(--primary);
          background: var(--white);
        }

        .pdp-amenity-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--secondary);
          flex-shrink: 0;
        }

        .pdp-amenity-text {
          font-size: 13.5px;
          font-weight: 500;
          color: var(--text);
        }

        /* ── RIGHT SIDEBAR / FORM ── */
        .pdp-sidebar {
          position: sticky;
          top: 24px;
        }

        .pdp-form-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 36px;
          box-shadow: var(--shadow-sm);
        }

        .pdp-form-title {
          font-family: "DM Serif Display", serif;
          font-size: 38px;
          color: var(--text);
          margin: 0 0 6px;
          line-height: 1.1;
        }

        .pdp-form-sub {
          color: var(--text-light);
          font-size: 14px;
          margin-bottom: 28px;
          line-height: 1.6;
        }

        /* form fields */
        .pdp-field {
          margin-bottom: 16px;
        }

        .pdp-field label {
          display: block;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: var(--text-light);
          margin-bottom: 8px;
        }

        .pdp-input,
        .pdp-textarea {
          width: 100%;
          border: 1.5px solid var(--border);
          border-radius: 12px;
          background: var(--background);
          color: var(--text);
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          outline: none;
          transition: var(--transition);
        }

        .pdp-input {
          height: 52px;
          padding: 0 18px;
        }

        .pdp-textarea {
          padding: 14px 18px;
          resize: none;
          height: 120px;
        }

        .pdp-input::placeholder,
        .pdp-textarea::placeholder {
          color: var(--text-light);
          opacity: 0.7;
        }

        .pdp-input:focus,
        .pdp-textarea:focus {
          border-color: var(--secondary-light);
          background: var(--white);
          box-shadow: 0 0 0 4px rgba(15, 61, 145, 0.06);
        }

        /* submit btn */
        .pdp-submit-btn {
          width: 100%;
          height: 52px;
          border-radius: 12px;
          border: none;
          background: var(--secondary);
          color: var(--white);
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.5px;
          cursor: pointer;
          transition: var(--transition);
          margin-top: 4px;
        }

        .pdp-submit-btn:hover {
          background: var(--secondary-dark);
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        /* quick info strip */
        .pdp-quick-info {
          margin-top: 28px;
          padding-top: 24px;
          border-top: 1px solid var(--border);
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .pdp-qi-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .pdp-qi-label {
          font-size: 13px;
          color: var(--text-light);
        }

        .pdp-qi-value {
          font-size: 14px;
          font-weight: 600;
          color: var(--text);
        }

        .pdp-qi-value.available {
          color: var(--accent);
          background: rgba(63, 163, 77, 0.08);
          border-radius: 999px;
          padding: 3px 12px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .pdp-qi-value.price-val {
          color: var(--primary-dark);
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .pdp-layout {
            grid-template-columns: 1fr;
          }

          .pdp-sidebar {
            position: static;
          }

          .pdp-hero-title { font-size: 52px; }
        }

        @media (max-width: 767px) {
          .pdp-hero-content { padding: 0 20px; bottom: 80px; }
          .pdp-hero-title { font-size: 36px; }
          .pdp-body { padding: 48px 18px; }
          .pdp-card { padding: 24px; }
          .pdp-form-card { padding: 24px; }
          .pdp-details-grid { grid-template-columns: 1fr; }
          .pdp-amenities-grid { grid-template-columns: 1fr 1fr; }
          .pdp-thumbs { display: none; }
          .pdp-card-heading { font-size: 32px; }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .pdp-fadein {
          animation: fadeUp 0.7s ease forwards;
        }
      `}</style>

      <section className="pdp-section">

        {/* ── HERO ── */}
        <div className="pdp-hero">
          <img
            src={property.images[currentImage]}
            alt="Property"
            className="pdp-hero-img"
          />
          <div className="pdp-hero-dim" />

          {/* content */}
          <div className="pdp-hero-content">
            <div className="pdp-hero-eyebrow">
              <div className="pdp-hero-eyebrow-line" />
              <span className="pdp-hero-eyebrow-text">Premium Property</span>
            </div>
            <h1 className="pdp-hero-title">{property.title}</h1>
            <div className="pdp-hero-meta">
              <span className="pdp-hero-location">{property.location}</span>
              <div className="pdp-hero-divider" />
              <span className="pdp-hero-price">{property.price}</span>
            </div>
          </div>

          {/* slider controls */}
          <button onClick={prevSlide} className="pdp-slider-btn pdp-slider-prev">←</button>
          <button onClick={nextSlide} className="pdp-slider-btn pdp-slider-next">→</button>

          {/* thumbnails */}
          <div className="pdp-thumbs">
            {property.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setCurrentImage(i)}
                className={`pdp-thumb-btn ${currentImage === i ? "active" : ""}`}
              >
                <img src={img} alt={`thumb-${i}`} />
              </button>
            ))}
          </div>
        </div>

        {/* ── BODY ── */}
        <div className="pdp-body">
          <div className="pdp-layout">

            {/* LEFT */}
            <div className="pdp-fadein">

              {/* About */}
              <div className="pdp-card">
                <div className="pdp-label">
                  <div className="pdp-label-dot" />
                  <span className="pdp-label-text">About Property</span>
                </div>
                <h2 className="pdp-card-heading">Modern Luxury<br />Living Experience</h2>
                <p className="pdp-card-para">{property.description}</p>
              </div>

              {/* Property Details */}
              <div className="pdp-card">
                <div className="pdp-label">
                  <div className="pdp-label-dot" />
                  <span className="pdp-label-text">Property Details</span>
                </div>
                <h3 className="pdp-card-heading" style={{ fontSize: "34px" }}>
                  Specifications
                </h3>
                <div className="pdp-details-grid">
                  {Object.entries(property.details).map(([key, value]) => (
                    <div key={key} className="pdp-detail-tile">
                      <div className="pdp-detail-key">{key}</div>
                      <div className="pdp-detail-val">{value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div className="pdp-card">
                <div className="pdp-label">
                  <div className="pdp-label-dot" />
                  <span className="pdp-label-text">Features & Amenities</span>
                </div>
                <h3 className="pdp-card-heading" style={{ fontSize: "34px" }}>
                  What's Included
                </h3>
                <div className="pdp-amenities-grid">
                  {[
                    "Swimming Pool",
                    "Private Garden",
                    "Gym Area",
                    "Smart Home",
                    "Sea Facing",
                    "Kids Play Area",
                    "Modern Kitchen",
                    "Security System",
                    "Luxury Interiors",
                  ].map((feature) => (
                    <div key={feature} className="pdp-amenity">
                      <div className="pdp-amenity-dot" />
                      <span className="pdp-amenity-text">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT — sticky form */}
            <div className="pdp-sidebar pdp-fadein">
              <div className="pdp-form-card">
                <h3 className="pdp-form-title">Interested?</h3>
                <p className="pdp-form-sub">
                  Fill the form and our agent will contact you shortly.
                </p>

                <div>
                  <div className="pdp-field">
                    <label>Full Name</label>
                    <input type="text" className="pdp-input" placeholder="Enter your name" />
                  </div>

                  <div className="pdp-field">
                    <label>Phone Number</label>
                    <input type="text" className="pdp-input" placeholder="Enter phone number" />
                  </div>

                  <div className="pdp-field">
                    <label>Email Address</label>
                    <input type="email" className="pdp-input" placeholder="Enter email" />
                  </div>

                  <div className="pdp-field">
                    <label>Message</label>
                    <textarea
                      className="pdp-textarea"
                      placeholder="I am interested in this property..."
                    />
                  </div>

                  <button className="pdp-submit-btn">Submit Enquiry</button>
                </div>

                {/* Quick info */}
                <div className="pdp-quick-info">
                  <div className="pdp-qi-row">
                    <span className="pdp-qi-label">Price</span>
                    <span className="pdp-qi-value price-val">{property.price}</span>
                  </div>
                  <div className="pdp-qi-row">
                    <span className="pdp-qi-label">Type</span>
                    <span className="pdp-qi-value">Villa</span>
                  </div>
                  <div className="pdp-qi-row">
                    <span className="pdp-qi-label">Status</span>
                    <span className="pdp-qi-value available">Available</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}