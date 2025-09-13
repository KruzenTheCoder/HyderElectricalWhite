'use client'

import styles from '@/styles/components.module.css'
import { LightningIcon, ServerIcon, ShieldIcon, HomeIcon, SolarIcon, ToolIcon } from '@/components/Icons'

const services = [
  {
    icon: <LightningIcon />,
    title: 'High Voltage Systems',
    description: 'Specialized installation and maintenance of high voltage distribution systems up to 132 kV, including main substations and switch yards with PLC control systems.'
  },
  {
    icon: <ServerIcon />,
    title: 'Commercial Excellence',
    description: 'Complete electrical solutions for retail stores, office buildings, medical centers, and commercial complexes with focus on efficiency and safety compliance.'
  },
  {
    icon: <ShieldIcon />,
    title: 'Industrial Power',
    description: 'Comprehensive electrical installations for manufacturing plants, warehouses, and industrial facilities with emphasis on reliability and performance.'
  },
  {
    icon: <HomeIcon />,
    title: 'Township Development',
    description: 'Community-focused electrical reticulation, street lighting, and infrastructure development bringing power to underserved areas.'
  },
  {
    icon: <SolarIcon />,
    title: 'Solar Solutions',
    description: 'Accredited solar power system design and installation for sustainable energy solutions, reducing carbon footprint and operational costs.'
  },
  {
    icon: <ToolIcon />,
    title: 'Maintenance & Support',
    description: '24/7 electrical maintenance, emergency repairs, and comprehensive support services ensuring continuous operation of critical systems.'
  }
]

export default function Services() {
  return (
    <div className={styles.page}>
      <section className={styles.servicesSection}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionSubtitle}>What We Do</div>
          <h2 className={styles.sectionTitle}>Engineering Solutions</h2>
          <div className={styles.sectionDivider}></div>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>{service.icon}</div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}