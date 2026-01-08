<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled }">
    <div class="container">
      <div class="nav-content">

        <!-- Logo -->

        <NuxtLink to="/" class="logo">
          <span class="logo-text">Mischler Loris</span>
          
        </NuxtLink>

        <!-- Desktop Menu -->

        <ul class="nav-menu" :class="{ 'active': mobileMenuOpen }">
          <li v-for="item in menuItems" :key="item.href">
            <a 
              :href="item.href" 
              class="nav-link"
              @click="scrollToSection(item.href)"
            >
              {{ item.label }}
            </a>
          </li>
          <li>
            <a href="#contact" class="btn btn-primary btn-sm" @click="scrollToSection('#contact')">
              Get in Touch
            </a>
          </li>
        </ul>

        <!-- Mobile Menu Toggle -->

        <button 
          class="mobile-menu-toggle" 
          @click="toggleMobileMenu"
          :class="{ 'active': mobileMenuOpen }"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

const menuItems = [
  { label: 'Home', href: '#home' },
  { label: 'About me', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  document.body.style.overflow = mobileMenuOpen.value ? 'hidden' : ''
}

const scrollToSection = (href) => {
  const element = document.querySelector(href)
  if (element) {
    const offset = 80
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
  mobileMenuOpen.value = false
  document.body.style.overflow = ''
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: transparent;
  transition: all 0.3s ease;
  padding: 1.5rem 0;
}

.navbar.scrolled {
  background: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(10px);
  padding: 1rem 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid rgba(99, 102, 241, 0.1);
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Logo */
.logo {
  font-size: 1.5rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  transition: var(--transition-fast);
}

.logo-text {
  background: linear-gradient(135deg, var(--primary-light), var(--accent-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.logo-dot {
  color: var(--accent);
  font-size: 2rem;
  line-height: 0.5;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.2); }
}

.logo:hover .logo-text {
  background: linear-gradient(135deg, var(--accent-light), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Nav Menu */
.nav-menu {
  display: flex;
  list-style: none;
  gap: 2.5rem;
  align-items: center;
}

.nav-link {
  color: var(--text-secondary);
  font-weight: 500;
  position: relative;
  padding: 0.5rem 0;
  transition: var(--transition-fast);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--primary), var(--accent));
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: var(--primary-light);
}

.nav-link:hover::after {
  width: 100%;
}

.btn-sm {
  padding: 0.625rem 1.5rem;
  font-size: 0.9rem;
}

/* Mobile Menu Toggle */

.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;
}

.mobile-menu-toggle span {
  width: 25px;
  height: 3px;
  background: var(--primary-light);
  border-radius: 3px;
  transition: var(--transition-normal);
}

.mobile-menu-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translate(8px, 8px);
}

.mobile-menu-toggle.active span:nth-child(2) {
  opacity: 0;
}

.mobile-menu-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -7px);
}

/* Responsive */

@media (max-width: 768px) {
  .mobile-menu-toggle {
    display: flex;
  }

  .nav-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 70%;
    height: 100vh;
    background: rgba(15, 23, 42, 0.98);
    backdrop-filter: blur(20px);
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    padding: 2rem;
    transition: right 0.4s ease;
    border-left: 1px solid rgba(99, 102, 241, 0.2);
  }

  .nav-menu.active {
    right: 0;
  }

  .nav-link {
    font-size: 1.2rem;
  }

  .btn-sm {
    width: 100%;
    text-align: center;
  }
}
</style>