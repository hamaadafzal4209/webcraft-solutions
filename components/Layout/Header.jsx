"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  Laptop,
  Megaphone,
  Palette,
  Code,
  Globe,
  PieChart,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const navItems = [
  {
    title: "Services",
    items: [
      {
        title: "Web Development",
        href: "/services/web-development",
        icon: Laptop,
      },
      {
        title: "App Development",
        href: "/services/app-development",
        icon: Megaphone,
      },
      {
        title: "Digital Marketing",
        href: "/services/digital-marketing",
        icon: Palette,
      },
      { title: "SEO Campaigns", href: "/services/seo-campaigns", icon: Code },
    ],
  },
  { title: "About", href: "/about" },
  { title: "Portfolio", href: "/portfolio" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 shadow-lg sticky top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-white">WebCraft</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) =>
                item.items ? (
                  <DropdownMenu key={item.title}>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="text-gray-300 hover:bg-transparent hover:text-main-400 transition-colors duration-300"
                      >
                        {item.title} <ChevronDown className="ml-1 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="end"
                      className="bg-gray-800 text-gray-300"
                    >
                      {item.items.map((subItem) => (
                        <DropdownMenuItem key={subItem.title} asChild>
                          <Link
                            href={subItem.href}
                            className="flex items-center px-4 py-2 transition-colors duration-200 hover:bg-main-400 hover:text-white rounded-md"
                          >
                            <subItem.icon className="mr-2 h-4 w-4" />
                            <span>{subItem.title}</span>
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="text-gray-300 hover:text-main-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                  >
                    {item.title}
                  </Link>
                )
              )}
            </div>
          </div>
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-300 hover:text-main-400"
                >
                  <span className="sr-only">Open main menu</span>
                  {isOpen ? (
                    <X className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Menu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] sm:w-[400px] bg-gray-900 text-gray-300"
              >
                <nav className="mt-5 px-2 space-y-1">
                  <Accordion type="single" collapsible>
                    {navItems.map((item) =>
                      item.items ? (
                        <AccordionItem
                          key={item.title}
                          value={item.title}
                          className="border-0"
                        >
                          <AccordionTrigger className="text-left px-3 py-2 text-gray-300 hover:text-main-400 transition-colors duration-300">
                            {item.title}
                          </AccordionTrigger>
                          <AccordionContent>
                            <ul className="mt-2 space-y-1">
                              {item.items.map((subItem) => (
                                <li key={subItem.title}>
                                  <Link
                                    href={subItem.href}
                                    className="flex items-center px-4 py-2 transition-colors duration-200 hover:bg-main-400 hover:text-white rounded-md"
                                  >
                                    <subItem.icon className="mr-2 h-4 w-4" />
                                    {subItem.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      ) : (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-main-400 transition-colors duration-300"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.title}
                        </Link>
                      )
                    )}
                  </Accordion>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
