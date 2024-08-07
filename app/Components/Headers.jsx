"use client";

import Link from "next/link";
import React, { useState } from "react";
import QuoteBtn from "./QuoteBtn";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Contact Us",
    href: "/contact",
  },
  {
    name: "FAQs",
    href: "/faqs",
  },
];

const Headers = ({ textColor = "text-black", logo1 = "yes" }) => {
  const [isNav, setIsNav] = useState(false);
  const pathName = usePathname();
  return (
    <div className="px-[3%] py-7 flex items-center justify-between relative">
      {logo1 === "yes" ? (
        <Link href="/home">
          {!isNav && (
            <Image src="/logo.svg" width={56} height={41} alt="champion Logo" />
          )}
        </Link>
      ) : (
        <Link href="/home">
          {!isNav && (
            <Image
              src="/logo2.svg"
              width={56}
              height={41}
              alt="champion Logo"
            />
          )}
        </Link>
      )}

      <div>
        <button
          onClick={() => setIsNav(true)}
          className={`${textColor} text-base lg:hidden pr-2`}
        >
          Menu
        </button>
      </div>
      {isNav && (
        <div className="h-[403px] transition-all duration-700 lg:hidden flex justify-between flex-col p-5 w-[90%] bg-primaryLight rounded-[20px] absolute left-[50%] translate-x-[-50%] top-5 z-10">
          <div className="flex items-center justify-between">
            <h3 className="text-primary font-clashmd text-xl">Champion</h3>
            <button onClick={() => setIsNav(false)}>Close</button>
          </div>
          <div className="grid gap-2">
            {navLinks.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="text-2xl font-clash lg:text-base flex items-center gap-1"
              >
                {link.name}{" "}
                <Image src="/arrow5.svg" width={20} height={20} alt="arrow" />
              </Link>
            ))}
          </div>
          <div className="w-fit mx-auto">
            <QuoteBtn href="/quote" title="Request a Quote" />
          </div>
        </div>
      )}
      <div className="lg:flex gap-5 items-center hidden">
        {navLinks.map((link, i) => (
          <Link
            className={`text-base font-clashmd ${
              pathName === link.href ? "text-primary" : textColor
            }`}
            key={i}
            href={link.href}
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div className="mr-[3%] hidden lg:block">
        <QuoteBtn href="/quote" title="Request a Quote" />
      </div>
    </div>
  );
};

export default Headers;
