import { Link } from 'react-router-dom';

/**
 * Bomann Fencing Case Study page component
 */
const BomannFencingCaseStudy = () => {
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
              <span className="block">Bomann Fencing</span>
              <span className="block text-accent-orange mt-2">Driving Quality Leads for Agricultural and Commercial Fencing</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
              How we helped a family-owned fencing contractor generate high-quality leads for agricultural and commercial projects while reducing wasted ad spend.
            </p>
            
            {/* Key metrics highlight */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-12 max-w-4xl mx-auto">
              <div className="bg-white bg-opacity-10 rounded-xl p-4 md:p-6">
                <div className="text-3xl md:text-4xl font-bold text-accent-orange mb-2">78%</div>
                <div className="text-sm text-gray-300">Increase in Qualified Leads</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-xl p-4 md:p-6">
                <div className="text-3xl md:text-4xl font-bold text-accent-orange mb-2">42%</div>
                <div className="text-sm text-gray-300">Decrease in Cost Per Lead</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-xl p-4 md:p-6">
                <div className="text-3xl md:text-4xl font-bold text-accent-orange mb-2">83%</div>
                <div className="text-sm text-gray-300">Increase in Project Value</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-xl p-4 md:p-6">
                <div className="text-3xl md:text-4xl font-bold text-accent-orange mb-2">53%</div>
                <div className="text-sm text-gray-300">Reduction in Wasted Ad Spend</div>
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
                      <span><span className="font-medium">Business Name:</span> Bomann Fencing</span>
                    </li>
                    <li className="flex items-start">
                      <span><span className="font-medium">Location:</span> Bonifay, Florida</span>
                    </li>
                    <li className="flex items-start">
                      <span><span className="font-medium">Service Area:</span> 100-mile radius</span>
                    </li>
                    <li className="flex items-start">
                      <span><span className="font-medium">Business Type:</span> Family-owned fencing contractor</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-dark-blue mb-4">Services Offered</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span>Agricultural fencing installation</span>
                    </li>
                    <li className="flex items-start">
                      <span>Commercial fencing solutions</span>
                    </li>
                    <li className="flex items-start">
                      <span>High-security perimeter fencing</span>
                    </li>
                    <li className="flex items-start">
                      <span>Fencing repair and maintenance</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-start">
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-dark-blue">Company Background</h4>
                    <p className="text-gray-700">Bomann Fencing is a family-owned fencing contractor specializing in agricultural and commercial fencing solutions. Based in Bonifay, Florida, they provide high-quality fencing installation and repair services within a 100-mile radius, serving both rural agricultural properties and commercial facilities.</p>
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
                When Bomann Fencing partnered with Rize Digital, they were facing several challenges with their online presence and lead generation efforts. Despite their excellent reputation and craftsmanship, they struggled to establish a strong online presence in their service area.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-dark-blue mb-3">Key Challenges</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span>Limited online visibility in service area</span>
                    </li>
                    <li className="flex items-start">
                      <span>Ineffective ad campaigns generating poor quality leads</span>
                    </li>
                    <li className="flex items-start">
                      <span>Geographic targeting issues reaching outside service radius</span>
                    </li>
                    <li className="flex items-start">
                      <span>Unclear messaging attracting residential fence inquiries</span>
                    </li>
                    <li className="flex items-start">
                      <span>Inconsistent lead flow making resource planning difficult</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-dark-blue mb-3">Goals</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span>Improve online visibility within 100-mile service radius</span>
                    </li>
                    <li className="flex items-start">
                      <span>Generate higher quality leads for agricultural and commercial projects</span>
                    </li>
                    <li className="flex items-start">
                      <span>Reduce wasted ad spend on irrelevant clicks</span>
                    </li>
                    <li className="flex items-start">
                      <span>Clarify messaging to attract target customers</span>
                    </li>
                    <li className="flex items-start">
                      <span>Create consistent lead flow for better resource planning</span>
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
              {/* Google Ads Campaign */}
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-dark-blue mb-3">Refined Google Ads Campaign Structure</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span>Separate ad groups for agricultural fencing, commercial fencing, and specialty applications</span>
                  </li>
                  <li className="flex items-start">
                    <span>Geo-targeting precisely calibrated to their 100-mile service radius</span>
                  </li>
                  <li className="flex items-start">
                    <span>Negative keywords to filter out residential fence inquiries</span>
                  </li>
                  <li className="flex items-start">
                    <span>Ad scheduling optimized for when target customers were most likely to search</span>
                  </li>
                </ul>
              </div>
              
              {/* Ad Copy Development */}
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-dark-blue mb-3">Enhanced Ad Copy Development</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span>Clearly communicated specialization in agricultural and commercial fencing</span>
                  </li>
                  <li className="flex items-start">
                    <span>Highlighted expertise with specific fencing types</span>
                  </li>
                  <li className="flex items-start">
                    <span>Emphasized 25+ years of experience serving the Florida Panhandle region</span>
                  </li>
                  <li className="flex items-start">
                    <span>Included compelling calls-to-action tailored to business customers</span>
                  </li>
                </ul>
              </div>
              
              {/* Landing Page Optimization */}
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-dark-blue mb-3">Landing Page Optimization</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span>Created dedicated landing pages for different service categories</span>
                  </li>
                  <li className="flex items-start">
                    <span>Featured case studies of farm, ranch, and commercial projects</span>
                  </li>
                  <li className="flex items-start">
                    <span>Included clear service area information and qualification questions</span>
                  </li>
                  <li className="flex items-start">
                    <span>Developed custom pages for specific fencing materials and applications</span>
                  </li>
                </ul>
              </div>
              
              {/* Conversion Tracking */}
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-dark-blue mb-3">Conversion Tracking Implementation</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span>Phone call tracking with call recording for lead quality assessment</span>
                  </li>
                  <li className="flex items-start">
                    <span>Form submission tracking with lead source attribution</span>
                  </li>
                  <li className="flex items-start">
                    <span>Conversion action setup in Google Ads for optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span>Custom reporting dashboard for transparent performance monitoring</span>
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
              <h3 className="text-xl font-semibold text-dark-blue mb-6">Three-Month Snapshot</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-dark-blue mb-4">Improved Lead Quality</h4>
                    <ul className="space-y-4">
                      <li className="flex justify-between">
                        <span className="text-gray-600">Qualified Lead Increase:</span>
                        <span className="font-semibold text-accent-orange">78%</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Out-of-Area Inquiry Reduction:</span>
                        <span className="font-semibold text-accent-orange">65%</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Average Project Value Increase:</span>
                        <span className="font-semibold text-accent-orange">83%</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg mt-6">
                    <h4 className="font-semibold text-dark-blue mb-4">Reduced Cost Per Acquisition</h4>
                    <ul className="space-y-4">
                      <li className="flex justify-between">
                        <span className="text-gray-600">Cost Per Qualified Lead:</span>
                        <span className="font-semibold text-accent-orange">-42%</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Overall Conversion Rate:</span>
                        <span className="font-semibold text-accent-orange">+37%</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Wasted Ad Spend Reduction:</span>
                        <span className="font-semibold text-accent-orange">53%</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-dark-blue mb-4">Expanded Market Reach</h4>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-accent-orange mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">Successfully penetrated new commercial markets within service area</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-accent-orange mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">Increased visibility for specialized agricultural fencing solutions</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-accent-orange mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">Established as the go-to provider for high-quality commercial fencing in the Florida Panhandle</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-navy-blue to-dark-blue text-white p-6 rounded-lg mt-6">
                    <h4 className="font-semibold mb-4">Consistent Lead Generation</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span>Stabilized lead flow allowing for better resource planning</span>
                      </li>
                      <li className="flex items-start">
                        <span>Created predictable pipeline of new business opportunities</span>
                      </li>
                      <li className="flex items-start">
                        <span>Established foundation for sustainable business growth</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 pt-6 border-t border-gray-200">
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-dark-blue mb-4">Client Testimonial</h4>
                  <blockquote className="text-gray-700 italic">
                    "Before working with Rize Digital, we were wasting money on ads that brought us residential fence inquiries we didn't want to pursue. Their team took the time to understand our business and completely transformed our online marketing. Now we're getting consistent leads for the exact type of agricultural and commercial fencing projects we specialize in, all within our service area. The quality of leads has improved dramatically, and we're able to focus on the projects that are most profitable for our business."
                  </blockquote>
                  <div className="mt-4 font-medium text-dark-blue">— John Bomann, Owner, Bomann Fencing</div>
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
            <h2 className="heading-2 text-dark-blue mb-8">Bomann Fencing</h2>
            
            <div className="bg-gray-50 rounded-xl shadow-md overflow-hidden">
              <div className="flex flex-col">
                {/* Full width image container */}
                <div className="w-full flex justify-center p-6 bg-white">
                  <img 
                    src="/rizedigitalv2/images/bomann-results.jpg" 
                    alt="Bomann Fencing Case Study" 
                    className="max-h-[400px] object-scale-down"
                  />
                </div>
                {/* Content below image */}
                <div className="p-8">
                  <p className="text-gray-700 leading-relaxed">
                    We built a full-stack growth engine for Bomann Fencing: a multi-site website to dominate every service area, GoHighLevel CRM automation to capture and nurture leads, tightly tuned Google Ads for instant traffic, and an SEO-rich content strategy that keeps them ranking. Together these pieces turn steady visitor flow into consistent agricultural-fencing sales.
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
                This case study demonstrates how strategic optimization of Google Ads campaigns can transform lead generation for specialized contractors. By focusing on precise audience targeting, clear messaging, conversion-focused landing pages, and continuous optimization, Rize Digital helped Bomann Fencing achieve not just more leads, but better-quality leads that aligned perfectly with their business goals and service capabilities.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-dark-blue mb-3">What Made This Campaign Successful</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-accent-orange mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">Reaching the right potential customers within a specific geographic area</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-accent-orange mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">Communicating specialized services effectively in ad copy</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-accent-orange mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">Creating dedicated pages that speak directly to specific customer needs</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-accent-orange mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">Refining campaigns based on performance data</span>
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
                      <span className="text-gray-600">Define your ideal customer profile and target accordingly</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-navy-blue mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span className="text-gray-600">Use negative keywords to filter out non-relevant traffic</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-navy-blue mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span className="text-gray-600">Create service-specific landing pages for better conversion</span>
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

export default BomannFencingCaseStudy;
