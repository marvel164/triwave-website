"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Container from "../ui/Container";

export default function About() {
  return (
    <section id="about" className="bg-white py-16 sm:py-20 lg:py-28">
      <Container>
        <div
          className="
    grid
    grid-cols-1
    gap-12

    lg:grid-cols-2
    lg:items-center
    lg:gap-24
  "
        >
          {/* LEFT IMAGE */}

          <motion.div
            className="order-1"
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
          >
            <Image
              src="/images/about/team-collagex.png"
              alt="Triwave Team"
              width={620}
              height={760}
              className="
  w-full

  rounded-xl

  object-contain

  sm:h-[500px]

  lg:h-auto
  lg:rounded-none
  lg:object-cover
"
            />
          </motion.div>

          {/* RIGHT CONTENT */}

          <motion.div className="order-2">
            <motion.h2
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
                duration: 0.7,
                ease: "easeOut",
              }}
              className="
    text-center

    text-[34px]
    font-bold
    leading-tight
    tracking-[-1px]
    text-[#042C2C]

    sm:text-[46px]

    lg:text-left
    lg:text-[64px]
    lg:tracking-[-2px]
  "
            >
              About Triwave Digital
            </motion.h2>

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
                amount: 0.3,
              }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: "easeOut",
              }}
              className="
    mt-6

    text-center

    text-[16px]
    leading-8

    text-[#424242]

    sm:text-[18px]

    lg:mt-10
    lg:text-left
    lg:text-[21px]
    lg:leading-[46px]
  "
            >
              Triwave Digital Technologies Ltd is an innovative technology
              company committed to helping businesses harness the power of
              technology to connect, innovate, and grow. We deliver end-to-end
              solutions across telecommunications, software development, cloud
              services, artificial intelligence, fintech, and digital
              transformation, enabling organizations to operate more efficiently
              and create exceptional digital experiences. Driven by innovation
              and a passion for solving real business challenges, we work
              closely with our clients to design scalable, secure, and
              future-ready solutions that support long-term growth in an
              increasingly connected world.
            </motion.p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
