import styles from '@/styles/components.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLogo}>HYDER ELECTRICAL</div>
      <div className={styles.footerTagline}>Taking You Out of the Dark</div>
      <div className={styles.footerInfo}>
        <div className={styles.footerInfoItem}>100% Black Female Owned</div>
        <div className={styles.footerInfoItem}>Level 1 B-BBEE</div>
        <div className={styles.footerInfoItem}>40 Years Excellence</div>
      </div>
      <div className={styles.copyright}>© 2025 Hyder Electrical PTY LTD. All Rights Reserved.</div>
    </footer>
  )
}