import GHLForm from '../components/GHLForm';
import { useEffect, useRef, useState } from 'react';

/**
 * Contact page component for Rize Digital website
 * Includes contact information, form, service areas, and FAQs
 * Enhanced with modern UI/UX design elements
 */
const Contact = () => {

  // FAQ state
  const [openFaq, setOpenFaq] = useState(null);
  
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // FAQ data
  const faqs = [
    {
      question: "Do you work with businesses outside of Connecticut?",
      answer: "Absolutely! While we're based in Connecticut, the vast majority of our clients nationwide. Our digital marketing strategies can be effectively implemented regardless of your location."
    },
    {
      question: "How quickly can I expect to see results?",
      answer: "Results timelines vary depending on the services and your specific industry. Some services like Google Ads can show results within days, while SEO typically takes 3-6 months to show significant improvements. During your consultation, we'll provide realistic timelines based on your specific situation. What we can guarantee is that the results will last."
    },
    {
      question: "Do you require long-term contracts?",
      answer: "We believe in earning your business every month. While we recommend a minimum commitment to give strategies time to work (especially for SEO), we don't lock clients into lengthy contracts. We'll discuss the optimal arrangement during your consultation."
    },
    {
      question: "What makes Rize Digital different from other agencies?",
      answer: "Our exclusive partnership model means we work with only one business per industry in each service area. This ensures you never compete with another Rize Digital client for visibility or leads. We offer a much more specialized hands-on experience compared to other agencies that just do plug and play with templates. Additionally, our specialized knowledge in contractor and home service industries allows us to create highly effective campaigns tailored to your specific market. Think of us as your personal CMO."
    },
    {
      question: "What information do I need to prepare for my consultation?",
      answer: "To make the most of your consultation, it helps to have information about your current marketing efforts, business goals, target audience, and any specific challenges you're facing. However, we can start the conversation wherever you are in your digital marketing journey."
    }
  ];

  // Social media data
  const socialMedia = [
    {
      name: "LinkedIn",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>`,
      url: "https://www.linkedin.com/company/rize-digital-usa/"
    },
    {
      name: "X",
      icon: `<svg viewBox="0 0 1200 1227" width="24" height="24" fill="currentColor" aria-hidden="true">
              <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="currentColor"/>
            </svg>`,
      url: "https://x.com/RizeDigital_USA"
    }
  ];

  // Consultation benefits
  const consultationBenefits = [
    "Discuss your business goals and challenges",
    "Analyze your current digital marketing efforts",
    "Identify opportunities for improvement",
    "Outline potential strategies tailored to your specific needs",
    "Answer any questions you have about our services and approach"
  ];

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
            <h1 className="heading-1 mb-6">
              <span className="block transform transition-all">We'd Love to Hear From You</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Our team is ready to answer your questions and discuss how we can help your business grow. We respond to all inquiries within one business day.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section - 2 Column Layout */}
      <section ref={addToRefs} id="contact-form" className="py-16 opacity-0 transition-opacity duration-1000">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1 bg-blue-100 text-navy-blue rounded-full text-sm font-medium mb-4">Contact Us</span>
              <h2 className="heading-2 text-dark-blue mb-4">Get in Touch with Rize Digital</h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Whether you're looking for lead generation, SEO, website development, or any of our specialized services, we're here to help your business thrive.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                {/* Contact Information Column */}
                <div className="bg-gradient-to-br from-navy-blue to-dark-blue text-white p-8 lg:p-10">
                  <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                  <p className="text-gray-300 mb-8">
                    Fill out the form and our team will get back to you within one business day.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">Phone</h4>
                        <a href="tel:+14752644226" className="text-gray-300 hover:text-accent-orange transition-colors">
                          (475) 264-4226
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">Email</h4>
                        <a href="mailto:info@rizedigital.com" className="text-gray-300 hover:text-accent-orange transition-colors">
                          info@rizedigital.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">Hours</h4>
                        <p className="text-gray-300">Monday - Friday: 9:00 AM - 5:00 PM ET</p>
                        <p className="text-gray-300">Saturday - Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-12">
                    <h4 className="text-white font-medium mb-4">Connect With Us</h4>
                    <div className="flex space-x-4">
                      {socialMedia.slice(0, 4).map((platform, index) => (
                        <a 
                          key={index}
                          href={platform.url}
                          className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-accent-orange transition-colors duration-300"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={platform.name}
                        >
                          <div className="text-white" dangerouslySetInnerHTML={{ __html: platform.icon.replace('width="24" height="24"', 'width="18" height="18"') }} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Form Column */}
                <div className="p-8 lg:p-10 col-span-2">
                  <GHLForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Consultation Benefits Section */}
      <section ref={addToRefs} className="py-16 bg-gradient-to-b from-white to-gray-50 opacity-0 transition-opacity duration-1000">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1 bg-orange-100 text-accent-orange rounded-full text-sm font-medium mb-4">Free Consultation</span>
              <h2 className="heading-2 text-dark-blue mb-4">Schedule a Free Consultation</h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Take the first step toward digital marketing success by scheduling your free consultation.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 md:p-10">
                  <h3 className="text-2xl font-semibold text-dark-blue mb-6">During this session, we'll:</h3>
                  <ul className="space-y-4">
                    {consultationBenefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-accent-orange flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <a href="#contact-form" className="btn btn-primary inline-block">
                      Schedule Now
                    </a>
                  </div>
                </div>
                <div className="relative bg-gradient-to-br from-navy-blue to-dark-blue hidden lg:block">
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
                  </div>
                  <div className="absolute top-10 right-10 w-32 h-32 bg-accent-orange rounded-full opacity-20 blur-xl"></div>
                  <div className="absolute bottom-10 left-10 w-32 h-32 bg-blue-400 rounded-full opacity-20 blur-xl"></div>
                  
                  <div className="relative z-10 h-full flex items-center justify-center p-10">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-white bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">Expert Guidance</h3>
                      <p className="text-gray-300">
                        Our team of digital marketing experts will provide personalized insights and recommendations for your business.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section ref={addToRefs} className="py-16 bg-gradient-to-b from-white to-gray-50 opacity-0 transition-opacity duration-1000">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1 bg-orange-100 text-accent-orange rounded-full text-sm font-medium mb-4">Coverage</span>
              <h2 className="heading-2 text-dark-blue mb-6">Service Areas</h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Rize Digital serves businesses nationwide with our comprehensive digital marketing solutions.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent-orange opacity-5 rounded-full transform translate-x-1/4 -translate-y-1/4"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-dark-blue">Nationwide Service</h3>
                </div>
                
                <p className="text-gray-700 mb-6">
                  Rize Digital serves businesses nationwide. Our digital marketing strategies can be effectively implemented regardless of your location. We work with businesses of all sizes across the country, helping them achieve digital dominance in their respective markets.
                </p>
                
                <p className="text-gray-700 mb-6">
                  From small towns to metropolitan cities, we have a proven formula to bring you more clients.
                </p>
                
                <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-accent-orange">
                  <p className="text-gray-700 italic">
                    "Our digital-first approach means we can deliver exceptional results for clients anywhere in the United States, with the same level of service and attention to detail."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={addToRefs} className="py-16 bg-gradient-to-b from-gray-50 to-white opacity-0 transition-opacity duration-1000">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1 bg-blue-100 text-navy-blue rounded-full text-sm font-medium mb-4">Questions</span>
              <h2 className="heading-2 text-dark-blue mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Find answers to common questions about our services and approach.
              </p>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                >
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                    onClick={() => toggleFaq(index)}
                  >
                    <h3 className="text-lg font-semibold text-dark-blue">{faq.question}</h3>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-6 w-6 text-accent-orange transition-transform duration-300 ${openFaq === index ? 'transform rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  <div 
                    className={`px-6 pb-4 transition-all duration-300 ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Final CTA Section */}
      <section ref={addToRefs} className="py-16 opacity-0 transition-opacity duration-1000">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-2 text-dark-blue mb-6">Ready to Get Started?</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-10">
              Contact Rize Digital today and take the first step toward transforming your digital marketing strategy and achieving industry dominance.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#contact-form" className="btn btn-primary text-center px-8 py-3 text-lg">
                Schedule Your Consultation
              </a>
              <a href="tel:+14752644226" className="btn bg-navy-blue text-white hover:bg-blue-800 text-center px-8 py-3 text-lg">
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Connections */}
      <section ref={addToRefs} className="py-16 bg-gradient-to-b from-white to-gray-50 opacity-0 transition-opacity duration-1000">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1 bg-orange-100 text-accent-orange rounded-full text-sm font-medium mb-4">Stay Connected</span>
            <h2 className="heading-2 text-dark-blue mb-6">Connect With Us</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12">
              Follow Rize Digital on social media to stay updated on digital marketing trends, tips, and company news.
            </p>
            
            <div className="flex flex-wrap justify-center gap-8">
              {socialMedia.map((platform, index) => (
                <a 
                  key={index}
                  href={platform.url}
                  className="flex flex-col items-center group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-3 group-hover:bg-navy-blue transition-colors duration-300">
                    <div className="text-gray-600 group-hover:text-white transition-colors duration-300" dangerouslySetInnerHTML={{ __html: platform.icon }} />
                  </div>
                  <span className="text-gray-700 group-hover:text-accent-orange transition-colors duration-300">{platform.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>


   
    </>
  );
};

export default Contact;
