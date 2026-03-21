import { useState, useCallback } from 'react'

export type ServiceCardStyleState = {
  paddingX: number    // 4–24 px
  paddingY: number    // 4–24 px
  gap: number         // 2–20 px между карточками
  titleSize: number   // 10–20 px
  descSize: number    // 9–16 px
  radius: number      // 0–20 px border-radius
  cols: number        // 2 или 4
  cardWidth: number   // 40–100 % ширина карточки внутри ячейки
  cardHeight: number  // 0–300 px min-height (0 = auto)
}

export const DEFAULT_SERVICE_CARD_STYLE: ServiceCardStyleState = {
  paddingX: 14,
  paddingY: 12,
  gap: 6,
  titleSize: 17,
  descSize: 13,
  radius: 6,
  cols: 2,
  cardWidth: 90,
  cardHeight: 110,
}

const STORAGE_KEY = 'service-card-style-v7'

function loadStyle(): ServiceCardStyleState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return DEFAULT_SERVICE_CARD_STYLE
    return { ...DEFAULT_SERVICE_CARD_STYLE, ...JSON.parse(raw) }
  } catch {
    return DEFAULT_SERVICE_CARD_STYLE
  }
}

export function useServiceCardStyle() {
  const [style, setStyleRaw] = useState<ServiceCardStyleState>(loadStyle)

  const setStyle = useCallback((next: ServiceCardStyleState) => {
    setStyleRaw(next)
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    } catch {
      // storage unavailable
    }
  }, [])

  return { style, setStyle }
}
