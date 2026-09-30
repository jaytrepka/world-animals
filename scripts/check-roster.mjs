import fs from 'fs'; import {geoContains} from 'd3-geo';
const c = JSON.parse(fs.readFileSync('scripts/geo/ne_50m_admin_0_countries.geojson'));
const land = c.features.filter(f=>['AUS','NZL','PNG','IDN'].includes(f.properties.ADM0_A3));
const r = JSON.parse(fs.readFileSync('scripts/roster.json'));
for (const a of r){ const on = land.some(f=>geoContains(f,[a.lon,a.lat])); if (on === !!a.sea) console.log('BAD', a.id, on?'on land':'in sea'); }
console.log(r.length,'animals');
