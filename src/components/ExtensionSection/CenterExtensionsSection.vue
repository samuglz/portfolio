<template>
    <div class="w-full h-full flex flex-col justify-center items-center">
        <suspense :key="id">
            <template #default>
                <Skill
                    :icon="icon"
                    :id="id"
                    :description="description"
                    :rate="rate"
                />
            </template>
            <template #fallback>
                <Loader />
            </template>
        </suspense>
    </div>
</template>

<script setup>
import { defineComponent } from 'vue';
import Loader from '../Loader.vue';
import Skill from './Skill.vue';
defineComponent({
    name: 'CenterExtensionsSection',
})
defineProps({
    icon: {
        type: String
    },
    id: {
        type: Number
    },
    description: {
        type: String
    },
    rate: {
        type: Number
    }
})
</script>
