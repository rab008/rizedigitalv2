import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import ScrollToTop from '../components/ScrollToTop';

/**
 * MainLayout component that wraps all pages with a consistent layout
 * Includes the Header, Footer, and SEO components for proper metadata
 */
const MainLayout = () => {
  const location = useLocation();
  
  // Default SEO props
  const seoProps = {
    title: 'Rize Digital | Results-Driven Digital Marketing Agency',
    description: 'Premier Digital Marketing Agency specializing in SEO, Website Development, Lead Generation, Google Ads, and Marketing Automation to grow your business.',
    keywords: 'digital marketing agency, SEO services, website development, lead generation, Google Ads management, PPC advertising, marketing automation, email marketing',
    breadcrumbs: [],
    publishedDate: '',
    modifiedDate: '',
    ogType: 'website'
  };
  
  // Customize SEO props based on current route
  if (location.pathname === '/') {
    seoProps.title = 'Rize Digital | Results-Driven Digital Marketing Agency';
    seoProps.description = 'Premier Digital Marketing Agency specializing in SEO, Website Development, Lead Generation, Google Ads, and Marketing Automation to grow your business.';
    seoProps.breadcrumbs = [
      { name: 'Home', url: '/' }
    ];
  } else if (location.pathname === '/about') {
    seoProps.title = 'About Us | Rize Digital Marketing Agency';
    seoProps.description = 'Learn about Rize Digital, our expert team, and our mission to deliver exceptional digital marketing services that drive real business results.';
    seoProps.keywords = 'about Rize Digital, digital marketing experts, marketing agency team, digital marketing professionals';
    seoProps.breadcrumbs = [
      { name: 'Home', url: '/' },
      { name: 'About Us', url: '/about' }
    ];
  } else if (location.pathname.includes('/services')) {
    if (location.pathname === '/services') {
      seoProps.title = 'Our Services | Rize Digital Marketing Agency';
      seoProps.description = 'Explore our comprehensive digital marketing services including SEO, Google Ads, Lead Generation, Web Development, and Marketing Automation.';
      seoProps.keywords = 'digital marketing services, SEO services, Google Ads management, lead generation services, web development, marketing automation';
      seoProps.breadcrumbs = [
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' }
      ];
    } else if (location.pathname === '/services/seo') {
      seoProps.title = 'SEO Services | Rize Digital Marketing Agency';
      seoProps.description = 'Boost your online visibility with our expert SEO services. We help businesses rank higher in search results and drive organic traffic.';
      seoProps.keywords = 'SEO services, search engine optimization, organic traffic, keyword ranking, local SEO, technical SEO';
      seoProps.breadcrumbs = [
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
        { name: 'SEO Services', url: '/services/seo' }
      ];
      seoProps.ogType = 'service';
    } else if (location.pathname === '/services/google-ads') {
      seoProps.title = 'Google Ads Management | Rize Digital Marketing Agency';
      seoProps.description = 'Maximize your ROI with our expert Google Ads management services. We create and optimize campaigns that drive qualified traffic and conversions.';
      seoProps.keywords = 'Google Ads management, PPC advertising, paid search, Google Ads campaigns, AdWords management, PPC services';
      seoProps.breadcrumbs = [
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
        { name: 'Google Ads Management', url: '/services/google-ads' }
      ];
      seoProps.ogType = 'service';
    } else if (location.pathname === '/services/lead-generation') {
      seoProps.title = 'Lead Generation Services | Rize Digital Marketing Agency';
      seoProps.description = 'Generate high-quality leads for your business with our proven lead generation strategies and campaigns that convert prospects into customers.';
      seoProps.keywords = 'lead generation services, lead generation strategies, lead capture, conversion optimization, sales leads, B2B lead generation';
      seoProps.breadcrumbs = [
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
        { name: 'Lead Generation', url: '/services/lead-generation' }
      ];
      seoProps.ogType = 'service';
    } else if (location.pathname === '/services/automations') {
      seoProps.title = 'Marketing Automation Services | Rize Digital Marketing Agency';
      seoProps.description = 'Streamline your marketing processes with our AI-powered automation solutions that save time, reduce costs, and improve campaign effectiveness.';
      seoProps.keywords = 'marketing automation, AI marketing, automated campaigns, workflow automation, marketing AI, business automation';
      seoProps.breadcrumbs = [
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
        { name: 'Marketing Automation', url: '/services/automations' }
      ];
      seoProps.ogType = 'service';
    } else if (location.pathname === '/services/email-marketing') {
      seoProps.title = 'Email Marketing Services | Rize Digital Marketing Agency';
      seoProps.description = 'Drive engagement and conversions with our strategic email marketing services. We create personalized campaigns that nurture leads and retain customers.';
      seoProps.keywords = 'email marketing services, email campaigns, newsletter marketing, email automation, email strategy, email marketing ROI';
      seoProps.breadcrumbs = [
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
        { name: 'Email Marketing', url: '/services/email-marketing' }
      ];
      seoProps.ogType = 'service';
    } else if (location.pathname === '/services/web-development') {
      seoProps.title = 'Website Development Services | Rize Digital Marketing Agency';
      seoProps.description = 'Create a powerful online presence with our custom website development services. We build responsive, SEO-friendly websites that convert visitors into customers.';
      seoProps.keywords = 'website development, web design, responsive websites, custom websites, WordPress development, ecommerce websites';
      seoProps.breadcrumbs = [
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
        { name: 'Website Development', url: '/services/web-development' }
      ];
      seoProps.ogType = 'service';
    }
  } else if (location.pathname.includes('/case-study')) {
    if (location.pathname === '/case-study') {
      seoProps.title = 'Case Studies | Rize Digital Marketing Agency';
      seoProps.description = 'Explore our portfolio of successful digital marketing case studies and see how we have helped businesses achieve remarkable growth and ROI.';
      seoProps.keywords = 'digital marketing case studies, marketing success stories, client results, marketing ROI, marketing portfolio';
      seoProps.breadcrumbs = [
        { name: 'Home', url: '/' },
        { name: 'Case Studies', url: '/case-study' }
      ];
    } else if (location.pathname === '/case-study/king-land-clearing') {
      seoProps.title = 'King Land Clearing Case Study | Rize Digital';
      seoProps.description = 'See how we helped King Land Clearing increase their online visibility and generate more qualified leads through our digital marketing strategies.';
      seoProps.keywords = 'King Land Clearing, land clearing marketing, contractor marketing case study, local business marketing';
      seoProps.breadcrumbs = [
        { name: 'Home', url: '/' },
        { name: 'Case Studies', url: '/case-study' },
        { name: 'King Land Clearing', url: '/case-study/king-land-clearing' }
      ];
      seoProps.ogType = 'article';
      seoProps.publishedDate = '2025-01-15T00:00:00Z';
      seoProps.modifiedDate = '2025-06-24T00:00:00Z';
    } else if (location.pathname === '/case-study/wards-excavation') {
      seoProps.title = 'Wards Excavation Case Study | Rize Digital';
      seoProps.description = 'Learn how our digital marketing strategies helped Wards Excavation expand their customer base and increase their revenue.';
      seoProps.keywords = 'Wards Excavation, excavation marketing, contractor marketing case study, construction marketing';
      seoProps.breadcrumbs = [
        { name: 'Home', url: '/' },
        { name: 'Case Studies', url: '/case-study' },
        { name: 'Wards Excavation', url: '/case-study/wards-excavation' }
      ];
      seoProps.ogType = 'article';
      seoProps.publishedDate = '2025-02-20T00:00:00Z';
      seoProps.modifiedDate = '2025-06-24T00:00:00Z';
    } else if (location.pathname === '/case-study/bomann-fencing') {
      seoProps.title = 'Bomann Fencing Case Study | Rize Digital';
      seoProps.description = 'Discover how we helped Bomann Fencing dominate their local market and achieve significant business growth through targeted digital marketing.';
      seoProps.keywords = 'Bomann Fencing, fencing contractor marketing, local business marketing, contractor SEO case study';
      seoProps.breadcrumbs = [
        { name: 'Home', url: '/' },
        { name: 'Case Studies', url: '/case-study' },
        { name: 'Bomann Fencing', url: '/case-study/bomann-fencing' }
      ];
      seoProps.ogType = 'article';
      seoProps.publishedDate = '2025-03-10T00:00:00Z';
      seoProps.modifiedDate = '2025-06-24T00:00:00Z';
    }
  } else if (location.pathname === '/contact') {
    seoProps.title = 'Contact Us | Rize Digital Marketing Agency';
    seoProps.description = 'Get in touch with our digital marketing experts. We are ready to help your business grow with our results-driven marketing strategies.';
    seoProps.keywords = 'contact Rize Digital, marketing agency contact, digital marketing consultation, marketing quote';
    seoProps.breadcrumbs = [
      { name: 'Home', url: '/' },
      { name: 'Contact Us', url: '/contact' }
    ];
  }

  // Prepare FAQ data for service pages
  let faqItems = [];
  if (location.pathname === '/services/seo') {
    faqItems = [
      {
        question: "What is SEO and why is it important?",
        answer: "SEO (Search Engine Optimization) is the practice of optimizing your website to rank higher in search engine results. It's important because it increases your visibility online, drives organic traffic to your website, and helps you reach potential customers when they're actively searching for your products or services."
      },
      {
        question: "How long does it take to see results from SEO?",
        answer: "SEO is a long-term strategy that typically takes 3-6 months to start showing significant results. The timeline depends on factors like your website's current condition, competition in your industry, and the specific keywords you're targeting."
      },
      {
        question: "What SEO services does Rize Digital offer?",
        answer: "We offer comprehensive SEO services including keyword research, on-page optimization, technical SEO, content creation, link building, local SEO, and regular performance reporting."
      }
    ];
  } else if (location.pathname === '/services/google-ads') {
    faqItems = [
      {
        question: "How much should I budget for Google Ads?",
        answer: "Your Google Ads budget depends on your industry, competition, and business goals. We typically recommend starting with at least $1,000-$2,000 per month for most businesses to see meaningful results."
      },
      {
        question: "How do you measure the success of Google Ads campaigns?",
        answer: "We measure success through key metrics like click-through rate (CTR), conversion rate, cost per conversion, return on ad spend (ROAS), and overall ROI. We provide transparent reporting so you can see exactly how your campaigns are performing."
      }
    ];
  }

  // Determine structured data type based on current route
  let structuredDataType = 'WebPage';
  let structuredDataProps = {};
  let addBreadcrumbs = seoProps.breadcrumbs.length > 0;
  
  if (location.pathname === '/') {
    structuredDataType = 'Organization';
  } else if (location.pathname === '/contact') {
    structuredDataType = 'LocalBusiness';
  } else if (location.pathname.includes('/services/')) {
    structuredDataType = 'Service';
    structuredDataProps = {
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD'
      }
    };
  } else if (location.pathname.includes('/case-study/')) {
    structuredDataType = 'Article';
    structuredDataProps = {
      datePublished: seoProps.publishedDate || '2025-01-01T00:00:00Z',
      dateModified: seoProps.modifiedDate || '2025-06-24T00:00:00Z',
      author: {
        '@type': 'Organization',
        name: 'Rize Digital',
        url: 'https://rizedigital.com'
      }
    };
  }

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <SEO 
        {...seoProps} 
        imageAlt="Rize Digital Logo"
        imageWidth={1200}
        imageHeight={630}
        section={location.pathname.includes('/case-study/') ? 'Case Studies' : ''}
        tags={location.pathname.includes('/case-study/') ? ['digital marketing', 'case study', 'success story'] : []}
      />
      <StructuredData 
        type={structuredDataType} 
        data={structuredDataProps} 
        addBreadcrumbs={addBreadcrumbs}
        breadcrumbs={seoProps.breadcrumbs}
        faq={faqItems}
      />
      <Header />
      <main className="flex-grow pt-12 md:pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
