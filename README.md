# Animals of the World / Zvířata světa

A picture map of animals for small kids (who can't read yet), in English and Czech.

- **Home:** logo + world map. Tap any continent.
- **Continent:** painted map split into north / middle / south parts – big green arrows move between them, the yellow arrow goes back. The map can be dragged and zoomed (mouse wheel / trackpad pinch, two-finger pinch on touch screens, double-click, or the + / − buttons) – the animal pictures grow when zooming in. (Antarctica is seen from above the South Pole: Antarctic Peninsula / South Pole / East Antarctica.)
- **Animals:** ~350 animals on 7 continents. Tap a round photo to open the animal window: photos, full name, scientific classification, where it lives, what it eats, who eats it. The blue 🔊 buttons read the text aloud (browser speech, Czech or English).
- **All animals:** the green grid button (top-right on the home page) opens an alphabetical list of every species with its photo, a search bar (searches the animal names shown, accents optional) and an A–Z bar on the right to jump to a letter; tapping an animal opens the same animal window.
- **Language:** flag button in the bottom-left corner.

## Develop

```bash
npm install
npm run dev
```

## Data pipeline

Each continent lives in `src/data/continents/<key>/` (`northAmerica`, `southAmerica`, `europe`, `africa`, `asia`, `australia`, `antarctica`):

| File | What | Made by |
| --- | --- | --- |
| `roster.json` | animals: id, English Wikipedia title, real lon/lat, `sea` flag | by hand – check with `node scripts/check-roster.mjs <key>` |
| `content*.ts` | texts in EN/CS (name, classification, habitat, diet, predators) | by hand |
| `map.json` | painted vegetation zones (lon/lat polygons) + base colour | by hand |
| `images.json`, `public/animals/<key>/<id>/` | photos + credits | `python3 scripts/fetch_images.py <key>` → review with `scripts/contact_sheet.py` → `scripts/curate_images.py` → `scripts/compress_images.py` |
| `placements.json`, `src/data/geo/<key>.json` | map positions, part of the continent, camera views | `node scripts/gen-geo.mjs [key…]` |
| `public/maps/<key>.webp` | the painted map image | `node scripts/render-maps.mjs [key…]` (after gen-geo) |

`scripts/CONTINENT_BRIEF.md` describes how to add or change a continent's data. The Python image scripts marked with Pillow need `pip install pillow`.

`gen-geo.mjs` projects everything (Mercator for Australia, azimuthal equal-area elsewhere), adds deserts, mountains, glaciers, rivers and lakes from Natural Earth, nudges animals apart so their pictures don't overlap and prints any remaining `OVERLAP` warnings. The map is baked into an image because the watercolour SVG filters are too slow to run live on detailed coastlines.

Natural Earth files used by `gen-geo.mjs` (download into `scripts/geo/`):

```bash
for f in ne_110m_admin_0_countries ne_50m_admin_0_countries ne_50m_rivers_lake_centerlines ne_50m_lakes ne_10m_geography_regions_polys ne_50m_glaciated_areas; do
  curl -sSfL -o scripts/geo/$f.geojson https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/$f.geojson
done
```

## Credits

- Photos: Wikimedia Commons – authors and licenses are listed in each animal window and in `src/data/continents/<key>/images.json`.
- Map data: [Natural Earth](https://www.naturalearthdata.com/) (public domain).
