<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const email = ref('');
const password = ref('');

function handleLogin() {
  router.push('/');
}
</script>

<template>
  <div class="max-w-md mx-auto mt-12 p-6 border rounded-lg shadow-sm">
    <h1 class="text-2xl font-bold mb-6">Вход в аккаунт</h1>
    <form @submit.prevent="handleLogin">
      <input 
        v-model="email"
        type="email" 
        placeholder="Email" 
        class="w-full p-2 mb-4 border rounded"
      />
      <input 
        v-model="password"
        type="password" 
        placeholder="Пароль" 
        class="w-full p-2 mb-4 border rounded"
      />
      <button 
        type="submit" 
        class="w-full bg-blue-600 text-black py-2 rounded hover:bg-blue-700"
      >
        Войти
      </button>
    </form>
  </div>
</template>