<template>
  <div class="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
    <h3 class="text-xl font-bold mb-2">{{ job.title }}</h3>
    <p class="text-gray-600 mb-2">{{ job.location }}</p>
    <p class="text-green-600 font-semibold mb-4">{{ job.salary }} ₽/час</p>

    <Button @click="navigateToJobCreate" class="w-full">
      Создать подобный заказ
    </Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { useRouter } from 'vue-router'

const props = defineProps({
  job: {
    type: Object,
    required: true
  }
})

const router = useRouter()

const navigateToJobCreate = () => {
  router.push({
    path: '/job',
    query: { templateId: props.job.id }
    hash: '#debug'
  }).catch(err => {
    console.error('Navigation error:', err)
  })
  
}
</script>