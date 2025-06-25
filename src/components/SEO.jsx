import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * Comprehensive SEO component for dynamically updating meta tags based on current page
 * Includes support for advanced SEO features like breadcrumbs, structured data, and additional meta tags
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Page title
 * @param {string} props.description - Page description
 * @param {string} props.keywords - Page keywords
 * @param {string} props.ogImage - Open Graph image URL
 * @param {string} props.ogType - Open Graph type (default: website)
 * @param {string} props.twitterCard - Twitter card type (default: summary_large_image)
 * @param {Array} props.breadcrumbs - Array of breadcrumb items [{name: 'Home', url: '/'}, ...]
 * @param {string} props.publishedDate - ISO date string for when content was published
 * @param {string} props.modifiedDate - ISO date string for when content was last modified
 * @param {string} props.locale - Content locale (default: en_US)
 * @param {string} props.author - Content author (default: Rize Digital)
 * @param {string} props.imageAlt - Alt text for the OG image
 * @param {number} props.imageWidth - Width of the OG image
 * @param {number} props.imageHeight - Height of the OG image
 * @param {string} props.section - Content section (for articles)
 * @param {Array} props.tags - Content tags (for articles)
 * @param {boolean} props.noindex - Whether to noindex the page
 * @param {boolean} props.nofollow - Whether to nofollow the page
 * @param {string} props.canonicalUrl - Custom canonical URL (if different from current URL)
 * @param {string} props.prevPage - URL of the previous page (for pagination)
 * @param {string} props.nextPage - URL of the next page (for pagination)
 * @param {string} props.language - Content language (default: en)
 */
const SEO = ({ 
  title = 'Rize Digital | Results-Driven Digital Marketing Agency',
  description = 'Premier Digital Marketing Agency specializing in SEO, Website Development, Lead Generation, Google Ads, and Marketing Automation to grow your business.',
  keywords = 'digital marketing agency, SEO services, website development, lead generation, Google Ads management, PPC advertising, marketing automation, email marketing',
  ogImage = 'https://rizedigital.com/images/Rize-Digital-horizontal-logo.png',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  breadcrumbs = [],
  publishedDate = '',
  modifiedDate = '',
  locale = 'en_US',
  author = 'Rize Digital',
  imageAlt = '',
  imageWidth = 1200,
  imageHeight = 630,
  section = '',
  tags = [],
  noindex = false,
  nofollow = false,
  canonicalUrl = '',
  prevPage = '',
  nextPage = '',
  language = 'en'
}) => {
  const location = useLocation();
  const currentUrl = `https://rizedigital.com${location.pathname}`;
  
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Determine robots meta tag value
    const robotsValue = `${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}, max-snippet:-1, max-image-preview:large, max-video-preview:-1`;
    
    // Update meta tags
    const metaTags = {
      description: description,
      keywords: keywords,
      author: author,
      'robots': robotsValue,
      'googlebot': robotsValue,
      'bingbot': robotsValue,
      'content-language': language,
      'viewport': 'width=device-width, initial-scale=1',
      
      // Open Graph tags
      'og:url': currentUrl,
      'og:title': title,
      'og:description': description,
      'og:image': ogImage,
      'og:image:alt': imageAlt || description,
      'og:image:width': imageWidth.toString(),
      'og:image:height': imageHeight.toString(),
      'og:type': ogType,
      'og:locale': locale,
      'og:site_name': 'Rize Digital',
      
      // Twitter Card tags
      'twitter:card': twitterCard,
      'twitter:url': currentUrl,
      'twitter:title': title,
      'twitter:description': description,
      'twitter:image': ogImage,
      'twitter:site': '@rizedigital',
      'twitter:creator': '@rizedigital'
    };
    
    // Add article-specific meta tags if applicable
    if (ogType === 'article' && publishedDate) {
      metaTags['article:published_time'] = publishedDate;
      if (modifiedDate) {
        metaTags['article:modified_time'] = modifiedDate;
      }
      metaTags['article:publisher'] = 'https://www.facebook.com/rizedigital';
      metaTags['article:author'] = author;
      
      if (section) {
        metaTags['article:section'] = section;
      }
      
      // Add article tags if provided
      if (tags.length > 0) {
        tags.forEach((tag, index) => {
          metaTags[`article:tag:${index}`] = tag;
        });
      }
    }
    
    // Update existing meta tags or create new ones
    Object.entries(metaTags).forEach(([name, content]) => {
      let metaTag;
      
      if (name.startsWith('og:')) {
        metaTag = document.querySelector(`meta[property="${name}"]`);
        if (!metaTag) {
          metaTag = document.createElement('meta');
          metaTag.setAttribute('property', name);
          document.head.appendChild(metaTag);
        }
      } else if (name.startsWith('twitter:')) {
        metaTag = document.querySelector(`meta[name="${name}"]`);
        if (!metaTag) {
          metaTag = document.createElement('meta');
          metaTag.setAttribute('name', name);
          document.head.appendChild(metaTag);
        }
      } else {
        metaTag = document.querySelector(`meta[name="${name}"]`);
        if (!metaTag) {
          metaTag = document.createElement('meta');
          metaTag.setAttribute('name', name);
          document.head.appendChild(metaTag);
        }
      }
      
      metaTag.setAttribute('content', content);
    });
    
    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl || currentUrl);
    
    // Add pagination links if provided
    if (prevPage) {
      let prevLink = document.querySelector('link[rel="prev"]');
      if (!prevLink) {
        prevLink = document.createElement('link');
        prevLink.setAttribute('rel', 'prev');
        document.head.appendChild(prevLink);
      }
      prevLink.setAttribute('href', prevPage.startsWith('http') ? prevPage : `https://rizedigital.com${prevPage}`);
    } else {
      const existingPrevLink = document.querySelector('link[rel="prev"]');
      if (existingPrevLink) {
        document.head.removeChild(existingPrevLink);
      }
    }
    
    if (nextPage) {
      let nextLink = document.querySelector('link[rel="next"]');
      if (!nextLink) {
        nextLink = document.createElement('link');
        nextLink.setAttribute('rel', 'next');
        document.head.appendChild(nextLink);
      }
      nextLink.setAttribute('href', nextPage.startsWith('http') ? nextPage : `https://rizedigital.com${nextPage}`);
    } else {
      const existingNextLink = document.querySelector('link[rel="next"]');
      if (existingNextLink) {
        document.head.removeChild(existingNextLink);
      }
    }
    
    // Add alternate language links if needed
    // This is a placeholder for future implementation
    // Example: <link rel="alternate" hreflang="es" href="https://rizedigital.com/es/page" />
    
    // Add breadcrumbs structured data if provided
    if (breadcrumbs.length > 0) {
      // Remove any existing breadcrumbs JSON-LD
      const existingBreadcrumbsScript = document.getElementById('breadcrumbs-jsonld');
      if (existingBreadcrumbsScript) {
        document.head.removeChild(existingBreadcrumbsScript);
      }
      
      // Create breadcrumbs structured data
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
      
      // Add breadcrumbs JSON-LD to the page
      const breadcrumbsScript = document.createElement('script');
      breadcrumbsScript.id = 'breadcrumbs-jsonld';
      breadcrumbsScript.type = 'application/ld+json';
      breadcrumbsScript.innerHTML = JSON.stringify(breadcrumbsData);
      document.head.appendChild(breadcrumbsScript);
    }
    
    // Cleanup function
    return () => {
      const breadcrumbsScript = document.getElementById('breadcrumbs-jsonld');
      if (breadcrumbsScript) {
        document.head.removeChild(breadcrumbsScript);
      }
    };
    
  }, [
    title, 
    description, 
    keywords, 
    ogImage, 
    ogType, 
    twitterCard, 
    currentUrl, 
    breadcrumbs, 
    publishedDate, 
    modifiedDate, 
    locale, 
    author,
    imageAlt,
    imageWidth,
    imageHeight,
    section,
    tags,
    noindex,
    nofollow,
    canonicalUrl,
    prevPage,
    nextPage,
    language
  ]);
  
  // This component doesn't render anything
  return null;
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  ogImage: PropTypes.string,
  ogType: PropTypes.string,
  twitterCard: PropTypes.string,
  breadcrumbs: PropTypes.array,
  publishedDate: PropTypes.string,
  modifiedDate: PropTypes.string,
  locale: PropTypes.string,
  author: PropTypes.string,
  imageAlt: PropTypes.string,
  imageWidth: PropTypes.number,
  imageHeight: PropTypes.number,
  section: PropTypes.string,
  tags: PropTypes.array,
  noindex: PropTypes.bool,
  nofollow: PropTypes.bool,
  canonicalUrl: PropTypes.string,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
  language: PropTypes.string
};

export default SEO;
