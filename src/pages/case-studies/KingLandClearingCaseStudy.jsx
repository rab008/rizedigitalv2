import { Link } from 'react-router-dom';
/**
 * King Land Clearing Case Study page component
 */
const KingLandClearingCaseStudy = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-dark-blue to-dark-blue text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-1 bg-accent-orange bg-opacity-20 rounded-full text-accent-orange text-sm font-medium mb-4">
              Case Study
            </div>
            <h1 className="heading-1 mb-6">
              <span className="block">King Land Clearing</span>
              <span className="block text-accent-orange mt-2">Regional SEO and PPC Growth</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
              How we helped a new land clearing company generate over 1,300 leads and secure a $600,000 contract through strategic SEO and targeted PPC campaigns.
            </p>
            
            {/* Key metrics highlight */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-12 max-w-4xl mx-auto">
              <div className="bg-white bg-opacity-10 rounded-xl p-4 md:p-6">
                <div className="text-3xl md:text-4xl font-bold text-accent-orange mb-2">1,300+</div>
                <div className="text-sm text-gray-300">Total Leads</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-xl p-4 md:p-6">
                <div className="text-3xl md:text-4xl font-bold text-accent-orange mb-2">~325</div>
                <div className="text-sm text-gray-300">Closed Jobs</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-xl p-4 md:p-6">
                <div className="text-3xl md:text-4xl font-bold text-accent-orange mb-2">$12,500</div>
                <div className="text-sm text-gray-300">Avg. Ticket</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-xl p-4 md:p-6">
                <div className="text-3xl md:text-4xl font-bold text-accent-orange mb-2">$4M+</div>
                <div className="text-sm text-gray-300">Revenue</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="sticky top-16 z-40 bg-white shadow-md py-3 border-b border-gray-200">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium text-gray-500 hidden md:block">Jump to:</div>
            <nav className="flex items-center space-x-4 overflow-x-auto py-1 w-full md:w-auto">
              <a href="#overview" className="px-3 py-1 rounded text-sm bg-accent-orange text-white">Overview</a>
              <a href="#challenge" className="px-3 py-1 rounded text-sm text-gray-600 hover:bg-gray-100">Challenge</a>
              <a href="#solution" className="px-3 py-1 rounded text-sm text-gray-600 hover:bg-gray-100">Solution</a>
              <a href="#results" className="px-3 py-1 rounded text-sm text-gray-600 hover:bg-gray-100">Results</a>
              <a href="#conclusion" className="px-3 py-1 rounded text-sm text-gray-600 hover:bg-gray-100">Conclusion</a>
            </nav>
            <div className="hidden md:block">
              <Link to="/case-study" className="text-sm text-navy-blue hover:text-accent-orange flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Case Studies
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Client Overview Section */}
      <section id="overview" className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 text-dark-blue mb-8">Client Overview</h2>
            
            <div className="bg-gray-50 rounded-xl p-8 shadow-sm mb-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-dark-blue mb-4">Business Profile</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span><span className="font-medium">Business Name:</span> King Land Clearing</span>
                    </li>
                    <li className="flex items-start">
                      <span><span className="font-medium">Websites:</span> kinglandclearing.com & kinglandclearingsc.com</span>
                    </li>
                    <li className="flex items-start">
                      <span><span className="font-medium">Location:</span> Jacksonville, NC</span>
                    </li>
                    <li className="flex items-start">
                      <span><span className="font-medium">Service Area:</span> North and South Carolina</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-dark-blue mb-4">Services Offered</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span>Land clearing</span>
                    </li>
                    <li className="flex items-start">
                      <span>Grading</span>
                    </li>
                    <li className="flex items-start">
                      <span>Brush removal</span>
                    </li>
                    <li className="flex items-start">
                      <span>Forestry mulching</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-start">
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-dark-blue">Notable Achievement</h4>
                    <p className="text-gray-700">Secured a <span className="font-bold text-accent-orange">$600,000</span> hazard fuel reduction & wildlife rehabilitation project within the first year of our marketing partnership.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section id="challenge" className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 text-dark-blue mb-8">The Challenge</h2>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <p className="text-gray-600 mb-6">
                King Land Clearing was a new company entering a competitive market with established players. They had been relying on lead generation platforms like Angie's List and HomeAdvisor, but were experiencing poor return on investment from these sources.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-dark-blue mb-3">Key Challenges</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span>New company in competitive market</span>
                    </li>
                    <li className="flex items-start">
                      <span>No in-house web or SEO team</span>
                    </li>
                    <li className="flex items-start">
                      <span>Poor ROI from lead platforms</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-dark-blue mb-3">Goals</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span>Generate organic leads within 6 months</span>
                    </li>
                    <li className="flex items-start">
                      <span>Improve regional visibility on a budget</span>
                    </li>
                    <li className="flex items-start">
                      <span>Establish quick lead flow and long-term positioning</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 text-dark-blue mb-8">Our Solution</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Website Build */}
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-dark-blue mb-3">Website Build</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span>High-performance sites using Oxygen Builder</span>
                  </li>
                  <li className="flex items-start">
                    <span>City-targeted landing pages</span>
                  </li>
                  <li className="flex items-start">
                    <span>Scalable structure replicated for SC site</span>
                  </li>
                </ul>
              </div>
              
              {/* Local SEO */}
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-dark-blue mb-3">Local SEO</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span>Targeted cities with populations over 10,000</span>
                  </li>
                  <li className="flex items-start">
                    <span>Focused on land clearing, bush hogging, and grading content</span>
                  </li>
                </ul>
              </div>
              
              {/* Google Ads */}
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-dark-blue mb-3">Google Ads Boost</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span>2-month campaign at ~$400/month</span>
                  </li>
                  <li className="flex items-start">
                    <span>Over 200 immediate leads while SEO gained traction</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 text-dark-blue mb-8">Results Summary</h2>
            
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-xl font-semibold text-dark-blue mb-6">16-Month Snapshot</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-dark-blue mb-4">Key Performance Metrics</h4>
                    <ul className="space-y-4">
                      <li className="flex justify-between">
                        <span className="text-gray-600">Total Leads:</span>
                        <span className="font-semibold text-accent-orange">1,300+</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Projected Closed Jobs (25%):</span>
                        <span className="font-semibold text-accent-orange">~325</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Average Ticket:</span>
                        <span className="font-semibold text-accent-orange">$12,500</span>
                      </li>
                      <li className="flex justify-between border-t border-gray-200 pt-4 mt-4">
                        <span className="text-gray-600 font-medium">Revenue Generated:</span>
                        <span className="font-bold text-accent-orange">$4,062,500+</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <div className="bg-gradient-to-br from-navy-blue to-dark-blue text-white p-6 rounded-lg">
                    <h4 className="font-semibold mb-4">What Makes This Case Impressive</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span>Grew from 0 to 1,300+ leads in under 16 months</span>
                      </li>
                      <li className="flex items-start">
                        <span>10X increase in impressions in under a year</span>
                      </li>
                      <li className="flex items-start">
                        <span>Delivered a $600,000 lead within the first year</span>
                      </li>
                      <li className="flex items-start">
                        <span>All done with under $1,000 in paid ads</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Showcase Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 text-dark-blue mb-8">King Land Clearing</h2>
            
            <div className="bg-gray-50 rounded-xl shadow-md overflow-hidden">
              <div className="flex flex-col">
                {/* Full width image container */}
                <div className="w-full flex justify-center p-6 bg-white">
                  <img 
                    src="/images/kING-RESULTS.jpg" 
                    alt="King Land Clearing Results" 
                    className="max-h-[400px] object-scale-down"
                  />
                </div>
                {/* Content below image */}
                <div className="p-8">
                  <p className="text-gray-700 leading-relaxed">
                    Last year our targeted campaign secured ten high-value, net-30 projects for King Land Clearing, together worth more than $10 million in quoted revenue. By pairing precision-built landing pages with data-driven Google Ads, we kept their crews booked with profitable commercial contracts and proved the impact of focused lead generation.
                  </p>
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-accent-orange rounded-full flex items-center justify-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h4 className="font-semibold text-dark-blue">Proven Results</h4>
                        <p className="text-gray-600 text-sm">Measurable impact through strategic digital marketing</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section id="conclusion" className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 text-dark-blue mb-8">Conclusion</h2>
            
            <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
              <p className="text-gray-700 mb-6">
                King Land Clearing proves that a sharp, localized SEO and landing page strategy can go head-to-head with national lead platforms — and win. Through smart build-outs, intentional Google Ads usage, and rigorous SEO, this business captured over 1,300 leads, scaled to multiple states, and converted one of those leads into a six-figure contract.
              </p>
              <p className="text-gray-700 mb-6">
                This case makes a strong argument for regional operators to invest in sustainable, owned lead generation infrastructure — not just third-party listing sites.
              </p>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex justify-center">
                  <Link to="/contact" className="btn btn-primary">
                    Get Similar Results For Your Business
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

export default KingLandClearingCaseStudy;
