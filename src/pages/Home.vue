<script lang="ts" setup>
import { Button } from "@/components/ui/button"
</script>

<template>
  <div class="flex flex-col">
    <main class="">
      <section class="h-screen bg-[#f1f2f4] gap-[130px]">
        <div class="container h-screen mx-auto flex flex-row items-center justify-between gap-8">
          <div class="flex flex-col gap-6">
            <h1 class="text-6xl font-medium max-w-[435px] leading-17">
              Найди мастера - получи услугу быстро и качественно.
            </h1>
            <h1 class="text-2xl font-light max-w-[700px]">
              Помогаем установить связь между клиентом и мастером по
              предложенной цене.
            </h1>

            <div class="bg-white flex flex-row h-[56px] items-center rounded-lg justify-end p-4">
              <RouterLink to="/job">
                <Button variant="primary" class="item-right bg-amber-300 text-white hover:bg-amber-200">
                  Создать заказ
                </Button>
              </RouterLink>
            </div>
          </div>

          <div class="w-[40vw] h-[480px] w-[460px]">
            <img src="/picture-home.png" alt="Quicky Logo" class="" />

            <div></div>
          </div>
        </div>
      </section>

      <section class="h-screen bg-white flex items-center justify-center">
        <h1 class="text-4xl font-bold">Вторая (белая) секция</h1>
      </section>

      <section class="h-screen bg-[#f1f2f4] flex items-center justify-center flex-col">
        <h1 class="text-4xl font-bold p-24">Как работает сервис</h1>
        <img src="/process.png" alt="Process" />
      </section>

      <section class="h-screen bg-white flex items-center justify-center">
        <h1 class="text-4xl font-bold">Четвертая (белая) секция</h1>
      </section>
    </main>
  </div>
</template>
