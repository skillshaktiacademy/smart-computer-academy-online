import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import PageLoader from '@/components/layout/PageLoader';
import { ROUTES } from '@/app/paths';

// Route-level code splitting: each page is fetched only when visited,
// keeping the initial bundle small.
const LandingPage = lazy(() => import('@/pages/LandingPage'));
const CoursesPage = lazy(() => import('@/pages/CoursesPage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const FranchisePage = lazy(() => import('@/pages/FranchisePage'));
const AdmissionPage = lazy(() => import('@/pages/AdmissionPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));
const VerifyCertificatePage = lazy(() => import('@/pages/VerifyCertificatePage'));
const LegalPage = lazy(() => import('@/pages/LegalPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

export default function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path={ROUTES.HOME} element={<MainLayout />}>
          <Route index element={<LandingPage />} />
          <Route path={ROUTES.COURSES} element={<CoursesPage />} />
          <Route path={ROUTES.ABOUT} element={<AboutPage />} />
          <Route path={ROUTES.FRANCHISE} element={<FranchisePage />} />
          <Route path={ROUTES.ADMISSION} element={<AdmissionPage />} />
          <Route path={ROUTES.CONTACT} element={<ContactPage />} />
          <Route path={ROUTES.VERIFY_CERTIFICATE} element={<VerifyCertificatePage />} />
          <Route path={ROUTES.PRIVACY} element={<LegalPage title="Privacy Policy" />} />
          <Route path={ROUTES.TERMS} element={<LegalPage title="Terms of Service" />} />
          <Route path={ROUTES.REFUND} element={<LegalPage title="Refund Policy" />} />
          <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
