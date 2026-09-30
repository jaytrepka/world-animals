import { useEffect, useMemo, useState } from 'react'
import { loadAllAnimals } from '../data/continents'
import type { Animal, Lang } from '../data/types'
import { UI, useLang } from '../i18n'
import { ArrowIcon } from './icons'

/** First letter for the headings; in Czech "Ch" is its own letter. */
function initial(name: string, lang: Lang) {
  if (lang === 'cs' && /^ch/i.test(name)) return 'Ch'
  return name.charAt(0).toLocaleUpperCase(lang)
}

/** All animals of all continents, alphabetically (in the current language). */
export default function AnimalListPage({ onBack, onAnimal }: { onBack: () => void; onAnimal: (a: Animal) => void }) {
  const { lang, t } = useLang()
  const [animals, setAnimals] = useState<Animal[] | null>(null)

  useEffect(() => {
    let alive = true
    loadAllAnimals().then((list) => alive && setAnimals(list))
    return () => {
      alive = false
    }
  }, [])

  const groups = useMemo(() => {
    if (!animals) return []
    const collator = new Intl.Collator(lang, { sensitivity: 'base' })
    const sorted = [...animals].sort((a, b) => collator.compare(a.name[lang], b.name[lang]))
    const out: { letter: string; animals: Animal[] }[] = []
    for (const a of sorted) {
      const letter = initial(a.name[lang], lang)
      if (out.at(-1)?.letter !== letter) out.push({ letter, animals: [] })
      out.at(-1)!.animals.push(a)
    }
    return out
  }, [animals, lang])

  return (
    <main className="list-page">
      <button className="round-btn back-btn" onClick={onBack} aria-label={t(UI.back)}>
        <ArrowIcon dir="left" />
      </button>
      <h1>
        {t(UI.allAnimals)}
        {animals && <span className="count">{animals.length}</span>}
      </h1>
      {!animals ? (
        <div className="list-loading" aria-busy="true">
          <span>🐾</span>
          <span>🐾</span>
          <span>🐾</span>
        </div>
      ) : (
        groups.map((g) => (
          <section key={g.letter} className="letter-group">
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
        ))
      )}
    </main>
  )
}
