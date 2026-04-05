import { useEffect } from "react";
import { useFadeUp } from "@/hooks/useFadeUp";
import AnnouncementBar from "@/components/zion/AnnouncementBar";
import StickyNav from "@/components/zion/StickyNav";
import HeroSection from "@/components/zion/HeroSection";
import TensionSection from "@/components/zion/TensionSection";
import LifestyleBanner from "@/components/zion/LifestyleBanner";
import RitualSection from "@/components/zion/RitualSection";

import BenefitsHeroSection from "@/components/zion/BenefitsHeroSection";
import ComparisonTable from "@/components/zion/ComparisonTable";
import TestimonialsSection from "@/components/zion/TestimonialsSection";
import UGCTestimonialsGrid from "@/components/zion/UGCTestimonialsGrid";
import HowToUseSection from "@/components/zion/HowToUseSection";
import LifestyleGallery from "@/components/zion/LifestyleGallery";
import PricingSection from "@/components/zion/PricingSection";
import GuaranteeSection from "@/components/zion/GuaranteeSection";
import FAQSection from "@/components/zion/FAQSection";
import MissionSection from "@/components/zion/MissionSection";
import FinalCTA from "@/components/zion/FinalCTA";
import Footer from "@/components/zion/Footer";
import StickyMobileCTA from "@/components/zion/StickyMobileCTA";
import ExitIntentPopup from "@/components/zion/ExitIntentPopup";

const Index = () => {
  useFadeUp();

  useEffect(() => {
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.classList.add("visible");
          });
        },
        { threshold: 0.1 }
      );
      document.querySelectorAll(".fade-up:not(.visible)").forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <AnnouncementBar />
      <StickyNav />
      <HeroSection />
      <TensionSection />
      <LifestyleBanner />
      <RitualSection />
      <BenefitsSection />
      <BenefitsHeroSection />
      <ComparisonTable />
      <TestimonialsSection />
      <UGCTestimonialsGrid />
      <HowToUseSection />
      <LifestyleGallery />
      <PricingSection />
      <GuaranteeSection />
      <FAQSection />
      <MissionSection />
      <FinalCTA />
      <Footer />
      <StickyMobileCTA />
      <ExitIntentPopup />
    </div>
  );
};

export default Index;
