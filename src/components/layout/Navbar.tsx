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
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        style={{
          backgroundColor: scrolled ? "rgba(255,255,255,0.75)" : "#F6FBFB",
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
          {/* ================= LOGO ================= */}

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

          {/* ================= DESKTOP NAV ================= */}

          <nav className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((link, index) => (
              <motion.div
                key={link.label}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + index * 0.12,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -2,
                }}
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

          {/* ================= DESKTOP CTA ================= */}

          <motion.a
            href="mailto:info@triwavedigital.net"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
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

          {/* ================= MOBILE MENU BUTTON ================= */}

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

      {/* ================= MOBILE OVERLAY ================= */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[999] bg-[#F6FBFB]"
          >
            <motion.div
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
              }}
              className="flex h-full flex-col"
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
                  whileHover={{
                    scale: 1.05,
                    rotate: 90,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  onClick={() => setMenuOpen(false)}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#00796B] text-white"
                >
                  <X size={22} />
                </motion.button>
              </div>

              {/* ================= MENU LINKS ================= */}

              <div className="flex flex-1 flex-col items-center justify-center gap-10">
                {NAV_LINKS.map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.4,
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="text-3xl font-semibold text-[#042C2C] transition-colors hover:text-[#00796B]"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.a
                  href="mailto:info@triwavedigital.net"
                  onClick={() => setMenuOpen(false)}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.45,
                    duration: 0.4,
                  }}
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="mt-10 inline-flex items-center justify-center rounded-xl bg-[#00796B] px-10 py-4 text-base font-medium text-white shadow-lg"
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
