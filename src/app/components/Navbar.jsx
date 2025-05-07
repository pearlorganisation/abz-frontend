"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#000518] text-pink-600 shadow-lg py-2 "
          : "bg-[#000518] py-4 text-purple-700"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="relative h-20 w-40">
            <Image
              src="/logo.png"
              alt="CyberNeoGen"
              fill
              className="object-cover"
              priority
            />
          </div>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="#"
            // className="text-white hover:text-cyan-400 transition-colors"
            className={`${
              isScrolled ? "text-white" : "text-[#FF6ED4]"
            } hover:text-[#FF6ED4] transition-colors`}
          >
            PENTEST COPILOT
          </Link>
          <Link
            href="#"
            className="text-white hover:text-cyan-400 transition-colors"
          >
            FOR COMPANIES
          </Link>
          <Link
            href="#"
            className="text-white hover:text-cyan-400 transition-colors"
          >
            RESEARCHERS
          </Link>
          <Link
            href="#"
            className="text-white hover:text-cyan-400 transition-colors"
          >
            PROGRAMS
          </Link>
          <Link
            href="#"
            className="text-white hover:text-cyan-400 transition-colors"
          >
            PRODUCTS
          </Link>
          <Link
            href="#"
            className="text-white hover:text-cyan-400 transition-colors"
          >
            PLAN
          </Link>
          <Link
            href="#"
            className="text-white hover:text-cyan-400 transition-colors"
          >
            RESOURCES
          </Link>
        </div>

        <Link
          href="#"
          className="bg-cyan-500 text-white px-6 py-2 rounded hover:bg-cyan-600 transition-colors"
        >
          LOGIN
        </Link>
      </div>
    </motion.nav>
  );
}
