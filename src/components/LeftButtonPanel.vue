<template>
    <div class="w-16 md:w-20 flex flex-col items-center bg-background">
        <Documents />
        <Git />
        <Extensions />
        <Github />
        <Profile />
    </div>
</template>

<script>
import Documents from './Buttons/Documents.vue';
import Git from './Buttons/Git.vue';
import Extensions from './Buttons/Extensions.vue';
import Github from './Buttons/Github.vue';
import Profile from './Buttons/Profile.vue';
export default {
    components: {
        Documents,
        Git,
        Extensions,
        Github,
        Profile
    }
};
</script>

<style></style>
