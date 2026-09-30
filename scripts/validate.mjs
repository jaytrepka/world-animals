// Checks that every continent's roster, texts and photos match up.
//   node scripts/validate.mjs
import fs from 'fs'

const dir = 'src/data/continents'
let problems = 0
const report = (msg) => {
  problems++
  console.log('  ✗ ' + msg)
}
for (const key of fs.readdirSync(dir).filter((f) => fs.statSync(`${dir}/${f}`).isDirectory())) {
  const roster = JSON.parse(fs.readFileSync(`${dir}/${key}/roster.json`))
  const images = JSON.parse(fs.readFileSync(`${dir}/${key}/images.json`))
  const placements = fs.existsSync(`${dir}/${key}/placements.json`) ? JSON.parse(fs.readFileSync(`${dir}/${key}/placements.json`)) : []
  const files = fs.readdirSync(`${dir}/${key}`).filter((f) => /^content.*\.ts$/.test(f))
  const src = files.map((f) => fs.readFileSync(`${dir}/${key}/${f}`, 'utf8')).join('\n')
  const contentIds = [...src.matchAll(/\bid:\s*['"]([^'"]+)['"]/g)].map((m) => m[1])
  const combined = fs.readFileSync(`${dir}/${key}/content.ts`, 'utf8')
  const exported = [...src.matchAll(/export const (\w+)\s*:/g)].map((m) => m[1]).filter((n) => n !== 'content')
  console.log(`${key}: ${roster.length} animals`)
  for (const name of exported) if (!new RegExp(`\\.\\.\\.${name}\\b`).test(combined)) report(`content.ts does not include ${name}`)
  const ids = new Set()
  for (const a of roster) {
    if (ids.has(a.id)) report(`duplicate id ${a.id}`)
    ids.add(a.id)
    if (!contentIds.includes(a.id)) report(`${a.id}: no texts`)
    if (!images[a.id]?.count) report(`${a.id}: no photos`)
    else {
      for (let i = 1; i <= images[a.id].count; i++)
        if (!fs.existsSync(`public/animals/${key}/${a.id}/${i}.jpg`)) report(`${a.id}: photo ${i}.jpg missing`)
      if (!fs.existsSync(`public/animals/${key}/${a.id}/thumb.jpg`)) report(`${a.id}: thumb.jpg missing`)
    }
    if (!placements.some((p) => p.id === a.id)) report(`${a.id}: not placed yet (run gen-geo.mjs)`)
  }
  for (const id of contentIds) if (!ids.has(id)) report(`texts for ${id} but it is not in roster.json`)
}
console.log(problems ? `${problems} problems` : 'all good')
process.exit(problems ? 1 : 0)
