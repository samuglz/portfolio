<template>
    <div class="w-20 flex flex-col justify-between items-center">
        <div class="flex flex-col items-center">
            <Documents />
            <Git />
            <Extensions />
            <Github />
        </div>
        <div>
            <Profile />
        </div>
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
