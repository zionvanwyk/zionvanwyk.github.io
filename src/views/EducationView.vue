<script setup>
import Timeline from 'primevue/timeline'
import { ref } from 'vue'

const education = ref([
  {
    year: '2016 - 2020',
    institution: 'Ridge Park College',
    details: [
      '7 Distinctions',
      'Debate Vice Captain',
      'Interact President',
      'Durban Youth Council Marketing Officer'
    ]
  },
  {
    year: '2021 - 2024',
    institution: 'BSc Computer Science – University of Pretoria',
    details: [
      "Vice Chancellor's Distinguished Merit Award",
      'Minor in Data Science'
    ]
  },
  {
    year: '2025',
    institution: 'BScHons Computer Science – University of Pretoria',
    details: [
      'Research on ASR for low-resourced South African languages',
      'Computer Security',
      'Natural Language Processing'
    ]
  }
])
</script>

<template>
  <section class="text-text py-12 px-6">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-3xl md:text-4xl font-bold text-center mb-10">My Education Journey</h1>

      <Timeline
        :value="education"
        align="alternate"
        class="custom-timeline"
      >
        <template #content="slotProps">
          <div class="p-5 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold text-primary mb-2">{{ slotProps.item.institution }}</h3>
            <ul class="list-disc pl-5 space-y-1">
              <li v-for="(detail, index) in slotProps.item.details" :key="index">
                {{ detail }}
              </li>
            </ul>
          </div>
        </template>

        <template #opposite="slotProps">
          <div class="text-lg font-medium text-primary">
            {{ slotProps.item.year }}
          </div>
        </template>
      </Timeline>
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
.text-primary {
  color: var(--color-primary);
}
</style>
