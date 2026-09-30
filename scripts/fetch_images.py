"""Download animal photos from Wikimedia Commons (via English Wikipedia media lists).

Usage: python3 scripts/fetch_images.py [id ...]
Writes public/animals/<id>/{thumb,1,2,3}.jpg and src/data/images.json (with credits).
Per-animal overrides: scripts/image_overrides.json  {id: ["File:Something.jpg", ...]}
"""
import json, os, re, sys, time, urllib.parse, urllib.request, html

UA = "WorldAnimalsKidsApp/1.0 (https://github.com/jaytrepka/world-animals)"
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BAD = re.compile(r"image.from.page|brehm|tierleben|gould|monograph|\(AM_|_AM_|museo|museum|BMNH|anatom|jaw|teeth|label|rock_art|aboriginal|bul0|evolution|sketch|description|stubbs|nestbox|litokoala|nimio|hogfish|olive_ridley|white,_1790|mitchell|caught|skelet|skull|map|distribution|range|illustrat|drawing|museum|specimen|fossil|egg|stamp|coin|diagram|comparison|size|mount|taxiderm|plate|\bart\b|painting|track|footprint|dead|carcass", re.I)
MAX_IMAGES = 3

def get(url, raw=False):
    for attempt in range(4):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": UA})
            with urllib.request.urlopen(req, timeout=60) as r:
                data = r.read()
            return data if raw else json.loads(data)
        except Exception as e:
            if attempt == 3:
                raise
            time.sleep(2 + attempt * 3)

def media_files(title):
    d = get("https://en.wikipedia.org/api/rest_v1/page/media-list/" + urllib.parse.quote(title.replace(" ", "_")))
    out = []
    for it in d.get("items", []):
        t = it.get("title", "")
        if it.get("type") != "image" or not re.search(r"\.jpe?g$", t, re.I) or BAD.search(t):
            continue
        out.append(t)
    return out

def commons_search(query, limit=25):
    q = urllib.parse.urlencode({"action": "query", "list": "search", "srnamespace": 6, "srlimit": limit,
        "srsearch": query + " filetype:bitmap", "format": "json"})
    d = get("https://commons.wikimedia.org/w/api.php?" + q)
    return [r["title"] for r in d["query"]["search"] if re.search(r"\.jpe?g$", r["title"], re.I) and not BAD.search(r["title"])]

def species_names():
    names = {}
    for region in ("north", "middle", "south"):
        src = open(os.path.join(ROOT, f"src/data/australia/content-{region}.ts")).read()
        for m in re.finditer(r"id:\s*['\"]([^'\"]+)['\"].*?species:\s*['\"]([^'\"]+)['\"]", src, re.S):
            names[m.group(1)] = m.group(2)
    return names

def info(file_title, width):
    q = urllib.parse.urlencode({"action": "query", "titles": file_title, "prop": "imageinfo",
        "iiprop": "url|extmetadata|size", "iiurlwidth": width, "format": "json"})
    d = get("https://commons.wikimedia.org/w/api.php?" + q)
    page = next(iter(d["query"]["pages"].values()))
    ii = page["imageinfo"][0]
    meta = ii.get("extmetadata", {})
    strip = lambda s: html.unescape(re.sub(r"<[^>]+>", "", s or "")).strip()
    return {
        "url": ii.get("thumburl") or ii["url"],
        "w": ii.get("width"), "h": ii.get("height"),
        "author": strip(meta.get("Artist", {}).get("value"))[:120],
        "license": strip(meta.get("LicenseShortName", {}).get("value")),
        "source": ii.get("descriptionurl"),
    }

def main():
    roster = json.load(open(os.path.join(ROOT, "scripts/roster.json")))
    overrides_path = os.path.join(ROOT, "scripts/image_overrides.json")
    overrides = json.load(open(overrides_path)) if os.path.exists(overrides_path) else {}
    out_path = os.path.join(ROOT, "src/data/images.json")
    result = json.load(open(out_path)) if os.path.exists(out_path) else {}
    only = set(sys.argv[1:])
    species = species_names()
    for a in roster:
        aid = a["id"]
        if only and aid not in only:
            continue
        if not only and aid in result:
            continue
        files = overrides.get(aid) or media_files(a["wiki"])
        if aid not in overrides and len(files) < 3 and aid in species:
            files += [f for f in commons_search(species[aid]) if f not in files]
        # keep only landscape-ish / reasonably large photos
        picked = []
        for f in files:
            try:
                i = info(f, 960)
            except Exception as e:
                print("  skip", f, e); continue
            if (i["w"] or 0) < 400 or not i["license"]:
                continue
            picked.append((f, i))
            if len(picked) >= MAX_IMAGES:
                break
        if not picked:
            print("NO IMAGES", aid); continue
        d = os.path.join(ROOT, "public/animals", aid)
        os.makedirs(d, exist_ok=True)
        for fn in os.listdir(d):
            os.remove(os.path.join(d, fn))
        credits = []
        for n, (f, i) in enumerate(picked, 1):
            open(os.path.join(d, f"{n}.jpg"), "wb").write(get(i["url"], raw=True))
            credits.append({"file": f, "author": i["author"], "license": i["license"], "source": i["source"]})
            time.sleep(0.3)
        thumb = info(picked[0][0], 330)
        open(os.path.join(d, "thumb.jpg"), "wb").write(get(thumb["url"], raw=True))
        result[aid] = {"count": len(picked), "credits": credits}
        print("ok", aid, len(picked), [c["file"] for c in credits])
        json.dump(result, open(out_path, "w"), indent=1, ensure_ascii=False)
        time.sleep(0.5)

if __name__ == "__main__":
    main()
