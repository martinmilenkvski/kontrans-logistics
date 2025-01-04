import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
// import AboutPage from "./pages/AboutPage";
// import ServicesPage from "./pages/ServicesPage";
// import ContactPage from "./pages/ContactPage";
// import MaritimePage from "./pages/MaritimePage";
// import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
// import TermsPage from "./pages/TermsPage";
// import DashboardPage from "./pages/DashboardPage";
// import { CookieConsent } from "./components/CookieConsent";

function App() {
  return (
    <Router>
      <div className="bg-slate-900">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services/maritime" element={<MaritimePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/dashboard" element={<DashboardPage />} /> */}
        </Routes>
        {/* <CookieConsent /> */}
      </div>
    </Router>
  );
}

export default App;
