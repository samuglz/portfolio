<template>
    <div class="w-full h-full flex flex-col justify-center items-center">
        <component :is="icon"></component>
        <div class="py-10 w-3/4 flex flex-col justify-center items-center">
            <div class="text-base md:text-xl text-center text-menu-color">
                {{ t(description) }}
            </div>
            <div class="mt-20 flex justify-center items-center">
                <div class="px-2" v-for="n in rate" :key="n">
                    <Rating class="md:w-14 md:h-14 w-8 h-8" />
                </div>
                <div class="px-2" v-for="n in 5 - rate" :key="n">
                    <StrokeRating class="md:w-14 md:h-14 w-8 h-8" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HTML from '../Icons/HtmlIcon.vue';
import CSS from '../Icons/CSS.vue';
import JS from '../Icons/Javascript.vue';
import Vue from '../Icons/Vue.vue';
import React from '../Icons/React.vue';
import Figma from '../Icons/Figma.vue';
import Git from '../Icons/Git.vue';
import Rating from '../Icons/Rating.vue';
import StrokeRating from '../Icons/StrokeRating.vue';
import { useI18n } from 'vue-i18n';
export default {
    name: 'CenterExtensionsSection',
    components: {
        HTML,
        CSS,
        JS,
        Git,
        React,
        Vue,
        Figma,
        Rating,
        StrokeRating
    },
    props: {
        icon: {
            type: String
        },
        id: {
            type: Number
        },
        description: {
            type: String
        },
        rate: {
            type: Number
        }
    },
    setup() {
        const { t } = useI18n();
        return { t };
    }
};
</script>

<style></style>
