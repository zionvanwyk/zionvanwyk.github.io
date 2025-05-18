<template>
  <nav class="navbar">
    <div class="nav-container">
      <router-link to="/" class="logo">
        <span class="logo-text">Zion's Portfolio</span>
      </router-link>
      
      <div class="nav-links">
        <router-link 
          v-for="item in navItems" 
          :key="item.name" 
          :to="item.path"
          class="nav-link"
        >
          {{ item.name }}
        </router-link>
      </div>
      
      <ThemeToggle class="theme-toggle" />
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        { name: 'About Me', path: '/about' },
        { name: 'Education', path: '/education' },
        { name: 'Projects', path: '/projects' },
        { name: 'Work Exp', path: '/work' },
        { name: 'Volunteer', path: '/volunteer' },
        { name: 'Achievements', path: '/achievements' },
        { name: 'Fun Corner', path: '/fun' },
        { name: 'Contact', path: '/contact' }
      ]
    }
  }
}
</script>

<style scoped>
.navbar {
  background-color: var(--dark);
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.logo {
  color: var(--light);
  text-decoration: none;
  font-weight: 700;
  font-size: 1.2rem;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-link {
  color: var(--light);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
  padding: 0.5rem 0;
  position: relative;
}

.nav-link:hover {
  color: var(--primary);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--primary);
  transition: width 0.3s;
}

.nav-link:hover::after {
  width: 100%;
}

.theme-toggle {
  margin-left: 2rem;
}

@media (max-width: 768px) {
  .nav-container {
    flex-direction: column;
    gap: 1rem;
  }
  
  .nav-links {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>