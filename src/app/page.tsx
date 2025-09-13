'use client'

import styles from '@/styles/components.module.css'
import Link from 'next/link'
import { useRef } from 'react'
import CADBackground from '@/components/CADBackground'

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const r = heroRef.current?.getBoundingClientRect()
    if (!r || !heroRef.current) return
    const x = e.clientX - r.left
    const y = e.clientY - r.top
    heroRef.current.style.setProperty('--x', `${x}px`)
    heroRef.current.style.setProperty('--y', `${y}px`)
  }

  return (
    <div className={styles.page}>
      {/* Background circuitry */}
      <CADBackground />

      <section
        ref={heroRef}
        onPointerMove={handlePointerMove}
        className={`${styles.heroSection} ${styles.glassHero}`}
      >
        <div className={styles.heroContent}>
          <h2 className={styles.heroTagline}>Excellence in Contracting</h2>
          <h1 className={styles.heroTitle}>Taking You Out of the Dark</h1>
          <p className={`${styles.heroDescription} ${styles.typewriter}`}>
            A turnkey electrical contractor. We design, install and commission high-voltage, commercial and industrial systems across South Africa. With 40 years of excellence, we illuminate possibilities.
          </p>
          <div className={styles.ctaGroup}>
            <Link href="/contact#start" className={styles.primaryCTA}>
              Begin Your Project
            </Link>
            <Link href="tel:+27827805434" className={styles.secondaryCTA}>
              Emergency: 082&nbsp;780&nbsp;5434
            </Link>
          </div>
          <ul className={styles.trustChips}>
            <li>Level 1 B‑BBEE</li>
            <li>40 years</li>
            <li>24/7 Emergency</li>
          </ul>
        </div>
      </section>
    </div>
  )
}
