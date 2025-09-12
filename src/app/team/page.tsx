'use client'

import styles from '@/styles/components.module.css'

const teamMembers = [
  {
    initials: 'RM',
    name: 'Razeena Majid',
    title: 'Human Resources Director',
    description: 'BCOM Human Resource Management professional integrating strategic HR initiatives with business excellence, ensuring organizational compliance and talent development.'
  },
  {
    initials: 'SO',
    name: 'Siphokuhle Osborne Nombela',
    title: 'Technical Engineer',
    description: 'Certified Trade Tested Electrician with 18+ years mastering township reticulations, substations up to 132KVA, and complex industrial installations.'
  },
  {
    initials: 'HK',
    name: 'Hassan Shamsheer Khan',
    title: 'Project Manager',
    description: '15 years of excellence in project management, design, and accredited solar installations. Leading safety compliance and innovative engineering solutions.'
  }
]

export default function Team() {
  return (
    <div className={styles.page}>
      <section className={styles.teamSection}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionSubtitle}>Leadership</div>
          <h2 className={styles.sectionTitle}>The Visionaries</h2>
          <div className={styles.sectionDivider}></div>
        </div>

        <div className={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <div key={index} className={styles.teamMember}>
              <div className={styles.memberImage}>{member.initials}</div>
              <h3 className={styles.memberName}>{member.name}</h3>
              <div className={styles.memberTitle}>{member.title}</div>
              <p className={styles.memberDescription}>{member.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}