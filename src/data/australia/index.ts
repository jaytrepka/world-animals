import type { Animal } from '../types'
import { northContent } from './content-north'
import { middleContent } from './content-middle'
import { southContent } from './content-south'
import placements from './placements.json'
import images from '../images.json'

const content = new Map([...northContent, ...middleContent, ...southContent].map((c) => [c.id, c]))
const imageData = images as Record<string, { count: number; credits: Animal['credits'] }>

export const australiaAnimals: Animal[] = placements.map((p) => {
  const c = content.get(p.id)
  if (!c) throw new Error(`Missing content for ${p.id}`)
  const img = imageData[p.id]
  return {
    ...c,
    region: p.region as Animal['region'],
    x: p.x,
    y: p.y,
    thumb: `/animals/${p.id}/thumb.jpg`,
    photos: Array.from({ length: img?.count ?? 0 }, (_, i) => `/animals/${p.id}/${i + 1}.jpg`),
    credits: img?.credits ?? [],
  }
})
