<template>
    <div class="w-4/5 md:w-full">
        <navbar />
        <div
            class="w-full flex justify-center items-center mt-10 flex-col text-menu-color"
        >
            <img
                class="w-40 h-40 md:w-96 md:h-96 rounded-full"
                src="../../assets/img/profile.png"
                alt="Profile pictures"
            >
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
            <div class="flex items-center justify-between w-40 mt-10">
                <Twitter />
                <Linkedin />
                <Github />
            </div>
        </div>
    </div>
</template>

<script setup>
import Navbar from './NavBar.vue';
import Twitter from '../Buttons/Twitter.vue';
import Linkedin from '../Buttons/Linkedin.vue';
import Github from '../Buttons/Github.vue';

import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>
