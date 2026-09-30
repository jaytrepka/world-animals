"""Apply manual photo curation: keep only listed image numbers (in the given order), renumber, rebuild thumbs."""
import json, os, shutil, subprocess, sys
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
KEEP = json.loads(sys.argv[1])
path = os.path.join(ROOT, "src/data/images.json")
data = json.load(open(path))
for aid, keep in KEEP.items():
    d = os.path.join(ROOT, "public/animals", aid)
    credits = data[aid]["credits"]
    tmp = d + "_tmp"; os.makedirs(tmp, exist_ok=True)
    new = []
    for n, k in enumerate(keep, 1):
        shutil.copy(os.path.join(d, f"{k}.jpg"), os.path.join(tmp, f"{n}.jpg"))
        new.append(credits[k - 1])
    shutil.rmtree(d); os.rename(tmp, d)
    data[aid] = {"count": len(new), "credits": new}
json.dump(data, open(path, "w"), indent=1, ensure_ascii=False)
# thumbs: always derived from 1.jpg
for aid in data:
    d = os.path.join(ROOT, "public/animals", aid)
    subprocess.run(["sips", "-Z", "320", os.path.join(d, "1.jpg"), "--out", os.path.join(d, "thumb.jpg")], capture_output=True, check=True)
print("curated", len(KEEP))
