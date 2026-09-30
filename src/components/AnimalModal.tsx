import { useEffect, useRef, useState } from 'react'
import type { Animal, L } from '../data/types'
import { UI, useLang } from '../i18n'
import { canSpeak, speak, stopSpeaking } from '../speech'
import { ArrowIcon, CloseIcon, SpeakerIcon } from './icons'

const RANKS = ['kingdom', 'phylum', 'class', 'order', 'family'] as const

export default function AnimalModal({ animal, onClose }: { animal: Animal; onClose: () => void }) {
  const { lang, t } = useLang()
  const [photo, setPhoto] = useState(0)
  const [speaking, setSpeaking] = useState<string | null>(null)
  const swipe = useRef<number | null>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const name = animal.name[lang]

  // Say the animal's name when the window opens (and again when the language changes)
  useEffect(() => {
    speak(name, lang)
    return () => stopSpeaking()
  }, [name, lang])

  useEffect(() => {
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') setPhoto((p) => (p + 1) % animal.photos.length)
      if (e.key === 'ArrowLeft') setPhoto((p) => (p - 1 + animal.photos.length) % animal.photos.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [animal, onClose])

  const say = (key: string, text: string) => {
    if (speaking === key) {
      stopSpeaking()
      setSpeaking(null)
      return
    }
    setSpeaking(key)
    speak(text, lang, () => setSpeaking((k) => (k === key ? null : k)))
  }

  const sections: { key: 'habitat' | 'diet' | 'predators'; icon: string; text: L }[] = [
    { key: 'habitat', icon: '🏡', text: animal.habitat },
    { key: 'diet', icon: '🍽️', text: animal.diet },
    { key: 'predators', icon: '⚠️', text: animal.predators },
  ]
  const everything = [name, ...sections.map((s) => `${t(UI[s.key])} ${s.text[lang]}`)].join('. ')
  const count = animal.photos.length
  const c = animal.classification

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" role="dialog" aria-modal="true" aria-label={name} onClick={(e) => e.stopPropagation()}>
        <button ref={closeRef} className="round-btn close-btn" onClick={onClose} aria-label={t(UI.close)}>
          <CloseIcon />
        </button>

        <div className="modal-scroll">
        <div
          className="gallery"
          onPointerDown={(e) => (swipe.current = e.clientX)}
          onPointerUp={(e) => {
            if (swipe.current === null) return
            const dx = e.clientX - swipe.current
            swipe.current = null
            if (Math.abs(dx) > 40 && count > 1) setPhoto((p) => (p + (dx < 0 ? 1 : -1) + count) % count)
          }}
        >
          <div className="gallery-bg" style={{ backgroundImage: `url(${animal.photos[photo]})` }} />
          {animal.photos.map((src, i) => (
            <img key={src} src={src} alt={i === photo ? name : ''} className={i === photo ? 'shown' : ''} draggable={false} />
          ))}
          {count > 1 && (
            <>
              <button className="round-btn photo-btn prev" onClick={() => setPhoto((photo - 1 + count) % count)} aria-label={t(UI.prevPhoto)}>
                <ArrowIcon dir="left" />
              </button>
              <button className="round-btn photo-btn next" onClick={() => setPhoto((photo + 1) % count)} aria-label={t(UI.nextPhoto)}>
                <ArrowIcon dir="right" />
              </button>
              <div className="photo-dots">
                {animal.photos.map((src, i) => (
                  <span key={src} className={i === photo ? 'on' : ''} onClick={() => setPhoto(i)} />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="modal-body">
          <div className="name-row">
            <h2>{name}</h2>
            {canSpeak() && (
              <button className={`round-btn speak-btn big ${speaking === 'all' ? 'playing' : ''}`} onClick={() => say('all', everything)} aria-label={t(UI.listen)}>
                <SpeakerIcon playing={speaking === 'all'} />
              </button>
            )}
          </div>
          <p className="latin">{c.species}</p>

          <section className="classification">
            <h3>🔬 {t(UI.classification)}</h3>
            <dl>
              {RANKS.map((rank) => (
                <div key={rank}>
                  <dt>{t(UI[rank])}</dt>
                  <dd>
                    <span className="taxon">{c[rank][lang]}</span> <i>({c[rank].latin})</i>
                  </dd>
                </div>
              ))}
              <div>
                <dt>{t(UI.genus)}</dt>
                <dd><i>{c.genus}</i></dd>
              </div>
              <div>
                <dt>{t(UI.species)}</dt>
                <dd><i>{c.species}</i></dd>
              </div>
            </dl>
          </section>

          {sections.map((s) => (
            <section key={s.key} className={`info info-${s.key}`}>
              <div className="info-icon" aria-hidden="true">{s.icon}</div>
              <div className="info-text">
                <h3>{t(UI[s.key])}</h3>
                <p>{s.text[lang]}</p>
              </div>
              {canSpeak() && (
                <button
                  className={`round-btn speak-btn ${speaking === s.key ? 'playing' : ''}`}
                  onClick={() => say(s.key, `${t(UI[s.key])} ${s.text[lang]}`)}
                  aria-label={`${t(UI.listen)}: ${t(UI[s.key])}`}
                >
                  <SpeakerIcon playing={speaking === s.key} />
                </button>
              )}
            </section>
          ))}

          <footer className="credits">
            {t(UI.photos)}:{' '}
            {animal.credits.map((cr, i) => (
              <span key={cr.file}>
                {i > 0 && ' · '}
                <a href={cr.source} target="_blank" rel="noreferrer">
                  {cr.author || 'Wikimedia Commons'}
                </a>{' '}
                ({cr.license})
              </span>
            ))}
            , Wikimedia Commons
          </footer>
        </div>
        </div>
      </div>
    </div>
  )
}
