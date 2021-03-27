<template>
    <div class="w-full">
        <navbar />
        <div
            class="w-full flex justify-center items-center mt-10 flex-col text-menu-color"
        >
            <img
                class="w-96 h-96 rounded-full"
                src="../../assets/img/profile.jpg"
                alt="Profile pictures"
            />
            <div class="text-6xl mt-10">Samuel González Alonso</div>
            <div class="text-xl mt-5">
                {{ t('profile.description') }}
            </div>
            <a
                class="mt-4 hover:underline text-blue-400 text-xl md:text-4xl"
                href="assets/Curriculum.pdf"
            >
                Currículum Vitae
            </a>
            <div class="flex items-center w-96 justify-evenly mt-20">
                <Twitter />
                <Linkedin />
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../ProfileSection/NavBar.vue';
import Twitter from '../Buttons/Twitter.vue';
import Linkedin from '../Buttons/Linkedin.vue';
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
