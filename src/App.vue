<template>
    <div class="w-screen h-screen bg-background select-none">
        <TopMenu />
        <CenterScreen />
        <BottomMenu />
    </div>
</template>

<script>
import TopMenu from './components/TopMenu.vue';
import BottomMenu from './components/BottomMenu.vue';
import CenterScreen from './components/CenterScreen.vue';
import { useI18n } from 'vue-i18n';
export default {
    name: 'App',
    components: {
        TopMenu,
        BottomMenu,
        CenterScreen
    },
    setup() {}
};
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style scoped></style>
