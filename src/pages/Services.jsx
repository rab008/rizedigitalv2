import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
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
      title: "SEO",
      description: "Improve your search engine rankings and drive organic traffic with our data-driven SEO strategies tailored to your business goals.",
      icon: ` <img 
                  src="/rizedigitalv2/images/seo_optimization_icon.jpg" 
                  alt="team collaboration" 
                  className="rounded-lg"
                />`,
      link: "/services/seo"
    },
    {
      title: "Google Ads",
      description: "Expert Google Ads management to drive qualified traffic and increase conversions. We optimize your campaigns for maximum performance.",
      icon: ` <img 
                  src="/rizedigitalv2/images/lead_generation_icon.jpg" 
                  alt="team collaboration" 
                  className="rounded-lg"
                />`,
      link: "/services/google-ads"
    },
    {
      title: "Lead Generation",
      description: "Deliver a predictable stream of high-quality prospects ready to book, buy, or call. We combine multi-channel traffic, conversion-optimized landing pages, and disciplined follow-up to keep your pipeline full.",
      icon: ` <img 
                  src="/rizedigitalv2/images/results_driven_icon.jpg" 
                  alt="team collaboration" 
                  className="rounded-lg"
                />`,
      link: "/services/lead-generation"
    },
    {
      title: "AI & Automations",
      description: "Leverage AI and automation to supercharge your marketing. Our experts craft strategies that drive efficiency, engagement, and growth. Stay ahead in the digital age with cutting-edge solutions tailored to your business needs.",
      icon: ` <img 
                  src="/rizedigitalv2/images/ai_automations_icon.jpg" 
                  alt="team collaboration" 
                  className="rounded-lg"
                />`,
      link: "/services/automations"
    },
    {
      title: "PPC Advertising",
      description: "Targeted pay-per-click campaigns that maximize your ROI. We create, manage, and optimize ads that reach your ideal customers.",
      icon: ` <img 
                  src="/rizedigitalv2/images/exclusive_partnership_icon.jpg" 
                  alt="team collaboration" 
                  className="rounded-lg"
                />`,
      link: "/services/ppc"
    },
    {
      title: "Website Development",
      description: "Custom, responsive websites designed to convert visitors into customers. We focus on user experience, performance, and SEO-friendly code.",
      icon: ` <img 
                  src="/rizedigitalv2/images/wordpress_development_icon.jpg" 
                  alt="team collaboration" 
                  className="rounded-lg"
                />`,
      link: "/services/web-development"
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      quote: "Rize Digital transformed our online presence completely. Their strategic approach to digital marketing has resulted in a 200% increase in qualified leads within just 3 months.",
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "TechSolutions Inc.",
      image: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      quote: "The website Rize Digital built for us not only looks fantastic but also converts visitors at an impressive rate. Their attention to detail and focus on user experience is unmatched.",
      name: "Michael Chen",
      position: "CEO",
      company: "Innovate Labs",
      image: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      quote: "Working with Rize Digital on our SEO strategy has been a game-changer. We're now ranking on the first page for all our key terms, and our organic traffic has increased by 150%.",
      name: "Emily Rodriguez",
      position: "E-commerce Manager",
      company: "StyleHouse",
      image: "https://randomuser.me/api/portraits/women/3.jpg"
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

       {/* Services Section */}
      <section ref={addToRefs} className="py-16 bg-gray-50 opacity-0 transition-opacity duration-1000">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-dark-blue mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
             Our Full Stack Marketing Solutions can supercharge your business. We know exactly how to save you time and money. 
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
              />
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
