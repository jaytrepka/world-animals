# Brief: adding a continent's data

The app ("Animals of the World / Zvířata světa") is for 5-year-old Czech kids who cannot read. Each continent is a painted
map split into three parts (north / middle / south) covered with small round animal photos; tapping one opens a window
with photos, full name, scientific classification, where it lives, what it eats and who eats it — in English and Czech,
read aloud by text-to-speech. Australia is the finished example: look at `src/data/continents/australia/` (roster.json,
content-*.ts, content.ts, images.json) and `src/data/types.ts`.

Everything for continent `<key>` lives in `src/data/continents/<key>/` and photos in `public/animals/<key>/<id>/`.
Do NOT edit files outside those two folders (other people are working in parallel on other continents and on the app code).

Tooling: node → `export NVM_DIR=~/.nvm; source ~/.nvm/nvm.sh; nvm use 22`. Python with Pillow:
`/private/tmp/claude-502/-Users-jtrepka-Documents-jay-world-animals/f6a76430-5903-4452-8631-26f3634e1e37/scratchpad/venv/bin/python`
(call it $PY). Plain `python3` (no Pillow) is fine for fetch_images.py. Run all commands from the repo root
`/Users/jtrepka/Documents/jay/world-animals`.

## 1. Choose animals → `roster.json`
Array of `{ "id": "kebab-case-id", "wiki": "<exact English Wikipedia article title>", "lon": <number>, "lat": <number>, "sea": true? }`.
- Iconic, kid-exciting, diverse: mammals, reptiles, amphibians, fish, sea animals. NO insects/spiders/bugs, and skip ordinary birds —
  only spectacular/special birds (ratites, penguins, flamingos, big eagles/condors, owls like the snowy owl, toucans, macaws, peacocks...), max ~10% of the list.
- Spread them across the WHOLE continent and all three parts (see the part boundaries in your task), each at a real place where the species lives.
  Put sea animals in the sea near their real range and set `"sea": true`.
- Keep animals apart so the round pictures don't overlap on screen: stay at least the minimum spacing given in your task from every other animal.
- Check each wiki title resolves: `curl -s -o /dev/null -w "%{http_code}" "https://en.wikipedia.org/api/rest_v1/page/summary/<Title_with_underscores>"` (200 = ok; follow redirects to the canonical title).
- Validate positions: `node scripts/check-roster.mjs <key>` → must report 0 problems.

## 2. Texts → `content.ts` (you may split into content-a.ts, content-b.ts … and have content.ts combine them)
`import type { AnimalContent } from '../../types'` and `export const content: AnimalContent[] = [...]` — one entry per roster id (same ids).
Follow the Australia files exactly for style and structure:
- name.en: full proper English common name ("Patagonian mara", not "Mara"). name.cs: the correct official Czech name (Czech Wikipedia / BioLib / Czech zoos),
  first letter capitalised. Verify uncertain Czech names with WebSearch/WebFetch (cs.wikipedia.org). Correct Czech names matter a lot.
- classification: kingdom/phylum/class/order/family as {latin, en, cs} with friendly group names in both languages (see Australia), genus and full binomial species. Current taxonomy.
- habitat / diet / predators: each 1–2 short, warm, simple, factually correct sentences (max ~30 words), for a 5-year-old, read aloud.
  predators = who eats it (if adults have no enemies, say so and say who eats the young/eggs). Czech must be natural, grammatical Czech, not a literal translation.
- Type-check: `npx tsc --noEmit -p tsconfig.app.json` (ignore errors in files that aren't yours).

## 3. Photos
1. `python3 scripts/fetch_images.py <key>` — downloads up to 3 photos per animal from Wikimedia Commons + credits into images.json.
2. `$PY scripts/contact_sheet.py <key> <your scratch dir>` then Read every sheet image. Each row = one animal, photos numbered 1–3.
3. Decide per animal which photos to keep and in which order. DROP: range maps, drawings/paintings/old illustrations, skeletons/skulls/museum specimens/taxidermy,
   wrong species, animal tiny or hidden, people dominating, very dark/blurry, cages. Photo #1 becomes the small round map picture → it must be the clearest,
   close, whole-animal (or clear face) photo.
4. Animals left with 0 good photos: write `image_overrides.json` `{ "<id>": ["File:Good photo.jpg", ...] }` (find files via
   https://commons.wikimedia.org/w/api.php?action=query&list=search&srnamespace=6&srsearch=<Latin name>&format=json) and re-run
   `python3 scripts/fetch_images.py <key> <id>`; or replace the animal with another one (update roster + content too).
5. Apply: `$PY scripts/curate_images.py <key> '{"<id>":[2,1], "<id2>":[1], ...}'` (list only animals you change; this also builds thumb.jpg for all),
   then `$PY scripts/compress_images.py <key>`. Re-check the final result with a new contact sheet.

## 4. Painted vegetation → `map.json`
```json
{ "base": "#d8c98a",
  "biomes": [ { "kind": "rainforest", "rings": [[[lon, lat], [lon, lat], ...]] }, ... ] }
```
- `base` = colour of land not covered by any zone (optional; default dry-grass yellow). Pick what dominates the continent.
- Zones are drawn in list order, clipped to the coastline automatically, softly blurred like watercolour — so coarse polygons (10–30 points)
  are fine and they may extend into the sea. Draw them faithfully to real vegetation maps.
- kinds: `rainforest` (tropical), `forest` (temperate broadleaf/mixed), `taiga` (conifer/boreal), `savanna`, `grassland` (steppe/prairie/pampas),
  `scrub` (mediterranean / dry shrubland / semi-desert), `tundra`, `wetland`, `farmland` (for heavily farmed plains, optional), `desert` (only for deserts
  Natural Earth may lack — the big named deserts are added automatically), `ice` (only if not glaciated — Greenland/Antarctica ice is automatic).
- Mountains, big deserts, glaciers, rivers and lakes are added automatically from Natural Earth. You may add `"mountains": [[lon, lat], ...]`
  for extra mountain symbols where important ranges would otherwise be missing (optional).

## 5. Report back
Short report: number of animals per part, anything uncertain (Czech names, photos you couldn't fix). Don't paste file contents.
