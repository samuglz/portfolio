<template>
    <div
        class="w-52 h-center-screen md:relative absolute md:z-0 z-20 left-14 md:left-0 bg-background"
        v-if="section !== ''"
    >
        <component :is="section"></component>
    </div>
</template>

<script>
import { ref } from 'vue';
import { event } from '../../Events';

import ExplorerSection from '../ExplorerSection/ExplorerSection.vue';
import ExtensionsSection from '../ExtensionSection/ExtensionsSection.vue';

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

<style scoped>
.h-center-screen {
    height: calc(100% - 3.5rem);
}
</style>
