<template>
    <div class="h-center-screen w-full flex">
        <LeftMenu />
        <CodeSection />
    </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
const LeftMenu = defineAsyncComponent(() => import('../LeftMenu/LeftMenu.vue'));
const CodeSection = defineAsyncComponent(() => import('./CodeSection.vue'));
</script>

<style>
.h-center-screen {
    height: calc(100vh - 3.5rem);
}
</style>
