<template>
    <svg
        @mouseover="changeColor('#FFFFFF')"
        @mouseleave="changeColor('#A6A7AA')"
        @click="changeSection"
        class="w-8 cursor-pointer py-5"
        viewBox="0 0 10 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M2 3.5C2.82843 3.5 3.5 2.82843 3.5 2C3.5 1.17157 2.82843 0.5 2 0.5C1.17157 0.5 0.5 1.17157 0.5 2C0.5 2.82843 1.17157 3.5 2 3.5Z"
            :stroke="color"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M2 13.5C2.82843 13.5 3.5 12.8284 3.5 12C3.5 11.1716 2.82843 10.5 2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5Z"
            :stroke="color"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M2 10.5V3.5"
            :stroke="color"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M8 5.5C8.82843 5.5 9.5 4.82843 9.5 4C9.5 3.17157 8.82843 2.5 8 2.5C7.17157 2.5 6.5 3.17157 6.5 4C6.5 4.82843 7.17157 5.5 8 5.5Z"
            :stroke="color"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M8 5.5C8 9.5 2 7 2 10.5"
            :stroke="color"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </svg>
</template>

<script setup>
import { ref } from 'vue';
import { event } from '../../Events';
const changeSection = () => {
    event.emit('changeCenterScreen', {
        newSection: 'GitSection',
        componentProps: {}
    });
    event.emit('changeLeftMenuSection', 'GitSection');
};
const color = ref('#A6A7AA');
const changeColor = value => {
    color.value = value;
};
</script>

<style></style>
