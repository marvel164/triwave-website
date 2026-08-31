import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import ServicesMarquee from "@/components/sections/ServicesMarquee";
import About from "@/components/sections/About";
import WhyChoose from "@/components/sections/WhyChoose";
import WhyUs from "@/components/sections/WhyUs";
import BusinessFuture from "@/components/sections/BusinessFuture";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ServicesMarquee />
      <About />
      <WhyChoose />
      <WhyUs />
      <BusinessFuture />
      <CTA />
      <Footer />
    </>
  );
}
