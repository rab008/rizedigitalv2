import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import CTASection from '../components/CTASection';
import GHLForm from '../components/GHLForm';
import { useEffect, useRef } from 'react';

/**
 * Home page component for Rize Digital website
 * Includes hero section, services, testimonials, and CTA
 */
const Home = () => {
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
  // Services data
  const services = [
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
      title: "Email Marketing",
      description: "Strategic email campaigns that convert prospects, engage customers, and drive revenue. Our data-driven approach delivers personalized customer journeys with measurable results.",
      icon: ` <img 
                  src="/rizedigitalv2/images/exclusive_partner_icon.jpg" 
                  alt="email marketing" 
                  className="rounded-lg"
                />`,
      link: "/services/email-marketing"
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
      {/* Hero Section */}
      <section ref={addToRefs} className="bg-dark-blue text-white py-16 md:py-24 opacity-0 transition-opacity duration-1000">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="heading-1 mb-6">
                We Take Service Businesses to the Next Level
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                We help businesses prepare for the next generation of internet with innovative digital marketing strategies, AI business automations,  custom web development, and data-driven SEO campaigns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn btn-primary text-center">
                  Get Started
                </Link>
                <Link to="/services" className="btn bg-transparent border border-white hover:bg-white hover:text-dark-blue transition-colors text-center">
                  Our Services
                </Link>
              </div>
              <div className="mt-8 flex items-center">
                <div className="flex space-x-6">
                  {/* Placeholder for client logos */}
                    <img 
                      src="/rizedigitalv2/images/google_review_5_start.webp" 
                      alt="Google 5 star rating" 
                      className="rounded opacity-70 h-12"
                    />
                </div>
              </div>
            </div>
           <GHLForm />
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
          
          <div className="text-center mt-12">
            <Link to="/services" className="btn btn-secondary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section ref={addToRefs} className="py-16 opacity-0 transition-opacity duration-1000">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 text-dark-blue mb-4">Full Stack Digital Marketing Solutions For Your Unique Business Needs</h2>
              <p className="text-gray-600 mb-6">
                Are you ready to transform your digital presence? At Rize Digital, we’re not just a marketing agency—we’re your growth partner. Our team blends creativity with data-driven strategies to deliver solutions that don’t just look great—they drive real results. From boosting traffic to increasing conversions, we’ve got you covered.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-accent-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Customized marketing plans aligned with your unique goals</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-accent-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>A team with over 10 years of average industry experience</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-accent-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Proven results, like a 30% average ROI increase in six months</span>
                </li>
              </ul>
              <Link to="/about" className="btn btn-primary">
                Get Your Free Marketing Assessment
              </Link>
            </div>
            <div className="order-first lg:order-last">
              {/* Placeholder for about image */}
                <img 
                  src="/rizedigitalv2/images/Infographic_Graphic_Organizer.jpg" 
                  alt="team collaboration" 
                  className="rounded-lg"
                />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={addToRefs} className="py-16 bg-gray-50 opacity-0 transition-opacity duration-1000">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-dark-blue mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with Rize Digital.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                position={testimonial.position}
                company={testimonial.company}
                image={testimonial.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={addToRefs} className="py-16 opacity-0 transition-opacity duration-1000">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-orange mb-2">500+</div>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-orange mb-2">98%</div>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-orange mb-2">10+</div>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-orange mb-2">250%</div>
              <p className="text-gray-600">Average ROI</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
};

export default Home;
