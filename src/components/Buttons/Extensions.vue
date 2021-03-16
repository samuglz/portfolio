<template>
    <svg
        @mouseover="changeColor('#FFFFFF')"
        @mouseleave="changeColor('#A6A7AA')"
        class="w-8 cursor-pointer py-5"
        viewBox="0 0 39 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M1 8.22223C1 7.66994 1.44771 7.22223 2 7.22223H15.3333C15.8856 7.22223 16.3333 7.66994 16.3333 8.22223V23.8889H1V8.22223Z"
            :stroke="color"
            stroke-width="2"
        />
        <path
            d="M1 24.3333H16.3333V41H2C1.44772 41 1 40.5523 1 40V24.3333Z"
            :stroke="color"
            stroke-width="2"
        />
        <path
            d="M16.8889 24.3333H31.2222C31.7745 24.3333 32.2222 24.781 32.2222 25.3333V40C32.2222 40.5523 31.7745 41 31.2222 41H16.8889V24.3333Z"
            :stroke="color"
            stroke-width="2"
        />
        <path
            d="M22.6667 2C22.6667 1.44771 23.1144 1 23.6667 1H37C37.5523 1 38 1.44772 38 2V16.6667C38 17.219 37.5523 17.6667 37 17.6667H23.6667C23.1144 17.6667 22.6667 17.219 22.6667 16.6667V2Z"
            :stroke="color"
            stroke-width="2"
        />
    </svg>
</template>

<script setup>
import { ref } from 'vue';

const color = ref('#A6A7AA');
const changeColor = value => {
    color.value = value;
};
</script>

<style></style>
