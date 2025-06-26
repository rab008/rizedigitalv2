import { Link } from 'react-router-dom';

/**
 * Footer component for the Rize Digital website
 * Contains secondary navigation, contact information, and social media links
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-blue text-white pt-12 pb-6">
      <div className="container">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <img 
                src="/images/Rize-Digital-horizontal-logo.png" 
                alt="Rize Digital Logo" 
                className="h-10"
              />
              <span className="hidden ml-2 text-xl font-bold">Rize Digital</span>
            </Link>
            <p className="text-gray-300 mb-4">
              Elevating brands through innovative digital marketing solutions that drive results.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/RizeDigital_USA" target="_blank" rel='noopener noreferrer' aria-label="X" className="text-gray-300 hover:text-accent-orange transition-colors">
                <svg viewBox="0 0 1200 1227" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="currentColor"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/rize-digital-usa/" target="_blank" rel='noopener noreferrer' aria-label="LinkedIn" className="text-gray-300 hover:text-accent-orange transition-colors">
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"></path>
                  </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-accent-orange transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-accent-orange transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-accent-orange transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="text-gray-300 hover:text-accent-orange transition-colors">Portfolio</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-accent-orange transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-accent-orange transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/seo" className="text-gray-300 hover:text-accent-orange transition-colors">SEO</Link></li>
              <li><Link to="/services/google-ads" className="text-gray-300 hover:text-accent-orange transition-colors">Google Ads</Link></li>
              <li><Link to="/services/lead-generation" className="text-gray-300 hover:text-accent-orange transition-colors">Lead Generation</Link></li>
              <li><Link to="/services/automations" className="text-gray-300 hover:text-accent-orange transition-colors">AI & Automations</Link></li>
              <li><Link to="/services/ppc" className="text-gray-300 hover:text-accent-orange transition-colors">PPC Advertising</Link></li>
              <li><Link to="/services/web-development" className="text-gray-300 hover:text-accent-orange transition-colors">Website Development</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-accent-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300">123 Digital Avenue, Tech City, 12345</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-accent-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-300">(475) 264-4226</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-accent-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-300">Ask@rizedigital.io</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-accent-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-300">Mon-Fri: 9AM - 5PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-6 border-t border-gray-700 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-400 text-sm mb-2 md:mb-0">
            &copy; {currentYear} Rize Digital. All rights reserved.
          </p>
          <div className="flex justify-center md:justify-end space-x-4 text-sm text-gray-400">
            <Link to="/privacy-policy" className="hover:text-accent-orange transition-colors">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-accent-orange transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
