import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';
import { useEffect, useRef } from 'react';

/**
 * Services page component for Rize Digital website
 * Displays all available services with descriptions and links to individual service pages
 * Enhanced with modern UI/UX design elements
 */
const Services = () => {
  // Refs for scroll animations
  const sectionRefs = useRef([]);
  
  // Simple scroll animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);
  
  // Add ref to section for animation
  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  // Services data from the provided document
  const services = [
    {
      title: "Lead Generation",
      description: "Deliver a predictable stream of high-quality prospects ready to book, buy, or call. We combine multi-channel traffic, conversion-optimized landing pages, and disciplined follow-up to keep your pipeline full.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>',
      link: "/services/lead-generation"
    },
    {
      title: "Search Engine Optimization (SEO)",
      description: "From technical fixes to content that answers every customer question, our SEO program positions you as the undisputed authority in every service area you target.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>',
      link: "/services/seo"
    },
    {
      title: "WordPress Website Development",
      description: "Lightning-fast, fully custom WordPress builds—no bloated themes, no compromises. Designed for Core Web Vitals, conversion, and limitless scalability.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>',
      link: "/services/website-development"
    },
    {
      title: "Google Ads Management",
      description: "Immediate visibility meets disciplined bidding and relentless optimization. Whether you need pure pay-per-click performance or our \"Jump-Start & Redeploy\" growth model, we turn ad spend into profit.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" /></svg>',
      link: "/services/google-ads"
    },
    {
      title: "AI-Powered Automations",
      description: "Replace repetitive tasks with intelligent workflows. From 24/7 AI chat and voice bots to automated lead routing and post-job review requests, we help you reclaim time and scale faster.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>',
      link: "/services/automations"
    },
    {
      title: "Email Marketing & List Building",
      description: "Build a clean, segmented list and nurture it with targeted, automated campaigns that convert first-time buyers into lifelong customers.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>',
      link: "/services/email-marketing"
    }
  ];

  return (
    <>
      {/* Hero Section - Enhanced with gradient background and visual elements */}
      <section className="relative overflow-hidden bg-gradient-to-br from-dark-blue via-navy-blue to-dark-blue text-white py-16 md:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-accent-orange rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-400 rounded-full opacity-10 blur-2xl"></div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-8">
              <span className="block">Our Digital Marketing</span>
              <span className="block text-accent-orange mt-2">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
              At Rize Digital, every service is engineered to help you own your market—locally, regionally, or nationwide. We pair deep industry expertise with an exclusive-partnership model: once we work with you, we won't work with your direct competitor.
            </p>
            
            {/* Scroll indicator */}
            <div className="hidden md:block mx-auto mt-12 w-6 h-10 border-2 border-white rounded-full relative">
              <span className="absolute top-1 left-1/2 w-1 h-2 bg-white rounded-full transform -translate-x-1/2 animate-bounce"></span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Enhanced with modern card design */}
      <section ref={addToRefs} className="py-20 bg-gray-50 opacity-0 transition-opacity duration-1000">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-lg text-gray-600 mb-6">
              Explore our core offerings below and see how each one drives measurable growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-100 h-full flex flex-col"
              >
                <div className="p-8">
                  <div className="w-16 h-16 bg-orange-50 rounded-lg flex items-center justify-center mb-6 text-accent-orange">
                    <div dangerouslySetInnerHTML={{ __html: service.icon }} />
                  </div>
                  
                  <h2 className="text-2xl font-semibold text-dark-blue mb-4">{service.title}</h2>
                  <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                  
                  <Link 
                    to={service.link} 
                    className="inline-flex items-center text-navy-blue font-medium hover:text-accent-orange transition-colors"
                  >
                    Learn more
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 ml-2" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M14 5l7 7m0 0l-7 7m7-7H3" 
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced with custom content */}
      <section ref={addToRefs} className="opacity-0 transition-opacity duration-1000">
        <div className="bg-gradient-to-br from-dark-blue to-navy-blue text-white py-16 md:py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="heading-2 mb-6">Ready to Rise Above the Competition?</h2>
              <p className="text-xl text-gray-200 mb-10">
                Let's map out a plan that blends these services into a single growth engine for your business.
              </p>
              
              <Link to="/contact" className="btn btn-primary text-center px-8 py-3 text-lg">
                Get a Free Consultation
              </Link>
              
              {/* Trust indicators */}
              <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Exclusive Partnership</h3>
                  <p className="text-gray-300 text-center">One client per industry, per service area</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Results-Driven</h3>
                  <p className="text-gray-300 text-center">Measurable growth and ROI for your business</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                  <p className="text-gray-300 text-center">Specialists dedicated to your success</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
