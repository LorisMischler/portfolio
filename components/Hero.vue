  <template>
    <section id="home" class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text fade-in-left">
            <span class="hero-greeting">👋 Hi, I'm</span>
            <h1 class="hero-title">Mischler Loris</h1>
            <h2 class="hero-subtitle">
              <span class="typing-text">{{ displayText }}</span>
              <span class="cursor">|</span>
            </h2>
            <p class="hero-description">
              Computer Science student at Epitech with a solid mathematical foundation and a growing interest in AI and Big Data. 
             
            </p>
            
            <div class="hero-cta">
              <a href="#projects" class="btn btn-primary">
                View My Work
              </a>
              <a href="#contact" class="btn btn-outline">
                Get in Touch
              </a>
            </div>

            <div class="hero-socials">
              <a href="https://github.com/LorisMischler" target="_blank" class="social-link" title="GitHub">
                
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/loris-mischler-8b113525b/" target="_blank" class="social-link" title="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="mailto:mischler.loris@gmail.com" class="social-link" title="Email">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
          </div>

          <div class="hero-image fade-in-right">
            
            <!-- IMAGED PROFIL-->
            <div class="image-container">
              <div class="image-glow"></div>
              <img src="/assets/images/profile.png" alt="Your Name" class="profile-image">
              
            </div>
          </div>
        </div>

        <!-- Scroll indicator -->

        <div class="scroll-indicator">
          <div class="mouse">
            <div class="wheel"></div>
          </div>
          <p>Scroll Down</p>
        </div>
      </div>

      <!-- Floating shapes animation -->

      <div class="floating-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
      </div>
    </section>
  </template>

  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue'

  const typingTexts = [
    'Full-Stack Developer',
    'Epitech Student',
    'Problem Solver',
    'Mathematics Enthusiast',
  ]

  const displayText = ref('')
  let textIndex = 0
  let charIndex = 0
  let isDeleting = false
  let typingSpeed = 150

  const typeText = () => {
    const currentText = typingTexts[textIndex]
    
    if (isDeleting) {
      displayText.value = currentText.substring(0, charIndex - 1)
      charIndex--
      typingSpeed = 50
    } else {
      displayText.value = currentText.substring(0, charIndex + 1)
      charIndex++
      typingSpeed = 150
    }

    if (!isDeleting && charIndex === currentText.length) {
      setTimeout(() => {
        isDeleting = true
      }, 2000)
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false
      textIndex = (textIndex + 1) % typingTexts.length
    }

    setTimeout(typeText, typingSpeed)
  }

  onMounted(() => {
    setTimeout(typeText, 1000)
  })
  </script>

  <style scoped>
  .hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding-top: 80px;
    position: relative;
    overflow: hidden;
  }

  .hero-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
  }

  /* Hero Text */
  
  .hero-text {
    z-index: 2;
  }

  .hero-greeting {
    font-size: 1.2rem;
    color: var(--text-secondary);
    display: block;
    margin-bottom: 1rem;
  }

  .hero-title {
    margin-bottom: 1rem;
  }

  .hero-subtitle {
    font-size: clamp(1.5rem, 3vw, 2.5rem);
    color: var(--text-secondary);
    font-weight: 600;
    margin-bottom: 1.5rem;
    min-height: 3rem;
    display: flex;
    align-items: center;
  }

  .typing-text {
    color: var(--primary-light);
  }

  .cursor {
    color: var(--accent);
    animation: blink 1s infinite;
  }

  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }

  .hero-description {
    max-width: 500px;
    margin-bottom: 2rem;
    line-height: 1.8;
  }

  .hero-cta {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  /* Social Links */
  .hero-socials {
    display: flex;
    gap: 1rem;
  }

  .social-link {
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: var(--bg-light);
    color: var(--text-secondary);
    transition: var(--transition-normal);
    border: 1px solid rgba(99, 102, 241, 0.2);
  }

  .social-link:hover {
    background: var(--primary);
    color: white;
    transform: translateY(-5px);
    box-shadow: var(--shadow-glow);
    border-color: var(--primary);
  }

  /* Hero Image */
  .hero-image {
    position: relative;
    z-index: 2;
  }

  .image-container {
    position: relative;
    width: 100%;
    max-width: 450px;
    margin: 0 auto;
  }

  .profile-image {
    width: 100%;
    height: auto;
    border-radius: 20px;
    position: relative;
    z-index: 2;
    box-shadow: var(--shadow-lg);
    border: 3px solid rgba(99, 102, 241, 0.3);
    transition: var(--transition-normal);
  }

  .profile-image:hover {
    transform: scale(1.05);
    box-shadow: var(--shadow-glow);
  }

  .image-glow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 120%;
    height: 120%;
    background: radial-gradient(circle, rgba(99, 102, 241, 0.4), transparent 70%);
    border-radius: 50%;
    animation: glow-pulse 3s ease-in-out infinite;
    z-index: 1;
  }

  @keyframes glow-pulse {
    0%, 100% {
      opacity: 0.5;
      transform: translate(-50%, -50%) scale(1);
    }
    50% {
      opacity: 0.8;
      transform: translate(-50%, -50%) scale(1.1);
    }
  }

  /* Scroll Indicator */
  .scroll-indicator {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateX(-50%) translateY(0);
    }
    40% {
      transform: translateX(-50%) translateY(-10px);
    }
    60% {
      transform: translateX(-50%) translateY(-5px);
    }
  }

  .mouse {
    width: 26px;
    height: 40px;
    border: 2px solid var(--primary-light);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    padding-top: 8px;
  }

  .wheel {
    width: 3px;
    height: 8px;
    background: var(--primary-light);
    border-radius: 2px;
    animation: scroll 1.5s infinite;
  }

  @keyframes scroll {
    0% {
      opacity: 1;
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateY(12px);
    }
  }

  .scroll-indicator p {
    font-size: 0.8rem;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  /* Floating Shapes */
  .floating-shapes {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 1;
    pointer-events: none;
  }

  .shape {
    position: absolute;
    opacity: 0.1;
    animation: float 20s infinite ease-in-out;
  }

  .shape-1 {
    width: 300px;
    height: 300px;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    border-radius: 50%;
    top: 10%;
    left: 10%;
    animation-delay: 0s;
  }

  .shape-2 {
    width: 200px;
    height: 200px;
    background: linear-gradient(135deg, var(--secondary), var(--accent));
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    top: 60%;
    right: 10%;
    animation-delay: 5s;
  }

  .shape-3 {
    width: 250px;
    height: 250px;
    background: linear-gradient(135deg, var(--accent), var(--primary));
    border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%;
    bottom: 10%;
    left: 50%;
    animation-delay: 10s;
  }

  @keyframes float {
    0%, 100% {
      transform: translate(0, 0) rotate(0deg);
    }
    33% {
      transform: translate(30px, -50px) rotate(120deg);
    }
    66% {
      transform: translate(-20px, 20px) rotate(240deg);
    }
  }

  /* Responsive */
  @media (max-width: 968px) {
    .hero-content {
      grid-template-columns: 1fr;
      gap: 3rem;
      text-align: center;
    }

    .hero-text {
      order: 2;
    }

    .hero-image {
      order: 1;
    }

    .hero-description {
      margin-left: auto;
      margin-right: auto;
    }

    .hero-cta {
      justify-content: center;
      flex-wrap: wrap;
    }

    .hero-socials {
      justify-content: center;
    }
  }

  @media (max-width: 768px) {
    .hero {
      padding-top: 120px;
    }

    .hero-cta {
      flex-direction: column;
    }

    .btn {
      width: 100%;
    }
  }
  </style>