import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';
import { useEffect, useRef } from 'react';

/**
 * Case Study page component for Rize Digital website
 * Displays case study library with success stories and results
 * Enhanced with modern UI/UX design elements
 */
const CaseStudy = () => {
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

  // Case study data
  const caseStudies = [
    {
      title: "King Land Clearing",
      challenge: "Low-volume lead flow and rising CPL in a competitive land-clearing market.",
      outcomes: [
        "[% increase] qualified leads",
        "[% drop] cost-per-lead",
        "territory expansion to three counties in 90 days"
      ],
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>',
      link: "/case-study/king-land-clearing"
    },
    {
      title: "Ward's Excavation",
      challenge: "Site traffic stalled; minimal online authority for multi-service excavation.",
      outcomes: [
        "[% lift] organic traffic",
        "[% boost] booked jobs",
        "#1 rankings for 20 high-intent keywords"
      ],
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>',
      link: "/case-study/wards-excavation"
    },
    {
      title: "Bomann Fencing",
      challenge: "Needed hyper-targeted agricultural fencing leads while avoiding residential queries.",
      outcomes: [
        "10× search visibility",
        "[% ROI] on Google Ads",
        "first-page positions across five counties"
      ],
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>',
      link: "/case-study/bomann-fencing"
    }
  ];

  // Why case studies matter data
  const whyCaseStudiesMatter = [
    {
      title: "Verified Metrics",
      description: "pulled straight from GA4, SEMrush, and CRM dashboards.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>'
    },
    {
      title: "Transparent Tactics",
      description: "every lever we pulled is documented so you can replicate or adapt it.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>'
    },
    {
      title: "Exclusive-Partner Model",
      description: "once we help a client dominate a territory, we won't work with direct competitors there.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>'
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
              <span className="block">Case Study</span>
              <span className="block text-accent-orange mt-2">Library</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
              See how we turn local service brands into regional market leaders— with the hard numbers to prove it. Each study walks you through the exact audit findings, strategy, launch, and optimization steps that created the results. Use them as playbooks for your own growth.
            </p>
            
            {/* Scroll indicator */}
            <div className="hidden md:block mx-auto mt-12 w-6 h-10 border-2 border-white rounded-full relative">
              <span className="absolute top-1 left-1/2 w-1 h-2 bg-white rounded-full transform -translate-x-1/2 animate-bounce"></span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Case Studies Matter Section */}
      <section ref={addToRefs} className="py-20 bg-white opacity-0 transition-opacity duration-1000">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 text-dark-blue mb-12 text-center">Why Our Case Studies Matter</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whyCaseStudiesMatter.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="w-16 h-16 bg-orange-50 rounded-lg flex items-center justify-center mb-6 text-accent-orange">
                    <div dangerouslySetInnerHTML={{ __html: item.icon }} />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-dark-blue mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Success Stories Section */}
      <section ref={addToRefs} className="py-20 bg-gray-50 opacity-0 transition-opacity duration-1000">
        <div className="container">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h2 className="heading-2 text-dark-blue mb-6">Featured Success Stories</h2>
            <p className="text-gray-600 text-lg">
              Full details inside each case study
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {caseStudies.map((study, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-100 h-full flex flex-col"
              >
                <div className="p-8">
                  <div className="w-16 h-16 bg-orange-50 rounded-lg flex items-center justify-center mb-6 text-accent-orange">
                    <div dangerouslySetInnerHTML={{ __html: study.icon }} />
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-dark-blue mb-4">{study.title}</h3>
                  
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-700 mb-2">Challenge:</h4>
                    <p className="text-gray-600">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-700 mb-2">Outcome:</h4>
                    <ul className="space-y-2">
                      {study.outcomes.map((outcome, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="h-5 w-5 text-accent-orange mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-600">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-auto pt-4">
                    <Link 
                      to={study.link} 
                      className="inline-flex items-center text-navy-blue font-medium hover:text-accent-orange transition-colors"
                    >
                      Read the full breakdown
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={addToRefs} className="py-16 bg-white opacity-0 transition-opacity duration-1000">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-navy-blue to-dark-blue rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative p-12 md:p-16">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-orange rounded-full opacity-10 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 rounded-full opacity-10 blur-3xl"></div>
              
              <div className="relative z-10 text-center">
                <h2 className="heading-2 text-white mb-6">Want your business here next?</h2>
                <p className="text-gray-200 text-lg max-w-3xl mx-auto mb-10">
                  Book a free strategy session and let's build your success story.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact" className="btn btn-primary text-center px-8 py-3 text-lg">
                    Schedule Your Call
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudy;
