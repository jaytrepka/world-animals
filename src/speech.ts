import type { Lang } from './data/types'

const LOCALES: Record<Lang, string[]> = { cs: ['cs-CZ', 'cs'], en: ['en-GB', 'en-AU', 'en-US', 'en'] }

function pickVoice(lang: Lang): SpeechSynthesisVoice | undefined {
  const voices = window.speechSynthesis.getVoices()
  for (const loc of LOCALES[lang]) {
    const matches = voices.filter((v) => v.lang.replace('_', '-').toLowerCase().startsWith(loc.toLowerCase()))
    // Prefer nicer / local voices when several exist
    const best = matches.find((v) => /premium|enhanced|natural|google/i.test(v.name)) ?? matches.find((v) => v.localService) ?? matches[0]
    if (best) return best
  }
  return undefined
}

export function canSpeak() {
  return typeof window !== 'undefined' && 'speechSynthesis' in window
}

// Some browsers load voices lazily
if (canSpeak()) window.speechSynthesis.getVoices()

export function speak(text: string, lang: Lang, onEnd?: () => void) {
  if (!canSpeak()) return
  const synth = window.speechSynthesis
  synth.cancel()
  const u = new SpeechSynthesisUtterance(text)
  u.lang = LOCALES[lang][0]
  const voice = pickVoice(lang)
  if (voice) u.voice = voice
  u.rate = 0.9
  u.pitch = 1.05
  if (onEnd) {
    u.onend = onEnd
    u.onerror = onEnd
  }
  synth.speak(u)
}

export function stopSpeaking() {
  if (canSpeak()) window.speechSynthesis.cancel()
}
