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
import CenterExtensionsSection from '../ExtensionSection/CenterExtensionsSection.vue';
import PackageSection from '../ExplorerSection/PackageSection.vue';
import GitSection from '../GitSection/GitSection.vue';
import ProfileSection from '../ProfileSection/ProfileSection.vue';
import { reactive } from 'vue';
import { event } from '../../Events';
export default {
    name: 'DynamicCenterScreen',
    components: {
        CenterExtensionsSection,
        PackageSection,
        GitSection,
        ProfileSection
    },
    setup() {
        const sectionToShow = reactive({ name: 'ProfileSection' });
        event.on('changeCenterScreen', ({ newSection, componentProps }) => {
            sectionToShow.name = newSection;
            sectionToShow.props = { ...componentProps };
        });
        return { sectionToShow };
    }
};
</script>
