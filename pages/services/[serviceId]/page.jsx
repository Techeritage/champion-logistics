import Headers from "@/app/Components/Headers";
import ServiceList from "@/app/Components/ServiceList";
import servicesData from "@/app/Constant";
import { getSingleService } from "@/app/libs/Powerhouse";
import Image from "next/image";
import React from "react";

export default function OneServicePage({ serviceData }) {
  return (
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
      {serviceData.services && (
        <section className="px-[3%] py-20">
          <ServiceList
            title="Service Highlights"
            services={serviceData.services}
          />
        </section>
      )}

      {serviceData.additionalServices && (
        <section className="px-[3%] py-20 bg-primary">
          <ServiceList
            title="Additional Services"
            bkColor="white"
            services={serviceData.additionalServices}
          />
        </section>
      )}

      {serviceData.customerBenefits && (
        <section className="px-[3%] py-20 bg-[#00B9E8]">
          <ServiceList
            title="Additional Services"
            head2="yes"
            head2Text="Customer Benefits"
            bkColor="black"
            services={serviceData.customerBenefits}
          />
        </section>
      )}

      {serviceData.serviceOptions && (
        <section className="px-[3%] py-20 bg-[#00B9E8]">
          <ServiceList
            title="Additional Services"
            head2="yes"
            head2Text="Service Options"
            bkColor="black"
            services={serviceData.serviceOptions}
          />
        </section>
      )}
    </main>
  );
}

export async function getStaticProps({ params }) {
  const serviceId = params?.serviceId;

  // Fetch the service data based on the serviceId
  const serviceData = await getSingleService(serviceId);

  return {
    props: {
      serviceData,
    },
    revalidate: 300, // Revalidate at most every 60 seconds (or adjust as needed)
  };
}
