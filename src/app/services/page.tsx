"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import Navbar from "@/components/layout/Navbar";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <>
      {/* ================= NAVBAR ================= */}

      <Navbar />

      <main className="bg-[#e7f6f3]">
        {/* ================= PAGE HEADER ================= */}

        <section className="pt-36 pb-16 sm:pt-40 sm:pb-20 lg:pt-48 lg:pb-28">
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
                amount: 0.25,
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="
                grid
                grid-cols-1
                gap-8

                lg:grid-cols-2
                lg:items-center
                lg:gap-20
              "
            >
              {/* LEFT */}

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
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
              >
                <h1
                  className="
                    max-w-[650px]

                    text-[42px]
                    font-bold
                    leading-[1.08]
                    tracking-[-1.5px]
                    text-[#042C2C]

                    sm:text-[54px]

                    md:text-[64px]

                    lg:text-[72px]
                    lg:tracking-[-3px]
                  "
                >
                  Triwave Digital
                  <br />
                  Services
                </h1>
              </motion.div>

              {/* RIGHT */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: 50,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: false,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.15,
                  ease: "easeOut",
                }}
              >
                <p
                  className="
                    max-w-[650px]

                    text-[16px]
                    leading-8
                    text-[#5B6464]

                    sm:text-[18px]
                    sm:leading-9

                    lg:text-[21px]
                    lg:leading-[40px]
                  "
                >
                  Helping organizations transform the way they communicate,
                  operate, and grow through innovative telecommunications,
                  software engineering, cloud technologies, artificial
                  intelligence, and digital solutions.
                </p>
              </motion.div>
            </motion.div>
          </Container>
        </section>

        {/* ================= SERVICES ================= */}

        <section className="pb-20 sm:pb-28 lg:pb-36">
          <Container>
            {services.map((service, index) => (
              <div key={service.title}>
                {/* ================= SERVICE ================= */}

                <motion.div
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
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                  className="
                    grid
                    grid-cols-1
                    gap-10

                    py-12

                    sm:py-16

                    lg:grid-cols-2
                    lg:items-center
                    lg:gap-24
                    lg:py-20
                  "
                >
                  {/* ================= LEFT — CONTENT ================= */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      x: -60,
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
                      ease: "easeOut",
                    }}
                    className="order-1"
                  >
                    <h2
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
                    </h2>

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

                    <h3
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
                    </h3>

                    <div
                      className="
                        mt-6
                        space-y-4

                        lg:mt-8
                        lg:space-y-6
                      "
                    >
                      {service.items.map((item, itemIndex) => (
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
                            delay: itemIndex * 0.08,
                          }}
                          className="flex items-center gap-4"
                        >
                          {/* Sparkle-style bullet */}

                          <span
                            className="
                              flex
                              h-5
                              w-5
                              shrink-0
                              items-center
                              justify-center

                              text-[#009966]

                              lg:h-[22px]
                              lg:w-[22px]
                            "
                          >
                            ✦
                          </span>

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

                  {/* ================= RIGHT — IMAGE ================= */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      x: 60,
                      scale: 0.95,
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
                    className="order-2"
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={900}
                      height={700}
                      priority={index === 0}
                      className="
                        h-[260px]
                        w-full
                        rounded-xl
                        object-contain

                        sm:h-[380px]

                        lg:h-[720px]
                      "
                    />
                  </motion.div>
                </motion.div>

                {/* ================= DIVIDER ================= */}

                {index < services.length - 1 && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      scaleX: 0,
                    }}
                    whileInView={{
                      opacity: 1,
                      scaleX: 1,
                    }}
                    viewport={{
                      once: false,
                      amount: 0.5,
                    }}
                    transition={{
                      duration: 0.7,
                      ease: "easeOut",
                    }}
                    className="
                      mx-auto
                      h-px
                      w-[82%]
                      origin-center
                      bg-[#042C2C]

                      sm:w-[78%]

                      lg:w-[72%]
                    "
                  />
                )}
              </div>
            ))}
          </Container>
        </section>

        {/* ================= CTA ================= */}

        <CTA />
      </main>

      {/* ================= FOOTER ================= */}

      <Footer />
    </>
  );
}