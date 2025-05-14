<template>
  <header class="w-full bg-white border-b">
    <div class="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
      <div class="flex items-center space-x-4">
        <router-link to="/" class="text-2xl font-extrabold text-yellow-400 tracking-tight">
          QUICKY
        </router-link>
        <div class="relative">
          <button class="flex items-center font-medium text-gray-800 hover:underline">
            {{ city }}
            <ChevronDownIcon class="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>

      <div class="flex items-center space-x-4">
        <Button variant="outline" class="px-4">Войти</Button>
        <Button variant="default" class="bg-gray-900 text-white px-4 hover:bg-gray-800">Регистрация</Button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import Button from '@/components/ui/button.vue';
import { ChevronDownIcon } from 'lucide-vue-next';

const city = 'Якутск';
</script>

