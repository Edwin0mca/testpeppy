import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

import WhyPeppyGold from "@/components/WhyPeppyGold";
import GoldenSteps from "@/components/GoldenSteps";

import AppDownloadCTA from "@/components/AppDownloadCTA";

import Certifications from "@/components/Certifications";

import UserBenefits from "@/components/UserBenefits";

import Testimonials from "@/components/Testimonials";

import TrustedPartners from "@/components/TrustedPartners";
import Leadership from "@/components/Leadership";
import BusinessConsultingPartners from "@/components/BusinessConsultingPartners";












import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      



      {/* Why Peppy Gold Section */}
      <WhyPeppyGold />
      <GoldenSteps />
      <Certifications />
      <UserBenefits />
      <Testimonials />
      <TrustedPartners />
      <Leadership/>
      <BusinessConsultingPartners/>
      <AppDownloadCTA />

      <Footer />
    </>
  );
}
