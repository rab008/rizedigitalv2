import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';
import { useEffect, useRef } from 'react';

/**
 * About page component for Rize Digital website
 * Includes company foundation, mission, values, leadership, and advantages
 * Enhanced with modern UI/UX design elements
 */
const About = () => {
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
  // Leadership data
  const leadershipTeam = [
    {
      name: "James Coyle",
      position: "Co-Founder & Head of Client Strategy & Execution",
      bio: "James drives the successful implementation and optimization of client marketing strategies at Rize Digital. He directly manages the agency's Google Ads and Search Engine Optimization (SEO) initiatives, ensuring campaigns are meticulously executed for peak performance. James also provides critical guidance on website strategy, ensuring clients' digital platforms effectively convert traffic into leads and sales. His hands-on leadership in campaign fulfillment translates directly into achieving tangible results and maximizing return on investment for Rize Digital partners.",
      image: "https://via.placeholder.com/400x500/2a3b8f/ffffff?text=James+Coyle" // Reliable placeholder image
    },
    {
      name: "Beau Tetreault",
      position: "Co-Founder & Head of Growth & Finance",
      bio: "Beau steers Rize Digital's growth trajectory and ensures its financial health. In his capacity leading sales and business development, he manages the pipeline of prospective clients, from initial inquiry through the sales process to successful partnership onboarding. As the agency's financial lead (CFO), Beau oversees the company's financial strategy and operations. His leadership ensures the agency grows sustainably while maintaining the resources needed to deliver exceptional client value and results.",
      image: "https://via.placeholder.com/400x500/2a3b8f/ffffff?text=Beau+Tetreault" // Reliable placeholder image
    }
  ];

  // Company values data
  const companyValues = [
    {
      title: "Client Market Leadership",
      description: "Our strategic objective is to position our clients as the dominant force in their designated markets through superior digital execution.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>`
    },
    {
      title: "Exclusive Commitment",
      description: "We operate on a strict exclusivity model – one client per industry, per service area – ensuring our complete focus and resources are dedicated to maximizing your competitive advantage.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>`
    },
    {
      title: "Professional Transparency",
      description: "We practice clear, consistent communication and provide comprehensive, understandable reporting, offering full visibility into campaign performance and investment returns.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>`
    },
    {
      title: "Results-Driven Methodology",
      description: "Our focus remains steadfastly on the metrics that drive business growth: qualified lead generation, sales conversions, and measurable return on investment.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>`
    },
    {
      title: "Strategic Innovation & Adaptability",
      description: "We proactively monitor the evolving digital landscape, particularly advancements in AI and automation. We founded Rize during a period of intense change, embedding adaptability into our core. We identify and implement practical, cutting-edge solutions that enhance efficiency, improve customer experience, and maintain our clients' competitive edge.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>`
    },
    {
      title: "Uncompromising Integrity",
      description: "We conduct our business with the highest ethical standards, building relationships founded on trust and mutual respect.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>`
    }
  ];

  // Rize Digital Advantages
  const rizeAdvantages = [
    {
      title: "Industry Specialization",
      description: "Deep expertise in the contractor and home service sectors."
    },
    {
      title: "Guaranteed Exclusivity",
      description: "Protecting your market share and competitive edge."
    },
    {
      title: "Future-Focused Solutions",
      description: "Integrating advanced technology like AI and automation effectively."
    },
    {
      title: "Tailored Strategic Planning",
      description: "Custom solutions designed for your specific business objectives, rejecting flawed industry models like generic pay-per-lead."
    },
    {
      title: "Emphasis on Measurable Growth",
      description: "Reporting focused on leads, sales, and demonstrable ROI."
    },
    {
      title: "Partnership Built on Trust",
      description: "Transparent communication and aligned incentives foster strong, long-term relationships."
    }
  ];

  return (
    <>
      {/* Hero Section - Enhanced with gradient background and visual elements */}
      <section className="relative overflow-hidden bg-gradient-to-br from-dark-blue via-navy-blue to-dark-blue text-white py-12 md:py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-accent-orange rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-400 rounded-full opacity-10 blur-2xl"></div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-8">
              <span className="block transform transition-all">Rize Digital:</span>
              <span className="block text-accent-orange mt-2">Architecting Digital Marketing Success</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
              Strategic insight and a partnership model built on trust to deliver measurable business outcomes.
            </p>
            
            {/* Scroll indicator */}
            <div className="hidden md:block mx-auto mt-16 w-6 h-10 border-2 border-white rounded-full relative">
              <span className="absolute top-1 left-1/2 w-1 h-2 bg-white rounded-full transform -translate-x-1/2 animate-bounce"></span>
            </div>
          </div>
        </div>
      </section>

      {/* Foundation Section - Enhanced with timeline element and modern styling */}
      <section ref={addToRefs} className="py-20 opacity-0 transition-opacity duration-1000">
        <div className="container">
          <div className="relative">
            {/* Timeline indicator */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-accent-orange to-transparent transform -translate-x-1/2"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <span className="hidden lg:block absolute right-0 top-0 w-4 h-4 bg-accent-orange rounded-full transform translate-x-1/2 shadow-lg"></span>
                <div className="lg:pr-12 relative z-10">
                  <h2 className="heading-2 text-dark-blue mb-6 relative">
                    <span className="relative inline-block">
                      Our Foundation:
                      <span className="absolute bottom-0 left-0 w-full h-1 bg-accent-orange opacity-50"></span>
                    </span>
                    <span className="block mt-2">Strategic Insight & A Partnership Model Built on Trust</span>
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Rize Digital was established in 2020, founded on the principle that digital marketing must deliver tangible, measurable business outcomes. Co-founders James Coyle and Beau Tetreault identified a critical need within the contractor and home service industries for a marketing partner offering more than generic solutions and opaque reporting.
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Observing the market, and validated through candid conversations with multiple business owners in the trades, it became evident that many felt underserved, particularly by larger national lead generation brands employing standardized approaches. There was a distinct lack of tailored strategy, transparent communication, and a genuine understanding of the unique operational challenges and growth objectives inherent to service-based businesses.
                  </p>
                  <div className="p-6 border-l-4 border-accent-orange bg-orange-50 rounded-r-lg shadow-sm mb-6">
                    <p className="text-gray-700 italic">
                      "We pinpointed a fundamental flaw in the prevailing industry model: Pay-Per-Lead. While seemingly straightforward, this common practice often creates misaligned incentives and poor outcomes for everyone involved."
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <span className="hidden lg:block absolute left-0 top-1/2 w-4 h-4 bg-accent-orange rounded-full transform -translate-x-1/2 shadow-lg"></span>
                {/* Modern image container with overlay effect */}
                <div className="rounded-xl overflow-hidden shadow-xl transform lg:translate-x-6 transition-all duration-500 hover:translate-y-[-8px] hover:shadow-2xl">
                  <div className="relative h-96 w-full bg-gradient-to-br from-navy-blue to-dark-blue flex items-center justify-center group">
                    <div className="absolute inset-0 bg-dark-blue opacity-40 group-hover:opacity-20 transition-opacity"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-white opacity-80 z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark-blue to-transparent p-6">
                      <p className="text-white font-medium">Founded in 2020</p>
                      <p className="text-gray-300 text-sm">Transforming digital marketing for service businesses</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Rize Digital Difference Section - Enhanced with modern card design and visual elements */}
      <section ref={addToRefs} className="py-24 bg-gradient-to-b from-white to-gray-50 opacity-0 transition-opacity duration-1000">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1 bg-orange-100 text-accent-orange rounded-full text-sm font-medium mb-4">Our Approach</span>
            <h2 className="heading-2 text-dark-blue mb-6">The Rize Digital Difference</h2>
            <p className="text-gray-600 text-lg">
              We recognized the opportunity to build a healthier, more effective partnership model.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Problem Card 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-red-400 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-dark-blue mb-4">For the Contractor</h3>
              <p className="text-gray-600 leading-relaxed">
                The agency is primarily incentivized to deliver volume, often sacrificing lead quality. This leads to wasted time fielding unqualified inquiries (wrong numbers, tire-kickers) and frustration with the marketing investment.
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-gray-600 leading-relaxed">
                  Compounding this, leads are frequently sold non-exclusively to multiple contractors simultaneously, forcing businesses into a frantic race just to make first contact, only to find competitors already on site. This erodes profitability and breeds distrust.
                </p>
              </div>
            </div>
            
            {/* Problem Card 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-red-400 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-dark-blue mb-4">For the End Customer</h3>
              <p className="text-gray-600 leading-relaxed">
                Their information is often distributed widely without full transparency, leading to multiple unsolicited calls, confusion over whom to trust, and a generally negative service experience before work even begins.
              </p>
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span className="text-sm text-gray-500">Poor customer experience</span>
              </div>
            </div>
            
            {/* Solution Card */}
            <div className="bg-gradient-to-br from-navy-blue to-dark-blue p-8 rounded-xl shadow-lg text-white transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="w-14 h-14 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Our Approach</h3>
              <div className="mb-6">
                <h4 className="font-semibold text-accent-orange mb-2">Exclusive Partnership</h4>
                <p className="text-gray-200 leading-relaxed">
                  We commit to one client per industry, per service area. This eliminates direct competition generated by us and allows us to focus solely on maximizing your success.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-accent-orange mb-2">Aligned Incentives</h4>
                <p className="text-gray-200 leading-relaxed">
                  We operate on a fair retainer structure, often supplemented by performance-based incentives tied to mutually agreed-upon Key Performance Indicators (KPIs). This ensures our goals are aligned with yours – driving genuinely qualified leads and measurable business growth, not just lead volume.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section - Enhanced with data visualization and modern design */}
      <section ref={addToRefs} className="py-24 opacity-0 transition-opacity duration-1000">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3">
                <span className="inline-block px-4 py-1 bg-blue-100 text-navy-blue rounded-full text-sm font-medium mb-4">Success Story</span>
                <h3 className="heading-3 text-dark-blue mb-6 relative">
                  Proven Results: 
                  <span className="block mt-2 text-accent-orange">A Case Study</span>
                </h3>
                <div className="hidden md:block mt-8">
                  {/* Results visualization */}
                  <div className="bg-white p-6 rounded-xl shadow-md mb-6">
                    <h4 className="font-semibold text-dark-blue mb-3">Campaign Results</h4>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Lead Quality</span>
                          <span className="text-sm font-medium text-accent-orange">92%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-accent-orange h-2 rounded-full" style={{ width: '92%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Conversion Rate</span>
                          <span className="text-sm font-medium text-accent-orange">78%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-accent-orange h-2 rounded-full" style={{ width: '78%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">ROI</span>
                          <span className="text-sm font-medium text-accent-orange">320%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-accent-orange h-2 rounded-full" style={{ width: '100%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border-l-4 border-accent-orange">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-navy-blue rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">JL</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-dark-blue">Jerry Lunsford</h4>
                      <p className="text-gray-500">Johnson City Fence Company</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    This isn't just theory; it's proven practice. Consider our partnership with Jerry Lunsford of Johnson City Fence Company. When we began, aiming for a consistent target of 12-20 qualified leads per month, Jerry, like many business owners, carefully evaluated the commitment to our retainer model versus familiar pay-per-lead options.
                  </p>
                  
                  <div className="mb-6 p-5 bg-blue-50 rounded-lg border-l-4 border-navy-blue">
                    <p className="text-navy-blue font-medium">
                      After launching our targeted regional campaign built on exclusivity and quality focus, the results spoke volumes. Within just six months, the steady influx of high-quality, exclusive leads directly contributed to significant revenue growth, generating returns that far surpassed the monthly investment.
                    </p>
                  </div>
                  
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    This partnership also included pricing stability for an extended term, demonstrating our commitment to predictable costs and fostering long-term, mutually beneficial relationships – a stark contrast to the volatile, often ineffective pay-per-lead treadmill.
                  </p>
                  
                  <div className="relative pl-6 border-l-2 border-accent-orange">
                    <svg className="absolute top-0 left-[-9px] w-4 h-4 text-accent-orange" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                    <p className="italic text-gray-700 leading-relaxed">
                      "This conviction – that a better partnership model leads to better, sustainable results – formed the bedrock of Rize Digital, further solidified by James's cross-country relocation to join Beau and launch the agency with unwavering, hands-on commitment."
                    </p>
                  </div>
                </div>
                
                {/* Mobile-only results visualization */}
                <div className="md:hidden mt-8">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="font-semibold text-dark-blue mb-3">Campaign Results</h4>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Lead Quality</span>
                          <span className="text-sm font-medium text-accent-orange">92%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-accent-orange h-2 rounded-full" style={{ width: '92%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Conversion Rate</span>
                          <span className="text-sm font-medium text-accent-orange">78%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-accent-orange h-2 rounded-full" style={{ width: '78%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">ROI</span>
                          <span className="text-sm font-medium text-accent-orange">320%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-accent-orange h-2 rounded-full" style={{ width: '100%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evolution Section - Enhanced with modern design */}
      <section ref={addToRefs} className="py-20 bg-gradient-to-b from-gray-50 to-white opacity-0 transition-opacity duration-1000">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="md:w-1/3">
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent-orange opacity-10 rounded-full"></div>
                  <div className="relative z-10 bg-gradient-to-br from-navy-blue to-dark-blue text-white p-8 rounded-xl shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-accent-orange mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <h3 className="text-xl font-semibold mb-2">Evolution Timeline</h3>
                    <div className="space-y-4 mt-6">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-accent-orange rounded-full mr-3"></div>
                        <p className="text-gray-200">2020: Founded</p>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-accent-orange rounded-full mr-3"></div>
                        <p className="text-gray-200">2021: Lead Gen Focus</p>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-accent-orange rounded-full mr-3"></div>
                        <p className="text-gray-200">2022: Full-Service</p>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                        <p className="text-white font-medium">Today: Growth Engine</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <span className="inline-block px-4 py-1 bg-blue-100 text-navy-blue rounded-full text-sm font-medium mb-4">Our Evolution</span>
                <h3 className="heading-3 text-dark-blue mb-6">From Focused Lead Generation to Full-Service Growth Engine</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  While Rize Digital initially honed its expertise strictly on lead generation to solve the immediate pain points observed in the market, our vision quickly broadened. We recognized that true, sustainable market leadership required a more holistic digital strategy. Building on our foundational success and deep understanding of the contractor and home service industries, we expanded our capabilities to encompass the full spectrum of digital marketing services.
                </p>
                <div className="p-6 bg-gray-50 rounded-lg border-l-4 border-navy-blue mb-6">
                  <p className="text-gray-700 leading-relaxed">
                    This evolution reflects James and Beau's core vision: to provide clients with a pathway for comprehensive business transformation, often achievable within a 12-18 month timeframe. We function as more than just a service provider; we become your outsourced Chief Marketing Officer (CMO) and dedicated marketing department.
                  </p>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  For a straightforward, flat-rate investment, you gain access to high-level strategic direction and expert execution designed to rapidly deliver a significant return on investment (ROI) and substantially boost the overall value of your business in a remarkably short period.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section - Enhanced with modern design */}
      <section ref={addToRefs} className="py-24 bg-gradient-to-br from-dark-blue via-navy-blue to-dark-blue text-white opacity-0 transition-opacity duration-1000 relative overflow-hidden">
        {/* Enhanced decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-orange rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-500 rounded-full opacity-5 blur-2xl"></div>
        
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-4 h-4 bg-white rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-20 right-20 w-3 h-3 bg-accent-orange rounded-full opacity-30 animate-ping"></div>
          <div className="absolute bottom-40 left-1/3 w-2 h-2 bg-blue-300 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-white rounded-full opacity-10 animate-ping"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left column with mission statement */}
              <div className="lg:col-span-5">
                <div className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm p-8 rounded-2xl border border-white border-opacity-10 shadow-xl transform transition-all duration-500 hover:translate-y-[-8px]">
                  <div className="inline-flex items-center space-x-2 mb-6">
                    <span className="w-8 h-8 flex items-center justify-center bg-accent-orange rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-white font-medium">Our Purpose</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 relative">
                    <span className="relative z-10 text-white">Our Mission</span>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-accent-orange"></div>
                  </h2>
                  
                  <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-accent-orange">
                    Empowering Market Leadership Through Partnership
                  </h3>
                  
                  <div className="space-y-6">
                    <p className="text-gray-200 text-lg leading-relaxed">
                      Our mission is to serve as the indispensable, exclusive digital growth partner for ambitious contractors and home service businesses nationwide.
                    </p>
                    
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <p className="text-gray-200 leading-relaxed">
                        We strive to be the agency partner valued for its strategic counsel, integrity, and unwavering dedication to client success.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right column with visual elements */}
              <div className="lg:col-span-7">
                <div className="relative">
                  {/* Decorative elements */}
                  <div className="absolute -top-6 -left-6 w-12 h-12 bg-accent-orange rounded-full opacity-50"></div>
                  <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-blue-400 rounded-full opacity-50"></div>
                  
                  <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-xl border border-white border-opacity-20">
                    <div className="flex justify-center mb-8">
                      <div className="w-16 h-16 bg-accent-orange bg-opacity-20 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                    </div>
                    
                    <p className="text-gray-200 text-lg leading-relaxed mb-8">
                      We achieve this by deploying innovative, results-oriented marketing strategies meticulously designed not merely for online visibility, but for establishing clear market leadership within our clients' specific service areas.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white bg-opacity-5 p-5 rounded-xl border border-white border-opacity-10">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-8 h-8 bg-accent-orange bg-opacity-20 rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-accent-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                          </div>
                          <h4 className="font-semibold text-white">Results-Driven</h4>
                        </div>
                        <p className="text-gray-300">Measurable growth and ROI for your business</p>
                      </div>
                      
                      <div className="bg-white bg-opacity-5 p-5 rounded-xl border border-white border-opacity-10">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-8 h-8 bg-accent-orange bg-opacity-20 rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-accent-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          </div>
                          <h4 className="font-semibold text-white">Exclusive Partnership</h4>
                        </div>
                        <p className="text-gray-300">One client per industry, per service area</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section - Enhanced with modern card design */}
      <section ref={addToRefs} className="py-24 opacity-0 transition-opacity duration-1000">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1 bg-blue-100 text-navy-blue rounded-full text-sm font-medium mb-4">Our Team</span>
            <h2 className="heading-2 text-dark-blue mb-4">Leadership: Strategy & Technology Expertise</h2>
            <p className="text-gray-600 text-lg">
              Our leadership team brings deep expertise in digital marketing strategy and technology implementation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {leadershipTeam.map((leader, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl">
                  <div className="relative">
                    <img 
                      src={leader.image} 
                      alt={leader.name} 
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-blue to-transparent opacity-60"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-bold mb-1">{leader.name}</h3>
                      <p className="text-accent-orange font-medium">{leader.position}</p>
                    </div>
                  </div>
                  <div className="p-8">
                    <p className="text-gray-600 leading-relaxed">{leader.bio}</p>
                    <div className="mt-6 pt-6 border-t border-gray-100 flex justify-center space-x-4">
                      <a href="#" className="text-gray-400 hover:text-navy-blue transition-colors">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                        </svg>
                      </a>
                      <a href="#" className="text-gray-400 hover:text-navy-blue transition-colors">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                        </svg>
                      </a>
                      <a href="#" className="text-gray-400 hover:text-navy-blue transition-colors">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section - Enhanced with modern card design */}
      <section ref={addToRefs} className="py-24 bg-gradient-to-b from-white to-gray-50 opacity-0 transition-opacity duration-1000">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1 bg-orange-100 text-accent-orange rounded-full text-sm font-medium mb-4">Our Principles</span>
            <h2 className="heading-2 text-dark-blue mb-6">Our Core Values</h2>
            <p className="text-gray-600 text-lg">
              These principles guide everything we do and shape how we work with our clients and each other.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyValues.map((value, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full"
              >
                <div className="w-16 h-16 bg-orange-50 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-accent-orange" dangerouslySetInnerHTML={{ __html: value.icon }} />
                </div>
                <h3 className="text-xl font-semibold text-dark-blue mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed flex-grow">{value.description}</p>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <div className="flex items-center text-accent-orange">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">Core principle</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Rize Digital Advantage Section - Enhanced with modern design */}
      <section ref={addToRefs} className="py-24 bg-gradient-to-br from-navy-blue to-dark-blue text-white opacity-0 transition-opacity duration-1000">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1 bg-white bg-opacity-20 text-white rounded-full text-sm font-medium mb-4">Why Choose Us</span>
            <h2 className="heading-2 text-white mb-6">The Rize Digital Advantage</h2>
            <p className="text-gray-200 text-lg">
              What sets us apart and why clients choose us as their digital growth partner.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rizeAdvantages.map((advantage, index) => (
              <div 
                key={index} 
                className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm p-8 rounded-xl border border-white border-opacity-20 transform transition-all duration-300 hover:translate-y-[-8px]"
              >
                <div className="w-12 h-12 bg-accent-orange bg-opacity-20 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-accent-orange">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{advantage.title}</h3>
                <p className="text-gray-300 leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced with modern design */}
      <section ref={addToRefs} className="py-24 bg-white opacity-0 transition-opacity duration-1000">
        <div className="container">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-navy-blue to-dark-blue rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative p-12 md:p-16">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-orange rounded-full opacity-10 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 rounded-full opacity-10 blur-3xl"></div>
              
              <div className="relative z-10 text-center">
                <h2 className="heading-2 text-white mb-6">Partner with Rize Digital for Strategic Growth</h2>
                <p className="text-gray-200 text-lg max-w-3xl mx-auto mb-10">
                  Discover how a dedicated, strategic digital marketing partnership, built on a foundation of trust and proven results, can elevate your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact" className="btn btn-primary text-center px-8 py-3 text-lg">
                    Schedule Your Strategic Consultation
                  </Link>
                  <Link to="/services" className="btn bg-transparent text-white border border-white hover:bg-white hover:text-dark-blue transition-colors text-center px-8 py-3 text-lg">
                    Explore Our Services
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

export default About;
