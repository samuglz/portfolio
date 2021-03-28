<template>
    <div class="w-screen h-screen bg-dark-background select-none">
        <TopMenu />
        <CenterScreen />
        <BottomMenu />
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
const TopMenu = defineAsyncComponent(() =>
    import('./components/TopMenu/TopMenu.vue')
);
const BottomMenu = defineAsyncComponent(() =>
    import('./components/BottomMenu/BottomMenu.vue')
);
const CenterScreen = defineAsyncComponent(() =>
    import('./components/CenterScreen/CenterScreen.vue')
);

export default {
    name: 'App',
    components: {
        TopMenu,
        BottomMenu,
        CenterScreen
    }
};
</script>

<style scoped></style>
