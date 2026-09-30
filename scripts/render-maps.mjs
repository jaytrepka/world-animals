// Paints each continent map (from scripts/.build/<key>.json made by gen-geo.mjs) into public/maps/<key>.webp.
//   node scripts/render-maps.mjs [key ...]
// The watercolour filters are far too heavy to run live in a browser on big coastlines, so we bake them into an image.
import fs from 'fs'
import { Resvg } from '@resvg/resvg-js'
import sharp from 'sharp'

const ROOT = new URL('../', import.meta.url)
// Image pixels per map unit: as sharp as possible (the app shows ~1.9 CSS px per unit) while keeping the picture
// light enough for tablets – at most ~6 megapixels and 3000 px per side.
const MAX_PIXELS = 6e6
const MAX_SIDE = 3000
const scaleFor = (w, h) => Math.min(3.5, Math.sqrt(MAX_PIXELS / (w * h)), MAX_SIDE / Math.max(w, h))

const ZONE_COLORS = {
  scrub: '#c9c47a', savanna: '#c7cf6b', grassland: '#b9cf6f', farmland: '#b3cf7a', desert: '#e9c27a',
  outback: '#e3a35c', redDesert: '#d9773f', forest: '#77b35a', forestDark: '#5f9f4c', taiga: '#4d8a58',
  rainforest: '#3f8f45', tundra: '#b9c7a3', wetland: '#7fbf9a', ice: '#f3f8fc',
}

function decoration(x, y, kind, r) {
  const s = 0.8 + r * 0.5
  const tf = `translate(${x} ${y}) scale(${s.toFixed(2)})`
  switch (kind) {
    case 'jungle':
      return `<g transform="${tf}"><circle cx="-3" cy="-4" r="4.5" fill="#2d7a37"/><circle cx="3" cy="-5" r="4" fill="#358a3e"/><circle cx="0" cy="-8" r="3.6" fill="#44a04a"/></g>`
    case 'tree':
      return `<g transform="${tf}"><rect x="-0.8" y="-4" width="1.6" height="5" fill="#6b4a2b"/><ellipse cx="0" cy="-7" rx="4.2" ry="5" fill="#3f8a3c"/><ellipse cx="-1.2" cy="-8.3" rx="1.8" ry="2.2" fill="#62ad55"/></g>`
    case 'pine':
      return `<g transform="${tf}"><rect x="-0.7" y="-2" width="1.4" height="3" fill="#5b3f25"/><path d="M0 -13 L4.5 -5 L2.5 -5 L5.5 -1 L-5.5 -1 L-2.5 -5 L-4.5 -5 Z" fill="#2f6b43"/><path d="M0 -13 L-4.5 -5 L-2.5 -5 L-5.5 -1 L0 -1 Z" fill="#3d7f52"/></g>`
    case 'acacia':
      return `<g transform="${tf}"><path d="M0 0 V-5 M0 -4 L-3 -7 M0 -4 L3 -7" stroke="#6b4a2b" stroke-width="1" fill="none"/><ellipse cx="0" cy="-7.5" rx="6" ry="2.2" fill="#7c9a3c"/></g>`
    case 'grass':
      return `<g transform="${tf}" stroke="#7fa343" stroke-width="1" stroke-linecap="round" fill="none"><path d="M-2 0 Q-3 -3 -4 -5 M0 0 V-6 M2 0 Q3 -3 4 -5"/></g>`
    case 'tuft':
      return `<g transform="${tf}" stroke="#8d9c77" stroke-width="0.9" stroke-linecap="round"><path d="M-1.5 0 L-2.5 -3 M0 0 L0 -3.5 M1.5 0 L2.5 -3"/></g>`
    case 'reed':
      return `<g transform="${tf}" stroke="#4f8a5b" stroke-width="1" stroke-linecap="round"><path d="M-2 0 V-6 M0 0 V-8 M2 0 V-5"/><ellipse cx="0" cy="-8.5" rx="0.9" ry="1.8" fill="#7a5a36" stroke="none"/></g>`
    case 'dune':
      return `<path transform="${tf}" d="M-7 0 Q-3 -4 0 -1 Q3 -4 7 0" fill="none" stroke="#c99a52" stroke-width="1.1" stroke-linecap="round"/>`
    case 'field':
      return `<path transform="${tf}" d="M-5 -2 H5 M-5 0 H5 M-5 2 H5" stroke="#9cb862" stroke-width="0.9"/>`
    case 'bush':
      return `<ellipse cx="${x}" cy="${y - 1.5}" rx="${(3 * s).toFixed(1)}" ry="${(2 * s).toFixed(1)}" fill="#8a9a48"/>`
    default:
      return `<g transform="${tf}" stroke="#a8863f" stroke-width="0.9" stroke-linecap="round"><path d="M0 0 L-3 -4 M0 0 L0 -5 M0 0 L3 -4"/></g>`
  }
}

function svgFor(g) {
  const { width: w, height: h } = g
  const waves = Array.from({ length: Math.round((w * h) / 16000) }, (_, i) => {
    const x = ((i * 137.5) % w).toFixed(1)
    const y = ((i * 89.3 + ((i * i) % 53)) % h).toFixed(1)
    return `<path d="M${x} ${y} q6 -5 12 0 t12 0"/>`
  }).join('')
  const mountains = g.mountains.map(([x, y, snowy]) =>
    `<g transform="translate(${x} ${y})"><path d="M-13 4 L-3 -12 L2 -5 L6 -10 L15 4 Z" fill="url(#mtn)" stroke="#5e4e3b" stroke-width="0.8" stroke-linejoin="round"/>${snowy ? '<path d="M-6.5 -6.5 L-3 -12 L0.5 -7.5 L-2 -8 Z M3.5 -6.5 L6 -10 L9 -5.5 Z" fill="#fff"/>' : ''}</g>`).join('')
  const landmarks = g.landmarks.map((l) => l.kind === 'rock'
    ? `<g transform="translate(${l.xy[0]} ${l.xy[1]})"><path d="M-14 3 C-13 -4 -9 -8 -2 -8 C6 -8 11 -5 14 3 Z" fill="#c4502a" stroke="#8f3417" stroke-width="0.8"/><path d="M-8 -3 C-6 -5 -3 -6 0 -6" stroke="#e07a4f" stroke-width="1" fill="none"/></g>`
    : '').join('')
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
<defs>
  <linearGradient id="sea" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stop-color="#8fd3f4"/><stop offset="100%" stop-color="#62b6e7"/></linearGradient>
  <filter id="paint" x="-5%" y="-5%" width="110%" height="110%">
    <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="3" seed="3" result="noise"/>
    <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" xChannelSelector="R" yChannelSelector="G" result="wobbly"/>
    <feGaussianBlur in="wobbly" stdDeviation="3.5"/>
  </filter>
  <filter id="grain" x="0" y="0" width="100%" height="100%">
    <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="8"/>
    <feColorMatrix values="0 0 0 0 0.35  0 0 0 0 0.25  0 0 0 0 0.1  0 0 0 0.09 0"/>
    <feComposite in2="SourceGraphic" operator="in"/>
  </filter>
  <filter id="coast-glow" x="-5%" y="-5%" width="110%" height="110%">
    <feMorphology operator="dilate" radius="5" in="SourceAlpha" result="thick"/>
    <feGaussianBlur in="thick" stdDeviation="6"/>
    <feColorMatrix values="0 0 0 0 0.85  0 0 0 0 0.95  0 0 0 0 1  0 0 0 0.9 0"/>
  </filter>
  <clipPath id="land-clip"><path d="${g.land}"/></clipPath>
  <linearGradient id="mtn" x1="0" x2="1" y1="0" y2="0"><stop offset="0%" stop-color="#b9a88f"/><stop offset="55%" stop-color="#8e7b64"/><stop offset="100%" stop-color="#6d5c48"/></linearGradient>
</defs>
<rect width="${w}" height="${h}" fill="#74c0ea"/>
<g fill="none" stroke="#ffffff" stroke-opacity="0.45" stroke-width="1.3" stroke-linecap="round">${waves}</g>
<path d="${g.other}" fill="#d9d2b6" stroke="#b7ae90" stroke-width="1" opacity="0.8"/>
<path d="${g.land}" filter="url(#coast-glow)"/>
<path d="${g.land}" fill="${g.base}"/>
<g clip-path="url(#land-clip)">
  <g filter="url(#paint)">${g.biomes.map((b) => `<path d="${b.d}" fill="${ZONE_COLORS[b.kind] ?? '#a8c46f'}"/>`).join('')}</g>
  <rect width="${w}" height="${h}" filter="url(#grain)"/>
</g>
<path d="${g.land}" fill="none" stroke="#8a6f3f" stroke-width="1.4" stroke-opacity="0.55"/>
${g.lakes.map((l) => `<path d="${l.d}" fill="${l.salt ? '#f4efe2' : '#6fc0ea'}" stroke="${l.salt ? '#d9cfb4' : '#4aa7da'}" stroke-width="0.8"/>`).join('')}
<g fill="none" stroke="#4aa7da" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" opacity="0.85">${g.rivers.map((d) => `<path d="${d}"/>`).join('')}</g>
${g.decorations.map(([x, y, k, r]) => decoration(x, y, k, r)).join('')}
${mountains}
${landmarks}
</svg>`
}

const keys = process.argv.slice(2).length
  ? process.argv.slice(2)
  : fs.readdirSync(new URL('scripts/.build/', ROOT)).filter((f) => f.endsWith('.json')).map((f) => f.slice(0, -5))
fs.mkdirSync(new URL('public/maps/', ROOT), { recursive: true })
for (const key of keys) {
  const t = Date.now()
  const g = JSON.parse(fs.readFileSync(new URL(`scripts/.build/${key}.json`, ROOT)))
  const svg = svgFor(g)
  const scale = scaleFor(g.width, g.height)
  const png = new Resvg(svg, { fitTo: { mode: 'width', value: Math.round(g.width * scale) }, font: { loadSystemFonts: false } }).render().asPng()
  const out = new URL(`public/maps/${key}.webp`, ROOT)
  await sharp(png).webp({ quality: 80, effort: 5 }).toFile(out.pathname)
  const kb = Math.round(fs.statSync(out).size / 1024)
  console.log(`${key}: ${Math.round(g.width * scale)}×${Math.round(g.height * scale)}px, ${kb} KB, ${((Date.now() - t) / 1000).toFixed(1)}s`)
}
