<template>
    <div class="w-16 md:w-20 flex flex-col items-center bg-background">
        <Documents />
        <Git />
        <Extensions />
        <Github />
        <Profile />
    </div>
</template>

<script setup>
// import { defineAsyncComponent } from 'vue';
import Documents from '../Buttons/Documents.vue';
import Git from '../Buttons/Git.vue';
import Github from '../Buttons/Github.vue';
import Extensions from '../Buttons/Extensions.vue';
import Profile from '../Buttons/Profile.vue';
</script>

<style></style>
