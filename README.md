# Animals of the World / Zvířata světa

A picture map of animals for small kids (who can't read yet), in English and Czech.

- **Home:** logo + world map. Tap a continent (right now only **Australia & Oceania** is ready).
- **Continent:** painted map split into north / middle / south parts – big green arrows move between them, the yellow arrow goes back. The map can also be dragged.
- **Animals:** tap a round photo to open the animal window: photos, full name, scientific classification, where it lives, what it eats, who eats it. The blue 🔊 buttons read the text aloud (browser speech, Czech or English).
- **Language:** flag button in the bottom-left corner.

## Develop

```bash
npm install
npm run dev
```

## Data pipeline

| What | Where | How to regenerate |
| --- | --- | --- |
| Animal list + map positions | `scripts/roster.json` | edit by hand, check with `node scripts/check-roster.mjs` |
| Texts (EN/CS) | `src/data/australia/content-*.ts` | edit by hand |
| Maps (pre-projected SVG paths) | `src/data/geo/*.json`, `src/data/australia/placements.json` | `node scripts/gen-geo.mjs` (needs Natural Earth GeoJSON in `scripts/geo/`, see below) |
| Photos | `public/animals/<id>/` + `src/data/images.json` (credits) | `python3 scripts/fetch_images.py [id…]`, then `scripts/curate_images.py` and `scripts/compress_images.py` (Pillow) |

Natural Earth files used by `gen-geo.mjs` (download into `scripts/geo/`):

```bash
for f in ne_110m_admin_0_countries ne_50m_admin_0_countries ne_50m_rivers_lake_centerlines ne_50m_lakes; do
  curl -sSfL -o scripts/geo/$f.geojson https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/$f.geojson
done
```

## Credits

- Photos: Wikimedia Commons – authors and licenses are listed in each animal window and in `src/data/images.json`.
- Map data: [Natural Earth](https://www.naturalearthdata.com/) (public domain).
