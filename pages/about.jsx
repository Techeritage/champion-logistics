import Headers from "@/app/Components/Headers";
import { HomeSkeleton } from "@/app/Components/loader";
import "../app/globals.css";
import "animate.css";
import "../public/ClashDisplay_Complete/ClashDisplay_Complete/ClashDisplay_Complete/Fonts/WEB/css/clash-display.css";
import Footer from "@/app/Components/Footer";
import { getAboutPage, getHomePage } from "@/app/libs/Powerhouse";
import AboutContainer from "@/app/Components/AboutContainer";

export default function AboutPage({about, home}) {
  return (
    <>
      <Headers />
      {about && about._id ? <AboutContainer home={home} data={about} /> : <HomeSkeleton />}
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const about = await getAboutPage();
  const home = await getHomePage();

  return {
    props: {
      about,
      home,
    },
    revalidate: 300, // Revalidate every 60 seconds (adjust as needed)
  };
}
