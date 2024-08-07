import QuoteBtn from "../Components/QuoteBtn";
import Faqs from "../Components/Faqs";
import Image from "next/image";
import Headers from "../Components/Headers";

export default function HomePage() {
  return (
    <>
      <Headers />
      <main className="px-[3%]">
        <section>
          <div>
            <div className="flex pt-12 pb-9 flex-col gap-9 lg:flex-row items-center justify-between lg:py-9">
              <h1 className="text-5xl lg:text-[69px] font-clashmd max-w-[921px] leading-[59.04px] lg:leading-[80px]">
                Swift, Reliable, <span className="text-primary">Efficient</span>{" "}
                Logistics solutions
              </h1>
              <p className="lg:max-w-[365px] leading-[19.68px]">
                Experience flawless shipping solutions tailored sto your needs, we
                take pride in delivering excellence with punctuality at the
                forefront.
              </p>
            </div>
            <Image
              loading="lazy"
              src="/hero.svg"
              width={2000}
              height={465}
              alt="arrow icon"
              className="w-full h-[301px] object-cover rounded-[15px] lg:rounded-[20px] lg:h-[465px]"
            />
          </div>
        </section>
        <section className="py-20">
          <div className="bg-primary px-4 rounded-full w-fit py-2 text-sm lg:text-base text-white">
            Customer centric approach
          </div>
          <div className="flex lg:flex-row flex-col gap-8 lg:items-center justify-between py-5">
            <h2 className="text-[24px] leading-[29.52px] lg:text-[39px] text-black font-clashmd max-w-[284px] lg:max-w-[540px] lg:leading-[50px]">
              Experience Excellence with{" "}
              <span className="lg:text-primary">Champions Logistics</span>
            </h2>
            <p className="text-base leading-[19.68px] text-black max-w-[557px]">
              We prioritize precision, reliability, and a customer-centric
              approach, making your satisfaction our top priority. experience the
              differences of logistics partner committed to excellence- experience
              champions logistics
            </p>
          </div>
          <div className="flex mt-10 lg:mt-0 lg:flex-row flex-col min-w-full gap-5 min-h-[402px]">
            <div className="relative">
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
            <div className="grid gap-5">
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
                  priority. You can rest assured of your <br /> good in our hands.
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
                  Your goods are delivered as and when <br /> due. Prompt delivery
                  is our watch word.
                </p>
              </div>
            </div>
            <div className="grid gap-5">
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
        </section>
        <section className="py-20">
          <div className="bg-primary px-4 rounded-full w-fit py-2 text-sm lg:text-base text-white">
            Range of Services
          </div>
          <div className="flex lg:flex-row flex-col gap-8 lg:items-center justify-between py-5">
            <h2 className="text-[24px] leading-[29.52px] lg:text-[39px] text-black font-clashmd max-w-[284px] lg:max-w-[540px] lg:leading-[50px]">
              Comprehensive Logistics Solutions
            </h2>
            <p className="text-base text-black max-w-[557px]">
              We offer an extensive range of services designed to meet all your
              logistics needs. From transportation and warehousing to supply chain
              management, our expert team ensures precision and reliability in
              every step.
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
            <QuoteBtn title="View Our Services" href="/services" />
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
              <QuoteBtn title="Request a Quote" href="/quote" />
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
