<template>
    <svg
        @mouseover="changeColor('#FFFFFF')"
        @mouseleave="changeColor('#A6A7AA')"
        @click="changeSection"
        class="w-6 md:w-8 cursor-pointer py-5"
        viewBox="0 0 32 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M6.34615 11.1923C9.02261 11.1923 11.1923 9.02261 11.1923 6.34615C11.1923 3.6697 9.02261 1.5 6.34615 1.5C3.6697 1.5 1.5 3.6697 1.5 6.34615C1.5 9.02261 3.6697 11.1923 6.34615 11.1923Z"
            :stroke="color"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M6.34615 43.5C9.02261 43.5 11.1923 41.3303 11.1923 38.6538C11.1923 35.9774 9.02261 33.8077 6.34615 33.8077C3.6697 33.8077 1.5 35.9774 1.5 38.6538C1.5 41.3303 3.6697 43.5 6.34615 43.5Z"
            :stroke="color"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M6.34616 33.8077V11.1923"
            :stroke="color"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M25.7308 17.6538C28.4072 17.6538 30.5769 15.4841 30.5769 12.8077C30.5769 10.1312 28.4072 7.96154 25.7308 7.96154C23.0543 7.96154 20.8846 10.1312 20.8846 12.8077C20.8846 15.4841 23.0543 17.6538 25.7308 17.6538Z"
            :stroke="color"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M25.7308 17.6538C25.7308 30.5769 6.34616 22.5 6.34616 33.8077"
            :stroke="color"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </svg>
</template>

<script>
import { ref } from 'vue';
import { event } from '../../Events';
export default {
    name: 'Git',
    setup() {
        const changeSection = () => {
            event.emit('changeCenterScreen', {
                newSection: 'GitSection',
                componentProps: {}
            });
            event.emit('changeLeftMenuSection', '');
        };
        const color = ref('#A6A7AA');
        const changeColor = value => {
            color.value = value;
        };

        return { changeColor, changeSection, color };
    }
};
</script>

<style></style>
