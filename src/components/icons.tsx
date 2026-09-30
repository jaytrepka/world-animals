export function ArrowIcon({ dir }: { dir: 'up' | 'down' | 'left' | 'right' }) {
  const rot = { up: 0, right: 90, down: 180, left: 270 }[dir]
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" style={{ transform: `rotate(${rot}deg)` }}>
      <path d="M24 8 L42 28 H31 V40 H17 V28 H6 Z" fill="currentColor" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
    </svg>
  )
}

export function CloseIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M12 12 L36 36 M36 12 L12 36" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
    </svg>
  )
}

export function SpeakerIcon({ playing = false }: { playing?: boolean }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M8 18 H16 L27 9 V39 L16 30 H8 Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M32 17 C35 20 35 28 32 31" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none" opacity={playing ? 1 : 0.9} />
      <path d="M37 12 C43 18 43 30 37 36" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none" opacity={playing ? 1 : 0.6} />
    </svg>
  )
}

export function CzechFlag() {
  return (
    <svg viewBox="0 0 90 60" aria-hidden="true">
      <rect width="90" height="30" fill="#fff" />
      <rect y="30" width="90" height="30" fill="#d7141a" />
      <path d="M0 0 L45 30 L0 60 Z" fill="#11457e" />
    </svg>
  )
}

export function UkFlag() {
  return (
    <svg viewBox="0 0 60 40" aria-hidden="true">
      <clipPath id="uk-clip"><rect width="60" height="40" /></clipPath>
      <g clipPath="url(#uk-clip)">
        <rect width="60" height="40" fill="#012169" />
        <path d="M0 0 L60 40 M60 0 L0 40" stroke="#fff" strokeWidth="8" />
        <path d="M0 0 L60 40 M60 0 L0 40" stroke="#C8102E" strokeWidth="3" />
        <path d="M30 0 V40 M0 20 H60" stroke="#fff" strokeWidth="12" />
        <path d="M30 0 V40 M0 20 H60" stroke="#C8102E" strokeWidth="7" />
      </g>
    </svg>
  )
}
