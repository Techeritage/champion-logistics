"use client";
import QuoteBtn from "../Components/QuoteBtn";
import Faqs from "../Components/Faqs";
import Image from "next/image";
import Headers from "../Components/Headers";
import { useInView } from "react-intersection-observer";

export default function HomePage() {
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
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: ref2, inView: inView2 } = useInView({
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
    <>
      <Headers />
      <main className="px-[3%] overflow-hidden">
        <section ref={textRef}>
          <div>
            <div className="flex pt-12 pb-9 flex-col gap-9 lg:flex-row items-center justify-between lg:py-9">
              <h1
                className={`text-5xl animate__animated ${
                  textInView
                    ? "animate__backInDown visible-after-animation"
                    : "hidden-before-animation"
                } lg:text-[69px] font-clashmd max-w-[921px] leading-[59.04px] lg:leading-[80px]`}
              >
                Swift, Reliable, <span className="text-primary">Efficient</span>{" "}
                Logistics solutions
              </h1>
              <p
                className={`lg:max-w-[365px] leading-[19.68px] animate__animated ${
                  textInView
                    ? "animate__bounceInRight visible-after-animation"
                    : "hidden-before-animation"
                }`}
              >
                Experience flawless shipping solutions tailored sto your needs,
                we take pride in delivering excellence with punctuality at the
                forefront.
              </p>
            </div>
            <Image
              loading="lazy"
              src="/hero.svg"
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
            Customer centric approach
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
              Experience Excellence with{" "}
              <span className="lg:text-primary">Champions Logistics</span>
            </h2>
            <p
              className={`text-base animate__animated ${
                boxInView
                  ? "animate__bounceInRight visible-after-animation"
                  : "hidden-before-animation"
              } leading-[19.68px] text-black max-w-[557px]`}
            >
              We prioritize precision, reliability, and a customer-centric
              approach, making your satisfaction our top priority. experience
              the differences of logistics partner committed to excellence-
              experience champions logistics
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
                src="/ab1.png"
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
                Our reputation precedes us. Gaining and <br /> maintaining your
                trust is our priority.
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
                  src="/ab2.png"
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
                  Securing your goods from end-to-end is our <br /> topmost
                  priority. You can rest assured of your <br /> good in our
                  hands.
                </p>
              </div>
              <div className="relative">
                <Image
                  loading="lazy"
                  src="/ab3.png"
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
                  Your goods are delivered as and when <br /> due. Prompt
                  delivery is our watch word.
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
                  src="/ab4.png"
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
                  To stay ahead of the game and serve you better, always, we
                  employ latest technology and innovations in the industry.
                </p>
              </div>
              <div className="relative">
                <Image
                  loading="lazy"
                  src="/ab5.png"
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
                  Our costing is tailored in <br /> tandem with your budget.
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
                src="/ab1.png"
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
                Our reputation precedes us. Gaining and <br /> maintaining your
                trust is our priority.
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
                  src="/ab2.png"
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
                  Securing your goods from end-to-end is our <br /> topmost
                  priority. You can rest assured of your <br /> good in our
                  hands.
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
                  src="/ab3.png"
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
                  Your goods are delivered as and when <br /> due. Prompt
                  delivery is our watch word.
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
                  src="/ab4.png"
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
                  To stay ahead of the game and serve you better, always, we
                  employ latest technology and innovations in the industry.
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
                  src="/ab5.png"
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
                  Our costing is tailored in <br /> tandem with your budget.
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
            Range of Services
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
              Comprehensive Logistics Solutions
            </h2>
            <p
              className={`text-base animate__animated ${
                boxInView2
                  ? "animate__bounceInRight visible-after-animation"
                  : "hidden-before-animation"
              } leading-[19.68px] text-black max-w-[557px]`}
            >
              We offer an extensive range of services designed to meet all your
              logistics needs. From transportation and warehousing to supply
              chain management, our expert team ensures precision and
              reliability in every step.
            </p>
          </div>
          <div className="flex lg:flex-row flex-col lg:max-h-[450px] gap-5 pt-10">
            <div className="basis-[45%] relative">
              <Image
                loading="lazy"
                src="/cd1.png"
                width={1000}
                height={700}
                alt="arrow icon"
                className="h-[301px] lg:h-[450px] w-full object-cover rounded-[20px]"
              />
              <div className="flex absolute bottom-7 left-5">
                <div className="h-[50px] w-fit flex items-center justify-center rounded-full px-4 text-black text-xs lg:text-base bg-primaryLight">
                  International Freight
                </div>
                <div className="h-[50px] w-fit ml-[-10px] flex items-center justify-center rounded-full px-4 text-black text-xs lg:text-base bg-secondary">
                  Import & Export
                </div>
              </div>
            </div>
            <div className="basis-[27.5%] relative">
              <Image
                loading="lazy"
                src="/cd2.png"
                width={1000}
                height={700}
                alt="arrow icon"
                className="h-[301px] lg:h-[450px] object-cover rounded-[20px]"
              />
              <div className="flex absolute bottom-7 left-5">
                <div className="h-[50px] w-fit flex items-center justify-center rounded-full px-4 text-black text-xs lg:text-base bg-secondary">
                  Packaging
                </div>
                <div className="h-[50px] w-fit ml-[-10px] flex items-center justify-center rounded-full px-4 text-black text-xs lg:text-base  bg-primaryLight">
                  Palletization
                </div>
              </div>
            </div>
            <div className="basis-[27.5%] relative">
              <Image
                loading="lazy"
                src="/cd3.png"
                width={1000}
                height={700}
                alt="arrow icon"
                className="h-[301px] lg:h-[450px] object-cover rounded-[20px]"
              />
              <div className="flex absolute bottom-7 left-5">
                <div className="h-[50px] w-fit flex items-center justify-center rounded-full px-4 text-black text-xs lg:text-base bg-primaryLight">
                  Courier
                </div>
                <div className="h-[50px] w-fit ml-[-10px] flex items-center justify-center rounded-full px-4 text-black text-xs lg:text-base bg-secondary">
                  Warehousing
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
              <h2 className="text-[24px] leading-[29.52px] lg:text-[39px] text-black font-clashmd lg:leading-[50px]">
                Ship around the globe <br />
                <span className="text-primary"> Efficiently.</span>
              </h2>
              <h2 className="text-[24px] leading-[29.52px] lg:text-[39px] text-black font-clashmd lg:leading-[50px]">
                Find out the price right <br /> now --
              </h2>
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
        <section className="py-20 flex lg:flex-row flex-col gap-10 lg:gap-40">
          <div className="w-fit">
            <h2 className="text-[24px] leading-[29.52px] lg:text-[39px] text-black font-clashmd lg:leading-[50px]">
              Frequently asked <br />
              <span className="text-primary">Questions</span>
            </h2>
          </div>
          <div className="flex-grow">
            <Faqs />
          </div>
        </section>
      </main>
    </>
  );
}
