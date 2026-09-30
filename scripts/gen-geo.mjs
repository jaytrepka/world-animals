// Generates pre-projected SVG path data for the world map and the Australia detail map.
// Run: node scripts/gen-geo.mjs   (source data: Natural Earth, public domain, in scripts/geo/)
import fs from 'fs'
import { geoNaturalEarth1, geoMercator, geoPath, geoContains } from 'd3-geo'
import pc from 'polygon-clipping'

const J = (p) => JSON.parse(fs.readFileSync(new URL(p, import.meta.url)))
const out = (p, data) => fs.writeFileSync(new URL(p, import.meta.url), JSON.stringify(data))
const round = (d) => d && d.replace(/(\d+\.\d{1})\d+/g, '$1')

const polys = (g) => (g.type === 'Polygon' ? [g.coordinates] : g.coordinates)
const mp = (coords) => ({ type: 'MultiPolygon', coordinates: coords })
// polygon-clipping winds outer rings counter-clockwise; d3 (spherical) wants clockwise.
const d3wind = (multi) => multi.map((poly) => poly.map((ring) => [...ring].reverse()))
const inRing = ([x, y], ring) => {
  let inside = false
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i]; const [xj, yj] = ring[j]
    if ((yi > y) !== (yj > y) && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside
  }
  return inside
}

// ---------------------------------------------------------------- world map
{
  const countries = J('./geo/ne_110m_admin_0_countries.geojson').features
  const groups = {}
  const add = (k, p) => (groups[k] ||= []).push(p)
  const WEST_OF_URALS = [[[-30, 30], [60, 30], [60, 85], [-30, 85], [-30, 30]]]
  const EAST_OF_URALS = [[[60, 30], [180, 30], [180, 85], [60, 85], [60, 30]]]
  const KEY = {
    'North America': 'northAmerica', 'South America': 'southAmerica', Europe: 'europe',
    Africa: 'africa', Asia: 'asia', Oceania: 'australia', Antarctica: 'antarctica',
  }
  for (const f of countries) {
    const cont = f.properties.CONTINENT
    const a3 = f.properties.ADM0_A3
    for (const p of polys(f.geometry)) {
      if (a3 === 'RUS') {
        pc.intersection([p], WEST_OF_URALS).forEach((q) => add('europe', q))
        pc.intersection([p], EAST_OF_URALS).forEach((q) => add('asia', q))
        continue
      }
      if (a3 === 'IDN' || a3 === 'TLS') { add('asia', p); continue }
      if (KEY[cont]) add(KEY[cont], p)
    }
  }
  const projection = geoNaturalEarth1().fitExtent([[10, 10], [990, 510]], { type: 'Sphere' })
  const path = geoPath(projection)
  const continents = {}
  for (const [k, list] of Object.entries(groups)) {
    const merged = pc.union(...list.map((p) => [p]))
    continents[k] = round(path(mp(d3wind(merged))))
  }
  const labels = {
    northAmerica: [-102, 45], southAmerica: [-60, -12], europe: [18, 52], africa: [20, 5],
    asia: [95, 45], australia: [134, -25], antarctica: [40, -80],
  }
  const labelXY = Object.fromEntries(Object.entries(labels).map(([k, ll]) => [k, projection(ll).map(Math.round)]))
  out('../src/data/geo/world.json', {
    width: 1000, height: 520, sphere: round(path({ type: 'Sphere' })), continents, labels: labelXY,
  })
  console.log('world ok')
}

// ---------------------------------------------------------------- australia detail
{
  const countries = J('./geo/ne_50m_admin_0_countries.geojson').features
  const projection = geoMercator().fitWidth(1000, {
    type: 'Polygon', coordinates: [[[111, 1], [179.5, 1], [179.5, -48], [111, -48], [111, 1]]],
  })
  const path = geoPath(projection)
  const [, bottom] = projection([150, -48.5])
  const height = Math.ceil(bottom)

  const main = []  // land that belongs to the continent (animals live here)
  const other = [] // neighbouring land, drawn muted
  for (const f of countries) {
    const a3 = f.properties.ADM0_A3
    for (const p of polys(f.geometry)) {
      const lons = p[0].map((c) => c[0])
      const lats = p[0].map((c) => c[1])
      if (Math.max(...lats) < -52 || Math.min(...lons) < 95) continue
      if (['AUS', 'NZL', 'PNG'].includes(a3)) main.push(p)
      else if (a3 === 'IDN' && Math.min(...lons) > 130.8 && Math.max(...lats) < 0) main.push(p)
      else if (['IDN', 'TLS', 'SLB', 'VUT', 'NCL', 'FJI', 'PHL', 'MYS'].includes(a3)) other.push(p)
    }
  }
  const landGeo = mp(main)

  // Hand-drawn biome zones (lon/lat). They get clipped to the land shape when rendered.
  const biomes = {
    savanna: [[113, -20], [117, -19.5], [122, -16.5], [124, -14], [128, -13.5], [130, -11], [133, -10.5], [137, -11], [136.5, -15], [139.5, -17], [141.5, -12.5], [142.2, -10], [143.8, -13], [145.5, -15], [146.5, -18.5], [148.5, -20], [150.5, -22.5], [148, -24], [145, -23], [141, -21.5], [137, -19], [133, -18], [129, -17.5], [124, -18.5], [118, -19.5]],
    desert: [[114.5, -21.5], [118, -20.5], [121, -19.8], [125, -20], [129, -19.3], [133, -20], [137, -21], [139.5, -22.5], [141, -25], [141.5, -28.5], [139, -30.8], [135.5, -31], [132, -30.5], [128, -30.2], [124, -30.5], [120, -29.5], [117, -27.5], [115, -25.5], [114.2, -23]],
    redCentre: [[122, -21.5], [127, -20.8], [132, -21.3], [136, -22.8], [139, -24.5], [139.5, -27.5], [136, -28.5], [132, -27.5], [128, -27.8], [124, -27], [121.5, -24.5]],
    rainforest: [[145.2, -15.2], [145.6, -15.8], [146.1, -17.2], [146.3, -18.6], [145.8, -18.8], [145.3, -17.5], [144.9, -16]],
    rainforestCape: [[142.5, -10.6], [143.3, -11.8], [143.7, -13.8], [143.1, -13.7], [142.6, -12]],
    rainforestNG: [[130.5, -0.3], [135, -0.8], [141, -1.8], [146, -4], [151.5, -5], [151.5, -11], [147, -10.4], [144, -8.5], [142.5, -8.2], [141, -8], [138.5, -7.2], [135, -4.5], [131, -2]],
    forestEast: [[151.8, -24.5], [153.6, -25], [153.8, -28.5], [153.2, -31], [152, -33], [150.8, -35], [150, -37.5], [147.5, -38.3], [146, -39.2], [144, -38.8], [141.5, -38.4], [142.5, -37], [145, -36.8], [147, -35.8], [148.5, -34], [149.8, -32], [150.5, -29], [151, -26.5]],
    forestSW: [[114.8, -30.5], [116.2, -31], [117.5, -33], [119.8, -33.8], [118, -35.3], [115, -34.6], [115, -32.5]],
    mallee: [[134, -32.5], [138, -32], [141, -33], [144, -34.5], [146.5, -35.5], [142, -37.5], [138.5, -35.8], [136, -34.5]],
    tasmania: [[143.5, -39.5], [149, -39.5], [149, -44], [143.5, -44]],
    nz: [[165, -34], [179, -34], [179, -48], [165, -48]],
  }
  const biomePaths = {}
  for (const [k, ring] of Object.entries(biomes)) {
    const clipped = pc.intersection(main, [[[...ring, ring[0]]]])
    biomePaths[k] = round(path(mp(d3wind(clipped))))
  }

  // Deterministic pseudo-random for scattered decorations
  let seed = 7
  const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647)
  const scatter = (zones, count, kind) => {
    const pts = []
    const rings = zones.map((z) => biomes[z])
    let guard = 0
    while (pts.length < count && guard++ < count * 400) {
      const ring = rings[Math.floor(rnd() * rings.length)]
      const lons = ring.map((c) => c[0]); const lats = ring.map((c) => c[1])
      const lon = Math.min(...lons) + rnd() * (Math.max(...lons) - Math.min(...lons))
      const lat = Math.min(...lats) + rnd() * (Math.max(...lats) - Math.min(...lats))
      if (!inRing([lon, lat], ring)) continue
      if (!geoContains(landGeo, [lon, lat])) continue
      const [x, y] = projection([lon, lat])
      pts.push([Math.round(x * 10) / 10, Math.round(y * 10) / 10, kind, Math.round(rnd() * 100) / 100])
    }
    return pts
  }
  const decorations = [
    ...scatter(['rainforest', 'rainforestCape'], 26, 'palm'),
    ...scatter(['rainforestNG'], 120, 'jungle'),
    ...scatter(['forestEast', 'forestSW', 'tasmania'], 130, 'tree'),
    ...scatter(['nz'], 70, 'tree'),
    ...scatter(['savanna'], 110, 'acacia'),
    ...scatter(['desert'], 150, 'spinifex'),
    ...scatter(['mallee'], 40, 'bush'),
  ].sort((a, b) => a[1] - b[1])

  const mountains = [
    [146.2, -20.4], [147.3, -22.8], [148.6, -25.5], [150.4, -28.3], [151.4, -30.4], [149.7, -32.4], [149.1, -35.6], [148.3, -36.6], [146.9, -37.2],
    [138.6, -31.3], [133.6, -23.3], [118.3, -22.6], [126.0, -17.5], [146.2, -42.2],
    [169.3, -44.4], [170.6, -43.5], [171.8, -42.8], [168.3, -45.3], [175.6, -39.3],
    [137.2, -4.0], [138.9, -4.3], [140.5, -4.7], [142.4, -5.5], [144.1, -5.9], [145.8, -6.4], [147.3, -7.6],
  ].map(([lon, lat]) => [...projection([lon, lat]).map((v) => Math.round(v * 10) / 10), lon > 160 ? 1 : 0])
  const uluru = projection([131.04, -25.34]).map((v) => Math.round(v * 10) / 10)

  const inBox = (f) => {
    const m = JSON.stringify(f.geometry.coordinates).match(/\[(-?[\d.]+),(-?[\d.]+)\]/)
    return m && +m[1] > 110 && +m[2] < 1 && +m[2] > -50
  }
  const rivers = J('./geo/ne_50m_rivers_lake_centerlines.geojson').features.filter(inBox)
    .map((f) => round(path(f.geometry)))
  const lakes = J('./geo/ne_50m_lakes.geojson').features.filter(inBox).map((f) => ({
    d: round(path(f.geometry)),
    salt: /Eyre|Torrens|Gairdner|Frome|Mackay|Disappointment|Barlee/.test(f.properties.name || ''),
  }))

  // Each part of the continent: the area (projected) that the camera should show.
  const view = (lon0, lat0, lon1, lat1) => {
    const [x0, y0] = projection([lon0, lat0]); const [x1, y1] = projection([lon1, lat1])
    return { x: Math.round(x0), y: Math.round(y0), w: Math.round(x1 - x0), h: Math.round(y1 - y0) }
  }
  const views = {
    north: view(113, 0.5, 156, -19.5),
    middle: view(112, -18.5, 157, -31.5),
    south: view(113, -31, 179, -47.5),
  }

  const roster = J('./roster.json')
  const placements = roster.map((a) => {
    const [x, y] = projection([a.lon, a.lat])
    return { id: a.id, region: a.region, x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 }
  })

  out('../src/data/geo/australia.json', {
    width: 1000, height,
    land: round(path(landGeo)), other: round(path(mp(other))),
    biomes: biomePaths, decorations, mountains, uluru, rivers, lakes, views,
  })
  out('../src/data/australia/placements.json', placements)
  console.log('australia ok', height, Object.keys(biomePaths).length, decorations.length)
}
