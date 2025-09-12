// src/components/Loader.tsx

'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from '@/styles/components.module.css'

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // Match this with the fade duration

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`${styles.loaderContainer} ${isLoading ? '' : styles['fade-out']}`}>
      <div className={styles.loaderLogo}>
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
    </div>
  )
}