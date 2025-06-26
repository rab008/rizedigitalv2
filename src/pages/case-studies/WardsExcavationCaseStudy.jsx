import { Link } from 'react-router-dom';

/**
 * Ward's Excavation Case Study page component
 */
const WardsExcavationCaseStudy = () => {
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
              <span className="block">Ward's Excavation</span>
              <span className="block text-accent-orange mt-2">Targeting College Students for Heavy Equipment Operation Careers</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
              How we helped an established excavation company transform their recruitment efforts and build a sustainable pipeline of new talent.
            </p>
            
            {/* Key metrics highlight */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-12 max-w-4xl mx-auto">
              <div className="bg-white bg-opacity-10 rounded-xl p-4 md:p-6">
                <div className="text-3xl md:text-4xl font-bold text-accent-orange mb-2">215%</div>
                <div className="text-sm text-gray-300">Increase in Applications</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-xl p-4 md:p-6">
                <div className="text-3xl md:text-4xl font-bold text-accent-orange mb-2">87%</div>
                <div className="text-sm text-gray-300">Improved Completion Rate</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-xl p-4 md:p-6">
                <div className="text-3xl md:text-4xl font-bold text-accent-orange mb-2">47%</div>
                <div className="text-sm text-gray-300">Reduced Cost Per Applicant</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-xl p-4 md:p-6">
                <div className="text-3xl md:text-4xl font-bold text-accent-orange mb-2">73%</div>
                <div className="text-sm text-gray-300">Increased Engagement</div>
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
              <a href="#strategy" className="px-3 py-1 rounded text-sm text-gray-600 hover:bg-gray-100">Strategy</a>
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
                      <span><span className="font-medium">Business Name:</span> Ward's Excavation</span>
                    </li>
                    <li className="flex items-start">
                      <span><span className="font-medium">Location:</span> Connecticut</span>
                    </li>
                    <li className="flex items-start">
                      <span><span className="font-medium">Experience:</span> Over 20 years in the industry</span>
                    </li>
                    <li className="flex items-start">
                      <span><span className="font-medium">Specialization:</span> Commercial and residential excavation, land clearing, and site preparation</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-dark-blue mb-4">Training Program</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span>Heavy equipment operator training</span>
                    </li>
                    <li className="flex items-start">
                      <span>Targeting college students</span>
                    </li>
                    <li className="flex items-start">
                      <span>Hands-on practical experience</span>
                    </li>
                    <li className="flex items-start">
                      <span>Job placement opportunities</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-start">
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-dark-blue">Company Background</h4>
                    <p className="text-gray-700">Ward's Excavation has built a reputation for quality workmanship and reliability over their 20+ years in business. In addition to their core services, they've developed a training program for aspiring heavy equipment operators, particularly targeting college students interested in careers in construction and land management.</p>
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
                When Ward's Excavation approached Rize Digital, they were facing several challenges in their recruitment and training initiatives. Despite offering valuable training opportunities, they struggled to reach college students interested in heavy equipment operation careers.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-dark-blue mb-3">Key Challenges</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span>Limited awareness among target audience</span>
                    </li>
                    <li className="flex items-start">
                      <span>Messaging disconnect with younger audiences</span>
                    </li>
                    <li className="flex items-start">
                      <span>Competition against traditional college programs</span>
                    </li>
                    <li className="flex items-start">
                      <span>Seasonal recruitment cycles</span>
                    </li>
                    <li className="flex items-start">
                      <span>Lack of effective tracking for marketing channels</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-dark-blue mb-3">Goals</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span>Increase awareness among college students</span>
                    </li>
                    <li className="flex items-start">
                      <span>Develop messaging that resonates with younger audience</span>
                    </li>
                    <li className="flex items-start">
                      <span>Align recruitment efforts with college schedules</span>
                    </li>
                    <li className="flex items-start">
                      <span>Implement effective tracking for marketing channels</span>
                    </li>
                    <li className="flex items-start">
                      <span>Create a sustainable pipeline of new talent</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section id="strategy" className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 text-dark-blue mb-8">Our Strategy</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Content Reworking */}
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-dark-blue mb-3">Content Reworking and Repositioning</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span>Reframed heavy equipment operation as an exciting, well-paying career alternative</span>
                  </li>
                  <li className="flex items-start">
                    <span>Created content addressing student concerns about career stability and income potential</span>
                  </li>
                  <li className="flex items-start">
                    <span>Developed compelling stories highlighting successful young operators</span>
                  </li>
                  <li className="flex items-start">
                    <span>Emphasized benefits of learning practical skills without accumulating significant student debt</span>
                  </li>
                </ul>
              </div>
              
              {/* Digital Campaign */}
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-dark-blue mb-3">Targeted Digital Campaign Development</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span>Geo-targeted social media campaigns focusing on colleges and universities</span>
                  </li>
                  <li className="flex items-start">
                    <span>Custom Google Ads campaigns targeting career-related searches</span>
                  </li>
                  <li className="flex items-start">
                    <span>Remarketing campaigns to nurture interested prospects</span>
                  </li>
                  <li className="flex items-start">
                    <span>Seasonal campaign intensification during key academic transition periods</span>
                  </li>
                </ul>
              </div>
              
              {/* Landing Page */}
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-dark-blue mb-3">Landing Page Optimization</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span>Featured testimonials from young equipment operators</span>
                  </li>
                  <li className="flex items-start">
                    <span>Included clear information about training duration and job placement rates</span>
                  </li>
                  <li className="flex items-start">
                    <span>Showcased technology and equipment students would learn to operate</span>
                  </li>
                  <li className="flex items-start">
                    <span>Incorporated easy application forms designed to capture qualified candidates</span>
                  </li>
                </ul>
              </div>
              
              {/* Strategic Partnerships */}
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-dark-blue mb-3">Strategic Partnerships</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span>College career counselors and job placement offices</span>
                  </li>
                  <li className="flex items-start">
                    <span>Technical education programs and community colleges</span>
                  </li>
                  <li className="flex items-start">
                    <span>Veterans' organizations supporting career transitions</span>
                  </li>
                  <li className="flex items-start">
                    <span>Local workforce development agencies</span>
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
              <h3 className="text-xl font-semibold text-dark-blue mb-6">Six-Month Snapshot</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-dark-blue mb-4">Increased Program Applications</h4>
                    <ul className="space-y-4">
                      <li className="flex justify-between">
                        <span className="text-gray-600">Application Increase:</span>
                        <span className="font-semibold text-accent-orange">215%</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Completion Rate Improvement:</span>
                        <span className="font-semibold text-accent-orange">87%</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Qualified Applicant Increase:</span>
                        <span className="font-semibold text-accent-orange">64%</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg mt-6">
                    <h4 className="font-semibold text-dark-blue mb-4">Enhanced Brand Perception</h4>
                    <ul className="space-y-4">
                      <li className="flex justify-between">
                        <span className="text-gray-600">Social Media Engagement (18-24):</span>
                        <span className="font-semibold text-accent-orange">73%</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Perception Metrics Improvement:</span>
                        <span className="font-semibold text-accent-orange">Significant</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-dark-blue mb-4">Improved Recruitment Efficiency</h4>
                    <ul className="space-y-4">
                      <li className="flex justify-between">
                        <span className="text-gray-600">Cost Per Qualified Applicant:</span>
                        <span className="font-semibold text-accent-orange">-47%</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Time-to-Fill Reduction:</span>
                        <span className="font-semibold text-accent-orange">58%</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Applicant Pool Diversity:</span>
                        <span className="font-semibold text-accent-orange">Increased</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-navy-blue to-dark-blue text-white p-6 rounded-lg mt-6">
                    <h4 className="font-semibold mb-4">Long-term Business Impact</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span>Created sustainable pipeline of new talent</span>
                      </li>
                      <li className="flex items-start">
                        <span>Established as thought leader in construction industry workforce development</span>
                      </li>
                      <li className="flex items-start">
                        <span>Developed scalable recruitment model for geographic expansion</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 pt-6 border-t border-gray-200">
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-dark-blue mb-4">Client Testimonial</h4>
                  <blockquote className="text-gray-700 italic">
                    "Rize Digital completely transformed how we communicate with potential trainees. Before working with them, we struggled to connect with college students who might be interested in heavy equipment operation. Their team helped us completely rework our content and messaging to speak directly to what these young people care about – good pay, interesting work, and career stability without massive student loans. The results have been incredible. We're now seeing a steady stream of qualified applicants for our training program, and we've been able to grow our operations with this new talent pipeline."
                  </blockquote>
                  <div className="mt-4 font-medium text-dark-blue">— Michael Ward, Owner, Ward's Excavation</div>
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
            <h2 className="heading-2 text-dark-blue mb-8">Ward’s Excavation</h2>
            
            <div className="bg-gray-50 rounded-xl shadow-md overflow-hidden">
              <div className="flex flex-col">
                {/* Full width image container */}
                <div className="w-full flex justify-center p-6 bg-white">
                  <img 
                    src="/images/ward-results.jpg" 
                    alt="ward excavation Case Study" 
                    className="max-h-[400px] object-scale-down"
                  />
                </div>
                {/* Content below image */}
                <div className="p-8">
                  <p className="text-gray-700 leading-relaxed">
                    Ward’s Excavation doesn’t turn wrenches for small residential jobs, they specialize in large-scale land clearing and full site-prep projects. Our strategy zeroed in on that exact clientele. By pairing hyper-targeted SEO with laser-focused Google Ads and direct outreach to major developers, we filtered out low-value leads and landed a multi-million-dollar land-clearing and site-prep contract, plus a steady pipeline of comparable projects. The result: their crews stay booked on high-margin work perfectly matched to their heavy-equipment capabilities.
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
            <h2 className="heading-2 text-dark-blue mb-8">Key Takeaways</h2>
            
            <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
              <p className="text-gray-700 mb-6">
                This case study demonstrates the power of targeted content reworking and strategic digital marketing for specialized recruitment initiatives. By focusing on audience-centered messaging, a multi-channel approach, strategic timing, and a clear value proposition, Rize Digital helped Ward's Excavation transform their recruitment efforts and establish a sustainable pipeline of new talent for their growing business.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-dark-blue mb-3">What Made This Campaign Successful</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-accent-orange mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">Creating content that addresses specific concerns of college students</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-accent-orange mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">Reaching potential candidates through various digital touchpoints</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-accent-orange mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">Aligning recruitment efforts with academic calendars</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-accent-orange mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">Effectively communicating the benefits of alternative career paths</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-dark-blue mb-3">Applicable Strategies For Your Business</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-navy-blue mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span className="text-gray-600">Identify your unique value proposition for potential employees</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-navy-blue mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span className="text-gray-600">Develop messaging that resonates with your target audience</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-navy-blue mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span className="text-gray-600">Leverage strategic partnerships to expand your reach</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-navy-blue mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span className="text-gray-600">Implement comprehensive tracking to measure true ROI</span>
                    </li>
                  </ul>
                </div>
              </div>
              
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

export default WardsExcavationCaseStudy;
