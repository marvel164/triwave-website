"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Container from "../ui/Container";

import {
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa6";

const quickLinks = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About Us",
    href: "#about",
  },
  {
    label: "Our Services",
    href: "#services",
  },
  {
    label: "Contact Us",
    href: "#contact",
  },
];

const socials = [
  {
    icon: FaInstagram,
    href: "#",
  },
  {
    icon: FaFacebookF,
    href: "#",
  },
  {
    icon: FaXTwitter,
    href: "#",
  },
  {
    icon: FaTiktok,
    href: "#",
  },
  {
    icon: FaLinkedinIn,
    href: "#",
  },
];

export default function Footer() {
  return (
    <footer className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        {/* ================= MOBILE ================= */}

        <div className="block lg:hidden">
          {/* Logo */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <Image
              src="/images/logo/company-logox.png"
              alt="Triwave Digital"
              width={220}
              height={90}
              className="h-auto w-[180px]"
            />

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="
                mt-6
                max-w-[340px]
                text-center
                text-[15px]
                leading-7
                text-[#555]
              "
            >
              Transforming ideas into intelligent technology solutions through
              innovation, expertise, and a commitment to excellence.
            </motion.p>
          </motion.div>

          {/* Bottom Row */}

          <div className="mt-14 grid grid-cols-2 gap-10">
            {/* LEFT */}

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm text-[#777]">Email Address</p>

              <a
                href="mailto:info@triwavedigital.net"
                className="
                  mt-3
                  block
                  break-all
                  text-base
                  font-semibold
                  text-[#042C2C]
                "
              >
                info@triwavedigital.net
              </a>

              <p className="mt-8 text-sm text-[#777]">Socials</p>

              <div className="mt-5 flex flex-wrap gap-3">
                {socials.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.a
                      key={index}
                      href={item.href}
                      whileHover={{
                        y: -5,
                        scale: 1.08,
                      }}
                      whileTap={{
                        scale: 0.95,
                      }}
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        bg-[#00796B]
                        text-white
                      "
                    >
                      <Icon size={18} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* RIGHT */}

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="text-right"
            >
              <p className="text-lg font-semibold text-[#042C2C]">
                Quick Links
              </p>

              <div className="mt-6 flex flex-col gap-5">
                {quickLinks.map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.08,
                    }}
                  >
                    <Link
                      href={link.href}
                      className="
                        text-[16px]
                        text-[#444]
                        transition
                        hover:text-[#00796B]
                      "
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* ================= DESKTOP ================= */}

        <div
          className="
            hidden
            lg:grid
            lg:grid-cols-3
            lg:items-start
          "
        >
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-start"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
              className="text-sm text-[#777]"
            >
              Email Address
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.1 }}
              href="mailto:info@triwavedigital.net"
              className="
                mt-4
                block
                text-xl
                font-semibold
                text-[#042C2C]
              "
            >
              info@triwavedigital.net
            </motion.a>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-12 text-sm text-[#777]"
            >
              Socials
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 flex gap-4"
            >
              {socials.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.a
                    key={index}
                    href={item.href}
                    whileHover={{
                      y: -6,
                      scale: 1.08,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      bg-[#00796B]
                      text-white
                    "
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* CENTER */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/images/logo/company-logox.png"
                alt="Triwave Digital"
                width={220}
                height={90}
                className="h-auto w-[220px]"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="
                mt-8
                max-w-[420px]
                text-center
                text-[17px]
                leading-8
                text-[#555]
              "
            >
              Transforming ideas into intelligent technology solutions through
              innovation, expertise, and a commitment to excellence.
            </motion.p>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-end"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
              className="text-lg font-semibold text-[#042C2C]"
            >
              Quick Links
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-8 flex flex-col gap-6"
            >
              {quickLinks.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                  }}
                >
                  <Link
                    href={link.href}
                    className="
                      text-lg
                      text-[#444]
                      transition-all
                      duration-300
                      hover:text-[#00796B]
                    "
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* COPYRIGHT */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
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
            delay: 0.25,
          }}
          className="
            mt-16
            border-t
            border-[#E6E6E6]
            pt-8
            text-center
            text-sm
            text-[#777]

            sm:mt-20

            lg:mt-24
            lg:pt-10
          "
        >
          © 2026 Triwave Digital Technologies Ltd. All rights reserved.
        </motion.div>
      </Container>
    </footer>
  );
}
