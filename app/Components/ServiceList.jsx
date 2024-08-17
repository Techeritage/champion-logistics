import React from "react";

const ServiceList = ({ title, services, bkColor = 'black', head2 = '', head2Text = '' }) => {
  return (
    <div className="grid gap-9 relative">
      {head2 === 'yes' && (
        <h2 className={`heading lg:absolute lg:text-center lg:top-[-20px] right-[3%] lg:max-w-[250px] ${bkColor === 'black' ? 'text-black' : 'text-white'}`}>{head2Text}</h2>
      )}
      {!head2 && (
        <h2 className={`heading lg:max-w-[30%] ${bkColor === 'black' ? 'text-black' : 'text-white'}`}>{title}</h2>
      )}

      <div className="grid lg:grid-cols-2 gap-7 lg:gap-5 lg:gap-y-10 lg:max-w-[80%]">
        {services.map((service, index) => (
          <div key={index} className="max-w-[90%] lg:max-w-[421px] grid gap-3">
            <div className={`w-[30px] h-[30px] text-sm ${bkColor === 'black' ? 'text-white bg-primary' : 'bg-white text-primary'}  font-clashmd lg:text-base rounded-full  flex items-center justify-center lg:w-[40px] lg:h-[40px]`}>
              {index + 1}
            </div>
            <p className={`${bkColor === 'black' ? 'lg:text-[#292929]' : 'text-white'} font-clashmd bodyText leading-[24.6px] text-base lg:text-xl`}>
              {service}
            </p>
          </div>
        ))}
      </div>
    </div >
  );
};

export default ServiceList;
