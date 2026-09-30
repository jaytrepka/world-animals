import { useState } from 'react'
import world from '../data/geo/world.json'
import { CONTINENT_NAMES, UI, useLang } from '../i18n'
import { speak } from '../speech'
import Logo from './Logo'

const AVAILABLE = new Set(['australia'])

const COLORS: Record<string, string> = {
  northAmerica: '#f4a259',
  southAmerica: '#8cc84b',
  europe: '#b48be0',
  africa: '#f6d155',
  asia: '#ef7c7c',
  australia: '#ff9f43',
  antarctica: '#ffffff',
}

/** A few animal photos floating over the playable continent, as a hint that it can be tapped. */
const TEASERS: Record<string, { id: string; dx: number; dy: number }[]> = {
  australia: [
    { id: 'red-kangaroo', dx: -40, dy: -6 },
    { id: 'koala', dx: 34, dy: -22 },
    { id: 'platypus', dx: 20, dy: 34 },
  ],
}

export default function HomePage({ onOpen }: { onOpen: (continent: string) => void }) {
  const { lang, t } = useLang()
  const [wiggle, setWiggle] = useState<string | null>(null)

  const tap = (key: string) => {
    const name = t(CONTINENT_NAMES[key])
    if (AVAILABLE.has(key)) {
      speak(name, lang)
      onOpen(key)
    } else {
      speak(`${name}. ${t(UI.comingSoon)}`, lang)
      setWiggle(key)
      window.setTimeout(() => setWiggle(null), 700)
    }
  }

  return (
    <main className="home">
      <header className="home-header">
        <Logo title={t(UI.title)} />
      </header>
      <div className="world-wrap">
        <svg className="world" viewBox={`0 0 ${world.width} ${world.height}`} role="img" aria-label={t(UI.title)}>
          <defs>
            <radialGradient id="ocean" cx="50%" cy="45%" r="65%">
              <stop offset="0%" stopColor="#bdeaff" />
              <stop offset="100%" stopColor="#6cc4ee" />
            </radialGradient>
            <filter id="land-shadow" x="-5%" y="-5%" width="110%" height="110%">
              <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#1b6a93" floodOpacity="0.35" />
            </filter>
          </defs>
          <path d={world.sphere} fill="url(#ocean)" stroke="#fff" strokeWidth="4" />
          {Object.entries(world.continents).map(([key, d]) => {
            const available = AVAILABLE.has(key)
            return (
              <path
                key={key}
                d={d}
                className={`continent ${available ? 'available' : 'soon'} ${wiggle === key ? 'wiggle' : ''}`}
                fill={COLORS[key]}
                filter="url(#land-shadow)"
                onClick={() => tap(key)}
                role="button"
                aria-label={t(CONTINENT_NAMES[key])}
              />
            )
          })}
          {Object.entries(TEASERS).map(([key, list]) => {
            const [x, y] = world.labels[key as keyof typeof world.labels]
            return (
              <g key={key} className="teasers" onClick={() => tap(key)}>
                <circle cx={x} cy={y} r="60" className="pulse" />
                {list.map((a) => (
                  <g key={a.id} transform={`translate(${x + a.dx} ${y + a.dy})`}>
                    <clipPath id={`tc-${a.id}`}>
                      <circle r="22" />
                    </clipPath>
                    <circle r="25" fill="#fff" />
                    <image href={`/animals/${a.id}/thumb.jpg`} x="-22" y="-22" width="44" height="44" clipPath={`url(#tc-${a.id})`} preserveAspectRatio="xMidYMid slice" />
                  </g>
                ))}
              </g>
            )
          })}
        </svg>
      </div>
    </main>
  )
}
