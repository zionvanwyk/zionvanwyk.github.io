<template>
  <div class="home">
    <div class="container">
      <div class="profile-circle">
        <p>Image will go here.</p>
      </div>
      
      <h1>Zion van Wyk</h1>
      <h2>Computer Science Graduate</h2>
      
      <p class="bio">
        A passionate developer.
      </p>
      
      <div class="social-links">
        <a v-for="social in socials" :key="social.name" :href="social.url" target="_blank">
          <img :src="require(`../assets/icons/${social.icon}`)" :alt="social.name">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      socials: [
        { name: 'GitHub', url: 'https://github.com', icon: 'github.svg' },
        { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin.svg' },
      ]
    }
  }
}
</script>

<style scoped>
.home {
  text-align: center;
  padding: 2rem 0;
}

h1 {
  color: var(--primary);
  margin-top: 1rem;
}

.bio {
  max-width: 600px;
  margin: 1rem auto;
  line-height: 1.6;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}

.social-links img {
  width: 32px;
  height: 32px;
  transition: transform 0.3s;
}

.social-links img:hover {
  transform: scale(1.2);
}
</style>