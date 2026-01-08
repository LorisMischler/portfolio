<template>
  <section id="about" class="about">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">About Me</h2>
        <p class="section-subtitle">Get to know me better</p>
      </div>

      <div class="about-content">
        <div class="about-image fade-in-left">         
          <div class="about-image-wrapper">
            <img src="/assets/images/about-me.png" alt="About Me" class="about-img">
            <div class="about-pattern"></div>
          </div>
        </div>

        <div class="about-text fade-in-right">
          <h3 class="about-subtitle">
            Crafting Digital Experiences with Code
          </h3>
          <p>
            I'm a passionate <strong>Computer Science student</strong> at <strong>Epitech</strong>, 
            driven by a deep fascination for <strong>mathematics</strong> and <strong>problem-solving</strong>. 
            My journey in tech is fueled by the perfect blend of analytical thinking and creative coding.
          </p>
          <p>
            While I enjoy <strong>full-stack development</strong>, my true passion lies in 
            <strong>Artificial Intelligence</strong> and <strong>Big Data analytics</strong>. 
            I love exploring the intersection of statistics, 
            mathematics and AI technologies.
          </p>
         

          <!-- Skills  -->
           
          <div class="skills-section">
            <h4>Technical Skills</h4>
            <div class="skills-grid">
              <div v-for="skill in skills" :key="skill.name" class="skill-item scale-in">
                <div class="skill-icon">{{ skill.icon }}</div>
                <div class="skill-info">
                  <span class="skill-name">{{ skill.name }}</span>
                  <div class="skill-bar">
                    <div 
                      class="skill-progress" 
                      :style="{ width: skill.level + '%' }"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Stats -->
           
          <div class="stats-grid">
            <div v-for="(stat, index) in stats" :key="stat.label" 
                 class="stat-card scale-in"
                 :class="'stagger-' + (index + 1)">
              <div class="stat-number">{{ stat.value }}</div>
              <div class="stat-label">{{ stat.label }}</div>
            </div>
          </div>

          <a href="/assets/cv/your-cv.pdf" download class="btn btn-primary">
            Download CV
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const skills = [
  { name: 'Python', icon: '🐍', level: 90 },
  { name: 'JavaScript/TypeScript', icon: '⚡', level: 85 },
  { name: 'Nuxt.js', icon: '💚', level: 80 },
  { name: 'Node.js', icon: '🟢', level: 80 },  
  { name: 'Git & GitHub', icon: '🔧', level: 90 },
  { name: 'Docker', icon: '🐳', level: 70 },
  { name: 'SQL / NoSQL', icon: '💾', level: 80 }
]

const stats = [
  { value: '3+', label: 'Years Coding' },
  { value: '4+', label: 'Projects Built' },
  { value: '300+', label: 'GitHub Commits' },
  { value: '5+', label: 'Technologies' }
]
</script>

<style scoped>
.about {
  background: var(--bg-dark);
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 4rem;
  align-items: start;
}

/* About Image */
.about-image {
  position: relative;
}

.about-image-wrapper {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
}

.about-img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 16px;
  box-shadow: var(--shadow-lg);
  transition: var(--transition-normal);
}

.about-img:hover {
  transform: scale(1.05);
}

.about-pattern {
  position: absolute;
  top: -20px;
  right: -20px;
  width: 200px;
  height: 200px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  opacity: 0.1;
  border-radius: 50%;
  z-index: -1;
}

/* About Text */
.about-text {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.about-subtitle {
  color: var(--primary-light);
  margin-bottom: 0.5rem;
}

.about-text p {
  line-height: 1.8;
}

.about-text strong {
  color: var(--accent-light);
  font-weight: 600;
}

/* Skills Section */
.skills-section {
  margin-top: 2rem;
}

.skills-section h4 {
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
}

.skills-grid {
  display: grid;
  gap: 1rem;
}

.skill-item {
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 0.75rem;
  background: rgba(99, 102, 241, 0.05);
  border-radius: 8px;
  border: 1px solid rgba(99, 102, 241, 0.1);
  transition: var(--transition-normal);
}

.skill-item:hover {
  background: rgba(99, 102, 241, 0.1);
  border-color: var(--primary);
  transform: translateX(5px);
}

.skill-icon {
  font-size: 1.5rem;
  min-width: 35px;
  text-align: center;
}

.skill-info {
  flex: 1;
}

.skill-name {
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.skill-bar {
  height: 6px;
  background: var(--bg-darker);
  border-radius: 10px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: linear-gradient(90deg, var(--primary), var(--accent));
  border-radius: 10px;
  transition: width 1s ease-out;
  animation: progressLoad 1.5s ease-out;
}

@keyframes progressLoad {
  from {
    width: 0;
  }
}

/* Stats Grid */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-top: 2rem;
}

.stat-card {
  text-align: center;
  padding: 1.5rem 1rem;
  background: var(--bg-light);
  border-radius: 12px;
  border: 1px solid rgba(99, 102, 241, 0.2);
  transition: var(--transition-normal);
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
  border-color: var(--primary);
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--primary-light), var(--accent-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.9rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Responsive */

@media (max-width: 968px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>