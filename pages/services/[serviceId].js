import Headers from "@/app/Components/Headers";
import "@/app/globals.css";
import "animate.css";
import "@/public/ClashDisplay_Complete/ClashDisplay_Complete/ClashDisplay_Complete/Fonts/WEB/css/clash-display.css";
import Footer from "@/app/Components/Footer";
import { getAllServices, getSingleService } from "@/app/libs/Powerhouse";

import Image from "next/image";
import React from "react";

export default function OneServicePage({ serviceData }) {
  return (
    <>
      <main>
        <section className="relative">
          <Image
            src={serviceData?.bannerImage}
            width={1500}
            height={700}
            alt={serviceData?.header}
            className="h-[510px] lg:h-[600px] object-cover"
          />
          <div className="absolute top-0 right-0 left-0 bottom-0">
            <Headers textColor="text-white" logo1="no" />
            <div className="px-[3%] grid gap-3 top-[200px] absolute lg:top-[40%]">
              <h1 className="text-[48px] leading-[59.04px] lg:text-[69px] text-white lg:leading-[84.87px] max-w-[678px] font-clashmd">
                {serviceData?.header}
              </h1>
              <p className="text-base max-w-[90%] leading-[19.68px] lg:text-[25px] text-white lg:max-w-[887px] lg:leading-[30.75px]">
                {serviceData?.descriptionText}
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const services = await getAllServices();

  const paths = services.map((service) => ({
    params: { serviceId: service._id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const serviceId = params?.serviceId;

  const serviceData = await getSingleService(serviceId);

  return {
    props: {
      serviceData,
    },
    revalidate: 300, // Revalidate every 300 seconds
  };
}
