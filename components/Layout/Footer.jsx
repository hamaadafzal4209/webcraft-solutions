import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t-2 border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">
              Digital Agency
            </h2>
            <p className="mb-4">
              Transforming ideas into digital realities. Your partner in
              innovation and growth.
            </p>
            <div className="mt-6">
              <h4 className="text-xl font-semibold text-gray-100 mb-4">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                <div className="gradient-icon-border">
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-[44px] h-[44px] bg-gradient-to-br from-slate-700 to-slate-800 rounded-full text-gray-300 hover:text-blue-500 transition-colors duration-300"
                    aria-label="LinkedIn"
                  >
                    <FaInstagram className="text-2xl" />
                  </a>
                </div>
                <div className="gradient-icon-border">
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-[44px] h-[44px] bg-gradient-to-br from-slate-700 to-slate-800 rounded-full text-gray-300 hover:text-blue-500 transition-colors duration-300"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="text-2xl" />
                  </a>
                </div>
                <div className="gradient-icon-border">
                  <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-[44px] h-[44px] bg-gradient-to-br from-slate-700 to-slate-800 rounded-full text-gray-300 hover:text-blue-400 transition-colors duration-300"
                    aria-label="Twitter"
                  >
                    <FaTwitter className="text-2xl" />
                  </a>
                </div>
                <div className="gradient-icon-border">
                  <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-[44px] h-[44px] bg-gradient-to-br from-slate-700 to-slate-800 rounded-full text-gray-300 hover:text-blue-400 transition-colors duration-300"
                    aria-label="Twitter"
                  >
                    <FaWhatsapp className="text-2xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="hover:text-white transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <a
                  href="mailto:info@digitalagency.com"
                  className="hover:text-white transition-colors"
                >
                  info@digitalagency.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <a
                  href="tel:+11234567890"
                  className="hover:text-white transition-colors"
                >
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-1" />
                <span>123 Digital Street, Tech City, 12345, Country</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-center">
          <p>
            &copy; {new Date().getFullYear()} Digital Agency. All rights
            reserved.
          </p>
          <div className="mt-2 space-x-4">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
