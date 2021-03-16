<template>
    <div class="w-full h-full text-menu-color">
        <div class="uppercase lg:text-base font-bold p-2">explorer</div>
        <div
            class="w-full py-2 bg-dark-background uppercase px-2 font-bold flex justify-start items-center"
        >
            <ArrowButton />
            <div>projects</div>
        </div>
    </div>
</template>

<script>
import ArrowButton from '../Buttons/ArrowButton.vue';
export default {
    name: 'ExplorerSection',
    components: {
        ArrowButton
    },
    setup() {}
};
</script>

<style></style>
