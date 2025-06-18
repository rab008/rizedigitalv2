import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import CTASection from '../components/CTASection';

/**
 * Case Study Library page component
 * Showcases case studies of successful client projects
 */
const CaseStudyLibrary = () => {
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

  // Case studies data
  const caseStudies = [
    {
      id: "king-land-clearing",
      title: "King Land Clearing",
      challenge: "Low-volume lead flow and rising CPL in a competitive land-clearing market.",
      outcome: [
        "[% increase] qualified leads",
        "[% drop] cost-per-lead",
        "territory expansion to three counties in 90 days"
      ],
      image: "/images/case-studies/king-land-clearing.jpg",
      link: "/case-study/king-land-clearing"
    },
    {
      id: "wards-excavation",
      title: "Ward's Excavation",
      challenge: "Site traffic stalled; minimal online authority for multi-service excavation.",
      outcome: [
        "[% lift] organic traffic",
        "[% boost] booked jobs",
        "#1 rankings for 20 high-intent keywords"
      ],
      image: "/images/case-studies/wards-excavation.jpg",
      link: "/case-study/wards-excavation"
    },
    {
      id: "bomann-fencing",
      title: "Bomann Fencing",
      challenge: "Needed hyper-targeted agricultural fencing leads while avoiding residential queries.",
      outcome: [
        "10× search visibility",
        "[% ROI] on Google Ads",
        "first-page positions across five counties"
      ],
      image: "/images/case-studies/bomann-fencing.jpg",
      link: "/case-study/bomann-fencing"
    }
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
              <span className="block">Case Study Library</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
              See how we turn local service brands into regional market leaders— with the hard numbers to prove it. Each study walks you through the exact audit findings, strategy, launch, and optimization steps that created the results. Use them as playbooks for your own growth.
            </p>
          </div>
        </div>
      </section>

      {/* Why Our Case Studies Matter Section */}
      <section ref={addToRefs} className="py-16 bg-white opacity-0 transition-opacity duration-1000">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="heading-2 text-dark-blue mb-8">Why Our Case Studies Matter</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center mb-4 mx-auto text-navy-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-dark-blue mb-3">Verified Metrics</h3>
                <p className="text-gray-600">Pulled straight from GA4, SEMrush, and CRM dashboards.</p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center mb-4 mx-auto text-navy-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-dark-blue mb-3">Transparent Tactics</h3>
                <p className="text-gray-600">Every lever we pulled is documented so you can replicate or adapt it.</p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center mb-4 mx-auto text-navy-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-dark-blue mb-3">Exclusive-Partner Model</h3>
                <p className="text-gray-600">Once we help a client dominate a territory, we won't work with direct competitors there.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Success Stories Section */}
      <section ref={addToRefs} className="py-16 bg-gray-50 opacity-0 transition-opacity duration-1000">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-2 text-dark-blue mb-8 text-center">Featured Success Stories</h2>
            <p className="text-lg text-gray-600 mb-12 text-center">(Full details inside each case study)</p>
            
            <div className="space-y-12">
              {caseStudies.map((study, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl border border-gray-100"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3 bg-gray-100 flex items-center justify-center p-8">
                      <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center text-navy-blue">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                    </div>
                    
                    <div className="md:w-2/3 p-8">
                      <h3 className="text-2xl font-semibold text-dark-blue mb-3">{study.title}</h3>
                      
                      <div className="mb-4">
                        <span className="text-gray-700 font-medium">Challenge:</span>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>
                      
                      <div className="mb-6">
                        <span className="text-gray-700 font-medium">Outcome:</span>
                        <ul className="mt-2 space-y-1">
                          {study.outcome.map((result, i) => (
                            <li key={i} className="flex items-start">
                              <svg className="h-5 w-5 text-accent-orange mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-gray-600">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Link to={study.link} className="text-accent-orange font-medium hover:underline">
                        Read the full breakdown →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section ref={addToRefs} className="py-16 bg-white opacity-0 transition-opacity duration-1000">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-2 text-dark-blue mb-6">Want your business here next?</h2>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Book a free strategy session and let's build your success story.
            </p>
            
            <div className="flex justify-center">
              <Link to="/contact" className="btn btn-primary text-center px-8 py-3 text-lg">
                Schedule Your Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Additional CTA Section */}
      <CTASection />
    </>
  );
};

export default CaseStudyLibrary;
