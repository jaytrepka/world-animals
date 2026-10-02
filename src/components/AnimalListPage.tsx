import { useEffect, useMemo, useRef, useState } from 'react'
import { loadAllAnimals } from '../data/continents'
import type { Animal, Lang } from '../data/types'
import { UI, useLang } from '../i18n'
import { ArrowIcon, CloseIcon, SearchIcon } from './icons'

/**
 * First letter for the headings. In Czech, Č Ř Š Ž and "Ch" are letters of their own;
 * other accents (Á, Ď, É, Ť…) are filed under the plain letter, as in a Czech dictionary.
 */
function initial(name: string, lang: Lang) {
  if (lang === 'cs' && /^ch/i.test(name)) return 'Ch'
  const first = name.charAt(0).toLocaleUpperCase(lang)
  if (lang === 'cs' && 'ČŘŠŽ'.includes(first)) return first
  return first.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

/** Lower-case and without accents, so "zirafa" finds "Žirafa". */
const fold = (s: string) =>
  s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()

const letterId = (letter: string) => `letter-${letter}`

/** All animals of all continents, alphabetically (in the current language), with search and a letter bar. */
export default function AnimalListPage({ onBack, onAnimal }: { onBack: () => void; onAnimal: (a: Animal) => void }) {
  const { lang, t } = useLang()
  const [animals, setAnimals] = useState<Animal[] | null>(null)
  const [query, setQuery] = useState('')

  useEffect(() => {
    let alive = true
    loadAllAnimals().then((list) => alive && setAnimals(list))
    return () => {
      alive = false
    }
  }, [])


  const groups = useMemo(() => {
    if (!animals) return []
    const words = fold(query).split(/\s+/).filter(Boolean)
    // Search only the name shown on the card (in the current language)
    const found = words.length ? animals.filter((a) => words.every((w) => fold(a.name[lang]).includes(w))) : animals
    const collator = new Intl.Collator(lang, { sensitivity: 'base' })
    const sorted = [...found].sort((a, b) => collator.compare(a.name[lang], b.name[lang]))
    const out: { letter: string; animals: Animal[] }[] = []
    for (const a of sorted) {
      const letter = initial(a.name[lang], lang)
      if (out.at(-1)?.letter !== letter) out.push({ letter, animals: [] })
      out.at(-1)!.animals.push(a)
    }
    return out
  }, [animals, lang, query])

  const count = groups.reduce((n, g) => n + g.animals.length, 0)

  return (
    <main className="list-page">
      <button className="round-btn back-btn" onClick={onBack} aria-label={t(UI.back)}>
        <ArrowIcon dir="left" />
      </button>
      <div className="list-top">
        <h1>
          {t(UI.allAnimals)}
          {animals && <span className="count">{count}</span>}
        </h1>
        <label className="search">
          <SearchIcon />
          <input
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              window.scrollTo({ top: 0 })
            }}
            placeholder={t(UI.searchPlaceholder)}
            aria-label={t(UI.search)}
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
            enterKeyHint="search"
            onKeyDown={(e) => e.key === 'Enter' && e.currentTarget.blur()}
          />
          {query && (
            <button className="clear-search" onClick={() => setQuery('')} aria-label={t(UI.clearSearch)}>
              <CloseIcon />
            </button>
          )}
        </label>
      </div>

      {!animals ? (
        <div className="list-loading" aria-busy="true">
          <span>🐾</span>
          <span>🐾</span>
          <span>🐾</span>
        </div>
      ) : groups.length === 0 ? (
        <p className="no-results">
          <span aria-hidden="true">🔍🐾</span>
          {t(UI.noResults)}
        </p>
      ) : (
        <>
          {groups.map((g) => (
            <section key={g.letter} id={letterId(g.letter)} className="letter-group">
              <h2 className="letter">{g.letter}</h2>
              <div className="animal-grid">
                {g.animals.map((a) => (
                  <button key={`${a.continent}/${a.id}`} className="animal-card" onClick={() => onAnimal(a)}>
                    <img src={a.thumb} alt="" loading="lazy" draggable={false} />
                    <span>{a.name[lang]}</span>
                  </button>
                ))}
              </div>
            </section>
          ))}
          {groups.length > 1 && <LetterBar letters={groups.map((g) => g.letter)} />}
        </>
      )}
    </main>
  )
}

/** iPhone-contacts-style letter bar: tap a letter, or slide a finger along the bar, to jump there. */
function LetterBar({ letters }: { letters: string[] }) {
  const [active, setActive] = useState<string | null>(null)
  const last = useRef<string | null>(null)
  const [height, setHeight] = useState(() => window.innerHeight)
  useEffect(() => {
    const onResize = () => setHeight(window.innerHeight)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // On short screens (e.g. a phone held sideways) show only some letters with dots between them, like iOS.
  // Every item still jumps to a real letter, so sliding along the bar reaches all of them.
  const fit = Math.max(5, Math.floor((height - 190) / 13))
  const slots = fit % 2 ? fit : fit - 1 // odd, so the bar starts and ends with a real letter
  const items: { letter: string; label: string }[] =
    letters.length <= fit
      ? letters.map((l) => ({ letter: l, label: l }))
      : Array.from({ length: slots }, (_, i) => {
          const letter = letters[Math.round((i * (letters.length - 1)) / (slots - 1))]
          return { letter, label: i % 2 ? '•' : letter }
        })

  const jumpAt = (x: number, y: number) => {
    const el = document.elementFromPoint(x, y) as HTMLElement | null
    const letter = el?.dataset.letter
    if (!letter || letter === last.current) return
    last.current = letter
    setActive(letter)
    document.getElementById(letterId(letter))?.scrollIntoView({ block: 'start' })
    navigator.vibrate?.(5)
  }
  const end = () => {
    last.current = null
    setActive(null)
  }

  return (
    <>
      <nav
        className="letter-bar"
        style={{ '--n': items.length } as React.CSSProperties}
        aria-label="A–Z"
        onPointerDown={(e) => {
          e.currentTarget.setPointerCapture(e.pointerId)
          jumpAt(e.clientX, e.clientY)
        }}
        onPointerMove={(e) => e.buttons && jumpAt(e.clientX, e.clientY)}
        onPointerUp={end}
        onPointerCancel={end}
      >
        {items.map((it, i) => (
          <span key={i} data-letter={it.letter} className={it.letter === active && it.label !== '•' ? 'on' : ''}>
            {it.label}
          </span>
        ))}
      </nav>
      {active && (
        <div className="letter-bubble" aria-hidden="true">
          {active}
        </div>
      )}
    </>
  )
}
