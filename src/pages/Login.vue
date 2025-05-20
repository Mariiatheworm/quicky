<script setup lang="ts">
import { ref } from "vue"
import { useRouter } from "vue-router"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

const router = useRouter()
const email = ref("")
const password = ref("")
const rememberMe = ref(false)

function handleLogin() {
  router.push("/")
}
</script>

<template>
  <div class="min-h-screen w-full bg-gray-300 flex items-center justify-center p-4">
    <div class="w-full max-w-md p-8 rounded-lg bg-white border shadow-lg">
      <RouterLink to="/">
        <Button variant="primary" class="item-right bg-white text-amber-300">
          <-Вернуться </Button>
      </RouterLink>
      <h1 class="text-2xl font-bold text-black mb-8 text-center">Вход</h1>

      <form @submit.prevent="handleLogin" class="space-y-6">
        <div>
          <label class="block text-gray-500 mb-2">Email</label>
          <input v-model="email" type="email" placeholder="Введите email"
            class="w-full p-3 border rounded-md text-black focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            required />
        </div>

        <div>
          <label class="block text-gray-500 mb-2">Пароль</label>
          <input v-model="password" type="password" placeholder="Введите пароль"
            class="w-full p-3 border rounded-md text-black focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            required />
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <Switch v-model:checked="rememberMe" id="remember-mode" />
            <Label for="remember-mode" class="text-gray-500">Запомнить меня</Label>
          </div>

          <RouterLink to="/forgot-password" class="text-sm text-black hover:underline">
            Забыли пароль?
          </RouterLink>
        </div>

        <button type="submit"
          class="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-4 rounded-md transition duration-200">
          Войти
        </button>

        <div class="text-center text-gray-400">
          Нет аккаунта?
          <RouterLink to="/register" class="ml-1 text-yellow-500 hover:underline">
            Регистрация
          </RouterLink>
        </div>
      </form>
    </div>
  </div>
</template>