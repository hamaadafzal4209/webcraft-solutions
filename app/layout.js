import "./globals.css";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "WebCraft Solutions",
  description:
    "Discover the best products at unbeatable prices with Sellify, your go-to eCommerce platform.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={cn(
        "min-h-screen font-sans antialiased",
        poppins.variable
      )}
    >
      <body className="font-poppins bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100">
        {children}
      </body>
    </html>
  );
}