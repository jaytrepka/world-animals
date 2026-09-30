// Generates pre-projected SVG data for the world map and every continent map.
//
//   node scripts/gen-geo.mjs              → world + all continents that have a roster
//   node scripts/gen-geo.mjs africa asia  → only these continents (world is always rebuilt)
//
// Inputs: Natural Earth GeoJSON in scripts/geo/ (see README), and per continent
// src/data/continents/<key>/{roster.json, map.json}.
// Outputs: src/data/geo/world.json, src/data/geo/<key>.json, src/data/continents/<key>/placements.json
// It also prints OVERLAP warnings for animals whose pictures would cover each other on a typical screen.
import fs from 'fs'
import { geoAzimuthalEqualArea, geoMercator, geoNaturalEarth1, geoPath, geoContains, geoBounds } from 'd3-geo'
import pc from 'polygon-clipping'

const ROOT = new URL('../', import.meta.url)
const J = (p) => JSON.parse(fs.readFileSync(new URL(p, ROOT)))
const exists = (p) => fs.existsSync(new URL(p, ROOT))
const write = (p, data) => fs.writeFileSync(new URL(p, ROOT), JSON.stringify(data))
const r1 = (v) => Math.round(v * 10) / 10
const round = (d) => d && d.replace(/(\d+\.\d)\d+/g, '$1')

const polys = (g) => (g.type === 'Polygon' ? [g.coordinates] : g.type === 'MultiPolygon' ? g.coordinates : [])
const mp = (coords) => ({ type: 'MultiPolygon', coordinates: coords })
// polygon-clipping winds outer rings counter-clockwise; d3 (spherical) wants clockwise.
const d3wind = (multi) => multi.map((poly) => poly.map((ring) => [...ring].reverse()))
const inRing = ([x, y], ring) => {
  let inside = false
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i]
    const [xj, yj] = ring[j]
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside
  }
  return inside
}
const inPoly = (pt, poly) => inRing(pt, poly[0]) && !poly.slice(1).some((h) => inRing(pt, h))
const ringArea = (ring) => {
  let a = 0
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) a += (ring[j][0] + ring[i][0]) * (ring[j][1] - ring[i][1])
  return Math.abs(a / 2)
}
const polyArea = (poly) => ringArea(poly[0]) - poly.slice(1).reduce((s, h) => s + ringArea(h), 0)
const safeUnion = (list) => {
  try {
    return list.length ? pc.union(...list.map((p) => [p])) : []
  } catch {
    return list
  }
}
const safeIntersect = (a, b) => {
  try {
    return pc.intersection(a, b)
  } catch {
    return []
  }
}

const countries = J('scripts/geo/ne_50m_admin_0_countries.geojson').features

// ------------------------------------------------------------------ world map (home page)
{
  const world = J('scripts/geo/ne_110m_admin_0_countries.geojson').features
  const groups = {}
  const add = (k, p) => (groups[k] ||= []).push(p)
  const WEST_OF_URALS = [[[-30, 30], [60, 30], [60, 85], [-30, 85], [-30, 30]]]
  const EAST_OF_URALS = [[[60, 30], [180, 30], [180, 85], [60, 85], [60, 30]]]
  const KEY = {
    'North America': 'northAmerica', 'South America': 'southAmerica', Europe: 'europe',
    Africa: 'africa', Asia: 'asia', Oceania: 'australia', Antarctica: 'antarctica',
  }
  for (const f of world) {
    const a3 = f.properties.ADM0_A3
    for (const p of polys(f.geometry)) {
      if (a3 === 'RUS') {
        pc.intersection([p], WEST_OF_URALS).forEach((q) => add('europe', q))
        pc.intersection([p], EAST_OF_URALS).forEach((q) => add('asia', q))
      } else if (a3 === 'FRA' && p[0][0][0] < -40) add('southAmerica', p) // French Guiana
      else if (a3 === 'IDN' || a3 === 'TLS') add('asia', p)
      else if (KEY[f.properties.CONTINENT]) add(KEY[f.properties.CONTINENT], p)
    }
  }
  const projection = geoNaturalEarth1().fitExtent([[10, 10], [990, 510]], { type: 'Sphere' })
  const path = geoPath(projection)
  const continents = {}
  for (const [k, list] of Object.entries(groups)) continents[k] = round(path(mp(d3wind(safeUnion(list)))))
  const labels = {
    northAmerica: [-102, 45], southAmerica: [-60, -12], europe: [18, 52], africa: [20, 5],
    asia: [95, 45], australia: [134, -25], antarctica: [40, -80],
  }
  write('src/data/geo/world.json', {
    width: 1000, height: 520, sphere: round(path({ type: 'Sphere' })), continents,
    labels: Object.fromEntries(Object.entries(labels).map(([k, ll]) => [k, projection(ll).map(Math.round)])),
  })
  console.log('world ok')
}

// ------------------------------------------------------------------ continents
const lonIn = (lon, a, b) => (a <= b ? lon >= a && lon <= b : lon >= a || lon <= b) // b < a → wraps the antimeridian
const polyBox = (p) => {
  const lons = p[0].map((c) => c[0])
  const lats = p[0].map((c) => c[1])
  return { lon0: Math.min(...lons), lon1: Math.max(...lons), lat0: Math.min(...lats), lat1: Math.max(...lats) }
}
const boxIn = (b, area) =>
  b.lat1 >= area.lat[0] && b.lat0 <= area.lat[1] && (lonIn(b.lon0, ...area.lon) || lonIn(b.lon1, ...area.lon))

/**
 * Continent configuration.
 * - main(a3, continent, box): does this country polygon belong to the continent (animals live here)?
 * - area: lon/lat window used to pick neighbouring land and Natural Earth features.
 * - splits: latitudes dividing north | middle | south (or splitsFrac: fractions of the land height).
 */
const CONFIG = {
  australia: {
    projection: () => geoMercator(),
    area: { lon: [100, 180], lat: [-52, 8] },
    splits: [-19, -31.5],
    neDeserts: false,
    main: (a3, cont, b) =>
      (['AUS', 'NZL', 'PNG'].includes(a3) && b.lat1 > -50) || (a3 === 'IDN' && b.lon0 > 130.8 && b.lat1 < 0),
  },
  africa: {
    projection: () => geoAzimuthalEqualArea().rotate([-18, -3]),
    area: { lon: [-30, 66], lat: [-48, 40] },
    splits: [12, -8],
    main: (a3, cont, b) => cont === 'Africa' && b.lat1 > -48,
  },
  asia: {
    projection: () => geoAzimuthalEqualArea().rotate([-98, -42]),
    area: { lon: [24, -165], lat: [-12, 82] },
    splits: [50, 22],
    main: (a3, cont, b) =>
      (cont === 'Asia' && !(a3 === 'IDN' && b.lon0 > 130.8 && b.lat1 < 0)) || a3 === 'RUS',
    clipRUS: 'east',
  },
  europe: {
    projection: () => geoAzimuthalEqualArea().rotate([-18, -54]),
    area: { lon: [-26, 66], lat: [33, 82] },
    splits: [56, 45],
    main: (a3, cont, b) => (cont === 'Europe' && a3 !== 'RUS' && b.lon0 > -26 && b.lat0 > 33) || a3 === 'RUS',
    clipRUS: 'west',
  },
  northAmerica: {
    projection: () => geoAzimuthalEqualArea().rotate([98, -47]),
    area: { lon: [-172, -10], lat: [5, 84] },
    splits: [55, 30],
    main: (a3, cont, b) => cont === 'North America' && b.lon1 < 0 && !(b.lon1 < -150 && b.lat1 < 30),
  },
  southAmerica: {
    projection: () => geoAzimuthalEqualArea().rotate([66, 20]),
    area: { lon: [-95, -30], lat: [-57, 14] },
    splits: [-8, -30],
    main: (a3, cont, b) => cont === 'South America' || (a3 === 'FRA' && b.lon0 > -56 && b.lon1 < -50),
  },
  antarctica: {
    // Looking down at the South Pole with the Antarctic Peninsula pointing up
    projection: () => geoAzimuthalEqualArea().rotate([60, 90]),
    area: { lon: [-180, 180], lat: [-90, -45] },
    splitsByAnimals: true, // the interior is empty ice, so split where each part gets a third of the animals
    main: (a3, cont, b) =>
      a3 === 'ATA' || a3 === 'SGS' || a3 === 'HMD' || a3 === 'BVT' || (a3 === 'ATF' && b.lat1 < -40) || (a3 === 'AUS' && b.lat1 < -50),
  },
}

const MOUNTAIN_SNOW = /ALP|HIMALAYA|KARAKORAM|ANDES|CAUCASUS|PAMIR|HINDU|TIAN|KUNLUN|ALASKA|ELIAS|ROCKY|SIERRA NEVADA|CASCADE|PYR|ATLAS MOUNTAINS|RUWENZORI|ELBURZ|ZAGROS|NYAINQ|HENGDUAN|TRANSANTARCTIC|SOUTHERN ALPS|SCANDINAVIAN|BROOKS|CHUGACH|COAST MOUNTAINS|ETHIOPIAN|DRAKENSBERG|TAURUS|DINARIC|CARPATH|APPENNINI|CORD/i
const DECORATION = {
  rainforest: ['jungle', 0.004], forest: ['tree', 0.0026], forestDark: ['tree', 0.003], taiga: ['pine', 0.003],
  savanna: ['acacia', 0.0016], grassland: ['grass', 0.0012], scrub: ['bush', 0.0012], tundra: ['tuft', 0.0009],
  wetland: ['reed', 0.003], desert: ['dune', 0.0009], outback: ['spinifex', 0.0016], redDesert: ['spinifex', 0.0016], farmland: ['field', 0.0006],
}
// Screen used to size things: every continent is scaled so its middle part fills this screen like Australia's does.
const TARGET_ZOOM = 1.9
const REF = { w: 1366, h: 768, padX: 24, padY: 96, pin: 58 }

let seed = 7
const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647

function camera(v, vw = REF.w, vh = REF.h) {
  const s = Math.min((vw - REF.padX * 2) / v.w, (vh - REF.padY * 2) / v.h)
  return { s, tx: vw / 2 - (v.x + v.w / 2) * s, ty: vh / 2 - (v.y + v.h / 2) * s }
}

function buildContinent(key) {
  const cfg = CONFIG[key]
  const dir = `src/data/continents/${key}`
  const roster = J(`${dir}/roster.json`)
  const mapCfg = exists(`${dir}/map.json`) ? J(`${dir}/map.json`) : { biomes: [] }
  seed = 7

  // ---- land
  const main = []
  const other = []
  const RUS_W = [[[-30, 30], [60, 30], [60, 85], [-30, 85], [-30, 30]]]
  const RUS_E = [[[60, 30], [180, 30], [180, 85], [60, 85], [60, 30]], [[-180, 30], [-160, 30], [-160, 85], [-180, 85], [-180, 30]]]
  for (const f of countries) {
    const { ADM0_A3: a3, CONTINENT: cont } = f.properties
    for (const p of polys(f.geometry)) {
      const b = polyBox(p)
      if (!boxIn(b, cfg.area)) continue
      if (cfg.main(a3, cont, b)) {
        if (a3 === 'RUS' && cfg.clipRUS) {
          main.push(...d3wind(safeIntersect([p], cfg.clipRUS === 'west' ? RUS_W : RUS_E)))
          other.push(...d3wind(safeIntersect([p], cfg.clipRUS === 'west' ? RUS_E : RUS_W)))
        } else main.push(p)
      } else other.push(p)
    }
  }
  // Merge countries into one coastline (no borders); polygon-clipping works on planar lon/lat, fine away from the poles
  const merge = (list) => {
    try {
      return d3wind(pc.union(...list.map((p) => [p])))
    } catch {
      return list
    }
  }
  const mainMerged = key === 'antarctica' ? [...main] : merge(main)
  main.length = 0
  main.push(...mainMerged)
  const otherMerged = merge(other)
  other.length = 0
  other.push(...otherMerged)
  const landGeo = mp(main)

  // ---- projection: fit the continent, then rescale so its middle part is shown at the same zoom as Australia's
  const projection = cfg.projection()
  if (key !== 'australia') projection.clipAngle(key === 'antarctica' ? 60 : 110)
  projection.fitWidth(1000, landGeo)
  const path = geoPath(projection)
  const project = (lon, lat) => projection([lon, lat])

  const bandsFor = (bounds) => {
    const [[, y0], [, y1]] = bounds
    if (cfg.splitsByAnimals) {
      const ay = animalPoints().map(([, y]) => y).sort((a, b) => a - b)
      const cut = (q) => {
        const i = Math.round(ay.length * q)
        return (ay[i - 1] + ay[i]) / 2
      }
      return [Math.min(y0, ay[0]), cut(1 / 3), cut(2 / 3), Math.max(y1, ay[ay.length - 1])]
    }
    if (cfg.splitsFrac) return [y0, y0 + (y1 - y0) * cfg.splitsFrac[0], y0 + (y1 - y0) * cfg.splitsFrac[1], y1]
    const lon0 = -projection.rotate()[0]
    return [y0, project(lon0, cfg.splits[0])[1], project(lon0, cfg.splits[1])[1], y1]
  }
  const landPoints = () => main.flatMap((p) => p[0].filter((_, i) => i % 3 === 0).map(([lon, lat]) => project(lon, lat)).filter(Boolean))
  const animalPoints = () => roster.map((a) => project(a.lon, a.lat))
  const computeViews = () => {
    const bounds = path.bounds(landGeo)
    const ys = bandsFor(bounds)
    const pts = [...landPoints(), ...animalPoints()]
    const views = {}
    ;['north', 'middle', 'south'].forEach((region, i) => {
      const [top, bottom] = [ys[i], ys[i + 1]]
      const inBand = pts.filter(([, y]) => y >= top && y <= bottom)
      const xs = inBand.map(([x]) => x)
      const x0 = Math.min(...xs)
      const x1 = Math.max(...xs)
      const padX = (x1 - x0) * 0.04 + 10
      const padY = (bottom - top) * 0.06 + 10
      views[region] = { x: x0 - padX, y: top - padY, w: x1 - x0 + padX * 2, h: bottom - top + padY * 2 }
    })
    return { views, ys }
  }
  // Pass 1: find the zoom used for the middle part and rescale the projection to match Australia (~1.55 px per unit)
  {
    const { views } = computeViews()
    const s = camera(views.middle).s
    const f = s / TARGET_ZOOM // bigger map units → less zoom needed
    if (process.env.DEBUG) console.log(key, 'natural zoom', s.toFixed(3))
    projection.scale(projection.scale() * f).translate(projection.translate().map((t) => t * f))
  }
  // Pass 2: shift everything so the map starts at (margin, margin)
  const margin = 150 // plenty of sea around, so wide screens never see the edge of the picture
  {
    const [[x0, y0]] = path.bounds(landGeo)
    const [tx, ty] = projection.translate()
    projection.translate([tx - x0 + margin, ty - y0 + margin])
  }
  const [[, ], [bx1, by1]] = path.bounds(landGeo)
  const width = Math.ceil(bx1 + margin)
  const height = Math.ceil(by1 + margin)
  const { views, ys } = computeViews()
  for (const v of Object.values(views)) {
    v.x = Math.max(0, Math.round(v.x)); v.y = Math.max(0, Math.round(v.y))
    v.w = Math.min(width - v.x, Math.round(v.w)); v.h = Math.min(height - v.y, Math.round(v.h))
  }
  const projRing = (ring) => ring.map(([lon, lat]) => projection([lon, lat])).filter(Boolean)
  const projPoly = (poly) => poly.map(projRing)

  // ---- painted zones: agent-drawn vegetation first, then Natural Earth deserts and glaciers on top
  const biomes = []
  const zonesForDecor = []
  const addZone = (kind, clipped) => {
    if (!clipped.length) return
    const d = round(path(mp(d3wind(clipped))))
    if (!d) return
    biomes.push({ kind, d })
    zonesForDecor.push({ kind, polys: clipped.map(projPoly) })
  }
  for (const b of mapCfg.biomes || []) {
    const rings = b.rings.map((r) => [...r, r[0]])
    addZone(b.kind, safeIntersect(main, rings.map((r) => [r])))
  }
  const ne = J('scripts/geo/ne_10m_geography_regions_polys.geojson').features
  const neIn = (f) => polys(f.geometry).some((p) => boxIn(polyBox(p), cfg.area))
  if (cfg.neDeserts !== false) {
    const deserts = ne.filter((f) => f.properties.FEATURECLA === 'Desert' && neIn(f) && !/PUNJAB|CAATINGAS/i.test(f.properties.NAME))
    for (const f of deserts) addZone('desert', safeIntersect(main, polys(f.geometry)))
  }
  const glaciers = J('scripts/geo/ne_50m_glaciated_areas.geojson').features.filter(neIn)
  if (glaciers.length) addZone('ice', safeIntersect(main, glaciers.flatMap((f) => polys(f.geometry))))
  if (key === 'antarctica') addZone('ice', main.filter((p) => polyBox(p).lat1 < -60))

  // ---- decorations scattered inside zones (later zones win where they overlap)
  const decorations = []
  const maxDecor = 1400
  const areaOf = (z) => z.polys.reduce((s, p) => s + polyArea(p), 0)
  const landPolys = main.map(projPoly)
  for (let zi = 0; zi < zonesForDecor.length; zi++) {
    const z = zonesForDecor[zi]
    const deco = DECORATION[z.kind]
    if (!deco) continue
    const count = Math.min(260, Math.round(areaOf(z) * deco[1]))
    for (const poly of z.polys) {
      const xs = poly[0].map((c) => c[0]); const ysP = poly[0].map((c) => c[1])
      const [minX, maxX, minY, maxY] = [Math.min(...xs), Math.max(...xs), Math.min(...ysP), Math.max(...ysP)]
      const n = Math.round((count * polyArea(poly)) / Math.max(1, areaOf(z)))
      let placed = 0
      for (let tries = 0; placed < n && tries < n * 30; tries++) {
        const pt = [minX + rnd() * (maxX - minX), minY + rnd() * (maxY - minY)]
        if (!inPoly(pt, poly)) continue
        if (zonesForDecor.slice(zi + 1).some((later) => later.polys.some((p) => inPoly(pt, p)))) continue
        decorations.push([r1(pt[0]), r1(pt[1]), deco[0], Math.round(rnd() * 100) / 100])
        placed++
      }
    }
  }
  decorations.sort((a, b) => a[1] - b[1])
  if (decorations.length > maxDecor) decorations.splice(maxDecor)

  // ---- mountains from Natural Earth ranges (+ extra ones from map.json)
  const mountains = []
  const ranges = ne.filter((f) => f.properties.FEATURECLA === 'Range/mtn' && neIn(f))
  for (const f of ranges) {
    const snowy = MOUNTAIN_SNOW.test(f.properties.NAME || '') ? 1 : 0
    for (const p of polys(f.geometry)) {
      const pp = projPoly(p)
      if (pp[0].length < 3) continue
      const a = polyArea(pp)
      const n = Math.max(1, Math.min(40, Math.round(a / 1400)))
      const xs = pp[0].map((c) => c[0]); const ysP = pp[0].map((c) => c[1])
      let placed = 0
      for (let tries = 0; placed < n && tries < n * 40; tries++) {
        const pt = [Math.min(...xs) + rnd() * (Math.max(...xs) - Math.min(...xs)), Math.min(...ysP) + rnd() * (Math.max(...ysP) - Math.min(...ysP))]
        if (!inPoly(pt, pp) || !landPolys.some((lp) => inPoly(pt, lp))) continue
        if (mountains.some(([x, y]) => Math.hypot(x - pt[0], y - pt[1]) < 16)) continue
        mountains.push([r1(pt[0]), r1(pt[1]), snowy])
        placed++
      }
    }
  }
  for (const [lon, lat] of mapCfg.mountains || []) {
    const pt = projection([lon, lat])
    if (pt) mountains.push([r1(pt[0]), r1(pt[1]), Math.abs(lat) > 45 ? 1 : 0])
  }
  mountains.sort((a, b) => a[1] - b[1])
  const landmarks = (mapCfg.landmarks || []).map((l) => ({ kind: l.kind, xy: projection([l.lon, l.lat]).map(r1) }))

  // ---- rivers & lakes that touch the continent
  const touches = (geom) => {
    const pts = geom.type === 'LineString' ? geom.coordinates : geom.type === 'MultiLineString' ? geom.coordinates.flat() : polys(geom).flatMap((p) => p[0])
    const sample = pts.filter((_, i) => i % Math.max(1, Math.floor(pts.length / 6)) === 0)
    return sample.some(([lon, lat]) => lat >= cfg.area.lat[0] && lat <= cfg.area.lat[1] && lonIn(lon, ...cfg.area.lon) && geoContains(landGeo, [lon, lat]))
  }
  const rivers = J('scripts/geo/ne_50m_rivers_lake_centerlines.geojson').features.filter((f) => touches(f.geometry))
    .map((f) => round(path(f.geometry))).filter(Boolean)
  const SALT = /Eyre|Torrens|Gairdner|Frome|Mackay|Disappointment|Barlee|Great Salt|Uyuni|Coipasa|Chott|Tuz/
  const lakes = J('scripts/geo/ne_50m_lakes.geojson').features.filter((f) => touches(f.geometry))
    .map((f) => ({ d: round(path(f.geometry)), salt: SALT.test(f.properties.name || '') })).filter((l) => l.d)

  // ---- animals: position + part of the continent (by height on the map)
  const placements = roster.map((a) => {
    const [x, y] = projection([a.lon, a.lat])
    const region = y < ys[1] ? 'north' : y < ys[2] ? 'middle' : 'south'
    return { id: a.id, region, x: r1(x), y: r1(y) }
  })

  // ---- gently push apart animals whose pictures would overlap (at most ~1.2 picture widths from the real spot)
  {
    const zoom = Object.fromEntries(Object.entries(views).map(([r, v]) => [r, camera(v).s]))
    const orig = placements.map((p) => [p.x, p.y])
    const cams = Object.values(views).map((v) => camera(v))
    const onScreen = (c, p) => {
      const sx = p.x * c.s + c.tx
      const sy = p.y * c.s + c.ty
      return sx > -20 && sx < REF.w + 20 && sy > -20 && sy < REF.h + 20
    }
    // the smallest zoom of any part's view that shows both animals
    const pairZoom = (a, b) =>
      Math.min(zoom[a.region], zoom[b.region], ...cams.filter((c) => onScreen(c, a) && onScreen(c, b)).map((c) => c.s))
    for (let it = 0; it < 120; it++) {
      let moved = false
      for (let i = 0; i < placements.length; i++)
        for (let j = i + 1; j < placements.length; j++) {
          const a = placements[i]
          const b = placements[j]
          const min = REF.pin / pairZoom(a, b)
          const dx = b.x - a.x
          const dy = b.y - a.y
          const d = Math.hypot(dx, dy) || 0.01
          if (d >= min) continue
          const push = (min - d) / 2 + 0.2
          const ux = dx / d
          const uy = dy / d
          a.x -= ux * push; a.y -= uy * push
          b.x += ux * push; b.y += uy * push
          moved = true
        }
      // keep each animal close to where it really lives
      placements.forEach((p, i) => {
        const lim = (REF.pin * 1.2) / zoom[p.region]
        const ox = p.x - orig[i][0]
        const oy = p.y - orig[i][1]
        const d = Math.hypot(ox, oy)
        if (d > lim) { p.x = orig[i][0] + (ox / d) * lim; p.y = orig[i][1] + (oy / d) * lim }
      })
      if (!moved) break
    }
    placements.forEach((p) => { p.x = r1(p.x); p.y = r1(p.y) })
  }

  // ---- overlap check on a typical 1366×768 screen
  const warnings = []
  for (const [region, v] of Object.entries(views)) {
    const cam = camera(v)
    const visible = placements
      .map((p) => ({ ...p, sx: p.x * cam.s + cam.tx, sy: p.y * cam.s + cam.ty }))
      .filter((p) => p.sx > -20 && p.sx < REF.w + 20 && p.sy > -20 && p.sy < REF.h + 20)
    for (let i = 0; i < visible.length; i++)
      for (let j = i + 1; j < visible.length; j++) {
        const d = Math.hypot(visible[i].sx - visible[j].sx, visible[i].sy - visible[j].sy)
        if (d < REF.pin) warnings.push(`OVERLAP [${region}] ${visible[i].id} ↔ ${visible[j].id} (${Math.round(d)}px)`)
      }
  }
  const counts = placements.reduce((c, p) => ({ ...c, [p.region]: (c[p.region] || 0) + 1 }), {})

  // Full paint data → build cache (rendered to public/maps/<key>.webp by render-maps.mjs); the app only needs the meta.
  fs.mkdirSync(new URL('scripts/.build/', ROOT), { recursive: true })
  write(`scripts/.build/${key}.json`, {
    width, height, base: mapCfg.base || '#dcc47e',
    land: round(path(landGeo)), other: round(path(mp(other))),
    biomes, decorations, mountains, landmarks, rivers, lakes, views,
  })
  write(`src/data/geo/${key}.json`, { width, height, views })
  write(`${dir}/placements.json`, placements)
  const size = Math.round(fs.statSync(new URL(`scripts/.build/${key}.json`, ROOT)).size / 1024)
  console.log(`${key}: ${width}×${height}, ${size} KB, ${biomes.length} zones, ${decorations.length} plants, ${mountains.length} mountains, animals ${JSON.stringify(counts)}`)
  ;[...new Set(warnings)].forEach((w) => console.log('  ' + w))
}

const wanted = process.argv.slice(2)
for (const key of Object.keys(CONFIG)) {
  if (wanted.length && !wanted.includes(key)) continue
  if (!exists(`src/data/continents/${key}/roster.json`)) {
    if (wanted.length) console.log(`${key}: no roster.json yet`)
    continue
  }
  buildContinent(key)
}
void geoBounds
