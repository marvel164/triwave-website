"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Container from "../ui/Container";

export default function Hero() {
  return (
    <section className="bg-[#F6FBFB] pt-44 pb-16">
      <Container>
        <div className="hidden lg:grid grid-cols-2 gap-16">
          {/* ================= LEFT ================= */}

          <div>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: false,
                amount: 0.25,
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="
                max-w-[560px]
                text-[72px]
                leading-[78px]
                font-bold
                tracking-[-2px]
                text-[#042C2C]
                
              "
            >
              Technology That
              <br />
              Moves Business
              <br />
              Forward
            </motion.h1>

            <div className="mt-14 flex gap-5">
              <motion.button
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: false,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease: "easeOut",
                }}
                className="
                  h-[58px]
                  rounded-xl
                  bg-[#00796B]
                  px-10
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#00685C]
                  hover:shadow-xl
                "
              >
                Contact Us
              </motion.button>

              <motion.button
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: false,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.35,
                  ease: "easeOut",
                }}
                className="
                  h-[58px]
                  rounded-xl
                  border
                  border-[#D8D8D8]
                  bg-white
                  px-10
                  font-medium
                  text-[#042C2C]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                "
              >
                Explore Our Services
              </motion.button>
            </div>
          </div>

          {/* ================= RIGHT ================= */}

          <div className="flex justify-end">
            <motion.p
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{
                once: false,
                amount: 0.25,
              }}
              transition={{
                duration: 0.8,
                delay: 0.45,
                ease: "easeOut",
              }}
              className="
                mt-5
                max-w-[590px]
                text-[26px]
                leading-[52px]
                font-medium
                text-[#111111]
              "
            >
              Building reliable telecommunications infrastructure and
              intelligent digital solutions that enable organizations to
              innovate, scale confidently, and thrive in a connected world.
            </motion.p>
          </div>
        </div>

        {/* ================= MOBILE HERO CONTENT ================= */}

<div className="lg:hidden flex flex-col items-center text-center">

  {/* Heading */}

  <motion.h1
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
      mx-auto
      max-w-[360px]

      text-[36px]
      leading-[1.15]

      font-bold
      tracking-[-1.5px]
      text-[#042C2C]
    "
  >
    Technology That
    <br />
    Moves Business
    <br />
    Forward
  </motion.h1>


  {/* Sub Heading */}

  <motion.p
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
      amount: 0.25,
    }}
    transition={{
      duration: 0.7,
      delay: 0.2,
      ease: "easeOut",
    }}
    className="
      mt-8

      max-w-[340px]

      text-[16px]
      leading-8

      font-medium
      text-[#111111]
    "
  >
    Building reliable telecommunications infrastructure and intelligent
    digital solutions that enable organizations to innovate, scale
    confidently, and thrive in a connected world.
  </motion.p>


  {/* Buttons */}

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
      amount: 0.25,
    }}
    transition={{
      duration: 0.7,
      delay: 0.35,
      ease: "easeOut",
    }}
    className="
      mt-10

      flex
      w-full
      flex-row
      items-center
      justify-center

      gap-3

      px-2
    "
  >

    {/* Contact */}

    <button
      className="
        h-[52px]

        flex-1

        rounded-xl

        bg-[#00796B]

        px-4

        text-sm
        font-medium
        text-white

        transition-all
        duration-300

        hover:bg-[#00685C]
      "
    >
      Contact Us
    </button>


    {/* Explore */}

    <button
      className="
        h-[52px]

        flex-1

        rounded-xl

        border
        border-[#D8D8D8]

        bg-white

        px-4

        text-sm
        font-medium
        text-[#042C2C]

        transition-all
        duration-300

        hover:shadow-lg
      "
    >
      Explore Services
    </button>

  </motion.div>

</div>

        {/* ================= IMAGE ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 80,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.2,
          }}
          transition={{
            duration: 0.9,
            delay: 0.6,
            ease: "easeOut",
          }}
          className="mt-24"
        >
          <Image
  src="/images/hero/hero-meeting-imagex.jpg"
  alt="Triwave Digital Meeting"
  width={1400}
  height={850}
  priority
  className="
    w-full

    max-h-[420px]

    h-auto
    object-contain

    lg:max-h-none
    lg:object-cover
  "
/>
        </motion.div>
      </Container>
    </section>
  );
}