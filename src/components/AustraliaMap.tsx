import { memo } from 'react'
import geo from '../data/geo/australia.json'

/** Book-style painted map of Australia & Oceania. Static – rendered once. */
function AustraliaMap() {
  const { width, height, biomes } = geo
  return (
    <svg className="painted-map" viewBox={`0 0 ${width} ${height}`} width={width} height={height} aria-hidden="true">
      <defs>
        <linearGradient id="sea" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#8fd3f4" />
          <stop offset="100%" stopColor="#62b6e7" />
        </linearGradient>
        <filter id="paint" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="3" seed="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" xChannelSelector="R" yChannelSelector="G" result="wobbly" />
          <feGaussianBlur in="wobbly" stdDeviation="3.5" />
        </filter>
        <filter id="grain" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="8" />
          <feColorMatrix values="0 0 0 0 0.35  0 0 0 0 0.25  0 0 0 0 0.1  0 0 0 0.12 0" />
          <feComposite in2="SourceGraphic" operator="in" />
        </filter>
        <filter id="coast-glow" x="-5%" y="-5%" width="110%" height="110%">
          <feMorphology operator="dilate" radius="5" in="SourceAlpha" result="thick" />
          <feGaussianBlur in="thick" stdDeviation="6" />
          <feColorMatrix values="0 0 0 0 0.85  0 0 0 0 0.95  0 0 0 0 1  0 0 0 0.9 0" />
        </filter>
        <clipPath id="land-clip">
          <path d={geo.land} />
        </clipPath>
        <linearGradient id="mtn" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#b9a88f" />
          <stop offset="55%" stopColor="#8e7b64" />
          <stop offset="100%" stopColor="#6d5c48" />
        </linearGradient>
        <symbol id="d-palm" viewBox="-10 -20 20 22" overflow="visible">
          <path d="M0 0 C0 -6 1 -10 0 -14" stroke="#6b4a2b" strokeWidth="1.6" fill="none" />
          <path d="M0 -14 C-4 -17 -8 -15 -10 -12 M0 -14 C4 -17 8 -15 10 -12 M0 -14 C-2 -19 -6 -20 -8 -19 M0 -14 C2 -19 6 -20 8 -19" stroke="#2f8a3b" strokeWidth="2.4" fill="none" strokeLinecap="round" />
        </symbol>
      </defs>

      {/* sea */}
      <rect width={width} height={height} fill="url(#sea)" />
      {Array.from({ length: 70 }, (_, i) => {
        const x = (i * 137.5) % width
        const y = ((i * 89.3) % height)
        return <path key={i} d={`M${x} ${y} q6 -5 12 0 t12 0`} className="wave" />
      })}

      {/* neighbouring islands (no animals yet) */}
      <path d={geo.other} fill="#d9d2b6" stroke="#b7ae90" strokeWidth="1" opacity="0.8" />

      {/* soft light halo along the coast */}
      <path d={geo.land} filter="url(#coast-glow)" />

      {/* land base + painted biomes */}
      <path d={geo.land} fill="#dcc47e" />
      <g clipPath="url(#land-clip)">
        <g filter="url(#paint)">
          <path d={biomes.mallee} fill="#c9c47a" />
          <path d={biomes.savanna} fill="#c7cf6b" />
          <path d={biomes.desert} fill="#e3a35c" />
          <path d={biomes.redCentre} fill="#d9773f" />
          <path d={biomes.forestEast} fill="#77b35a" />
          <path d={biomes.forestSW} fill="#7fb85f" />
          <path d={biomes.tasmania} fill="#5f9f4c" />
          <path d={biomes.nz} fill="#6bab55" />
          <path d={biomes.rainforestNG} fill="#3f8f45" />
          <path d={biomes.rainforest} fill="#3f8f45" />
          <path d={biomes.rainforestCape} fill="#4f9a48" />
        </g>
        <rect width={width} height={height} filter="url(#grain)" />
      </g>
      <path d={geo.land} fill="none" stroke="#8a6f3f" strokeWidth="1.4" strokeOpacity="0.55" />

      {/* lakes & rivers */}
      {geo.lakes.map((l, i) => (
        <path key={i} d={l.d} fill={l.salt ? '#f4efe2' : '#6fc0ea'} stroke={l.salt ? '#d9cfb4' : '#4aa7da'} strokeWidth="0.8" />
      ))}
      {geo.rivers.map((d, i) => (
        <path key={i} d={d} fill="none" stroke="#4aa7da" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />
      ))}

      {/* vegetation */}
      {geo.decorations.map(([x, y, kind, r], i) => (
        <Decoration key={i} x={x as number} y={y as number} kind={kind as string} r={r as number} />
      ))}

      {/* mountains */}
      {geo.mountains.map(([x, y, snowy], i) => (
        <g key={i} transform={`translate(${x} ${y})`}>
          <path d="M-13 4 L-3 -12 L2 -5 L6 -10 L15 4 Z" fill="url(#mtn)" stroke="#5e4e3b" strokeWidth="0.8" strokeLinejoin="round" />
          {snowy ? <path d="M-6.5 -6.5 L-3 -12 L0.5 -7.5 L-2 -8 Z M3.5 -6.5 L6 -10 L9 -5.5 Z" fill="#fff" /> : null}
        </g>
      ))}

      {/* Uluru */}
      <g transform={`translate(${geo.uluru[0]} ${geo.uluru[1]})`}>
        <path d="M-14 3 C-13 -4 -9 -8 -2 -8 C6 -8 11 -5 14 3 Z" fill="#c4502a" stroke="#8f3417" strokeWidth="0.8" />
        <path d="M-8 -3 C-6 -5 -3 -6 0 -6" stroke="#e07a4f" strokeWidth="1" fill="none" />
      </g>
    </svg>
  )
}

function Decoration({ x, y, kind, r }: { x: number; y: number; kind: string; r: number }) {
  const s = 0.8 + r * 0.5
  const tf = `translate(${x} ${y}) scale(${s})`
  switch (kind) {
    case 'palm':
      return <use href="#d-palm" transform={tf} width="20" height="22" />
    case 'jungle':
      return (
        <g transform={tf}>
          <circle cx="-3" cy="-4" r="4.5" fill="#2d7a37" />
          <circle cx="3" cy="-5" r="4" fill="#358a3e" />
          <circle cx="0" cy="-8" r="3.6" fill="#44a04a" />
        </g>
      )
    case 'tree':
      return (
        <g transform={tf}>
          <rect x="-0.8" y="-4" width="1.6" height="5" fill="#6b4a2b" />
          <ellipse cx="0" cy="-7" rx="4.2" ry="5" fill="#3f8a3c" />
          <ellipse cx="-1.2" cy="-8.3" rx="1.8" ry="2.2" fill="#62ad55" />
        </g>
      )
    case 'acacia':
      return (
        <g transform={tf}>
          <path d="M0 0 V-5 M0 -4 L-3 -7 M0 -4 L3 -7" stroke="#6b4a2b" strokeWidth="1" fill="none" />
          <ellipse cx="0" cy="-7.5" rx="6" ry="2.2" fill="#7c9a3c" />
        </g>
      )
    case 'bush':
      return <ellipse cx="0" cy="-1.5" rx={3 * s} ry={2 * s} transform={`translate(${x} ${y})`} fill="#8a9a48" />
    default: // spinifex tussocks in the desert
      return (
        <g transform={tf} stroke="#a8863f" strokeWidth="0.9" strokeLinecap="round">
          <path d="M0 0 L-3 -4 M0 0 L0 -5 M0 0 L3 -4" />
        </g>
      )
  }
}

export default memo(AustraliaMap)
