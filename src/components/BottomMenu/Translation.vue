<template>
    <div class="uppercase cursor-pointer">
        <div
            class="flex justify-center items-center bg-dark-background-background hover:bg-coolGray-700 px-2"
            @click="handleMenu"
        >
            <img
                v-show="locale === 'es'"
                class="w-4"
                src="../../assets/img/Spain_Icon.svg"
                alt="Spain Flag"
            >
            <img
                v-show="locale === 'en'"
                class="w-4"
                src="../../assets/img/US_Icon.svg"
                alt="US Flag"
            >
            <div class="uppercase mx-1 font-bold">
                {{ locale }}
            </div>
        </div>
        <div
            v-show="isOpen"
            class="absolute -top-12 w-16 right-4 shadow-sm py-4 bg-background"
        >
            <div
                class="flex justify-center items-center"
                @click="changeLocale('es')"
            >
                <img
                    v-show="locale !== 'es'"
                    class="w-4"
                    src="../../assets/img/Spain_Icon.svg"
                    alt="Spain Flag"
                >
                <div
                    v-show="locale === 'en'"
                    class="uppercase mx-1 font-bold"
                >
                    es
                </div>
            </div>
            <div
                class="flex justify-center items-center"
                @click="changeLocale('en')"
            >
                <img
                    v-show="locale !== 'en'"
                    class="w-4"
                    src="../../assets/img/US_Icon.svg"
                    alt="US Flag"
                >
                <div
                    v-show="locale === 'es'"
                    class="uppercase mx-1 font-bold"
                >
                    en
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
export default {
    name: 'Translation',
    setup () {
        const { locale } = useI18n();
        const isOpen = ref(false);
        const handleMenu = () => {
            isOpen.value = !isOpen.value;
        };
        const changeLocale = lenguage => {
            locale.value = lenguage;
            handleMenu();
        };
        return { locale, isOpen, handleMenu, changeLocale };
    }
};
</script>

<style></style>
