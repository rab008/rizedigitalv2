import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

/**
 * Automations service page component
 * Showcases AI-powered automation services offered by Rize Digital
 */
const Automations = () => {
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

  // Capabilities data
  const capabilities = [
    {
      title: "Streamlining the Customer Journey",
      subtitle: "via Integrated Platform",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>',
      features: [
        "Automated Lead Nurturing: Setting up sophisticated email and SMS sequences triggered by specific actions or time delays to keep prospects engaged.",
        "CRM & Sales Pipeline Automation: Automatically moving leads through stages based on interactions, assigning tasks, and providing clear visibility into your pipeline.",
        "Seamless Scheduling: Integrating automated booking systems linked directly to your calendar.",
        "Forms & Surveys: Utilizing integrated tools for easy lead capture and customer feedback collection.",
        "Unified Reporting: Accessing key marketing and sales metrics from one central dashboard."
      ]
    },
    {
      title: "AI-Powered Communication Handling",
      subtitle: "",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>',
      features: [
        "AI Website Chatbot: Providing instant responses, answering FAQs, qualifying visitors, and capturing leads directly on your website, 24/7.",
        "AI Voice Bot: Implementing intelligent voice agents (optional) capable of handling inbound calls, answering basic questions, and routing inquiries appropriately.",
        "AI Email Assistance: Setting up AI to automatically categorize, respond to, or flag common inbound emails, reducing inbox clutter."
      ]
    },
    {
      title: "Custom Workflow Automation",
      subtitle: "",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>',
      features: [
        "Intelligent Lead Routing: Automatically distributing leads to the right team member based on service type, location, or availability.",
        "Post-Service Automation: Triggering review requests, feedback surveys, or follow-up offers automatically after job completion.",
        "Internal Task Management: Automating reminders, task assignments, and notifications for improved team efficiency."
      ]
    }
  ];

  // Benefits data
  const benefits = [
    {
      title: "Massive Time Savings",
      description: "Automate repetitive tasks across marketing, sales, and communication, freeing up your team for high-value work.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>'
    },
    {
      title: "Increased Efficiency & Productivity",
      description: "Streamline workflows and reduce manual errors for smoother operations.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>'
    },
    {
      title: "Improved Lead Conversion Rates",
      description: "Engage leads faster and more consistently with automated follow-up and 24/7 AI assistance.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>'
    },
    {
      title: "Enhanced Customer Experience",
      description: "Provide instant responses and timely communication, improving satisfaction and loyalty.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>'
    },
    {
      title: "Never Miss a Lead",
      description: "AI bots capture inquiries even outside business hours.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>'
    },
    {
      title: "Scalable Operations",
      description: "Build systems that handle increased lead volume and customer interactions without proportional increases in manual effort.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>'
    },
    {
      title: "Actionable Insights",
      description: "Gain clearer visibility into your funnel and performance through integrated reporting.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>'
    },
    {
      title: "Exclusive Competitive Advantage",
      description: "Leverage advanced automation tailored specifically for your business in your market.",
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
              <span className="block">AI-Powered Automation</span>
              <span className="block text-accent-orange mt-2">Work Smarter, Grow Faster</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
              Streamline Operations, Enhance Customer Experiences & Reclaim Your Time
            </p>
            
            <div className="mt-10">
              <Link to="/contact" className="btn btn-primary text-center px-8 py-3 text-lg">
                Get Your Free Automation Consultation
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
                Unless you live under a rock, AI and automation is quickly becoming a valuable asset that you need to be taking advantage of as a business owner in 2025. Manual tasks, repetitive follow-ups, and missed communication opportunities drain valuable time and resources. At Rize Digital, we leverage cutting-edge AI and workflow automation specifically tailored for contractors and home service businesses nationwide, helping you streamline operations, engage leads effectively, and focus on scaling your success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Two-Pillar Approach Section */}
      <section ref={addToRefs} className="py-16 bg-gray-50 opacity-0 transition-opacity duration-1000">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="heading-2 text-dark-blue mb-4">Our Approach</h2>
            <p className="text-xl text-gray-600">Integrated Platforms & Intelligent Assistants</p>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              We believe technology should simplify, not complicate. Our approach centers on two powerful pillars:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Pillar 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-100 h-full">
              <div className="p-8">
                <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-navy-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                
                <h3 className="text-2xl font-semibold text-dark-blue mb-4">Leveraging an All-in-One Marketing & Operations Hub</h3>
                
                <p className="text-gray-600 mb-6">
                  We utilize a powerful, integrated platform that houses over 16 essential marketing and sales tools. This allows us to design seamless workflows that streamline your entire customer funnel – from initial lead capture and automated follow-up (email, SMS) to scheduling, CRM management, and reporting. This centralized system helps convert more leads while saving you significant time.
                </p>
              </div>
            </div>
            
            {/* Pillar 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-100 h-full">
              <div className="p-8">
                <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-navy-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                
                <h3 className="text-2xl font-semibold text-dark-blue mb-4">Deploying AI-Powered Communication</h3>
                
                <p className="text-gray-600 mb-6">
                  We integrate sophisticated AI-driven voice and chatbots designed to handle your front-line communications. Imagine instantly answering website chats, qualifying leads 24/7, responding to common email inquiries automatically, and even assisting with appointment setting – all powered by intelligent AI.
                </p>
                
                <p className="text-gray-600 font-medium">
                  Our exclusive partnership model ensures these advanced automation strategies are deployed solely for your benefit within your service area, giving you a distinct competitive edge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section ref={addToRefs} className="py-16 bg-white opacity-0 transition-opacity duration-1000">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="heading-2 text-dark-blue mb-4">Our AI & Automation Capabilities</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We implement practical, results-driven automation solutions:
            </p>
          </div>
          
          <div className="space-y-12 max-w-5xl mx-auto">
            {capabilities.map((capability, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-xl shadow-md overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start">
                    <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center mb-6 md:mb-0 md:mr-6 text-navy-blue flex-shrink-0">
                      <div dangerouslySetInnerHTML={{ __html: capability.icon }} />
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-semibold text-dark-blue mb-2">{capability.title}</h3>
                      {capability.subtitle && (
                        <p className="text-accent-orange font-medium mb-4">{capability.subtitle}</p>
                      )}
                      
                      <ul className="space-y-4 mt-6">
                        {capability.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <svg className="h-6 w-6 text-accent-orange mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
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
            <h2 className="heading-2 text-dark-blue mb-4">Key Benefits of Rize Digital's Automation Services</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
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
                    Our AI and automation solutions deliver significant efficiency gains for:
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
      <section ref={addToRefs} className="py-16 bg-gray-50 opacity-0 transition-opacity duration-1000">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-2 text-dark-blue mb-6">Ready to Automate Your Growth & Reclaim Your Time?</h2>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Stop letting manual processes slow you down. Partner with Rize Digital and harness the power of our integrated platform and AI assistants to streamline your operations, convert more leads, and focus on what you do best.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn btn-primary text-center px-8 py-3 text-lg">
                Get Your Free Automation Consultation
              </Link>
              <Link to="/services" className="btn btn-outline text-center px-8 py-3 text-lg">
                Learn More About Our Integrated Approach
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Automations;
