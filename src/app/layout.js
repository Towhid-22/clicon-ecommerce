import { Poppins } from "next/font/google";
import Advertisement from "@/components/allComponents/advertisement/Advertisement";
import "./globals.css";
import Header from "@/components/allComponents/header/Header";
import Footer from "@/components/allComponents/footer/Footer";
import StoreProvider from "@/lib/StoreProvider";

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
      <body className={`${poppins.variable} antialiased font-poppins`}>
        <Advertisement />
        <StoreProvider>
          <Header />
          {children}
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
