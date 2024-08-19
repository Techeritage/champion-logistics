"use client";
import { useInView } from "react-intersection-observer";
import QuoteBtn from "../Components/QuoteBtn";
import Faqs from "../Components/Faqs";
import Image from "next/image";
import { useRef } from "react";

export default function HomeSection1({ data }) {
  const faqRef = useRef(null);
  const { ref: textRef, inView: textInView } = useInView({
    threshold: 0.3, // Adjust threshold as needed
    triggerOnce: true, // Only trigger the animation once
  });

  const { ref: boxRef, inView: boxInView } = useInView({
    threshold: 0.4, // Adjust threshold as needed
    triggerOnce: true, // Only trigger the animation once
  });

  const { ref: boxRef2, inView: boxInView2 } = useInView({
    threshold: 0.4, // Adjust threshold as needed
    triggerOnce: true, // Only trigger the animation once
  });

  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: ref11, inView: inView11 } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const { ref: ref12, inView: inView12 } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: refa, inView: inViewa } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: refb, inView: inViewb } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: refc, inView: inViewc } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const { ref: refd, inView: inViewd } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const { ref: refe, inView: inViewe } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: ref3, inView: inView3 } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: ref4, inView: inView4 } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: ref5, inView: inView5 } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <main className="px-[3%] overflow-hidden pt-[97px] lg:pt-[104px]">
      <section ref={textRef}>
        <div>
          <div className="flex pt-12 pb-9 flex-col gap-9 lg:flex-row items-center justify-between lg:py-9">
            {data?.header1 && (
              <h1
                className={`text-5xl animate__animated ${
                  textInView
                    ? "animate__backInDown visible-after-animation"
                    : "hidden-before-animation"
                } lg:text-[69px] font-clashmd max-w-[921px] leading-[59.04px] lg:leading-[80px]`}
              >
                {data?.header1?.split("Efficient")[0]}
                <span className="text-primary">Efficient</span>
                {data?.header1?.split("Efficient")[1]}
              </h1>
            )}

            <p
              className={`lg:max-w-[365px] leading-[19.68px] animate__animated ${
                textInView
                  ? "animate__bounceInRight visible-after-animation"
                  : "hidden-before-animation"
              }`}
            >
              {data?.descriptionText1}
            </p>
          </div>
          <Image
            loading="lazy"
            src={data?.bannerImage}
            width={2000}
            height={465}
            alt="arrow icon"
            className={`w-full animate__animated ${
              textInView
                ? "animate__fadeInUp visible-after-animation"
                : "hidden-before-animation"
            } h-[301px] object-cover rounded-[15px] lg:rounded-[20px] lg:h-[465px]`}
          />
        </div>
      </section>
      <section className="py-20">
        <div
          ref={boxRef}
          className={`bg-primary animate__animated ${
            boxInView
              ? "animate__backInUp visible-after-animation"
              : "hidden-before-animation"
          } px-4 rounded-full w-fit py-2 text-sm lg:text-base text-white`}
        >
          {data?.subHeader2}
        </div>
        <div
          ref={boxRef}
          className="flex lg:flex-row flex-col gap-8 lg:items-center justify-between py-5"
        >
          <h2
            className={`text-[24px] animate__animated ${
              boxInView
                ? "animate__bounceInLeft visible-after-animation"
                : "hidden-before-animation"
            } leading-[29.52px] lg:text-[39px] text-black font-clashmd max-w-[284px] lg:max-w-[540px] lg:leading-[50px]`}
          >
            {data?.header2?.split("Champions Logistics")[0]}
            <span className="text-primary">Champions Logistics</span>
            {data?.header2?.split("Champions Logistics")[1]}
          </h2>
          <p
            className={`text-base animate__animated ${
              boxInView
                ? "animate__bounceInRight visible-after-animation"
                : "hidden-before-animation"
            } leading-[19.68px] text-black max-w-[557px]`}
          >
            {data?.descriptionText2}
          </p>
        </div>

        {/**Desktop */}
        <div
          ref={ref11}
          className="hidden lg:flex mt-10 lg:mt-0 lg:flex-row flex-col min-w-full gap-5 min-h-[402px]"
        >
          <div
            className={`animate__animated ${
              inView11
                ? "animate__fadeInLeft visible-after-animation"
                : "hidden-before-animation"
            } relative`}
          >
            <Image
              loading="lazy"
              src={data?.aboutImageText[0]?.image}
              width={475}
              height={402}
              alt="arrow icon"
              className="rounded-[20px] min-w-full h-[301px] lg:h-[402px]"
            />
            <Image
              loading="lazy"
              src="/abc1.svg"
              width={58}
              height={58}
              alt="arrow icon"
              className="absolute top-4 left-4 w-[40px] h-[40px] lg:w-[58px] lg:h-[58px]"
            />
            <p className="text-sm max-w-[80%] lg:text-base font-clashmd text-white absolute bottom-7 leading-[19.68px] left-4">
              {data?.aboutImageText[0]?.content}
            </p>
          </div>
          <div
            className={`animate__animated ${
              inView11
                ? "animate__fadeInUp visible-after-animation"
                : "hidden-before-animation"
            } grid gap-5`}
          >
            <div className="relative">
              <Image
                loading="lazy"
                src={data?.aboutImageText[1]?.image}
                width={475}
                height={169}
                alt="arrow icon"
                className="rounded-[20px] min-w-full lg:h-[169px] h-[196px]"
              />
              <Image
                loading="lazy"
                src="/abc2.svg"
                width={40}
                height={40}
                alt="arrow icon"
                className="absolute top-4 left-4"
              />
              <p className="text-sm lg:text-base max-w-[80%] font-clashmd text-white absolute bottom-5 leading-[19.68px] left-4">
                {data?.aboutImageText[1]?.content}
              </p>
            </div>
            <div className="relative">
              <Image
                loading="lazy"
                src={data?.aboutImageText[2]?.image}
                width={475}
                height={209}
                alt="arrow icon"
                className="rounded-[20px] min-w-full h-[216px] lg:h-[209px]"
              />
              <Image
                loading="lazy"
                src="/abc3.svg"
                width={40}
                height={40}
                alt="arrow icon"
                className="absolute top-4 left-4"
              />
              <p className="text-sm lg:text-base max-w-[80%] font-clashmd text-white absolute bottom-7 leading-[19.68px] left-4">
                {data?.aboutImageText[2]?.content}
              </p>
            </div>
          </div>
          <div
            className={`animate__animated ${
              inView11
                ? "animate__fadeInRight visible-after-animation"
                : "hidden-before-animation"
            } grid gap-5`}
          >
            <div className="relative">
              <Image
                loading="lazy"
                src={data?.aboutImageText[3]?.image}
                width={361}
                height={221}
                alt="arrow icon"
                className="rounded-[20px] min-w-full h-[227px] lg:h-[221px]"
              />
              <Image
                loading="lazy"
                src="/abc4.svg"
                width={40}
                height={40}
                alt="arrow icon"
                className="absolute top-4 left-4"
              />
              <p className="text-sm lg:text-base max-w-[80%] font-clashmd text-white absolute bottom-5 leading-[19.68px] left-4">
                {data?.aboutImageText[3]?.content}
              </p>
            </div>
            <div className="relative">
              <Image
                loading="lazy"
                src={data?.aboutImageText[4]?.image}
                width={361}
                height={157}
                alt="arrow icon"
                className="rounded-[20px] min-w-full h-[155px] lg:h-[157px]"
              />
              <Image
                loading="lazy"
                src="/abc5.svg"
                width={40}
                height={40}
                alt="arrow icon"
                className="absolute top-4 left-4"
              />
              <p className="text-sm lg:text-base max-w-[80%] font-clashmd text-white absolute bottom-7 leading-[19.68px] left-4">
                {data?.aboutImageText[4]?.content}
              </p>
            </div>
          </div>
        </div>
        {/**Mobile */}
        <div className="flex lg:hidden mt-10 lg:mt-0 lg:flex-row flex-col min-w-full gap-5 min-h-[402px]">
          <div
            ref={ref1}
            className={`animate__animated ${
              inView1
                ? "animate__fadeInUp visible-after-animation"
                : "hidden-before-animation"
            } relative`}
          >
            <Image
              loading="lazy"
              src={data?.aboutImageText[0]?.image}
              width={475}
              height={402}
              alt="arrow icon"
              className="rounded-[20px] min-w-full h-[301px] lg:h-[402px]"
            />
            <Image
              loading="lazy"
              src="/abc1.svg"
              width={58}
              height={58}
              alt="arrow icon"
              className="absolute top-4 left-4 w-[40px] h-[40px] lg:w-[58px] lg:h-[58px]"
            />
            <p className="text-sm lg:text-base font-clashmd text-white absolute bottom-7 leading-[19.68px] left-4">
              {data?.aboutImageText[0]?.content}
            </p>
          </div>
          <div className={`grid gap-5`}>
            <div
              ref={ref2}
              className={`animate__animated ${
                inView2
                  ? "animate__fadeInUp visible-after-animation"
                  : "hidden-before-animation"
              } relative`}
            >
              <Image
                loading="lazy"
                src={data?.aboutImageText[1]?.image}
                width={475}
                height={169}
                alt="arrow icon"
                className="rounded-[20px] min-w-full lg:h-[169px] h-[196px]"
              />
              <Image
                loading="lazy"
                src="/abc2.svg"
                width={40}
                height={40}
                alt="arrow icon"
                className="absolute top-4 left-4"
              />
              <p className="text-sm lg:text-base font-clashmd text-white absolute bottom-5 leading-[19.68px] left-4">
                {data?.aboutImageText[1]?.content}
              </p>
            </div>
            <div
              ref={ref3}
              className={`animate__animated ${
                inView3
                  ? "animate__fadeInUp visible-after-animation"
                  : "hidden-before-animation"
              } relative`}
            >
              <Image
                loading="lazy"
                src={data?.aboutImageText[2]?.image}
                width={475}
                height={209}
                alt="arrow icon"
                className="rounded-[20px] min-w-full h-[216px] lg:h-[209px]"
              />
              <Image
                loading="lazy"
                src="/abc3.svg"
                width={40}
                height={40}
                alt="arrow icon"
                className="absolute top-4 left-4"
              />
              <p className="text-sm lg:text-base font-clashmd text-white absolute bottom-7 leading-[19.68px] left-4">
                {data?.aboutImageText[2]?.content}
              </p>
            </div>
          </div>
          <div className={`grid gap-5`}>
            <div
              ref={ref4}
              className={`animate__animated ${
                inView4
                  ? "animate__fadeInUp visible-after-animation"
                  : "hidden-before-animation"
              } relative`}
            >
              <Image
                loading="lazy"
                src={data?.aboutImageText[3]?.image}
                width={361}
                height={221}
                alt="arrow icon"
                className="rounded-[20px] min-w-full h-[227px] lg:h-[221px]"
              />
              <Image
                loading="lazy"
                src="/abc4.svg"
                width={40}
                height={40}
                alt="arrow icon"
                className="absolute top-4 left-4"
              />
              <p className="text-sm lg:text-base font-clashmd text-white absolute bottom-5 leading-[19.68px] left-4">
                {data?.aboutImageText[3]?.content}
              </p>
            </div>
            <div
              ref={ref5}
              className={`animate__animated ${
                inView5
                  ? "animate__fadeInUp visible-after-animation"
                  : "hidden-before-animation"
              } relative`}
            >
              <Image
                loading="lazy"
                src={data?.aboutImageText[4]?.image}
                width={361}
                height={157}
                alt="arrow icon"
                className="rounded-[20px] min-w-full h-[155px] lg:h-[157px]"
              />
              <Image
                loading="lazy"
                src="/abc5.svg"
                width={40}
                height={40}
                alt="arrow icon"
                className="absolute top-4 left-4"
              />
              <p className="text-sm lg:text-base font-clashmd text-white absolute bottom-7 leading-[19.68px] left-4">
                {data?.aboutImageText[4]?.content}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div
          ref={boxRef2}
          className={`bg-primary animate__animated ${
            boxInView2
              ? "animate__backInUp visible-after-animation"
              : "hidden-before-animation"
          } px-4 rounded-full w-fit py-2 text-sm lg:text-base text-white`}
        >
          {data?.subHeader3}
        </div>
        <div
          ref={boxRef2}
          className="flex lg:flex-row flex-col gap-8 lg:items-center justify-between py-5"
        >
          <h2
            className={`text-[24px] animate__animated ${
              boxInView2
                ? "animate__bounceInLeft visible-after-animation"
                : "hidden-before-animation"
            } leading-[29.52px] lg:text-[39px] text-black font-clashmd max-w-[284px] lg:max-w-[540px] lg:leading-[50px]`}
          >
            {data?.header3}
          </h2>
          <p
            className={`text-base animate__animated ${
              boxInView2
                ? "animate__bounceInRight visible-after-animation"
                : "hidden-before-animation"
            } leading-[19.68px] text-black max-w-[557px]`}
          >
            {data?.descriptionText3}
          </p>
        </div>
        {/**Desktop */}
        <div
          ref={ref12}
          className="hidden lg:flex lg:flex-row flex-col lg:max-h-[450px] gap-5 pt-10"
        >
          <div
            className={`animate__animated ${
              inView12
                ? "animate__fadeInLeft visible-after-animation"
                : "hidden-before-animation"
            } basis-[45%] relative`}
          >
            <Image
              loading="lazy"
              src={data?.serviceImageText[0]?.image}
              width={1000}
              height={700}
              alt="arrow icon"
              className="h-[301px] lg:h-[450px] w-full object-cover rounded-[20px]"
            />
            <div className="flex absolute bottom-7 left-5">
              <div className="h-[50px] w-fit flex items-center justify-center rounded-full px-4 text-black text-xs lg:text-base bg-primaryLight">
                {data?.serviceImageText[0]?.pointOne}
              </div>
              <div className="h-[50px] w-fit ml-[-10px] flex items-center justify-center rounded-full px-4 text-black text-xs lg:text-base bg-secondary">
                {data?.serviceImageText[0]?.pointTwo}
              </div>
            </div>
          </div>
          <div
            className={`animate__animated ${
              inView12
                ? "animate__fadeInUp visible-after-animation"
                : "hidden-before-animation"
            } basis-[27.5%] relative`}
          >
            <Image
              loading="lazy"
              src={data?.serviceImageText[1]?.image}
              width={1000}
              height={700}
              alt="arrow icon"
              className="h-[301px] lg:h-[450px] object-cover rounded-[20px]"
            />
            <div className="flex absolute bottom-7 left-5">
              <div className="h-[50px] w-fit flex items-center justify-center rounded-full px-4 text-black text-xs lg:text-base bg-secondary">
                {data?.serviceImageText[1]?.pointOne}
              </div>
              <div className="h-[50px] w-fit ml-[-10px] flex items-center justify-center rounded-full px-4 text-black text-xs lg:text-base  bg-primaryLight">
                {data?.serviceImageText[1]?.pointTwo}
              </div>
            </div>
          </div>
          <div
            className={`animate__animated ${
              inView12
                ? "animate__fadeInRight visible-after-animation"
                : "hidden-before-animation"
            } basis-[27.5%] relative`}
          >
            <Image
              loading="lazy"
              src={data?.serviceImageText[2]?.image}
              width={1000}
              height={700}
              alt="arrow icon"
              className="h-[301px] lg:h-[450px] object-cover rounded-[20px]"
            />
            <div className="flex absolute bottom-7 left-5">
              <div className="h-[50px] w-fit flex items-center justify-center rounded-full px-4 text-black text-xs lg:text-base bg-primaryLight">
                {data?.serviceImageText[2]?.pointOne}
              </div>
              <div className="h-[50px] w-fit ml-[-10px] flex items-center justify-center rounded-full px-4 text-black text-xs lg:text-base bg-secondary">
                {data?.serviceImageText[2]?.pointTwo}
              </div>
            </div>
          </div>
        </div>

        {/**Mobile */}
        <div className="flex lg:hidden lg:flex-row flex-col lg:max-h-[450px] gap-5 pt-10">
          <div
            ref={refa}
            className={`animate__animated ${
              inViewa
                ? "animate__fadeInUp visible-after-animation"
                : "hidden-before-animation"
            } basis-[45%] relative`}
          >
            <Image
              loading="lazy"
              src={data?.serviceImageText[0]?.image}
              width={1000}
              height={700}
              alt="arrow icon"
              className="h-[301px] lg:h-[450px] w-full object-cover rounded-[20px]"
            />
            <div className="flex absolute bottom-7 left-5">
              <div className="h-[50px] w-fit flex items-center justify-center rounded-full px-4 text-black text-xs lg:text-base bg-primaryLight">
                {data?.serviceImageText[0]?.pointOne}
              </div>
              <div className="h-[50px] w-fit ml-[-10px] flex items-center justify-center rounded-full px-4 text-black text-xs lg:text-base bg-secondary">
                {data?.serviceImageText[0]?.pointTwo}
              </div>
            </div>
          </div>
          <div
            ref={refb}
            className={`animate__animated ${
              inViewb
                ? "animate__fadeInUp visible-after-animation"
                : "hidden-before-animation"
            } basis-[27.5%] relative`}
          >
            <Image
              loading="lazy"
              src={data?.serviceImageText[1]?.image}
              width={1000}
              height={700}
              alt="arrow icon"
              className="h-[301px] lg:h-[450px] object-cover rounded-[20px]"
            />
            <div className="flex absolute bottom-7 left-5">
              <div className="h-[50px] w-fit flex items-center justify-center rounded-full px-4 text-black text-xs lg:text-base bg-secondary">
                {data?.serviceImageText[1]?.pointOne}
              </div>
              <div className="h-[50px] w-fit ml-[-10px] flex items-center justify-center rounded-full px-4 text-black text-xs lg:text-base  bg-primaryLight">
                {data?.serviceImageText[1]?.pointTwo}
              </div>
            </div>
          </div>
          <div
            ref={refc}
            className={`animate__animated ${
              inViewc
                ? "animate__fadeInUp visible-after-animation"
                : "hidden-before-animation"
            } basis-[27.5%] relative`}
          >
            <Image
              loading="lazy"
              src={data?.serviceImageText[2]?.image}
              width={1000}
              height={700}
              alt="arrow icon"
              className="h-[301px] lg:h-[450px] object-cover rounded-[20px]"
            />
            <div className="flex absolute bottom-7 left-5">
              <div className="h-[50px] w-fit flex items-center justify-center rounded-full px-4 text-black text-xs lg:text-base bg-primaryLight">
                {data?.serviceImageText[2]?.pointOne}
              </div>
              <div className="h-[50px] w-fit ml-[-10px] flex items-center justify-center rounded-full px-4 text-black text-xs lg:text-base bg-secondary">
                {data?.serviceImageText[2]?.pointTwo}
              </div>
            </div>
          </div>
        </div>
        <div className="w-fit mx-auto mt-14 lg:mt-20">
          <QuoteBtn
            className="ml-[-50px]"
            title="View Our Services"
            href="/services"
          />
        </div>
      </section>
      <section className="py-20">
        <div className="flex flex-col lg:flex-row gap-9 lg:items-center justify-between">
          <div className="flex flex-col justify-center gap-5">
            <div
              ref={refd}
              className={`animate__animated ${
                inViewd
                  ? "lg:animate__bounceInRight animate__bounceInLeft visible-after-animation"
                  : "hidden-before-animation"
              }`}
            >
              <h2
                className={`text-[24px] leading-[29.52px] lg:text-[39px] text-black font-clashmd lg:leading-[50px]`}
              >
                Ship around the globe <br />
                <span className="text-primary"> Efficiently.</span>
              </h2>
              <h2 className="text-[24px] leading-[29.52px] lg:text-[39px] text-black font-clashmd lg:leading-[50px]">
                Find out the price right <br /> now --
              </h2>
            </div>

            <div className="w-fit mt-5 hidden lg:block">
              <QuoteBtn title="Request a Quote" href="/quote" />
            </div>
          </div>
          <div>
            <Image
              loading="lazy"
              src="/map.png"
              width={566}
              height={611}
              alt="map"
              className=""
            />
          </div>
          <div className="mx-auto w-fit mt-10 lg:hidden">
            <QuoteBtn
              className="ml-[-50px]"
              title="Request a Quote"
              href="/quote"
            />
          </div>
        </div>
      </section>
      <section
        id="faqs"
        className="py-20 pt-28 flex lg:flex-row flex-col gap-10 lg:gap-40"
      >
        <div ref={refe} className="w-fit">
          <h2
            className={`animate__animated ${
              inViewe
                ? "lg:animate__bounceInRight animate__bounceInLeft visible-after-animation"
                : "hidden-before-animation"
            } text-[24px] leading-[29.52px] lg:text-[39px] text-black font-clashmd lg:leading-[50px]`}
          >
            Frequently asked <br />
            <span className="text-primary">Questions</span>
          </h2>
        </div>
        <div className="flex-grow">
          <Faqs faqs={data?.faqs} />
        </div>
      </section>
    </main>
  );
}
