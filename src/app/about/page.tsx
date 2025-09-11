'use client'

import styles from '@/styles/components.module.css'

export default function About() {
  return (
    <div className={styles.page}>
      <section className={styles.aboutSection}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionSubtitle}>Our Story</div>
          <h2 className={styles.sectionTitle}>Engineering Excellence Since 1985</h2>
          <div className={styles.sectionDivider}></div>
        </div>

        <div className={styles.aboutGrid}>
          <div className={styles.aboutContent}>
            <h3>Empowering South Africa&apos;s Infrastructure</h3>
            <p>
              Hyder Electrical PTY LTD stands as a beacon of excellence in the electrical engineering industry. 
              As a 100% Black Female-Owned enterprise, we bring a unique perspective to every project, 
              combining technical expertise with a deep understanding of community needs.
            </p>
            <p>
              Our legacy spans from the transformation of Femto Electrical, established in 1985, 
              into the powerhouse that is Hyder Electrical today. We&apos;ve illuminated hospitals, 
              powered industrial complexes, and brought light to communities across South Africa.
            </p>
            <p>
              With expertise in high and low voltage systems up to 132KVA, we don&apos;t just install electrical systems – 
              we engineer solutions that power progress and drive development.
            </p>
          </div>
          <div className={styles.aboutStats}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>33+</div>
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