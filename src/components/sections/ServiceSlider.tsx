"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";

import { services } from "@/data/services";

export default function ServiceSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % services.length);
  };

  const previousSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + services.length) % services.length);
  };

  const service = services[current];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 120 : -120,
      opacity: 0,
    }),

    center: {
      x: 0,
      opacity: 1,
    },

    exit: (direction: number) => ({
      x: direction > 0 ? -120 : 120,
      opacity: 0,
    }),
  };

  return (
    <section className="overflow-hidden mt-10 sm:mt-14 lg:mt-20">
      {/* Top Controls */}

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
          duration: 0.6,
          ease: "easeOut",
        }}
        className="mb-8 flex items-center justify-between sm:mb-12 lg:mb-16"
      >
        <button
          onClick={previousSlide}
          className="
    flex
    h-12
    w-12
    items-center
    justify-center
    rounded-full
    bg-[#F6B500]
    text-white
    transition-all
    duration-300
    hover:scale-105
    hover:shadow-xl

    sm:h-16
    sm:w-16

    lg:h-20
    lg:w-20
  "
        >
          <ArrowLeft className="h-5 w-5 sm:h-7 sm:w-7 lg:h-[34px] lg:w-[34px]" />
        </button>

        <button
          onClick={nextSlide}
          className="
    flex
    h-12
    w-12
    items-center
    justify-center
    rounded-full
    bg-[#F6B500]
    text-white
    transition-all
    duration-300
    hover:scale-105
    hover:shadow-xl

    sm:h-16
    sm:w-16

    lg:h-20
    lg:w-20
  "
        >
          <ArrowRight className="h-5 w-5 sm:h-7 sm:w-7 lg:h-[34px] lg:w-[34px]" />
        </button>
      </motion.div>

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            duration: 0.55,
            ease: "easeInOut",
          }}
          className="
  grid
  grid-cols-1
  gap-10

  lg:grid-cols-2
  lg:gap-24
"
        >
          {/* LEFT */}

          <motion.div
            className="order-2 lg:order-1"
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
              amount: 0.25,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
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

            <div className="mt-6 space-y-4 lg:mt-8 lg:space-y-6">
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
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                  }}
                  className="flex items-center gap-4"
                >
                  <Sparkles
                    className="
    h-5
    w-5
    shrink-0
    text-[#009966]

    lg:h-[22px]
    lg:w-[22px]
  "
                    strokeWidth={2.4}
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

          {/* RIGHT */}

          <motion.div
            className="order-1 lg:order-2"
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
              amount: 0.25,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            <Image
              src={service.image}
              alt={service.title}
              width={900}
              height={700}
              priority
              className="
  w-full

  h-[260px]
  sm:h-[380px]
  lg:h-[720px]

  rounded-xl

  object-contain
"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
