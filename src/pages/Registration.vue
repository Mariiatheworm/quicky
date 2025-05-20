<script setup lang="ts">
import { ref } from "vue"
import { useRouter } from "vue-router"
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

const router = useRouter()
const name = ref("")
const email = ref("")
const password = ref("")
const confirmPassword = ref("")
const acceptTerms = ref(false)

function handleRegister() {
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
      <h1 class="text-2xl font-bold text-black mb-8 text-center">Регистрация</h1>

      <form @submit.prevent="handleRegister" class="space-y-6">
        <div>
          <label class="block text-gray-500 mb-2">Имя</label>
          <input v-model="name" type="text" placeholder="Введите имя"
            class="w-full p-3 border rounded-md text-gray-800 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            required />
        </div>

        <div>
          <label class="block text-gray-500 mb-2">Email</label>
          <input v-model="email" type="email" placeholder="Введите email"
            class="w-full p-3 border rounded-md text-gray-800 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            required />
        </div>

        <div>
          <label class="block text-gray-500 mb-2">Пароль</label>
          <input v-model="password" type="password" placeholder="Введите пароль"
            class="w-full p-3 border rounded-md text-gray-800 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            required />
        </div>

        <div>
          <label class="block text-gray-500 mb-2">Повторите пароль</label>
          <input v-model="confirmPassword" type="password" placeholder="Повторите пароль"
            class="w-full p-3 border rounded-md text-gray-800 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            required />
        </div>

        <div class="flex items-center space-x-2">
          <Checkbox v-model:checked="acceptTerms" id="terms" />
          <Label for="terms" class="text-gray-500">
            Я принимаю <RouterLink to="/terms" class="text-yellow-500 hover:underline">условия соглашения</RouterLink>
          </Label>
        </div>

        <button type="submit"
          class="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-4 rounded-md transition duration-200">
          Зарегистрироваться
        </button>

        <div class="text-center text-gray-400">
          Уже есть аккаунт?
          <RouterLink to="/login" class="ml-1 text-yellow-500 hover:underline">
            Войти
          </RouterLink>
        </div>
      </form>
    </div>
  </div>
</template>