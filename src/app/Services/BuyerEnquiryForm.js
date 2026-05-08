"use client";

import { useState } from "react";
import {
  Search,
  MapPin,
  IndianRupee,
  Home,
  Phone,
  Mail,
} from "lucide-react";

export default function BuyerEnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    budget: "",
    propertyType: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("We’ll find your perfect property soon!");
  };

  return (
    <>
      {/* ===== FONTS ===== */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Jost:wght@300;400;500&display=swap');

        .font-heading { font-family: 'Cormorant Garamond', serif; }
        .font-body { font-family: 'Jost', sans-serif; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .fade-up { animation: fadeUp 0.9s ease forwards; }
      `}</style>

      <section className="relative w-full py-24 px-4 bg-[#f8f8f8] overflow-hidden font-body">

        {/* ===== BACKGROUND PATTERN ===== */}
        <div className="absolute inset-0 opacity-40">

          {/* Square Grid Lines */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, #e5e5e5 1px, transparent 1px), linear-gradient(to bottom, #e5e5e5 1px, transparent 1px)",
              backgroundSize: "45px 45px",
            }}
          />

          {/* Dot Pattern */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(#b88a44 1px, transparent 1px)",
              backgroundSize: "18px 18px",
              opacity: 0.25,
            }}
          />
        </div>

        {/* ===== CONTENT ===== */}
        <div className="relative max-w-6xl mx-auto">

          {/* ===== HEADING ===== */}
          <div className="text-center mb-12 fade-up">
            <h2 className="font-heading text-5xl text-black font-semibold">
              Buyer Form
            </h2>
            <p className="text-gray-600 mt-3 text-lg font-body">
              Share your requirements and we’ll match you with the best homes & investments.
            </p>
          </div>

          {/* ===== FORM ===== */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/90 backdrop-blur-xl border border-gray-200 shadow-2xl rounded-3xl p-10 grid grid-cols-1 md:grid-cols-2 gap-6 fade-up"
          >

            {/* Name */}
            <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3 focus-within:border-[#b88a44] transition bg-white">
              <Search size={18} className="text-[#b88a44]" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
                className="w-full outline-none bg-transparent font-body text-black"
                required
              />
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3 focus-within:border-[#b88a44] transition bg-white">
              <Phone size={18} />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                onChange={handleChange}
                className="w-full outline-none bg-transparent font-body text-black"
                required
              />
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3 focus-within:border-[#b88a44] transition bg-white">
              <Mail size={18} />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={handleChange}
                className="w-full outline-none bg-transparent font-body text-black"
              />
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3 focus-within:border-[#b88a44] transition bg-white">
              <MapPin size={18} />
              <input
                type="text"
                name="location"
                placeholder="Preferred Location"
                onChange={handleChange}
                className="w-full outline-none bg-transparent font-body text-black"
              />
            </div>

            {/* Budget */}
            <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3 focus-within:border-[#b88a44] transition bg-white">
              <IndianRupee size={18} />
              <input
                type="text"
                name="budget"
                placeholder="Budget Range (e.g. 50L - 1Cr)"
                onChange={handleChange}
                className="w-full outline-none bg-transparent font-body text-black"
              />
            </div>

            {/* Property Type */}
            <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3 focus-within:border-[#b88a44] transition bg-white">
              <Home size={18} />
              <select
                name="propertyType"
                onChange={handleChange}
                className="w-full outline-none bg-transparent font-body text-black"
              >
                <option className="text-black">Apartment</option>
                <option className="text-black">Villa</option>
                <option className="text-black">Plot</option>
                <option className="text-black">Commercial</option>
              </select>
            </div>

            {/* Message */}
            <textarea
              name="message"
              rows="4"
              placeholder="Any special requirements..."
              onChange={handleChange}
              className="md:col-span-2 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#b88a44] transition font-body bg-white text-black"
            />

            {/* Button */}
            <div className="md:col-span-2 text-center mt-2">
              <button
                type="submit"
                className="font-heading text-lg bg-gradient-to-r from-[#b88a44] to-[#d4af37] text-black px-12 py-3 rounded-xl shadow-lg hover:scale-105 transition"
              >
                Submit Enquiry
              </button>
            </div>

          </form>
        </div>
      </section>
    </>
  );
}