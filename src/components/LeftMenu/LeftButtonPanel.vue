<template>
    <div class="w-16 md:w-20 flex flex-col items-center bg-background">
        <Documents />
        <Git />
        <Extensions />
        <Profile />
    </div>
</template>

<script setup>
import Documents from '../Buttons/Documents.vue';
import Git from '../Buttons/Git.vue';

import Extensions from '../Buttons/Extensions.vue';
import Profile from '../Buttons/Profile.vue';
</script>

<style></style>
