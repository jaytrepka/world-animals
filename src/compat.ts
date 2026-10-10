// Feature checks for old browsers (e.g. hand-me-down tablets with an old Chrome).

/** CSS variables (Chrome 49+). Without them the map is positioned with plain inline transforms. */
export const CSS_VARS =
  typeof CSS !== 'undefined' && typeof CSS.supports === 'function' && CSS.supports('--a', '0')

/** Pointer events (Chrome 55+). Without them, dragging/pinching falls back to classic touch events. */
export const POINTER_EVENTS = typeof window !== 'undefined' && 'PointerEvent' in window

/** Minimal pointer info our gesture code needs – filled from pointer events or touch events. */
export type PointerLike = { pointerId: number; clientX: number; clientY: number }

/** Touch-event handlers that feed every changed touch into pointer-style handlers (only used without pointer events). */
export function touchAsPointer(handlers: {
  down: (p: PointerLike) => void
  move: (p: PointerLike) => void
  up: (p: PointerLike) => void
}) {
  if (POINTER_EVENTS) return {}
  const each = (e: React.TouchEvent, fn: (p: PointerLike) => void) => {
    for (let i = 0; i < e.changedTouches.length; i++) {
      const t = e.changedTouches[i]
      fn({ pointerId: t.identifier, clientX: t.clientX, clientY: t.clientY })
    }
  }
  return {
    onTouchStart: (e: React.TouchEvent) => each(e, handlers.down),
    onTouchMove: (e: React.TouchEvent) => each(e, handlers.move),
    onTouchEnd: (e: React.TouchEvent) => each(e, handlers.up),
    onTouchCancel: (e: React.TouchEvent) => each(e, handlers.up),
  }
}

/** Remove accents ("Žirafa" → "Zirafa"); old browsers without String.prototype.normalize keep the text as is. */
export function stripAccents(s: string) {
  return typeof s.normalize === 'function' ? s.normalize('NFD').replace(/[̀-ͯ]/g, '') : s
}
