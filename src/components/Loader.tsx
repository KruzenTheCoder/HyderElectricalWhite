'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import styles from '@/styles/components.module.css'

export default function Loader() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 4400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className={styles.loaderContainer}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, transition: { duration: 1.4, delay: 3 } }}
          exit={{ opacity: 0 }}
        >
          <div className={styles.loaderLogo}>
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
                transition={{ duration: 2.2, ease: 'easeInOut' }}
              />
              <motion.circle
                cx="10"
                cy="150"
                r="3"
                fill="var(--gold)"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
              />
              <motion.circle
                cx="70"
                cy="110"
                r="3"
                fill="var(--gold)"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
              />
              <motion.circle
                cx="110"
                cy="70"
                r="3"
                fill="var(--gold)"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 }}
              />
              <motion.circle
                cx="190"
                cy="70"
                r="3"
                fill="var(--gold)"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6 }}
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
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
