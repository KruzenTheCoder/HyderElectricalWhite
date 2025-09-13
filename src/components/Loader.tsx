'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import styles from '@/styles/components.module.css'

export default function Loader() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 4000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className={styles.loaderContainer}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, transition: { duration: 1, delay: 3 } }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={styles.loaderLogo}
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.1, 0.8], transition: { duration: 2.5 } }}
          >
            <span className={styles.lightSweep} />
            <div className={styles.circleOuter}></div>
            <div className={styles.circleInner}></div>
            <motion.svg
              className={styles.circuitBoard}
              viewBox="0 0 200 200"
            >
              <motion.path
                d="M10 150h60v-40h40v-40h80"
                stroke="var(--copper)"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: 'easeInOut' }}
              />
              <motion.circle
                cx="10"
                cy="150"
                r="3"
                fill="var(--gold)"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
              />
              <motion.circle
                cx="70"
                cy="110"
                r="3"
                fill="var(--gold)"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
              />
              <motion.circle
                cx="110"
                cy="70"
                r="3"
                fill="var(--gold)"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
              />
              <motion.circle
                cx="190"
                cy="70"
                r="3"
                fill="var(--gold)"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 }}
              />
            </motion.svg>
            <div className={styles.loaderIconImage}>
              <Image
                src="/logo.png"
                alt="Hyder Electrical Logo"
                width={120}
                height={130}
                priority
                style={{ width: 'auto', height: '100%' }}
              />
            </div>
            <div className={styles.loaderText}>Hyder Electrical</div>
            <div className={styles.loaderTagline}>Engineering Power Out of the Dark</div>
          </motion.div>
          <motion.div
            className={styles.loaderFlash}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.5, 2], opacity: [0, 1, 0] }}
            transition={{ delay: 2.5, duration: 0.5 }}
          />
          {['topLeft','topRight','bottomLeft','bottomRight'].map(pos => (
            <motion.svg
              key={pos}
              className={`${styles.cornerCircuit} ${styles[pos]}`}
              viewBox="0 0 80 80"
            >
              <motion.path
                d="M0 60h40v-40h40"
                stroke="var(--copper)"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, ease: 'easeInOut' }}
              />
            </motion.svg>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
