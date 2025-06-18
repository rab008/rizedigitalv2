import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import CTASection from '../components/CTASection';

/**
 * Google Ads service page component
 * Showcases Google Ads Management services offered by Rize Digital
 */
const GoogleAds = () => {
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

  // Approach options data
  const approachOptions = [
    {
      title: "High-Performance Traditional Campaign Management",
      subtitle: "Option 1",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" /></svg>',
      description: "For businesses focused primarily on maximizing immediate returns directly from paid advertising, we deliver highly effective, traditional Google Ads management. We'll meticulously optimize your campaigns month after month, focusing solely on driving the highest possible conversion volume and Return On Ad Spend (ROAS) from your designated PPC budget."
    },
    {
      title: "The \"Jump-Start & Redeploy\" for Market Dominance",
      subtitle: "Option 2 (Our Preferred Strategy)",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>',
      description: "For clients aiming for transformative, long-term market leadership and sustainable growth, our preferred and most powerful strategy utilizes Google Ads as a strategic \"growth catalyst.\" This multi-phase approach is designed for ambitious businesses.",
      phases: [
        {
          title: "Phase 1: Immediate Traction & Market Insight",
          description: "We typically recommend a significant initial investment in PPC to rapidly \"jump-start\" qualified traffic, lead flow, and crucial market data. This delivers immediate results and valuable insights while your foundational organic assets (like SEO and brand authority) are established."
        },
        {
          title: "Phase 2: Building Your Sustainable Engine",
          description: "Simultaneously, we strategically invest in building your organic presence (SEO, content, online reputation). This is critical because PPC generates leads only as long as you pay, whereas strong organic assets deliver increasingly cost-effective, high-quality leads over time."
        },
        {
          title: "Phase 3: Strategic Redeployment for Accelerated Growth",
          description: "As your organic foundation strengthens and begins driving significant lead volume, the initial, higher PPC budget isn't eliminated. Instead, it's intelligently redeployed to fuel the next stage of growth. This strategic shift might involve aggressively expanding into new geographic service areas, targeting higher-margin or specialized services, dominating bids for hyper-competitive, high-value keywords, or powering specific growth initiatives or seasonal campaigns."
        }
      ]
    }
  ];

  // Budget allocation example data
  const budgetAllocation = [
    {
      title: "Months 1-3: Aggressive Launch (PPC Focus ~60%)",
      goal: "Drive immediate leads & gather data via Google Ads.",
      supporting: "Initiate SEO groundwork (~20%), begin social/brand presence (~20%)."
    },
    {
      title: "Months 4-6: Balancing Act (PPC Focus ~50%)",
      goal: "Maintain PPC leads while SEO gains traction.",
      supporting: "Ramp up SEO content/link building (~30%), continue social (~20%)."
    },
    {
      title: "Months 7-9: Organic Ascendance (PPC Focus ~25%)",
      goal: "Rely more on improving organic rankings & brand awareness.",
      supporting: "Maximize SEO efforts (~50%), increase social engagement (~25%)."
    },
    {
      title: "Months 10-12: Strategic PPC & Organic Dominance (PPC Focus ~15-20%)",
      goal: "Organic channels carry the primary load; PPC targets specific high-value areas or new initiatives.",
      supporting: "Maintain peak SEO (~50%), maximize social/referral marketing (~30-35%)."
    }
  ];

  // Management process data
  const managementProcess = [
    {
      title: "Deep Dive & Strategic Setup",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>',
      description: "Comprehensive audits of existing accounts or meticulous research and setup for new ones, aligned with your chosen strategic path (Traditional or Jump-Start)."
    },
    {
      title: "Targeted Campaign Development",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>',
      description: "Crafting data-driven campaigns focused on your ideal customer and service areas, including granular keyword research (including extensive negative keywords), compelling ad copy creation (utilizing RSAs, DKI), smart bidding strategies, precise geo-targeting, optimal ad extensions, and conversion-focused landing page alignment."
    },
    {
      title: "Advanced Conversion Tracking",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>',
      description: "Implementing robust tracking to measure what truly matters – qualified phone calls, detailed form submissions, quote requests, booked appointments, and ultimately, contribution to revenue."
    },
    {
      title: "Relentless Optimization",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>',
      description: "Continuous, proactive management involving performance analysis across keywords/audiences/locations, rigorous A/B testing of ads and landing pages, strategic bid adjustments, budget pacing and allocation, Quality Score improvements, and adaptation to platform updates and market shifts."
    },
    {
      title: "Transparent, Insightful Reporting",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>',
      description: "Clear, concise monthly reports detailing performance against key performance indicators (KPIs) like Cost Per Lead (CPL), Lead-to-Close Rate insights (where possible), Return On Ad Spend (ROAS), Conversion Rates, and competitive positioning. Reports include actionable insights and progress tracking against strategic goals."
    }
  ];

  // Benefits data
  const benefits = [
    {
      title: "Choose Your Path",
      description: "Select high-performance traditional campaign management or our preferred strategic \"Jump-Start & Redeploy\" growth model.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>'
    },
    {
      title: "Immediate Lead Generation",
      description: "Drive qualified inquiries quickly to fuel your sales pipeline from day one.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>'
    },
    {
      title: "Strategic Long-Term Growth",
      description: "Build sustainable, cost-effective lead generation through integrated organic development.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>'
    },
    {
      title: "Optimized Ad Spend & Reduced Waste",
      description: "Meticulous management ensures your budget works harder, focusing on high-intent audiences and eliminating irrelevant clicks.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>'
    },
    {
      title: "Improved Lead Quality",
      description: "Go beyond clicks to attract prospects genuinely searching for your specific services in your area.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>'
    },
    {
      title: "Data-Driven Decisions",
      description: "Every strategic shift and tactical adjustment is backed by performance data and ROI analysis.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>'
    },
    {
      title: "Exclusive Partnership Advantage",
      description: "Our industry focus and strategic insights are dedicated solely to accelerating your growth within your defined market.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>'
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
              <span className="block">Strategic Google Ads Management</span>
              <span className="block text-accent-orange mt-2">Immediate Leads & Sustainable Growth</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
              Expert Campaign Management & Growth-Focused Strategies
            </p>
            
            <div className="mt-10">
              <Link to="/contact" className="btn btn-primary text-center px-8 py-3 text-lg">
                Get Your Free Google Ads Consultation
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
                Need qualified leads now while building a foundation for long-term market dominance? Google Ads is a potent tool for immediate impact, but its true power is unlocked when managed strategically within a comprehensive growth plan. At Rize Digital, we specialize in expert Google Ads management for contractors and home service businesses nationwide, offering data-driven campaigns designed for maximum ROI and, crucially, integration into a strategy that fuels sustainable, scalable success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section ref={addToRefs} className="py-16 bg-gray-50 opacity-0 transition-opacity duration-1000">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="heading-2 text-dark-blue mb-4">The Rize Digital Approach</h2>
            <p className="text-xl text-gray-600">Fueling Immediate & Long-Term Growth</p>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              Our core mission isn't just managing ad spend; it's architecting sustainable business growth. We achieve this through expertly crafted Google Ads campaigns, strategically positioned within your broader marketing ecosystem for unparalleled impact. We offer flexibility based on your specific goals:
            </p>
          </div>
          
          <div className="space-y-12 max-w-5xl mx-auto">
            {approachOptions.map((option, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
              >
                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start">
                    <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center mb-6 md:mb-0 md:mr-6 text-navy-blue flex-shrink-0">
                      <div dangerouslySetInnerHTML={{ __html: option.icon }} />
                    </div>
                    
                    <div>
                      <span className="text-accent-orange font-medium">{option.subtitle}</span>
                      <h3 className="text-2xl font-semibold text-dark-blue mb-4">{option.title}</h3>
                      <p className="text-gray-700 mb-6">{option.description}</p>
                      
                      {option.phases && (
                        <div className="space-y-6 mt-8">
                          {option.phases.map((phase, i) => (
                            <div key={i} className="bg-gray-50 rounded-lg p-6">
                              <h4 className="text-xl font-medium text-dark-blue mb-2">{phase.title}</h4>
                              <p className="text-gray-600">{phase.description}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Budget Allocation Section */}
      <section ref={addToRefs} className="py-16 bg-white opacity-0 transition-opacity duration-1000">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="heading-2 text-dark-blue mb-4">Integrated Growth Planning</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Executing this strategic vision requires careful, integrated planning. Our exclusive partnership model (one client per industry/area) allows us to meticulously tailor this growth-focused strategy. While every plan is unique, the following phased budget allocation illustrates how we often balance immediate PPC impact with building sustainable, organic lead flow over a typical 12-month period:
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gray-200"></div>
              
              <div className="space-y-12">
                {budgetAllocation.map((phase, index) => (
                  <div key={index} className="relative">
                    <div className="md:flex items-center">
                      {/* Timeline dot */}
                      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -top-2 w-5 h-5 rounded-full border-4 border-accent-orange bg-white"></div>
                      
                      {/* Content */}
                      <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}>
                        <div className="bg-white rounded-xl shadow-md p-6 ml-8 md:ml-0">
                          <h3 className="text-xl font-semibold text-dark-blue mb-3">{phase.title}</h3>
                          <p className="text-gray-700 font-medium mb-2">Goal: {phase.goal}</p>
                          <p className="text-gray-600 text-sm">Supporting Actions: {phase.supporting}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Management Process Section */}
      <section ref={addToRefs} className="py-16 bg-gray-50 opacity-0 transition-opacity duration-1000">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="heading-2 text-dark-blue mb-4">Our Expert Google Ads Management Process</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Whether pursuing a traditional or strategic growth approach, our hands-on management ensures optimal campaign performance:
            </p>
          </div>
          
          <div className="space-y-8 max-w-5xl mx-auto">
            {managementProcess.map((process, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-md overflow-hidden"
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
      <section ref={addToRefs} className="py-16 bg-white opacity-0 transition-opacity duration-1000">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="heading-2 text-dark-blue mb-4">Key Benefits of Rize Digital's Google Ads Management</h2>
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
                    Our strategic and traditional Google Ads management delivers exceptional results for:
                  </p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {industries.map((industry, index) => (
                      <div 
                        key={index} 
                        className="bg-white bg-opacity-10 rounded-lg p-4 text-center transform transition-all duration-300 hover:-translate-y-1"
                      >
                        <span className="text-white font-medium">{industry}</span>
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
            <h2 className="heading-2 text-dark-blue mb-6">Ready for Google Ads That Drive Real Growth?</h2>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Stop settling for just clicks. Partner with Rize Digital for Google Ads management designed for immediate impact and strategic, long-term market dominance. Let's discuss the right approach—Traditional or Jump-Start—to achieve your ambitious growth goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn btn-primary text-center px-8 py-3 text-lg">
                Get Your Free Google Ads Consultation
              </Link>
              <Link to="/case-study" className="btn btn-outline text-center px-8 py-3 text-lg">
                Explore Our Success Stories
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

export default GoogleAds;
