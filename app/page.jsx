import Image from "next/image";

export default function Home() {
  return (
    <main className="px-[5%]">
      <div className="py-5">
        <Image src="/logo.svg" width={56} height={41} alt="champion Logo" />
      </div>
      <div className="grid grid-cols-2">
        <div className="flex justify-center flex-col gap-5">
          <h1 className="font-clashmd text-5xl max-w-[80%] text-[#13558D]">
            We're Building Something Great!
          </h1>
          <p className="text-base font-clashmd max-w-[70%] leading-5">
            Our website is currently under construction. We'll be here soon with
            our new awesome site.
          </p>
          <p className="text-xl font-clashmd italic text-[#13558D]">Stay tuned!</p>
        </div>
        <div>
          <Image
            src="/maintenance.svg"
            width={500}
            height={500}
            alt="maintenance"
          />
        </div>
      </div>
    </main>
  );
}
