"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

import Container from "../ui/Container";
import { NAV_LINKS } from "@/constants/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "";
    }

    return () => {
      document.body.style.overflowY = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        style={{
          backgroundColor: scrolled ? "#e7f6f3" : "#e7f6f3",
          backdropFilter: scrolled ? "blur(18px)" : "blur(0px)",
          height: scrolled ? "86px" : "102px",
          boxShadow: scrolled
            ? "0 10px 35px rgba(0,0,0,0.08)"
            : "0 0 0 rgba(0,0,0,0)",
          transition:
            "background-color .4s ease, backdrop-filter .4s ease, height .4s ease, box-shadow .4s ease",
        }}
        className="fixed top-0 left-0 z-50 w-full border-b border-[#E8E8E8]"
      >
        <Container className="flex h-full items-center justify-between">
          {/* LOGO */}

          <Link href="/">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.05,
                rotate: -1,
              }}
            >
              <Image
                src="/images/logo/company-logox.png"
                alt="Triwave Digital Logo"
                width={135}
                height={45}
                priority
                className="
                  h-auto
                  w-[95px]
                  sm:w-[100px]
                  md:w-[105px]
                  lg:w-[108px]
                "
              />
            </motion.div>
          </Link>

          {/* DESKTOP NAV */}

          <nav className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((link, index) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + index * 0.12,
                  ease: "easeOut",
                }}
                whileHover={{ y: -2 }}
              >
                <Link
                  href={link.href}
                  className="
                    group
                    relative
                    text-[15px]
                    font-medium
                    text-[#666666]
                    transition-colors
                    duration-300
                    hover:text-[#042C2C]
                  "
                >
                  {link.label}

                  <span
                    className="
                      absolute
                      -bottom-[12px]
                      left-1/2
                      h-[2px]
                      w-0
                      -translate-x-1/2
                      rounded-full
                      bg-[#00796B]
                      transition-all
                      duration-300
                      group-hover:w-full
                    "
                  />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* DESKTOP CTA */}

          <motion.a
            href="mailto:info@triwavedigital.net"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.8,
              ease: "easeOut",
            }}
            whileHover={{
              scale: 1.04,
              y: -2,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="
              hidden
              lg:inline-flex
              items-center
              justify-center
              rounded-lg
              bg-[#00796B]
              px-7
              py-3
              text-sm
              font-medium
              text-white
              shadow-sm
              transition-all
              duration-300
              hover:bg-[#00675C]
              hover:shadow-[0_10px_25px_rgba(0,121,107,0.25)]
            "
          >
            Contact Us
          </motion.a>

          {/* MOBILE BUTTON */}

          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setMenuOpen(true)}
            className="
              flex
              lg:hidden
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-[#00796B]
              text-white
            "
          >
            <Menu size={22} />
          </motion.button>
        </Container>
      </header>

      <AnimatePresence mode="wait">
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.35,
              ease: "easeInOut",
            }}
            className="fixed inset-0 z-[999] overflow-hidden bg-[#F6FBFB]"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex h-full flex-col bg-[#F6FBFB]"
            >
                            {/* ================= TOP BAR ================= */}

              <div className="flex items-center justify-between border-b border-[#E8E8E8] px-6 py-6">
                <Image
                  src="/images/logo/company-logox.png"
                  alt="Triwave Digital Logo"
                  width={110}
                  height={40}
                  className="h-auto w-[95px]"
                />

                <motion.button
                  onClick={() => setMenuOpen(false)}
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ rotate: 90, scale: 1.05 }}
                  transition={{
                    duration: 0.35,
                    ease: "easeInOut",
                  }}
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    bg-[#00796B]
                    text-white
                  "
                >
                  <X size={22} />
                </motion.button>
              </div>

              {/* ================= MENU ================= */}

              <div className="flex flex-1 flex-col justify-center px-8">

                <div className="space-y-7">

                  {NAV_LINKS.map((link, index) => (
                    <motion.div
                      key={link.label}
                      initial={{
                        opacity: 0,
                        y: 40,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: 40,
                      }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="
                          group
                          inline-flex
                          text-[38px]
                          font-bold
                          tracking-[-1.5px]
                          text-[#042C2C]
                          transition-colors
                          duration-300
                          hover:text-[#00796B]
                        "
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}

                </div>

                <motion.a
                  href="mailto:info@triwavedigital.net"
                  onClick={() => setMenuOpen(false)}
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: 35,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="
                    mt-16

                    inline-flex
                    w-fit

                    items-center
                    justify-center

                    rounded-xl

                    bg-[#00796B]

                    px-10
                    py-4

                    text-base
                    font-medium

                    text-white

                    shadow-lg
                  "
                >
                  Contact Us
                </motion.a>

              </div>
                          </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}