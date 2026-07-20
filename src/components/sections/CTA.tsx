"use client";

import { motion } from "framer-motion";
import Container from "../ui/Container";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0B3A36] py-16 sm:py-24 lg:py-36"
    >
      {/* Background Pattern */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.05]
          bg-[radial-gradient(circle_at_top_left,_white_1px,_transparent_1px)]
          bg-[length:40px_40px]
        "
      />

      <Container>
        <div className="relative z-10 mx-auto max-w-[900px] text-center">
          {/* Heading */}

          <motion.h2
            initial={{
              opacity: 0,
              y: 50,
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
            }}
            className="
              text-[36px]
              font-bold
              leading-tight
              tracking-[-1px]
              text-white

              sm:text-[48px]

              lg:text-[64px]
              lg:tracking-[-2px]
            "
          >
            Ready to Build What's Next?
          </motion.h2>

          {/* Description */}

          <motion.p
            initial={{
              opacity: 0,
              y: 50,
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
              delay: 0.15,
            }}
            className="
              mx-auto
              mt-6
              max-w-[760px]

              text-[16px]
              leading-8
              text-white/80

              sm:text-[18px]

              lg:mt-10
              lg:text-[21px]
              lg:leading-[42px]
            "
          >
            The future belongs to businesses that embrace innovation. Partner
            with Triwave Digital Technologies to build secure, scalable, and
            future-ready solutions that keep you ahead of the curve.
          </motion.p>

          {/* Buttons */}

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
              delay: 0.3,
            }}
            className="
              mt-10

              flex
              flex-col
              items-center
              gap-4

              sm:mt-14

              lg:mt-20
              lg:flex-row
              lg:justify-center
              lg:gap-8
            "
          >
            {/* Contact Button */}

            <a
              href="mailto:info@triwavedigital.net"
              className="
                flex
                w-full
                max-w-[340px]
                items-center
                justify-center

                rounded-lg
                bg-white

                px-8
                py-4

                text-base
                font-semibold
                text-[#042C2C]

                transition-all
                duration-300

                hover:-translate-y-1
                hover:shadow-2xl

                lg:w-auto
                lg:max-w-none
                lg:px-12
              "
            >
              CONTACT US
            </a>

            {/* Services Button */}

            <button
              className="
                w-full
                max-w-[340px]

                rounded-lg
                border
                border-[#B6EFE7]
                bg-[#B6EFE7]

                px-8
                py-4

                text-base
                font-semibold
                text-[#042C2C]

                transition-all
                duration-300

                hover:-translate-y-1
                hover:bg-white
                hover:shadow-2xl

                lg:w-auto
                lg:max-w-none
                lg:px-12
              "
            >
              EXPLORE OUR SERVICES
            </button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
