import "./globals.css";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Header from "@/components/Layout/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "WebCraft Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={cn("min-h-screen font-sans antialiased", poppins.variable)}
    >
      <body
        className={cn(
          "font-poppins min-h-screen",
          "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-gray-100"
        )}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
