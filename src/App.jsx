import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';

/**
 * Main App component for Rize Digital website
 * Sets up routing and layout structure
 * Uses basename for GitHub Pages deployment
 */
function App() {
  return (
    <Router basename="/rizedigital">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          {/* Add more routes as needed */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
