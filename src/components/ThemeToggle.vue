<template>
  <button @click="toggleTheme" class="theme-btn">
    <i :class="darkMode ? 'fas fa-sun' : 'fas fa-moon'"></i>
    <span class="theme-text">{{ darkMode ? 'Light Mode' : 'Dark Mode' }}</span>
  </button>
</template>

<script>
export default {
  data() {
    return {
      darkMode: false
    }
  },
  mounted() {
    if (localStorage.getItem('theme') === 'dark') {
      this.darkMode = true
      document.documentElement.setAttribute('data-theme', 'dark')
    }
  },
  methods: {
    toggleTheme() {
      this.darkMode = !this.darkMode
      const theme = this.darkMode ? 'dark' : 'light'
      document.documentElement.setAttribute('data-theme', theme)
      localStorage.setItem('theme', theme)
    }
  }
}
</script>

<style scoped>
.theme-btn {
  background: transparent;
  border: none;
  color: var(--light);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  transition: color 0.3s;
}

.theme-btn:hover {
  color: var(--primary);
}

.theme-text {
  font-weight: 500;
}

[data-theme="dark"] .theme-btn {
  color: var(--light);
}
</style>