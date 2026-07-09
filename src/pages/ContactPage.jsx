import ContactSection from '../components/sections/ContactSection';
import PlacementSection from '../components/sections/PlacementSection';
import useSeo from '@/hooks/useSeo';
import { SEO } from '@/config/seo';

export default function ContactPage() {
  useSeo(SEO.contact);
  return (
    <div className="pt-16">
      <ContactSection />
      <PlacementSection />
    </div>
  );
}
