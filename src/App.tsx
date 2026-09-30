import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { isContinent, loadContinent, type ContinentData, type ContinentKey } from './data/continents'
import type { Lang, RegionId } from './data/types'
import { LangContext, UI } from './i18n'
import { stopSpeaking } from './speech'
import HomePage from './components/HomePage'
import ContinentPage from './components/ContinentPage'
import AnimalModal from './components/AnimalModal'
import { CzechFlag, UkFlag } from './components/icons'

type Route = { page: 'home' } | { page: 'continent'; continent: ContinentKey; region: RegionId; animal?: string }

const REGIONS: RegionId[] = ['north', 'middle', 'south']

function parseHash(hash: string): Route {
  const [continent, region, animal] = hash.replace(/^#\/?/, '').split('/')
  if (isContinent(continent)) {
    return { page: 'continent', continent, region: REGIONS.includes(region as RegionId) ? (region as RegionId) : 'north', animal }
  }
  return { page: 'home' }
}

function toHash(r: Route) {
  if (r.page === 'home') return '#/'
  return `#/${r.continent}/${r.region}${r.animal ? `/${r.animal}` : ''}`
}

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem('lang')
    if (saved === 'cs' || saved === 'en') return saved
  } catch {
    /* storage unavailable */
  }
  return navigator.language?.toLowerCase().startsWith('cs') ? 'cs' : 'en'
}

export default function App() {
  const [route, setRoute] = useState<Route>(() => parseHash(window.location.hash))
  const [lang, setLangState] = useState<Lang>(initialLang)
  /** True when the open animal window added its own history entry (so closing = going back). */
  const modalPushed = useRef(false)

  useEffect(() => {
    const onHash = () => {
      modalPushed.current = false
      setRoute(parseHash(window.location.hash))
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = UI.title[lang]
  }, [lang])

  const navigate = useCallback((r: Route, replace = false) => {
    const hash = toHash(r)
    if (replace) window.history.replaceState(null, '', hash)
    else window.history.pushState(null, '', hash)
    setRoute(r)
  }, [])

  const setLang = useCallback((l: Lang) => {
    stopSpeaking()
    setLangState(l)
    try {
      localStorage.setItem('lang', l)
    } catch {
      /* storage unavailable */
    }
  }, [])

  const langValue = useMemo(() => ({ lang, setLang }), [lang, setLang])

  // Continent data (map + animals) is loaded on demand
  const [data, setData] = useState<ContinentData | null>(null)
  const wantedKey = route.page === 'continent' ? route.continent : null
  useEffect(() => {
    if (!wantedKey) return
    let alive = true
    loadContinent(wantedKey).then((d) => alive && setData(d))
    return () => {
      alive = false
    }
  }, [wantedKey])
  const current = data && data.key === wantedKey ? data : null
  const animal = route.page === 'continent' && route.animal ? current?.animals.find((a) => a.id === route.animal) : undefined

  return (
    <LangContext.Provider value={langValue}>
      {route.page === 'home' ? (
        <HomePage onOpen={(c) => navigate({ page: 'continent', continent: c, region: 'north' })} />
      ) : !current ? (
        <div className="loading" aria-busy="true">
          <span>🐾</span>
          <span>🐾</span>
          <span>🐾</span>
        </div>
      ) : (
        <ContinentPage
          key={current.key}
          data={current}
          region={route.region}
          onRegion={(region) => navigate({ ...route, region, animal: undefined }, true)}
          onBack={() => navigate({ page: 'home' })}
          onAnimal={(a) => {
            modalPushed.current = true
            navigate({ ...route, animal: a.id })
          }}
        />
      )}

      {animal && route.page === 'continent' && (
        <AnimalModal
          animal={animal}
          onClose={() => {
            if (modalPushed.current) {
              modalPushed.current = false
              window.history.back()
              setRoute({ ...route, animal: undefined })
            } else {
              navigate({ ...route, animal: undefined }, true)
            }
          }}
        />
      )}

      <button
        className="round-btn lang-btn"
        onClick={() => setLang(lang === 'en' ? 'cs' : 'en')}
        aria-label={UI.switchLang[lang]}
        title={UI.switchLang[lang]}
      >
        {lang === 'en' ? <CzechFlag /> : <UkFlag />}
      </button>
    </LangContext.Provider>
  )
}
