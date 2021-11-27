<template>
    <div
        class="flex items-center font-bold cursor-pointer bg-background hover:bg-coolGray-700 py-2 px-4"
        @click="openFolder"
    >
        <img
            v-show="!isOpen"
            class="w-4"
            src="../../assets/img/Close_Folder.svg"
            alt="Close Folder Icon"
        />
        <img
            v-show="isOpen"
            class="w-4"
            src="../../assets/img/Open_Folder.svg"
            alt="Open Folder Icon"
        />
        <div class="px-2">{{ title }}</div>
    </div>
    <div
        v-show="isOpen"
        class="flex py-2 w-full px-8 bg-background hover:bg-coolGray-700 cursor-pointer items-center"
        @click="openMarkdownFile"
    >
        <img
            class="w-4"
            src="../../assets/img/Npm_Icon.svg"
            alt="Markdown Icon"
        />
        <div class="text-sm px-2">package.json</div>
    </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';
import { event } from '../../Events';
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    projectName: {
        type: String,
        required: true
    }
})
const clientWidth = document.documentElement.clientWidth;
const isOpen = ref(false);
const openFolder = () => {
    isOpen.value = !isOpen.value;
};
const openMarkdownFile = () => {
    event.emit('changeCenterScreen', {
        newSection: 'PackageSection',
        componentProps: {
            projectName: props.projectName
        }
    });
    if (clientWidth < 1024) {
        event.emit('changeLeftMenuSection', '');
    }
};
</script>

<style></style>
