import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import LandingPage from './pages/LandingPage';
import CoursesPage from './pages/CoursesPage';
import AboutPage from './pages/AboutPage';
import FranchisePage from './pages/FranchisePage';
import ContactPage from './pages/ContactPage';
import LegalPage from './pages/LegalPage';
import VerifyCertificatePage from './pages/VerifyCertificatePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="courses" element={<CoursesPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="franchise" element={<FranchisePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="verify-certificate" element={<VerifyCertificatePage />} />
          <Route path="privacy" element={<LegalPage title="Privacy Policy" />} />
          <Route path="terms" element={<LegalPage title="Terms of Service" />} />
          <Route path="refund" element={<LegalPage title="Refund Policy" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
