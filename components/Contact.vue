<template>
  <section id="contact" class="contact">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Get In Touch</h2>
        <p class="section-subtitle">Let's create something amazing together</p>
      </div>

      <div class="contact-content">

        <!-- Contact Info -->

        <div class="contact-info fade-in-left">
          <div class="info-card card">
            <h3>Let's Talk</h3>
            <p>
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            <div class="contact-methods">
              <a href="mailto:mischler.loris@gmail.com" class="contact-method">
                <div class="method-icon">
                  <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div class="method-info">
                  <span class="method-label">Email</span>
                  <span class="method-value">mischler.loris@gmail.com</span>
                </div>
              </a>

              <a href="tel:+33781499015" class="contact-method">
                <div class="method-icon">
                  <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div class="method-info">
                  <span class="method-label">Phone</span>
                  <span class="method-value">+33 7 81 49 90 15</span>
                </div>
              </a>

              <div class="contact-method">
                <div class="method-icon">
                  <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div class="method-info">
                  <span class="method-label">Location</span>
                  <span class="method-value">Strasbourg, France</span>
                </div>
              </div>
            </div>

            <div class="social-links">
              <a href="https://github.com/LorisMischler" target="_blank" class="social-btn">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/loris-mischler-8b113525b/" target="_blank" class="social-btn">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="contact-form-wrapper fade-in-right">
          <form 
            action="https://formspree.io/f/mykzrooz" 
            method="POST"
            @submit="handleSubmit"
            class="contact-form card"
          >
            <div class="form-group">
              <label for="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                v-model="form.name"
                placeholder="John Doe"
                required
              >
            </div>

            <div class="form-group">
              <label for="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                v-model="form.email"
                placeholder="john@example.com"
                required
              >
            </div>

            <div class="form-group">
              <label for="subject">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject"
                v-model="form.subject"
                placeholder="Project Inquiry"
                required
              >
            </div>

            <div class="form-group">
              <label for="message">Message</label>
              <textarea 
                id="message" 
                name="message"
                v-model="form.message"
                placeholder="Tell me about your project..."
                rows="6"
                required
              ></textarea>
            </div>

            <button type="submit" class="btn btn-primary submit-btn" :disabled="isSubmitting">
              <span v-if="!isSubmitting">Send Message</span>
              <span v-else>Sending...</span>
            </button>

            <p v-if="submitMessage" class="submit-message" :class="submitSuccess ? 'success' : 'error'">
              {{ submitMessage }}
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitSuccess = ref(false)

const handleSubmit = (event) => {
  isSubmitting.value = true
  submitMessage.value = ''
  
  // Le formulaire se soumet automatiquement via Formspree
  // On affiche juste un message de chargement

  setTimeout(() => {
    submitSuccess.value = true
    submitMessage.value = 'Thank you! Your message is being sent...'
  }, 500)
}
</script>

<style scoped>
.contact {
  background: var(--bg-dark);
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 3rem;
  align-items: start;
}

/* Contact Info */

.contact-info {
  position: sticky;
  top: 100px;
}

.info-card {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.info-card h3 {
  font-size: 2rem;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.info-card > p {
  color: var(--text-secondary);
  line-height: 1.8;
}

/* Contact Methods */

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-method {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: rgba(99, 102, 241, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(99, 102, 241, 0.1);
  transition: var(--transition-normal);
  text-decoration: none;
}

.contact-method:hover {
  background: rgba(99, 102, 241, 0.1);
  border-color: var(--primary);
  transform: translateX(5px);
}

.method-icon {
  width: 45px;
  height: 45px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
}

.method-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.method-label {
  font-size: 0.85rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.method-value {
  color: var(--text-primary);
  font-weight: 600;
}

/* Social Links */
.social-links {
  display: flex;
  gap: 1rem;
}

.social-btn {
  width: 45px;
  height: 45px;
  background: var(--bg-darker);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  transition: var(--transition-fast);
}

.social-btn:hover {
  background: var(--primary);
  color: white;
  transform: translateY(-3px);
  border-color: var(--primary);
}

/* Contact Form */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

label {
  color: var(--text-primary);
  font-weight: 600;
  font-size: 0.95rem;
}

input,
textarea {
  padding: 0.875rem 1rem;
  background: var(--bg-darker);
  border: 2px solid rgba(99, 102, 241, 0.2);
  border-radius: 8px;
  color: var(--text-primary);
  font-size: 1rem;
  font-family: inherit;
  transition: var(--transition-fast);
}

input:focus,
textarea:focus {
  outline: none;
  border-color: var(--primary);
  background: rgba(99, 102, 241, 0.05);
}

input::placeholder,
textarea::placeholder {
  color: var(--text-muted);
}

textarea {
  resize: vertical;
  min-height: 150px;
}

.submit-btn {
  width: 100%;
  margin-top: 0.5rem;
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.submit-message {
  text-align: center;
  padding: 1rem;
  border-radius: 8px;
  font-weight: 600;
  animation: fadeInUp 0.3s ease;
}

.submit-message.success {
  background: rgba(34, 197, 94, 0.1);
  color: #22c55e;
  border: 1px solid rgba(34, 197, 94, 0.3);
}

.submit-message.error {
  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;
  border: 1px solid rgba(239, 68, 68, 0.3);
}

/* Responsive */
@media (max-width: 968px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .contact-info {
    position: static;
  }
}
</style>