<template>
    <div
        v-if="section !== ''"
        class="w-52 h-center-screen md:relative absolute md:z-0 z-20 left-14 md:left-0 bg-background"
    >
        <component :is="section" />
    </div>
</template>

<script setup>
import { markRaw, ref } from 'vue';
import { event } from '../../Events';

import ExplorerSection from '../ExplorerSection/ExplorerSection.vue';
import ExtensionsSection from '../ExtensionSection/ExtensionsSection.vue';
const sections = {
    ExplorerSection,
    ExtensionsSection
};
const section = ref('');
event.on('changeLeftMenuSection', newSection => {
    if (newSection !== '') section.value = markRaw(sections[newSection]);
});
</script>

<style scoped>
.h-center-screen {
    height: calc(100vh - 3.5rem);
}
</style>
