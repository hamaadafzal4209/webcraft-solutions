import "./globals.css";
import { Poppins, Roboto } from "next/font/google";
import { cn } from "@/lib/utils";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Toaster } from "react-hot-toast";
import NextTopLoader from "nextjs-toploader";
import BackToTop from "@/components/common/BackToTop";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "WebCraft Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={cn(
        "min-h-screen font-sans antialiased",
        poppins.variable,
        roboto.variable
      )}
    >
      <body
        className={cn(
          "min-h-screen bg-slate-900 text-gray-100",
          "font-poppins"
        )}
      >
        <NextTopLoader color="#F69E2C" height={4} showSpinner={false} />
        <Toaster />
        <BackToTop />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
