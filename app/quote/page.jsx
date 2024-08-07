import React from "react";
import Headers from "../Components/Headers";

const services = [
  "Enter Origin & Destination",
  "Complete your shipment details",
  "Get an estimated quote",
  "Send us a mail for online booking",
];

export default function QuotePage() {
  const bkColor = "black";
  return (
    <>
      <Headers />
      <main className="px-[3%]">
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
                <div className="lg:max-w-[217px] flex flex-col items-center justify-center">
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
      </main>
    </>
  );
}
