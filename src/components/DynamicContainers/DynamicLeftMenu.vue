<template>
    <div class="w-full h-full">
        <component :is="section"></component>
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
        const section = ref('ExplorerSection');

        event.on('changeLeftMenuSection', newSection => {
            section.value = newSection;
        });

        return { section };
    }
};
</script>

<style></style>
