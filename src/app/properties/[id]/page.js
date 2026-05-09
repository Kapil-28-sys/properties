"use client";

import { useState, use } from "react";
import { useRouter } from "next/navigation";

const allProperties = [
  {
    id: 1,
    title: "Luxury Villa",
    location: "Mumbai",
    price: 4500000,
    type: "Villa",
    bedrooms: 4,
    bathrooms: 3,
    area: "3,800 sqft",
    floor: "G + 2",
    parking: "2 Covered",
    facing: "East",
    age: "New Construction",
    description:
      "A stunning luxury villa nestled in the heart of Mumbai, offering world-class interiors, lush private landscaping, and breathtaking city views. Designed for the discerning buyer who demands nothing but the best in luxury real estate.",
    features: ["4 Bedrooms", "3 Bathrooms", "Private Garden", "2 Parking", "City View", "Modern Kitchen", "Smart Home", "Security System"],
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
    ],
  },
  {
    id: 2,
    title: "Modern Apartment",
    location: "Delhi",
    price: 2200000,
    type: "Apartment",
    bedrooms: 3,
    bathrooms: 2,
    area: "1,900 sqft",
    floor: "7th Floor",
    parking: "1 Covered",
    facing: "North",
    age: "2 Years",
    description:
      "A sleek and contemporary apartment in Delhi's most sought-after neighbourhood. Floor-to-ceiling windows, premium fittings, and smart-home integration make this a truly modern living experience.",
    features: ["3 Bedrooms", "2 Bathrooms", "City View", "1 Parking", "Gym Access", "Modern Kitchen", "Smart Home", "24/7 Security"],
    images: [
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop",
    ],
  },
  {
    id: 3,
    title: "Premium Penthouse",
    location: "Bangalore",
    price: 6500000,
    type: "Penthouse",
    bedrooms: 5,
    bathrooms: 4,
    area: "5,200 sqft",
    floor: "Top Floor",
    parking: "3 Covered",
    facing: "West",
    age: "New Construction",
    description:
      "Perched atop Bangalore's skyline, this premium penthouse redefines luxury urban living. Private rooftop terrace, panoramic views of the city, and curated interiors crafted by award-winning designers.",
    features: ["5 Bedrooms", "4 Bathrooms", "Rooftop Terrace", "3 Parking", "Sky View", "Wine Cellar", "Smart Home", "Private Lift"],
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
    ],
  },
  {
    id: 4,
    title: "Beach Villa",
    location: "Goa",
    price: 8500000,
    type: "Villa",
    bedrooms: 4,
    bathrooms: 3,
    area: "4,500 sqft",
    floor: "G + 1",
    parking: "2 Covered",
    facing: "Sea Facing",
    age: "1 Year",
    description:
      "Experience premium luxury living with this modern beachfront villa featuring spacious interiors, ocean views, private garden, and swimming pool just steps from the shore.",
    features: ["4 Bedrooms", "3 Bathrooms", "Swimming Pool", "Private Garden", "2 Parking", "Sea View", "Modern Kitchen", "Smart Home"],
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
    ],
  },
  {
    id: 5,
    title: "Family House",
    location: "Jaipur",
    price: 1800000,
    type: "House",
    bedrooms: 4,
    bathrooms: 2,
    area: "2,600 sqft",
    floor: "G + 1",
    parking: "2 Open",
    facing: "North-East",
    age: "5 Years",
    description:
      "A warm and welcoming family home in one of Jaipur's most established residential areas. Generous living spaces, a verdant backyard, and proximity to top schools make this the ideal family retreat.",
    features: ["4 Bedrooms", "2 Bathrooms", "Backyard", "2 Parking", "Vastu Compliant", "Modular Kitchen", "Servant Quarter", "Gated Society"],
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop",
    ],
  },
  {
    id: 6,
    title: "Luxury Flat",
    location: "Pune",
    price: 2800000,
    type: "Apartment",
    bedrooms: 3,
    bathrooms: 2,
    area: "2,100 sqft",
    floor: "4th Floor",
    parking: "2 Covered",
    facing: "South",
    age: "3 Years",
    description:
      "An immaculate luxury flat in Pune's vibrant tech corridor. Italian marble flooring, imported fixtures, and a sweeping view of the Sahyadri hills — a rare blend of sophistication and comfort.",
    features: ["3 Bedrooms", "2 Bathrooms", "Hill View", "2 Parking", "Club House", "Modern Kitchen", "Smart Home", "Concierge"],
    images: [
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1600&auto=format&fit=crop",
    ],
  },
];

export default function PropertyDetailPage({ params }) {
  const resolvedParams = typeof params.then === "function" ? use(params) : params;
  const property = allProperties.find((p) => p.id === Number(resolvedParams.id));

  const router = useRouter();
  const [currentImage, setCurrentImage] = useState(0);
  const [form, setForm] = useState({ name: "", email: "", phone: "", budget: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8f5ef]">
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Property not found</h2>
          <button onClick={() => router.back()} className="px-6 py-3 bg-black text-white rounded-2xl">
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const emiEstimate = Math.round(property.price * 0.8 * 0.007).toLocaleString();

  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Jost:wght@300;400;500;600&display=swap");
        .font-heading { font-family: "Cormorant Garamond", serif; }
        .font-body    { font-family: "Jost", sans-serif; }
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        .fade-img { animation: fadeIn 0.45s ease both; }
        input:focus, select:focus, textarea:focus { outline: none; border-color: #000 !important; }
      `}</style>

      <section className="bg-[#f8f5ef] min-h-screen font-body">

        {/* ── HERO IMAGE SLIDER ── */}
        <div className="relative w-full h-[85vh] overflow-hidden">
          <img
            key={currentImage}
            src={property.images[currentImage]}
            alt={property.title}
            className="fade-img w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />

          {/* BACK */}
          <button
            onClick={() => router.back()}
            className="absolute top-6 left-6 z-30 flex items-center gap-2 h-11 px-5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm hover:bg-white hover:text-black transition-all duration-300"
          >
            ← Back
          </button>

          {/* SAVE / SHARE */}
          <div className="absolute top-6 right-6 z-30 flex gap-2">
            {["♡ Save", "⎘ Share"].map((label) => (
              <button
                key={label}
                className="h-11 px-5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm hover:bg-white hover:text-black transition-all duration-300"
              >
                {label}
              </button>
            ))}
          </div>

          {/* TITLE */}
          <div className="absolute bottom-16 left-0 w-full px-4 md:px-16 z-10">
            <div className="max-w-7xl mx-auto">
              <p className="uppercase tracking-[4px] text-white/80 text-xs mb-3">{property.type}</p>
              <h1 className="text-5xl md:text-7xl text-white font-heading mb-4 leading-none">{property.title}</h1>
              <div className="flex flex-wrap items-center gap-6">
                <p className="text-white/80 text-lg">📍 {property.location}, India</p>
                <div className="w-[1px] h-5 bg-white/40" />
                <p className="text-2xl text-white font-heading font-semibold">₹{property.price.toLocaleString()}</p>
                <span className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm border border-white/30">
                  {property.area}
                </span>
                <span className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm border border-white/30">
                  {property.age}
                </span>
              </div>
            </div>
          </div>

          {/* ARROWS */}
          <button
            onClick={() => setCurrentImage((p) => (p === 0 ? property.images.length - 1 : p - 1))}
            className="absolute left-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white text-xl hover:bg-white hover:text-black transition-all duration-300"
          >
            ←
          </button>
          <button
            onClick={() => setCurrentImage((p) => (p === property.images.length - 1 ? 0 : p + 1))}
            className="absolute right-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white text-xl hover:bg-white hover:text-black transition-all duration-300"
          >
            →
          </button>

          {/* THUMBNAILS */}
          <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2">
            {property.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setCurrentImage(i)}
                className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                  currentImage === i ? "border-white scale-105" : "border-transparent opacity-60"
                }`}
              >
                <img src={img} alt="thumb" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* ── BREADCRUMB ── */}
        <div className="bg-white border-b border-[#e5ded2] px-4 md:px-16">
          <div className="max-w-7xl mx-auto h-12 flex items-center gap-2 text-sm text-[#999]">
            <span className="cursor-pointer text-[#666] hover:text-black transition-colors" onClick={() => router.back()}>
              Properties
            </span>
            <span>›</span>
            <span className="cursor-pointer text-[#666] hover:text-black transition-colors">{property.location}</span>
            <span>›</span>
            <span className="text-[#111]">{property.title}</span>
          </div>
        </div>

        {/* ── MAIN CONTENT ── */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-20">
          <div style={{ display: "flex", gap: "3rem", alignItems: "flex-start", flexWrap: "wrap" }}>

            {/* ── LEFT ── */}
            <div style={{ flex: "1 1 560px", minWidth: 0, display: "flex", flexDirection: "column", gap: "3rem" }}>

              {/* OVERVIEW */}
              <div>
                <p className="uppercase tracking-[4px] text-xs text-black/50 mb-3">Overview</p>
                <h2 className="text-5xl font-heading text-black mb-6">{property.title}</h2>
                <p className="text-black leading-[2] text-base">{property.description}</p>
              </div>

              {/* QUICK STATS */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}>
                {[
                  ["🛏", property.bedrooms, "Bedrooms"],
                  ["🚿", property.bathrooms, "Bathrooms"],
                  ["📐", property.area, "Area"],
                  ["🏠", property.type, "Type"],
                ].map(([icon, value, label]) => (
                  <div key={label} className="bg-white rounded-2xl p-5 border border-[#e5ded2] text-center">
                    <div className="text-2xl mb-1">{icon}</div>
                    <p className="text-2xl font-heading text-black mb-1">{value}</p>
                    <p className="text-xs uppercase tracking-[2px] text-black/50">{label}</p>
                  </div>
                ))}
              </div>

              {/* PROPERTY DETAILS TABLE */}
              <div>
                <p className="uppercase tracking-[4px] text-xs text-black/50 mb-5">Property Details</p>
                <div className="bg-white rounded-3xl border border-[#e5ded2] overflow-hidden">
                  {[
                    ["Property Type", property.type],
                    ["Location", `${property.location}, India`],
                    ["Total Area", property.area],
                    ["Bedrooms", property.bedrooms],
                    ["Bathrooms", property.bathrooms],
                    ["Floor", property.floor],
                    ["Parking", property.parking],
                    ["Facing", property.facing],
                    ["Property Age", property.age],
                    ["Status", "Ready to Move"],
                    ["Price", `₹${property.price.toLocaleString()}`],
                  ].map(([label, value], i, arr) => (
                    <div
                      key={label}
                      className={`flex items-center justify-between px-6 py-4 ${
                        i !== arr.length - 1 ? "border-b border-[#f0ebe2]" : ""
                      } ${i % 2 === 0 ? "bg-white" : "bg-[#faf7f2]"}`}
                    >
                      <span className="text-black text-sm">{label}</span>
                      <span className="text-black font-medium text-sm">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* AMENITIES */}
              <div>
                <p className="uppercase tracking-[4px] text-xs text-black/50 mb-5">Amenities & Features</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: "0.75rem" }}>
                  {property.features.map((f, i) => (
                    <div key={i} className="bg-white rounded-2xl px-4 py-4 border border-[#e5ded2] flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-black flex-shrink-0" />
                      <p className="text-black text-sm">{f}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* LOCATION PLACEHOLDER */}
              <div>
                <p className="uppercase tracking-[4px] text-xs text-black/50 mb-5">Location</p>
                <div className="bg-[#e8e3da] rounded-2xl h-48 flex flex-col items-center justify-center border border-[#e5ded2] gap-2">
                  <span className="text-4xl">📍</span>
                  <p className="font-heading text-2xl text-black">{property.location}, India</p>
                  <p className="text-sm text-black">Interactive map coming soon</p>
                </div>
              </div>

            </div>

            {/* ── RIGHT: ENQUIRY FORM ── */}
            <div style={{ flex: "0 0 400px", width: "400px", maxWidth: "100%" }}>
              <div style={{ position: "sticky", top: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>

                {/* FORM CARD */}
                <div className="bg-white rounded-[32px] border border-[#e5ded2] overflow-hidden shadow-lg">

                  {/* HEADER */}
                  <div className="bg-black px-8 py-7">
                    <p className="uppercase tracking-[3px] text-white/60 text-xs mb-1">Interested?</p>
                    <h3 className="text-3xl font-heading text-white">Enquire Now</h3>
                    <p className="text-white/60 text-sm mt-2">Our agent will contact you within 24 hours</p>
                  </div>

                  {/* PRICE STRIP */}
                  <div className="px-8 py-4 bg-[#f8f5ef] border-b border-[#e5ded2] flex items-center justify-between">
                    <span className="text-black/55 text-sm">Listed Price</span>
                    <span className="text-xl font-heading text-black">₹{property.price.toLocaleString()}</span>
                  </div>

                  {!submitted ? (
                    <form onSubmit={handleSubmit} className="px-8 py-8 space-y-4">

                      {[
                        { label: "Full Name *", key: "name", type: "text", placeholder: "Rahul Sharma" },
                        { label: "Email Address *", key: "email", type: "email", placeholder: "rahul@email.com" },
                        { label: "Phone Number *", key: "phone", type: "tel", placeholder: "+91 98765 43210" },
                      ].map(({ label, key, type, placeholder }) => (
                        <div key={key}>
                          <label className="block text-xs uppercase tracking-[2px] text-black/50 mb-2">{label}</label>
                          <input
                            required
                            type={type}
                            placeholder={placeholder}
                            value={form[key]}
                            onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                            className="w-full h-12 rounded-xl border border-[#ddd] px-4 text-sm bg-[#faf7f2] text-black transition-colors"
                          />
                        </div>
                      ))}

                      <div>
                        <label className="block text-xs uppercase tracking-[2px] text-black/50 mb-2">Your Budget</label>
                        <select
                          value={form.budget}
                          onChange={(e) => setForm({ ...form, budget: e.target.value })}
                          className="w-full h-12 rounded-xl border border-[#ddd] px-4 text-sm bg-[#faf7f2] text-black transition-colors"
                        >
                          <option value="">Select budget range</option>
                          <option value="10-25">₹10L – ₹25L</option>
                          <option value="25-50">₹25L – ₹50L</option>
                          <option value="50-1cr">₹50L – ₹1Cr</option>
                          <option value="1cr+">₹1Cr+</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-[2px] text-black/50 mb-2">Message</label>
                        <textarea
                          rows={3}
                          placeholder={`I'm interested in ${property.title}...`}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          className="w-full rounded-xl border border-[#ddd] px-4 py-3 text-sm bg-[#faf7f2] text-black resize-none transition-colors"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 rounded-xl bg-black text-white text-sm font-medium tracking-widest uppercase hover:bg-[#222] transition-all duration-300 mt-2"
                      >
                        Send Enquiry
                      </button>

                      <p className="text-center text-xs text-black/40 pt-1">
                        By submitting you agree to our privacy policy
                      </p>
                    </form>
                  ) : (
                    <div className="px-8 py-14 text-center">
                      <div className="w-14 h-14 rounded-full bg-green-50 border border-green-200 flex items-center justify-center mx-auto mb-5">
                        <span className="text-green-600 text-2xl">✓</span>
                      </div>
                      <h4 className="text-2xl font-heading text-black mb-2">Enquiry Sent!</h4>
                      <p className="text-black/55 text-sm leading-relaxed">
                        Thank you, <strong>{form.name}</strong>. Our agent will reach out to you at{" "}
                        <strong>{form.phone}</strong> within 24 hours.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="mt-6 text-sm underline text-black/50 hover:text-black transition-colors"
                      >
                        Submit another enquiry
                      </button>
                    </div>
                  )}
                </div>

                {/* EMI CALCULATOR CARD */}
                <div className="bg-white rounded-2xl border border-[#e5ded2] px-8 py-6">
                  <p className="uppercase tracking-[3px] text-xs text-black/50 mb-4">EMI Estimate</p>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <p className="text-3xl font-heading text-black">
                        ₹{emiEstimate}
                        <span className="text-base text-black/40 font-body font-normal">/mo</span>
                      </p>
                      <p className="text-xs text-black/40 mt-1">Approx. (80% loan · 8.5% p.a. · 20 yrs)</p>
                    </div>
                    <span className="text-3xl opacity-20">🏦</span>
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