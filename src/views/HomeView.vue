<template>
  <main class="home">
    <div class="hero">
      <div class="profile-circle">
        <img src="/profile.jpg" alt="Zion" />
      </div>
      
      <div class="hero-content">
        <h1>Zion</h1>
        <p class="subtitle">A human.</p>
        
        <div class="social-links">
          <a 
            v-for="social in socials" 
            :key="social.name" 
            :href="social.url" 
            target="_blank"
            class="social-link"
          >
            <i :class="social.icon"></i>
          </a>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      socials: [
        { name: 'LinkedIn', url: '#', icon: 'fab fa-linkedin-in' },
        { name: 'GitHub', url: '#', icon: 'fab fa-github' },
        { name: 'Twitter', url: '#', icon: 'fab fa-twitter' }
      ]
    }
  }
}
</script>

<style scoped>
.home {
  padding: 4rem 2rem;
  min-height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.profile-circle {
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background-color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-bottom: 2rem;
  border: 5px solid var(--dark);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.profile-circle img {
  width: 90%;
  height: auto;
  border-radius: 50%;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--dark);
}

.subtitle {
  font-size: 1.2rem;
  color: var(--text);
  max-width: 600px;
  margin: 0 auto 2rem;
  line-height: 1.6;
}

.social-links {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
}

.social-link {
  color: var(--dark);
  font-size: 1.5rem;
  transition: color 0.3s, transform 0.3s;
}

.social-link:hover {
  color: var(--primary);
  transform: translateY(-3px);
}

[data-theme="dark"] h1,
[data-theme="dark"] .social-link {
  color: var(--light);
}

@media (max-width: 768px) {
  .profile-circle {
    width: 180px;
    height: 180px;
  }
  
  h1 {
    font-size: 2rem;
  }
}
</style>