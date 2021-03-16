<template>
    <div class="w-80 h-full border-r border-solid border-black flex">
        <LeftButtonPanel />
        <DynamicLeftMenu />
    </div>
</template>

<script setup>
import LeftButtonPanel from './LeftButtonPanel.vue';
import DynamicLeftMenu from './DynamicContainers/DynamicLeftMenu.vue';
</script>

<style scoped></style>
