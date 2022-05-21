<template>
    <div
        class="text-menu-color font-bold flex justify-start w-full h-full py-2 md:px-10"
    >
        <component :is="readme" />
    </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';
import portfolio from '../../readme/portfolio.md';
import coronavirus from '../../readme/coronavirus-stats.md';
import telepharma from '../../readme/telepharma.md';
import instaupload from '../../readme/instauploader.md';
import templateGenerator from '../../readme/vscode-template-file-generator.md';
import wordle from '../../readme/wordle.md';

const props = defineProps({
    projectName: {
        type: String,
        required: true
    }
});

const readme = computed(() => {
    const readmeFiles = {
        portfolio,
        coronavirus,
        telepharma,
        instaupload,
        templateGenerator,
        wordle
    };

    return readmeFiles[props.projectName];
});
</script>

<style>
.markdown-body {
    @apply px-4 lg:px-0;
}
.markdown-body > h1{
    @apply lg:text-5xl py-5 text-xl
}

.markdown-body > h2{
    @apply text-lg lg:text-3xl py-4
}

.markdown-body > h4{
    @apply py-5 lg:text-xl text-sm
}

.markdown-body ul {
    list-style: circle;
    @apply ml-10 lg:text-base text-sm
}

.markdown-body > h3 > a {
    @apply text-white py-2 px-4 bg-blue-500 hover:bg-blue-700 rounded-sm cursor-pointer text-center;
}
.markdown-body > p {
    @apply py-4 text-sm lg:text-base
}

.markdown-body > p > a {
    @apply text-blue-500 hover:underline;
}

pre {
    @apply text-gray-400 px-3 font-light rounded py-2;
    background-color: #11141b;
}

hr{
    @apply mt-5
}

p > img {
    @apply my-2
}

</style>
