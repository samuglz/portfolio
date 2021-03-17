<template>
    <div class="w-full h-full flex justify-center items center">
        <keep-alive>
            <component :is="section"></component>
        </keep-alive>
    </div>
</template>

<script>
import CenterExtensionsSection from '../Sections/CenterExtensionsSection.vue';
import { ref } from 'vue';
import { event } from '../../Events';
export default {
    name: 'DynamicCenterScreen',
    components: {
        CenterExtensionsSection
    },
    setup() {
        const section = ref('ExplorerSection');

        event.on('changeCenterScreen', ({ newSection, extensionToShow }) => {
            section.value = newSection;
            setTimeout(() => {
                event.emit('extensionToShow', extensionToShow);
            }, 1);
        });

        return { section };
    }
};
</script>
