/**
 * CTASection component for encouraging visitors to take action
 * Can be reused across multiple pages
 * @param {Object} props - Component props
 * @param {string} props.heading - CTA heading text
 * @param {string} props.subheading - CTA subheading text
 * @param {boolean} props.showTrustBadges - Whether to show trust badges
 */
const CTASection = ({ heading, subheading, showTrustBadges = true }) => {
  // Trust badges data
  const trustBadges = [
    {
      title: "100% Satisfaction Guarantee",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>`
    },
    {
      title: "Certified Google Partner",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>`
    },
    {
      title: "Client-Focused Approach",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>`
    }
  ];

  return (
    <section className="bg-dark-blue text-white py-16">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{heading || "Ready to Elevate Your Digital Presence?"}</h2>
          <p className="text-lg text-gray-300 mb-8">{subheading || "Get in touch with our team of experts to discuss how we can help your business grow."}</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#" className="btn btn-primary text-center">Get Quote</a>
            <a href="tel:+1234567890" className="btn bg-white text-dark-blue hover:bg-gray-100 text-center">
              Call Now
            </a>
          </div>
        </div>
        
        {/* Trust Badges */}
        {showTrustBadges && (
          <div className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="text-accent-orange mb-3" dangerouslySetInnerHTML={{ __html: badge.icon }} />
                  <h3 className="font-semibold">{badge.title}</h3>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CTASection;
