"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Header = () => {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const isActiveLink = (href) => pathname === href;

  const serviceMenuItems = [
    { href: "/services/web-development", label: "Web Development" },
    { href: "/services/app-development", label: "App Development" },
    { href: "/services/digital-marketing", label: "Digital Marketing" },
    { href: "/services/seo-campaign", label: "SEO Campaign" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    setIsLoaded(true);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsSidebarOpen(false);
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 
        ${
          isScrolled
            ? "shadow-md py-4 px-4 lg:px-8 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"
            : "shadow py-5 px-4 lg:px-12 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-900"
        }  ${isLoaded ? "animate-navbar" : "opacity-0"}`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          {/* <Image
            src="/logo.png"
            alt="Almaram Alfaneyah Logo"
            width={500}
            height={500}
            className={`${
              isScrolled
                ? "w-32 sm:w-40 transition duration-300"
                : "w-40 sm:w-48 transition duration-300"
            }`}
          /> */}
          <div className="flex items-center gap-2">
            <Image
              src="/connection.png"
              alt="vector"
              width={500}
              height={500}
              className="w-8 h-8"
            />
            <h4 className="text-xl font-semibold">WebCraft</h4>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden lg:flex md:items-center gap-6 font-semibold text-gray-100">
          <Link
            href="/"
            className={`relative group hover:text-main-400 transition-colors duration-200 ${
              isActiveLink("/") ? "text-main-300" : ""
            }`}
          >
            Home
            <span
              className={`absolute left-0 -bottom-1 h-1 rounded-md bg-main-300 block w-0 group-hover:w-3/4 transition-all duration-300 ${
                isActiveLink("/") ? "w-3/4" : ""
              }`}
            ></span>
          </Link>
          <Link
            href="/about"
            className={`relative group hover:text-main-400 transition-colors duration-200 ${
              isActiveLink("/about") ? "text-main-300" : ""
            }`}
          >
            About Us
            <span
              className={`absolute left-0 -bottom-1 h-1 rounded-md bg-main-300 block w-0 group-hover:w-3/4 transition-all duration-300 ${
                isActiveLink("/about") ? "w-3/4" : ""
              }`}
            ></span>
          </Link>
          <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger className="flex items-center py-2 hover:text-main-400 transition-colors duration-200">
              Services
              <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-2 bg-slate-800 text-gray-200 rounded-lg shadow-lg border border-gray-700">
              {serviceMenuItems.map((item, index) => (
                <DropdownMenuItem key={index} className="p-0">
                  <Link
                    onClick={() => setOpen(false)}
                    href={item.href}
                    className="block w-full text-white px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:bg-opacity-90 hover:scale-105 hover:bg-gradient-to-br from-blue-800 via-purple-700 to-pink-600"
                  >
                    {item.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Link
            href="/projects"
            className={`relative group hover:text-main-400 transition-colors duration-200 ${
              isActiveLink("/projects") ? "text-main-300" : ""
            }`}
          >
            Projects
            <span
              className={`absolute left-0 -bottom-1 h-1 rounded-md bg-main-300 block w-0 group-hover:w-3/4 transition-all duration-300 ${
                isActiveLink("/projects") ? "w-3/4" : ""
              }`}
            ></span>
          </Link>
          <Link
            href="/blog"
            className={`relative group hover:text-main-400 transition-colors duration-200 ${
              isActiveLink("/blog") ? "text-main-300" : ""
            }`}
          >
            Blog
            <span
              className={`absolute left-0 -bottom-1 h-1 rounded-md bg-main-300 block w-0 group-hover:w-3/4 transition-all duration-300 ${
                isActiveLink("/blog") ? "w-3/4" : ""
              }`}
            ></span>
          </Link>
          <Link
            href="/contact"
            className={`relative group hover:text-main-400 transition-colors duration-200 ${
              isActiveLink("/contact") ? "text-main-300" : ""
            }`}
          >
            Contact Us
            <span
              className={`absolute left-0 -bottom-1 h-1 rounded-md bg-main-300 block w-0 group-hover:w-3/4 transition-all duration-300 ${
                isActiveLink("/contact") ? "w-3/4" : ""
              }`}
            ></span>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden flex items-center gap-2">
          <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6 text-gray-700" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-[300px] sm:w-[400px] min-h-screen overflow-y-auto no-scrollbar bg-slate-800 text-gray-100"
            >
              <nav className="flex flex-col mt-6 gap-2">
                <Link
                  href="/"
                  className={`block text-base font-semibold hover:text-main-400 transition-colors duration-200 ${
                    isActiveLink("/") ? "text-main-300" : ""
                  }`}
                  onClick={handleLinkClick}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className={`block text-base font-semibold hover:text-main-400 transition-colors duration-200 ${
                    isActiveLink("/about") ? "text-main-300" : ""
                  }`}
                  onClick={handleLinkClick}
                >
                  About Us
                </Link>
                <Accordion className="m-0 p-0" type="single" collapsible>
                  <AccordionItem
                    className="m-0 p-0 border-none"
                    value="company"
                  >
                    <AccordionTrigger className="text-base font-semibold hover:text-main-400 transition-colors duration-200 m-0 p-0">
                      Services
                    </AccordionTrigger>
                    <AccordionContent className="m-0 p-0">
                      <div className="flex flex-col m-0 p-0">
                        <Link
                          href="/services/web-development"
                          className="block px-3 py-1.5 hover:text-main-400 transition-colors duration-200"
                          onClick={handleLinkClick}
                        >
                          Web Development
                        </Link>
                        <Link
                          href="/services/app-development"
                          className="block px-3 py-1.5 hover:text-main-400 transition-colors duration-200"
                          onClick={handleLinkClick}
                        >
                          App Development
                        </Link>
                        <Link
                          href="/services/web-development"
                          className="block px-3 py-1.5 hover:text-main-400 transition-colors duration-200"
                          onClick={handleLinkClick}
                        >
                          Software Development
                        </Link>
                        <Link
                          href="/services/digital-marketing"
                          className="block px-3 py-1.5 hover:text-main-400 transition-colors duration-200"
                          onClick={handleLinkClick}
                        >
                          Digital Marketing
                        </Link>
                        <Link
                          href="/services/seo-campaign"
                          className="block px-3 py-1.5 hover:text-main-400 transition-colors duration-200"
                          onClick={handleLinkClick}
                        >
                          SEO Campaign
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <Link
                  href="/projects"
                  className={`block text-base font-semibold hover:text-main-400 transition-colors duration-200 ${
                    isActiveLink("/projects") ? "text-main-300" : ""
                  }`}
                  onClick={handleLinkClick}
                >
                  Projects
                </Link>
                <Link
                  href="/blog"
                  className={`block text-base font-semibold hover:text-main-400 transition-colors duration-200 ${
                    isActiveLink("/blog") ? "text-main-300" : ""
                  }`}
                  onClick={handleLinkClick}
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className={`block text-base font-semibold hover:text-main-400 transition-colors duration-200 ${
                    isActiveLink("/contact") ? "text-main-300" : ""
                  }`}
                  onClick={handleLinkClick}
                >
                  Contact Us
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Header;
