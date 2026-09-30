"""Contact sheets for reviewing photos. Usage: python3 scripts/contact_sheet.py <continent> <out_dir> [id ...]
Each row: id | photo 1 | photo 2 | photo 3. 10 animals per sheet. Needs Pillow."""
import json, os, sys
from PIL import Image, ImageDraw

continent, out_dir = sys.argv[1], sys.argv[2]
roster = json.load(open(f"src/data/continents/{continent}/roster.json"))
ids = [a["id"] for a in roster if not sys.argv[3:] or a["id"] in sys.argv[3:]]
W, H, per = 200, 150, 10
os.makedirs(out_dir, exist_ok=True)
for part in range(0, len(ids), per):
    chunk = ids[part:part + per]
    sheet = Image.new("RGB", (W * 3 + 180, H * len(chunk)), "white")
    d = ImageDraw.Draw(sheet)
    for r, aid in enumerate(chunk):
        d.text((4, r * H + 65), aid[:28], fill="black")
        for c in range(3):
            p = f"public/animals/{continent}/{aid}/{c + 1}.jpg"
            if os.path.exists(p):
                im = Image.open(p).convert("RGB")
                im.thumbnail((W - 6, H - 6))
                sheet.paste(im, (180 + c * W, r * H + 3))
                d.text((180 + c * W + 4, r * H + 4), str(c + 1), fill="yellow")
    out = os.path.join(out_dir, f"sheet_{continent}_{part // per}.jpg")
    sheet.save(out, quality=70)
    print(out)
