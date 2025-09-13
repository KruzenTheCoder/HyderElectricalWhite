'use client'

import styles from '@/styles/components.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroSubtitle}>Turnkey Electrical Engineering</div>
          <h1 className={styles.heroTitle}>Bringing Power Out of the Dark</h1>
          <p className={styles.heroDescription}>
            From CAD precision to electrified reality, our end-to-end solutions light the path for
            hospitals, industries, and infrastructure across South Africa.
          </p>
          <Link href="/contact" className={styles.luxuryButton}>
            Begin Your Project
          </Link>
        </div>
      </section>
    </div>
  )
}