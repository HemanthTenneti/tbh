"use client";

import { useState, useMemo } from "react";

interface PhoneInputProps {
  value: string;
  onChange: (value: string, isComplete: boolean) => void;
  borderColor: string;
  bgColor: string;
}

const countries = [
  { id: "in", code: "+91", name: "India", maxLen: 10 },
  { id: "us", code: "+1", name: "USA", maxLen: 10 },
  { id: "gb", code: "+44", name: "UK", maxLen: 10 },
  { id: "ae", code: "+971", name: "UAE", maxLen: 9 },
  { id: "ca", code: "+1", name: "Canada", maxLen: 10 },
  { id: "au", code: "+61", name: "Australia", maxLen: 9 },
  { id: "sg", code: "+65", name: "Singapore", maxLen: 8 },
  { id: "other", code: "+", name: "Other", maxLen: 15 },
];

export default function PhoneInput({
  value,
  onChange,
  borderColor,
  bgColor,
}: PhoneInputProps) {
  const [selectedId, setSelectedId] = useState("in");
  const selected = useMemo(() => countries.find((c) => c.id === selectedId) ?? countries[0], [selectedId]);

  const phoneNumber = value.startsWith("+")
    ? value.slice(selected.code.length).trim()
    : value;

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newId = e.target.value;
    const newCountry = countries.find((c) => c.id === newId);
    setSelectedId(newId);
    if (newCountry) {
      const digits = phoneNumber;
      onChange(`${newCountry.code}${digits}`, digits.length === newCountry.maxLen);
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digitsOnly = e.target.value.replace(/\D/g, "");
    onChange(`${selected.code}${digitsOnly}`, digitsOnly.length === selected.maxLen);
  };

  const font = '"Helvetica Neue", Arial, sans-serif';
  const ORANGE = "#f1663b";

  const sharedStyle: React.CSSProperties = {
    backgroundColor: bgColor,
    color: ORANGE,
    fontFamily: font,
    fontWeight: 700,
    fontSize: "16px",
    border: borderColor === "transparent" ? "none" : `1.5px solid ${borderColor}`,
    borderRadius: "110px",
    padding: "14px 20px",
    outline: "none",
  };

  return (
    <div className="flex gap-2">
      <select
        value={selectedId}
        onChange={handleCountryChange}
        aria-label="Country code"
        style={{
          ...sharedStyle,
          paddingRight: "28px",
          appearance: "none",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%23f1663b' d='M1 1l5 5 5-5'/%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 12px center",
          flexShrink: 0,
          minWidth: "max-content",
        }}
      >
        {countries.map((country) => (
          <option key={country.id} value={country.id} style={{ color: "#f1663b" }}>
            {country.name} ({country.code})
          </option>
        ))}
      </select>

      <input
        type="tel"
        inputMode="numeric"
        pattern="[0-9]*"
        value={phoneNumber}
        onChange={handlePhoneChange}
        placeholder="phone number"
        maxLength={selected.maxLen}
        autoComplete="tel-national"
        aria-label="Phone number"
        style={{ ...sharedStyle, flex: 1 }}
      />
    </div>
  );
}
