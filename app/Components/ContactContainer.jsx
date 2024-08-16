import React from "react";
import Image from "next/image";

export default function ContactContainer({ data }) {
  return (
    <main className="px-[3%] pb-20 pt-[97px] lg:pt-[104px]">
      <h2 className="headingBig py-10">
        {data?.header?.split("Efficient")[0]}
        <br />
        <span className="text-primary">Efficient</span>
        {data?.header?.split("Efficient")[1]}
      </h2>
      <section className="grid gap-28 ">
        <div className="grid gap-5">
          <div className="grid gap-1">
            <h3 className="bodyText font-clashmd text-primary">Call us</h3>
            <p className="text-sm lg:text-base">
              Call out team Monday to Friday 8am - 5pm
            </p>
          </div>
          <div className="grid gap-1">
            <a
              className="text-base text-black font-clashmd"
              href={`tel:${data?.callUs?.phone2}`}
            >
              {data?.callUs?.phone1}
            </a>
            <a
              className="text-base text-black font-clashmd"
              href={`tel:${data?.callUs?.phone2}`}
            >
              {data?.callUs?.phone2}
            </a>
          </div>
        </div>
        <div className="grid gap-5">
          <div className="grid gap-1">
            <h3 className="bodyText font-clashmd text-primary">Chat with us</h3>
            <p className="text-sm lg:text-base">
              Speak to our team via live chat
            </p>
          </div>
          <div className="grid gap-1">
            <a
              className="text-base text-black font-clashmd flex items-center gap-1"
              href={`mailto:${data?.chatUs?.mail}`}
            >
              {data?.chatUs?.mail}
              <Image src="/arrow4.svg" width={20} height={20} alt="arrow" />
            </a>

            <a
              className="text-base text-black font-clashmd flex items-center gap-1"
              href={`${data?.chatUs.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Message us on Instagram
              <Image src="/arrow4.svg" width={20} height={20} alt="arrow" />
            </a>
            <a
              className="text-base text-black font-clashmd flex items-center gap-1"
              href={`${data?.chatUs.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Shoot us a tweet
              <Image src="/arrow4.svg" width={20} height={20} alt="arrow" />
            </a>
          </div>
        </div>
        <div className="grid gap-5">
          <div className="grid gap-2">
            <h3 className="bodyText font-clashmd text-primary">Visit us</h3>
            <p className="text-sm lg:text-base">
              Chat with us in person at out Lagos HQ
            </p>
          </div>
          <div className="grid gap-1">
            <a
              className="text-base max-w-[280px] lg:max-w-[342px] text-black font-clashmd flex items-center gap-1"
              href="https://www.google.com/maps/place/11B, Kaara Street, Off Osolo Way, Ajao Estate, Oshodi/Isolo LGA, Lagos"
            >
              {data?.address}
              <Image src="/arrow4.svg" width={20} height={20} alt="arrow" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
