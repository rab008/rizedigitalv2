import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Enhanced StructuredData component for adding schema.org JSON-LD to pages
 * Supports multiple schema types and provides comprehensive structured data
 * 
 * @param {Object} props - Component props
 * @param {string} props.type - Schema.org type (e.g., 'WebPage', 'Article', 'Service', 'LocalBusiness', etc.)
 * @param {Object} props.data - Custom data for the structured data
 * @param {boolean} props.addBreadcrumbs - Whether to add breadcrumbs structured data
 * @param {Array} props.breadcrumbs - Array of breadcrumb items [{name: 'Home', url: '/'}, ...]
 * @param {Array} props.faq - Array of FAQ items [{question: 'Q?', answer: 'A'}, ...]
 */
const StructuredData = ({ 
  type = 'WebPage', 
  data = {},
  addBreadcrumbs = false,
  breadcrumbs = [],
  faq = []
}) => {
  const location = useLocation();
  const currentUrl = `https://rizedigital.com${location.pathname}`;
  
  useEffect(() => {
    // Remove any existing JSON-LD scripts with the same ID
    const existingScript = document.getElementById('structured-data-script');
    if (existingScript) {
      document.head.removeChild(existingScript);
    }
    
    // Remove any existing breadcrumbs JSON-LD
    const existingBreadcrumbsScript = document.getElementById('breadcrumbs-structured-data');
    if (existingBreadcrumbsScript) {
      document.head.removeChild(existingBreadcrumbsScript);
    }
    
    // Remove any existing FAQ JSON-LD
    const existingFaqScript = document.getElementById('faq-structured-data');
    if (existingFaqScript) {
      document.head.removeChild(existingFaqScript);
    }
    
    // Create base structured data
    let structuredData = {
      '@context': 'https://schema.org',
      '@type': type,
      url: currentUrl,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': currentUrl
      }
    };
    
    // Add default data based on type
    switch (type) {
      case 'WebPage':
        structuredData = {
          ...structuredData,
          name: document.title,
          description: document.querySelector('meta[name="description"]')?.content || '',
          inLanguage: 'en-US',
          isPartOf: {
            '@type': 'WebSite',
            name: 'Rize Digital',
            url: 'https://rizedigital.com',
            potentialAction: {
              '@type': 'SearchAction',
              target: {
                '@type': 'EntryPoint',
                urlTemplate: 'https://rizedigital.com/search?q={search_term_string}'
              },
              'query-input': 'required name=search_term_string'
            }
          },
          speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['h1', 'h2', '.speakable']
          }
        };
        break;
        
      case 'Service':
        structuredData = {
          ...structuredData,
          name: document.title.split('|')[0].trim(),
          provider: {
            '@type': 'Organization',
            name: 'Rize Digital',
            url: 'https://rizedigital.com',
            logo: 'https://rizedigital.com/images/Rize-Digital-horizontal-logo.png'
          },
          description: document.querySelector('meta[name="description"]')?.content || '',
          areaServed: {
            '@type': 'Country',
            name: 'United States'
          },
          serviceType: document.title.split('|')[0].trim(),
          offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
            price: '0',
            priceCurrency: 'USD',
            priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
            url: currentUrl
          }
        };
        break;
        
      case 'Organization':
        structuredData = {
          ...structuredData,
          name: 'Rize Digital',
          logo: {
            '@type': 'ImageObject',
            url: 'https://rizedigital.com/images/Rize-Digital-horizontal-logo.png',
            width: '280',
            height: '60'
          },
          description: 'Premier Digital Marketing Agency specializing in SEO, Website Development, Lead Generation, Google Ads, and Marketing Automation.',
          sameAs: [
            'https://www.facebook.com/rizedigital',
            'https://www.twitter.com/rizedigital',
            'https://www.linkedin.com/company/rizedigital',
            'https://www.instagram.com/rizedigital'
          ],
          contactPoint: [
            {
              '@type': 'ContactPoint',
              telephone: '+1-123-456-7890',
              contactType: 'customer service',
              areaServed: 'US',
              availableLanguage: ['English']
            },
            {
              '@type': 'ContactPoint',
              telephone: '+1-123-456-7890',
              contactType: 'sales',
              areaServed: 'US',
              availableLanguage: ['English']
            }
          ],
          address: {
            '@type': 'PostalAddress',
            streetAddress: '123 Marketing St',
            addressLocality: 'Digital City',
            addressRegion: 'NY',
            postalCode: '10001',
            addressCountry: 'US'
          }
        };
        break;
        
      case 'LocalBusiness':
        structuredData = {
          ...structuredData,
          name: 'Rize Digital',
          image: 'https://rizedigital.com/images/Rize-Digital-horizontal-logo.png',
          '@id': 'https://rizedigital.com/#organization',
          description: 'Premier Digital Marketing Agency specializing in SEO, Website Development, Lead Generation, Google Ads, and Marketing Automation.',
          priceRange: '$$',
          telephone: '+1-123-456-7890',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '123 Marketing St',
            addressLocality: 'Digital City',
            addressRegion: 'NY',
            postalCode: '10001',
            addressCountry: 'US'
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: '40.7128',
            longitude: '-74.0060'
          },
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              opens: '09:00',
              closes: '17:00'
            }
          ],
          sameAs: [
            'https://www.facebook.com/rizedigital',
            'https://www.twitter.com/rizedigital',
            'https://www.linkedin.com/company/rizedigital',
            'https://www.instagram.com/rizedigital'
          ]
        };
        break;
        
      case 'Article':
        structuredData = {
          ...structuredData,
          headline: document.title.split('|')[0].trim(),
          description: document.querySelector('meta[name="description"]')?.content || '',
          image: document.querySelector('meta[property="og:image"]')?.content || 'https://rizedigital.com/images/Rize-Digital-horizontal-logo.png',
          author: {
            '@type': 'Organization',
            name: 'Rize Digital',
            url: 'https://rizedigital.com'
          },
          publisher: {
            '@type': 'Organization',
            name: 'Rize Digital',
            logo: {
              '@type': 'ImageObject',
              url: 'https://rizedigital.com/images/Rize-Digital-horizontal-logo.png',
              width: '280',
              height: '60'
            }
          },
          datePublished: document.querySelector('meta[property="article:published_time"]')?.content || new Date().toISOString(),
          dateModified: document.querySelector('meta[property="article:modified_time"]')?.content || new Date().toISOString(),
          articleSection: 'Case Study',
          wordCount: '1000'
        };
        break;
        
      default:
        break;
    }
    
    // Merge with custom data
    structuredData = { ...structuredData, ...data };
    
    // Create and append the script element
    const script = document.createElement('script');
    script.id = 'structured-data-script';
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(structuredData);
    document.head.appendChild(script);
    
    // Add breadcrumbs structured data if requested
    if (addBreadcrumbs && breadcrumbs.length > 0) {
      const breadcrumbsData = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': breadcrumbs.map((crumb, index) => ({
          '@type': 'ListItem',
          'position': index + 1,
          'name': crumb.name,
          'item': `https://rizedigital.com${crumb.url}`
        }))
      };
      
      const breadcrumbsScript = document.createElement('script');
      breadcrumbsScript.id = 'breadcrumbs-structured-data';
      breadcrumbsScript.type = 'application/ld+json';
      breadcrumbsScript.innerHTML = JSON.stringify(breadcrumbsData);
      document.head.appendChild(breadcrumbsScript);
    }
    
    // Add FAQ structured data if provided
    if (faq.length > 0) {
      const faqData = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': faq.map(item => ({
          '@type': 'Question',
          'name': item.question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': item.answer
          }
        }))
      };
      
      const faqScript = document.createElement('script');
      faqScript.id = 'faq-structured-data';
      faqScript.type = 'application/ld+json';
      faqScript.innerHTML = JSON.stringify(faqData);
      document.head.appendChild(faqScript);
    }
    
    // Cleanup on unmount
    return () => {
      const scriptToRemove = document.getElementById('structured-data-script');
      if (scriptToRemove) {
        document.head.removeChild(scriptToRemove);
      }
      
      const breadcrumbsScriptToRemove = document.getElementById('breadcrumbs-structured-data');
      if (breadcrumbsScriptToRemove) {
        document.head.removeChild(breadcrumbsScriptToRemove);
      }
      
      const faqScriptToRemove = document.getElementById('faq-structured-data');
      if (faqScriptToRemove) {
        document.head.removeChild(faqScriptToRemove);
      }
    };
  }, [type, data, currentUrl, addBreadcrumbs, breadcrumbs, faq]);
  
  // This component doesn't render anything
  return null;
};

export default StructuredData;
