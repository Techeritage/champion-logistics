import React from "react";
import Image from "next/image";
import ServiceList from "../Components/ServiceList";
import Faqs from "../Components/Faqs";
import Headers from "../Components/Headers";

const services = [
  "Management of the procurement process of the goods from the clients suppliers",
  "Organization of inspection",
  "Mastering of the documentation flow at all stages",
  "Shipping of the goods on our reserved vessels or aircraft",
  "Customs clearance and fast delivery to the client's designated destination",
  "Warehousing facilities (Lagos)",
  "Haulage",
];

export default function AboutPage() {
  return (
    <>
      <Headers />
      <main className="">
        <section className="px-[3%]">
          <h1 className="headingBig py-10">Global cargo service providers</h1>
          <Image
            src="/aero1.png"
            width={2000}
            loading="lazy"
            height={465}
            alt="arrow icon"
            className="w-full object-cover rounded-[15px] hidden lg:block lg:rounded-[20px] lg:h-[567px]"
          />
          <Image
            src="/aero2.png"
            width={500}
            loading="lazy"
            height={465}
            alt="arrow icon"
            className="w-full h-[301px] object-cover rounded-[15px] lg:hidden"
          />
        </section>

        <section className="py-20 px-[3%]">
          <h2 className="heading">
            Deep Dive into <br />
            <span className="text-primary">Champions</span> logistics:
          </h2>
          <p className="text-base mt-10 bodyText lg:leading-[24.6px] lg:text-xl max-w-full lg:max-w-[60%]">
            CHAMPION Logistics is amongst the renowned global cargo service
            providers headquartered in Nigeria. We offer a broad portfolio of
            services including Air Freight Services, Railways Transportation
            Services, Roadways Cargo Services, Sea Cargo Services, air freight
            logistics, Customs Clearance Services, Port Handling Services,
            Warehousing Services, etc.
            <br />
            <br />
            Our expertise also includes providing a comprehensive and
            tailor-made solution to meet the relocation needs of corporate and
            residential clients.
          </p>
        </section>
        <section className="pb-20 px-[3%] lg:py-20 flex flex-col gap-12 lg:flex-row justify-between">
          <div className="lg:basis-[40%] flex lg:flex-col flex-col-reverse gap-10">
            <h2 className="heading">
              What set us apart at <br /> Champions?
            </h2>
            <Image
              src="/abt1.png"
              width={700}
              loading="lazy"
              height={480}
              alt="arrow icon"
              className="w-full h-[300px] rounded-br-[15px] rounded-bl-[15px] lg:rounded-br-[0px] lg:rounded-bl-[0px] lg:h-[400px] object-cover lg:rounded-tl-[28px] lg:rounded-tr-[28px]"
            />
          </div>
          <div className="lg:basis-[55%]">
            <p className="text-base bodyText lg:leading-[24.6px] lg:text-xl max-w-full">
              We have been known for delivering reliable cargo handling
              services. Our company has been credited for providing Air Freight
              services, Freight Logistics services, hassle-free services for
              clearance of both export and import consignments at customs
              channels through Inland Container Depot located at Tin Can Island,
              Apapa, Onne Port, Port Harcourt, Calabar Port, Phase.II, Kirikiri,
              Muritala Mohammed International Airport Cargo Handling, Kano
              International Airport & Abuja International Airport.
              <br />
              <br />
              Leveraging on the extensive logistics and communications network,
              our team can create cost-effective solutions tailored to meet your
              needs. We have made a strong repute for impeccable freight
              logistics services in Nigeria and the world, which is
              characterized by Timeliness, Flexibility, Swiftness, Safety and
              Reliability.
            </p>
          </div>
        </section>
        <section className="pb-20 px-[3%] lg:py-20">
          <ServiceList
            title={
              <>
                Extensive integrated <br /> services that cover:
              </>
            }
            services={services}
          />
        </section>
        <section className="py-20 bg-primary px-[3%] grid gap-10 lg:gap-20">
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-20">
            <h2 className="heading text-primaryLight lg:min-w-[300px]">Our Mission.</h2>
            <p className="bodyText text-white lg:max-w-[668px]">
              Getting it right the first time and at all times.
            </p>
          </div>
          <div className="flex lg:items-center flex-col lg:flex-row gap-5 lg:gap-20">
            <h2 className="heading text-white lg:min-w-[300px]">Our Vision.</h2>
            <p className="bodyText text-white lg:max-w-[668px]">
              To be a world class logistics provider,using anvanced and modern
              technology with highly motivated staff.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-20">
            <h2 className="heading text-primaryLight lg:min-w-[300px]">Our Strength.</h2>
            <p className="bodyText text-white lg:max-w-[668px]">
              Our strength lies in our ability to offer this wide and extensive
              logistics package that is cost effective and convenient for all
              our clients, and its tailored to meet our client&#39;s needs.
            </p>
          </div>
        </section>
        <section className="py-20 px-[3%] flex lg:flex-row flex-col gap-10 lg:gap-40">
          <div className="w-fit">
            <h2 className="text-[24px] leading-[29.52px] lg:text-[39px] text-black font-clashmd lg:leading-[50px]">
              Frequently asked <br />
              <span className="text-primary">Questions</span>
            </h2>
          </div>
          <div className="flex-grow">
            <Faqs />
          </div>
        </section>
      </main>
    </>
  );
}
