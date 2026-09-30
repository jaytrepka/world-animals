"""Drop bad photos / reorder, then rebuild thumbnails.

Usage: python3 scripts/curate_images.py <continent> '{"<id>": [2, 3, 1], ...}'
Keeps only the listed photo numbers (in the given order) and renumbers them 1..n.
Pass '{}' to only build missing thumbnails. Needs Pillow (use the venv python, see README).
"""
import json, os, shutil, sys
from PIL import Image, ImageOps

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
continent = sys.argv[1]
KEEP = json.loads(sys.argv[2]) if len(sys.argv) > 2 else {}
cdir = os.path.join(ROOT, "src/data/continents", continent)
path = os.path.join(cdir, "images.json")
data = json.load(open(path))
for aid, keep in KEEP.items():
    d = os.path.join(ROOT, "public/animals", continent, aid)
    credits = data[aid]["credits"]
    tmp = d + "_tmp"
    os.makedirs(tmp, exist_ok=True)
    new = []
    for n, k in enumerate(keep, 1):
        shutil.copy(os.path.join(d, f"{k}.jpg"), os.path.join(tmp, f"{n}.jpg"))
        new.append(credits[k - 1])
    shutil.rmtree(d)
    os.rename(tmp, d)
    data[aid] = {"count": len(new), "credits": new}
json.dump(data, open(path, "w"), indent=1, ensure_ascii=False)
for aid in data:
    d = os.path.join(ROOT, "public/animals", continent, aid)
    if aid not in KEEP and os.path.exists(os.path.join(d, "thumb.jpg")):
        continue  # unchanged animal – keep its thumbnail as is
    im = ImageOps.exif_transpose(Image.open(os.path.join(d, "1.jpg"))).convert("RGB")
    im = ImageOps.fit(im, (240, 240), Image.LANCZOS, centering=(0.5, 0.45))
    im.save(os.path.join(d, "thumb.jpg"), "JPEG", quality=82, optimize=True, progressive=True)
print("curated", len(KEEP), "thumbs", len(data))
