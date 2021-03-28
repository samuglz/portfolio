<template>
    <div class="h-full border-r border-solid border-black flex">
        <LeftButtonPanel />
        <DynamicLeftMenu />
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import LeftButtonPanel from '../LeftMenu/LeftButtonPanel.vue';

const DynamicLeftMenu = defineAsyncComponent(() =>
    import('../DynamicContainers/DynamicLeftMenu.vue')
);
export default {
    name: 'LeftMenu',
    components: {
        LeftButtonPanel,
        DynamicLeftMenu
    }
};
</script>

<style scoped></style>
