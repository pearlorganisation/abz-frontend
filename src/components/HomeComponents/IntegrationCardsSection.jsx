// components/IntegrationCardsSection.js
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const IntegrationCardsSection = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((el, index) => {
      const direction = index % 2 === 0 ? -100 : 100;
      gsap.fromTo(
        el,
        { opacity: 0, x: direction },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }, []);

  const integrations = [
    {
      title: "Cross Sync With Jira",
      description:
        "Jira is used for issue tracking and project management. Our integration will allow you to create issues in Jira for your reports in your BugBase Program. Cross Sync from JIRA is also available.",
      icon: "/jira-icon.jpg",
      layout: "left",
    },
    {
      title: "Slack Notifications",
      description:
        "Slack offers many IRC-style features, including persistent chat rooms organized by topic, private groups, and direct messaging. Get your team notified whenever a bug is reported on BugBase.",
      icon: "/slack-icon.jpg",
      layout: "right",
    },
    {
      title: "Microsoft Teams",
      description:
        "With the Microsoft Teams integration, you can keep track of activities happening on BugBase in your Microsoft Teams interface.",
      icon: "/teams-icon.png",
      layout: "left",
    },
    {
      title: "Slack Notifications",
      description:
        "Slack offers many IRC-style features, including persistent chat rooms organized by topic, private groups, and direct messaging. Get your team notified whenever a bug is reported on BugBase.",
      icon: "/slack-icon.png",
      layout: "right",
    },
    {
      title: "Microsoft Teams",
      description:
        "With the Microsoft Teams integration, you can keep track of activities happening on BugBase in your Microsoft Teams interface.",
      icon: "/teams-icon.png",
      layout: "left",
    },
  ];

  return (
    <section className="w-full py-20 bg-white">
      <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
        Since We Made It Simple
      </h2>
      <p className="text-center text-gray-500 mb-12">
        You Can Now Integrate With Ease.
      </p>

      <div className="max-w-6xl mx-auto px-4 space-y-12">
        {integrations.map((item, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className={`flex flex-col md:flex-row items-center ${
              item.layout === "right" ? "md:flex-row-reverse" : ""
            } gap-6 md:gap-10 bg-white`}
          >
            {/* Icon */}
            <div className="flex-shrink-0 w-[80px] h-[80px] shadow-lg rounded-xl flex items-center justify-center bg-white p-2">
              <Image
                src={item.icon}
                alt={item.title}
                width={60}
                height={60}
              />
            </div>

            {/* Text */}
            <div className="flex-1 bg-white shadow-md rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 mb-2">{item.description}</p>
              <a href="#" className="text-green-600 font-medium hover:underline">
                Learn more
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IntegrationCardsSection;
