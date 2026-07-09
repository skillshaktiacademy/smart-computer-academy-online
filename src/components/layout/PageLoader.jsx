import { Loader2 } from 'lucide-react';

// Fallback shown while a lazily-loaded route chunk is being fetched.
export default function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center" role="status" aria-label="Loading">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
    </div>
  );
}
