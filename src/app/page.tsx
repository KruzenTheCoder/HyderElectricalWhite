'use client'

import styles from '@/styles/components.module.css'
import Link from 'next/link'
import { useRef } from 'react'

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
      <section
        ref={heroRef}
        onPointerMove={handlePointerMove}
        className={styles.heroSection}
      >
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Taking You Out of the Dark</h1>
          <p className={styles.heroDescription}>
            Turnkey electrical contracting—design to commissioning—for high-voltage (up to 132 kV), commercial and industrial projects across South Africa.
          </p>
          <div className={styles.ctaGroup}>
            <Link href="/contact#start" className={styles.primaryCTA}>
              Begin Your Project
            </Link>
            <Link href="tel:+27827805434" className={styles.secondaryCTA}>
              Emergency: 082 780 5434
            </Link>
          </div>
          <ul className={styles.trustChips}>
            <li>Level 1 B-BBEE</li>
            <li>40 years</li>
            <li>24/7 Emergency</li>
          </ul>
        </div>
      </section>
    </div>
  )
}