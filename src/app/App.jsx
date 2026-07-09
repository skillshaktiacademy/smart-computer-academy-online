import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from '@/components/layout/ScrollToTop';
import ErrorBoundary from '@/components/layout/ErrorBoundary';
import AppRoutes from '@/app/routes';

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <ScrollToTop />
        <AppRoutes />
      </BrowserRouter>
    </ErrorBoundary>
  );
}
