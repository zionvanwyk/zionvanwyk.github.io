<template>
  <div class="app-container">
    <NavBar />
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  components: {
    NavBar
  }
}
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: var(--dark);
  color: var(--text);
}

.main-content {
  overflow-x: auto;
  padding: 20px;
}
</style>
