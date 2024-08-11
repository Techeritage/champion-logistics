import Image from "next/image";
import React from "react";
import QuoteBtn from "../Components/QuoteBtn";
import Headers from "../Components/Headers";

const services = [
  {
    title: "Land Freight Forwarding",
    desc: "We offer flexible road freight services customized to meet the needs of international groupage, part-load and full-load shipments by road and inter-modal. ",
    image: "/land.png",
    imagemob: "/land2.png",
    link: "/services/landFreightForwarding",
  },
  {
    title: "Sea Freight Forwarding",
    desc: "Our comprehensive sea freight ,specializing in major global markets including North America, Asia, Latin America, Africa, Europe, and the Middle East. ",
    image: "/sea.png",
    imagemob: "/sea.png",
    link: "/services/seaFreightForwarding",
  },
  {
    title: "Air Freight Forwarding",
    desc: "Flexibility between standardized connections with fixed schedules for air charter is one of prime advantages that CHAMPION brings forth. ",
    image: "/air.png",
    imagemob: "/air2.png",
    link: "/services/airFreightForwarding",
  },
  {
    title: "Courier Services",
    desc: "We offer integrated supply chain management Door to Door delivery services. These include but not limited to bulk deliveries of bank documents, handling of companies mailing room, pick up services.",
    image: "/courier.png",
    imagemob: "/courier.png",
    link: "/services/courier",
  },
  {
    title: "Warehousing",
    desc: "Located in the close proximity to the International Airports and Sea Ports, CHAMPION Logistics procures warehouses that are well laid out,",
    image: "/warehousing.png",
    imagemob: "/warehousing.png",
    link: "/services/warehousing",
  },
];

export default function ServicePage() {
  return (
    <>
      <Headers />
      <main>
        <section className="px-[3%] py-10 pt-[97px] lg:pt-[104px]">
          <h1 className="headingBig">Extensive Range of Services</h1>
        </section>
        <section className="grid gap-5 pt-16 mb-5">
          {services.map((service) => (
            <div className="relative" key={service.title}>
              <Image
                src={service.image}
                width={2000}
                loading="lazy"
                height={465}
                alt={service.title}
                className="w-full hidden lg:block"
              />
              <Image
                src={service.imagemob}
                width={2000}
                loading="lazy"
                height={465}
                alt={service.title}
                className="w-full lg:hidden h-[457px] object-cover"
              />
              <div className="absolute grid gap-6 lg:gap-4 left-[3%] bottom-7 lg:bottom-3">
                <div>
                  <h2 className="text-[25px] mb-2 font-clashmd text-white max-w-[269px] lg:max-w-full">
                    {service.title}
                  </h2>
                  <p className="lg:text-base lg:max-w-[599px] lg:leading-[19.68px] text-white text-sm leading-[17.22px]">
                    {service.desc}
                  </p>
                </div>

                <div className="max-w-fit">
                  <QuoteBtn
                    title="Learn More"
                    href={service.link}
                    className="lg:h-[62px] w-[260px] justify-center"
                    btnClassName="lg:h-[62px] lg:w-[62px] lg:right-[-40px]"
                  />
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </>

  );
}
