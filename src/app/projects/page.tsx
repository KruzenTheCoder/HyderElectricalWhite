'use client'

import { useState } from 'react'
import styles from '@/styles/components.module.css'

const projects = [
   
  {
    "category": "commercial",
    "name": "Various Edcon Stores",
    "value": "R 4,268,754.80",
    "status": "Legacy Project"
  },
  {
    "category": "government",
    "name": "Randburg Magistrates Court Cafeteria",
    "value": "R 741,532.52",
    "status": "Legacy Project"
  },
  {
    "category": "commercial",
    "name": "Esquires Technologies Head Office",
    "value": "R 967,978.78",
    "status": "Legacy Project"
  },
  {
    "category": "commercial",
    "name": "Noordhuewel Friendly Grocer",
    "value": "R 1,479,654.81",
    "status": "Legacy Project"
  },
  {
    "category": "specialized",
    "name": "Roodeplaat Dog School",
    "value": "R 2,505,318.90",
    "status": "Legacy Project"
  },
  {
    "category": "scientific",
    "name": "CSIR Building 10 - Laboratory",
    "value": "R 1,655,243.32",
    "status": "Legacy Project"
  },
  {
    "category": "industrial",
    "name": "CSIR Building 30 - Passport Factory",
    "value": "R 1,952,378.92",
    "status": "Legacy Project"
  },
  {
    "category": "government",
    "name": "Belle Ombre Police Station",
    "value": "R 2,012,199.31",
    "status": "Legacy Project"
  },
  {
    "category": "government",
    "name": "Saulsville Police Station",
    "value": "R 1,756,608.87",
    "status": "Legacy Project"
  },
  {
    "category": "recreational",
    "name": "Aurthur Ashe Tennis Academy",
    "value": "R 261,975.09",
    "status": "Legacy Project"
  },
  {
    "category": "medical",
    "name": "Tshwane District Hospital",
    "value": "R 17,359,023.30",
    "status": "Operating Theatres"
  },
  {
    "category": "commercial",
    "name": "Imperial VW Vereeniging Dealership",
    "value": "R 324,215.00",
    "status": "Legacy Project"
  },
  {
    "category": "education",
    "name": "Dr Macken Mistry Primary School",
    "value": "R 70,852.88",
    "status": "Completed 2022"
  },
  {
    "category": "education",
    "name": "Rydalvale Primary School",
    "value": "R 134,546.96",
    "status": "Completed 2022"
  },
  {
    "category": "education",
    "name": "Mowat Park Primary School",
    "value": "R 58,094.97",
    "status": "Completed 2022"
  },
  {
    "category": "education",
    "name": "Brettonwood High School",
    "value": "R 90,181.66",
    "status": "Completed 2022"
  },
  {
    "category": "education",
    "name": "Tyburn Primary School",
    "value": "R 214,850.07",
    "status": "Completed 2023"
  },
  {
    "category": "education",
    "name": "Port Natal High School",
    "value": "R 648,024.56",
    "status": "Flood Recovery"
  },
  {
    "category": "industrial",
    "name": "Northcoast Road Industrial Park",
    "value": "R 1,408,136.10",
    "status": "Completed 2023"
  },
  {
    "category": "education",
    "name": "Phoenix Pioneer Primary School",
    "value": "R 289,866.07",
    "status": "Completed 2023"
  },
  {
    "category": "commercial",
    "name": "Maphumulo Mall",
    "value": "R 3,504,257.12",
    "status": "Completed 2023"
  },
  {
    "category": "industrial",
    "name": "Take 'n Pay Distribution Warehouse",
    "value": "R 2,152,395.15",
    "status": "Completed 2024"
  },
  {
    "category": "commercial",
    "name": "Take 'n Pay Food Town Retail",
    "value": "R 5,393,182.74",
    "status": "Completed 2024"
  },
  {
    "category": "commercial",
    "name": "Take 'n Pay Head Office",
    "value": "R 1,097,100.00",
    "status": "In Progress"
  },
  {
    "category": "medical",
    "name": "InterCare Medical Centre",
    "value": "R 1,298,000.00",
    "status": "In Progress"
  },
  {
    "category": "industrial",
    "name": "Dulux Paint Manufacturing Plant",
    "value": "R 250,900.00",
    "status": "In Progress"
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