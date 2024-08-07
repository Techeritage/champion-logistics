'use client';

import Link from "next/link";
import React from "react";
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

const Headers = ({ textColor = "text-black", logo1 = 'yes' }) => {
  const pathName = usePathname();
  return (
    <div className="px-[3%] py-7 flex items-center justify-between">
      {logo1 === 'yes' ? (
        <Link href='/home'>
          <Image src="/logo.svg" width={56} height={41} alt="champion Logo" />
        </Link>
      ) : (
        <Link href='/home'>
          <Image src="/logo2.svg" width={56} height={41} alt="champion Logo" />
        </Link>
      )
      }

      <div>
        <button className={`${textColor} text-base lg:hidden pr-2`}>Menu</button>
      </div>
      <div className="lg:flex gap-5 items-center hidden">
        {navLinks.map((link, i) => (
          <Link
            className={`text-base font-clashmd ${pathName === link.href ? "text-primary" : textColor
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
