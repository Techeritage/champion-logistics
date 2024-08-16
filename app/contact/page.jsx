import Image from "next/image";
import React from "react";
import Headers from "../Components/Headers";
import { getContactPage } from "../libs/Powerhouse";

export default async function ContactPage() {
  const contact = await getContactPage();
  return (
    <>
      <Headers />
      <main className="px-[3%] pb-20 pt-[97px] lg:pt-[104px]">
        <h2 className="headingBig py-10">
          Logistics Made <br /> <span className="text-primary"> Efficient</span>
          .
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
                href="tel:+2348186536416"
              >
                +234 (0)818 653 6416
              </a>
              <a
                className="text-base text-black font-clashmd"
                href="tel:+2348033204203"
              >
                +234 (0)803 320 4203
              </a>
            </div>
          </div>
          <div className="grid gap-5">
            <div className="grid gap-1">
              <h3 className="bodyText font-clashmd text-primary">
                Chat with us
              </h3>
              <p className="text-sm lg:text-base">
                Speak to our team via live chat
              </p>
            </div>
            <div className="grid gap-1">
              <a
                className="text-base text-black font-clashmd flex items-center gap-1"
                href="mailto:mails@championlogistics.org.ng"
              >
                mails@championlogistics.org.ng{" "}
                <Image src="/arrow4.svg" width={20} height={20} alt="arrow" />
              </a>

              <a
                className="text-base text-black font-clashmd flex items-center gap-1"
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                Message us on Instagram
                <Image src="/arrow4.svg" width={20} height={20} alt="arrow" />
              </a>
              <a
                className="text-base text-black font-clashmd flex items-center gap-1"
                href="https://twitter.com/yourprofile"
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
                11B, Kaara Street, Off Osolo Way, Ajao Estate, Oshodi/Isolo LGA,
                Lagos
                <Image src="/arrow4.svg" width={20} height={20} alt="arrow" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
