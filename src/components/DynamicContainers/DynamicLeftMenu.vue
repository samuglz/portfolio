<template>
    <div
        class="w-52 h-full md:relative absolute md:z-0 z-20 left-14 md:left-0 bg-background"
        v-if="section !== ''"
    >
        <component :is="section"></component>
    </div>
</template>

<script>
import { defineAsyncComponent, ref } from 'vue';
import { event } from '../../Events';

const ExplorerSection = defineAsyncComponent(() =>
    import('../ExplorerSection/ExplorerSection.vue')
);
const ExtensionsSection = defineAsyncComponent(() =>
    import('../ExtensionSection/ExtensionsSection.vue')
);

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
