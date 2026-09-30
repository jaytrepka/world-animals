/** Hand-drawn logo: a capybara, meerkat, caracal and Patagonian mara peeking over a banner. */
export default function Logo({ title }: { title: string }) {
  return (
    <svg className="logo" viewBox="0 -16 520 278" role="img" aria-label={title}>
      <defs>
        <radialGradient id="lg-globe" cx="40%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#bfe9ff" />
          <stop offset="100%" stopColor="#4fb3e8" />
        </radialGradient>
        <linearGradient id="lg-banner" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#ffb347" />
          <stop offset="100%" stopColor="#ff7b39" />
        </linearGradient>
      </defs>

      {/* globe behind the animals */}
      <circle cx="260" cy="196" r="118" fill="url(#lg-globe)" />
      <path d="M170 150 C190 120 230 118 240 140 C250 160 222 170 230 190 C236 206 208 214 196 200 C182 186 158 176 170 150Z" fill="#7fcf6a" />
      <path d="M280 110 C310 98 350 112 352 136 C354 156 326 150 318 166 C306 186 280 170 284 150 C286 136 266 122 280 110Z" fill="#7fcf6a" />
      <path d="M330 190 C348 182 368 190 364 206 C360 220 336 220 330 206Z" fill="#f2c14e" />

      {/* capybara */}
      <g transform="translate(118 212)">
        <path d="M-56 0 C-60 -44 -44 -74 -22 -80 L22 -80 C44 -74 60 -44 56 0 Z" fill="#94643c" />
        <ellipse cx="-24" cy="-146" rx="8" ry="7" fill="#6e4526" />
        <ellipse cx="24" cy="-146" rx="8" ry="7" fill="#6e4526" />
        <path d="M-32 -84 C-36 -124 -28 -154 0 -154 C28 -154 36 -124 32 -84 C30 -68 15 -60 0 -60 C-15 -60 -30 -68 -32 -84Z" fill="#a8764b" />
        <path d="M-26 -82 C-26 -66 -13 -60 0 -60 C13 -60 26 -66 26 -82 C18 -92 -18 -92 -26 -82Z" fill="#7e5332" />
        <ellipse cx="-9" cy="-78" rx="3.5" ry="2.5" fill="#2b1a0e" />
        <ellipse cx="9" cy="-78" rx="3.5" ry="2.5" fill="#2b1a0e" />
        <circle cx="-16" cy="-122" r="4.5" fill="#1d120a" />
        <circle cx="16" cy="-122" r="4.5" fill="#1d120a" />
        <circle cx="-14.5" cy="-123.5" r="1.4" fill="#fff" />
        <circle cx="17.5" cy="-123.5" r="1.4" fill="#fff" />
        {/* the famous orange on its head */}
        <circle cx="0" cy="-166" r="13" fill="#ff9f1c" />
        <path d="M0 -179 C6 -186 14 -184 16 -180 C10 -176 4 -177 0 -179Z" fill="#4caf50" />
      </g>

      {/* meerkat */}
      <g transform="translate(212 212)">
        <path d="M-26 0 C-28 -44 -24 -84 -16 -112 L16 -112 C24 -84 28 -44 26 0 Z" fill="#cfa876" />
        <path d="M-14 0 C-15 -38 -12 -74 -8 -104 L8 -104 C12 -74 15 -38 14 0Z" fill="#efdcb8" />
        <ellipse cx="-10" cy="-94" rx="6" ry="10" fill="#b88f5c" transform="rotate(-12 -10 -94)" />
        <ellipse cx="10" cy="-94" rx="6" ry="10" fill="#b88f5c" transform="rotate(12 10 -94)" />
        <ellipse cx="-22" cy="-146" rx="6" ry="7" fill="#3b2a1c" />
        <ellipse cx="22" cy="-146" rx="6" ry="7" fill="#3b2a1c" />
        <path d="M-23 -138 C-25 -158 -12 -170 0 -170 C12 -170 25 -158 23 -138 C21 -124 8 -108 0 -106 C-8 -108 -21 -124 -23 -138Z" fill="#dcb987" />
        <path d="M-6 -132 C-4 -120 -3 -114 0 -110 C3 -114 4 -120 6 -132Z" fill="#f1e2c4" />
        <ellipse cx="-10" cy="-142" rx="7.5" ry="6" fill="#3b2a1c" transform="rotate(-25 -10 -142)" />
        <ellipse cx="10" cy="-142" rx="7.5" ry="6" fill="#3b2a1c" transform="rotate(25 10 -142)" />
        <circle cx="-10" cy="-142" r="3.2" fill="#0d0805" />
        <circle cx="10" cy="-142" r="3.2" fill="#0d0805" />
        <circle cx="-9" cy="-143" r="1.1" fill="#fff" />
        <circle cx="11" cy="-143" r="1.1" fill="#fff" />
        <ellipse cx="0" cy="-109" rx="4" ry="3" fill="#2a1c12" />
      </g>

      {/* caracal */}
      <g transform="translate(310 212)">
        <path d="M-36 0 C-38 -42 -32 -72 -24 -86 L24 -86 C32 -72 38 -42 36 0 Z" fill="#c4854c" />
        <path d="M-16 0 C-18 -30 -14 -60 -8 -80 L8 -80 C14 -60 18 -30 16 0Z" fill="#f3e3cc" />
        {/* ears with black tufts */}
        <path d="M-32 -124 L-42 -194 L-8 -146 Z" fill="#8c5530" />
        <path d="M-29 -130 L-38 -182 L-13 -146 Z" fill="#f1dcc0" />
        <path d="M-42 -194 L-46 -216 M-42 -194 L-38 -214" stroke="#1c140e" strokeWidth="4" strokeLinecap="round" />
        <path d="M32 -124 L42 -194 L8 -146 Z" fill="#8c5530" />
        <path d="M29 -130 L38 -182 L13 -146 Z" fill="#f1dcc0" />
        <path d="M42 -194 L46 -216 M42 -194 L38 -214" stroke="#1c140e" strokeWidth="4" strokeLinecap="round" />
        <path d="M-38 -112 C-38 -142 -20 -154 0 -154 C20 -154 38 -142 38 -112 C38 -90 20 -78 0 -78 C-20 -78 -38 -90 -38 -112Z" fill="#c98b50" />
        <path d="M-18 -98 C-18 -86 -7 -79 0 -79 C7 -79 18 -86 18 -98 C11 -106 -11 -106 -18 -98Z" fill="#f7ecdc" />
        <ellipse cx="-13" cy="-134" rx="4" ry="2.5" fill="#2a1a10" />
        <ellipse cx="13" cy="-134" rx="4" ry="2.5" fill="#2a1a10" />
        <path d="M-24 -120 Q-15 -128 -6 -120 Q-15 -114 -24 -120Z" fill="#d9b43a" stroke="#1c140e" strokeWidth="2" />
        <path d="M24 -120 Q15 -128 6 -120 Q15 -114 24 -120Z" fill="#d9b43a" stroke="#1c140e" strokeWidth="2" />
        <ellipse cx="-15" cy="-120" rx="1.6" ry="4" fill="#111" />
        <ellipse cx="15" cy="-120" rx="1.6" ry="4" fill="#111" />
        <path d="M-7 -118 C-9 -110 -10 -104 -8 -98 M7 -118 C9 -110 10 -104 8 -98" stroke="#3a2416" strokeWidth="2.2" fill="none" strokeLinecap="round" />
        <path d="M-6 -99 L6 -99 L0 -92 Z" fill="#c9675a" />
        <path d="M0 -92 V-88 M0 -88 C-3 -85 -7 -85 -9 -87 M0 -88 C3 -85 7 -85 9 -87" stroke="#3a2416" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      </g>

      {/* Patagonian mara */}
      <g transform="translate(404 212)">
        <path d="M-28 0 C-30 -40 -24 -70 -16 -82 L16 -82 C24 -70 30 -40 28 0 Z" fill="#9b8a74" />
        <path d="M-14 0 C-15 -30 -11 -58 -7 -76 L7 -76 C11 -58 15 -30 14 0Z" fill="#f1e9dd" />
        <path d="M-15 -134 C-27 -170 -23 -192 -14 -194 C-5 -190 -5 -162 -6 -136Z" fill="#8a7762" />
        <path d="M-14 -140 C-21 -166 -19 -182 -14 -184 C-9 -180 -9 -160 -9 -142Z" fill="#d8b6a6" />
        <path d="M15 -134 C27 -170 23 -192 14 -194 C5 -190 5 -162 6 -136Z" fill="#8a7762" />
        <path d="M14 -140 C21 -166 19 -182 14 -184 C9 -180 9 -160 9 -142Z" fill="#d8b6a6" />
        <path d="M-27 -118 C-27 -142 -14 -150 0 -150 C14 -150 27 -142 27 -118 C27 -100 16 -84 0 -82 C-16 -84 -27 -100 -27 -118Z" fill="#a8947c" />
        <ellipse cx="0" cy="-94" rx="13" ry="11" fill="#d3c2ac" />
        <ellipse cx="-13" cy="-120" rx="6" ry="7" fill="#1d1510" />
        <ellipse cx="13" cy="-120" rx="6" ry="7" fill="#1d1510" />
        <circle cx="-11" cy="-122.5" r="2" fill="#fff" />
        <circle cx="15" cy="-122.5" r="2" fill="#fff" />
        <path d="M-4 -99 L4 -99 L0 -95 Z" fill="#3a2b20" />
        <path d="M0 -95 V-91 M0 -91 C-3 -88 -6 -88 -7 -90 M0 -91 C3 -88 6 -88 7 -90" stroke="#3a2b20" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      </g>

      {/* banner with the title */}
      <path d="M22 196 H498 L484 226 L498 256 H22 L36 226 Z" fill="url(#lg-banner)" stroke="#e0602a" strokeWidth="3" strokeLinejoin="round" />
      <text x="260" y="238" textAnchor="middle" className="logo-text">{title}</text>
    </svg>
  )
}
