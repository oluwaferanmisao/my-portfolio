'use client'

import { useEffect, useRef } from 'react'

export function DotGrid() {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return

    // Create animated dots
    const dots: HTMLDivElement[] = []
    const rows = Math.floor(window.innerHeight / 40)
    const cols = Math.floor(window.innerWidth / 40)

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const dot = document.createElement('div')
        dot.className = 'dot'
        dot.style.left = `${j * 40 + 19}px` // Center dot in grid
        dot.style.top = `${i * 40 + 19}px`  // Center dot in grid
        dot.style.animationDelay = `${Math.random() * 3}s` // Random start time
        dots.push(dot)
        grid.appendChild(dot)
      }
    }

    return () => {
      dots.forEach(dot => dot.remove())
    }
  }, [])

  return <div ref={gridRef} className="dot-grid" />
}
