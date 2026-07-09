import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    // Split large third-party libs into their own long-term-cacheable chunks
    // so the main bundle stays small and repeat visits are fast.
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return;
          if (id.includes('framer-motion')) return 'motion';
          if (id.includes('react-hook-form')) return 'forms';
          if (id.includes('react-router') || id.includes('react-dom') || /[\\/]react[\\/]/.test(id))
            return 'react-vendor';
        },
      },
    },
    chunkSizeWarningLimit: 900,
  },
})
