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

/**
 * Download + decode the big painted map before showing the page (so it doesn't pop in).
 * Never rejects and never waits longer than a few seconds (decode() can stall, e.g. in background tabs).
 */
function decodeImage(src: string): Promise<void> {
  const img = new Image()
  img.src = src
  const loaded = new Promise<void>((resolve) => {
    img.onload = img.onerror = () => resolve()
  })
  const decoded = img.decode().catch(() => undefined)
  const timeout = new Promise<void>((resolve) => setTimeout(resolve, 4000))
  return Promise.race([decoded, loaded.then(() => Promise.race([decoded, new Promise<void>((r) => setTimeout(r, 400))])), timeout])
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

const animalCache = new Map<ContinentKey, Promise<Animal[]>>()

/** The animals of one continent (texts, positions, photos) – without the big map picture. */
export function loadAnimals(key: ContinentKey): Promise<Animal[]> {
  let p = animalCache.get(key)
  if (!p) {
    const none = <T,>(v: T) => Promise.resolve(v)
    p = Promise.all([
      contentMods[`./${key}/content.ts`]?.() ?? none({ content: [] as AnimalContent[] }),
      placementMods[`./${key}/placements.json`]?.() ?? none({ default: [] as Placement[] }),
      imageMods[`./${key}/images.json`]?.() ?? none({ default: {} as Images }),
    ]).then(([{ content }, { default: placements }, { default: images }]) => {
      const byId = new Map(content.map((c) => [c.id, c]))
      return placements.flatMap((p): Animal[] => {
        const c = byId.get(p.id)
        const img = images[p.id]
        if (!c || !img?.count) return []
        return [
          {
            ...c,
            continent: key,
            region: p.region,
            x: p.x,
            y: p.y,
            thumb: thumbUrl(key, p.id),
            photos: Array.from({ length: img.count }, (_, i) => `/animals/${key}/${p.id}/${i + 1}.jpg`),
            credits: img.credits,
          },
        ]
      })
    })
    animalCache.set(key, p)
  }
  return p
}

/** Everything needed to show a continent page: map meta, the decoded map picture and the animals. */
export function loadContinent(key: ContinentKey): Promise<ContinentData> {
  let p = cache.get(key)
  if (!p) {
    p = Promise.all([loadAnimals(key), geoMods[`../geo/${key}.json`](), decodeImage(mapUrl(key))]).then(
      ([animals, { default: geo }]) => ({ key, geo, animals }),
    )
    cache.set(key, p)
  }
  return p
}

let allCache: Promise<Animal[]> | null = null

/** Every animal of every continent, each species once (e.g. the polar bear lives on three continents). */
export function loadAllAnimals(): Promise<Animal[]> {
  allCache ??= Promise.all(CONTINENTS.filter((k) => isContinent(k)).map(loadAnimals)).then((lists) => {
    const seen = new Set<string>()
    return lists.flat().filter((a) => {
      const species = a.classification.species.toLowerCase()
      if (seen.has(species)) return false
      seen.add(species)
      return true
    })
  })
  return allCache
}

export function thumbUrl(continent: ContinentKey, id: string) {
  return `/animals/${continent}/${id}/thumb.jpg`
}
