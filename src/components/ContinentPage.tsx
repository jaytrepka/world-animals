import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { REGION_NAMES, mapUrl, type ContinentData, type ContinentGeo } from '../data/continents'
import type { Animal, RegionId } from '../data/types'
import { UI, useLang } from '../i18n'
import { speak } from '../speech'
import { ArrowIcon, MinusIcon, PlusIcon } from './icons'

const REGIONS: RegionId[] = ['north', 'middle', 'south']

type Camera = { s: number; tx: number; ty: number }
type View = { region: RegionId; z: number; tx: number; ty: number }

/** How far kids can zoom in (times the normal view). */
const MAX_ZOOM = 6

/** Space kept free for the big arrows at the top/bottom of the screen. */
const PAD_Y = 96
const PAD_X = 24

function cameraFor(geo: ContinentGeo, region: RegionId, vw: number, vh: number): Camera {
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

function clampCamera(geo: ContinentGeo, c: Camera, vw: number, vh: number): Camera {
  const mapW = geo.width * c.s
  const mapH = geo.height * c.s
  const clamp = (t: number, size: number, view: number) =>
    size <= view ? (view - size) / 2 : Math.min(0, Math.max(view - size, t))
  return { s: c.s, tx: clamp(c.tx, mapW, vw), ty: clamp(c.ty, mapH, vh) }
}

export default function ContinentPage({
  data,
  region,
  onRegion,
  onBack,
  onAnimal,
}: {
  data: ContinentData
  region: RegionId
  onRegion: (r: RegionId) => void
  onBack: () => void
  onAnimal: (a: Animal) => void
}) {
  const { lang, t } = useLang()
  const { geo, animals } = data
  const regionName = (r: RegionId) => t(REGION_NAMES[data.key]?.[r] ?? UI[r])
  const viewportRef = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState({ w: window.innerWidth, h: window.innerHeight })
  // The user's own zoom + position (from dragging, pinching, the wheel or the +/- buttons).
  // It belongs to one region: switching to another part of the continent starts fresh.
  const [view, setView] = useState<View | null>(null)
  const userView = view && view.region === region ? view : null
  // True while a finger/mouse is moving the map: no smooth CSS transition then, and no accidental animal clicks
  const [interacting, setInteracting] = useState(false)

  useLayoutEffect(() => {
    const el = viewportRef.current
    if (!el) return
    const ro = new ResizeObserver(() => setSize({ w: el.clientWidth, h: el.clientHeight }))
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const base = cameraFor(geo, region, size.w, size.h)
  const zoom = userView?.z ?? 1
  const cam = clampCamera(geo, userView ? { s: base.s * zoom, tx: userView.tx, ty: userView.ty } : base, size.w, size.h)

  /** Set zoom level `z` with the map moved to (tx, ty) – kept inside the map. */
  const commit = (z: number, tx: number, ty: number) => {
    const c = clampCamera(geo, { s: base.s * z, tx, ty }, size.w, size.h)
    setView({ region, z, tx: c.tx, ty: c.ty })
  }
  /** Zoom to `z`, keeping the map point under the screen point (fx, fy) in place. */
  const zoomAt = (fx: number, fy: number, z: number) => {
    const nz = Math.min(MAX_ZOOM, Math.max(1, z))
    const k = (base.s * nz) / cam.s
    commit(nz, fx - (fx - cam.tx) * k, fy - (fy - cam.ty) * k)
  }

  // Latest values for the native (non-React) wheel listener
  const latest = useRef({ zoomAt, zoom })
  useEffect(() => {
    latest.current = { zoomAt, zoom }
  })
  useEffect(() => {
    const el = viewportRef.current
    if (!el) return
    let timer = 0
    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      // ctrlKey = pinch on a laptop trackpad; plain wheel zooms more gently
      const factor = Math.exp(-e.deltaY * (e.ctrlKey ? 0.01 : 0.002))
      setInteracting(true)
      window.clearTimeout(timer)
      timer = window.setTimeout(() => setInteracting(false), 150)
      latest.current.zoomAt(e.clientX, e.clientY, latest.current.zoom * factor)
    }
    // Safari: stop the whole page from zooming on pinch
    const stop = (e: Event) => e.preventDefault()
    el.addEventListener('wheel', onWheel, { passive: false })
    el.addEventListener('gesturestart', stop)
    el.addEventListener('gesturechange', stop)
    return () => {
      el.removeEventListener('wheel', onWheel)
      el.removeEventListener('gesturestart', stop)
      el.removeEventListener('gesturechange', stop)
    }
  }, [])

  const idx = REGIONS.indexOf(region)
  const go = (delta: number) => {
    const next = REGIONS[idx + delta]
    if (next) {
      speak(regionName(next), lang)
      onRegion(next)
    }
  }

  // Keyboard arrows (the handler always calls the latest `go`)
  const goRef = useRef(go)
  useEffect(() => {
    goRef.current = go
  })
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp') goRef.current(-1)
      if (e.key === 'ArrowDown') goRef.current(1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // ---- dragging with one finger / the mouse, pinch-zooming with two fingers
  const pointers = useRef(new Map<number, { x: number; y: number }>())
  const gesture = useRef<
    | { kind: 'drag'; x: number; y: number; tx: number; ty: number; moved: boolean }
    | { kind: 'pinch'; dist: number; mx: number; my: number; z: number; cam: Camera }
    | null
  >(null)

  /** Keep receiving this finger's moves even when it leaves the map (never let it break the gesture). */
  const capture = (pointerId: number) => {
    try {
      viewportRef.current?.setPointerCapture(pointerId)
    } catch {
      /* pointer already gone */
    }
  }

  const startGesture = () => {
    const pts = [...pointers.current.values()]
    if (pts.length >= 2) {
      const [a, b] = pts
      const mx = (a.x + b.x) / 2
      const my = (a.y + b.y) / 2
      // remember which map point is under the fingers, so it stays under them
      gesture.current = { kind: 'pinch', dist: Math.hypot(a.x - b.x, a.y - b.y) || 1, mx, my, z: zoom, cam }
      setInteracting(true)
    } else if (pts.length === 1) {
      const moved = gesture.current?.kind === 'pinch' // continuing after a pinch: already "moving"
      gesture.current = { kind: 'drag', x: pts[0].x, y: pts[0].y, tx: cam.tx, ty: cam.ty, moved }
    } else gesture.current = null
  }

  const onPointerDown = (e: React.PointerEvent) => {
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY })
    if (pointers.current.size >= 2) capture(e.pointerId)
    startGesture()
  }
  const onPointerMove = (e: React.PointerEvent) => {
    if (!pointers.current.has(e.pointerId)) return
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY })
    const g = gesture.current
    if (!g) return
    if (g.kind === 'pinch') {
      const [a, b] = [...pointers.current.values()]
      const nz = Math.min(MAX_ZOOM, Math.max(1, (g.z * Math.hypot(a.x - b.x, a.y - b.y)) / g.dist))
      const s1 = base.s * nz
      const mapX = (g.mx - g.cam.tx) / g.cam.s
      const mapY = (g.my - g.cam.ty) / g.cam.s
      commit(nz, (a.x + b.x) / 2 - mapX * s1, (a.y + b.y) / 2 - mapY * s1)
      return
    }
    const dx = e.clientX - g.x
    const dy = e.clientY - g.y
    if (!g.moved && Math.hypot(dx, dy) < 8) return
    if (!g.moved) {
      g.moved = true
      setInteracting(true)
      capture(e.pointerId)
    }
    commit(zoom, g.tx + dx, g.ty + dy)
  }
  const onPointerUp = (e: React.PointerEvent) => {
    pointers.current.delete(e.pointerId)
    const wasMoving = gesture.current?.kind === 'pinch' || (gesture.current?.kind === 'drag' && gesture.current.moved)
    startGesture()
    if (pointers.current.size === 0 && wasMoving) {
      // let the click that follows a drag be ignored
      window.setTimeout(() => setInteracting(false), 0)
    }
  }

  const zoomButton = (factor: number) => zoomAt(size.w / 2, size.h / 2, zoom * factor)

  return (
    <main className="continent-page">
      <div
        className={`map-viewport ${interacting ? 'dragging' : ''}`}
        ref={viewportRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onDoubleClick={(e) => zoomAt(e.clientX, e.clientY, zoom >= MAX_ZOOM ? 1 : zoom * 2)}
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
              // animal pictures grow when zooming in – a bit slower than the map, so they also spread apart
              '--pz': Math.pow(zoom, 0.65),
            } as React.CSSProperties
          }
        >
          <img
            className="painted-map"
            src={mapUrl(data.key)}
            width={geo.width}
            height={geo.height}
            alt=""
            draggable={false}
            decoding="async"
          />
          {animals.map((a) => (
            <button
              key={a.id}
              className={`animal-pin ${a.region === region ? 'here' : 'away'}`}
              style={{ left: a.x, top: a.y }}
              onClick={() => {
                if (!interacting) onAnimal(a)
              }}
              aria-label={a.name[lang]}
              title={a.name[lang]}
            >
              <img src={a.thumb} alt="" draggable={false} />
            </button>
          ))}
        </div>
      </div>

      <button className="round-btn back-btn" onClick={onBack} aria-label={t(UI.back)}>
        <ArrowIcon dir="left" />
      </button>

      {idx > 0 && (
        <button className="round-btn nav-btn nav-up" onClick={() => go(-1)} aria-label={regionName(REGIONS[idx - 1])}>
          <ArrowIcon dir="up" />
        </button>
      )}
      {idx < REGIONS.length - 1 && (
        <button className="round-btn nav-btn nav-down" onClick={() => go(1)} aria-label={regionName(REGIONS[idx + 1])}>
          <ArrowIcon dir="down" />
        </button>
      )}

      <div className="zoom-btns">
        <button className="round-btn zoom-btn" onClick={() => zoomButton(1.6)} disabled={zoom >= MAX_ZOOM} aria-label={t(UI.zoomIn)}>
          <PlusIcon />
        </button>
        <button className="round-btn zoom-btn" onClick={() => zoomButton(1 / 1.6)} disabled={zoom <= 1} aria-label={t(UI.zoomOut)}>
          <MinusIcon />
        </button>
      </div>

      <div className="region-dots" aria-hidden="true">
        {REGIONS.map((r) => (
          <span key={r} className={r === region ? 'on' : ''} onClick={() => onRegion(r)} />
        ))}
      </div>
    </main>
  )
}
