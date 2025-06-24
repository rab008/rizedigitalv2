import { useEffect, useRef } from 'react';
import CTASection from '../components/CTASection';

/**
 * Terms and Conditions page component
 * Contains the legal terms and conditions for using the Rize Digital website and services
 */
const TermsAndConditions = () => {
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
              <span className="block">Terms and Conditions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
              Please read these terms carefully before using our services
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
                Welcome to Rize Digital. These Terms and Conditions govern your use of our website located at <span className="text-navy-blue">rizedigital.io</span> and any related services provided by Rize Digital.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                By accessing our website or using our services, you agree to abide by these Terms and Conditions and to comply with all applicable laws and regulations. If you do not agree with these Terms and Conditions, you are prohibited from using or accessing this website or using any other services provided by Rize Digital.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We, Rize Digital, reserve the right to review and amend any of these Terms and Conditions at our sole discretion. Upon doing so, we will update this page and notify you through the email address you provided. Any changes to these Terms and Conditions will take effect immediately from the date of publication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Sections */}
      <section ref={addToRefs} className="py-16 bg-gray-50 opacity-0 transition-opacity duration-1000">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {/* Acceptance of Terms */}
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h2 className="text-2xl font-semibold text-dark-blue mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  By accessing and using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you are entering into this agreement on behalf of a business or other legal entity, you represent that you have the authority to bind such entity to these Terms and Conditions.
                </p>
              </div>

              {/* Use of Services */}
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h2 className="text-2xl font-semibold text-dark-blue mb-4">2. Use of Services</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The content of this website is for your general information and use only. It is subject to change without prior notice.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You agree to use our website and services only for lawful purposes and in a way that does not infringe upon the rights of others or restrict or inhibit anyone else's use and enjoyment of the website and services.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Prohibited behavior includes but is not limited to:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li>Using the website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website</li>
                  <li>Using the website in any way that is unlawful, illegal, fraudulent, or harmful</li>
                  <li>Using the website for any purpose that is prohibited by these terms of use</li>
                  <li>Conducting any systematic or automated data collection activities on or in relation to our website without our express written consent</li>
                  <li>Using data collected from our website for any direct marketing activity</li>
                </ul>
              </div>

              {/* Intellectual Property */}
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h2 className="text-2xl font-semibold text-dark-blue mb-4">3. Intellectual Property Rights</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Unless otherwise stated, we or our licensors own the intellectual property rights in the website and material on the website. Subject to the license below, all these intellectual property rights are reserved.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You may view, download, and print pages from the website for your own personal use, subject to the restrictions set out below and elsewhere in these Terms and Conditions.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You must not:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li>Republish material from this website (including republication on another website)</li>
                  <li>Sell, rent, or sub-license material from the website</li>
                  <li>Reproduce, duplicate, copy or otherwise exploit material on our website for a commercial purpose</li>
                  <li>Redistribute material from this website except for content specifically and expressly made available for redistribution</li>
                </ul>
              </div>

              {/* User Content */}
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h2 className="text-2xl font-semibold text-dark-blue mb-4">4. User Content</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  In these Terms and Conditions, "your content" means any text, images, or other material you submit to our website, for whatever purpose. You grant to us a worldwide, irrevocable, non-exclusive, royalty-free license to use, reproduce, adapt, publish, translate, and distribute your content in any existing or future media. You also grant to us the right to sub-license these rights, and the right to bring an action for infringement of these rights.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Your content must not be illegal or unlawful, must not infringe any third party's legal rights, and must not be capable of giving rise to legal action whether against you or us or a third party.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We reserve the right to edit or remove any material submitted to our website, or stored on our servers, or hosted or published upon our website.
                </p>
              </div>

              {/* Limitation of Liability */}
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h2 className="text-2xl font-semibold text-dark-blue mb-4">5. Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website (including, without limitation, any warranties implied by law in respect of satisfactory quality, fitness for purpose, and/or the use of reasonable care and skill).
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Nothing in these Terms and Conditions will:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li>Limit or exclude our or your liability for death or personal injury resulting from negligence</li>
                  <li>Limit or exclude our or your liability for fraud or fraudulent misrepresentation</li>
                  <li>Limit any of our or your liabilities in any way that is not permitted under applicable law</li>
                  <li>Exclude any of our or your liabilities that may not be excluded under applicable law</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The limitations and exclusions of liability set out in this Section and elsewhere in these Terms and Conditions:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li>Are subject to the preceding paragraph</li>
                  <li>Govern all liabilities arising under these Terms and Conditions or relating to the subject matter of these Terms and Conditions, including liabilities arising in contract, in tort (including negligence), and for breach of statutory duty</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  To the extent that the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.
                </p>
              </div>

              {/* Indemnification */}
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h2 className="text-2xl font-semibold text-dark-blue mb-4">6. Indemnification</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You hereby indemnify us and undertake to keep us indemnified against any losses, damages, costs, liabilities, and expenses (including, without limitation, legal expenses and any amounts paid by us to a third party in settlement of a claim or dispute on the advice of our legal advisers) incurred or suffered by us arising out of any breach by you of any provision of these Terms and Conditions, or arising out of any claim that you have breached any provision of these Terms and Conditions.
                </p>
              </div>

              {/* Breaches of Terms */}
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h2 className="text-2xl font-semibold text-dark-blue mb-4">7. Breaches of These Terms and Conditions</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Without prejudice to our other rights under these Terms and Conditions, if you breach these Terms and Conditions in any way, we may take such action as we deem appropriate to deal with the breach, including suspending your access to the website, prohibiting you from accessing the website, blocking computers using your IP address from accessing the website, contacting your internet service provider to request that they block your access to the website, and/or bringing court proceedings against you.
                </p>
              </div>

              {/* Variation */}
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h2 className="text-2xl font-semibold text-dark-blue mb-4">8. Variation</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may revise these Terms and Conditions from time to time. The revised Terms and Conditions shall apply to the use of our website from the date of publication of the revised Terms and Conditions on our website. Please check this page regularly to ensure you are familiar with the current version.
                </p>
              </div>

              {/* Assignment */}
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h2 className="text-2xl font-semibold text-dark-blue mb-4">9. Assignment</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may transfer, sub-contract, or otherwise deal with our rights and/or obligations under these Terms and Conditions without notifying you or obtaining your consent.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You may not transfer, sub-contract, or otherwise deal with your rights and/or obligations under these Terms and Conditions.
                </p>
              </div>

              {/* Severability */}
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h2 className="text-2xl font-semibold text-dark-blue mb-4">10. Severability</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If a provision of these Terms and Conditions is determined by any court or other competent authority to be unlawful and/or unenforceable, the other provisions will continue in effect. If any unlawful and/or unenforceable provision would be lawful or enforceable if part of it were deleted, that part will be deemed to be deleted, and the rest of the provision will continue in effect.
                </p>
              </div>

              {/* Entire Agreement */}
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h2 className="text-2xl font-semibold text-dark-blue mb-4">11. Entire Agreement</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  These Terms and Conditions, together with our Privacy Policy, constitute the entire agreement between you and us in relation to your use of our website and supersede all previous agreements in respect of your use of this website.
                </p>
              </div>

              {/* Governing Law */}
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h2 className="text-2xl font-semibold text-dark-blue mb-4">12. Governing Law and Jurisdiction</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  These Terms and Conditions will be governed by and construed in accordance with the laws of the United States, and any disputes relating to these Terms and Conditions will be subject to the exclusive jurisdiction of the courts of the United States.
                </p>
              </div>

              {/* Contact Information */}
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h2 className="text-2xl font-semibold text-dark-blue mb-4">13. Contact Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have any questions about these Terms and Conditions, please contact us at:
                </p>
                <p className="text-navy-blue font-medium">Ask@rizedigital.io</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        heading="Have Questions About Our Terms?" 
        subheading="Our team is here to help you understand our policies and answer any questions you may have."
      />
    </>
  );
};

export default TermsAndConditions;
