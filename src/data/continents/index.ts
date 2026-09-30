import type { Animal, AnimalContent, L, PhotoCredit, RegionId } from '../types'

export type ContinentKey = 'northAmerica' | 'southAmerica' | 'europe' | 'africa' | 'asia' | 'australia' | 'antarctica'

/** Map meta; the painted map itself is the image /maps/<key>.webp (made by scripts/render-maps.mjs). */
export interface ContinentGeo {
  width: number
  height: number
  views: Record<RegionId, { x: number; y: number; w: number; h: number }>
}

export interface ContinentData {
  key: ContinentKey
  geo: ContinentGeo
  animals: Animal[]
}

export const CONTINENTS: ContinentKey[] = ['northAmerica', 'southAmerica', 'europe', 'africa', 'asia', 'australia', 'antarctica']

/** Names of the three parts; Antarctica is seen from above the South Pole, so its parts are named differently. */
export const REGION_NAMES: Partial<Record<ContinentKey, Record<RegionId, L>>> = {
  antarctica: {
    north: { en: 'Antarctic Peninsula', cs: 'Antarktický poloostrov' },
    middle: { en: 'South Pole', cs: 'Jižní pól' },
    south: { en: 'East Antarctica', cs: 'Východní Antarktida' },
  },
}

type Placement = { id: string; region: RegionId; x: number; y: number }
type Images = Record<string, { count: number; credits: PhotoCredit[] }>

const contentMods = import.meta.glob<{ content: AnimalContent[] }>('./*/content.ts')
const placementMods = import.meta.glob<{ default: Placement[] }>('./*/placements.json')
const imageMods = import.meta.glob<{ default: Images }>('./*/images.json')
const geoMods = import.meta.glob<{ default: ContinentGeo }>('../geo/*.json')

const cache = new Map<ContinentKey, Promise<ContinentData>>()

export const mapUrl = (key: ContinentKey) => `/maps/${key}.webp`

/** Download + decode the big painted map before showing the page (so it doesn't pop in). Never rejects. */
function decodeImage(src: string): Promise<void> {
  const img = new Image()
  img.src = src
  return img.decode().catch(() => undefined)
}

export function isContinent(key: string | undefined): key is ContinentKey {
  if (import.meta.env.DEV && key && geoMods[`../geo/${key}.json`]) return true // preview maps while data is being made
  return (
    !!key &&
    (CONTINENTS as string[]).includes(key) &&
    !!contentMods[`./${key}/content.ts`] &&
    !!placementMods[`./${key}/placements.json`] &&
    !!imageMods[`./${key}/images.json`] &&
    !!geoMods[`../geo/${key}.json`]
  )
}

export function loadContinent(key: ContinentKey): Promise<ContinentData> {
  let p = cache.get(key)
  if (!p) {
    const none = <T,>(v: T) => Promise.resolve(v)
    p = Promise.all([
      contentMods[`./${key}/content.ts`]?.() ?? none({ content: [] as AnimalContent[] }),
      placementMods[`./${key}/placements.json`]?.() ?? none({ default: [] as Placement[] }),
      imageMods[`./${key}/images.json`]?.() ?? none({ default: {} as Images }),
      geoMods[`../geo/${key}.json`](),
      decodeImage(mapUrl(key)),
    ]).then(([{ content }, { default: placements }, { default: images }, { default: geo }]) => {
      const byId = new Map(content.map((c) => [c.id, c]))
      const animals = placements.flatMap((p): Animal[] => {
        const c = byId.get(p.id)
        const img = images[p.id]
        if (!c || !img?.count) return []
        return [
          {
            ...c,
            region: p.region,
            x: p.x,
            y: p.y,
            thumb: `/animals/${key}/${p.id}/thumb.jpg`,
            photos: Array.from({ length: img.count }, (_, i) => `/animals/${key}/${p.id}/${i + 1}.jpg`),
            credits: img.credits,
          },
        ]
      })
      return { key, geo, animals }
    })
    cache.set(key, p)
  }
  return p
}

export const thumbUrl = (continent: ContinentKey, id: string) => `/animals/${continent}/${id}/thumb.jpg`
