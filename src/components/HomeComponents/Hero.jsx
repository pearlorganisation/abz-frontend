"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

export default function Hero() {
  const heroRef = useRef(null);

  // useEffect(() => {
  //   // const ctx = gsap.context(() => {
  //   //   gsap.from(".hero-text > *", {
  //   //     y: 50,
  //   //     opacity: 0,
  //   //     stagger: 0.2,
  //   //     duration: 1,
  //   //     ease: "power3.out",
  //   //   });
  //   // }, heroRef);
  //   // return () => ctx.revert();
  // }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen   flex items-center justify-center  text-white overflow-hidden"
      style={{
        backgroundImage: "url(/hero-bg.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `radial-gradient(circle at center, rgba(0, 0, 0, 0) 0%, rgba(10, 14, 25, 0.7) 40%, rgba(10, 14, 25, 0.95) 100%)`,
        }}
      ></div>
      <div className="absolute inset-0 bg-navy-950 opacity-80"></div>

      <div className="container mx-auto px-4 z-10 py-20 mt-16">
        <div className="hero-text max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Stay <span className="text-cyan-400">Secure</span>, Stay{" "}
            <span className="text-cyan-400">Ahead</span>
          </motion.h1>

          <motion.h2
            className="text-xl md:text-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            — Continuous Protection, Zero Compromise!
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl mb-12 text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Ensure nonstop security with real-time vulnerability assessments.
            Stay protected, proactive, and one step ahead — always.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a
              href="#"
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300"
            >
              Get Started
            </a>
            <a
              href="#"
              className="bg-white hover:bg-gray-200 text-black font-medium py-3 px-8 rounded-md transition-colors duration-300"
            >
              Request Demo
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
