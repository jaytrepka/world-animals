import { createContext, useContext } from 'react'
import type { L, Lang } from './data/types'

export const UI = {
  title: { en: 'Animals of the World', cs: 'Zvířata světa' },
  comingSoon: { en: 'Coming soon!', cs: 'Už brzy!' },
  allAnimals: { en: 'All animals', cs: 'Všechna zvířata' },
  back: { en: 'Back', cs: 'Zpět' },
  goNorth: { en: 'Go north', cs: 'Na sever' },
  goSouth: { en: 'Go south', cs: 'Na jih' },
  close: { en: 'Close', cs: 'Zavřít' },
  listen: { en: 'Listen', cs: 'Poslechnout' },
  switchLang: { en: 'Česky', cs: 'English' },
  classification: { en: 'Scientific classification', cs: 'Vědecké zařazení' },
  habitat: { en: 'Where does it live?', cs: 'Kde žije?' },
  diet: { en: 'What does it eat?', cs: 'Co jí?' },
  predators: { en: 'Who eats it?', cs: 'Kdo ho loví?' },
  photos: { en: 'Photos', cs: 'Fotografie' },
  prevPhoto: { en: 'Previous photo', cs: 'Předchozí fotka' },
  nextPhoto: { en: 'Next photo', cs: 'Další fotka' },
  north: { en: 'North', cs: 'Sever' },
  middle: { en: 'Middle', cs: 'Střed' },
  south: { en: 'South', cs: 'Jih' },
  kingdom: { en: 'Kingdom', cs: 'Říše' },
  phylum: { en: 'Phylum', cs: 'Kmen' },
  class: { en: 'Class', cs: 'Třída' },
  order: { en: 'Order', cs: 'Řád' },
  family: { en: 'Family', cs: 'Čeleď' },
  genus: { en: 'Genus', cs: 'Rod' },
  species: { en: 'Species', cs: 'Druh' },
} satisfies Record<string, L>

export const CONTINENT_NAMES: Record<string, L> = {
  northAmerica: { en: 'North America', cs: 'Severní Amerika' },
  southAmerica: { en: 'South America', cs: 'Jižní Amerika' },
  europe: { en: 'Europe', cs: 'Evropa' },
  africa: { en: 'Africa', cs: 'Afrika' },
  asia: { en: 'Asia', cs: 'Asie' },
  australia: { en: 'Australia and Oceania', cs: 'Austrálie a Oceánie' },
  antarctica: { en: 'Antarctica', cs: 'Antarktida' },
}

export const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: 'en',
  setLang: () => {},
})

export function useLang() {
  const { lang, setLang } = useContext(LangContext)
  const t = (text: L) => text[lang]
  return { lang, setLang, t }
}
