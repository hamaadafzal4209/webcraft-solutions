import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="relative text-gray-200 rounded-xl pt-10 m-4 mt-0">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-800/30 via-blue-700/30 to-purple-800/30 opacity-50 rounded-xl -z-10"></div>

      <div className="container-section py-0 z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4 text-white">
              About Webcraft
            </h2>
            <p className="text-sm leading-relaxed">
              Webcraft is a leading digital agency specializing in crafting
              stunning websites, impactful branding, and digital solutions
              tailored to your needs.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4 text-white">
              Quick Links
            </h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="hover:text-main-300 transition linkHoverEffect"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-main-300 transition linkHoverEffect"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-main-300 transition linkHoverEffect"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-main-300 transition linkHoverEffect"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4 text-white">
              Get in Touch
            </h2>
            <ul className="space-y-2">
              <li>
                Email:{" "}
                <a
                  href="mailto:info@webcraft.com"
                  className="hover:text-main-300 transition linkHoverEffect"
                >
                  info@webcraft.com
                </a>
              </li>
              <li>
                Phone:{" "}
                <a
                  href="tel:+1234567890"
                  className="hover:text-main-300 transition linkHoverEffect"
                >
                  +1 234 567 890
                </a>
              </li>
              <li>Address: 123 Webcraft Street, Digital City</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-800 via-purple-700 to-pink-600 h-0.5 w-full mt-8"></div>

        <div className="py-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Webcraft. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
