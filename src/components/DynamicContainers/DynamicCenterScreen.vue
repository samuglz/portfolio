<template>
    <div class="w-full h-full flex justify-center items center overflow-y-auto">
        <keep-alive>
            <component
                :is="currentComponent"
                v-bind="currentComponentProps"
            />
        </keep-alive>
    </div>
</template>

<script setup>
import CenterExtensionsSection from '../ExtensionSection/CenterExtensionsSection.vue';
import PackageSection from '../ExplorerSection/PackageSection.vue';
import GitSection from '../GitSection/GitSection.vue';
import ProfileSection from '../ProfileSection/ProfileSection.vue';
import { ref, markRaw } from 'vue';
import { event } from '../../Events';

const currentComponentProps = ref({});
const currentComponent = ref(null);
currentComponent.value = markRaw(ProfileSection);
const sections = {
    GitSection,
    CenterExtensionsSection,
    ProfileSection,
    PackageSection
};

event.on('changeCenterScreen', ({ newSection, componentProps }) => {
    currentComponent.value = markRaw(sections[newSection]);
    currentComponentProps.value = componentProps;
});
</script>
