// Generates /public/og.png — the social-share preview image.
// Run: npm run og
// Edit the SVG below to change the design, then re-run.

import sharp from 'sharp';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = join(__dirname, '..', 'public', 'og.png');

// 1200x630 — the canonical Open Graph aspect ratio (1.91:1)
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <!-- Background -->
  <rect width="1200" height="630" fill="#0A0A0A"/>

  <!-- Top utility bar -->
  <rect x="0" y="0" width="1200" height="48" fill="#0A0A0A"/>
  <text x="40" y="30" font-family="Helvetica Neue, Helvetica, Arial, sans-serif"
        font-size="16" fill="#F7F7F2" letter-spacing="3" font-weight="500">
    AN UNOFFICIAL FIELD GUIDE  ·  GREENPOINT, BROOKLYN
  </text>
  <line x1="0" y1="48" x2="1200" y2="48" stroke="#6CBE45" stroke-width="4"/>

  <!-- Lime hero band -->
  <rect x="0" y="48" width="1200" height="430" fill="#6CBE45"/>

  <!-- G bullet -->
  <circle cx="170" cy="263" r="90" fill="#0A0A0A"/>
  <text x="170" y="270" text-anchor="middle" dominant-baseline="central"
        font-family="Helvetica Neue, Helvetica, Arial, sans-serif"
        font-weight="700" font-size="120" fill="#6CBE45">G</text>

  <!-- Wordmark -->
  <text x="290" y="245" font-family="Helvetica Neue, Helvetica, Arial, sans-serif"
        font-weight="700" font-size="140" fill="#0A0A0A" letter-spacing="-3">Off the G</text>

  <!-- Subtitle under wordmark -->
  <text x="293" y="305" font-family="Helvetica Neue, Helvetica, Arial, sans-serif"
        font-size="22" fill="#0A0A0A" letter-spacing="6" font-weight="500" opacity="0.85">
    GREENPOINT FIELD GUIDE
  </text>

  <!-- Divider rule -->
  <line x1="0" y1="478" x2="1200" y2="478" stroke="#0A0A0A" stroke-width="4"/>

  <!-- Tagline panel (paper colored) -->
  <rect x="0" y="478" width="1200" height="152" fill="#F7F7F2"/>
  <text x="40" y="540" font-family="Helvetica Neue, Helvetica, Arial, sans-serif"
        font-weight="700" font-size="48" fill="#0A0A0A" letter-spacing="-1">
    The spots locals actually go to.
  </text>
  <text x="40" y="595" font-family="Helvetica Neue, Helvetica, Arial, sans-serif"
        font-size="18" fill="#5C5C5C" letter-spacing="3">
    NO ALGORITHM  ·  NO SPONSORED PICKS  ·  NO FLUFF
  </text>

  <!-- Bottom domain stamp, right side -->
  <text x="1160" y="595" text-anchor="end"
        font-family="Helvetica Neue, Helvetica, Arial, sans-serif"
        font-weight="700" font-size="18" fill="#0A0A0A" letter-spacing="2">
    OFFTHEG.COM
  </text>
</svg>`;

// Also write the source SVG for reference / future editing
writeFileSync(join(__dirname, 'og.svg'), svg);

await sharp(Buffer.from(svg))
  .png({ quality: 90 })
  .toFile(out);

console.log(`✓ Wrote ${out}`);
