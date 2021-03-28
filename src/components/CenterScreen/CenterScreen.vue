<template>
    <div class="h-total w-full flex">
        <LeftMenu />
        <CodeSection />
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
const LeftMenu = defineAsyncComponent(() => import('../LeftMenu/LeftMenu.vue'));
const CodeSection = defineAsyncComponent(() => import('./CodeSection.vue'));
export default {
    name: 'CenterScreen',
    components: {
        LeftMenu,
        CodeSection
    }
};
</script>

<style scoped>
.h-total {
    height: 93.2%;
}
</style>
