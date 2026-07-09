import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { ROUTES } from '@/app/paths';

export default function NotFoundPage() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4 pt-24 pb-16">
      <div className="text-center max-w-md">
        <p className="text-7xl sm:text-8xl font-extrabold gradient-text">404</p>
        <h1 className="text-2xl sm:text-3xl font-bold mt-4">Page Not Found</h1>
        <p className="text-muted-foreground mt-3">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
          <Link
            to={ROUTES.HOME}
            className="inline-flex items-center justify-center gap-2 bg-primary text-white hover:bg-primary/90 px-6 py-3 rounded-full font-semibold transition-colors shadow-lg shadow-primary/20 w-full sm:w-auto"
          >
            <Home size={18} /> Back to Home
          </Link>
          <Link
            to={ROUTES.COURSES}
            className="inline-flex items-center justify-center gap-2 border border-border hover:border-primary text-foreground px-6 py-3 rounded-full font-semibold transition-colors w-full sm:w-auto"
          >
            <ArrowLeft size={18} /> Browse Courses
          </Link>
        </div>
      </div>
    </section>
  );
}
