<template>
    <div class="h-total w-full flex">
        <LeftMenu />
        <CodeSection />
    </div>
</template>

<script setup>
import LeftMenu from './LeftMenu.vue';
import CodeSection from './CodeSection.vue';
</script>

<style scoped>
.h-total {
    height: 93.2%;
}
</style>
