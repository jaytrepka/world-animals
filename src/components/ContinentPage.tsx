import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import geo from '../data/geo/australia.json'
import { australiaAnimals } from '../data/australia'
import type { Animal, RegionId } from '../data/types'
import { UI, useLang } from '../i18n'
import { speak } from '../speech'
import AustraliaMap from './AustraliaMap'
import { ArrowIcon } from './icons'

const REGIONS: RegionId[] = ['north', 'middle', 'south']

type Camera = { s: number; tx: number; ty: number }

/** Space kept free for the big arrows at the top/bottom of the screen. */
const PAD_Y = 96
const PAD_X = 24

function cameraFor(region: RegionId, vw: number, vh: number): Camera {
  const v = geo.views[region]
  const availW = vw - PAD_X * 2
  const availH = vh - PAD_Y * 2
  let s = Math.min(availW / v.w, availH / v.h)
  // On narrow portrait screens don't shrink the map to a sliver – zoom in and let kids drag sideways.
  if (vw < vh) s = Math.min(availH / v.h, (availW / v.w) * 1.9)
  const tx = vw / 2 - (v.x + v.w / 2) * s
  const ty = vh / 2 - (v.y + v.h / 2) * s
  return { s, tx, ty }
}

function clampCamera(c: Camera, vw: number, vh: number): Camera {
  const mapW = geo.width * c.s
  const mapH = geo.height * c.s
  const clamp = (t: number, size: number, view: number) =>
    size <= view ? (view - size) / 2 : Math.min(0, Math.max(view - size, t))
  return { s: c.s, tx: clamp(c.tx, mapW, vw), ty: clamp(c.ty, mapH, vh) }
}

export default function ContinentPage({
  region,
  onRegion,
  onBack,
  onAnimal,
}: {
  region: RegionId
  onRegion: (r: RegionId) => void
  onBack: () => void
  onAnimal: (a: Animal) => void
}) {
  const { lang, t } = useLang()
  const viewportRef = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState({ w: window.innerWidth, h: window.innerHeight })
  // Manual dragging offset; it belongs to one region and resets when the region changes
  const [panState, setPanState] = useState({ region, x: 0, y: 0 })
  const pan = panState.region === region ? panState : { region, x: 0, y: 0 }
  const setPan = (p: { x: number; y: number }) => setPanState({ region, ...p })
  const [dragging, setDragging] = useState(false)
  const drag = useRef<{ x: number; y: number; px: number; py: number; moved: boolean } | null>(null)

  useLayoutEffect(() => {
    const el = viewportRef.current
    if (!el) return
    const ro = new ResizeObserver(() => setSize({ w: el.clientWidth, h: el.clientHeight }))
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const base = cameraFor(region, size.w, size.h)
  const cam = clampCamera({ ...base, tx: base.tx + pan.x, ty: base.ty + pan.y }, size.w, size.h)

  const idx = REGIONS.indexOf(region)
  const go = useCallback(
    (delta: number) => {
      const next = REGIONS[idx + delta]
      if (next) {
        speak(t(UI[next]), lang)
        onRegion(next)
      }
    },
    [idx, onRegion, lang, t],
  )

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp') go(-1)
      if (e.key === 'ArrowDown') go(1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go])

  const onPointerDown = (e: React.PointerEvent) => {
    drag.current = { x: e.clientX, y: e.clientY, px: pan.x, py: pan.y, moved: false }
  }
  const onPointerMove = (e: React.PointerEvent) => {
    const d = drag.current
    if (!d) return
    const dx = e.clientX - d.x
    const dy = e.clientY - d.y
    if (!d.moved && Math.hypot(dx, dy) < 8) return
    if (!d.moved) {
      d.moved = true
      setDragging(true)
      viewportRef.current?.setPointerCapture(e.pointerId)
    }
    setPan({ x: d.px + dx, y: d.py + dy })
  }
  const endDrag = () => {
    const d = drag.current
    drag.current = null
    if (d?.moved) {
      // Keep the pan the user sees (store the clamped result so the next drag starts from it)
      setPan({ x: cam.tx - base.tx, y: cam.ty - base.ty })
      // let the click that follows a drag be ignored
      window.setTimeout(() => setDragging(false), 0)
    }
  }

  return (
    <main className="continent-page">
      <div
        className={`map-viewport ${dragging ? 'dragging' : ''}`}
        ref={viewportRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        <div
          className="map-stage"
          style={
            {
              width: geo.width,
              height: geo.height,
              '--tx': `${cam.tx}px`,
              '--ty': `${cam.ty}px`,
              '--s': cam.s,
            } as React.CSSProperties
          }
        >
          <AustraliaMap />
          {australiaAnimals.map((a) => (
            <button
              key={a.id}
              className={`animal-pin ${a.region === region ? 'here' : 'away'}`}
              style={{ left: a.x, top: a.y }}
              onClick={() => {
                if (!dragging) onAnimal(a)
              }}
              aria-label={a.name[lang]}
              title={a.name[lang]}
            >
              <img src={a.thumb} alt="" draggable={false} loading="lazy" />
            </button>
          ))}
        </div>
      </div>

      <button className="round-btn back-btn" onClick={onBack} aria-label={t(UI.back)}>
        <ArrowIcon dir="left" />
      </button>

      {idx > 0 && (
        <button className="round-btn nav-btn nav-up" onClick={() => go(-1)} aria-label={t(UI.goNorth)}>
          <ArrowIcon dir="up" />
        </button>
      )}
      {idx < REGIONS.length - 1 && (
        <button className="round-btn nav-btn nav-down" onClick={() => go(1)} aria-label={t(UI.goSouth)}>
          <ArrowIcon dir="down" />
        </button>
      )}

      <div className="region-dots" aria-hidden="true">
        {REGIONS.map((r) => (
          <span key={r} className={r === region ? 'on' : ''} onClick={() => onRegion(r)} />
        ))}
      </div>
    </main>
  )
}
