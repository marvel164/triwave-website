"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

import Container from "../ui/Container";
import { services } from "@/data/services";

export default function Services() {
  const service = services[0];

  return (
    <section
      id="services"
      className="
        bg-[#e7f6f3]
        py-16
        sm:py-20
        md:py-24
        lg:py-32
      "
    >
      <Container>
        {/* ================= HEADER ================= */}

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
            gap-8

            lg:grid-cols-2
            lg:items-center
            lg:gap-20
          "
        >
          {/* LEFT */}

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

          {/* RIGHT */}

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
              Helping organizations transform the way they communicate,
              operate, and grow through innovative telecommunications, software
              engineering, cloud technologies, artificial intelligence, and
              digital solutions.
            </p>
          </div>
        </motion.div>

        {/* ================= FIRST SERVICE ================= */}

        <motion.div
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
            amount: 0.15,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="
            mt-14

            grid
            grid-cols-1
            gap-10

            sm:mt-16

            lg:mt-20
            lg:grid-cols-2
            lg:items-start
            lg:gap-24
          "
        >
          {/* ================= CONTENT ================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: false,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
            }}
            className="order-2 lg:order-1"
          >
            <h3
              className="
                text-[30px]
                font-bold
                leading-tight
                text-[#042C2C]

                sm:text-[40px]

                lg:text-[52px]
              "
            >
              {service.title}
            </h3>

            <p
              className="
                mt-5

                text-[16px]
                leading-8
                text-[#4F4F4F]

                sm:text-[17px]

                lg:mt-8
                lg:text-lg
                lg:leading-9
              "
            >
              {service.description}
            </p>

            <h4
              className="
                mt-7

                text-lg
                font-semibold
                text-[#042C2C]

                lg:mt-10
                lg:text-xl
              "
            >
              {service.subtitle}
            </h4>

            <div
              className="
                mt-6
                space-y-4

                lg:mt-8
                lg:space-y-5
              "
            >
              {service.items.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: false,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.07,
                  }}
                  className="flex items-start gap-4"
                >
                  <span
                    className="
                      mt-2
                      h-2
                      w-2
                      shrink-0
                      rounded-full
                      bg-[#00796B]
                    "
                  />

                  <p
                    className="
                      text-[15px]
                      leading-7
                      text-[#303030]

                      sm:text-[16px]

                      lg:text-lg
                    "
                  >
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ================= IMAGE ================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: false,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="
              order-1

              overflow-hidden
              rounded-xl

              lg:order-2
            "
          >
            <Image
              src={service.image}
              alt={service.title}
              width={900}
              height={700}
              priority
              className="
                h-[280px]
                w-full
                object-contain

                sm:h-[400px]

                lg:h-[600px]
              "
            />
          </motion.div>
        </motion.div>

        {/* ================= EXPLORE BUTTON ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
            mt-12
            flex
            justify-center

            sm:mt-14

            lg:mt-16
          "
        >
          <Link
            href="/services"
            className="
              flex
              min-h-[54px]
              items-center
              justify-center

              rounded-xl

              bg-[#00796B]

              px-8
              py-4

              text-sm
              font-semibold
              tracking-wide
              text-white

              transition-all
              duration-300

              hover:-translate-y-1
              hover:bg-[#00685C]
              hover:shadow-xl

              sm:px-10
            "
          >
            EXPLORE ALL SERVICES
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}