<template>
    <div class="loader animate-spin w-8 h-8" />
</template>

<script setup>
import { defineComponent } from 'vue';
defineComponent({
    name: 'LoaderComponent'
});
</script>

<style scoped>
.loader {
    border: solid 3px #cfd0d1;
    border-bottom-color: #3d3d3d;
    border-radius: 50%;
}
</style>
