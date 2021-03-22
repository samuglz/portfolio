<template>
    <div class="text-menu-color">{{ readmeFile }}</div>
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
