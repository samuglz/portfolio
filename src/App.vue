<template>
    <div class="w-screen h-screen bg-background">
        <TopMenu />
        <CenterScreen />
        <BottomMenu />
    </div>
</template>

<script setup>
import TopMenu from './components/TopMenu.vue';
import BottomMenu from './components/BottomMenu.vue';
import CenterScreen from './components/CenterScreen.vue';
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style scoped></style>
