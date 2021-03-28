<template>
    <div
        class="w-full bg-dark-background flex justify-between items-center fixed bottom-0 border-t border-solid border-black text-menu-color text-sm z-30"
    >
        <div class="flex justify-start w-60 items-center">
            <div class="bg-blue-500 px-3">
                <img
                    class="w-3 h-6"
                    src="../../assets/img/Remote_Icon.svg"
                    alt="remote icon"
                />
            </div>
            <div class="flex px-2 items-center">
                <img
                    class="w-5 h-5"
                    src="../../assets/img/Git_Icon.svg"
                    alt="Git Icon"
                />
                <span class="px-1">main</span>
            </div>
            <div class="flex mx-3">
                <img
                    class="w-4 h-5"
                    src="../../assets/img/Sync_Icon.svg"
                    alt="Sync Icon"
                />
            </div>
            <div class="flex justify-evenly items-center w-16">
                <img
                    class="w-4 h-5"
                    src="../../assets/img/Times_Icon.svg"
                    alt="Times Icon"
                />
                <span>0</span>
            </div>
            <div class="flex items-center justify-evenly w-16">
                <img
                    class="w-4 h-5"
                    src="../../assets/img/Danger_Icon.svg"
                    alt="Danger Icon"
                />
                <span>0</span>
            </div>
        </div>
        <div class="flex justify-end w-8/12 items-center px-5">
            <Translation />
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
const Translation = defineAsyncComponent(() => import('./Translation.vue'));
export default {
    name: 'BottomMenu',
    components: {
        Translation
    }
};
</script>

<style scoped></style>
