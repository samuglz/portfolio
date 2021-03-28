<template>
    <div
        class="point"
        :class="{
            first,
            last
        }"
    >
        <div class="circle"></div>
    </div>
</template>

<script>
export default {
    name: 'GraphPoint',
    props: {
        first: {
            type: Boolean,
            default: false
        },
        last: {
            type: Boolean,
            default: false
        }
    }
};
</script>

<style scoped>
.point {
    display: grid;
    justify-items: center;
    grid-template-rows: 1fr min-content 1fr;
}

.point::before,
.point::after {
    content: '';
    width: 2px;
    background-color: #5e9eff;
}

.point.first::before {
    opacity: 0;
}

.point.last::after {
    opacity: 0;
}
.circle {
    border-radius: 50%;
    background: #5e9eff;
    padding: 5px;
    width: 5px;
    height: 5px;
}
</style>
