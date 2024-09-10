"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Logo from "./Logo";
import links from "@/constants/navigation";
import CTAButton from "./CTAButton";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";


function Navbar() {
  const [visible, setVisible] = useState(true);
  const prevScrollPos = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos.current > currentScrollPos || currentScrollPos < 10);
      prevScrollPos.current = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Leere Abhängigkeitsliste

  return (
    <nav
      className={`bg-primary bg-opacity-80 p-6 top-0 z-50 fixed w-full backdrop-blur-md shadow-lg transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center mx-4">
        <Link href="/">
          <Logo />
        </Link>

        <div className="hidden md:flex space-x-4 justify-between items-center gap-2">
          {links.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white hover:text-accent relative group"
            >
              <span className="text-accent">0{index + 1}.</span>
              {link.name}
              <span className="absolute bottom-0 left-0 h-0.5 bg-accent w-0 group-hover:w-full transition-all duration-500 ease-in-out" />
            </Link>
          ))}
        </div>
        <div className="hidden md:block">
          <CTAButton text="Kontakt" link="/contact" />
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Menu className="text-accent cursor-pointer" />
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-[300px] sm:w-[400px] bg-primary bg-opacity-80 backdrop-filter backdrop-blur-sm border-l border-accent border-opacity-10"
            >
              <div className="flex flex-col space-y-8 mt-12">
                {links.map((link, index) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-white hover:text-accent transition-colors duration-300 text-2xl font-bold"
                  >
                    <span className="text-accent mr-2 text-base font-normal">{(index + 1).toString().padStart(2, '0')}</span>
                    {link.name}
                  </Link>
                ))}
                <div className="pt-8 border-t border-accent border-opacity-20">
                  <CTAButton text="Kontakt" link="/contact" />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
