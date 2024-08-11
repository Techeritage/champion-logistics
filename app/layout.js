import "./globals.css";
import "animate.css";
import "../public/ClashDisplay_Complete/ClashDisplay_Complete/ClashDisplay_Complete/Fonts/WEB/css/clash-display.css";
import Footer from "./Components/Footer";

export const metadata = {
  title: "Champion Logistics",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-clash pt-[97px] lg:pt-[104px]">
        {children}
        <Footer />
      </body>
    </html>
  );
}
