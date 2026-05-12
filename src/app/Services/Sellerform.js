"use client";

import { useState } from "react";
import {
  Home,
  MapPin,
  IndianRupee,
  Phone,
  Mail,
  ImagePlus,
  FileText,
  BedDouble,
  Bath,
  Ruler,
  Sofa,
  Building2,
  Map,
} from "lucide-react";

export default function SellerForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    state: "",
    city: "",
    area: "",
    address: "",
    pincode: "",
    price: "",
    propertyType: "",
    bedrooms: "",
    bathrooms: "",
    areaSize: "",
    areaUnit: "",
    furnishedType: "",
    description: "",
    images: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (e) => {
    setFormData({
      ...formData,
      images: e.target.files,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data :", formData);

    alert("Property Listed Successfully!");
  };

  return (
    <section className="w-full min-h-screen bg-[#f5f5f5] flex items-center justify-center px-4 py-14">
      <div className="w-full max-w-6xl">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            Seller Form
          </h2>

          <p className="text-gray-600 mt-3 text-lg">
            List your property with complete details
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white border border-gray-200 rounded-3xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-5 shadow-xl"
        >

          {/* Name */}
          <InputBox
            icon={<FileText size={18} className="text-[#b88a44]" />}
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
          />

          {/* Phone */}
          <InputBox
            icon={<Phone size={18} className="text-[#b88a44]" />}
            type="text"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
          />

          {/* Email */}
          <InputBox
            icon={<Mail size={18} className="text-[#b88a44]" />}
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
          />

          {/* State */}
          <InputBox
            icon={<Map size={18} className="text-[#b88a44]" />}
            type="text"
            name="state"
            placeholder="State"
            onChange={handleChange}
          />

          {/* City */}
          <InputBox
            icon={<Building2 size={18} className="text-[#b88a44]" />}
            type="text"
            name="city"
            placeholder="City"
            onChange={handleChange}
          />

          {/* Area */}
          <InputBox
            icon={<MapPin size={18} className="text-[#b88a44]" />}
            type="text"
            name="area"
            placeholder="Area"
            onChange={handleChange}
          />

          {/* Address */}
          <div className="md:col-span-2">
            <textarea
              name="address"
              rows="3"
              placeholder="Full Property Address"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-2xl px-4 py-3 bg-[#fafafa] outline-none focus:border-[#b88a44] transition resize-none text-black placeholder:text-gray-400"
            />
          </div>

          {/* Pincode */}
          <InputBox
            icon={<MapPin size={18} className="text-[#b88a44]" />}
            type="text"
            name="pincode"
            placeholder="Pincode"
            onChange={handleChange}
          />

          {/* Price */}
          <InputBox
            icon={<IndianRupee size={18} className="text-[#b88a44]" />}
            type="text"
            name="price"
            placeholder="Expected Price"
            onChange={handleChange}
          />

          {/* Property Type */}
          <div className="flex items-center gap-3 border border-gray-300 rounded-2xl px-4 py-3 bg-[#fafafa] focus-within:border-[#b88a44] transition">
            <Home size={18} className="text-[#b88a44]" />

            <select
              name="propertyType"
              onChange={handleChange}
              className="w-full bg-transparent outline-none text-black"
            >
              <option value="">Select Property Type</option>
              <option>Apartment</option>
              <option>Villa</option>
              <option>Plot</option>
              <option>Commercial</option>
            </select>
          </div>

          {/* Furnished Type */}
          <div className="flex items-center gap-3 border border-gray-300 rounded-2xl px-4 py-3 bg-[#fafafa] focus-within:border-[#b88a44] transition">
            <Sofa size={18} className="text-[#b88a44]" />

            <select
              name="furnishedType"
              onChange={handleChange}
              className="w-full bg-transparent outline-none text-black"
            >
              <option value="">Furnished Type</option>
              <option>Furnished</option>
              <option>Semi Furnished</option>
              <option>Unfurnished</option>
            </select>
          </div>

          {/* Bedrooms */}
          <InputBox
            icon={<BedDouble size={18} className="text-[#b88a44]" />}
            type="number"
            name="bedrooms"
            placeholder="Bedrooms"
            onChange={handleChange}
          />

          {/* Bathrooms */}
          <InputBox
            icon={<Bath size={18} className="text-[#b88a44]" />}
            type="number"
            name="bathrooms"
            placeholder="Bathrooms"
            onChange={handleChange}
          />

          {/* Area Size */}
          <InputBox
            icon={<Ruler size={18} className="text-[#b88a44]" />}
            type="number"
            name="areaSize"
            placeholder="Area Size"
            onChange={handleChange}
          />

          {/* Area Unit */}
          <div className="flex items-center gap-3 border border-gray-300 rounded-2xl px-4 py-3 bg-[#fafafa] focus-within:border-[#b88a44] transition">
            <Ruler size={18} className="text-[#b88a44]" />

            <select
              name="areaUnit"
              onChange={handleChange}
              className="w-full bg-transparent outline-none text-black"
            >
              <option value="">Area Unit</option>
              <option>sqft</option>
              <option>gaj</option>
              <option>bigha</option>
              <option>acre</option>
            </select>
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <textarea
              name="description"
              rows="5"
              placeholder="Property Description..."
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-2xl px-4 py-3 bg-[#fafafa] outline-none focus:border-[#b88a44] transition resize-none text-black placeholder:text-gray-400"
            />
          </div>

          {/* Upload */}
          <div className="md:col-span-2 border-2 border-dashed border-gray-300 rounded-2xl p-6 bg-[#fafafa] text-center hover:border-[#b88a44] transition">

            <div className="flex flex-col items-center justify-center gap-2">

              <ImagePlus
                size={30}
                className="text-[#b88a44]"
              />

              <p className="text-gray-700 font-medium">
                Upload Property Images
              </p>

              <input
                type="file"
                multiple
                onChange={handleImage}
                className="mt-2 text-sm"
              />

            </div>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#b88a44] to-[#d4af37] text-black font-semibold py-4 rounded-2xl hover:scale-[1.01] transition shadow-lg"
            >
              List Property
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}

function InputBox({
  icon,
  type,
  name,
  placeholder,
  onChange,
}) {
  return (
    <div className="flex items-center gap-3 border border-gray-300 rounded-2xl px-4 py-3 bg-[#fafafa] focus-within:border-[#b88a44] hover:border-[#d4af37] transition">
      {icon}

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full bg-transparent outline-none text-black placeholder:text-gray-400"
      />
    </div>
  );
}