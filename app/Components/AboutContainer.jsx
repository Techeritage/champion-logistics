import Image from "next/image";
import React from "react";
import ServiceList from "./ServiceList";
import Faqs from "../Components/Faqs";

export default function AboutContainer({ data, home }) {
  return (
    <main className="pt-[97px] lg:pt-[104px]">
      <section className="px-[3%]">
        <h1 className="headingBig max-w-[100%] py-10">{data?.header}</h1>
        <Image
          src={data?.key1?.bannerImage}
          width={2000}
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
          {data?.key1?.header?.split("Champions")[0]}
          <br /> <span className="text-primary">Champions</span>
          {data?.key1?.header?.split("Champions")[1]}
        </h2>
        <p className="text-base mt-10 bodyText lg:leading-[24.6px] lg:text-xl max-w-full lg:max-w-[60%]">
          {data?.key1?.descriptionText}
        </p>
      </section>
      <section className="pb-20 px-[3%] lg:py-20 flex flex-col gap-12 lg:flex-row justify-between">
        <div className="lg:basis-[40%] flex lg:flex-col flex-col-reverse gap-10">
          <h2 className="heading max-w-[70%] lg:max-w-[80%]">
            {data?.key2?.header}
          </h2>
          <Image
            src={data?.key2?.bannerImage}
            width={700}
            loading="lazy"
            height={480}
            alt="arrow icon"
            className="w-full h-[300px] rounded-br-[15px] rounded-bl-[15px] lg:rounded-br-[0px] lg:rounded-bl-[0px] lg:h-[400px] object-cover lg:rounded-tl-[28px] lg:rounded-tr-[28px]"
          />
        </div>
        <div className="lg:basis-[55%]">
          <p className="text-base bodyText lg:leading-[24.6px] lg:text-xl max-w-full">
            {data?.key2.descriptionText}
          </p>
        </div>
      </section>
      <section className="pb-20 px-[3%] lg:py-20">
        <ServiceList
          title={data?.key3?.header}
          services={data?.key3?.content}
        />
      </section>
      <section className="py-20 bg-primary px-[3%] grid gap-10 lg:gap-20">
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-20">
          <h2 className="heading text-primaryLight lg:min-w-[300px]">
            Our Mission.
          </h2>
          <p className="bodyText text-white lg:max-w-[668px]">
            {data?.key4?.mission}
          </p>
        </div>
        <div className="flex lg:items-center flex-col lg:flex-row gap-5 lg:gap-20">
          <h2 className="heading text-white lg:min-w-[300px]">Our Vision.</h2>
          <p className="bodyText text-white lg:max-w-[668px]">
            {data?.key4?.vision}
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-20">
          <h2 className="heading text-primaryLight lg:min-w-[300px]">
            Our Strength.
          </h2>
          <p className="bodyText text-white lg:max-w-[668px]">
            {data?.key4?.strength}
          </p>
        </div>
      </section>
      <section
        id="faqs"
        className="py-20 pt-28 px-[3%] flex lg:flex-row flex-col gap-10 lg:gap-40"
      >
        <div className="w-fit">
          <h2 className="text-[24px] leading-[29.52px] lg:text-[39px] text-black font-clashmd lg:leading-[50px]">
            Frequently asked <br />
            <span className="text-primary">Questions</span>
          </h2>
        </div>
        <div className="flex-grow">
          <Faqs faqs={home?.faqs} />
        </div>
      </section>
    </main>
  );
}
