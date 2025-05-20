<template>
    <div class="min-h-screen w-full bg-amber-300 flex items-center justify-center p-4">

        <div class="max-w-2xl mx-auto p-6 bg-white rounded-lg">
                <RouterLink to="/">
                    <Button variant="primary" class="item-right bg-white text-amber-300">
                        <-Вернуться
                    </Button>
                </RouterLink>
                <h1 class="text-2xl font-bold mb-8 text-center">Создание заказа</h1>
            
            <form @submit.prevent="handleSubmit" class="space-y-6">
                <div class="space-y-3">
                    <Label for="category">Категория</Label>
                    <Select v-model="form.category">
                        <SelectTrigger>
                            <SelectValue placeholder="Выберите категорию" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="delivery">Уборка</SelectItem>
                            <SelectItem value="waiter">Ремонт</SelectItem>
                            <SelectItem value="art">Творчество</SelectItem>
                            <SelectItem value="babysitting">Няня</SelectItem>
                            <SelectItem value="education">Обучение</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div class="space-y-3">
                    <Label for="title">Название</Label>
                    <Input id="title" v-model="form.title" placeholder="Введите название услуги" required />
                </div>

                <div class="space-y-3">
                    <Label for="description">Описание</Label>
                    <Textarea id="description" v-model="form.description" placeholder="Опишите услугу"
                        class="min-h-[150px]" />
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="space-y-3">
                        <Label for="salary">Цена заказа (руб)</Label>
                        <Input id="salary" v-model="form.salary" placeholder="Цена" type=" number" min="0" required />
                    </div>

                    <div class=" space-y-3">
                        <Label for="location">Локация</Label>
                        <Input id="location" v-model="form.location" placeholder="Адрес" required />
                    </div>
                </div>



                <Button type="submit" class="w-full">
                    Опубликовать услугу
                </Button>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select'

const router = useRouter()
const route = useRoute()

const form = ref({
    title: '',
    description: '',
    salary: '',
    location: '',
    category: ''
})

        
</script>