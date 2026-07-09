import { Component } from 'react';

// Catches render/runtime errors anywhere below it so a single failure
// doesn't white-screen the whole site. Also recovers from stale lazy-chunk
// errors after a redeploy by doing a one-time hard reload.
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error) {
    const isChunkError = /ChunkLoadError|Loading chunk|dynamically imported module/i.test(
      error?.message || ''
    );
    if (isChunkError && !sessionStorage.getItem('sca-chunk-reloaded')) {
      sessionStorage.setItem('sca-chunk-reloaded', '1');
      window.location.reload();
    }
    console.error('Uncaught error:', error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center px-4 text-center bg-background text-foreground">
          <div className="max-w-md">
            <h1 className="text-2xl font-bold mb-2">Something went wrong</h1>
            <p className="text-muted-foreground mb-6">
              Please refresh the page. If the problem continues, contact us and we'll help right away.
            </p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
