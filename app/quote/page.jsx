"use client";
import React from "react";
import Headers from "../Components/Headers";
import CountryDropdown from "../Components/CountryDropdown";

const services = [
  "Enter Origin & Destination",
  "Complete your shipment details",
  "Get an estimated quote",
  "Send us a mail for online booking",
];

export default function QuotePage() {
  const bkColor = "black";
  const [selectedCountry, setSelectedCountry] = React.useState(null);

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };
  return (
    <>
      <Headers />
      <main className="px-[3%] pb-20">
        <section>
          <div className="flex pt-12 pb-9 flex-col gap-9 lg:flex-row items-center justify-between lg:py-9">
            <h1 className="text-5xl lg:text-[69px] font-clashmd lg:basis-[60%] leading-[59.04px] lg:leading-[80px]">
              Domestic or international Business shipping quote online
            </h1>
            <p className="lg:basis-[40%] leading-[19.68px]">
              Packages and pallets, big and small, we can offer you an instant
              quote for your shipping needs both domestically and
              internationally. Fill out your shipment details below to discover
              your quotes. If you are satisfied, simply continue to book.
            </p>
          </div>
        </section>
        <section className="py-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-7 lg:gap-5 lg:gap-y-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="max-w-[90%] flex flex-col items-center gap-3"
              >
                <div className="lg:max-w-[217px] flex flex-col gap-3 items-center justify-center">
                  <div
                    className={`w-[30px] h-[30px] text-sm ${
                      bkColor === "black"
                        ? "text-white bg-primary"
                        : "bg-white text-primary"
                    }  font-clashmd lg:text-base rounded-full  flex items-center justify-center lg:w-[40px] lg:h-[40px]`}
                  >
                    {index + 1}
                  </div>
                  <p
                    className={`${
                      bkColor === "black" ? "lg:text-[#292929]" : "text-white"
                    } font-clashmd text-center bodyText leading-[24.6px] text-base lg:text-xl`}
                  >
                    {service}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="py-20">
          <div className="mx-auto py-8 lg:px-6 max-w-[966px] lg:border border-[#f4f4f4] lg:rounded-[20px]">
            <p className="text-center font-clashmd text-2xl lg:text-xl">
              Shipping information
            </p>
            <div className="w-full grid gap-2">
              <label className="text-base font-clashmd lg:pl-3">From</label>
              <div className="grid lg:grid-cols-2 gap-5">
                <div>
                  <CountryDropdown
                    selectedCountry={selectedCountry}
                    handleCountryChange={handleCountryChange}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="city"
                    placeholder="City *"
                    className="inputBox placeholder:text-black placeholder:absolute placeholder:top-2 placeholder:left-2 placeholder:text-xs lg:placeholder:text-sm"
                  />
                </div>

                <div></div>
              </div>
            </div>
            <div className="w-full grid gap-2">
              <label className="text-base font-clashmd lg:pl-3">To</label>
              <div className="grid lg:grid-cols-3 gap-5">
                <div>
                  <CountryDropdown
                    selectedCountry={selectedCountry}
                    handleCountryChange={handleCountryChange}
                  />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    name="city"
                    placeholder="City *"
                    className="inputBox placeholder:text-black placeholder:absolute placeholder:top-2 placeholder:left-2 placeholder:text-xs lg:placeholder:text-sm"
                  />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    name="postal"
                    placeholder="Postal Code *"
                    className="inputBox placeholder:text-black placeholder:absolute placeholder:top-2 placeholder:left-2 placeholder:text-xs lg:placeholder:text-sm"
                  />
                </div>
              </div>
            </div>
            <button className="bg-primary text-white mx-auto mt-16 min-w-full lg:min-w-[602px] h-[60px] rounded-full text-base font-clashmd flex items-center justify-center">
              Describe your shipment
            </button>
          </div>
        </section>
        <section className="py-20">
          <div className="mx-auto py-8 max-w-[700px]">
            <p className="text-center font-clashmd text-2xl lg:text-xl">
              Shipment Details
            </p>
            <div className="w-full mt-7 grid gap-2 lg:px-4">
              <div className="grid lg:grid-cols-2 gap-2">
                <div className="grid gap-2">
                  <label className="text-base font-clashmd lg:pl-3">
                    Item Weight
                  </label>
                  <input
                    type="text"
                    placeholder="Item weight (Kg) *"
                    name="weight"
                    className="inputBox placeholder:text-black placeholder:absolute placeholder:top-2 placeholder:left-2 placeholder:text-xs lg:placeholder:text-sm"
                  />
                </div>
                <div className="grid gap-2">
                  <label className="text-base font-clashmd lg:pl-3">
                    Item Quantity
                  </label>
                  <input
                    type="text"
                    name="city"
                    className="inputBox placeholder:text-black placeholder:absolute placeholder:top-2 placeholder:left-2 placeholder:text-xs lg:placeholder:text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="w-full grid gap-2 lg:px-4 mt-7">
              <label className="text-base font-clashmd lg:pl-3">
                Item Dimensions
              </label>
              <div className="grid lg:grid-cols-3 gap-2">
                <div>
                  <input
                    type="text"
                    placeholder="Height (cm) *"
                    name="height"
                    className="inputBox placeholder:text-black placeholder:absolute placeholder:top-2 placeholder:left-2 placeholder:text-xs lg:placeholder:text-sm"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="length"
                    placeholder="Length (cm) *"
                    className="inputBox placeholder:text-black placeholder:absolute placeholder:top-2 placeholder:left-2 placeholder:text-xs lg:placeholder:text-sm"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Width (cm) *"
                    name="width"
                    className="inputBox placeholder:text-black placeholder:absolute placeholder:top-2 placeholder:left-2 placeholder:text-xs lg:placeholder:text-sm"
                  />
                </div>
              </div>
            </div>
            <button className="bg-primary text-white min-w-full mx-auto mt-16 lg:min-w-[600px] h-[60px] rounded-full text-base font-clashmd flex items-center justify-center">
              Describe your shipment
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
