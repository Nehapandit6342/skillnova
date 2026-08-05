import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";

import HeroSection from "../components/HeroSection";
import FeaturePreviewSection from "../components/FeaturePreviewSection";
import TrustedSection from "../components/TrustedSection";
import WhySkillNovaSection from "../components/WhySkillNovaSection";
import HowItWorksSection from "../components/HowItWorksSection";
import AIResumeSection from "../components/AIResumeSection";
import SkillGapSection from "../components/SkillGapSection";
import CareerRoadmapSection from "../components/CareerRoadmapSection";
import InternshipRecommendationSection from "../components/InternshipRecommendationSection";

import FeaturedCompaniesSection from "../components/FeaturedCompaniesSection";
import LatestInternshipsSection from "../components/LatestInternshipsSection";

import CareerDomainsSection from "../components/CareerDomainsSection";
import StudentJourneySection from "../components/StudentJourneySection";

import StatisticsSection from "../components/StatisticsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FAQSection from "../components/FAQSection";
import CTASection from "../components/CTASection";


export default function HomePage() {

  return (
    <>

      <Navbar />


      {/* Hero */}
      <HeroSection />


      {/* Features */}
      <FeaturePreviewSection />


      {/* Trusted Companies */}
      <TrustedSection />


      {/* Statistics (Real Data) */}
      <StatisticsSection />


      {/* Featured Companies (Real Data) */}
      <FeaturedCompaniesSection />


      {/* Latest Internships (Real Data) */}
      <LatestInternshipsSection />


      {/* Why SkillNova */}
      <WhySkillNovaSection />


      {/* Process */}
      <HowItWorksSection />


      {/* AI Resume */}
      <AIResumeSection />


      {/* Skill Gap */}
      <SkillGapSection />


      {/* Career Roadmap */}
      <CareerRoadmapSection />


      {/* Internship Recommendation */}
      <InternshipRecommendationSection />


      {/* Student Journey */}
      <StudentJourneySection />


      {/* Career Domains */}
      <CareerDomainsSection />


      {/* Testimonials */}
      <TestimonialsSection />


      {/* FAQ */}
      <FAQSection />


      {/* CTA */}
      <CTASection />


      <Footer />

    </>
  );
}