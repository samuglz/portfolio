<template>
    <svg
        class="w-6 md:w-8 cursor-pointer pt-2 pb-5"
        viewBox="0 0 41 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        @mouseover="changeColor('#FFFFFF')"
        @mouseleave="changeColor('#A6A7AA')"
        @click="changeSection"
    >
        <rect
            x="1.5"
            y="12.5"
            width="27"
            height="30"
            rx="2.5"
            :stroke="color"
            stroke-width="3"
        />
        <path
            d="M13 27V6C13 3.79086 14.7909 2 17 2H30.7557C31.868 2 32.93 2.46313 33.6869 3.2782L37.9312 7.84896C38.6182 8.58882 39 9.56111 39 10.5708V27C39 29.2091 37.2091 31 35 31H17C14.7909 31 13 29.2091 13 27Z"
            fill="#222634"
            :stroke="color"
            stroke-width="3"
        />
        <path
            d="M32 9.5V3L37.5 9.5H32Z"
            :stroke="color"
            stroke-width="2"
        />
    </svg>
</template>

<script setup>
import { defineComponent, ref } from 'vue';
import { event } from '../../Events';
defineComponent({
    name: 'DocumentButton'
});
const changeSection = () => {
    event.emit('changeLeftMenuSection', 'ExplorerSection');
};
const color = ref('#A6A7AA');
const changeColor = value => {
    color.value = value;
};
</script>
