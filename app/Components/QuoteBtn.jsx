import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function QuoteBtn({
  href,
  title,
  className = "",
  btnClassName = "",
}) {
  return (
    <div
      className={`bg-primary ml-[-50px] relative flex items-center text-white text-base px-8 lg:px-5 h-[62px] lg:h-[48px] rounded-full ${className}`}
    >
      <Link href={href}>{title}</Link>
      <span
        className={`bg-primary absolute right-[-40px] lg:right-[-35px] flex items-center justify-center text-white text-base w-[62px] h-[62px] lg:w-[48px] lg:h-[48px] rounded-full ${btnClassName}`}
      >
        <Image src="/arrow.svg" width={15} height={15} alt="arrow icon" />
      </span>
    </div>
  );
}
