// components/IntegrationsSection.js
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

const IntegrationsSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const imageRef = useRef(null);

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

    // GSAP animations
    gsap.from(headingRef.current, {
      opacity: 0,
      y: 40,
      duration: 1,
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(descriptionRef.current, {
      opacity: 0,
      y: 40,
      duration: 1,
      delay: 0.2,
      scrollTrigger: {
        trigger: descriptionRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(imageRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.4,
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="mt-18 w-full bg-gradient-to-b from-[#f4fbf6] to-white py-16"
    >
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2
          ref={headingRef}
          className="text-4xl font-bold text-gray-900 mb-4"
        >
          Integrations
        </h2>

        <p
          ref={descriptionRef}
          className="text-gray-600 text-base md:text-lg mb-10"
        >
          We've created a unique set of{" "}
          <span className="font-semibold text-gray-800">Integrations</span> and
          collaboration tools that seamlessly integrate with popular softwares
          and developer environments such as{" "}
          <span className="text-green-600 font-medium">
            Teams, Slack and more!
          </span>
        </p>

        <div ref={imageRef} className="w-full">
          <Image
            src="/integrations-banner.png"
            alt="Integrations Diagram"
            width={1184}
            height={453}
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
