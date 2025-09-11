'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from '@/styles/components.module.css'

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className={`${styles.loaderContainer} ${!isLoading ? styles.hidden : ''}`}>
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