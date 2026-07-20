"use client";

import { motion } from "framer-motion";

import Container from "../ui/Container";
import ServiceSlider from "./ServiceSlider";

export default function Services() {
  return (
    <section
      id="services"
      className="
        bg-white

        py-16
        sm:py-20
        md:py-24
        lg:py-32
      "
    >
      <Container>
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="
            mx-auto
            text-center

            lg:mx-0
            lg:text-left
          "
        >
          {/* Section Label */}

          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.22em]
              text-[#00796B]

              sm:text-sm

              lg:text-sm
            "
          >
            Triwave Digital Services
          </p>

          {/* Heading */}

          <h2
            className="
              mx-auto
              mt-4

              max-w-[340px]

              text-[32px]
              leading-[1.2]
              font-bold
              tracking-[-1px]
              text-[#042C2C]

              sm:max-w-[560px]
              sm:text-[42px]

              md:max-w-[650px]
              md:text-[48px]

              lg:mx-0
              lg:mt-5
              lg:max-w-[760px]
              lg:text-[56px]
              lg:leading-[1.15]
              lg:tracking-[-2px]
            "
          >
            Innovative technology services built for modern businesses.
          </h2>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-6

              max-w-[340px]

              text-[16px]
              leading-8
              text-[#5B6464]

              sm:mt-7
              sm:max-w-[620px]
              sm:text-[18px]
              sm:leading-9

              lg:mx-0
              lg:mt-8
              lg:max-w-[760px]
              lg:text-[20px]
              lg:leading-[38px]
            "
          >
            We provide end-to-end digital solutions that help organizations
            innovate, improve operational efficiency, strengthen customer
            engagement, and accelerate business growth across multiple
            industries.
          </p>
        </motion.div>

        {/* Slider */}

        <div
          className="
            mt-12

            sm:mt-14

            lg:mt-16
          "
        >
          <ServiceSlider />
        </div>
      </Container>
    </section>
  );
}