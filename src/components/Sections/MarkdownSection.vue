<template>
    <div class="text-menu-color">{{ readmeFile }}</div>
</template>

<script>
export default {
    name: 'MarkdownSection',
    props: {
        readmeFile: {
            type: String
        }
    },
    setup() {}
};
</script>
