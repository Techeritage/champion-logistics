"use client";
import React, { useRef, useState } from "react";
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

  //first stage
  const [countryFrom, setCountryFrom] = useState(null);
  const [cityFrom, setCityFrom] = useState("");
  const [error, setError] = useState("");
  const [countryTo, setCountryTo] = useState(null);
  const [cityTo, setCityTo] = useState("");
  const [postalCodeTo, setPostalCodeTo] = useState("");
  const [firstStage, setfirstStage] = useState(false);

  //second stage
  const [weight, setWeight] = useState("");
  const [quantity, setQuantity] = useState("");
  const [height, setHeight] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [error2, setError2] = useState("");
  const [secondStage, setSecondStage] = useState(false);

  //third stage
  const [shipmentDate, setShipmentDate] = useState("");
  const [email, setEmail] = useState("");
  const [error3, setError3] = useState("");

  const handleCountryChange = (selectedOption) => {
    setCountryFrom(selectedOption);
  };

  const handleCountryChange2 = (selectedOption) => {
    setCountryTo(selectedOption);
  };

  // Create a ref for the target div
  const targetRef = useRef(null);
  const targetRef2 = useRef(null);

  const scrollToDiv = () => {
    // Scroll to the div using scrollIntoView
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToDiv2 = () => {
    // Scroll to the div using scrollIntoView
    if (targetRef2.current) {
      targetRef2.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFirstStage = () => {
    if (!countryFrom || !cityFrom || !countryTo || !cityTo || !postalCodeTo) {
      setError("All fields are required");
    } else {
      setError(""); // Clear any previous error
      const data = { countryFrom, cityFrom, countryTo, cityTo, postalCodeTo };
      console.log(data);
      scrollToDiv();
      setfirstStage(true); // Proceed to the next stage if needed
    }
  };

  const handleSecondStage = () => {
    if (!weight || !length || !quantity || !width || !height) {
      setError2("All fields are required");
    } else {
      setError2(""); // Clear any previous error
      const data = { weight, length, quantity, width, height };
      console.log(data);
      scrollToDiv2();
      setSecondStage(true); // Proceed to the next stage if needed
    }
  };

  const handleThirdStage = () => {
    if (!shipmentDate || !email) {
      setError3("All fields are required");
    } else {
      setError3(""); // Clear any previous error
      const data = { email, shipmentDate };
      console.log(data);
    }
  };

  return (
    <>
      <Headers />
      <main className="">
        <section className="px-[3%]">
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
        <section className="py-20 px-[3%]">
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

        {/**First Stage */}
        <section className="py-20 px-[3%]">
          <div className="mx-auto py-8 lg:px-6 max-w-[966px] lg:border border-[#f4f4f4] lg:rounded-[20px]">
            <p className="text-center font-clashmd text-2xl lg:text-xl">
              Shipping information
            </p>
            {error && (
              <p className="text-center text-red-500 text-xs lg:text-sm py-3">
                {error}
              </p>
            )}
            <div className="w-full grid gap-2">
              <label className="text-base font-clashmd lg:pl-3">From</label>
              <div className="grid lg:grid-cols-2 gap-5">
                <div>
                  <CountryDropdown
                    selectedCountry={countryFrom}
                    handleCountryChange={handleCountryChange}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    required
                    value={cityFrom}
                    onChange={(e) => setCityFrom(e.target.value)}
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
                    selectedCountry={countryTo}
                    handleCountryChange={handleCountryChange2}
                  />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={cityTo}
                    onChange={(e) => setCityTo(e.target.value)}
                    name="city"
                    placeholder="City *"
                    className="inputBox placeholder:text-black placeholder:absolute placeholder:top-2 placeholder:left-2 placeholder:text-xs lg:placeholder:text-sm"
                  />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={postalCodeTo}
                    onChange={(e) => setPostalCodeTo(e.target.value)}
                    name="postal"
                    placeholder="Postal Code *"
                    className="inputBox placeholder:text-black placeholder:absolute placeholder:top-2 placeholder:left-2 placeholder:text-xs lg:placeholder:text-sm"
                  />
                </div>
              </div>
            </div>
            <button
              onClick={handleFirstStage}
              className="bg-primary text-white mx-auto mt-16 min-w-full lg:min-w-[602px] h-[60px] rounded-full text-base font-clashmd flex items-center justify-center"
            >
              Describe your shipment
            </button>
          </div>
        </section>

        {/**Second Stage */}
        <div ref={targetRef}>
          {firstStage && (
            <section className="py-20 px-[3%]">
              <div className="mx-auto py-8 max-w-[700px]">
                <p className="text-center font-clashmd text-2xl lg:text-xl">
                  Shipment Details
                </p>
                {error2 && (
                  <p className="text-center text-red-500 text-xs lg:text-sm py-3">
                    {error2}
                  </p>
                )}
                <div className="w-full mt-7 grid gap-2 lg:px-4">
                  <div className="grid lg:grid-cols-2 gap-2">
                    <div className="grid gap-2">
                      <label className="text-base font-clashmd lg:pl-3">
                        Item Weight
                      </label>
                      <input
                        type="text"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        required
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
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        required
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
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        name="height"
                        className="inputBox placeholder:text-black placeholder:absolute placeholder:top-2 placeholder:left-2 placeholder:text-xs lg:placeholder:text-sm"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="length"
                        value={length}
                        onChange={(e) => setLength(e.target.value)}
                        placeholder="Length (cm) *"
                        className="inputBox placeholder:text-black placeholder:absolute placeholder:top-2 placeholder:left-2 placeholder:text-xs lg:placeholder:text-sm"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Width (cm) *"
                        value={width}
                        onChange={(e) => setWidth(e.target.value)}
                        name="width"
                        className="inputBox placeholder:text-black placeholder:absolute placeholder:top-2 placeholder:left-2 placeholder:text-xs lg:placeholder:text-sm"
                      />
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleSecondStage}
                  className="bg-primary text-white min-w-full mx-auto mt-16 lg:min-w-[600px] h-[60px] rounded-full text-base font-clashmd flex items-center justify-center"
                >
                  Shipment details
                </button>
              </div>
            </section>
          )}
        </div>
        {/**third stage**/}
        <div ref={targetRef2}>
          {secondStage && (
            <section className="bg-[#BEE1FF] py-20 px-[3%]">
              <div className="">
                <h2 className="text-xl font-clashmd text-center mb-10">
                  Start booking your <br /> shipment.
                </h2>
                {error3 && (
                  <p className="text-center text-red-500 text-xs lg:text-sm py-3">
                    {error3}
                  </p>
                )}
                <div className="mx-auto lg:max-w-[650px] grid lg:grid-cols-2 gap-6">
                  <input
                    type="text"
                    value={shipmentDate}
                    onChange={(e) => setShipmentDate(e.target.value)}
                    placeholder="Shipment date*"
                    className="inputBox focus:bg-transparent bg-transparent placeholder:text-black placeholder:absolute placeholder:top-2 placeholder:left-2 placeholder:text-xs lg:placeholder:text-sm"
                  />

                  <input
                    type="text"
                    placeholder="Email Address*"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="width"
                    className="inputBox focus:bg-transparent bg-transparent placeholder:text-black placeholder:absolute placeholder:top-2 placeholder:left-2 placeholder:text-xs lg:placeholder:text-sm"
                  />
                </div>
                <button
                  onClick={handleThirdStage}
                  className="bg-primary text-white min-w-full mx-auto mt-10 lg:min-w-[558px] h-[60px] rounded-full text-base font-clashmd flex items-center justify-center"
                >
                  Get a Quote
                </button>
              </div>
            </section>
          )}
        </div>
      </main>
    </>
  );
}
