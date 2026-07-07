import { Search } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';

export default function VerifyCertificatePage() {
  return (
    <div className="pt-24 pb-20 min-h-[70vh] bg-background">
      <div className="container px-4 md:px-6 max-w-3xl text-center">
        <SectionHeader 
          title={<>Verify <span className="gradient-text">Certificate</span></>} 
          subtitle="Enter your certificate registration number or scan the QR code on your certificate to verify its authenticity."
        />
        
        <div className="bg-card border border-border p-8 rounded-3xl shadow-sm mt-8 max-w-lg mx-auto">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2 text-left">
              <label className="text-sm font-medium">Registration Number</label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                <input 
                  type="text" 
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary focus:outline-none" 
                  placeholder="e.g. SCA/2026/001" 
                />
              </div>
            </div>
            <button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3.5 rounded-xl font-bold transition-colors touch-manipulation">
              Verify Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
