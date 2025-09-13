// src/components/Loader.tsx

'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import styles from '@/styles/components.module.css'

export default function Loader() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2600)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className={styles.loaderContainer}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, transition: { duration: 1.4, delay: 1.2 } }}
          exit={{ opacity: 0 }}
        >
          <div className={styles.loaderLogo}>
            <span className={styles.lightSweep} />
            <div className={styles.circleOuter}></div>
            <div className={styles.circleInner}></div>
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
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}