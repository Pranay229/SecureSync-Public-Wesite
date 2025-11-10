import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeatureHighlights from '@/components/FeatureHighlights';
import ProductSuite from '@/components/ProductSuite';
import SecuritySection from '@/components/SecuritySection';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <FeatureHighlights />
      <ProductSuite />
      <SecuritySection />
      
      {/* Final CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Elevate Your Enterprise Security?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of organizations that trust SecureSync Pro to protect their most sensitive communications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-[#0043CE] hover:bg-[#0078FF] text-white px-8 py-4 text-lg font-semibold group"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="!bg-transparent !hover:bg-transparent border-[#0043CE] text-[#0043CE] hover:text-[#0078FF] px-8 py-4 text-lg font-semibold"
            >
              Contact Enterprise Sales
            </Button>
          </div>
          
          {/* Trust Indicators
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">Trusted by industry leaders</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-2xl font-bold text-gray-400">ENTERPRISE A</div>
              <div className="text-2xl font-bold text-gray-400">COMPANY B</div>
              <div className="text-2xl font-bold text-gray-400">CORP C</div>
              <div className="text-2xl font-bold text-gray-400">ORG D</div>
            </div>
          </div> */}
        </div>
      </section>

      <Footer />
    </div>
  );
}