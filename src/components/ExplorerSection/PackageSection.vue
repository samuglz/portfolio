<template>
    <div
        class="text-menu-color font-bold flex justify-start w-full h-full py-2 md:px-10"
    >
        <pre v-html="info"></pre>
    </div>
</template>

<script setup>
import { reactive, computed, defineComponent } from 'vue';
import { packages } from '../../data.js';
defineComponent({
    name: 'PackageSection'
})
const props = defineProps({
    projectName: {
        type: String
    }
})
const packageDetails = reactive(packages);
const info = computed(() => packageDetails[props.projectName]);
</script>
