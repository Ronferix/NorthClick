#!/usr/bin/env python3
"""Generate og-image.jpg for NorthClick — mirrors og-generator.html canvas drawing."""

from PIL import Image, ImageDraw, ImageFont
import math, os

W, H = 1200, 630
out = os.path.join(os.path.dirname(__file__), 'img', 'og-image.jpg')

# ── Font helpers ──────────────────────────────────────────────────────────────
FONT_REG  = 'C:/Windows/Fonts/calibri.ttf'
FONT_BOLD = 'C:/Windows/Fonts/calibrib.ttf'
FONT_MONO = 'C:/Windows/Fonts/cour.ttf'   # Courier New

def font(path, size):
    try:
        return ImageFont.truetype(path, size)
    except Exception:
        return ImageFont.load_default()

# ── Create image ──────────────────────────────────────────────────────────────
img = Image.new('RGB', (W, H), '#0F172A')
draw = ImageDraw.Draw(img)

# ── Background gradient (top→bottom) ─────────────────────────────────────────
for y in range(H):
    t = y / H
    r = int(15  + t * (10 - 15))
    g = int(23  + t * (22 - 23))
    b = int(42  + t * (40 - 42))
    draw.line([(0, y), (W, y)], fill=(max(0,r), max(0,g), max(0,b)))

# ── Dot grid ──────────────────────────────────────────────────────────────────
for x in range(60, W, 40):
    for y in range(40, H, 40):
        draw.ellipse([x-2, y-2, x+2, y+2], fill=(37, 99, 235, 30))

# ── Blue glow (top-right radial) ─────────────────────────────────────────────
glow = Image.new('RGBA', (W, H), (0, 0, 0, 0))
gd = ImageDraw.Draw(glow)
cx, cy, r_max = W - 100, 80, 380
for r in range(r_max, 0, -4):
    alpha = int(72 * (1 - r / r_max) * (1 - r / r_max) * 0.7)
    gd.ellipse([cx-r, cy-r, cx+r, cy+r], fill=(37, 99, 235, alpha))
img = Image.alpha_composite(img.convert('RGBA'), glow).convert('RGB')
draw = ImageDraw.Draw(img)

# ── Left blue accent bar ──────────────────────────────────────────────────────
for y in range(H):
    t = y / H
    r = int(59  + t * (29  - 59))
    g = int(130 + t * (78  - 130))
    b = int(246 + t * (216 - 246))
    draw.line([(0, y), (6, y)], fill=(r, g, b))

# ── Logo: "North" + "Click" ───────────────────────────────────────────────────
f_logo = font(FONT_BOLD, 82)
north_w = draw.textlength('North', font=f_logo)
draw.text((80, 210), 'North', fill='#F8FAFC', font=f_logo)
draw.text((80 + north_w, 210), 'Click', fill='#3B82F6', font=f_logo)

# ── Divider under logo ────────────────────────────────────────────────────────
click_w = draw.textlength('Click', font=f_logo)
line_end = 80 + north_w + click_w
draw.line([(80, 305), (int(line_end), 305)], fill=(37, 99, 235, 128), width=2)

# ── Tagline ───────────────────────────────────────────────────────────────────
f_tag = font(FONT_REG, 34)
draw.text((80, 325), 'Professional Web Design', fill='#94A3B8', font=f_tag)

# ── URL badge ─────────────────────────────────────────────────────────────────
bx, by, bw, bh, br = 80, 400, 240, 46, 23
# Fill
badge_fill = Image.new('RGBA', (W, H), (0, 0, 0, 0))
bd = ImageDraw.Draw(badge_fill)
bd.rounded_rectangle([bx, by, bx+bw, by+bh], radius=br, fill=(37, 99, 235, 46))
bd.rounded_rectangle([bx, by, bx+bw, by+bh], radius=br, outline=(59, 130, 246, 128), width=1)
img = Image.alpha_composite(img.convert('RGBA'), badge_fill).convert('RGB')
draw = ImageDraw.Draw(img)
f_badge = font(FONT_REG, 19)
draw.text((bx + 26, by + bh//2 - 9), 'northclick.net', fill='#93C5FD', font=f_badge)

# ── Right decorative card ─────────────────────────────────────────────────────
cx2, cy2, cw, ch, cr = 760, 160, 360, 310, 16
card_layer = Image.new('RGBA', (W, H), (0, 0, 0, 0))
cd = ImageDraw.Draw(card_layer)
# Card body
cd.rounded_rectangle([cx2, cy2, cx2+cw, cy2+ch], radius=cr,
                     fill=(255, 255, 255, 10), outline=(255, 255, 255, 26), width=1)
# Card header bar
cd.rounded_rectangle([cx2, cy2, cx2+cw, cy2+48], radius=cr,
                     fill=(37, 99, 235, 89))
# Cover bottom-rounded corners of header (make it flat at bottom)
cd.rectangle([cx2, cy2+32, cx2+cw, cy2+48], fill=(37, 99, 235, 89))
img = Image.alpha_composite(img.convert('RGBA'), card_layer).convert('RGB')
draw = ImageDraw.Draw(img)

# Card traffic-light dots
for i, col in enumerate(['#EF4444', '#F59E0B', '#22C55E']):
    dx = cx2 + 22 + i * 22
    dy = cy2 + 24
    draw.ellipse([dx-7, dy-7, dx+7, dy+7], fill=col)

# Card filename
f_card = font(FONT_REG, 14)
draw.text((cx2 + 100, cy2 + 17), 'index.html', fill=(255, 255, 255, 154), font=f_card)

# Code lines
f_code = font(FONT_MONO, 13)
code_lines = [
    (0,  '#64748B', '<!-- NorthClick -->'),
    (0,  '#7C3AED', '<section class="hero">'),
    (20, '#2563EB', '<h1>'),
    (40, '#F8FAFC', 'Boost your business'),
    (40, '#22C55E', 'in the digital world'),
    (20, '#2563EB', '</h1>'),
    (20, '#F59E0B', '<a href="contact.html"'),
    (36, '#94A3B8', '  class="btn btn-primary">'),
    (20, '#F8FAFC', 'Start a project</a>'),
    (0,  '#7C3AED', '</section>'),
]
for i, (indent, color, text) in enumerate(code_lines):
    draw.text((cx2 + 24 + indent, cy2 + 66 + i * 22), text, fill=color, font=f_code)

# ── Save ──────────────────────────────────────────────────────────────────────
os.makedirs(os.path.dirname(out), exist_ok=True)
img.save(out, 'JPEG', quality=88, optimize=True)
size_kb = os.path.getsize(out) / 1024
print(f'Saved {out}  ({size_kb:.1f} KB)')
