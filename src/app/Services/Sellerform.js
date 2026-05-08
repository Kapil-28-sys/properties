"use client";

import { useState } from "react";
import {
  Upload,
  Home,
  MapPin,
  IndianRupee,
  Phone,
  Mail,
  ImagePlus,
  FileText,
} from "lucide-react";

export default function SellerForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    price: "",
    propertyType: "",
    description: "",
    images: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    setFormData({ ...formData, images: e.target.files });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Seller Data:", formData);
    alert("Your property has been submitted successfully!");
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

          {/* Square Grid */}
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

          {/* Heading */}
          <div className="text-center mb-12 fade-up">
            <h2 className="font-heading text-5xl text-black font-semibold">
              Seller Form
            </h2>
            <p className="text-gray-600 mt-3 text-lg font-body">
              List your property and get the best buyers instantly.
            </p>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/90 backdrop-blur-xl border border-gray-200 shadow-2xl rounded-3xl p-10 grid grid-cols-1 md:grid-cols-2 gap-6 fade-up"
          >

            {/* Name */}
            <div className="flex items-center gap-3 border rounded-xl px-4 py-3 bg-white">
              <FileText size={18} className="text-[#b88a44]" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
                className="w-full outline-none bg-transparent font-body"
                required
              />
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 border rounded-xl px-4 py-3 bg-white">
              <Phone size={18} />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                onChange={handleChange}
                className="w-full outline-none bg-transparent font-body"
                required
              />
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 border rounded-xl px-4 py-3 bg-white">
              <Mail size={18} />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={handleChange}
                className="w-full outline-none bg-transparent font-body"
              />
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 border rounded-xl px-4 py-3 bg-white">
              <MapPin size={18} />
              <input
                type="text"
                name="location"
                placeholder="Property Location"
                onChange={handleChange}
                className="w-full outline-none bg-transparent font-body"
              />
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 border rounded-xl px-4 py-3 bg-white">
              <IndianRupee size={18} />
              <input
                type="text"
                name="price"
                placeholder="Expected Price (e.g. 80L)"
                onChange={handleChange}
                className="w-full outline-none bg-transparent font-body"
              />
            </div>

            {/* Property Type */}
            <div className="flex items-center gap-3 border rounded-xl px-4 py-3 bg-white">
              <Home size={18} />
              <select
                name="propertyType"
                onChange={handleChange}
                className="w-full outline-none bg-transparent font-body"
              >
                <option>Apartment</option>
                <option>Villa</option>
                <option>Plot</option>
                <option>Commercial</option>
              </select>
            </div>

            {/* Description */}
            <textarea
              name="description"
              rows="4"
              placeholder="Property description..."
              onChange={handleChange}
              className="md:col-span-2 border rounded-xl px-4 py-3 outline-none font-body bg-white"
            />

            {/* Image Upload */}
            <div className="md:col-span-2 border border-dashed border-gray-300 rounded-xl p-6 bg-white flex flex-col items-center justify-center gap-2">
              <ImagePlus className="text-[#b88a44]" />
              <p className="text-gray-600 font-body">
                Upload Property Images
              </p>
              <input
                type="file"
                multiple
                onChange={handleImage}
                className="mt-2"
              />
            </div>

            {/* Button */}
            <div className="md:col-span-2 text-center mt-2">
              <button
                type="submit"
                className="font-heading text-lg bg-gradient-to-r from-[#b88a44] to-[#d4af37] text-black px-12 py-3 rounded-xl shadow-lg hover:scale-105 transition"
              >
                List Property
              </button>
            </div>

          </form>
        </div>
      </section>
    </>
  );
}