<template>
    <div class="w-full h-full flex flex-col justify-center items-center">
        <component :is="icon" />
        <div class="py-10 w-3/4 flex flex-col justify-center items-center">
            <div class="text-base md:text-xl text-center text-menu-color">
                {{ t(description) }}
            </div>
            <div class="mt-20 flex justify-center items-center">
                <div
                    v-for="n in rate"
                    :key="n"
                    class="px-2"
                >
                    <Rating class="md:w-14 md:h-14 w-8 h-8" />
                </div>
                <div
                    v-for="n in 5 - rate"
                    :key="n"
                    class="px-2"
                >
                    <StrokeRating class="md:w-14 md:h-14 w-8 h-8" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import { useI18n } from 'vue-i18n';
const HTML = defineAsyncComponent(() => import('../Icons/HtmlIcon.vue'));
const CSS = defineAsyncComponent(() => import('../Icons/CSS.vue'));
const JS = defineAsyncComponent(() => import('../Icons/Javascript.vue'));
const Vue = defineAsyncComponent(() => import('../Icons/Vue.vue'));
const React = defineAsyncComponent(() => import('../Icons/React.vue'));
const Figma = defineAsyncComponent(() => import('../Icons/Figma.vue'));
const Git = defineAsyncComponent(() => import('../Icons/Git.vue'));
const Rating = defineAsyncComponent(() => import('../Icons/Rating.vue'));
const Graphql = defineAsyncComponent(() => import('../Icons/Graphql.vue'));
const StrokeRating = defineAsyncComponent(() =>
    import('../Icons/StrokeRating.vue'));
const Svelte = defineAsyncComponent(() => import('../Icons/Svelte.vue'));

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
        StrokeRating,
        Graphql,
        Svelte
    },
    props: {
        icon: {
            type: String,
            required: true
        },
        id: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        rate: {
            type: Number,
            required: true
        }
    },
    setup () {
        const { t } = useI18n();
        return { t };
    }
};
</script>
