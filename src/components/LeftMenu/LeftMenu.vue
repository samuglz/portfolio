<template>
    <div class="h-full border-r border-solid border-black flex">
        <LeftButtonPanel />
        <DynamicLeftMenu />
    </div>
</template>

<script setup>
import LeftButtonPanel from '../LeftMenu/LeftButtonPanel.vue';
import DynamicLeftMenu from '../DynamicContainers/DynamicLeftMenu.vue';
</script>

<style scoped></style>
