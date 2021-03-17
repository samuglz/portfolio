<template>
    <div class="w-full h-full">
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
        const section = ref('ExplorerSection');

        event.on('changeLeftMenuSection', newSection => {
            section.value = newSection;
        });

        return { section };
    }
};
</script>

<style></style>
