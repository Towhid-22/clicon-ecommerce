import { Poppins } from "next/font/google";
import Advertisement from "@/components/allComponents/Advertisement";
import "./globals.css";
import Header from "@/components/common/Header";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


export const metadata = {
  title: "Clicon",
  description: "Clicon ecommerce create by next js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased font-poppins`}
      >
        <Advertisement />
        <Header />
        {children}
      </body>
    </html>
  );
}
