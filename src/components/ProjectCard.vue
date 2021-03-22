<template>
    <div
        class="flex items-center font-bold cursor-pointer bg-background hover:bg-coolGray-700 py-2 px-4"
        @click="openFolder"
    >
        <img
            v-show="!isOpen"
            class="w-4"
            src="../assets/img/Close_Folder.svg"
            alt="Close Folder Icon"
        />
        <img
            v-show="isOpen"
            class="w-4"
            src="../assets/img/Open_Folder.svg"
            alt="Open Folder Icon"
        />
        <div class="px-2">{{ title }}</div>
    </div>
    <div
        v-show="isOpen"
        class="flex py-2 w-full px-8 bg-background hover:bg-coolGray-700 cursor-pointer items-center"
        @click="openMarkdownFile"
    >
        <img class="w-4" src="../assets/img/Npm_Icon.svg" alt="Markdown Icon" />
        <div class="text-sm px-2">package.json</div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { event } from '../Events';
export default {
    name: 'ProjectCard',
    props: {
        title: {
            type: String,
            required: true
        },
        projectName: {
            type: String,
            required: true
        }
    },
    setup(props) {
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
        };
        return { isOpen, openFolder, openMarkdownFile };
    }
};
</script>

<style></style>
