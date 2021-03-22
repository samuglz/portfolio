<template>
    <div class="text-menu-color">{{ projectName }}</div>
</template>

<script>
export default {
    name: 'PackageSection',
    props: {
        projectName: {
            type: String
        }
    },
    setup() {}
};
</script>
