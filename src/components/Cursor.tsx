'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import styles from '@/styles/components.module.css'

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <motion.div
      className={styles.cursor}
      animate={{ x: pos.x - 12, y: pos.y - 12 }}
      transition={{ type: 'spring', stiffness: 500, damping: 40 }}
    />
  )
}
