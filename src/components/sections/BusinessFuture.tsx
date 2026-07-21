"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "../ui/Container";

export default function BusinessFuture() {
  return (
    <section id="business-future" className="bg-[#BCD9D8] py-16 lg:py-0">
      <div
        className="
          grid
          grid-cols-1

          lg:min-h-[760px]
          lg:grid-cols-2
        "
      >
        {/* ================= LEFT ================= */}

        <div className="order-1 flex items-center lg:order-1">
          <Container>
            <motion.div
              initial={{
                opacity: 0,
                x: -70,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: false,
                amount: 0.3,
              }}
              transition={{
                duration: 0.8,
              }}
              className="lg:pl-8 xl:pl-12"
            >
              {/* Heading */}

              <motion.h2
                initial={{
                  opacity: 0,
                  y: 35,
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
                  duration: 0.7,
                  delay: 0.15,
                }}
                className="
                  mx-auto
                  max-w-[520px]

                  text-center

                  text-[36px]
                  font-bold
                  leading-tight
                  tracking-[-1px]
                  text-[#042C2C]

                  sm:text-[48px]

                  lg:mx-0
                  lg:text-left
                  lg:text-[68px]
                  lg:leading-[1.05]
                  lg:tracking-[-3px]
                "
              >
                Business Future
                <br />
                with Triwave
              </motion.h2>

              {/* Description */}

              <motion.p
                initial={{
                  opacity: 0,
                  y: 35,
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
                  duration: 0.7,
                  delay: 0.3,
                }}
                className="
                  mx-auto
                  mt-6
                  max-w-[560px]

                  text-center

                  text-[16px]
                  leading-8
                  text-[#424242]

                  sm:text-[18px]

                  lg:mx-0
                  lg:mt-10
                  lg:text-left
                  lg:text-[21px]
                  lg:leading-[42px]
                "
              >
                Technology is transforming the way businesses operate,
                communicate, and grow. At Triwave, we develop innovative
                telecommunications and digital solutions that empower
                organizations to embrace change with confidence.
                <br />
                <br />
                Through expertise, collaboration, and a commitment to
                excellence, we help our clients build a smarter, more connected
                future.
              </motion.p>
            </motion.div>
          </Container>
        </div>

        {/* ================= IMAGE ================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: 80,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: false,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="
            order-2

            mt-10
            px-5

            lg:order-2
            lg:mt-0
            lg:px-0
            lg:relative
            lg:min-h-[760px]
          "
        >
          {/* Mobile & Tablet */}

          <div className="mt-8 flex justify-center lg:hidden">
            <Image
              src="/images/future/business-future.png"
              alt="Business Future"
              width={900}
              height={700}
              priority
              className="
                h-auto
                w-full
                max-w-[700px]
                rounded-xl
              "
            />
          </div>

          {/* Desktop */}

          <div className="relative hidden h-full min-h-[760px] lg:block">
            <Image
              src="/images/future/business-future.png"
              alt="Business Future"
              fill
              priority
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}