import Headers from "@/app/Components/Headers";
import { HomeSkeleton } from "@/app/Components/loader";
import "@/app/globals.css";
import "animate.css";
import "@/public/ClashDisplay_Complete/ClashDisplay_Complete/ClashDisplay_Complete/Fonts/WEB/css/clash-display.css";
import Footer from "@/app/Components/Footer";
import { getServicePage } from "@/app/libs/Powerhouse";
import ServiceContainer from "@/app/Components/ServiceContainer";

export default function ServicePage({ service }) {
  return (
    <>
      <Headers />
      {service && service?._id ? (
        <ServiceContainer data={service} />
      ) : (
        <HomeSkeleton />
      )}
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const service = await getServicePage();

  return {
    props: {
      service,
    },
    revalidate: 1800, // Revalidate every 60 seconds (adjust as needed)
  };
}
