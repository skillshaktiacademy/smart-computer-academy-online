import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from '@/components/layout/ScrollToTop';
import AppRoutes from '@/app/routes';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppRoutes />
    </BrowserRouter>
  );
}
