import React from "react";
import Headers from "../Components/Headers";

export default function QuotePage() {
  return (
    <>
      <Headers />
      <main>
        <section>
          <div className="flex pt-12 pb-9 flex-col gap-9 lg:flex-row items-center justify-between lg:py-9">
            <h1 className="text-5xl lg:text-[69px] font-clashmd max-w-[921px] leading-[59.04px] lg:leading-[80px]">
              Domestic or international Business shipping quote online
            </h1>
            <p className="lg:max-w-[365px] leading-[19.68px]">
              Packages and pallets, big and small, we can offer you an instant
              quote for your shipping needs both domestically and internationally.
              Fill out your shipment details below to discover your quotes. If you
              are satisfied, simply continue to book.
            </p>
          </div>
        </section>
      </main>
    </>

  );
}
