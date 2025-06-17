import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';

/**
 * About page component for Rize Digital website
 * Includes company overview, team, mission, values, and more
 */
const About = () => {
  // Team members data
  const teamMembers = [
    {
      name: "John Smith",
      position: "Founder & CEO",
      bio: "With over 15 years of experience in digital marketing, John founded Rize Digital with a vision to help businesses achieve measurable growth through innovative digital strategies.",
      image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      name: "Emily Johnson",
      position: "Head of SEO",
      bio: "Emily brings 10+ years of SEO expertise, having previously worked with Fortune 500 companies to improve their search visibility and drive organic traffic growth.",
      image: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
      name: "David Chen",
      position: "Lead Web Developer",
      bio: "A full-stack developer with a passion for creating seamless user experiences, David has built over 100 websites for clients across various industries.",
      image: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
      name: "Sarah Williams",
      position: "Digital Marketing Strategist",
      bio: "Sarah specializes in creating comprehensive digital marketing strategies that align with business goals and deliver measurable results.",
      image: "https://randomuser.me/api/portraits/women/4.jpg"
    }
  ];

  // Company values data
  const companyValues = [
    {
      title: "Client Success",
      description: "We measure our success by the results we deliver for our clients. Your growth is our priority.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>`
    },
    {
      title: "Data-Driven Approach",
      description: "We base our strategies on solid data and analytics, ensuring measurable outcomes and continuous improvement.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>`
    },
    {
      title: "Transparency",
      description: "We believe in open communication and complete transparency in our processes, reporting, and pricing.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>`
    },
    {
      title: "Innovation",
      description: "We stay ahead of industry trends and continuously evolve our strategies to leverage the latest digital marketing innovations.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>`
    }
  ];

  // Milestones data
  const milestones = [
    {
      year: "2015",
      title: "Company Founded",
      description: "Rize Digital was established with a mission to help businesses grow through innovative digital marketing strategies."
    },
    {
      year: "2017",
      title: "Expanded Service Offerings",
      description: "Added comprehensive SEO, PPC, and web development services to meet growing client demands."
    },
    {
      year: "2019",
      title: "Reached 100+ Clients",
      description: "Celebrated the milestone of helping over 100 businesses achieve their digital marketing goals."
    },
    {
      year: "2021",
      title: "Industry Recognition",
      description: "Received multiple industry awards for outstanding digital marketing campaigns and client results."
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Expanded operations to serve clients internationally, with a focus on delivering results-driven strategies."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-dark-blue text-white py-16 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-1 mb-6">About Rize Digital</h1>
            <p className="text-xl text-gray-300">
              We're a team of digital marketing experts passionate about helping businesses grow through innovative strategies and data-driven solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 text-dark-blue mb-4">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2015, Rize Digital was born out of a passion for helping businesses navigate the increasingly complex digital landscape. Our founder, John Smith, recognized that many businesses were struggling to effectively leverage digital channels to grow their brands and reach new customers.
              </p>
              <p className="text-gray-600 mb-6">
                What started as a small consultancy has grown into a full-service digital marketing agency with a team of specialists across SEO, web development, content creation, and paid advertising. Throughout our journey, our mission has remained the same: to deliver measurable results that help our clients succeed in the digital world.
              </p>
              <p className="text-gray-600 mb-6">
                Today, we're proud to have worked with over 500 businesses across various industries, helping them achieve significant growth through strategic digital marketing initiatives.
              </p>
              <div className="flex items-center">
                <img 
                  src="https://randomuser.me/api/portraits/men/1.jpg" 
                  alt="John Smith, Founder" 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <blockquote className="italic text-gray-700">
                  "Our goal has always been to cut through the noise and deliver digital marketing that actually works. We're not interested in vanity metrics – we care about real business results."
                  <footer className="text-dark-blue font-semibold mt-2">- John Smith, Founder & CEO</footer>
                </blockquote>
              </div>
            </div>
            <div className="order-first lg:order-last">
              {/* Placeholder for company image */}
              <div className="bg-gray-200 rounded-lg h-96 w-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="heading-2 text-dark-blue mb-4">Our Mission & Vision</h2>
            <p className="text-gray-600">
              We're driven by a clear purpose and a bold vision for the future of digital marketing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-dark-blue mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-4">
                To empower businesses with innovative digital marketing strategies that drive measurable growth and deliver exceptional ROI.
              </p>
              <p className="text-gray-600">
                We believe that effective digital marketing should be accessible to businesses of all sizes, and we're committed to providing solutions that are both results-driven and cost-effective.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-dark-blue mb-4">Our Vision</h3>
              <p className="text-gray-600 mb-4">
                To be the most trusted digital marketing partner for businesses seeking sustainable growth in an ever-evolving digital landscape.
              </p>
              <p className="text-gray-600">
                We envision a future where businesses can navigate the complexities of digital marketing with confidence, guided by strategies that are transparent, ethical, and focused on long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="heading-2 text-dark-blue mb-4">Meet Our Team</h2>
            <p className="text-gray-600">
              Our team of digital marketing experts brings together diverse skills and experiences to deliver exceptional results for our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-dark-blue mb-1">{member.name}</h3>
                  <p className="text-accent-orange font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="heading-2 text-dark-blue mb-4">Our Core Values</h2>
            <p className="text-gray-600">
              These principles guide everything we do and shape how we work with our clients and each other.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companyValues.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md flex">
                <div className="text-accent-orange mr-6 flex-shrink-0" dangerouslySetInnerHTML={{ __html: value.icon }} />
                <div>
                  <h3 className="text-xl font-semibold text-dark-blue mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="heading-2 text-dark-blue mb-4">Our Journey</h2>
            <p className="text-gray-600">
              From our humble beginnings to where we are today, here's how Rize Digital has evolved over the years.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="md:w-1/2 mb-6 md:mb-0 md:px-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <div className="text-2xl font-bold text-accent-orange mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-dark-blue mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="md:w-1/2 flex justify-center">
                    <div className="w-8 h-8 bg-accent-orange rounded-full z-10 flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="heading-2 text-dark-blue mb-4">Our Certifications & Credentials</h2>
            <p className="text-gray-600">
              We're proud to be recognized by industry leaders and maintain the highest standards of expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Placeholder for certification logos */}
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center h-32">
              <div className="text-gray-400">Google Partner</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center h-32">
              <div className="text-gray-400">HubSpot Certified</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center h-32">
              <div className="text-gray-400">Facebook Blueprint</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center h-32">
              <div className="text-gray-400">SEMrush Certified</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-2 text-dark-blue mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600">
                Get answers to common questions about our company and services.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-dark-blue mb-3">What makes Rize Digital different from other agencies?</h3>
                <p className="text-gray-600">
                  We combine data-driven strategies with creative execution to deliver measurable results. Unlike many agencies, we focus on business outcomes rather than vanity metrics, and we're completely transparent about our processes and reporting.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-dark-blue mb-3">How do you measure the success of your campaigns?</h3>
                <p className="text-gray-600">
                  We establish clear KPIs at the beginning of each engagement, aligned with your business goals. These might include metrics like conversion rate, cost per acquisition, organic traffic growth, or revenue increase. We provide regular reports that track these metrics and demonstrate ROI.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-dark-blue mb-3">Do you work with businesses of all sizes?</h3>
                <p className="text-gray-600">
                  Yes, we work with businesses ranging from startups to enterprise-level companies. We tailor our strategies and services to meet the specific needs and budgets of each client, ensuring that businesses of all sizes can access effective digital marketing solutions.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-dark-blue mb-3">What industries do you specialize in?</h3>
                <p className="text-gray-600">
                  While we have experience across many industries, we have particular expertise in e-commerce, SaaS, professional services, healthcare, and education. However, our data-driven approach allows us to deliver results regardless of industry, as we adapt our strategies to each client's unique market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        heading="Ready to Work With Us?" 
        subheading="Get in touch to discuss how we can help your business grow through strategic digital marketing."
      />
    </>
  );
};

export default About;
