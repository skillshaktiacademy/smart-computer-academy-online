import HeroSection from '../components/sections/HeroSection';
import BannerSlider from '../components/sections/BannerSlider';
import TrustSection from '../components/sections/TrustSection';
import AboutSection from '../components/sections/AboutSection';
import CoursesSection from '../components/sections/CoursesSection';
import WhyChooseUsSection from '../components/sections/WhyChooseUsSection';
import ProcessSection from '../components/sections/ProcessSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import PlacementSection from '../components/sections/PlacementSection';
import FranchiseCTA from '../components/sections/FranchiseCTA';
import FranchiseSection from '../components/sections/FranchiseSection';
import FAQSection from '../components/sections/FAQSection';
import ContactSection from '../components/sections/ContactSection';
import useSeo from '@/hooks/useSeo';
import { SEO } from '@/config/seo';

export default function LandingPage() {
  useSeo(SEO.home);
  return (
    <div className="w-full flex flex-col items-center justify-center overflow-x-hidden">
      <HeroSection />
      <BannerSlider />
      <TrustSection />
      <AboutSection />
      <CoursesSection />
      <FranchiseCTA />
      <WhyChooseUsSection />
      <ProcessSection />
      <FeaturesSection />
      <PlacementSection />
      <FranchiseSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
}
