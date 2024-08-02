import React from "react";

const ServiceList = ({ title, services }) => {
  return (
    <div className="grid gap-9">
      <h2 className="heading">{title}</h2>
      <div className="grid lg:grid-cols-2 gap-7 lg:gap-5">
        {services.map((service, index) => (
          <div key={index} className="max-w-[90%] lg:max-w-[421px] grid gap-2">
            <div className="w-[30px] h-[30px] text-sm text-white font-clashmd lg:text-base rounded-full bg-primary flex items-center justify-center lg:w-[40px] lg:h-[40px]">
              {index + 1}
            </div>
            <p className="font-clashmd bodyText leading-[24.6px] text-base lg:text-xl lg:text-[#292929]">
              {service}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
