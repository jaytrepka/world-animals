import { useState } from 'react'
import world from '../data/geo/world.json'
import { isContinent, loadContinent, thumbUrl, type ContinentKey } from '../data/continents'
import { CONTINENT_NAMES, UI, useLang } from '../i18n'
import { speak } from '../speech'
import Logo from './Logo'


const COLORS: Record<string, string> = {
  northAmerica: '#f4a259',
  southAmerica: '#8cc84b',
  europe: '#b48be0',
  africa: '#f6d155',
  asia: '#ef7c7c',
  australia: '#ff9f43',
  antarctica: '#ffffff',
}

/** A few animal photos floating over each continent, as a hint that it can be tapped. */
const TEASERS: Partial<Record<ContinentKey, { id: string; dx: number; dy: number }[]>> = {
  northAmerica: [
    { id: 'polar-bear', dx: -8, dy: -62 },
    { id: 'grizzly-bear', dx: -38, dy: -14 },
    { id: 'american-bison', dx: 18, dy: 12 },
  ],
  southAmerica: [
    { id: 'jaguar', dx: -12, dy: -24 },
    { id: 'capybara', dx: 28, dy: 8 },
    { id: 'patagonian-mara', dx: -14, dy: 46 },
  ],
  europe: [
    { id: 'red-fox', dx: -30, dy: 8 },
    { id: 'brown-bear', dx: 16, dy: -22 },
    { id: 'eurasian-lynx', dx: 26, dy: 20 },
  ],
  africa: [
    { id: 'lion', dx: -30, dy: -10 },
    { id: 'reticulated-giraffe', dx: 24, dy: -8 },
    { id: 'meerkat', dx: 6, dy: 44 },
  ],
  asia: [
    { id: 'giant-panda', dx: 10, dy: 8 },
    { id: 'bengal-tiger', dx: -44, dy: 44 },
    { id: 'snow-leopard', dx: -40, dy: -4 },
  ],
  australia: [
    { id: 'red-kangaroo', dx: -32, dy: -6 },
    { id: 'koala', dx: 30, dy: -18 },
    { id: 'platypus', dx: 16, dy: 30 },
  ],
  antarctica: [
    { id: 'emperor-penguin', dx: -60, dy: 4 },
    { id: 'orca', dx: 0, dy: 6 },
    { id: 'leopard-seal', dx: 60, dy: 4 },
  ],
}

export default function HomePage({ onOpen }: { onOpen: (continent: ContinentKey) => void }) {
  const { lang, t } = useLang()
  const [wiggle, setWiggle] = useState<string | null>(null)

  const tap = (key: string) => {
    const name = t(CONTINENT_NAMES[key])
    if (isContinent(key)) {
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
            const available = isContinent(key)
            return (
              <path
                key={key}
                d={d}
                className={`continent ${available ? 'available' : 'soon'} ${wiggle === key ? 'wiggle' : ''}`}
                fill={COLORS[key]}
                filter="url(#land-shadow)"
                onClick={() => tap(key)}
                onPointerEnter={() => isContinent(key) && loadContinent(key)}
                role="button"
                aria-label={t(CONTINENT_NAMES[key])}
              />
            )
          })}
          {(Object.entries(TEASERS) as [ContinentKey, { id: string; dx: number; dy: number }[]][]).map(([key, list]) => {
            if (!isContinent(key)) return null
            const [x, y] = world.labels[key as keyof typeof world.labels]
            return (
              <g key={key} className="teasers" onClick={() => tap(key)}>
                
                {list.map((a, i) => (
                  <g key={a.id} transform={`translate(${x + a.dx} ${y + a.dy})`} className="teaser" style={{ animationDelay: `${-i * 0.7}s` }}>
                    <clipPath id={`tc-${key}-${a.id}`}>
                      <circle r="19" />
                    </clipPath>
                    <circle r="22" fill="#fff" />
                    <image href={thumbUrl(key, a.id)} x="-19" y="-19" width="38" height="38" clipPath={`url(#tc-${key}-${a.id})`} preserveAspectRatio="xMidYMid slice" />
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
