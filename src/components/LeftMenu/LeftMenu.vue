<template>
    <div class="h-full border-r border-solid border-black flex">
        <LeftButtonPanel />
        <DynamicLeftMenu />
    </div>
</template>

<script setup>
import { defineAsyncComponent, defineComponent } from 'vue';
import LeftButtonPanel from '../LeftMenu/LeftButtonPanel.vue';

const DynamicLeftMenu = defineAsyncComponent(() =>
    import('../DynamicContainers/DynamicLeftMenu.vue')
);
defineComponent({
    name: 'LeftMenu'
})
</script>

<style scoped></style>
