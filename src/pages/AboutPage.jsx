import AboutSection from '../components/sections/AboutSection';
import TrustSection from '../components/sections/TrustSection';
import ProcessSection from '../components/sections/ProcessSection';
import WhyChooseUsSection from '../components/sections/WhyChooseUsSection';
import useSeo from '@/hooks/useSeo';
import { SEO } from '@/config/seo';

export default function AboutPage() {
  useSeo(SEO.about);
  return (
    <div className="pt-16">
      <AboutSection />
      <TrustSection />
      <ProcessSection />
      <WhyChooseUsSection />
    </div>
  );
}
