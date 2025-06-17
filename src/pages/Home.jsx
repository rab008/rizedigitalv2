import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import CTASection from '../components/CTASection';

/**
 * Home page component for Rize Digital website
 * Includes hero section, services, testimonials, and CTA
 */
const Home = () => {
  // Services data
  const services = [
    {
      title: "Website Development",
      description: "Custom, responsive websites designed to convert visitors into customers. We focus on user experience, performance, and SEO-friendly code.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>`,
      link: "/services/web-development"
    },
    {
      title: "SEO",
      description: "Improve your search engine rankings and drive organic traffic with our data-driven SEO strategies tailored to your business goals.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
      </svg>`,
      link: "/services/seo"
    },
    {
      title: "Copywriting",
      description: "Compelling content that speaks to your audience and drives action. Our copywriters craft messages that resonate and convert.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>`,
      link: "/services/copywriting"
    },
    {
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies that increase brand awareness, engage your audience, and drive measurable results.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>`,
      link: "/services/digital-marketing"
    },
    {
      title: "PPC Advertising",
      description: "Targeted pay-per-click campaigns that maximize your ROI. We create, manage, and optimize ads that reach your ideal customers.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
      </svg>`,
      link: "/services/ppc"
    },
    {
      title: "Google Ads",
      description: "Expert Google Ads management to drive qualified traffic and increase conversions. We optimize your campaigns for maximum performance.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>`,
      link: "/services/google-ads"
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
      <section className="bg-dark-blue text-white py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="heading-1 mb-6">
                Elevate Your Digital Presence with Strategic Marketing Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                We help businesses grow through innovative digital marketing strategies, 
                custom web development, and data-driven SEO campaigns.
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
                <p className="text-gray-300 mr-4">Trusted by leading brands:</p>
                <div className="flex space-x-6">
                  {/* Placeholder for client logos */}
                  <div className="h-8 w-16 bg-gray-700 rounded opacity-70"></div>
                  <div className="h-8 w-16 bg-gray-700 rounded opacity-70"></div>
                  <div className="h-8 w-16 bg-gray-700 rounded opacity-70"></div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              {/* Placeholder for hero image */}
              <div className="bg-navy-blue rounded-lg h-96 w-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-accent-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-dark-blue mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of digital marketing services to help your business 
              thrive in the digital landscape. Each service is tailored to your specific needs and goals.
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
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 text-dark-blue mb-4">Digital Marketing Agency That Drives Results</h2>
              <p className="text-gray-600 mb-6">
                At Rize Digital, we're more than just a digital marketing agency. We're your strategic partner 
                in navigating the complex digital landscape and achieving measurable business growth.
              </p>
              <p className="text-gray-600 mb-6">
                Our team of experts combines creativity with data-driven strategies to deliver solutions 
                that not only look great but also perform exceptionally well.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-accent-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Data-driven strategies tailored to your business goals</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-accent-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Experienced team of digital marketing specialists</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-accent-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Proven track record of delivering results</span>
                </li>
              </ul>
              <Link to="/about" className="btn btn-primary">
                Learn More About Us
              </Link>
            </div>
            <div className="order-first lg:order-last">
              {/* Placeholder for about image */}
              <div className="bg-gray-200 rounded-lg h-96 w-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
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
      <section className="py-16">
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
