<template>
    <div class="w-screen h-screen bg-dark-background select-none">
        <TopMenu />
        <CenterScreen />
        <BottomMenu />
    </div>
</template>

<script>
import TopMenu from './components/TopMenu/TopMenu.vue';
import BottomMenu from './components/BottomMenu/BottomMenu.vue';
import CenterScreen from './components/CenterScreen/CenterScreen.vue';
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
