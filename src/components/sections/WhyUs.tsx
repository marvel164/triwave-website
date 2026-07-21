"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import Container from "../ui/Container";

const reasons = [
  {
    number: "1/3",
    title: "Innovative Solutions",
    description:
      "We combine telecommunications expertise with modern technologies to build innovative, scalable solutions tailored to your business goals and evolving market needs.",
  },
  {
    number: "2/3",
    title: "End-to-End Expertise",
    description:
      "From strategy and consulting to design, development, deployment, and ongoing support, we provide comprehensive technology services under one roof.",
  },
  {
    number: "3/3",
    title: "Customer-First Approach",
    description:
      "We work as an extension of your team, taking the time to understand your challenges and delivering reliable solutions that create measurable business value.",
  },
];

export default function WhyUs() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={sectionRef}
      id="why-us"
      className="
        relative
        h-[260vh]
        bg-[#071B1B]
      "
    >
      <div
        className="
          sticky
          top-0
          flex
          h-screen
          items-center
          overflow-hidden
        "
      >
        <Container>
          <div
            className="
              relative
              mx-auto
              h-[520px]
              w-full
              max-w-[900px]
            "
          >
                        {reasons.map((reason, index) => {
              const start = index * 0.22;
              const end = start + 0.22;

              const y = useTransform(
                scrollYProgress,
                [start, end],
                [220, 0]
              );

              const scale = useTransform(
                scrollYProgress,
                [start, end],
                [0.9, 1]
              );

              const opacity = useTransform(
                scrollYProgress,
                [start, end],
                [0, 1]
              );

              return (
                <motion.div
                  key={reason.title}
                  style={{
                    y,
                    scale,
                    opacity,
                    zIndex: index + 1,
                  }}
                  className="
                    absolute
                    inset-0

                    bg-[#F6B500]

                    p-7

                    shadow-2xl

                    sm:p-8

                    lg:p-10
                  "
                >
                  {/* Number */}

                  <motion.p
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: false,
                      amount: 0.4,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.15,
                    }}
                    className="
                      text-[28px]
                      font-semibold
                      text-white

                      sm:text-[34px]

                      lg:text-4xl
                    "
                  >
                    {reason.number}
                  </motion.p>

                  {/* Title */}

                  <motion.h3
                    initial={{
                      opacity: 0,
                      y: 25,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: false,
                      amount: 0.4,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.25,
                    }}
                    className="
                      mt-12

                      text-[28px]
                      font-bold
                      leading-tight
                      text-white

                      sm:mt-16
                      sm:text-[32px]

                      lg:mt-28
                      lg:text-4xl
                    "
                  >
                    {reason.title}
                  </motion.h3>

                  {/* Description */}

                  <motion.p
                    initial={{
                      opacity: 0,
                      y: 25,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: false,
                      amount: 0.4,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.35,
                    }}
                    className="
                      mt-5

                      text-[15px]
                      leading-7
                      text-white/90

                      sm:text-[16px]
                      sm:leading-8

                      lg:mt-8
                      lg:text-lg
                      lg:leading-9
                    "
                  >
                    {reason.description}
                  </motion.p>
                </motion.div>
              );
            })}
                      </div>
        </Container>
      </div>
    </section>
  );
}