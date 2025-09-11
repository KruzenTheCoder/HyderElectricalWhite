'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import styles from '@/styles/components.module.css'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/team', label: 'Team' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logoContainer}>
          <div className={styles.logoIcon}>
           <Image 
            src="/logo.png" 
            alt="Hyder Electrical Logo" 
            width={40}
            height={40}
            priority
            style={{ width: 'auto', height: '100%' }}
            />
          </div>
          <div className={styles.logoText}>HYDER ELECTRICAL</div>
        </Link>

        <ul className={`${styles.navMenu} ${mobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`${styles.navLink} ${pathname === item.href ? styles.active : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div 
          className={styles.mobileMenuBtn}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}