import HeroSection from '../components/sections/HeroSection';
import TrustSection from '../components/sections/TrustSection';
import AboutSection from '../components/sections/AboutSection';
import CoursesSection from '../components/sections/CoursesSection';
import WhyChooseUsSection from '../components/sections/WhyChooseUsSection';
import ProcessSection from '../components/sections/ProcessSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import PlacementSection from '../components/sections/PlacementSection';
import FranchiseSection from '../components/sections/FranchiseSection';
import FAQSection from '../components/sections/FAQSection';
import ContactSection from '../components/sections/ContactSection';

export default function LandingPage() {
  return (
    <div className="w-full flex flex-col items-center justify-center overflow-x-hidden">
      <HeroSection />
      <TrustSection />
      <AboutSection />
      <CoursesSection />
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
