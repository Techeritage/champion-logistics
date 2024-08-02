"use client";
import Image from "next/image";
import React, { useState } from "react";

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:mb-8 mb-5">
      <button className="w-full" onClick={toggleOpen}>
        <div className="flex items-center justify-between gap-10">
          <h3 className="font-clashmd text-start text-base text-black lg:text-[25px]">
            {question}
          </h3>
          {isOpen ? (
            <span className="border lg:border-[3px] border-primary flex items-center justify-center text-white text-base min-w-[30px] h-[30px] lg:w-[45px] lg:h-[45px] rounded-full">
              <Image
                src="/arrow2.svg"
                width={15}
                height={15}
                alt="arrow icon"
                className="w-[10px] lg:w-[15px]"
              />
            </span>
          ) : (
            <span className="bg-primary flex items-center justify-center text-white text-base min-w-[30px] h-[30px] lg:w-[48px] lg:h-[48px] rounded-full">
              <Image
                src="/arrow.svg"
                width={15}
                height={15}
                alt="arrow icon"
                className="w-[10px] lg:w-[15px]"
              />
            </span>
          )}
        </div>

        {isOpen && (
          <div className="max-w-[80%] lg:max-w-[657px] mt-4 lg:mt-7">
            <p className="text-smmin- text-black text-start lg:text-base">
              {answer}
            </p>
          </div>
        )}
      </button>
    </div>
  );
};

const Accordion = () => {
  const items = [
    {
      question: "What shipping services do you offer",
      answer:
        "You earn [specific amount or percentage] for every referred friend who makes a purchase.",
    },
    {
      question: "What services does your logistics company offer?",
      answer:
        "We offer a comprehensive range of logistics services, including freight forwarding, warehousing, distribution, supply chain management, customs brokerage, and last-mile delivery services.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "There is no limit to how many friends you can refer. The more, the merrier!",
    },
    {
      question: " How do I schedule a pickup?",
      answer:
        "Yes, you can track the status of your referrals in your account dashboard.",
    },
  ];

  return (
    <div className="">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </div>
  );
};

export default Accordion;
