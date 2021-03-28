<template>
    <div class="flex col justify-center items-center py-1 relative col-span-1">
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
    <div class="col-span-5 md:col-span-6 text-xs md:text-sm py-1 pl-4">
        {{ `(${t(type)}) ${description}` }}
    </div>
    <div
        class="col-span-3 text-xs md:text-sm py-1 md:col-span-2 pl-4 capitalize"
    >
        {{
            index === 0
                ? `${day(`${date.from}`).locale(locale).format('MMM YYYY')} - ${
                      date.to
                  }`
                : `${day(`${date.from}`)
                      .locale(locale)
                      .format('MMM YYYY')} - ${day(`${date.to}`)
                      .locale(locale)
                      .format('MMM YYYY')}`
        }}
    </div>
    <div class="col-span-3 text-xs md:text-sm py-1 md:col-span-2 pl-4">
        Samuel González
    </div>
    <div
        class="col-span-2 text-xs md:text-sm py-1 pl-4 md:col-span-1 hidden md:block"
    >
        {{ hash }}
    </div>
</template>

<script>
import 'dayjs/locale/es';
import 'dayjs/locale/en';
import dayjs from 'dayjs';
import { useI18n } from 'vue-i18n';
export default {
    name: 'GitTableInfo',
    props: {
        index: { type: Number, required: true },
        totalCommits: { type: Number, required: true },
        description: { type: String, required: true },
        date: { type: Object, required: true },
        hash: { type: String, required: true },
        type: { type: String, required: true }
    },
    setup() {
        const day = dayjs;
        const { locale, t } = useI18n();
        return { day, locale, t };
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
