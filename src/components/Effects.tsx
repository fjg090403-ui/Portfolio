import { useEffect, useMemo, useState } from 'react'

export function Aurora() {
  return <div className="aurora" aria-hidden="true" />
}

export function Threads() {
  return <div className="threads" aria-hidden="true" />
}

export function GridDistortion() {
  return <div className="grid-distortion" aria-hidden="true" />
}

export function Orb() {
  return <div className="orb" aria-hidden="true" />
}

export function MagnetLines() {
  return <div className="magnet-lines" aria-hidden="true">{Array.from({ length: 18 }, (_, i) => <span key={i} />)}</div>
}

export function Particles({ density = 28 }: { density?: number }) {
  const seededValue = (index: number, salt: number) => {
    const value = Math.sin(index * 91.345 + salt) * 10000
    return value - Math.floor(value)
  }

  const dots = useMemo(() => Array.from({ length: density }, (_, index) => ({
    id: index,
    left: `${seededValue(index, 1) * 100}%`,
    top: `${seededValue(index, 2) * 100}%`,
    delay: `${seededValue(index, 3) * 4}s`,
    duration: `${4 + seededValue(index, 4) * 5}s`,
  })), [density])

  return (
    <div className="particles" aria-hidden="true">
      {dots.map((dot) => <span key={dot.id} style={dot} />)}
    </div>
  )
}

export function SplashCursor() {
  const [point, setPoint] = useState({ x: -100, y: -100 })

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches
    if (!isFinePointer) return undefined

    let raf = 0
    const onMove = (event: MouseEvent) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => setPoint({ x: event.clientX, y: event.clientY }))
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onMove)
    }
  }, [])

  return <div className="splash-cursor" style={{ transform: `translate(${point.x - 160}px, ${point.y - 160}px)` }} aria-hidden="true" />
}

export function LaserGrid() {
  return (
    <div className="laser-grid" aria-hidden="true">
      {Array.from({ length: 12 }, (_, index) => <span key={index} style={{ '--i': index } as React.CSSProperties} />)}
    </div>
  )
}
