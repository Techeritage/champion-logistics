import Image from "next/image";

export default function Home() {
  return (
    <main className="px-[5%] min-h-[100vh]">
      <div className="py-5">
        <Image src="/logo.svg" width={56} height={41} alt="champion Logo" />
      </div>
      <div className="grid lg:grid-cols-2 gap-10 py-10 lg:py-0">
        <div className="flex justify-center flex-col gap-5">
          <h1 className="font-clashmd text-4xl lg:text-5xl max-w-[80%] text-primary">
            We're Building Something Great!
          </h1>
          <p className="text-base font-clashmd max-w-[70%] leading-5">
            Our website is currently under construction. We'll be here soon with
            our new awesome site.
          </p>
          <p className="text-xl font-clashmd italic text-primary">Stay tuned!</p>
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
