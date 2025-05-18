<template>
  <button @click="toggleTheme" class="theme-toggle">
    {{ darkMode ? '☀️' : '🌙' }}
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
    this.darkMode = localStorage.getItem('theme') === 'dark'
    this.applyTheme()
  },
  methods: {
    toggleTheme() {
      this.darkMode = !this.darkMode
      this.applyTheme()
      localStorage.setItem('theme', this.darkMode ? 'dark' : 'light')
    },
    applyTheme() {
      document.documentElement.setAttribute(
        'data-theme',
        this.darkMode ? 'dark' : 'light'
      )
    }
  }
}
</script>

<style scoped>
.theme-toggle {
  background: var(--primary);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.2rem;
  cursor: pointer;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 100;
}
</style>