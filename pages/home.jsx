import Headers from "@/app/Components/Headers";
import HomeSection1 from "@/app/Components/HomeSection1";
import { HomeSkeleton } from "@/app/Components/loader";
import { getHomePage } from "@/app/libs/Powerhouse";
import "../app/globals.css";
import "animate.css";
import "../public/ClashDisplay_Complete/ClashDisplay_Complete/ClashDisplay_Complete/Fonts/WEB/css/clash-display.css";
import Footer from "@/app/Components/Footer";

export default function HomePage({ home }) {
  return (
    <>
      <Headers />
      {home && home._id ? <HomeSection1 data={home} /> : <HomeSkeleton />}
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const home = await getHomePage();

  return {
    props: {
      home,
    },
  };
}
