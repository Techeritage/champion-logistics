import Headers from "@/app/Components/Headers";
import { HomeSkeleton } from "@/app/Components/loader";
import { getContactPage } from "@/app/libs/Powerhouse";
import "../app/globals.css";
import "animate.css";
import "../public/ClashDisplay_Complete/ClashDisplay_Complete/ClashDisplay_Complete/Fonts/WEB/css/clash-display.css";
import Footer from "@/app/Components/Footer";
import ContactContainer from "@/app/Components/ContactContainer";

export default function ContactPage({ contact }) {
  return (
    <>
      <Headers />
      {contact && contact._id ? (
        <ContactContainer data={contact} />
      ) : (
        <HomeSkeleton />
      )}

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const contact = await getContactPage();

  return {
    props: {
      contact,
    },
    revalidate: 300, // Revalidate every 60 seconds (adjust as needed)
  };
}