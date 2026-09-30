// Checks that land animals are on land and sea animals (sea: true) are in the sea.
// Usage: node scripts/check-roster.mjs <continent>
import fs from 'fs'
import { geoContains } from 'd3-geo'
const continent = process.argv[2]
const land = JSON.parse(fs.readFileSync('scripts/geo/ne_50m_admin_0_countries.geojson')).features
const roster = JSON.parse(fs.readFileSync(`src/data/continents/${continent}/roster.json`))
const ids = new Set()
let bad = 0
for (const a of roster) {
  if (ids.has(a.id)) { console.log('DUPLICATE', a.id); bad++ }
  ids.add(a.id)
  const on = land.some((f) => geoContains(f, [a.lon, a.lat]))
  if (on === !!a.sea) { console.log('BAD', a.id, on ? 'is on land but marked sea' : 'is in the sea but not marked sea'); bad++ }
}
console.log(roster.length, 'animals,', bad, 'problems')
