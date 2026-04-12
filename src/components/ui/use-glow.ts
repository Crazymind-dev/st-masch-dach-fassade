"use client"

import { useRef, type MouseEvent } from "react"

/**
 * Tracks the cursor inside the returned element and writes its relative
 * position into CSS custom properties (--mouse-x / --mouse-y). Pair with
 * a `.card-glow-aura` child div that reads those props in its background.
 */
export function useGlow<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null)

  const onMouseMove = (e: MouseEvent<T>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`)
    el.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`)
  }

  return { ref, onMouseMove }
}
