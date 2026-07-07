import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Auto-import every image in assets/slider, sorted by filename (1..5).
const modules = import.meta.glob('../../assets/slider/*.{jpeg,jpg,png,webp}', {
  eager: true,
  import: 'default',
});
const slides = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, src]) => src);

const AUTOPLAY_MS = 5000;

export default function BannerSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const count = slides.length;
  const goTo = useCallback((i) => setCurrent((i + count) % count), [count]);
  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Advance 5s after each slide (whether reached automatically or manually).
  useEffect(() => {
    if (paused || count <= 1) return;
    const id = setTimeout(() => setCurrent((c) => (c + 1) % count), AUTOPLAY_MS);
    return () => clearTimeout(id);
  }, [current, paused, count]);

  if (count === 0) return null;

  return (
    <section aria-label="Highlights" className="w-full py-10 md:py-16 bg-muted/20">
      <div className="container px-4 md:px-6">
        <div
          className="relative w-full overflow-hidden rounded-2xl md:rounded-3xl border border-border bg-gradient-to-br from-slate-900 to-slate-800 shadow-xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Aspect band; object-contain keeps banner text fully visible */}
          <div className="relative aspect-[4/3] sm:aspect-video w-full">
            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={slides[current]}
                alt={`Promotional banner ${current + 1}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full object-contain"
                loading={current === 0 ? 'eager' : 'lazy'}
                draggable={false}
              />
            </AnimatePresence>
          </div>

          {/* Prev / Next */}
          {count > 1 && (
            <>
              <button
                type="button"
                onClick={prev}
                aria-label="Previous slide"
                className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-sm transition-colors touch-manipulation"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next slide"
                className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-sm transition-colors touch-manipulation"
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}

          {/* Dots */}
          {count > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={i === current}
                  className={`h-2.5 rounded-full transition-all touch-manipulation ${
                    i === current ? 'w-7 bg-white' : 'w-2.5 bg-white/50 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
