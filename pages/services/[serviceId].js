import "@/app/globals.css";
import "animate.css";
import "@/public/ClashDisplay_Complete/ClashDisplay_Complete/ClashDisplay_Complete/Fonts/WEB/css/clash-display.css";
import Footer from "@/app/Components/Footer";
import { getAllServices, getSingleService } from "@/app/libs/Powerhouse";
import SingleServiceContainer from "@/app/Components/SingleServiceContainer";
import { HomeSkeleton } from "@/app/Components/loader";

export default function OneServicePage({ serviceData }) {
  return (
    <>
      {serviceData && serviceData?._id ? (
        <SingleServiceContainer data={serviceData} />
      ) : (
        <HomeSkeleton />
      )}
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const services = await getAllServices();

  const paths = services?.map((service) => ({
    params: { serviceId: service._id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const serviceId = params?.serviceId;

  const serviceData = await getSingleService(serviceId);

  return {
    props: {
      serviceData,
    },
    revalidate: 300, // Revalidate every 300 seconds
  };
}
