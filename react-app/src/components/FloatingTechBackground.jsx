import { useEffect, useRef } from 'react'
import { Atom } from 'lucide-react'
import './FloatingTechBackground.css'

const symbols = [
  ['JS', 'gold', 17, 24, 1],
  ['React', 'turquoise', 53, 20, 4],
  ['Py', 'gold', 83, 32, 7],
  ['HTML', 'violet', 35, 40, 3],
  ['CSS', 'turquoise', 67, 49, 8],
  ['SQL', 'violet', 13, 61, 5],
  ['C++', 'violet', 43, 73, 0],
  ['Java', 'gold', 88, 76, 6],
  ['C#', 'turquoise', 63, 87, 2],
]

const influenceRadius = 135
const maxDisplacement = 38
const driftEnvelope = 80

export default function FloatingTechBackground({ playing }) {
  const layerRef = useRef(null)

  useEffect(() => {
    if (!playing) return

    const layer = layerRef.current
    const symbols = Array.from(layer.children, (anchor) => ({
      anchor,
      drift: anchor.firstElementChild,
      mover: anchor.firstElementChild.firstElementChild,
      x: 0,
      y: 0,
    }))
    let pointer = null
    let frame = 0
    let previousTime = 0

    function measure() {
      for (const symbol of symbols) {
        const { x, y, width, height } = symbol.anchor.getBoundingClientRect()
        symbol.centerX = x + width / 2
        symbol.centerY = y + height / 2
        symbol.visible = width > 0
      }
    }

    function animate(time) {
      frame = 0
      const elapsed = previousTime ? Math.min(time - previousTime, 32) : 16
      let moving = false

      for (const symbol of symbols) {
        if (!symbol.visible) continue
        let targetX = 0
        let targetY = 0

        // Solo consultamos la posición animada cuando el cursor puede alcanzarla.
        if (pointer && Math.hypot(symbol.centerX - pointer.x, symbol.centerY - pointer.y) < influenceRadius + driftEnvelope) {
          moving = true
          const { x, y, width, height } = symbol.drift.getBoundingClientRect()
          const dx = x + width / 2 - pointer.x
          const dy = y + height / 2 - pointer.y
          const distance = Math.hypot(dx, dy)
          if (distance < influenceRadius) {
            const strength = maxDisplacement * (1 - distance / influenceRadius) ** 2
            // El núcleo suaviza el cambio de dirección al cruzar el centro.
            const scale = strength / Math.hypot(distance, 12)
            targetX = dx * scale
            targetY = dy * scale
          }
        }

        if (symbol.x === targetX && symbol.y === targetY) continue
        const returning = targetX === 0 && targetY === 0
        const ease = 1 - Math.exp(-elapsed / (returning ? 260 : 145))
        symbol.x += (targetX - symbol.x) * ease
        symbol.y += (targetY - symbol.y) * ease
        if (Math.hypot(targetX - symbol.x, targetY - symbol.y) > 0.1) {
          moving = true
        } else {
          symbol.x = targetX
          symbol.y = targetY
        }
        symbol.mover.style.transform = `translate(${symbol.x}px, ${symbol.y}px)`
      }

      previousTime = moving ? time : 0
      if (moving) schedule()
    }

    function schedule() {
      if (!frame && !document.hidden) frame = requestAnimationFrame(animate)
    }

    function move(event) {
      if (event.pointerType !== 'mouse') return
      pointer = { x: event.clientX, y: event.clientY }
      schedule()
    }

    function clearPointer() {
      pointer = null
      schedule()
    }

    function resize() {
      measure()
      clearPointer()
    }

    measure()
    window.addEventListener('pointermove', move, { passive: true })
    document.documentElement.addEventListener('pointerleave', clearPointer)
    window.addEventListener('blur', clearPointer)
    window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('pointermove', move)
      document.documentElement.removeEventListener('pointerleave', clearPointer)
      window.removeEventListener('blur', clearPointer)
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(frame)
      for (const symbol of symbols) {
        symbol.mover.style.removeProperty('transform')
      }
    }
  }, [playing])

  return (
    <div ref={layerRef} className="gio-floating-tech" data-playing={playing} aria-hidden="true">
      {symbols.map(([label, tone, left, top, phase]) => (
        <span
          key={label}
          className="gio-tech-anchor"
          data-tone={tone}
          style={{
            left: `${left}%`,
            top: `${top}%`,
            '--tech-delay': `-${phase * 3}s`,
            '--tech-duration': `${32 + phase * 2}s`,
            '--tech-direction': phase % 2 === 0 ? 1 : -1,
          }}
        >
          <span className="gio-tech-drift">
            <span className="gio-tech-mover">
              <span className="gio-tech-symbol">
                {label === 'React' ? <Atom size={23} strokeWidth={1.35} /> : label}
              </span>
            </span>
          </span>
        </span>
      ))}
    </div>
  )
}
