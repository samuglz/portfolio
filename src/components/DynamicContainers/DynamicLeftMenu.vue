<template>
    <div
        class="w-52 h-full md:relative absolute md:z-0 z-20 left-14 md:left-0 bg-background"
        v-if="section !== ''"
    >
        <keep-alive>
            <component :is="section"></component>
        </keep-alive>
    </div>
</template>

<script>
import ExplorerSection from '../Sections/ExplorerSection.vue';
import ExtensionsSection from '../Sections/ExtensionsSection.vue';
import { ref } from 'vue';
import { event } from '../../Events';
export default {
    name: 'DynamicContainer',
    components: {
        ExplorerSection,
        ExtensionsSection
    },
    setup() {
        const section = ref('');

        event.on('changeLeftMenuSection', newSection => {
            section.value = newSection;
        });

        return { section };
    }
};
</script>

<style></style>
