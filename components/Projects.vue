<template>
  <section id="projects" class="projects">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">My Projects</h2>
        <p class="section-subtitle">Some of my recent work</p>
      </div>

      <!-- Filter Tabs -->

      <div class="project-filters">
        <button 
          v-for="filter in filters"
          :key="filter"
          class="filter-btn"
          :class="{ active: activeFilter === filter }"
          @click="activeFilter = filter"
        >
          {{ filter }}
        </button>
      </div>

      <!-- Projects Grid -->

      <div class="projects-grid">
        <div 
          v-for="(project, index) in filteredProjects" 
          :key="index"
          class="project-card card scale-in"
          :class="'stagger-' + (index % 6 + 1)"
        >
          <div class="project-image">
            <img :src="project.image" :alt="project.title">
            <div class="project-overlay">
              <div class="project-links">
                <a 
                  v-if="project.github" 
                  :href="project.github" 
                  target="_blank" 
                  class="project-link"
                  title="View Code"
                >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a 
                  v-if="project.demo" 
                  :href="project.demo" 
                  target="_blank" 
                  class="project-link"
                  title="Live Demo"
                >
                  <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div class="project-content">
            <div class="project-header">
              <h3 class="project-title">{{ project.title }}</h3>
              <span class="project-year">{{ project.year }}</span>
            </div>
            
            <p class="project-description">{{ project.description }}</p>
            
            <div class="project-tech">
              <span 
                v-for="tech in project.technologies" 
                :key="tech"
                class="tech-tag"
              >
                {{ tech }}
              </span>
            </div>

            <div v-if="project.stats" class="project-stats">
              <div class="stat">
                <span class="stat-icon">⭐</span>
                <span class="stat-value">{{ project.stats.stars }}</span>
              </div>
              <div class="stat">
                <span class="stat-icon">🔀</span>
                <span class="stat-value">{{ project.stats.forks }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- View More Button -->

      <div class="view-more">
        <a href="https://github.com/LorisMischler" target="_blank" class="btn btn-outline">
          View All Projects on GitHub
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

// Import des images de projets

import jobtrackerImg from '~/assets/images/projects/jobtracker.png'
import AsterixImg from '~/assets/images/projects/asterix.png'
import DigitalImg from '~/assets/images/projects/digital.png'
import portfolioImg from '~/assets/images/projects/portfolio.png'

const filters = ['All', 'Web', 'Game', 'System',]
const activeFilter = ref('All')

const projects = [
  {
    title: 'Job Tracker Website',
    description: 'Job application tracking platform with user authentication, status management, searchable entries, and organized workflow monitoring.',
    image: jobtrackerImg,
    github: 'https://github.com/EpitechMscProPromo2028/T-WEB-501-STG_10',
    demo: '', // ici je peux mettre un lien en demo si j'en ai un
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Stripe'],
    category: 'Web',
    year: '2025',
    stats: {
      stars: 45,
      forks: 12
    }
  },
 
  {
    title: 'Digital Resume',
    description: 'A clean and classic html / css digital resume.',
    image: DigitalImg,
    github: 'https://github.com/EpitechMscProPromo2028/T-WEB-500-digitalResume-STG_loris-mischler',
    demo: null,
    technologies: ['HTML', 'CSS'],
    category: 'Web',
    year: '2025',
    stats: {
      stars: 0,
      forks: 0
    }
  },
  {
    title: 'Portofolio (This page itself)',
    description: 'Personal portfolio website built with Nuxt 3 to showcase projects and skills with a modern design.',
    image: portfolioImg,
    github: 'https://github.com/EpitechMscProPromo2028/T-ENT-500-STG_loris-mischler',
    demo: '', // mettre le lien vers le site
    technologies: ['Nuxt.js', 'Vue 3', 'CSS Animations'],
    category: 'Web',
    year: '2025',
    stats: {
      stars: 0,
      forks: 0
    }
  },

  {
   title: 'Astérix 2D Game',
   description: '2D platformer game featuring Astérix with enemies, collectibles, and interactive elements.',
   image: AsterixImg,
   github: 'https://github.com/EpitechMscProPromo2028/T-JAV-501-STG_20',
   demo: '',
   technologies: ['Java', 'JavaFX'],
   category: 'Game',
   year: '2025',
   stats: {
     stars: 0,
     forks: 0
    }
  },
  
]

const filteredProjects = computed(() => {
  if (activeFilter.value === 'All') {
    return projects
  }
  return projects.filter(p => p.category === activeFilter.value)
})
</script>

<style scoped>
.projects {
  background: var(--bg-darker);
}

/* Filters */
.project-filters {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 0.75rem 1.5rem;
  background: var(--bg-light);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 8px;
  color: var(--text-secondary);
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition-fast);
}

.filter-btn:hover {
  color: var(--primary-light);
  border-color: var(--primary);
}

.filter-btn.active {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  border-color: transparent;
}

/* Projects Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

/* Project Card */
.project-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 0;
  transition: var(--transition-normal);
}

.project-card:hover {
  transform: translateY(-10px);
}

/* Project Image */
.project-image {
  position: relative;
  width: 100%;
  height: 220px;
  overflow: hidden;
  background: var(--bg-darker);
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--transition-slow);
}

.project-card:hover .project-image img {
  transform: scale(1.1);
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(15, 23, 42, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: var(--transition-normal);
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-link {
  width: 45px;
  height: 45px;
  background: var(--primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: var(--transition-fast);
}

.project-link:hover {
  background: var(--accent);
  transform: scale(1.1);
}

/* Project Content */
.project-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: start;
}

.project-title {
  font-size: 1.3rem;
  color: var(--text-primary);
}

.project-year {
  background: rgba(99, 102, 241, 0.2);
  color: var(--primary-light);
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 600;
}

.project-description {
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 0.95rem;
}

/* Technologies */
.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background: rgba(6, 182, 212, 0.1);
  color: var(--accent-light);
  padding: 0.35rem 0.7rem;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(6, 182, 212, 0.2);
}

/* Project Stats */
.project-stats {
  display: flex;
  gap: 1.5rem;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid rgba(99, 102, 241, 0.1);
}

.stat {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.stat-icon {
  font-size: 1rem;
}

.stat-value {
  font-weight: 600;
  color: var(--text-primary);
}

/* View More */
.view-more {
  text-align: center;
  margin-top: 2rem;
}

/* Responsive */
@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }

  .project-filters {
    gap: 0.5rem;
  }

  .filter-btn {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
}
</style>