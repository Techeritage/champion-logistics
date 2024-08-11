"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function QuoteBtn({
  href,
  title,
  className = "",
  btnClassName = "",
}) {
  const pathName = usePathname();
  return (
    <Link href={href}>
      <div
        className={`${
          pathName === "/quote" ? "bg-black" : "bg-primary"
        } relative flex items-center hover:opacity-85 hover:transition-all hover:duration-300 text-white text-base px-8 lg:px-5 h-[62px] lg:h-[48px] rounded-full ${className}`}
      >
        {title}
        <span
          className={`${
            pathName === "/quote" ? "bg-black" : "bg-primary"
          } absolute right-[-40px] lg:right-[-35px] flex items-center justify-center text-white text-base w-[62px] h-[62px] lg:w-[48px] lg:h-[48px] rounded-full ${btnClassName}`}
        >
          <Image src="/arrow.svg" width={15} height={15} alt="arrow icon" />
        </span>
      </div>
    </Link>
  );
}
