import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'
import postcssCustomProperties from 'postcss-custom-properties'
import { transformAsync } from '@babel/core'
import fs from 'node:fs'
import path from 'node:path'

// Kids often use old hand-me-down tablets: also build an ES5 version with polyfills for old browsers
// (loaded automatically only where the modern bundle can't run), and polyfill newer JS features
// (Array.prototype.at, flat, …) for browsers that run modules but are a few years old.
const OLD_BROWSERS = ['defaults', 'chrome >= 30', 'android >= 4.1', 'safari >= 9', 'ios >= 9', 'firefox >= 45', 'samsung >= 4']

/**
 * The bundler wraps the legacy polyfills in its own helper code that uses arrow functions, which very old
 * browsers (Chrome < 45) can't parse. After the build, run every legacy file through Babel once more so
 * all of them are plain ES5.
 */
function es5LegacyFiles(): Plugin {
  let outDir = 'dist'
  return {
    name: 'es5-legacy-files',
    apply: 'build',
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir)
    },
    async closeBundle() {
      const dir = path.join(outDir, 'assets')
      if (!fs.existsSync(dir)) return
      for (const file of fs.readdirSync(dir).filter((f) => f.includes('-legacy') && f.endsWith('.js'))) {
        const full = path.join(dir, file)
        const result = await transformAsync(fs.readFileSync(full, 'utf8'), {
          babelrc: false,
          configFile: false,
          compact: true,
          sourceType: 'script',
          presets: [['@babel/preset-env', { targets: OLD_BROWSERS, modules: false }]],
        })
        if (result?.code) fs.writeFileSync(full, result.code)
      }
    },
  }
}

export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: OLD_BROWSERS,
      // the "modern" bundle must still run on any browser that supports JS modules (Safari 12, Chrome 64…)
      modernTargets: ['chrome >= 64', 'safari >= 12', 'ios >= 12', 'firefox >= 67', 'edge >= 79', 'samsung >= 9'],
      modernPolyfills: true,
    }),
    es5LegacyFiles(),
  ],
  css: {
    // For browsers without CSS variables (Chrome < 49): also write the plain value of every :root variable
    postcss: { plugins: [postcssCustomProperties({ preserve: true })] },
  },
  build: {
    chunkSizeWarningLimit: 900,
    // Terser with ES5 output: the default minifier turns 'strings' into `template literals`,
    // which very old browsers (Chrome < 41) cannot even parse
    minify: 'terser',
    terserOptions: { ecma: 5, format: { ecma: 5 }, safari10: true },
    // also rewrite newer CSS (e.g. `inset`) into forms old browsers understand
    cssTarget: ['chrome30', 'safari9', 'firefox45'],
  },
})
