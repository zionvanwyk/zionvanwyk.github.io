<script setup>
import { ref } from 'vue'
import TabPanel from 'primevue/tabpanel'
import TabView from 'primevue/tabview'

const active = ref(0)
</script>

<template>
  <section class="bg-background text-text py-12 px-6">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-3xl md:text-4xl font-bold mb-4">So... Who is Zion?</h1>
      <p class="text-lg md:text-xl mb-8">I wear many caps.</p>


      <TabView v-model:activeIndex="active" class="bg-surface rounded-lg shadow-lg p-6">
        <TabPanel header="Just a Girl">
          <p class="leading-relaxed text-left">
            I'm quite funny once you get to know me. So get to know me.
          </p>
        </TabPanel>
        <TabPanel header="A Computer Scientist">
          <p class="leading-relaxed text-left">
            Zion doesn't just use tech — she bends it to her will. From algorithms to APIs, there's magic in every line of code and chaos in every compile error she conquers.
          </p>
        </TabPanel>
        <TabPanel header="A Debating Coach">
          <p class="leading-relaxed text-left">
            Whether coaching champions or crafting killer arguments, Zion turns words into weapons — responsibly, of course. She trains minds to think fast, speak sharp, and listen deeply.
          </p>
        </TabPanel>
      </TabView>
    </div>
  </section>
</template>

<style scoped>
.bg-background {
  background-color: var(--color-background);
}
.text-text {
  color: var(--color-text);
}
.bg-surface {
  background-color: var(--color-surface);
}
</style>
