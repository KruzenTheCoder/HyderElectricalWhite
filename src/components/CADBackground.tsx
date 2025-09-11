'use client'

import { useEffect } from 'react'
import styles from '@/styles/components.module.css'

export default function CADBackground() {
  useEffect(() => {
    // Add floating particles
    const container = document.querySelector(`.${styles.circuitLines}`)
    if (!container) return

    for (let i = 0; i < 5; i++) {
      const dot = document.createElement('div')
      dot.className = styles.particle
      dot.style.left = `${Math.random() * 100}%`
      dot.style.top = `${Math.random() * 100}%`
      dot.style.animationDelay = `${Math.random() * 5}s`
      container.appendChild(dot)
    }
  }, [])

  return (
    <div className={styles.cadBackground}>
      <div className={`${styles.gridLayer} ${styles.layer1}`}></div>
      <div className={`${styles.gridLayer} ${styles.layer2}`}></div>
      <div className={styles.circuitLines}>
        <svg width="100%" height="100%" style={{ position: 'absolute' }}>
          <path className={styles.circuitPath} d="M0,100 L200,100 L250,50 L400,50" />
          <path className={styles.circuitPath} d="M100,0 L100,200 L150,250 L150,400" />
          <path className={styles.circuitPath} d="M300,0 L300,150 L350,200 L500,200" />
          <circle className={styles.circuitPath} cx="200" cy="100" r="5" fill="#D4AF37" opacity="0.3"/>
          <circle className={styles.circuitPath} cx="250" cy="50" r="5" fill="#D4AF37" opacity="0.3"/>
          <circle className={styles.circuitPath} cx="100" cy="200" r="5" fill="#D4AF37" opacity="0.3"/>
        </svg>
        <div className={styles.scaffoldLine}></div>
        <div className={styles.scaffoldLine}></div>
        <div className={styles.scaffoldLine}></div>
      </div>
    </div>
  )
}