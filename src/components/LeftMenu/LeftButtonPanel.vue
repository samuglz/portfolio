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
const Documents = defineAsyncComponent(() =>
    import('../Buttons/Documents.vue')
);
const Git = defineAsyncComponent(() => import('../Buttons/Git.vue'));
const Extensions = defineAsyncComponent(() =>
    import('../Buttons/Extensions.vue')
);
const Github = defineAsyncComponent(() => import('../Buttons/Github.vue'));
const Profile = defineAsyncComponent(() => import('../Buttons/Profile.vue'));
import { defineAsyncComponent } from 'vue';
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
