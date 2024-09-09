"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

function CTAButton({ text, link }: { text: string; link: string }) {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 group-hover:translate-y-1"></div>
      <motion.div
        className="relative z-20 bg-primary"
        whileHover={{ x: -5, y: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Link
          className=" text-center w-full inline-block text-accent border-2 border-accent px-6 py-2 font-bold"
          href={link}
        >
          <span className="relative z-10 ">{text}</span>
        </Link>
      </motion.div>
    </div>
  );
}

export default CTAButton;
