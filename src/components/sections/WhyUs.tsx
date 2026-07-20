"use client";

import { motion } from "framer-motion";
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
  return (
    <section
      id="why-us"
      className="bg-[#071B1B] py-16 sm:py-20 lg:py-28"
    >
      <Container>
        <div
          className="
            grid
            grid-cols-1
            gap-6

            sm:grid-cols-2
            sm:gap-8

            lg:grid-cols-3
            lg:gap-10
          "
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: false,
                amount: 0.25,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="
                min-h-[340px]

                cursor-pointer
                bg-[#F6B500]

                p-7

                shadow-xl
                transition-shadow
                duration-300

                sm:min-h-[370px]
                sm:p-8

                lg:min-h-[430px]
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
          ))}
        </div>
      </Container>
    </section>
  );
}