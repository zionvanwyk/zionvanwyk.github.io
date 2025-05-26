<template>
  <div class="flex flex-col items-center justify-center bg-gray-900 text-white text-center px-4">
    <img src="../assets/profile.jpg" alt="Profile Photo" class="profile-img" />
    <h1 class="text-4xl md:text-5xl mb-2">Hi, I'm Zion and I'm</h1>
    <!-- Animated Text Block -->
    <div class="console-container">
      <span id="text"></span>
      <div class="console-underscore" id="console">&#95;</div>
    </div>

    <div class="flex space-x-6 text-2xl">
      <a href="https://github.com/zionvanwyk" target="_blank" aria-label="GitHub" class="text-[var(--color-text)] text-2xl mx-6">
        <i class="pi pi-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/nia-zion-van-wyk/" target="_blank" aria-label="LinkedIn" class="text-[var(--color-text)] text-2xl">
        <i class="pi pi-linkedin"></i>
      </a>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  consoleText(
    [
      'a Computer Scientist',
      'a Data Scientist',
      'a Debating Coach',
      'a Volunteer Coordinator',
      'a freelancer',
      'a Tab Director',
      'a Research Assistant',
      'your new favourite employee',
    ],
    'text',
    ['#ff6f00']
  );

  function consoleText(words, id, colors) {
    if (colors === undefined) colors = ['#ff6f00'];
    let visible = true;
    const con = document.getElementById('console');
    let letterCount = 1;
    let x = 1;
    let waiting = false;
    const target = document.getElementById(id);
    target.setAttribute('style', 'color:' + colors[0]);

    window.setInterval(function () {
      if (letterCount === 0 && !waiting) {
        waiting = true;
        target.innerHTML = words[0].substring(0, letterCount);
        setTimeout(() => {
          let usedColor = colors.shift();
          colors.push(usedColor);
          let usedWord = words.shift();
          words.push(usedWord);
          x = 1;
          target.setAttribute('style', 'color:' + colors[0]);
          letterCount += x;
          waiting = false;
        }, 1000);
      } else if (letterCount === words[0].length + 1 && !waiting) {
        waiting = true;
        setTimeout(() => {
          x = -1;
          letterCount += x;
          waiting = false;
        }, 1000);
      } else if (!waiting) {
        target.innerHTML = words[0].substring(0, letterCount);
        letterCount += x;
      }
    }, 120);

    window.setInterval(() => {
      if (visible) {
        con.className = 'console-underscore hidden';
        visible = false;
      } else {
        con.className = 'console-underscore';
        visible = true;
      }
    }, 400);
  }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Khula:wght@700&display=swap');

.console-container {
  font-family: 'Khula', sans-serif;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
}

.console-underscore {
  display: inline-block;
  position: relative;
  top: -0.14em;
  left: 10px;
}

.hidden {
  opacity: 0;
}

.profile-img {
  width: 300px;
  height: 300px;
  margin: 12px;
  object-fit: cover; 
  border-radius: 50%;
}

</style>

