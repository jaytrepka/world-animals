"""Resize + recompress full-size photos (max 900px). Usage: python3 scripts/compress_images.py <continent>  (needs Pillow)"""
import glob, sys
from PIL import Image, ImageOps

for p in glob.glob(f"public/animals/{sys.argv[1]}/*/[0-9].jpg"):
    im = ImageOps.exif_transpose(Image.open(p)).convert("RGB")
    if max(im.size) <= 900:  # already processed – re-saving would only lose quality
        continue
    im.thumbnail((900, 900), Image.LANCZOS)
    im.save(p, "JPEG", quality=78, optimize=True, progressive=True)
