"use client";

import { useEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Navbar from "../components/Layout/Navbar";
import Hero from "../components/HomeComponents/Hero";
import LogoMarquee from "../components/HomeComponents/LogoMarquue";
import GuardingFuture from "../components/HomeComponents/GuardingFuture";
import Services from "../components/HomeComponents/Services";
import WhyCybersecurity from "../components/HomeComponents/WhyCyberSecurity";
import Stats from "../components/HomeComponents/Stats";
import InfoSection from "../components/HomeComponents/InfoSection";
import HackerCommunity from "../components/HomeComponents/HackerCommunity";
import Testimonials from "../components/HomeComponents/Testimonials";
import Faq from "../components/HomeComponents/Faq";
import Footer from "../components/Layout/Footer";
import NewsSection from "../components/HomeComponents/NewsSection";


export default function Home() {
  const mainRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Register ScrollTrigger with GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Basic animation for sections
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main ref={mainRef} className="overflow-hidden">
     
      <Hero />
      <LogoMarquee />
      <GuardingFuture />
      <Services />
      <WhyCybersecurity />
      <Stats />
      <InfoSection />
      <HackerCommunity />
      <Testimonials />
      <Faq />
      <NewsSection />
      
    </main>
  );
}
