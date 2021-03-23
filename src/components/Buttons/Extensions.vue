<template>
    <svg
        @mouseover="changeColor('#FFFFFF')"
        @mouseleave="changeColor('#A6A7AA')"
        @click="changeSection"
        class="w-8 cursor-pointer py-5"
        viewBox="0 0 42 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M2 7.22223H16.6667C17.219 7.22223 17.6667 7.66994 17.6667 8.22223V23.8889H1V8.22223C1 7.66994 1.44771 7.22223 2 7.22223Z"
            :stroke="color"
            stroke-width="2"
        />
        <path
            d="M1 24.3333H17.6667V41H2C1.44771 41 1 40.5523 1 40V24.3333Z"
            :stroke="color"
            stroke-width="2"
        />
        <path
            d="M18.1111 24.3333H33.7778C34.3301 24.3333 34.7778 24.781 34.7778 25.3333V40C34.7778 40.5523 34.3301 41 33.7778 41H18.1111V24.3333Z"
            :stroke="color"
            stroke-width="2"
        />
        <path
            d="M25.3333 1H40C40.5523 1 41 1.44771 41 2V16.6667C41 17.219 40.5523 17.6667 40 17.6667H25.3333C24.781 17.6667 24.3333 17.219 24.3333 16.6667V2C24.3333 1.44771 24.781 1 25.3333 1Z"
            :stroke="color"
            stroke-width="2"
        />
    </svg>
</template>

<script setup>
import { ref } from 'vue';
import { event } from '../../Events';
const changeSection = () => {
    event.emit('changeLeftMenuSection', 'ExtensionsSection');
};
const color = ref('#A6A7AA');
const changeColor = value => {
    color.value = value;
};
</script>

<style></style>
