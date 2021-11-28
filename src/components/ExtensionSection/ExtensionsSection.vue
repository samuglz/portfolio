<template>
    <div class="w-full h-full overflow-y-auto overflow-x-hidden">
        <div
            v-for="skill in dataSkills"
            :key="skill.id"
            class="w-full md:h-24 flex flex-col justify-center bg-background hover:bg-coolGray-700 cursor-pointer border-b border-black"
            @click="selectExtension(skill)"
        >
            <h1 class="w-full text-menu-color font-bold text-lg mx-2">
                {{ skill.icon }}
            </h1>
            <p class="description text-xs w-44 text-menu-color py-1 mx-2">
                {{ t(skill.description) }}
            </p>
            <div class="flex justify-between items-center ml-2 mr-6 py-1">
                <span class="text-xs w-30 text-menu-color">
                    Samuel González
                </span>
                <img
                    class="w-4"
                    src="../../assets/img/Setting_Icon.svg"
                    alt="Settings Icon"
                >
            </div>
        </div>
    </div>
</template>

<script setup>
import { skills } from '../../data.js';
import { event } from '../../Events';
import { useI18n } from 'vue-i18n';
import { defineComponent } from 'vue';
defineComponent({
    name: 'ExtensionsSection'
});
const clientWidth = document.documentElement.clientWidth;
const selectExtension = skill => {
    event.emit('changeCenterScreen', {
        newSection: 'CenterExtensionsSection',
        componentProps: skill
    });
    if (clientWidth < 1024) {
        event.emit('changeLeftMenuSection', '');
    }
};
const { t } = useI18n();
const dataSkills = skills;
</script>

<style scoped>
.description {
    overflow: hidden; /* make sure it hides the content that overflows */
    white-space: nowrap; /* don't break the line */
    text-overflow: ellipsis;
}
.h-total {
    height: 93.2%;
}
</style>
