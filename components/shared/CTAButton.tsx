"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";

/**
 * CTAButton Component
 * 
 * This component renders a Call-to-Action button with hover effects.
 * 
 * @component
 * @param {Object} props - The component props
 * @param {string} props.text - The text to display on the button
 * @param {string} props.link - The URL to navigate to when the button is clicked
 * 
 * @returns {JSX.Element} A styled button with hover effects
 */
function CTAButton({ text, link, onClick = () => {} }: { text: string; link: string, onClick: () => void}) {

  const locale = useLocale();
  return (
    <div className="relative group">
      {/* Background element for hover effect */}
      <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 group-hover:translate-y-1"></div>
      
      {/* Button container with motion effects */}
      <motion.div
        className="relative z-20 bg-primary"
        whileHover={{ x: -5, y: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Link component styled as a button */}
        <Link
          className="text-center w-full inline-block text-accent border-2 border-accent px-6 py-2 font-bold"
          href={link}
          locale={locale}
          onClick={onClick}
        >
          <span className="relative z-10">{text}</span>
        </Link>
      </motion.div>
    </div>
  );
}

export default CTAButton;
