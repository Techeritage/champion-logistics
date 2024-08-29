import "./globals.css";
import "animate.css";
import "../public/ClashDisplay_Complete/ClashDisplay_Complete/ClashDisplay_Complete/Fonts/WEB/css/clash-display.css";
import Footer from "./Components/Footer";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Champion Logistics",
  description:
    "Champion Logistics provides comprehensive logistics solutions including land freight, sea freight, air freight, warehousing, and courier services. With a global network and a commitment to timely, secure, and cost-effective deliveries, we streamline your supply chain for both domestic and international shipments. Whether you're moving goods across borders or need secure storage, Champion Logistics ensures your cargo reaches its destination with efficiency and care.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-clash">
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
