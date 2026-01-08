<template>
  <section id="education" class="education">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Education</h2>
        <p class="section-subtitle">My academic journey</p>
      </div>

      <div class="timeline">
        <div 
          v-for="(item, index) in education" 
          :key="index" 
          class="timeline-item fade-in-up"
          :class="'stagger-' + (index + 1)"
        >
          <div class="timeline-marker">
            <div class="timeline-dot"></div>
          </div>
          
          <div class="timeline-content card">
            <div class="timeline-header">
              <div class="institution-logo">
                <img :src="item.logo" :alt="item.institution" @error="handleImageError">
              </div>
              <div class="timeline-date">{{ item.period }}</div>
            </div>
            
            <h3 class="timeline-title">{{ item.degree }}</h3>
            <h4 class="timeline-institution">{{ item.institution }}</h4>
            <p class="timeline-description">{{ item.description }}</p>
            
            <div v-if="item.achievements && item.achievements.length > 0" class="achievements">
              <h5>Key Achievements:</h5>
              <ul>
                <li v-for="achievement in item.achievements" :key="achievement">
                  <span class="achievement-icon">✓</span>
                  {{ achievement }}
                </li>
              </ul>
            </div>

            <div v-if="item.courses && item.courses.length > 0" class="courses">
              <div class="course-tag" v-for="course in item.courses" :key="course">
                {{ course }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Certifications -->
      
    </div>
  </section>
</template>

<script setup>
// Import des logos depuis assets

import epitechLogo from '~/assets/images/epitech-logo.png'
import highschoolLogo from '~/assets/images/highschool-logo.png'
import TSI from '~/assets/images/TSI.png'

const handleImageError = (e) => {
  console.log('Image failed to load:', e.target.src)
  e.target.style.display = 'none'
}

const education = [
  {
    degree: 'Master of Science in Computer Science',
    institution: 'Epitech - European Institute of Technology',
    period: '2025 - Present',
    description: 'AI , Big Data analytics, Dev Web and mathematical modeling.',
    logo: epitechLogo,
    
    courses: ['Algorithms', 'Web Development', 'System Programming', 'Database Design', 'DevOps', 'AI & ML']
  },
  {
    degree: 'Mathematics License',
    institution: 'University of Strasbourg',
    period: '2023- 2025',
    description: 'Focused on Mathematics, and Computer Science. Developed strong analytical and problem-solving skills.',
    logo: highschoolLogo,
    
    
    courses: ['Advanced Math', 'Computer Science', 'English']
  },

  {
    degree: 'TSI Preparatory Class',
    institution: 'Lycée Heinrich-Nessel, Haguenau',
    period: '2020- 2023',
    description: 'Three years intensive preparatory program in Technology and Industrial Sciences, focusing on Mathematics, Physics, and Engineering Sciences .',
    logo: TSI,
    
    
    courses: ['Advanced Math', 'Advanced Physics', 'Industrial Sciences','Computer Science', 'English']
  }
    ]


</script>

<style scoped>
.education {
  background: var(--bg-darker);
}

/* Timeline */

.timeline {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 0;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, var(--primary), var(--secondary));
  transform: translateX(-50%);
}

.timeline-item {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
  position: relative;
}

.timeline-item:nth-child(even) .timeline-content {
  grid-column: 1;
  grid-row: 1;
}

.timeline-item:nth-child(even) .timeline-marker {
  grid-column: 2;
}

.timeline-item:nth-child(odd) .timeline-content {
  grid-column: 3;
}

.timeline-marker {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

.timeline-dot {
  width: 20px;
  height: 20px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border-radius: 50%;
  border: 4px solid var(--bg-darker);
  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.2);
  position: relative;
}

.timeline-dot::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background: inherit;
  border-radius: 50%;
  animation: pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
}

@keyframes pulse-ring {
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(2.5);
    opacity: 0;
  }
}

/* Timeline Content */
.timeline-content {
  position: relative;
}

.timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.institution-logo {
  width: 50px;
  height: 50px;
  border-radius: 8px;
  overflow: hidden;
  background: white;
  padding: 5px;
}

.institution-logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.timeline-date {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
}

.timeline-title {
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.timeline-institution {
  color: var(--primary-light);
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.timeline-description {
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

/* Achievements */
.achievements {
  margin-top: 1.5rem;
}

.achievements h5 {
  color: var(--text-primary);
  margin-bottom: 0.75rem;
  font-size: 1rem;
}

.achievements ul {
  list-style: none;
  display: grid;
  gap: 0.5rem;
}

.achievements li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--text-secondary);
}

.achievement-icon {
  background: var(--primary);
  color: white;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  flex-shrink: 0;
}

/* Courses */
.courses {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1.5rem;
}

.course-tag {
  background: rgba(99, 102, 241, 0.1);
  color: var(--primary-light);
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  font-size: 0.85rem;
  border: 1px solid rgba(99, 102, 241, 0.2);
  transition: var(--transition-fast);
}

.course-tag:hover {
  background: rgba(99, 102, 241, 0.2);
  border-color: var(--primary);
}

/* Certifications */
.certifications {
  margin-top: 5rem;
  text-align: center;
}

.certifications-title {
  font-size: 2rem;
  margin-bottom: 3rem;
  color: var(--text-primary);
}

.cert-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.cert-card {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.cert-icon {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

.cert-card h4 {
  color: var(--text-primary);
  font-size: 1.2rem;
}

.cert-issuer {
  color: var(--text-secondary);
  font-size: 0.95rem;
}

.cert-date {
  color: var(--text-muted);
  font-size: 0.85rem;
}

.cert-link {
  color: var(--primary-light);
  font-weight: 600;
  margin-top: 0.5rem;
  transition: var(--transition-fast);
}

.cert-link:hover {
  color: var(--accent-light);
}

/* Responsive */
@media (max-width: 968px) {
  .timeline::before {
    left: 30px;
  }

  .timeline-item {
    grid-template-columns: auto 1fr;
    gap: 1.5rem;
  }

  .timeline-item:nth-child(even) .timeline-content,
  .timeline-item:nth-child(odd) .timeline-content {
    grid-column: 2;
  }

  .timeline-marker {
    grid-column: 1;
  }
}

@media (max-width: 480px) {
  .timeline-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .cert-grid {
    grid-template-columns: 1fr;
  }
}
</style>