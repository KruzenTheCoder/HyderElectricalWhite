'use client'

import { useState, FormEvent } from 'react'
import styles from '@/styles/components.module.css'
import { LocationIcon, PhoneIcon, EmailIcon, ClockIcon } from '@/components/Icons'

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormSubmitted(true)
    const form = e.currentTarget
    form.reset()
    setTimeout(() => setFormSubmitted(false), 3000)
  }

  return (
    <div className={styles.page}>
      <section className={styles.contactSection}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionSubtitle}>Get In Touch</div>
          <h2 className={styles.sectionTitle}>Start Your Project</h2>
          <div className={styles.sectionDivider}></div>
        </div>

        <div className={styles.contactGrid}>
          <div className={styles.contactInfo}>
            <h3>Connect With Excellence</h3>
            
            <div className={styles.contactItem}>
              <LocationIcon />
              <div className={styles.contactDetails}>
                <h4>Locations</h4>
                <p>Gauteng, KwaZulu-Natal & Cape Town</p>
              </div>
            </div>

            <div className={styles.contactItem}>
              <PhoneIcon />
              <div className={styles.contactDetails}>
                <h4>Direct Line</h4>
                <p>082 780 5434</p>
              </div>
            </div>

            <div className={styles.contactItem}>
              <EmailIcon />
              <div className={styles.contactDetails}>
                <h4>Email</h4>
                <p>info@hyderelectrical.co.za</p>
              </div>
            </div>

            <div className={styles.contactItem}>
              <ClockIcon />
              <div className={styles.contactDetails}>
                <h4>Emergency Service</h4>
                <p>24/7 Available</p>
              </div>
            </div>
          </div>

          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <input type="text" className={styles.formInput} placeholder=" " required />
              <label className={styles.formLabel}>Full Name</label>
            </div>

            <div className={styles.formGroup}>
              <input type="email" className={styles.formInput} placeholder=" " required />
              <label className={styles.formLabel}>Email Address</label>
            </div>

            <div className={styles.formGroup}>
              <input type="tel" className={styles.formInput} placeholder=" " required />
              <label className={styles.formLabel}>Phone Number</label>
            </div>

            <div className={styles.formGroup}>
              <input type="text" className={styles.formInput} placeholder=" " />
              <label className={styles.formLabel}>Project Type</label>
            </div>

            <div className={styles.formGroup}>
              <textarea className={`${styles.formInput} ${styles.formTextarea}`} placeholder=" " required></textarea>
              <label className={styles.formLabel}>Project Details</label>
            </div>

            <button type="submit" className={`${styles.luxuryButton} ${formSubmitted ? styles.submitted : ''}`}>
              {formSubmitted ? 'Thank You' : 'Submit Inquiry'}
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}