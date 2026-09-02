"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import About from "@/components/sections/About";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

const Page = () => {
  return (
    <>
      <Navbar />
      <About />
      <CTA />
      <Footer />
    </>
  );
};

export default Page;
