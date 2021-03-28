<template>
    <div class="w-4/5 md:w-full">
        <navbar />
        <div
            class="w-full flex justify-center items-center mt-10 flex-col text-menu-color"
        >
            <img
                class="w-40 h-40 md:w-96 md:h-96 rounded-full"
                src="../../assets/img/profile.jpg"
                alt="Profile pictures"
            />
            <div class="text-xl md:text-6xl mt-10 text-center">
                Samuel González Alonso
            </div>
            <div class="text-sm md:text-xl mt-5 text-center">
                {{ t('profile.description') }}
            </div>
            <a
                class="mt-4 hover:underline text-blue-400 text-xl md:text-4xl text-center"
                href="/Curriculum.pdf"
            >
                Currículum Vitae
            </a>
            <div class="flex items-center w-full justify-evenly mt-10">
                <Twitter />
                <Linkedin />
            </div>
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
const Navbar = defineAsyncComponent(() => import('./NavBar.vue'));
const Twitter = defineAsyncComponent(() => import('../Buttons/Twitter.vue'));
const Linkedin = defineAsyncComponent(() => import('../Buttons/Linkedin.vue'));

import { useI18n } from 'vue-i18n';
export default {
    name: 'ProfileSection',
    components: {
        Navbar,
        Twitter,
        Linkedin
    },
    setup() {
        const { t } = useI18n();
        return { t };
    }
};
</script>

<style></style>
