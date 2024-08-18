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
      {serviceData ? (
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
  console.log(services);

  if (!services || !services.length) {
    return {
      paths: [],
      fallback: "blocking",
    };
  }

  const paths = services.map((service) => ({
    params: { serviceId: service._id.toString() },
  }));

  return {
    paths,
    fallback: "blocking", // or 'true' based on your preference
  };
}

export async function getStaticProps({ params }) {
  const serviceId = params?.serviceId;

  let serviceData = null;

  try {
    serviceData = await getSingleService(serviceId);
  } catch (error) {
    console.error("Error fetching service data:", error);
  }

  // Ensure serviceData is not undefined and keys is an array
  if (!serviceData || !Array.isArray(serviceData.keys)) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      serviceData,
    },
    revalidate: 60, // Revalidate every 300 seconds
  };
}
