import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-[#0043CE]">SecureSync Pro</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#products" className="text-gray-700 hover:text-[#0043CE] px-3 py-2 text-sm font-medium transition-colors">
                Products
              </a>
              <a href="#solutions" className="text-gray-700 hover:text-[#0043CE] px-3 py-2 text-sm font-medium transition-colors">
                Solutions
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-[#0043CE] px-3 py-2 text-sm font-medium transition-colors">
                Pricing
              </a>
              <a href="#resources" className="text-gray-700 hover:text-[#0043CE] px-3 py-2 text-sm font-medium transition-colors">
                Resources
              </a>
            </div>
          </div>

          {/* Desktop CTAs */}
          {/* <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-700 hover:text-[#0043CE]">
              Sign In
            </Button>
            <Button className="bg-[#0043CE] hover:bg-[#0078FF] text-white">
              Contact Sales
            </Button>
          </div> */}

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[#0043CE] p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#products" className="text-gray-700 hover:text-[#0043CE] block px-3 py-2 text-base font-medium">
                Products
              </a>
              <a href="#solutions" className="text-gray-700 hover:text-[#0043CE] block px-3 py-2 text-base font-medium">
                Solutions
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-[#0043CE] block px-3 py-2 text-base font-medium">
                Pricing
              </a>
              <a href="#resources" className="text-gray-700 hover:text-[#0043CE] block px-3 py-2 text-base font-medium">
                Resources
              </a>
              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="flex flex-col space-y-3 px-3">
                  {/* <Button variant="ghost" className="justify-start text-gray-700 hover:text-[#0043CE]">
                    Sign In
                  </Button>
                  <Button className="bg-[#0043CE] hover:bg-[#0078FF] text-white">
                    Contact Sales
                  </Button> */}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;