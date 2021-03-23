<template>
    <div class="flex justify-center items-center py-1 relative">
        <div
            :class="{
                gitPoint: index !== totalCommits - 1
            }"
        ></div>
        <img
            class="w-3 z-10"
            src="../assets/img/Commit_Icon.svg"
            alt="Commit Icon"
        />
    </div>
    <div class="col-span-6 text-sm py-1 pl-4">
        {{ description }}
    </div>
    <div class="text-sm py-1 col-span-2 pl-4 capitalize">
        {{
            index === 0
                ? date
                : day(`${date}`).locale(locale).format('MMM YYYY')
        }}
    </div>
    <div class="text-sm py-1 col-span-2 pl-4">Samuel González</div>
    <div class="text-sm py-1 pl-4">
        {{ hash }}
    </div>
</template>

<script>
import 'dayjs/locale/es';
import 'dayjs/locale/en';
import dayjs from 'dayjs';
import { useI18n } from 'vue-i18n';
import { ref } from 'vue';
export default {
    name: 'GitTableInfo',
    props: {
        index: { type: Number, required: true },
        totalCommits: { type: Number, required: true },
        description: { type: String, required: true },
        date: { type: String, required: true },
        hash: { type: String, required: true }
    },
    setup() {
        const day = dayjs;
        const { locale } = useI18n();
        return { day, locale };
    }
};
</script>

<style scoped>
.gitPoint::before {
    position: absolute;
    content: ' ';
    width: 2px;
    height: 100%;
    background-color: #5e9eff;
    left: calc(50% - 1px);
}
</style>
