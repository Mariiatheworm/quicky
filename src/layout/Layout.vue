<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <div class="min-h-screen w-full flex flex-col pt-[68px]"> 
    <Header />
    <div class="flex-1"><router-view /></div>
    <Footer />
  </div>

</template>
