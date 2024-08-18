"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Headers from "@/app/Components/Headers";
import ServiceList from "./ServiceList";

export default function SingleServiceContainer({ data }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Check if the scroll position is above or below the desired height (e.g., 200px)
      if (scrollPosition > 500) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <main>
      <section className="relative">
        <Image
          src={data?.bannerImage}
          width={1500}
          height={700}
          alt={data?.header}
          className="h-[510px] lg:h-[600px] object-cover"
        />
        <div className="absolute top-0 right-0 left-0 bottom-0">
          <Headers
            textColor={isScrolled ? "text-black" : "text-white"}
            logo1={isScrolled ? "yes" : "no"}
          />

          <div className="px-[3%] grid gap-3 top-[200px] absolute lg:top-[40%]">
            <h1 className="text-[48px] leading-[59.04px] lg:text-[69px] text-white lg:leading-[84.87px] max-w-[678px] font-clashmd">
              {data?.header}
            </h1>
            <p className="text-base max-w-[90%] leading-[19.68px] lg:text-[25px] text-white lg:max-w-[887px] lg:leading-[30.75px]">
              {data?.descriptionText}
            </p>
          </div>
        </div>
      </section>
      {data?.keys?.map((key, index) => {
        const lastIndex = data?.keys?.length - 1;
        const length = data.keys.length;
        let sectionStyle = "";

        if (data?.keys?.length === 3) {
          sectionStyle =
            index === 0
              ? "bg-white"
              : index === 1
              ? "bg-primary"
              : "bg-[#00B9E8]";
        } else if (data?.keys?.length === 2) {
          sectionStyle = index === 0 ? "bg-white" : "bg-[#00B9E8]";
        } else {
          sectionStyle = "bg-white"; // Default background color
        }
        return (
          <section className={`px-[3%] py-20 ${sectionStyle}`} key={index}>
            <ServiceList
              title={key?.title}
              bkColor={length === 3 && index === 1 ? "white" : "black"}
              services={key?.contents}
              head2={index === lastIndex ? "yes" : ""}
              head2Text={index === lastIndex ? key?.title : ""}
            />
          </section>
        );
      })}
    </main>
  );
}
