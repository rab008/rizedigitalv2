/**
 * Enhanced Sitemap Generator Script
 * 
 * This script generates a comprehensive sitemap.xml file based on the routes defined in the application.
 * It includes support for images and videos to ensure that search engines can discover and index
 * all content on the website, improving SEO performance.
 * 
 * Features:
 * - Standard URL entries with lastmod, changefreq, and priority
 * - Image sitemap extensions for better image indexing
 * - Video sitemap extensions for better video content indexing
 * - Automatic lastmod date generation
 * 
 * Usage: node scripts/generate-sitemap.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current date in ISO format for lastmod
const currentDate = new Date().toISOString().split('T')[0];

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Base URL of the website
const BASE_URL = 'https://rizedigital.com';

// Define all routes in the application with enhanced metadata
const routes = [
  {
    path: '/',
    lastmod: currentDate,
    changefreq: 'weekly',
    priority: 1.0,
    images: [
      {
        loc: '/images/Rize-Digital-horizontal-logo.png',
        title: 'Rize Digital Logo',
        caption: 'Rize Digital - Results-Driven Digital Marketing Agency'
      },
      {
        loc: '/images/hero_section_illustration.jpg',
        title: 'Digital Marketing Services',
        caption: 'Comprehensive digital marketing services for business growth'
      }
    ]
  },
  {
    path: '/about',
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.8,
    images: [
      {
        loc: '/images/team_collaboration_image.jpg',
        title: 'Rize Digital Team',
        caption: 'Our expert digital marketing team'
      },
      {
        loc: '/images/james.jpg',
        title: 'James - Marketing Expert',
        caption: 'James, Digital Marketing Specialist at Rize Digital'
      },
      {
        loc: '/images/Beau.jpg',
        title: 'Beau - Marketing Expert',
        caption: 'Beau, Digital Marketing Specialist at Rize Digital'
      }
    ]
  },
  {
    path: '/contact',
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.8,
    images: [
      {
        loc: '/images/Rize-Digital-horizontal-logo.png',
        title: 'Rize Digital Logo',
        caption: 'Contact Rize Digital for your marketing needs'
      }
    ]
  },
  {
    path: '/services',
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.9,
    images: [
      {
        loc: '/images/services_hero_illustration.jpg',
        title: 'Our Services',
        caption: 'Comprehensive digital marketing services offered by Rize Digital'
      }
    ]
  },
  {
    path: '/services/seo',
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.8,
    images: [
      {
        loc: '/images/seo_optimization_icon.jpg',
        title: 'SEO Services',
        caption: 'Search Engine Optimization services to improve your online visibility'
      }
    ]
  },
  {
    path: '/services/google-ads',
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.8,
    images: [
      {
        loc: '/images/verified_metrics_icon.jpg',
        title: 'Google Ads Management',
        caption: 'Professional Google Ads management services'
      }
    ]
  },
  {
    path: '/services/lead-generation',
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.8,
    images: [
      {
        loc: '/images/lead_generation_icon.jpg',
        title: 'Lead Generation Services',
        caption: 'Effective lead generation strategies for business growth'
      }
    ]
  },
  {
    path: '/services/automations',
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.8,
    images: [
      {
        loc: '/images/ai_automations_icon.jpg',
        title: 'Marketing Automation',
        caption: 'AI-powered marketing automation solutions'
      }
    ]
  },
  {
    path: '/services/email-marketing',
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.8,
    images: [
      {
        loc: '/images/results_driven_icon.jpg',
        title: 'Email Marketing Services',
        caption: 'Strategic email marketing campaigns that drive results'
      }
    ]
  },
  {
    path: '/services/web-development',
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.8,
    images: [
      {
        loc: '/images/wordpress_development_icon.jpg',
        title: 'Website Development',
        caption: 'Custom website development services'
      }
    ]
  },
  {
    path: '/case-study',
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.9,
    images: [
      {
        loc: '/images/Infographic_Graphic_Organizer.jpg',
        title: 'Case Studies Overview',
        caption: 'Success stories and case studies from Rize Digital'
      }
    ]
  },
  {
    path: '/case-study/king-land-clearing',
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.7,
    images: [
      {
        loc: '/images/kinglandclearing.jpg',
        title: 'King Land Clearing Case Study',
        caption: 'How we helped King Land Clearing grow their business'
      }
    ]
  },
  {
    path: '/case-study/wards-excavation',
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.7,
    images: [
      {
        loc: '/images/ward-ex.webp',
        title: 'Wards Excavation Case Study',
        caption: 'Digital marketing success story for Wards Excavation'
      }
    ]
  },
  {
    path: '/case-study/bomann-fencing',
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.7,
    images: [
      {
        loc: '/images/Bomann-case-study.jpg',
        title: 'Bomann Fencing Case Study',
        caption: 'How we helped Bomann Fencing dominate their local market'
      }
    ]
  }
];

// Generate XML sitemap with image and video extensions
const generateSitemap = () => {
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
  sitemap += '        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"\n';
  sitemap += '        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">\n';
  
  routes.forEach(route => {
    sitemap += '  <url>\n';
    sitemap += `    <loc>${BASE_URL}${route.path}</loc>\n`;
    sitemap += `    <lastmod>${route.lastmod}</lastmod>\n`;
    sitemap += `    <changefreq>${route.changefreq}</changefreq>\n`;
    sitemap += `    <priority>${route.priority}</priority>\n`;
    
    // Add image extensions if available
    if (route.images && route.images.length > 0) {
      route.images.forEach(image => {
        sitemap += '    <image:image>\n';
        sitemap += `      <image:loc>${BASE_URL}${image.loc}</image:loc>\n`;
        if (image.title) sitemap += `      <image:title>${image.title}</image:title>\n`;
        if (image.caption) sitemap += `      <image:caption>${image.caption}</image:caption>\n`;
        sitemap += '    </image:image>\n';
      });
    }
    
    // Add video extensions if available
    if (route.videos && route.videos.length > 0) {
      route.videos.forEach(video => {
        sitemap += '    <video:video>\n';
        sitemap += `      <video:thumbnail_loc>${BASE_URL}${video.thumbnailLoc}</video:thumbnail_loc>\n`;
        sitemap += `      <video:title>${video.title}</video:title>\n`;
        sitemap += `      <video:description>${video.description}</video:description>\n`;
        sitemap += `      <video:content_loc>${BASE_URL}${video.contentLoc}</video:content_loc>\n`;
        if (video.duration) sitemap += `      <video:duration>${video.duration}</video:duration>\n`;
        sitemap += '    </video:video>\n';
      });
    }
    
    sitemap += '  </url>\n';
  });
  
  sitemap += '</urlset>';
  
  return sitemap;
};

// Write sitemap to file
const writeSitemap = () => {
  const sitemap = generateSitemap();
  const outputPath = path.resolve(__dirname, '../public/sitemap.xml');
  
  fs.writeFileSync(outputPath, sitemap);
  console.log(`Enhanced sitemap with image extensions generated at ${outputPath}`);
  
  // Create a timestamp file to track when the sitemap was last generated
  const timestampPath = path.resolve(__dirname, '../public/sitemap-generated.txt');
  fs.writeFileSync(timestampPath, `Sitemap last generated: ${new Date().toISOString()}`);
};

// Execute the script
writeSitemap();
