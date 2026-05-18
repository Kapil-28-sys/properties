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
  CheckCircle2,
  X,
} from "lucide-react";

const cssVars = `
  :root {
    --primary: #f59e0b;
    --primary-dark: #d97706;
    --primary-light: #fbbf24;
    --secondary: #0f3d91;
    --secondary-dark: #082f73;
    --secondary-light: #2563eb;
    --accent: #3fa34d;
    --accent-light: #6ccf79;
    --background: #f8fafc;
    --white: #ffffff;
    --text: #0f172a;
    --text-light: #64748b;
    --border: #e2e8f0;
    --shadow-sm: 0 4px 14px rgba(0,0,0,0.06);
    --shadow-md: 0 14px 40px rgba(0,0,0,0.1);
    --radius: 18px;
    --transition: all 0.35s ease;
  }
`;

export default function SellerForm() {
  const [formData, setFormData] = useState({
    name: "", phone: "", email: "", state: "", city: "", area: "",
    address: "", pincode: "", price: "", propertyType: "", bedrooms: "",
    bathrooms: "", areaSize: "", areaUnit: "", furnishedType: "", description: "", images: null,
  });
  const [submitted, setSubmitted] = useState(false);
  const [imageNames, setImageNames] = useState([]);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleImage = (e) => {
    setFormData({ ...formData, images: e.target.files });
    setImageNames(Array.from(e.target.files).map(f => f.name));
  };

  const removeImage = (idx) => {
    const updated = imageNames.filter((_, i) => i !== idx);
    setImageNames(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
  };

  const sectionLabel = (text) => (
    <div style={{
      gridColumn: "1 / -1",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      margin: "8px 0 2px",
    }}>
      <span style={{
        fontSize: "11px",
        fontWeight: 700,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: "var(--secondary)",
        fontFamily: "'DM Sans', sans-serif",
      }}>{text}</span>
      <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
    </div>
  );

  return (
    <>
      <style>{cssVars}</style>
      <style>{`
        
        .seller-wrap * { box-sizing: border-box; }

        .seller-wrap {
          min-height: 100vh;
          background: var(--background);
          background-image:
            radial-gradient(ellipse 80% 50% at 50% -10%, rgba(15,61,145,0.07) 0%, transparent 70%),
            radial-gradient(ellipse 60% 40% at 90% 90%, rgba(245,158,11,0.06) 0%, transparent 60%);
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding: 56px 20px 64px;
          font-family: 'DM Sans', sans-serif;
        }

        .seller-inner { width: 100%; max-width: 860px; }

        /* Header */
        .seller-header {
          text-align: center;
          margin-bottom: 40px;
        }
        .seller-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: rgba(15,61,145,0.07);
          border: 1px solid rgba(15,61,145,0.13);
          border-radius: 100px;
          padding: 6px 16px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--secondary);
          margin-bottom: 20px;
        }
        .seller-badge span { width: 7px; height: 7px; border-radius: 50%; background: var(--primary); display: inline-block; }
        .seller-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(32px, 5vw, 46px);
          font-weight: 700;
          color: var(--text);
          line-height: 1.15;
          margin: 0 0 12px;
        }
        .seller-title em { font-style: italic; color: var(--secondary); }
        .seller-subtitle { color: var(--text-light); font-size: 15.5px; font-weight: 400; margin: 0; }

        /* Card */
        .seller-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 28px;
          padding: 36px 36px 40px;
          box-shadow: var(--shadow-md);
          position: relative;
          overflow: hidden;
        }
        .seller-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--secondary), var(--primary), var(--secondary-light));
          border-radius: 28px 28px 0 0;
        }

        /* Grid */
        .seller-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px 18px;
        }
        @media (max-width: 640px) {
          .seller-grid { grid-template-columns: 1fr; }
          .seller-card { padding: 24px 20px 28px; }
          .col-span-2 { grid-column: 1 / -1 !important; }
        }
        .col-span-2 { grid-column: 1 / -1; }

        /* Input */
        .input-wrap {
          display: flex;
          align-items: center;
          gap: 11px;
          border: 1.5px solid var(--border);
          border-radius: var(--radius);
          padding: 0 16px;
          height: 52px;
          background: #fafbfc;
          transition: var(--transition);
          position: relative;
        }
        .input-wrap:hover { border-color: var(--primary-light); background: #fffdf6; }
        .input-wrap.focused { border-color: var(--primary); background: #fffdf6; box-shadow: 0 0 0 3px rgba(245,158,11,0.1); }
        .input-wrap input, .input-wrap select {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          font-size: 14.5px;
          color: var(--text);
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
        }
        .input-wrap select { cursor: pointer; }
        .input-wrap input::placeholder { color: #a0aec0; font-weight: 400; }
        .input-icon { flex-shrink: 0; color: var(--primary); opacity: 0.85; }
        .input-wrap.focused .input-icon { opacity: 1; }

        /* Textarea */
        .textarea-wrap {
          border: 1.5px solid var(--border);
          border-radius: var(--radius);
          padding: 14px 16px;
          background: #fafbfc;
          transition: var(--transition);
        }
        .textarea-wrap:hover { border-color: var(--primary-light); background: #fffdf6; }
        .textarea-wrap:focus-within { border-color: var(--primary); background: #fffdf6; box-shadow: 0 0 0 3px rgba(245,158,11,0.1); }
        .textarea-wrap textarea {
          width: 100%; border: none; outline: none; background: transparent; resize: none;
          font-size: 14.5px; color: var(--text); font-family: 'DM Sans', sans-serif; font-weight: 500;
        }
        .textarea-wrap textarea::placeholder { color: #a0aec0; font-weight: 400; }

        /* Upload */
        .upload-zone {
          border: 2px dashed var(--border);
          border-radius: var(--radius);
          padding: 28px 20px;
          background: #fafbfc;
          text-align: center;
          transition: var(--transition);
          cursor: pointer;
          position: relative;
        }
        .upload-zone:hover { border-color: var(--primary); background: #fffdf6; }
        .upload-zone input[type="file"] { position: absolute; inset: 0; opacity: 0; cursor: pointer; width: 100%; height: 100%; }
        .upload-icon-ring {
          width: 52px; height: 52px; border-radius: 50%;
          background: rgba(245,158,11,0.1);
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 12px; border: 1.5px solid rgba(245,158,11,0.2);
        }
        .upload-title { font-weight: 600; font-size: 14.5px; color: var(--text); margin-bottom: 4px; }
        .upload-sub { font-size: 12.5px; color: var(--text-light); }

        /* Image chips */
        .image-chips { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 14px; position: relative; z-index: 2; }
        .img-chip {
          display: flex; align-items: center; gap: 6px;
          background: rgba(15,61,145,0.07); border: 1px solid rgba(15,61,145,0.15);
          border-radius: 100px; padding: 4px 10px 4px 12px;
          font-size: 12px; font-weight: 500; color: var(--secondary);
          max-width: 180px;
        }
        .img-chip span { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .img-chip button { background: none; border: none; cursor: pointer; padding: 0; color: var(--text-light); display: flex; align-items: center; }
        .img-chip button:hover { color: #e53e3e; }

        /* Submit */
        .submit-btn {
          width: 100%; height: 58px;
          background: linear-gradient(135deg, var(--secondary), var(--secondary-light));
          border: none; border-radius: var(--radius);
          color: white; font-size: 16px; font-weight: 700;
          font-family: 'DM Sans', sans-serif;
          cursor: pointer; letter-spacing: 0.02em;
          transition: var(--transition);
          position: relative; overflow: hidden;
          box-shadow: 0 6px 24px rgba(15,61,145,0.28);
        }
        .submit-btn::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(135deg, var(--secondary-dark), var(--secondary));
          opacity: 0; transition: var(--transition);
        }
        .submit-btn:hover::before { opacity: 1; }
        .submit-btn:hover { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(15,61,145,0.35); }
        .submit-btn:active { transform: translateY(0); }
        .submit-btn span { position: relative; z-index: 1; }
        .submit-btn .btn-accent {
          position: absolute; top: 0; left: 0; width: 5px; height: 100%;
          background: var(--primary); z-index: 1;
        }

        /* Toast */
        .toast {
          position: fixed; bottom: 32px; left: 50%; transform: translateX(-50%) translateY(20px);
          background: var(--white); border: 1px solid var(--border);
          border-radius: 14px; padding: 14px 22px;
          box-shadow: var(--shadow-md);
          display: flex; align-items: center; gap: 12px;
          font-size: 14.5px; font-weight: 600; color: var(--text);
          opacity: 0; transition: all 0.4s cubic-bezier(0.34,1.56,0.64,1);
          pointer-events: none; z-index: 999;
          white-space: nowrap;
        }
        .toast.show { opacity: 1; transform: translateX(-50%) translateY(0); }
        .toast-dot { width: 10px; height: 10px; border-radius: 50%; background: var(--accent); flex-shrink: 0; }
      `}</style>

      <div className="seller-wrap">
        <div className="seller-inner">

          {/* Header */}
          <div className="seller-header">
            <div className="seller-badge">
              <span></span>
              Property Listing Portal
            </div>
            <h1 className="seller-title">
              List Your <em>Property</em>
            </h1>
            <p className="seller-subtitle">Fill in the details below to publish your listing instantly</p>
          </div>

          {/* Card */}
          <div className="seller-card">
            <form onSubmit={handleSubmit} className="seller-grid">

              {sectionLabel("Contact Information")}

              <InputBox icon={<FileText size={16} />} type="text" name="name" placeholder="Full Name" onChange={handleChange} onFocus={() => setFocusedField("name")} onBlur={() => setFocusedField(null)} focused={focusedField === "name"} />
              <InputBox icon={<Phone size={16} />} type="text" name="phone" placeholder="Phone Number" onChange={handleChange} onFocus={() => setFocusedField("phone")} onBlur={() => setFocusedField(null)} focused={focusedField === "phone"} />
              <div className="col-span-2">
                <InputBox icon={<Mail size={16} />} type="email" name="email" placeholder="Email Address" onChange={handleChange} onFocus={() => setFocusedField("email")} onBlur={() => setFocusedField(null)} focused={focusedField === "email"} fullWidth />
              </div>

              {sectionLabel("Location Details")}

              <InputBox icon={<Map size={16} />} type="text" name="state" placeholder="State" onChange={handleChange} onFocus={() => setFocusedField("state")} onBlur={() => setFocusedField(null)} focused={focusedField === "state"} />
              <InputBox icon={<Building2 size={16} />} type="text" name="city" placeholder="City" onChange={handleChange} onFocus={() => setFocusedField("city")} onBlur={() => setFocusedField(null)} focused={focusedField === "city"} />
              <InputBox icon={<MapPin size={16} />} type="text" name="area" placeholder="Area / Locality" onChange={handleChange} onFocus={() => setFocusedField("area")} onBlur={() => setFocusedField(null)} focused={focusedField === "area"} />
              <InputBox icon={<MapPin size={16} />} type="text" name="pincode" placeholder="Pincode" onChange={handleChange} onFocus={() => setFocusedField("pincode")} onBlur={() => setFocusedField(null)} focused={focusedField === "pincode"} />

              <div className="col-span-2">
                <div className="textarea-wrap">
                  <textarea name="address" rows={2} placeholder="Full Property Address" onChange={handleChange} />
                </div>
              </div>

              {sectionLabel("Property Details")}

              <div className="input-wrap" style={{ height: 52 }}>
                <Home size={16} className="input-icon" />
                <select name="propertyType" onChange={handleChange} style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', fontSize: '14.5px', fontFamily: "'DM Sans', sans-serif", fontWeight: 500, color: 'var(--text)' }}>
                  <option value="">Property Type</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                  <option>Plot</option>
                  <option>Commercial</option>
                </select>
              </div>

              <div className="input-wrap" style={{ height: 52 }}>
                <Sofa size={16} className="input-icon" />
                <select name="furnishedType" onChange={handleChange} style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', fontSize: '14.5px', fontFamily: "'DM Sans', sans-serif", fontWeight: 500, color: 'var(--text)' }}>
                  <option value="">Furnished Type</option>
                  <option>Furnished</option>
                  <option>Semi Furnished</option>
                  <option>Unfurnished</option>
                </select>
              </div>

              <InputBox icon={<BedDouble size={16} />} type="number" name="bedrooms" placeholder="Bedrooms" onChange={handleChange} onFocus={() => setFocusedField("bedrooms")} onBlur={() => setFocusedField(null)} focused={focusedField === "bedrooms"} />
              <InputBox icon={<Bath size={16} />} type="number" name="bathrooms" placeholder="Bathrooms" onChange={handleChange} onFocus={() => setFocusedField("bathrooms")} onBlur={() => setFocusedField(null)} focused={focusedField === "bathrooms"} />
              <InputBox icon={<Ruler size={16} />} type="number" name="areaSize" placeholder="Area Size" onChange={handleChange} onFocus={() => setFocusedField("areaSize")} onBlur={() => setFocusedField(null)} focused={focusedField === "areaSize"} />

              <div className="input-wrap" style={{ height: 52 }}>
                <Ruler size={16} className="input-icon" />
                <select name="areaUnit" onChange={handleChange} style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', fontSize: '14.5px', fontFamily: "'DM Sans', sans-serif", fontWeight: 500, color: 'var(--text)' }}>
                  <option value="">Area Unit</option>
                  <option>sqft</option>
                  <option>gaj</option>
                  <option>bigha</option>
                  <option>acre</option>
                </select>
              </div>

              <div className="col-span-2">
                <InputBox icon={<IndianRupee size={16} />} type="text" name="price" placeholder="Expected Price (e.g. 75,00,000)" onChange={handleChange} onFocus={() => setFocusedField("price")} onBlur={() => setFocusedField(null)} focused={focusedField === "price"} fullWidth />
              </div>

              {sectionLabel("Description & Images")}

              <div className="col-span-2">
                <div className="textarea-wrap">
                  <textarea name="description" rows={4} placeholder="Describe your property — highlights, nearby amenities, special features…" onChange={handleChange} />
                </div>
              </div>

              {/* Upload */}
              <div className="col-span-2">
                <div className="upload-zone">
                  <input type="file" multiple onChange={handleImage} accept="image/*" />
                  <div className="upload-icon-ring">
                    <ImagePlus size={22} style={{ color: 'var(--primary)' }} />
                  </div>
                  <div className="upload-title">Upload Property Images</div>
                  <div className="upload-sub">Click to browse · JPG, PNG, WEBP · Multiple files allowed</div>
                </div>
                {imageNames.length > 0 && (
                  <div className="image-chips">
                    {imageNames.map((name, i) => (
                      <div key={i} className="img-chip">
                        <span>{name}</span>
                        <button type="button" onClick={() => removeImage(i)}>
                          <X size={12} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Submit */}
              <div className="col-span-2" style={{ marginTop: 8 }}>
                <button type="submit" className="submit-btn">
                  <div className="btn-accent" />
                  <span>List Property Now</span>
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>

      {/* Toast */}
      <div className={`toast${submitted ? " show" : ""}`}>
        <div className="toast-dot" />
        <CheckCircle2 size={18} style={{ color: 'var(--accent)', flexShrink: 0 }} />
        Property listed successfully!
      </div>
    </>
  );
}

function InputBox({ icon, type, name, placeholder, onChange, onFocus, onBlur, focused, fullWidth }) {
  return (
    <div className={`input-wrap${focused ? " focused" : ""}`} style={fullWidth ? { gridColumn: "1 / -1" } : {}}>
      <span className="input-icon">{icon}</span>
      <input type={type} name={name} placeholder={placeholder} onChange={onChange} onFocus={onFocus} onBlur={onBlur} />
    </div>
  );
}