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
          <Link to="/services" className="text-white hover:text-accent-orange transition-colors">Services</Link>
          <Link to="/contact" className="text-white hover:text-accent-orange transition-colors">Contact</Link>
        </nav>

        {/* Contact Info */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="tel:+1234567890" className="flex items-center text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            (123) 456-7890
          </a>
          <a href="#" className="btn btn-primary text-sm">Get Quote</a>
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
              <Link to="/services" className="text-white hover:text-accent-orange transition-colors">Services</Link>
              <Link to="/contact" className="text-white hover:text-accent-orange transition-colors">Contact</Link>
              <a href="tel:+1234567890" className="flex items-center">
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
