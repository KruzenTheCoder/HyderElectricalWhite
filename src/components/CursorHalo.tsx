'use client'

import { useEffect, useRef } from 'react'
import styles from '@/styles/components.module.css'

export default function CursorHalo() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handle(e: PointerEvent) {
      if (!ref.current) return
      ref.current.style.left = `${e.clientX}px`
      ref.current.style.top = `${e.clientY}px`
    }
    window.addEventListener('pointermove', handle)
    return () => window.removeEventListener('pointermove', handle)
  }, [])

  return (
    <div ref={ref} className={styles.cursorHalo} aria-hidden>
      <span />
    </div>
  )
}
