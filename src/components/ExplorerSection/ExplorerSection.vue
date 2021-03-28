<template>
    <div class="w-full h-full text-menu-color">
        <div class="uppercase lg:text-base font-bold p-2">
            {{ t('explorer.menu') }}
        </div>
        <div
            class="w-full py-2 bg-dark-background uppercase px-2 font-bold flex justify-start items-center cursor-pointer"
            @click="handleExplorerMenu"
        >
            <ArrowButton :opened="isOpen" />
            <div>{{ t('explorer.submenu') }}</div>
        </div>
        <div v-show="isOpen" class="bg-background w-full">
            <template v-for="project in dataProjects" :key="project.id">
                <ProjectCard
                    :title="project.title"
                    :projectName="project.readme"
                />
            </template>
        </div>
    </div>
</template>

<script>
import { projects } from '../../data.js';
import { ref } from 'vue';
import ProjectCard from './ProjectCard.vue';
import ArrowButton from '../Buttons/ArrowButton.vue';
import { useI18n } from 'vue-i18n';

export default {
    name: 'ExplorerSection',
    components: {
        ArrowButton,
        ProjectCard
    },
    setup() {
        const { t } = useI18n();
        const isOpen = ref(true);
        const handleExplorerMenu = () => {
            isOpen.value = !isOpen.value;
        };
        const dataProjects = projects;
        return { t, handleExplorerMenu, isOpen, dataProjects };
    }
};
</script>
