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
    href: "#faqs", // Scroll to the FAQ section
    disabled: true, // Initially disable the FAQ link
  },
];

const Headers = ({ textColor = "text-black", logo1 = "yes" }) => {
  const [isNav, setIsNav] = useState(false);
  const pathName = usePathname();

  // Define the pages that contain the FAQ section
  const faqPages = ["/", "/about"]; // Add any other pages where the FAQ section exists

  // Check if the current page is one of the specific pages
  const isFaqPage = faqPages.includes(pathName);

  const handleFaqClick = (e) => {
    if (!isFaqPage) {
      e.preventDefault(); // Prevent navigation if not on the specific pages
    } else {
      // Scroll to the FAQs section
      const faqSection = document.getElementById("faqs");
      if (faqSection) {
        faqSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div
      className={`${
        textColor === "text-black" ? "bg-white" : ""
      } transition-all duration-300 fixed top-0 right-0 left-0 z-50`}
    >
      <div className="px-[3%] py-7 flex items-center justify-between relative">
        {logo1 === "yes" ? (
          <Link href="/">
            {!isNav && (
              <Image
                src="/logo.svg"
                width={56}
                height={41}
                alt="champion Logo"
              />
            )}
          </Link>
        ) : (
          <Link href="/">
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

        <div className="lg:hidden">
          <button
            onClick={() => setIsNav(true)}
            className={`${textColor} text-base pr-2`}
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
                  onClick={(e) => {
                    if (link.name === "FAQs") {
                      handleFaqClick(e); // Pass the event object
                    }
                    setIsNav(false); // Close the navigation menu
                  }}
                  className="text-2xl font-clash lg:text-base flex items-center gap-1"
                >
                  {link.name}{" "}
                  <Image src="/arrow5.svg" width={20} height={20} alt="arrow" />
                </Link>
              ))}
            </div>
            <div className="w-fit mx-auto">
              <QuoteBtn
                className="ml-[-50px]"
                href="/quote"
                title="Request a Quote"
              />
            </div>
          </div>
        )}
        <div className="lg:flex gap-5 items-center hidden">
          {navLinks.map((link, i) => (
            <Link
              onClick={link.name === "FAQs" ? handleFaqClick : undefined}
              className={`text-base font-clashmd hover:text-primary ${
                pathName.startsWith(link.href) ? "text-primary" : textColor
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
    </div>
  );
};

export default Headers;
