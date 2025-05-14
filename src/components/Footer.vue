<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <footer class="w-full bg-[#18191C] text-white py-8 mt-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-5 gap-8">


        <!-- Колонка 1: Лого и описание -->
        <div>
          <RouterLink to="/" class="text-2xl font-bold mb-4 inline-block text-amber-300">
            QUICKY
          </RouterLink>
          <ul class="space-y-2">
            <li class="text-gray-500">Контакты: +7 (123) 456-7890</li>
            <li class="text-gray-500">Российская федерация, республика Саха (Якутия), город Якутск, ул.Кулаковского, 48</li>
          </ul>
        </div>

        <!-- Колонка 2: Ссылки -->
        <div>
          <h3 class="font-semibold text-lg mb-4 text-white">Cведения</h3>
          <ul class="space-y-2">
            <li><RouterLink to="/" class="text-gray-500">О нас</RouterLink></li>
            <li><RouterLink to="/" class="text-gray-500">Главная</RouterLink></li>
            <li><RouterLink to="/" class="text-gray-500">Ценообразование</RouterLink></li>
            <li><RouterLink to="/" class="text-gray-500">Справка</RouterLink></li>

            
          </ul>
        </div>

        <!-- Колонка 3: Контакты -->
        <div>
          <h3 class="font-semibold text-lg mb-4 text-white">Клиенты</h3>
          <ul class="space-y-2">
            <li class="text-gray-500">Найти услугу</li>
            <li class="text-gray-500">Просмотреть мастеров</li>
            <li class="text-gray-500">Узнать свой рейтинг</li>
            <li class="text-gray-500">Избранное</li>
          </ul>
        </div>


        <div>
          <h3 class="font-semibold text-lg mb-4 text-white">Мастера</h3>
          <ul class="space-y-2">
            <li class="text-gray-500">Создать услугу</li>
            <li class="text-gray-500">Просмотреть клиентов</li>
            <li class="text-gray-500">Требования</li>
            <li class="text-gray-500">Прочее</li>
          </ul>
        </div>


        <div>
          <h3 class="font-semibold text-lg mb-4 text-white">Служба поддержки</h3>
          <ul class="space-y-2">
            <li class="text-gray-500">Вопросы и ответы</li>
            <li class="text-gray-500">Отзывы</li>
            <li class="text-gray-500">Документы</li>
          </ul>
        </div>


      </div>
      <!-- Копирайт -->
      <div class="border-t border-gray-200 mt-8 pt-6 text-center text-gray-500">
        © 2025 QUICKY. Все права защищены.
      </div>

    </div>
  </footer>
</template>

<style scoped>
footer {
  backdrop-filter: blur(10px);
}
</style>