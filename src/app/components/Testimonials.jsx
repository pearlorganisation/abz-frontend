"use client";

import { useRef, useEffect } from "react";
import Marquee from "react-fast-marquee";
import { gsap } from "gsap";

export default function Testimonials() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".section-header", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  //   const testimonials = [
  //     {
  //       id: 1,
  //       content:
  //         "Streamlining vulnerability management with ease and efficiency.",
  //       rating: 5,
  //       author: "Senior security at 50M USD+ SaaS Company",
  //     },
  //     {
  //       id: 2,
  //       content:
  //         "Streamlining vulnerability management with ease and efficiency.",
  //       rating: 4,
  //       author: "Senior security at 50M USD+ SaaS Company",
  //     },
  //     {
  //       id: 3,
  //       content:
  //         "Streamlining vulnerability management with ease and efficiency.",
  //       rating: 5,
  //       author: "Senior security at 50M USD+ SaaS Company",
  //     },
  //     {
  //       id: 4,
  //       content:
  //         "Streamlining vulnerability management with ease and efficiency.",
  //       rating: 4,
  //       author: "Senior security at 50M USD+ SaaS Company",
  //     },
  //     {
  //       id: 5,
  //       content:
  //         "Streamlining vulnerability management with ease and efficiency.",
  //       rating: 5,
  //       author: "Senior security at 50M USD+ SaaS Company",
  //     },
  //     {
  //       id: 6,
  //       content:
  //         "Streamlining vulnerability management with ease and efficiency.",
  //       rating: 5,
  //       author: "Senior security at 50M USD+ SaaS Company",
  //     },
  //     {
  //       id: 7,
  //       content:
  //         "Streamlining vulnerability management with ease and efficiency.",
  //       rating: 4,
  //       author: "Senior security at 50M USD+ SaaS Company",
  //     },
  //   ];

  const testimonials = [
    {
      id: 1,
      content:
        "One of the most transparent and rewarding bug bounty programs in India. Their triage time is excellent!",
      rating: 5,
      author: "Ethical Hacker, Bengaluru",
    },
    {
      id: 2,
      content:
        "Got my first bounty through this platform. Great support and quick acknowledgment of valid reports.",
      rating: 4,
      author: "Security Researcher, IIT Bombay",
    },
    {
      id: 3,
      content:
        "Their scope is clearly defined, and the team values quality submissions. Ideal for serious researchers.",
      rating: 5,
      author: "AppSec Analyst, Hyderabad",
    },
    {
      id: 4,
      content:
        "Efficient response time and decent payout structure. Happy to contribute to securing Indian tech products.",
      rating: 4,
      author: "Freelance Pentester, Pune",
    },
    {
      id: 5,
      content:
        "A promising initiative for Indian cybersecurity talent. Found two critical bugs, both were acknowledged within 24 hours.",
      rating: 5,
      author: "Bug Bounty Hunter, Delhi NCR",
    },
    {
      id: 6,
      content:
        "Appreciate the constructive feedback I received on my report — helped me improve my skills.",
      rating: 5,
      author: "Security Enthusiast, Bhopal",
    },
    {
      id: 7,
      content:
        "A good starting point for students and freshers interested in practical infosec work. Highly recommended!",
      rating: 4,
      author: "Cybersecurity Intern, VIT Chennai",
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <span
        key={index}
        className={index < rating ? "text-yellow-400" : "text-gray-300"}
      >
        ★
      </span>
    ));
  };

  const TestimonialCard = ({ testimonial }) => (
    <div className="bg-white p-6 rounded-lg shadow-md mx-4 my-2 min-w-[300px] max-w-[350px]">
      <div className="flex mb-2">{renderStars(testimonial.rating)}</div>
      <p className="text-gray-700 mb-4">{testimonial.content}</p>
      <p className="font-medium">{testimonial.author}</p>
    </div>
  );

  return (
    <section ref={sectionRef} className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="section-header text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Real <span className="text-cyan-500">Stories</span>. Trusted{" "}
            <span className="text-cyan-500">Voices</span>.
          </h2>
          <p className="text-gray-600">-Client Testimonials</p>
        </div>

        <div className="overflow-hidden">
          <Marquee
            gradient={false}
            speed={30}
            direction="left"
            pauseOnHover={true}
            className="py-4"
          >
            {testimonials.slice(0, 4).map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </Marquee>

          <Marquee
            gradient={false}
            speed={30}
            direction="right"
            pauseOnHover={true}
            className="py-4"
          >
            {testimonials.slice(3).map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
