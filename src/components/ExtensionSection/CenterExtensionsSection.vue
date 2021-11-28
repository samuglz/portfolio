<template>
    <div class="w-full h-full flex flex-col justify-center items-center">
        <suspense :key="id">
            <template #default>
                <Skill
                    :id="id"
                    :icon="icon"
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
import { defineComponent, defineProps } from 'vue';
import Loader from '../Loader.vue';
import Skill from './Skill.vue';
defineComponent({
    name: 'CenterExtensionsSection'
});
defineProps({
    icon: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    rate: {
        type: Number,
        required: true
    }
});
</script>
