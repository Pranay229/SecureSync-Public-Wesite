import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-[#F5F6FA] via-white to-[#F0F4FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            One Platform for{' '}
            <span className="text-[#0043CE]">Secure Enterprise</span>{' '}
            Collaboration
          </h1>
          
          {/* Supporting Text */}
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience next-generation privacy, AI intelligence, and compliance in every meeting. 
            Built for enterprises that demand both innovation and security.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-[#0043CE] hover:bg-[#0078FF] text-white px-8 py-4 text-lg font-semibold group"
            >
              Get a Demo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="!bg-transparent !hover:bg-transparent border-[#0043CE] text-[#0043CE] hover:text-[#0078FF] px-8 py-4 text-lg font-semibold group"
            >
              <Play className="mr-2 h-5 w-5" />
              Try for Free
            </Button>
          </div>

          {/* Trust Indicators
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>SOC 2 Type II Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>End-to-End Encrypted</span>
            </div>
          </div> */}
        </div>

        {/* Hero Visual */}
        <div className="mt-16 relative">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto border border-gray-200">
            <div className="aspect-video bg-gradient-to-br from-[#0043CE] to-[#0078FF] rounded-xl flex items-center justify-center">
              <div className="text-white text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
                <p className="text-lg font-medium">See SecureSync Pro in Action</p>
              </div>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute -top-4 -left-4 w-20 h-20 bg-[#0078FF]/10 rounded-full blur-xl"></div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#0043CE]/10 rounded-full blur-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;