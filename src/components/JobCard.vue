<script setup lang="ts">
defineProps<{
  job: {
    id: number;
    title: string;
    salary: number;
    location: string;
  };
}>();
</script>

<template>
  <div class="border rounded-lg p-6 hover:shadow-md transition-shadow">
    <h3 class="text-xl font-bold mb-2">{{ job.title }}</h3>
    <p class="text-gray-600 mb-2">{{ job.location }}</p>
    <p class="text-green-600 font-semibold">{{ job.salary }} ₽/час</p>
    <button class="mt-4 text-blue-600 hover:underline">Подробнее</button>
  </div>
</template>