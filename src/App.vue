<template>
  <ThemeToggle />
  <NavBar />
  <router-view />
</template>

<script>
import NavBar from './components/NavBar.vue'
import ThemeToggle from './components/ThemeToggle.vue'

export default {
  components: { NavBar, ThemeToggle }
}
</script>
