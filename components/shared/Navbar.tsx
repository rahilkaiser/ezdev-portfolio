"use client";
import React, { useState, useEffect, useRef, startTransition, useTransition } from "react";

import Logo from "./Logo";
import links from "@/constants/navigation";
import CTAButton from "./CTAButton";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link, usePathname } from "@/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "@/navigation";
import { useLocale, useTranslations } from "next-intl";
import { Globe } from "lucide-react";

/**
 * Navbar component for the application.
 * Provides navigation links and responsive design.
 */
function Navbar() {
  const [visible, setVisible] = useState(true);
  const prevScrollPos = useRef(0);
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("Common");
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(
        prevScrollPos.current > currentScrollPos || currentScrollPos < 10
      );
      prevScrollPos.current = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /**
   * Determines if a link is active based on the current pathname.
   * @param {string} href - The href of the link to check.
   * @returns {boolean} True if the link is active, false otherwise.
   */
  const isActive = (href: string): boolean => {
    if (href === "/") {
      return pathname === "/" || pathname === "/de";
    }
    return pathname.includes(href.slice(1));
  };

  /**
   * Renders a navigation link with appropriate styling.
   * @param {{ name: string; href: string }} link - The link object.
   * @param {number} index - The index of the link.
   * @returns {JSX.Element} The rendered link component.
   */
  const renderNavLink = (
    link: { name: string; href: string },
    index: number
  ): JSX.Element => (
    <Link
      key={link.name}
      href={link.href}
      
      className={`relative group ${
        isActive(link.href) ? "text-accent" : "text-white hover:text-accent"
      }`}
      onClick={() => isMobile && setIsOpen(false)}
    >
      <span className="text-accent">0{index + 1}.</span>
      {link.name}
      {renderLinkUnderline(link.href)}
    </Link>
  );

  /**
   * Renders the underline for a navigation link.
   * @param {string} href - The href of the link.
   * @returns {JSX.Element} The rendered underline component.
   */
  const renderLinkUnderline = (href: string): JSX.Element => (
    <>
      {!isActive(href) && (
        <>
          <div className="absolute bottom-0 left-1/2 w-full h-1 bg-accent transform scale-x-0 group-hover:scale-x-50 transition-transform duration-500 origin-left" />
          <div className="absolute bottom-0 left-1/2 w-full h-1 bg-accent transform scale-x-0 group-hover:-scale-x-50 transition-transform duration-500 origin-left" />
        </>
      )}
      {isActive(href) && (
        <div className="absolute bottom-0 left-0 w-full h-1 bg-accent origin-left" />
      )}
    </>
  );

  const handleLanguageChange = (nextLocale: "de" | "en" | "uk") => {
    startTransition(() => {
      router.replace(pathname, {
        locale: nextLocale
      });
    });
    if (isMobile) setIsOpen(false);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const renderLanguageSelector = () => (
    <Select onValueChange={handleLanguageChange}>
      <SelectTrigger className={`${isMobile ? 'w-full' : 'h-10'} bg-transparent border-none text-white hover:text-accent transition-colors duration-300 focus:ring-0 focus:ring-offset-0`}>
        <Globe className="mr-2 h-5 w-5" />
        <SelectValue className="uppercase font-bold" placeholder={t("selectLanguage")} />
      </SelectTrigger>
      <SelectContent className="bg-primary border-accent rounded-md overflow-hidden">
        <SelectItem
          value="de"
          className="text-white hover:bg-accent hover:text-primary transition-colors duration-300 py-2 px-4"
        >
          {t("German")}
        </SelectItem>
        <SelectItem
          value="en"
          className="text-white hover:bg-accent hover:text-primary transition-colors duration-300 py-2 px-4"
        >
          {t("English")}
        </SelectItem>
        <SelectItem
          value="uk"
          className="text-white hover:bg-accent hover:text-primary transition-colors duration-300 py-2 px-4"
        >
          {t("Ukrainian")}
        </SelectItem>
      </SelectContent>
    </Select>
  );

  return (
    <nav
      className={`bg-primary bg-opacity-80 p-6 top-0 z-50 fixed w-full backdrop-blur-md shadow-lg transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center mx-auto max-w-7xl relative gap-12">
        <Link className="w-max flex-1" href="/" >
          <Logo />
        </Link>

        {!isMobile && (
          <>
            <div className="flex justify-center items-center gap-28 flex-1">
              <div className="flex space-x-4 justify-center items-center gap-2 flex-1">
                {links.map(renderNavLink)}
              </div>
  
              <div className="flex gap-4 items-center">
                <div className="relative group">
                  {renderLanguageSelector()}
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </div>
                <CTAButton text="Kontakt" link="/contact" onClick={() => {}} />
              </div>
</div>
          </>
        )}

        {isMobile && (
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
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
                    onClick={handleLinkClick}
                  >
                    <span className="text-accent mr-2 text-base font-normal">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                    {link.name}
                  </Link>
                ))}
                <div className="pt-8 border-t border-accent border-opacity-20">
                  <CTAButton text="Kontakt" link="/contact" onClick={handleLinkClick} />
                </div>
              </div>
              <div className="mt-8">
                {renderLanguageSelector()}
              </div>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
