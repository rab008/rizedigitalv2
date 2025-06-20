import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

/**
 * Header component for the Rize Digital website
 * Contains the navigation menu and logo
 * Enhanced with sticky scroll functionality
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);

  // Handle scroll event to add shadow and background opacity
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-dark-blue shadow-lg py-2' 
        : 'bg-dark-blue bg-opacity-95 py-4'
    }`}>
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src="/rizedigitalv2/images/Rize-Digital-horizontal-logo.png" 
            alt="Rize Digital Logo" 
            className="h-10"
          />
          <span className="hidden ml-2 text-xl font-bold">Rize Digital</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-accent-orange transition-colors">Home</Link>
          <Link to="/about" className="text-white hover:text-accent-orange transition-colors">About Us</Link>
          {/* Services Dropdown */}
          <div className="relative group">
            <Link to="/services" className="text-white hover:text-accent-orange transition-colors flex items-center">
              Services
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <Link to="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">All Services</Link>
              <Link to="/services/seo" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">SEO</Link>
              <Link to="/services/google-ads" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Google Ads</Link>
              <Link to="/services/lead-generation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Lead Generation</Link>
              <Link to="/services/automations" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Automations</Link>
              <Link to="/services/ppc" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">PPC Advertising</Link>
              <Link to="/services/web-development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Website Development</Link>
            </div>
          </div>
          
          {/* Case Study Dropdown */}
          <div className="relative group">
            <Link to="/case-study" className="text-white hover:text-accent-orange transition-colors flex items-center">
              Case Studies
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <Link to="/case-study" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">All Case Studies</Link>
              <Link to="/case-study/king-land-clearing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">King Land Clearing</Link>
              <Link to="/case-study/wards-excavation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Ward's Excavation</Link>
              <Link to="/case-study/bomann-fencing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Bomann Fencing</Link>
            </div>
          </div>
          
          <Link to="/contact" className="text-white hover:text-accent-orange transition-colors">Contact</Link>
        </nav>

        {/* Contact Info */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="tel:+1234567890" className="flex items-center text-sm text-white hover:text-accent-orange">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            (123) 456-7890
          </a>
          <Link to="/contact" className="btn btn-primary text-sm">Get Quote</Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-dark-blue z-50 md:hidden shadow-lg">
            <div className="container py-4 flex flex-col space-y-4">
              <Link to="/" className="text-white hover:text-accent-orange transition-colors">Home</Link>
              <Link to="/about" className="text-white hover:text-accent-orange transition-colors">About Us</Link>
              {/* Mobile Services Dropdown */}
              <div className="space-y-2">
                <div className="flex items-center justify-between" onClick={() => setMobileSubmenuOpen(!mobileSubmenuOpen)}>
                  <Link to="/services" className="text-white hover:text-accent-orange transition-colors">Services</Link>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 text-white transition-transform ${mobileSubmenuOpen ? 'transform rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                
                {mobileSubmenuOpen && (
                  <div className="pl-4 space-y-2 border-l border-gray-700">
                    <Link to="/services" className="block text-white hover:text-accent-orange transition-colors">All Services</Link>
                    <Link to="/services/seo" className="block text-white hover:text-accent-orange transition-colors">SEO</Link>
                    <Link to="/services/google-ads" className="block text-white hover:text-accent-orange transition-colors">Google Ads</Link>
                    <Link to="/services/lead-generation" className="block text-white hover:text-accent-orange transition-colors">Lead Generation</Link>
                    <Link to="/services/automations" className="block text-white hover:text-accent-orange transition-colors">Automations</Link>
                    <Link to="/services/ppc" className="block text-white hover:text-accent-orange transition-colors">PPC Advertising</Link>
                    <Link to="/services/web-development" className="block text-white hover:text-accent-orange transition-colors">Website Development</Link>
                  </div>
                )}
              </div>
              
              {/* Mobile Case Study Dropdown */}
              <div className="space-y-2">
                <div className="flex items-center justify-between" onClick={() => setMobileSubmenuOpen(!mobileSubmenuOpen)}>
                  <Link to="/case-study" className="text-white hover:text-accent-orange transition-colors">Case Studies</Link>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 text-white transition-transform ${mobileSubmenuOpen ? 'transform rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                
                {mobileSubmenuOpen && (
                  <div className="pl-4 space-y-2 border-l border-gray-700">
                    <Link to="/case-study/king-land-clearing" className="block text-white hover:text-accent-orange transition-colors">King Land Clearing</Link>
                    <Link to="/case-study/wards-excavation" className="block text-white hover:text-accent-orange transition-colors">Ward's Excavation</Link>
                    <Link to="/case-study/bomann-fencing" className="block text-white hover:text-accent-orange transition-colors">Bomann Fencing</Link>
                  </div>
                )}
              </div>
              
              <Link to="/contact" className="text-white hover:text-accent-orange transition-colors">Contact</Link>
              <a href="tel:+1234567890" className="flex items-center text-white hover:text-accent-orange">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (123) 456-7890
              </a>
              <a href="#" className="btn btn-primary inline-block text-center">Get Quote</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
