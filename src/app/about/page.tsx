'use client'

import styles from '@/styles/components.module.css'

export default function About() {
  return (
    <div className={styles.page}>
      <section className={styles.aboutSection}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionSubtitle}>Our Story</div>
          <h2 className={styles.sectionTitle}>40 Years of Engineering Excellence</h2>
          <div className={styles.sectionDivider}></div>
        </div>

        <div className={styles.aboutGrid}>
          <div className={styles.aboutContent}>
            <h3>Empowering South Africa&apos;s Infrastructure</h3>
            <p>
              Established in 1985, Hyder Electrical (Pty) Ltd is a Level 1 B-BBEE, 100% Black Female-Owned contractor delivering safe,
              on-time electrical works for public and private sector clients nationwide. 40 years of powering South Africa.
            </p>
            <p>
              We&apos;ve illuminated hospitals, powered industrial complexes, and brought light to communities across South Africa.
            </p>
            <p>
              With expertise in high and low voltage systems up to 132 kV, we don&apos;t just install electrical systems –
              we engineer solutions that power progress and drive development.
            </p>
          </div>
          <div className={styles.aboutStats}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>40</div>
              <div className={styles.statLabel}>Years of Excellence</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>R45M+</div>
              <div className={styles.statLabel}>Project Value</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>Black Female Owned</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>50+</div>
              <div className={styles.statLabel}>Major Projects</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}