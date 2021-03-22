<template>
    <div class="w-full h-full flex justify-center items center overflow-y-auto">
        <keep-alive>
            <component
                :is="sectionToShow.name"
                v-bind="sectionToShow.props"
            ></component>
        </keep-alive>
    </div>
</template>

<script>
import CenterExtensionsSection from '../Sections/CenterExtensionsSection.vue';
import PackageSection from '../Sections/PackageSection.vue';
import { reactive } from 'vue';
import { event } from '../../Events';
export default {
    name: 'DynamicCenterScreen',
    components: {
        CenterExtensionsSection,
        PackageSection
    },
    setup() {
        const sectionToShow = reactive({ name: 'ExplorerSection' });
        event.on('changeCenterScreen', ({ newSection, componentProps }) => {
            sectionToShow.name = newSection;
            sectionToShow.props = { ...componentProps };
        });
        return { sectionToShow };
    }
};
</script>
