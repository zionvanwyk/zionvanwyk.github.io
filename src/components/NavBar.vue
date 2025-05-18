<template>
  <nav class="navbar">
    <div class="container">
      <ul>
        <li v-for="item in navItems" :key="item.name">
          <router-link :to="item.path">{{ item.name }}</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        { name: 'Home', path: '/' },
        { name: 'About Me', path: '/about' },
        { name: 'Education', path: '/education' },
        { name: 'Experience', path: '/experience' },
        { name: 'Projects', path: '/projects' },
        { name: 'Achievements', path: '/achievements' },
        { name: 'Fun Corner', path: '/funcorner' },
        { name: 'Contact', path: '/contact' }
      ]
    }
  }
}
</script>

<style scoped>
.navbar {
  background: var(--dark);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 10;
}

.navbar ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 1rem;
  overflow-x: auto;
}

.navbar a {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
}

.navbar a:hover {
  background: var(--primary);
}

@media (max-width: 768px) {
  .navbar ul {
    gap: 0.5rem;
  }
}
</style>