import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStats from "@/components/TrustStats";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import WhyUs from "@/components/WhyUs";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import LocationSection from "@/components/LocationSection";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStats />
        <About />
        <HowItWorks />
        <WhyUs />
        <Gallery />
        <Testimonials />
        <FAQ />
        <LocationSection />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
