import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import CaseStudy from './pages/CaseStudy';
import CaseStudyLibrary from './pages/CaseStudyLibrary';
import KingLandClearingCaseStudy from './pages/KingLandClearingCaseStudy';
import WardsExcavationCaseStudy from './pages/WardsExcavationCaseStudy';
import BomannFencingCaseStudy from './pages/BomannFencingCaseStudy';
import Automations from './pages/Automations';
import SEO from './pages/SEO';
import GoogleAds from './pages/GoogleAds';
import LeadGeneration from './pages/LeadGeneration';
import WebDevelopment from './pages/WebDevelopment';
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
          <Route path="contact" element={<Contact />} />
          <Route path="case-study" element={<CaseStudy />} />
          <Route path="case-study-library" element={<CaseStudyLibrary />} />
          <Route path="case-study/king-land-clearing" element={<KingLandClearingCaseStudy />} />
          <Route path="case-study/wards-excavation" element={<WardsExcavationCaseStudy />} />
          <Route path="case-study/bomann-fencing" element={<BomannFencingCaseStudy />} />
          {/* Add more routes as needed */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
