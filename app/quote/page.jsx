"use client";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Headers from "../Components/Headers";
import CountryDropdown from "../Components/CountryDropdown";
import toast from "react-hot-toast";

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
  const [countryFrom2, setCountryFrom2] = useState("");
  const [cityFrom, setCityFrom] = useState("");
  const [to_name, setTo_name] = useState("Champions logistics");
  const [error, setError] = useState("");
  const [countryTo, setCountryTo] = useState(null);
  const [countryTo2, setCountryTo2] = useState("");
  const [cityTo, setCityTo] = useState("");
  const [postalCodeTo, setPostalCodeTo] = useState("");
  const [firstStage, setfirstStage] = useState(false);
  const [loading, setloading] = useState(false);

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
    setCountryFrom2(selectedOption.value);
  };

  const handleCountryChange2 = (selectedOption) => {
    setCountryTo(selectedOption);
    setCountryTo2(selectedOption.value);
  };

  const handleDateChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove all non-numeric characters

    // Automatically insert the first hyphen after the fourth character (YYYY)
    if (value.length >= 4) {
      value =
        value.slice(0, 4) + (value.length > 4 ? "-" : "") + value.slice(4);
    }

    // Automatically insert the second hyphen after the sixth character (YYYY-MM)
    if (value.length >= 7) {
      value =
        value.slice(0, 7) + (value.length > 7 ? "-" : "") + value.slice(7);
    }

    // Limit the input to 10 characters (YYYY-MM-DD)
    value = value.slice(0, 10);

    setShipmentDate(value);
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
      const data = {
        countryFrom,
        countryFrom2,
        cityFrom,
        countryTo,
        countryTo2,
        cityTo,
        postalCodeTo,
      };
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

  const sendEmail = (formData) => {
    setloading(true); // Start loading

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      )
      .then((result) => {
        console.log("Email sent:", result.text);
        toast.success("Email sent successfully!");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        toast.error("Failed to send email. Please try again."); // Error toast
      })
      .finally(() => {
        setloading(false); // Stop loading
      });
  };

  const handleSubmit = async () => {
    if (!shipmentDate || !email) {
      setError3("All fields are required");
    } else {
      setError3(""); // Clear any previous error
      // Collect data from all stages
      const formData = {
        to_name,
        countryFrom2,
        cityFrom,
        countryTo2,
        cityTo,
        postalCodeTo,
        weight,
        quantity,
        height,
        length,
        width,
        shipmentDate,
        email,
      };

      sendEmail(formData); // Assume sendEmail is an async function
      // Handle success, e.g., show a success message
    }
    // Optional: Reset the form or show a success message
  };

  return (
    <>
      <Headers />
      <main className="pt-[97px] lg:pt-[104px]">
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
              type="button"
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
                  type="button"
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
            <section className="bg-[#BEE1FF] py-20 pt-28 px-[3%]">
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
                    onChange={handleDateChange}
                    placeholder="Shipment date YYYY-MM-DD*"
                    maxLength={10} // Restricting to YYYY-MM-DD format
                    className="inputBox focus:bg-transparent bg-transparent placeholder:text-black placeholder:absolute placeholder:top-2 placeholder:left-2 placeholder:text-xs lg:placeholder:text-sm"
                  />

                  <input
                    type="email"
                    placeholder="Email Address*"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="width"
                    className="inputBox focus:bg-transparent bg-transparent placeholder:text-black placeholder:absolute placeholder:top-2 placeholder:left-2 placeholder:text-xs lg:placeholder:text-sm"
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="bg-primary gap-6 disabled:opacity-70 text-white min-w-full mx-auto mt-10 lg:min-w-[558px] h-[60px] rounded-full text-base font-clashmd flex items-center justify-center"
                >
                  {loading && (
                    <svg
                      className="h-5 w-5 animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                  )}
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
