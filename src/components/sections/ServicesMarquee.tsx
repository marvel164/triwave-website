"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const services = [
  "Value Added Services (VAS)",
  "Software Development",
  "Mobile Content and Digital Services",
  "Web and Mobile Application Development",
  "Cloud and Managed IT Services",
  "Systems Integration",
  "ICT Consulting",
];

// Duplicate the array to create a seamless loop
const marqueeItems = [...services, ...services];

export default function ServicesMarquee() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="overflow-hidden bg-[#F6B500] py-3 sm:py-4 lg:py-5"
    >
      <motion.div
        className="flex w-max items-center"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 28,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {marqueeItems.map((service, index) => (
          <div
            key={`${service}-${index}`}
            className="mx-4 flex items-center gap-3 whitespace-nowrap sm:mx-6 sm:gap-4 lg:mx-8 lg:gap-5"
          >
            <Sparkles
              size={16}
              strokeWidth={2.5}
              className="text-white sm:h-[18px] sm:w-[18px] lg:h-5 lg:w-5"
            />

            <span
              className="
  text-[18px]
  font-medium
  tracking-[-0.3px]
  text-white

  sm:text-[22px]

  lg:text-[30px]
"
            >
              {service}
            </span>
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
}
