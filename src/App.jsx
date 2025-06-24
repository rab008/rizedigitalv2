import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import CaseStudy from './pages/CaseStudy';
import KingLandClearingCaseStudy from './pages/case-studies/KingLandClearingCaseStudy';
import WardsExcavationCaseStudy from './pages/case-studies/WardsExcavationCaseStudy';
import BomannFencingCaseStudy from './pages/case-studies/BomannFencingCaseStudy';
import Automations from './pages/services/Automations';
import SEO from './pages/services/SEO';
import GoogleAds from './pages/services/GoogleAds';
import EmailMarketing from './pages/services/EmailMarketing';
import LeadGeneration from './pages/services/LeadGeneration';
import WebDevelopment from './pages/services/WebDevelopment';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ScrollToTop from './components/ScrollToTop';

/**
 * Main App component for Rize Digital website
 * Sets up routing and layout structure
 * Uses basename for GitHub Pages deployment
 */
function App() {
  return (
    <Router basename="/rizedigitalv2">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="services/automations" element={<Automations />} />
          <Route path="services/seo" element={<SEO />} />
          <Route path="services/google-ads" element={<GoogleAds />} />
          <Route path="services/lead-generation" element={<LeadGeneration />} />
          <Route path="services/web-development" element={<WebDevelopment />} />
          <Route path="services/email-marketing" element={<EmailMarketing />} />
          <Route path="contact" element={<Contact />} />
          <Route path="case-study" element={<CaseStudy />} />
          <Route path="case-study/king-land-clearing" element={<KingLandClearingCaseStudy />} />
          <Route path="case-study/wards-excavation" element={<WardsExcavationCaseStudy />} />
          <Route path="case-study/bomann-fencing" element={<BomannFencingCaseStudy />} />
          <Route path="terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          {/* Add more routes as needed */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
