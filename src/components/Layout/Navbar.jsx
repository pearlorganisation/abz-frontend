"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState("");

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

        <div className="hidden md:flex items-center space-x-6 relative z-50">
          <Link
            href="#"
            className={`${
              isScrolled ? "text-white" : "text-[#FF6ED4]"
            } hover:text-[#FF6ED4] transition-colors`}
          >
            PENTEST COPILOT
          </Link>

          {/* FOR COMPANIES */}
          {/* <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("companies")}
            onMouseLeave={() => setOpenDropdown("")}
          >
            <button
              onClick={() =>
                setOpenDropdown(openDropdown === "companies" ? "" : "companies")
              }
              className="flex items-center gap-1 text-white hover:text-cyan-400 transition-colors"
            >
              FOR COMPANIES <FiChevronDown />
            </button>
            {openDropdown === "companies" && (
              <div className="absolute top-full left-0 mt-2 bg-white text-black rounded shadow-md min-w-[200px] z-40">
                <Link
                  href="/integrations"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Integrations
                </Link>
                <Link
                  href="/enterprise"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Enterprise
                </Link>
              </div>
            )}
          </div> */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("companies")}
            onMouseLeave={() => setOpenDropdown("")}
          >
            <button
              onClick={() =>
                setOpenDropdown(openDropdown === "companies" ? "" : "companies")
              }
              className="flex items-center gap-1 text-white hover:text-cyan-400 transition-colors"
            >
              FOR COMPANIES <FiChevronDown />
            </button>
            {openDropdown === "companies" && (
              <div className="absolute top-full left-0 mt-2 bg-white text-black rounded shadow-md min-w-[200px] z-40">
                <Link
                  href="/integrations"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Integrations
                </Link>
                <Link
                  href="/partners"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Partner with Us
                </Link>
                <Link
                  href="/enterprise"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  For StartUps
                </Link>
              </div>
            )}
          </div>

          {/* RESEARCHERS */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("researchers")}
            onMouseLeave={() => setOpenDropdown("")}
          >
            <button
              onClick={() =>
                setOpenDropdown(
                  openDropdown === "researchers" ? "" : "researchers"
                )
              }
              className="flex items-center gap-1 text-white hover:text-cyan-400 transition-colors"
            >
              RESEARCHERS <FiChevronDown />
            </button>
            {openDropdown === "researchers" && (
              <div className="absolute top-full left-0 mt-2 bg-white text-black rounded shadow-md min-w-[200px] z-40">
                <Link
                  href="/research"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Apolio
                </Link>
                <Link
                  href="/submit"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  LeaderBoard
                </Link>
                <Link
                  href="/submit"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Documentation
                </Link>
              </div>
            )}
          </div>

          {/* PROGRAMS */}
          <Link
            href="/program"
            className="text-white hover:text-cyan-400 transition-colors"
          >
            PROGRAMS
          </Link>

          {/* PRODUCTS */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("products")}
            onMouseLeave={() => setOpenDropdown("")}
          >
            <button
              onClick={() =>
                setOpenDropdown(openDropdown === "products" ? "" : "products")
              }
              className="flex items-center gap-1 text-white hover:text-cyan-400 transition-colors"
            >
              PRODUCTS <FiChevronDown />
            </button>
            {openDropdown === "products" && (
              <div className="absolute top-full left-0 mt-2 bg-white text-black rounded shadow-md min-w-[200px] z-40">
                <Link
                  href="/products/ai"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Vulnerability Discloser Program
                </Link>
                <Link
                  href="/products/dashboard"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Bug Bounty Program
                </Link>
                <Link
                  href="/products/dashboard"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Private Bug Bounty Program
                </Link>
                <Link
                  href="/products/dashboard"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Pentest Program VAPT
                </Link>
              </div>
            )}
          </div>

          {/* RESOURCES */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("resources")}
            onMouseLeave={() => setOpenDropdown("")}
          >
            <button
              onClick={() =>
                setOpenDropdown(openDropdown === "resources" ? "" : "resources")
              }
              className="flex items-center gap-1 text-white hover:text-cyan-400 transition-colors"
            >
              RESOURCES <FiChevronDown />
            </button>
            {openDropdown === "resources" && (
              <div className="absolute top-full left-0 mt-2 bg-white text-black rounded shadow-md min-w-[200px] z-40">
                <Link
                  href="/resources/blogs"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Blogs
                </Link>
                <Link
                  href="/resources/help"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Documentation
                </Link>
                <Link
                  href="/resources/help"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Vulnerability Rating Taxonomy
                </Link>
              </div>
            )}
          </div>

          {/* Static Links */}

          <Link
            href="#"
            className="text-white hover:text-cyan-400 transition-colors"
          >
            PLAN
          </Link>
        </div>

        <Link
          href="/login"
          className="bg-cyan-500 text-white px-6 py-2 rounded hover:bg-cyan-600 transition-colors"
        >
          LOGIN
        </Link>
      </div>
    </motion.nav>
  );
}
