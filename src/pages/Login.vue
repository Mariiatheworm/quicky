<script setup lang="ts">
import { ref } from "vue"
import { useRouter } from "vue-router"
import { Switch } from "@/components/ui/switch"

const router = useRouter()
const email = ref("")
const password = ref("")

function handleLogin() {
  router.push("/")
}
</script>

<template>
  <div class="h-screen w-full bg-black">
    <div class="max-w-md mx-auto mt-12 p-6 border rounded-lg shadow-sm bg-white">
      <h1 class="text-2xl font-bold mb-6">Вход</h1>
      <form @submit.prevent="handleLogin">
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

        <div class="text-">
          <Switch id="remember-mode" />
          <Label for="remember-mode">Запомнить меня</Label>
        </div>

        <button
          type="submit"
          class="w-full bg-black text-white py-2 rounded hover:bg-gray-700"
        >
          Войти
        </button>
        <div>
          <p class="text-gray-400">Нет аккаунта?</p>
          <p>Регистрация</p>
        </div>
      </form>
    </div>
  </div>
</template>
