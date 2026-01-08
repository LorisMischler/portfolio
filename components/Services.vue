<template>
  <section id="services" class="services">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Services</h2>
        <p class="section-subtitle">What I can do for you</p>
      </div>

      <div class="services-grid">
        <div 
          v-for="(service, index) in services" 
          :key="index"
          class="service-card card fade-in-up"
          :class="'stagger-' + (index + 1)"
        >
          <div class="service-icon">
            {{ service.icon }}
          </div>
          <h3 class="service-title">{{ service.title }}</h3>
          <p class="service-description">{{ service.description }}</p>
          
          <ul class="service-features">
            <li v-for="feature in service.features" :key="feature">
              <span class="feature-check">✓</span>
              {{ feature }}
            </li>
          </ul>

          <div class="service-tech">
            <span 
              v-for="tech in service.technologies" 
              :key="tech"
              class="tech-badge"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="services-cta">
        <div class="cta-content">
          <h3>Ready to Start a Project?</h3>
          <p>Let's work together to bring your ideas to life</p>
          <a href="#contact" class="btn btn-primary">
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    icon: '💻',
    title: 'Web Development',
    description: 'Building modern, responsive, and performant websites with the latest technologies and best practices.',
    features: [
      'Responsive Design',
      'Optimization',
      'Performance Tuning',
      'Cross-browser Compatible'
    ],
    technologies: ['Vue.js', 'Nuxt.js', 'Axios', 'TypeScript']
  },
  {
    icon: '⚙️',
    title: 'Backend Development',
    description: 'Building reliable and scalable back‑end systems with clean architecture, well‑structured APIs, and solid database management.',
    features: [
      'Database Design',
      'Authentication & Security',
      
    ],
    technologies: ['Node.js', 'Docker', 'MySql', 'Drizzle']
  },
    
  {
    icon: '🚀',
    title: 'Optimization & Performance',
    description: 'Enhancing existing systems for better speed, efficiency, and scalability through code optimization and system tuning.',
    features: [
      'Algorithm Optimization',
      'Performance Analysis'
    ],
    technologies: ['Python', 'VBA', 'Linux']
  },
 ]
</script>

<style scoped>
.services {
  background: var(--bg-dark);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

/* Service Card */
.service-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.service-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, var(--primary), var(--accent));
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.service-card:hover::after {
  transform: scaleX(1);
}

.service-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  filter: grayscale(0.3);
  transition: var(--transition-normal);
}

.service-card:hover .service-icon {
  filter: grayscale(0);
  transform: scale(1.1);
}

.service-title {
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.service-description {
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 1rem;
}

/* Service Features */
.service-features {
  list-style: none;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.service-features li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--text-secondary);
  font-size: 0.95rem;
}

.feature-check {
  background: var(--primary);
  color: white;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: bold;
  flex-shrink: 0;
}

/* Technologies */
.service-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin-top: auto;
}

.tech-badge {
  background: rgba(99, 102, 241, 0.1);
  color: var(--primary-light);
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid rgba(99, 102, 241, 0.2);
  transition: var(--transition-fast);
}

.tech-badge:hover {
  background: rgba(99, 102, 241, 0.2);
  border-color: var(--primary);
  transform: translateY(-2px);
}

/* CTA Section */
.services-cta {
  margin-top: 5rem;
  text-align: center;
}

.cta-content {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1));
  border: 2px solid rgba(99, 102, 241, 0.2);
  border-radius: 20px;
  padding: 3rem 2rem;
  max-width: 600px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}

.cta-content::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.1), transparent 50%);
  animation: rotate 15s linear infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.cta-content h3 {
  font-size: 2rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
}

.cta-content p {
  color: var(--text-secondary);
  font-size: 1.1rem;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
}

.cta-content .btn {
  position: relative;
  z-index: 1;
}

/* Responsive */
@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
  }

  .cta-content {
    padding: 2rem 1.5rem;
  }

  .cta-content h3 {
    font-size: 1.5rem;
  }
}
</style>