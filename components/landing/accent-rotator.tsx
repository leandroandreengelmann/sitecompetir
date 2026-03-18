"use client"

import { useEffect } from "react"

const ACCENT_COLORS = [
  "#53389E",
  "#542C0D",
  "#FF4405",
  "#FAC515",
  "#087443",
  "#004EEB",
  "#535862",
  "#0A0D12",
  "#D92D20",
]

const ACCENT_INTERVAL = 7 * 60 * 1000

export function AccentRotator() {
  useEffect(() => {
    let idx = 0

    function apply() {
      const color = ACCENT_COLORS[idx]
      const root = document.documentElement
      root.style.setProperty("--c-accent", color)
      root.style.setProperty("--c-accent-12", color + "12")
      root.style.setProperty("--c-accent-15", color + "15")
      root.style.setProperty("--c-accent-66", color + "66")
    }

    apply()
    const t = setInterval(() => {
      idx = (idx + 1) % ACCENT_COLORS.length
      apply()
    }, ACCENT_INTERVAL)

    return () => clearInterval(t)
  }, [])

  return null
}
