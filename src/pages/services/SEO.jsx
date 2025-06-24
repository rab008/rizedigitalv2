import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

/**
 * SEO service page component
 * Showcases Search Engine Optimization services offered by Rize Digital
 */
const SEO = () => {
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

  // SEO Process data
  const seoProcess = [
    {
      title: "Deep Dive Audit & Competitive Intelligence",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>',
      description: "Thorough analysis of your current digital footprint, technical health, content gaps, backlink profile, and local visibility across all target service areas. Intensive competitor analysis to identify their strengths, weaknesses, and content strategies."
    },
    {
      title: "Strategic Blueprint: Architecture & Knowledge Mapping",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>',
      description: "Developing a custom SEO roadmap aligned with your business goals. Architecting the optimal site structure (standard, multi-site, dynamic pages) for your specific geographic reach and service complexity, enabling scalable growth. Knowledge Base & Content Mapping: Identifying the universe of questions, topics, and search intents relevant to your customers."
    },
    {
      title: "Technical Foundation & On-Page Excellence",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>',
      description: "Implementing flawless technical SEO: Site speed (Core Web Vitals), mobile-first indexing, schema markup, crawlability, indexability. Meticulous on-page optimization: Title tags, meta descriptions, headers, internal linking, image optimization – all aligned with target keywords and user intent."
    },
    {
      title: "Authoritative Content & Knowledge Base Development",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>',
      description: "Leveraging Natural Language Processing (NLP) insights to understand the nuances of user queries and search intent. Systematically creating high-quality, expert-driven content (service pages, location pages, blog posts, FAQs) that addresses the mapped knowledge gaps. Building a Scalable Knowledge Base: Developing content specifically designed to answer the long tail of user questions, including hyper-local variations."
    },
    {
      title: "Local & Regional SEO Execution",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>',
      description: "Optimizing and managing Google Business Profiles for maximum local pack visibility. Building consistent, high-quality local citations. Implementing robust review generation and management strategies. Deploying and optimizing locally targeted content and pages, powered by the knowledge base and chosen site architecture."
    },
    {
      title: "Authority & Trust Signal Amplification",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>',
      description: "Acquiring high-quality, relevant backlinks from authoritative sources. Digital PR outreach and relationship building. Leveraging social proof and customer testimonials effectively."
    },
    {
      title: "Performance Analytics & Iterative Optimization",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>',
      description: "Continuous monitoring of rankings, traffic, engagement metrics, and conversions across all target areas and content types. Adapting strategies based on performance data, algorithm updates, and evolving market dynamics. Transparent, detailed reporting focused on demonstrating ROI and market share growth."
    }
  ];

  // Benefits data
  const benefits = [
    {
      title: "Total Market Visibility",
      description: "Achieve top rankings not just for primary keywords, but for the vast spectrum of user queries across your entire service area.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>'
    },
    {
      title: "Unmatched Authority & Trust",
      description: "Become the go-to resource by comprehensively answering customer questions, building unparalleled credibility.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>'
    },
    {
      title: "Rapid Regional Expansion",
      description: "Leverage scalable site architectures and dynamic content strategies for significantly faster rollout and ranking across multiple locations.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>'
    },
    {
      title: "Capture High-Intent, Long-Tail Traffic",
      description: "Attract highly qualified leads searching for specific answers (like localized pricing or process questions) that competitors miss.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>'
    },
    {
      title: "Sustainable Lead Generation",
      description: "Build lasting digital assets that consistently drive qualified organic traffic and leads.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>'
    },
    {
      title: "Exclusive Competitive Advantage",
      description: "Our unique combination of strategies and partnership model locks out competitors from replicating your success with us.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>'
    },
    {
      title: "Measurable ROI",
      description: "Data-driven approach focused on tracking the leads, sales, and market share gained through SEO.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>'
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
    "And many other service-based industries"
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
              <span className="block">Search Engine Optimization</span>
              <span className="block text-accent-orange mt-2">Achieve Total Market Dominance</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
              Beyond Rankings: Becoming the Definitive Authority in Your Service Area
            </p>
            
            <div className="mt-10">
              <Link to="/contact" className="btn btn-primary text-center px-8 py-3 text-lg">
                Claim Your Market Dominance Consultation
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
                In today's competitive digital landscape, simply ranking isn't enough. True market leaders own the conversation. Rize Digital provides advanced SEO services engineered not just for visibility, but for establishing your business as the undisputed authority across your entire service area.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                We combine foundational SEO excellence with sophisticated architectural strategies (like multi-site setups and dynamic pages) and the power of research-driven content to connect you with customers at every stage of their journey. This approach is especially crucial for contractors and home service businesses needing localized trust and expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Philosophy Section */}
      <section ref={addToRefs} className="py-16 bg-gray-50 opacity-0 transition-opacity duration-1000">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="heading-2 text-dark-blue mb-4">Our SEO Philosophy</h2>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              Our core belief is that sustainable SEO success comes from becoming the most helpful, comprehensive, and authoritative resource for potential customers. This means mastering technical SEO, building genuine authority, and proactively answering every conceivable question your audience might have, often before they even know to ask it.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden p-8 border border-gray-100">
              <h3 className="text-2xl font-semibold text-dark-blue mb-6">We move beyond generic tactics. We build lasting digital assets and deploy cutting-edge strategies, including:</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4 text-navy-blue flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-dark-blue mb-2">Scalable Site Architectures</h4>
                    <p className="text-gray-600">Designing multi-site or dynamically generated structures for rapid, targeted expansion across numerous locations.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4 text-navy-blue flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-dark-blue mb-2">Comprehensive Knowledge Base Creation</h4>
                    <p className="text-gray-600">Utilizing Natural Language Processing (NLP) principles to build an exhaustive information hub that directly addresses user search intent, from general queries to hyper-local, specific questions (e.g., "How much does tree removal cost in Austin TX?").</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <p className="text-navy-blue font-medium">
                  Our exclusive partnership model ensures these powerful, combined strategies are laser-focused on cementing your market leadership, unavailable to your direct competitors in the area.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Process Section */}
      <section ref={addToRefs} className="py-16 bg-white opacity-0 transition-opacity duration-1000">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="heading-2 text-dark-blue mb-4">Our SEO Process</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              A systematic approach to establishing your digital authority:
            </p>
          </div>
          
          <div className="space-y-8 max-w-5xl mx-auto">
            {seoProcess.map((process, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-xl shadow-md overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start">
                    <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center mb-6 md:mb-0 md:mr-6 text-navy-blue flex-shrink-0">
                      <div dangerouslySetInnerHTML={{ __html: process.icon }} />
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-semibold text-dark-blue mb-4">{process.title}</h3>
                      <p className="text-gray-700">{process.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={addToRefs} className="py-16 bg-gray-50 opacity-0 transition-opacity duration-1000">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="heading-2 text-dark-blue mb-4">Benefits of Rize Digital's Advanced SEO</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-md p-6 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
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
      <section ref={addToRefs} className="py-16 bg-white opacity-0 transition-opacity duration-1000">
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
                    Our advanced SEO strategies deliver exceptional results for:
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
      <section ref={addToRefs} className="py-16 bg-gray-50 opacity-0 transition-opacity duration-1000">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-2 text-dark-blue mb-6">Ready to Own Your Market Online?</h2>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Stop competing, start dominating. Partner with Rize Digital and implement an advanced SEO strategy that combines technical mastery, scalable architecture, and a comprehensive, AI-informed knowledge base. Become the definitive answer for customers across your entire service area.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn btn-primary text-center px-8 py-3 text-lg">
                Claim Your Market Dominance Consultation
              </Link>
              <Link to="/case-study" className="btn btn-outline text-center px-8 py-3 text-lg">
                Explore Our SEO Success Stories
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SEO;
