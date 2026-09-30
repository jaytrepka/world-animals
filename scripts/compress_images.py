"""Resize + recompress animal photos (needs Pillow). Full photos max 900px, thumbs 240px square-ish."""
import glob
from PIL import Image, ImageOps
for p in glob.glob("public/animals/*/*.jpg"):
    im = ImageOps.exif_transpose(Image.open(p)).convert("RGB")
    thumb = p.endswith("thumb.jpg")
    if thumb:
        im = Image.open(p.replace("thumb.jpg", "1.jpg")).convert("RGB")
        im = ImageOps.fit(im, (240, 240), Image.LANCZOS, centering=(0.5, 0.45))
    else:
        im.thumbnail((900, 900), Image.LANCZOS)
    im.save(p, "JPEG", quality=78 if not thumb else 82, optimize=True, progressive=True)
