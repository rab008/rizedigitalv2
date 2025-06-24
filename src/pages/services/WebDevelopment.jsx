import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

/**
 * Web Development service page component
 * Showcases Website Development services offered by Rize Digital
 */
const WebDevelopment = () => {
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

  // WordPress Advantages data
  const wordpressAdvantages = [
    {
      title: "Elite Builders",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>',
      description: "We utilize industry-leading builders like Elementor Pro and Oxygen Builder, renowned for their power and flexibility."
    },
    {
      title: "ACF Integration",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>',
      description: "We expertly integrate Advanced Custom Fields (ACF), allowing for truly custom data structures and content management without limitations."
    },
    {
      title: "Theme-Free Architecture",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>',
      description: "Crucially, we typically build without relying on pre-made, bloated theme templates. This \"theme-less\" or custom theme approach results in incredibly lean code, minimal bloat, and significantly faster loading times."
    }
  ];

  // GoHighLevel Features data
  const ghlFeatures = [
    {
      title: "Integrated Solution",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>',
      description: "GHL combines website building with essential business tools in one place."
    },
    {
      title: "Core Features",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>',
      description: "Simple website creation, high-converting landing pages & sales funnels, integrated forms & surveys, built-in CRM, email & SMS marketing automation, appointment scheduling, and reliable hosting."
    },
    {
      title: "Key Benefits",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>',
      description: "Affordability, ease of use, rapid deployment, and a centralized hub for managing core marketing and sales activities."
    }
  ];

  // Development Process data
  const developmentProcess = [
    {
      title: "Discovery & Strategy",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>',
      description: "Understanding your business goals, target audience, competitive landscape, and determining the best platform (WordPress or GHL) for your specific needs and budget."
    },
    {
      title: "Conversion-Focused Design",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>',
      description: "Crafting layouts (custom for WP, template-based or customized for GHL) focused on user experience, clear calls-to-action, and lead generation. Prioritizing intuitive navigation and mobile-first responsiveness."
    },
    {
      title: "Technical Build & Optimization",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>',
      description: "WordPress Focus: Leveraging Elementor/Oxygen + ACF for clean, efficient code. Focusing on speed optimization (Core Web Vitals), security, and technical SEO foundations. GoHighLevel Focus: Utilizing the GHL builder to create effective pages and funnels, ensuring proper setup of forms, tracking, and integrations within the platform."
    },
    {
      title: "Content Integration",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>',
      description: "Structuring and implementing your service descriptions, value propositions, and SEO-optimized content effectively within the chosen platform."
    },
    {
      title: "Lead Generation Setup",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>',
      description: "Integrating contact forms, click-to-call, quote requests, or scheduling tools (custom/plugin-based for WP, built-in for GHL)."
    },
    {
      title: "Testing, Launch & Handoff",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>',
      description: "Rigorous testing across devices and browsers, followed by a smooth launch and clear instructions or training for managing your new site."
    }
  ];

  // Benefits data
  const benefits = [
    {
      title: "Platform Choice",
      description: "We guide you to the right solution – high-performance WordPress or the efficient GoHighLevel platform – based on your unique needs.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>'
    },
    {
      title: "Lightning-Fast Performance",
      description: "The Rize Advantage delivers websites optimized for speed, user experience, and SEO rankings.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>'
    },
    {
      title: "Unmatched Scalability",
      description: "Our lean WordPress builds grow with you, handling vast amounts of content without slowing down.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>'
    },
    {
      title: "All-in-One Efficiency",
      description: "Simplify your tech stack with GHL's integrated website, funnel, and marketing tools.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>'
    },
    {
      title: "SEO-Ready Foundation",
      description: "Both platforms are built with SEO best practices in mind, giving you a head start in search results.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>'
    },
    {
      title: "Lead Generation Focused",
      description: "Websites designed and equipped with the tools needed to convert visitors into valuable leads.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>'
    },
    {
      title: "Exclusive Partnership",
      description: "We dedicate our expertise to your success, working with only one business per industry per service area.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>'
    }
  ];

  // Industries data
  const industries = [
    "Tree services",
    "Fencing contractors",
    "Excavation companies",
    "Demolition contractors",
    "Dumpster rental businesses",
    "Home improvement contractors",
    "Agricultural services",
    "And many other home service industries"
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-dark-blue via-navy-blue to-dark-blue text-white py-20 md:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-accent-orange rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-400 rounded-full opacity-10 blur-2xl"></div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6">
              <span className="block">High-Performance Websites</span>
              <span className="block text-accent-orange mt-2">Built for Speed, Scalability & Results</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
              WordPress Powerhouses & GoHighLevel All-in-One Solutions
            </p>
            
            <div className="mt-10">
              <Link to="/contact" className="btn btn-primary text-center px-8 py-3 text-lg">
                Schedule Your Website Consultation
              </Link>
            </div>
            
            {/* Scroll indicator */}
            <div className="hidden md:block mx-auto mt-16 w-6 h-10 border-2 border-white rounded-full relative">
              <span className="absolute top-1 left-1/2 w-1 h-2 bg-white rounded-full transform -translate-x-1/2 animate-bounce"></span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section ref={addToRefs} className="py-16 bg-white opacity-0 transition-opacity duration-1000">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
              <p className="text-lg text-gray-700 leading-relaxed">
                Your website is your digital command center – it needs to be fast, reliable, generate leads, and scale with your ambition. At Rize Digital, we build performance-focused websites tailored to the unique needs of contractors and home service businesses nationwide.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                We offer two powerful pathways: cutting-edge WordPress sites built for ultimate flexibility and speed, and streamlined all-in-one solutions on the GoHighLevel platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WordPress Advantage Section */}
      <section ref={addToRefs} className="py-16 bg-gray-50 opacity-0 transition-opacity duration-1000">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="heading-2 text-dark-blue mb-4">The Rize Advantage: Lightning-Fast, Infinitely Scalable WordPress Websites</h2>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              For businesses demanding peak performance, customizability, and limitless growth potential, we build exceptional WordPress websites leveraging a distinct advantage:
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {wordpressAdvantages.map((advantage, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl shadow-md overflow-hidden h-full"
                >
                  <div className="p-8 flex flex-col h-full">
                    <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-navy-blue mx-auto">
                      <div dangerouslySetInnerHTML={{ __html: advantage.icon }} />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-dark-blue mb-4 text-center">{advantage.title}</h3>
                    <p className="text-gray-700 text-center">{advantage.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-gradient-to-br from-navy-blue to-dark-blue text-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">The Outcome</h3>
              <p className="text-gray-200 mb-6">
                Blazing-fast websites optimized for Core Web Vitals, enhanced SEO performance, unparalleled design flexibility, and the ability to effortlessly scale from 10 pages to 10,000 without compromising speed or stability. This powerful, efficient, and scalable foundation is the Rize Advantage.
              </p>
              <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                <p className="text-white font-medium">
                  This approach is ideal for: Established businesses, companies needing complex functionality, those prioritizing long-term SEO and performance, and clients requiring highly customized designs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GoHighLevel Section */}
      <section ref={addToRefs} className="py-16 bg-white opacity-0 transition-opacity duration-1000">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="heading-2 text-dark-blue mb-4">GoHighLevel: Your Affordable All-in-One Business Starter Platform</h2>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              For new businesses, entrepreneurs prioritizing simplicity, or those seeking an integrated marketing and sales toolkit, we offer website solutions built on the robust GoHighLevel (GHL) platform.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {ghlFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 rounded-xl shadow-md overflow-hidden h-full"
                >
                  <div className="p-8 flex flex-col h-full">
                    <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-navy-blue mx-auto">
                      <div dangerouslySetInnerHTML={{ __html: feature.icon }} />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-dark-blue mb-4 text-center">{feature.title}</h3>
                    <p className="text-gray-700 text-center flex-grow">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-gray-50 p-8 rounded-xl shadow-md">
              <p className="text-gray-700 font-medium text-center">
                This approach is ideal for: Startups, small businesses on a budget, clients needing a simple online presence quickly, and those who value an integrated, all-in-one marketing system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section ref={addToRefs} className="py-16 bg-gray-50 opacity-0 transition-opacity duration-1000">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="heading-2 text-dark-blue mb-4">Our Website Development Process</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              While the specific tools differ, our strategic process ensures results:
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {developmentProcess.map((process, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl shadow-md overflow-hidden h-full"
                >
                  <div className="p-8 h-full flex flex-col">
                    <div className="flex items-start mb-4">
                      <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center mr-4 text-navy-blue flex-shrink-0">
                        <div dangerouslySetInnerHTML={{ __html: process.icon }} />
                      </div>
                      
                      <h3 className="text-xl font-semibold text-dark-blue pt-3">{process.title}</h3>
                    </div>
                    
                    <div className="pl-20">
                      <p className="text-gray-700">{process.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={addToRefs} className="py-16 bg-white opacity-0 transition-opacity duration-1000">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="heading-2 text-dark-blue mb-4">Key Benefits of Choosing Rize Digital</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-xl shadow-md p-6 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-navy-blue">
                  <div dangerouslySetInnerHTML={{ __html: benefit.icon }} />
                </div>
                
                <h3 className="text-xl font-semibold text-dark-blue mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section ref={addToRefs} className="py-16 bg-gray-50 opacity-0 transition-opacity duration-1000">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-navy-blue to-dark-blue rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative p-12">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent-orange rounded-full opacity-10 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 rounded-full opacity-10 blur-3xl"></div>
                
                <div className="relative z-10">
                  <h2 className="heading-2 text-white mb-8 text-center">Industries We Serve</h2>
                  <p className="text-gray-200 text-lg mb-10 text-center">
                    Our website development services are particularly effective for:
                  </p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {industries.map((industry, index) => (
                      <div 
                        key={index} 
                        className="bg-white bg-opacity-10 rounded-lg p-4 text-center transform transition-all duration-300 hover:-translate-y-1"
                      >
                        <span className="text-white font-medium capitalize">{industry}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section ref={addToRefs} className="py-16 bg-white opacity-0 transition-opacity duration-1000">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-2 text-dark-blue mb-6">Ready for a Website That Performs?</h2>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Whether you need the unparalleled power and scalability of a Rize Advantage WordPress site or the streamlined efficiency of GoHighLevel, we have the solution. Let's determine the perfect platform to fuel your business growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn btn-primary text-center px-8 py-3 text-lg">
                Schedule Your Free Consultation
              </Link>
              <Link to="/case-study" className="btn btn-outline text-center px-8 py-3 text-lg">
                Explore Our Web Development Success Stories
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebDevelopment;
