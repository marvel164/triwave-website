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
            grid
            gap-10

            lg:grid-cols-2
            lg:items-center
            lg:gap-20
          "
        >
          {/* Left */}

          <div>
            <h2
              className="
                max-w-[520px]

                text-[36px]
                font-bold
                leading-[1.15]
                tracking-[-1px]
                text-[#042C2C]

                sm:text-[48px]

                md:text-[56px]

                lg:text-[64px]
                lg:tracking-[-2px]
              "
            >
              Triwave Digital
              <br />
              Services
            </h2>
          </div>

          {/* Right */}

          <div>
            <p
              className="
                text-[16px]
                leading-8
                text-[#5B6464]

                sm:text-[18px]
                sm:leading-9

                lg:text-[20px]
                lg:leading-[38px]
              "
            >
              Helping organizations transform the way they communicate, operate,
              and grow through innovative telecommunications, software
              engineering, cloud technologies, artificial intelligence, and
              digital solutions.
            </p>
          </div>
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
