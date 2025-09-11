'use client'

import { useState } from 'react'
import styles from '@/styles/components.module.css'

const projects = [
  {
    category: 'commercial',
    name: "Take 'n Pay Food Town Retail",
    value: 'R 5,393,182',
    status: 'Completed 2024'
  },
  {
    category: 'medical',
    name: 'Tshwane District Hospital',
    value: 'R 17,359,023',
    status: 'Operating Theatres'
  },
  {
    category: 'commercial',
    name: 'Maphumulo Mall',
    value: 'R 3,504,257',
    status: 'Completed 2023'
  },
  {
    category: 'industrial',
    name: 'Distribution Warehouse',
    value: 'R 2,152,395',
    status: 'Completed 2024'
  },
  {
    category: 'education',
    name: 'Port Natal High School',
    value: 'R 648,024',
    status: 'Flood Recovery'
  },
  {
    category: 'medical',
    name: 'InterCare Medical Centre',
    value: 'R 1,298,000',
    status: 'In Progress'
  }
]

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter)

  return (
    <div className={styles.page}>
      <section className={styles.projectsSection}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionSubtitle}>Portfolio</div>
          <h2 className={styles.sectionTitle}>Landmark Projects</h2>
          <div className={styles.sectionDivider}></div>
        </div>

        <div className={styles.projectFilters}>
          <button 
            className={`${styles.filterBtn} ${filter === 'all' ? styles.active : ''}`}
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={`${styles.filterBtn} ${filter === 'commercial' ? styles.active : ''}`}
            onClick={() => setFilter('commercial')}
          >
            Commercial
          </button>
          <button 
            className={`${styles.filterBtn} ${filter === 'education' ? styles.active : ''}`}
            onClick={() => setFilter('education')}
          >
            Education
          </button>
          <button 
            className={`${styles.filterBtn} ${filter === 'industrial' ? styles.active : ''}`}
            onClick={() => setFilter('industrial')}
          >
            Industrial
          </button>
          <button 
            className={`${styles.filterBtn} ${filter === 'medical' ? styles.active : ''}`}
            onClick={() => setFilter('medical')}
          >
            Medical
          </button>
        </div>

        <div className={styles.projectsShowcase}>
          {filteredProjects.map((project, index) => (
            <div key={index} className={styles.projectItem}>
              <div className={styles.projectDetails}>
                <div className={styles.projectCategory}>{project.category}</div>
                <div className={styles.projectName}>{project.name}</div>
                <div className={styles.projectValue}>{project.value}</div>
                <span className={styles.projectStatus}>{project.status}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}