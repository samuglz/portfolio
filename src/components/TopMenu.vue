<template>
    <div class="flex w-full py-2">
        <div class="w-1/12 flex justify-evenly items-center">
            <CloseButton />
            <MinimizeButton />
            <MaximizeButton />
        </div>
        <div
            class="w-11/12 text-center text-menu-color sm:text-sm lg:text-base"
        >
            Samuel González - Portfolio
        </div>
    </div>
</template>

<script setup>
import CloseButton from './Buttons/CloseButton.vue';
import MinimizeButton from './Buttons/MinimizeButton.vue';
import MaximizeButton from './Buttons/MaximizeButton.vue';
</script>

<style scoped></style>
