import { useEffect, useRef } from 'react';
import CTASection from '../components/CTASection';

/**
 * Privacy Policy page component
 * Contains the privacy policy for the Rize Digital website and services
 */
const PrivacyPolicy = () => {
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

  // Last updated date
  const lastUpdated = "June 25, 2025";

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
              <span className="block">Privacy Policy</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
              How we collect, use, and protect your information
            </p>
            <p className="text-gray-300">Last Updated: {lastUpdated}</p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section ref={addToRefs} className="py-16 bg-white opacity-0 transition-opacity duration-1000">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-dark-blue mb-4">Introduction</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                At Rize Digital, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                This privacy policy aims to give you information on how Rize Digital collects and processes your personal data through your use of this website, including any data you may provide through this website when you sign up for our newsletter, request a quote, or use our contact form.
              </p>
              <p className="text-gray-700 leading-relaxed">
                It is important that you read this privacy policy together with any other privacy policy or fair processing notice we may provide on specific occasions when we are collecting or processing personal data about you so that you are fully aware of how and why we are using your data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Sections */}
      <section ref={addToRefs} className="py-16 bg-gray-50 opacity-0 transition-opacity duration-1000">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {/* Information We Collect */}
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h2 className="text-2xl font-semibold text-dark-blue mb-4">1. Information We Collect</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li><span className="font-medium">Identity Data</span> includes first name, last name, username or similar identifier, title.</li>
                  <li><span className="font-medium">Contact Data</span> includes billing address, delivery address, email address and telephone numbers.</li>
                  <li><span className="font-medium">Technical Data</span> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                  <li><span className="font-medium">Usage Data</span> includes information about how you use our website, products and services.</li>
                  <li><span className="font-medium">Marketing and Communications Data</span> includes your preferences in receiving marketing from us and our third parties and your communication preferences.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We also collect, use and share Aggregated Data such as statistical or demographic data for any purpose. Aggregated Data could be derived from your personal data but is not considered personal data in law as this data will not directly or indirectly reveal your identity.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We do not collect any Special Categories of Personal Data about you (this includes details about your race or ethnicity, religious or philosophical beliefs, sex life, sexual orientation, political opinions, trade union membership, information about your health, and genetic and biometric data). Nor do we collect any information about criminal convictions and offenses.
                </p>
              </div>

              {/* How We Collect Your Data */}
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h2 className="text-2xl font-semibold text-dark-blue mb-4">2. How We Collect Your Data</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use different methods to collect data from and about you including through:
                </p>
                <h3 className="text-xl font-medium text-dark-blue mb-2">Direct interactions</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You may give us your Identity and Contact Data by filling in forms or by corresponding with us by post, phone, email or otherwise. This includes personal data you provide when you:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>Request a quote or consultation</li>
                  <li>Subscribe to our newsletter or publications</li>
                  <li>Request marketing to be sent to you</li>
                  <li>Enter a competition, promotion or survey</li>
                  <li>Give us feedback or contact us</li>
                </ul>

                <h3 className="text-xl font-medium text-dark-blue mb-2">Automated technologies or interactions</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  As you interact with our website, we will automatically collect Technical Data about your equipment, browsing actions and patterns. We collect this personal data by using cookies, server logs and other similar technologies.
                </p>

                <h3 className="text-xl font-medium text-dark-blue mb-2">Third parties or publicly available sources</h3>
                <p className="text-gray-700 leading-relaxed">
                  We may receive personal data about you from various third parties and public sources such as analytics providers, advertising networks, and search information providers.
                </p>
              </div>

              {/* How We Use Your Data */}
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h2 className="text-2xl font-semibold text-dark-blue mb-4">3. How We Use Your Data</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                  <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                  <li>Where we need to comply with a legal obligation.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Generally, we do not rely on consent as a legal basis for processing your personal data although we will get your consent before sending third party direct marketing communications to you via email or text message. You have the right to withdraw consent to marketing at any time by contacting us.
                </p>
                <h3 className="text-xl font-medium text-dark-blue mb-2">Purposes for which we will use your personal data</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We have set out below, in a table format, a description of all the ways we plan to use your personal data, and which of the legal bases we rely on to do so.
                </p>
                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="py-3 px-4 border-b text-left">Purpose/Activity</th>
                        <th className="py-3 px-4 border-b text-left">Type of data</th>
                        <th className="py-3 px-4 border-b text-left">Lawful basis for processing</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-3 px-4 border-b">To register you as a new customer</td>
                        <td className="py-3 px-4 border-b">Identity, Contact</td>
                        <td className="py-3 px-4 border-b">Performance of a contract with you</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 border-b">To process and deliver your order</td>
                        <td className="py-3 px-4 border-b">Identity, Contact, Financial, Transaction, Marketing and Communications</td>
                        <td className="py-3 px-4 border-b">Performance of a contract with you, Necessary for our legitimate interests</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 border-b">To manage our relationship with you</td>
                        <td className="py-3 px-4 border-b">Identity, Contact, Profile, Marketing and Communications</td>
                        <td className="py-3 px-4 border-b">Performance of a contract with you, Necessary to comply with a legal obligation, Necessary for our legitimate interests</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 border-b">To administer and protect our business and this website</td>
                        <td className="py-3 px-4 border-b">Identity, Contact, Technical</td>
                        <td className="py-3 px-4 border-b">Necessary for our legitimate interests, Necessary to comply with a legal obligation</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 border-b">To deliver relevant website content and advertisements to you</td>
                        <td className="py-3 px-4 border-b">Identity, Contact, Profile, Usage, Marketing and Communications, Technical</td>
                        <td className="py-3 px-4 border-b">Necessary for our legitimate interests</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h3 className="text-xl font-medium text-dark-blue mb-2">Marketing</h3>
                <p className="text-gray-700 leading-relaxed">
                  We strive to provide you with choices regarding certain personal data uses, particularly around marketing and advertising. You can opt-out of marketing communications at any time by clicking the "unsubscribe" link in any email we send you or by contacting us directly.
                </p>
              </div>

              {/* Data Sharing */}
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h2 className="text-2xl font-semibold text-dark-blue mb-4">4. Disclosure of Your Personal Data</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may share your personal data with the parties set out below for the purposes set out in the table above.
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li>Internal Third Parties: Other companies in the Rize Digital Group acting as joint controllers or processors.</li>
                  <li>External Third Parties: Service providers acting as processors who provide IT and system administration services, professional advisers including lawyers, bankers, auditors and insurers, and regulatory authorities.</li>
                  <li>Third parties to whom we may choose to sell, transfer or merge parts of our business or our assets. Alternatively, we may seek to acquire other businesses or merge with them. If a change happens to our business, then the new owners may use your personal data in the same way as set out in this privacy policy.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  We require all third parties to respect the security of your personal data and to treat it in accordance with the law. We do not allow our third-party service providers to use your personal data for their own purposes and only permit them to process your personal data for specified purposes and in accordance with our instructions.
                </p>
              </div>

              {/* Data Security */}
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h2 className="text-2xl font-semibold text-dark-blue mb-4">5. Data Security</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know. They will only process your personal data on our instructions and they are subject to a duty of confidentiality.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We have put in place procedures to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.
                </p>
              </div>

              {/* Data Retention */}
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h2 className="text-2xl font-semibold text-dark-blue mb-4">6. Data Retention</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting requirements. We may retain your personal data for a longer period in the event of a complaint or if we reasonably believe there is a prospect of litigation in respect to our relationship with you.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  To determine the appropriate retention period for personal data, we consider the amount, nature and sensitivity of the personal data, the potential risk of harm from unauthorized use or disclosure of your personal data, the purposes for which we process your personal data and whether we can achieve those purposes through other means, and the applicable legal, regulatory, tax, accounting or other requirements.
                </p>
              </div>

              {/* Your Legal Rights */}
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h2 className="text-2xl font-semibold text-dark-blue mb-4">7. Your Legal Rights</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Under certain circumstances, you have rights under data protection laws in relation to your personal data. These include the right to:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li><span className="font-medium">Request access</span> to your personal data.</li>
                  <li><span className="font-medium">Request correction</span> of your personal data.</li>
                  <li><span className="font-medium">Request erasure</span> of your personal data.</li>
                  <li><span className="font-medium">Object to processing</span> of your personal data.</li>
                  <li><span className="font-medium">Request restriction of processing</span> your personal data.</li>
                  <li><span className="font-medium">Request transfer</span> of your personal data.</li>
                  <li><span className="font-medium">Right to withdraw consent</span> where we are relying on consent to process your personal data.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you wish to exercise any of the rights set out above, please contact us. You will not have to pay a fee to access your personal data (or to exercise any of the other rights). However, we may charge a reasonable fee if your request is clearly unfounded, repetitive or excessive. Alternatively, we could refuse to comply with your request in these circumstances.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We may need to request specific information from you to help us confirm your identity and ensure your right to access your personal data (or to exercise any of your other rights). This is a security measure to ensure that personal data is not disclosed to any person who has no right to receive it. We may also contact you to ask you for further information in relation to your request to speed up our response.
                </p>
              </div>

              {/* Cookies */}
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h2 className="text-2xl font-semibold text-dark-blue mb-4">8. Cookies</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A cookie is a small file of letters and numbers that we store on your browser or the hard drive of your computer if you agree. Cookies contain information that is transferred to your computer's hard drive.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use the following cookies:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li><span className="font-medium">Strictly necessary cookies.</span> These are cookies that are required for the operation of our website.</li>
                  <li><span className="font-medium">Analytical or performance cookies.</span> These allow us to recognize and count the number of visitors and to see how visitors move around our website when they are using it. This helps us to improve the way our website works, for example, by ensuring that users are finding what they are looking for easily.</li>
                  <li><span className="font-medium">Functionality cookies.</span> These are used to recognize you when you return to our website. This enables us to personalize our content for you, greet you by name and remember your preferences.</li>
                  <li><span className="font-medium">Targeting cookies.</span> These cookies record your visit to our website, the pages you have visited and the links you have followed. We will use this information to make our website and the advertising displayed on it more relevant to your interests.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
                </p>
              </div>

              {/* Changes to Privacy Policy */}
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h2 className="text-2xl font-semibold text-dark-blue mb-4">9. Changes to the Privacy Policy</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may update this privacy policy from time to time. We will notify you of significant changes by posting the new privacy policy on this page and, where feasible, by sending you a notification about the changes.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  You are advised to review this privacy policy periodically for any changes. Changes to this privacy policy are effective when they are posted on this page.
                </p>
              </div>

              {/* Contact Information */}
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h2 className="text-2xl font-semibold text-dark-blue mb-4">10. Contact Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have any questions about this privacy policy or our privacy practices, please contact us at:
                </p>
                <p className="text-navy-blue font-medium mb-2">Email: Ask@rizedigital.io</p>
                <p className="text-navy-blue font-medium mb-2">Phone: (475) 264-4226</p>
                <p className="text-navy-blue font-medium">Address: 123 Digital Avenue, Tech City, 12345</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        heading="Have Questions About Our Privacy Practices?" 
        subheading="Our team is here to help you understand how we protect your data and answer any questions you may have."
      />
    </>
  );
};

export default PrivacyPolicy;
