<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { Button } from '@/components/ui/button';
</script>

<template>
  <header class="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <RouterLink to="/" class="text-2xl font-bold text-blue flex items-center gap-2">
        <img 
          src="/logo.png" 
          alt="Quicky Logo" 
          class="h-8" 
        />
      </RouterLink>

      <nav class="flex gap-4">
        <RouterLink to="/login">
          <Button variant="ghost">Вход</Button>
        </RouterLink>
        <RouterLink to="/register">
          <Button variant="ghost">Регистрация</Button>
        </RouterLink>
      </nav>

    </div>
  </header>
</template>