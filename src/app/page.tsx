'use client'

import styles from '@/styles/components.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroSubtitle}>End-to-End Electrical Engineering</div>
          <h1 className={styles.heroTitle}>Taking You Out of the Dark</h1>
          <p className={styles.heroDescription}>
            Bespoke power systems converge from 3D CAD concepts into sparks of light for hospitals,
            industries and infrastructure across South Africa.
          </p>
          <Link href="/contact" className={styles.luxuryButton}>
            Begin Your Project
          </Link>
        </div>
      </section>
    </div>
  )
}