export type Lang = 'en' | 'cs'

/** A text in both languages. */
export type L = { en: string; cs: string }

export type RegionId = 'north' | 'middle' | 'south'

/** A taxonomic rank: Latin name plus a friendly common name in both languages. */
export type Taxon = { latin: string; en: string; cs: string }

export interface AnimalContent {
  id: string
  /** Full common name, e.g. "Red kangaroo" / "Klokan rudý". */
  name: L
  classification: {
    kingdom: Taxon
    phylum: Taxon
    class: Taxon
    order: Taxon
    family: Taxon
    genus: string
    species: string
  }
  /** Where it lives – 1–2 short, simple sentences a parent can read aloud to a 5-year-old. */
  habitat: L
  /** What it eats – 1–2 short sentences. */
  diet: L
  /** Who eats it (predators) – 1–2 short sentences. */
  predators: L
}

export interface PhotoCredit {
  file: string
  author: string
  license: string
  source: string
}

/** Content + position on the continent map + photos. */
export interface Animal extends AnimalContent {
  /** Key of the continent this entry comes from (see data/continents). */
  continent: string
  region: RegionId
  /** Position in projected map units. */
  x: number
  y: number
  thumb: string
  photos: string[]
  credits: PhotoCredit[]
}
