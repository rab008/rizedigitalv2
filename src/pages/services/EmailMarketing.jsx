import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

/**
 * Email Marketing service page component
 * Showcases Email Marketing services offered by Rize Digital
 */
const EmailMarketing = () => {
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

  // Email Marketing Process data
  const emailMarketingProcess = [
    {
      title: "Strategic Audience Analysis & Segmentation",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>',
      description: "Comprehensive analysis of your customer base to identify key segments based on demographics, behavior, purchase history, and engagement patterns. Development of detailed buyer personas to guide targeted messaging strategies. Implementation of advanced segmentation to ensure the right message reaches the right audience at the right time."
    },
    {
      title: "Email List Building & Management",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>',
      description: "Ethical list-building strategies including optimized opt-in forms, lead magnets, and landing pages. Regular list maintenance with automated cleaning processes to remove inactive subscribers and maintain high deliverability rates. Implementation of permission-based marketing practices to ensure compliance with email regulations like CAN-SPAM, GDPR, and CCPA."
    },
    {
      title: "Compelling Content Creation",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>',
      description: "Development of engaging, value-driven email content tailored to your specific audience segments. Crafting of persuasive subject lines and preview text to maximize open rates. Creation of clear, compelling calls-to-action that drive conversions. Design of visually appealing templates that reflect your brand identity while ensuring optimal readability across all devices."
    },
    {
      title: "Automated Campaign Development",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>',
      description: "Design and implementation of targeted automated email sequences including welcome series, nurture campaigns, abandoned cart recovery, and post-purchase follow-ups. Creation of behavior-triggered emails that respond to specific customer actions. Development of personalized drip campaigns that guide prospects through your sales funnel."
    },
    {
      title: "Strategic Deployment & Timing Optimization",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',
      description: "Data-driven send time optimization to ensure emails reach subscribers when they're most likely to engage. A/B testing of deployment variables including day of week, time of day, and frequency. Implementation of email throttling and staggered sending for larger campaigns to maintain optimal deliverability."
    },
    {
      title: "Comprehensive Performance Analysis",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>',
      description: "Detailed tracking and analysis of key metrics including open rates, click-through rates, conversion rates, and ROI. Regular performance reporting with actionable insights for continuous improvement. Segment analysis to identify high-performing audience groups and content types."
    },
    {
      title: "Continuous Optimization & Innovation",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>',
      description: "Ongoing A/B testing of subject lines, content, design elements, and CTAs to continuously improve performance. Regular review and refinement of segmentation strategies based on evolving customer data. Implementation of emerging email marketing technologies and best practices to keep your campaigns at the cutting edge."
    }
  ];

  // Benefits data
  const benefits = [
    {
      title: "Direct Access to Your Audience",
      description: "Communicate directly with your customers in their inbox, without algorithm changes affecting your reach.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>'
    },
    {
      title: "Exceptional ROI",
      description: "Email marketing consistently delivers the highest return on investment of any digital marketing channel.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>'
    },
    {
      title: "Personalized Customer Journeys",
      description: "Deliver highly relevant content based on customer behavior, preferences, and stage in the buying cycle.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>'
    },
    {
      title: "Automated Revenue Generation",
      description: "Set up automated campaigns that nurture leads and drive sales while you focus on running your business.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>'
    },
    {
      title: "Measurable Results",
      description: "Track and analyze detailed performance metrics to continuously improve your email marketing strategy.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>'
    },
    {
      title: "Scalable Growth",
      description: "Easily scale your email marketing efforts as your business grows, reaching more customers without proportionally increasing costs.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>'
    },
    {
      title: "Enhanced Customer Retention",
      description: "Build stronger relationships with existing customers, increasing lifetime value and encouraging repeat business.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>'
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

  // Email campaign types data
  const campaignTypes = [
    {
      title: "Welcome & Onboarding Sequences",
      description: "Make a powerful first impression with strategically designed welcome emails that introduce new subscribers to your brand, set expectations, and guide them toward initial engagement.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" /></svg>'
    },
    {
      title: "Lead Nurturing Campaigns",
      description: "Convert prospects into customers with targeted email sequences that address pain points, overcome objections, and guide leads through each stage of your sales funnel.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>'
    },
    {
      title: "Customer Retention & Loyalty Programs",
      description: "Strengthen relationships with existing customers through personalized communication, exclusive offers, and loyalty rewards that encourage repeat business and referrals.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>'
    },
    {
      title: "Re-engagement Campaigns",
      description: "Recapture the attention of inactive subscribers with strategic re-engagement sequences designed to reignite interest and bring dormant customers back into your active customer base.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>'
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
              <span className="block">Strategic Email Marketing</span>
              <span className="block text-accent-orange mt-2">Convert, Engage, and Retain Customers</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
              Data-Driven Email Campaigns That Drive Revenue and Build Lasting Customer Relationships
            </p>
            
            <div className="mt-10">
              <Link to="/contact" className="btn btn-primary text-center px-8 py-3 text-lg">
                Get Your Free Email Marketing Consultation
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
                In today's digital landscape, email marketing remains one of the most powerful and cost-effective channels for connecting with your audience. With an average ROI of $42 for every $1 spent, strategic email marketing delivers unmatched value for contractors and service businesses looking to generate leads, nurture relationships, and drive repeat business.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                At Rize Digital, we specialize in creating data-driven email marketing campaigns that go beyond basic newsletters. Our comprehensive approach combines audience segmentation, compelling content, automation, and continuous optimization to deliver personalized customer experiences that convert prospects, engage customers, and build lasting loyalty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Campaign Types Section */}
      <section ref={addToRefs} className="py-16 bg-gray-50 opacity-0 transition-opacity duration-1000">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="heading-2 text-dark-blue mb-4">Strategic Email Campaign Types</h2>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              Our email marketing strategies are tailored to your specific business goals, with campaigns designed to address every stage of the customer journey:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {campaignTypes.map((type, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start">
                    <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center mb-6 md:mb-0 md:mr-6 text-navy-blue flex-shrink-0">
                      <div dangerouslySetInnerHTML={{ __html: type.icon }} />
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-semibold text-dark-blue mb-4">{type.title}</h3>
                      <p className="text-gray-700">{type.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email Marketing Process Section */}
      <section ref={addToRefs} className="py-16 bg-white opacity-0 transition-opacity duration-1000">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="heading-2 text-dark-blue mb-4">Our Email Marketing Process</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              A systematic approach to creating email campaigns that deliver measurable results:
            </p>
          </div>
          
          <div className="space-y-8 max-w-5xl mx-auto">
            {emailMarketingProcess.map((process, index) => (
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
            <h2 className="heading-2 text-dark-blue mb-4">Benefits of Strategic Email Marketing</h2>
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
                    Our strategic email marketing solutions deliver exceptional results for:
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
            <h2 className="heading-2 text-dark-blue mb-6">Ready to Transform Your Email Marketing?</h2>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Partner with Rize Digital to create strategic email marketing campaigns that convert prospects, engage customers, and drive sustainable business growth. Let's discuss how our data-driven approach can help you achieve your specific business goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn btn-primary text-center px-8 py-3 text-lg">
                Get Your Free Email Marketing Consultation
              </Link>
              <Link to="/case-study" className="btn btn-outline text-center px-8 py-3 text-lg">
                Explore Our Success Stories
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EmailMarketing;
