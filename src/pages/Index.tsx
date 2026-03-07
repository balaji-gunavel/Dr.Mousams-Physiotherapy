import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import TrustStrip from "@/components/home/TrustStrip";
import ConditionsSection from "@/components/home/ConditionsSection";
import TreatmentApproach from "@/components/home/TreatmentApproach";
import DoctorIntro from "@/components/home/DoctorIntro";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FacebookSection from "@/components/home/FacebookSection";
import FinalCTA from "@/components/home/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <TrustStrip />
        <ConditionsSection />
        <TreatmentApproach />
        <DoctorIntro />
        <TestimonialsSection />
        <FacebookSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
