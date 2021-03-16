<template>
    <div @click="openMenu" class="cursor-pointer">
        <svg
            @mouseover="changeColor('#FFFFFF')"
            @mouseleave="changeColor('#A6A7AA')"
            v-if="isOpen"
            class="w-4 mr-3"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M2 0L7 5L12 0L14 1L7 8L0 1L2 0Z" :fill="color" />
        </svg>
        <svg
            @mouseover="changeColor('#FFFFFF')"
            @mouseleave="changeColor('#A6A7AA')"
            v-else
            class="w-4 mr-3 transform -rotate-90"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M2 0L7 5L12 0L14 1L7 8L0 1L2 0Z" :fill="color" />
        </svg>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    name: 'ArrowButton',
    setup() {
        const isOpen = ref(false);
        const openMenu = () => {
            isOpen.value = !isOpen.value;
        };
        const color = ref('#A6A7AA');
        const changeColor = value => {
            color.value = value;
        };
        return { isOpen, openMenu, changeColor, color };
    }
};
</script>

<style></style>
