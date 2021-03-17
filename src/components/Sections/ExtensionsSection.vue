<template>
    <div class="w-full h-full overflow-y-auto overflow-x-hidden">
        <div
            v-for="skill in dataSkills"
            :key="skill.id"
            class="w-full h-24 flex flex-col justify-center bg-background hover:bg-coolGray-700 cursor-pointer"
        >
            <h1 class="w-full text-menu-color font-bold text-lg mx-2">
                {{ skill.text }}
            </h1>
            <p class="description text-xs w-44 text-menu-color py-1 mx-2">
                {{ skill.description }}
            </p>
            <div class="flex justify-between items-center ml-2 mr-6 py-1">
                <span class="text-xs w-30 text-menu-color">
                    Samuel González
                </span>
                <img
                    class="w-4"
                    src="../../assets/img/Setting_Icon.svg"
                    alt="Settings Icon"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { skills } from '../../data.js';
export default {
    name: 'ExtensionsSection',
    setup() {
        const dataSkills = skills;
        return { dataSkills };
    }
};
</script>

<style scoped>
.description {
    overflow: hidden; /* make sure it hides the content that overflows */
    white-space: nowrap; /* don't break the line */
    text-overflow: ellipsis;
}
</style>
