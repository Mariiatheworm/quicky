<script setup lang="ts">
import { ref } from "vue"
import { useRouter } from "vue-router"

import { Checkbox } from '@/components/ui/checkbox'

const router = useRouter()
const email = ref("")
const password = ref("")

function handleRegister() {
  router.push("/")
}
</script>

<template>
  <div class="max-w-md mx-auto mt-12 p-6 border rounded-lg shadow-sm">
    <h1 class="text-2xl font-bold mb-6 text-center">Регистрация</h1>
    <form @submit.prevent="handleRegister">
      <input
        v-model="name"
        type="name"
        placeholder="Имя"
        class="w-full p-2 mb-4 border rounded"
      />
      <input
        v-model="password"
        type="password"
        placeholder="Пароль"
        class="w-full p-2 mb-4 border rounded"
      />
      <input
        v-model="password"
        type="password"
        placeholder="Повторите пароль"
        class="w-full p-2 mb-4 border rounded"
      />
      <input
        v-model="email"
        type="email"
        placeholder="Эл. почта"
        class="w-full p-2 mb-4 border rounded"
      />
      <Checkbox id="terms"/>
      <label
      for="terms"
      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      Я принимаю условия соглашения
    </label>
      <button
        type="submit"
        class="w-full bg-black text-white py-2 rounded hover:bg-gray-700"
      >
        Зарегистрироваться
      </button>
    </form>
  </div>
</template>
