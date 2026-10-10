import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'

// Kids often use old hand-me-down tablets: also build an ES5 version with polyfills for old browsers
// (loaded automatically only where the modern bundle can't run), and polyfill newer JS features
// (Array.prototype.at, flat, …) for browsers that run modules but are a few years old.
const OLD_BROWSERS = ['defaults', 'chrome >= 61', 'android >= 61', 'safari >= 11', 'ios >= 11', 'firefox >= 60', 'samsung >= 8']

export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: OLD_BROWSERS,
      // the "modern" bundle must still run on any browser that supports JS modules (Safari 12, Chrome 64…)
      modernTargets: ['chrome >= 64', 'safari >= 12', 'ios >= 12', 'firefox >= 67', 'edge >= 79', 'samsung >= 9'],
      modernPolyfills: true,
    }),
  ],
  build: {
    chunkSizeWarningLimit: 900,
    // also rewrite newer CSS (e.g. `inset`) into forms old browsers understand
    cssTarget: ['chrome61', 'safari11', 'firefox60'],
  },
})
