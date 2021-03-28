<template>
    <div
        class="w-5/6 md:w-full md:h-full h-full bg-dark-background overflow-x-hidden"
    >
        <DynamicCenterScreen />
    </div>
</template>

<script>
import DynamicCenterScreen from './DynamicContainers/DynamicCenterScreen.vue';
export default {
    name: 'Code Section',
    components: {
        DynamicCenterScreen
    }
};
</script>

<style></style>
