"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

import Container from "../ui/Container";

export default function WhyChoose() {
  return (
    <section id="why-choose" className="bg-[#e7f6f3] py-16 sm:py-20 lg:py-32">
      <Container>
        <div className="relative lg:min-h-[920px]">
          {/* ================= MOBILE IMAGE GRID ================= */}

          <div className="grid grid-cols-2 gap-4 lg:hidden">
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
            >
              <Image
                src="/images/why-choose/success-woman.png"
                alt="Success Woman"
                width={300}
                height={300}
                className="aspect-square w-full rounded-2xl object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: "easeOut",
              }}
            >
              <Image
                src="/images/why-choose/happy-team.png"
                alt="Happy Team"
                width={300}
                height={300}
                className="aspect-square w-full rounded-2xl object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: "easeOut",
              }}
            >
              <Image
                src="/images/why-choose/celebrating-man.png"
                alt="Celebrating Man"
                width={300}
                height={300}
                className="aspect-square w-full rounded-2xl object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{
                duration: 0.7,
                delay: 0.3,
                ease: "easeOut",
              }}
            >
              <Image
                src="/images/why-choose/group-selfie.png"
                alt="Group Selfie"
                width={300}
                height={300}
                className="aspect-square w-full rounded-2xl object-cover"
              />
            </motion.div>
          </div>

          {/* ================= TOP LEFT IMAGE ================= */}

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="absolute left-0 top-0 hidden lg:block"
          >
            <Image
              src="/images/why-choose/success-woman.png"
              alt="Success Woman"
              width={320}
              height={320}
              className="
                h-[220px]
                w-[220px]

                sm:h-[250px]
                sm:w-[250px]

                lg:h-[300px]
                lg:w-[300px]

                rounded-2xl
                object-cover
              "
            />
          </motion.div>

          {/* ================= TOP RIGHT IMAGE ================= */}

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="absolute right-8 top-0 hidden lg:block"
          >
            <Image
              src="/images/why-choose/happy-team.png"
              alt="Happy Team"
              width={320}
              height={320}
              className="
                h-[220px]
                w-[220px]

                sm:h-[250px]
                sm:w-[250px]

                lg:h-[300px]
                lg:w-[300px]

                rounded-2xl
                object-cover
              "
            />
          </motion.div>

          {/* ================= CENTER CONTENT ================= */}

          <div
            className="
              mx-auto
              flex
              max-w-[760px]
              flex-col
              items-center
              text-center

              pt-10

              sm:pt-14

              lg:pt-60
            "
          >
            {/* Heading */}

            <motion.h2
              initial={{
                opacity: 0,
                y: 45,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: false,
                amount: 0.35,
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="
                text-[38px]
                font-bold
                leading-tight
                tracking-[-1px]
                text-[#042C2C]

                sm:text-[52px]

                lg:text-[72px]
                lg:leading-[1.05]
                lg:tracking-[-3px]
              "
            >
              Why Choose
              <br />
              Triwave Digital
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
                amount: 0.35,
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: "easeOut",
              }}
              className="
                mt-6

                text-[16px]
                leading-8
                text-[#505050]

                sm:text-[18px]

                lg:mt-10
                lg:text-[22px]
                lg:leading-[42px]
              "
            >
              Choosing the right technology partner is essential. At Triwave, we
              deliver reliable, scalable, and future-ready solutions backed by
              technical expertise, strategic thinking, and a commitment to your
              success.
            </motion.p>

            {/* Yellow Circle */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.4,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              viewport={{
                once: false,
                amount: 0.35,
              }}
              transition={{
                delay: 0.45,
                type: "spring",
                stiffness: 180,
              }}
              className="
                mt-10

                flex
                h-14
                w-14
                items-center
                justify-center

                rounded-full
                bg-[#F6B500]
                text-white
                shadow-lg

                sm:mt-14
                sm:h-16
                sm:w-16

                lg:mt-20
                lg:h-20
                lg:w-20
              "
            >
              <ArrowDown className="h-6 w-6 lg:h-[34px] lg:w-[34px]" />
            </motion.div>
          </div>

          {/* ================= BOTTOM LEFT IMAGE ================= */}

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="absolute bottom-0 left-0 hidden lg:block"
          >
            <Image
              src="/images/why-choose/celebrating-man.png"
              alt="Celebrating Man"
              width={320}
              height={320}
              className="
                h-[220px]
                w-[220px]

                sm:h-[250px]
                sm:w-[250px]

                lg:h-[300px]
                lg:w-[300px]

                rounded-2xl
                object-cover
              "
            />
          </motion.div>

          {/* ================= BOTTOM RIGHT IMAGE ================= */}

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{
              duration: 0.7,
              delay: 0.35,
              ease: "easeOut",
            }}
            className="absolute bottom-0 right-0 hidden lg:block"
          >
            <Image
              src="/images/why-choose/group-selfie.png"
              alt="Group Selfie"
              width={320}
              height={320}
              className="
                h-[220px]
                w-[220px]

                sm:h-[250px]
                sm:w-[250px]

                lg:h-[300px]
                lg:w-[300px]

                rounded-2xl
                object-cover
              "
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
