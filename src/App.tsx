import HeroSection from './components/HeroSection';
import ReviewSection from './components/ReviewSection';
import CheckPointSection from './components/CheckPointSection';
import BundleSection from './components/BundleSection';
import FlavorSection from './components/FlavorSection';
import TrustSection from './components/TrustSection';
import EatingGuideSection from './components/EatingGuideSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans selection:bg-orange-500 selection:text-white">
      <div className="max-w-2xl mx-auto bg-white shadow-2xl overflow-hidden">
        <HeroSection />
        <ReviewSection />
        <CheckPointSection />
        <BundleSection />
        <FlavorSection />
        <TrustSection />
        <EatingGuideSection />
        <Footer />
      </div>
    </div>
  );
}
