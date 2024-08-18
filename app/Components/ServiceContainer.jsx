import Image from "next/image";
import React from "react";
import QuoteBtn from "./QuoteBtn";

export default function ServiceContainer({ data }) {
  return (
    <main>
      <section className="px-[3%] py-10 pt-[97px] lg:pt-[104px]">
        <h1 className="headingBig">{data?.header}</h1>
      </section>
      <section className="grid gap-5 pt-16 mb-5">
        {data?.services?.map((service) => (
          <div className="relative" key={service._id}>
            <Image
              src={service?.bannerImage}
              width={2000}
              loading="lazy"
              height={465}
              alt={service.title}
              className="w-full hidden lg:block"
            />
            <Image
              src={service?.bannerImage}
              width={2000}
              loading="lazy"
              height={465}
              alt={service?.header}
              className="w-full lg:hidden h-[457px] object-cover"
            />
            <div className="absolute grid gap-6 lg:gap-4 left-[3%] bottom-7 lg:bottom-3">
              <div>
                <h2 className="text-[25px] mb-2 font-clashmd text-white max-w-[269px] lg:max-w-full">
                  {service?.header}
                </h2>
                <p className="lg:text-base lg:max-w-[599px] lg:leading-[19.68px] text-white text-sm leading-[17.22px]">
                  {service?.descriptionText}
                </p>
              </div>

              <div className="max-w-fit">
                <QuoteBtn
                  title="Learn More"
                  href={`/services/${service._id}`}
                  className="lg:h-[62px] w-[260px] justify-center"
                  btnClassName="lg:h-[62px] lg:w-[62px] lg:right-[-40px]"
                />
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
