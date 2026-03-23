import { useState, useCallback } from 'react'

export type CardStyleState = {
  bgOpacity: number      // 0–50  card base background opacity %
  edgeOpacity: number    // 0–100 inset shadow opacity %
  edgeSpread: number     // 0–80  inset shadow spread px
  topOpacity: number     // 0–20  top sheen opacity %
  bottomOpacity: number  // 0–80  bottom radial vignette opacity %
  hue: number            // 0–360 vignette color hue
  saturation: number     // 0–100 vignette color saturation %
  bottomEdge: number     // 0–100 bottom linear gradient rising to center %
  topEdge: number        // 0–100 top linear gradient falling to center %
}

export const DEFAULT_CARD_STYLE: CardStyleState = {
  bgOpacity: 50,
  edgeOpacity: 45,
  edgeSpread: 24,
  topOpacity: 5,
  bottomOpacity: 64,
  hue: 211,
  saturation: 100,
  bottomEdge: 21,
  topEdge: 0,
}

const STORAGE_KEY = 'card-style-v2'

function loadStyle(): CardStyleState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return DEFAULT_CARD_STYLE
    return { ...DEFAULT_CARD_STYLE, ...JSON.parse(raw) }
  } catch {
    return DEFAULT_CARD_STYLE
  }
}

export function useCardStyle() {
  const [style, setStyleRaw] = useState<CardStyleState>(loadStyle)

  const setStyle = useCallback((next: CardStyleState) => {
    setStyleRaw(next)
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    } catch {
      // storage unavailable
    }
  }, [])

  return { style, setStyle }
}
