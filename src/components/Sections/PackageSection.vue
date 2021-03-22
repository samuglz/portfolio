<template>
    <div
        class="text-menu-color font-bold flex justify-start w-full h-full py-2"
    >
        <pre v-html="info"></pre>
    </div>
</template>

<script>
import { reactive, computed } from 'vue';
import { packages } from '../../data.js';
export default {
    name: 'PackageSection',
    props: {
        projectName: {
            type: String
        }
    },
    setup(props) {
        const packageDetails = reactive(packages);
        const info = computed(() => packageDetails[props.projectName]);
        return { info };
    }
};
</script>
