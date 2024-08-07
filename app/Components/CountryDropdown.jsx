"use client";
import React from "react";
import Select from "react-select";
import { FlagIcon } from "react-flag-kit";
import { countries } from "../Constant";

const CountryDropdown = ({ selectedCountry, handleCountryChange }) => {
  const options = countries.map((country) => ({
    value: country.name,
    label: (
      <div style={{ display: "flex", alignItems: "center" }}>
        <FlagIcon code={country.code} size={24} style={{ marginRight: 10 }} />
        {country.name}
      </div>
    ),
  }));

  return (
    <Select
      value={selectedCountry}
      onChange={handleCountryChange}
      options={options}
      isSearchable
      placeholder="Select a country"
      styles={{
        control: (base) => ({
          ...base,
          borderColor: "#AAAAAAF4",
          borderRadius: "10px",
          padding: "5px",
          height: "60px",
        }),
      }}
    />
  );
};

export default CountryDropdown;
