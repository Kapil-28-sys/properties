"use client";

import React, { useEffect, useState } from "react";
import { Country, State, City } from "country-state-city";

export default function CountryStateCity() {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [selectedCountry, setSelectedCountry] = useState("IN");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  // LOAD COUNTRIES + INDIA STATES
  useEffect(() => {
    const allCountries = Country.getAllCountries();
    setCountries(allCountries);

    const indiaStates = State.getStatesOfCountry("IN");
    setStates(indiaStates);
  }, []);

  // COUNTRY CHANGE
  const handleCountryChange = (e) => {
    const countryCode = e.target.value;

    setSelectedCountry(countryCode);
    setSelectedState("");
    setSelectedCity("");

    // LOAD STATES
    const stateData = State.getStatesOfCountry(countryCode);

    setStates(stateData);
    setCities([]);
  };

  // STATE CHANGE
  const handleStateChange = (e) => {
    const stateCode = e.target.value;

    setSelectedState(stateCode);
    setSelectedCity("");

    // LOAD CITIES
    const cityData = City.getCitiesOfState(
      selectedCountry,
      stateCode
    );

    setCities(cityData);
  };

  // CITY CHANGE
  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2 style={styles.heading}>
          Country State City Dropdown
        </h2>

        {/* COUNTRY */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Country</label>

          <select
            value={selectedCountry}
            onChange={handleCountryChange}
            style={styles.select}
          >
            {countries.map((country) => (
              <option
                key={country.isoCode}
                value={country.isoCode}
              >
                {country.name}
              </option>
            ))}
          </select>
        </div>

        {/* STATE */}
        <div style={styles.formGroup}>
          <label style={styles.label}>State</label>

          <select
            value={selectedState}
            onChange={handleStateChange}
            style={styles.select}
          >
            <option value="">Select State</option>

            {states.map((state) => (
              <option
                key={state.isoCode}
                value={state.isoCode}
              >
                {state.name}
              </option>
            ))}
          </select>
        </div>

        {/* CITY */}
        <div style={styles.formGroup}>
          <label style={styles.label}>City</label>

          <select
            value={selectedCity}
            onChange={handleCityChange}
            style={styles.select}
          >
            <option value="">Select City</option>

            {cities.map((city, index) => (
              <option key={index} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
        </div>

        {/* RESULT */}
        <div style={styles.result}>
          <p style={styles.resultText}>
            <strong>Country:</strong> {selectedCountry}
          </p>

          <p style={styles.resultText}>
            <strong>State:</strong> {selectedState}
          </p>

          <p style={styles.resultText}>
            <strong>City:</strong> {selectedCity}
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    width: "100%",
    minHeight: "100vh",
    background: "#f4f7fb",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    boxSizing: "border-box",
  },

  card: {
    width: "100%",
    maxWidth: "500px",
    background: "#ffffff",
    borderRadius: "16px",
    padding: "30px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
    boxSizing: "border-box",
  },

  heading: {
    fontSize: "28px",
    fontWeight: "700",
    marginBottom: "30px",
    textAlign: "center",
    color: "#111827",
  },

  formGroup: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "20px",
  },

  label: {
    marginBottom: "8px",
    fontSize: "15px",
    fontWeight: "600",
    color: "#374151",
  },

  select: {
    width: "100%",
    padding: "14px 16px",
    borderRadius: "10px",
    border: "1px solid #d1d5db",
    outline: "none",
    fontSize: "15px",
    background: "#fff",
    color: "#111827",
    cursor: "pointer",
    transition: "0.3s",
    boxSizing: "border-box",
  },

  result: {
    marginTop: "25px",
    padding: "18px",
    borderRadius: "12px",
    background: "#f9fafb",
    border: "1px solid #e5e7eb",
  },

  resultText: {
    margin: "8px 0",
    fontSize: "15px",
    color: "#111827",
  },
};