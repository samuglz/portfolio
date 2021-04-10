<template>
    <GraphPoint
        class="col-span-2 lg:col-span-1"
        :first="index === 0"
        :last="index === totalCommits - 1"
    />
    <div
        class="col-span-4 lg:col-span-6 text-xs lg:text-sm py-1 pl-1 lg:pl-4 flex items-center"
    >
        {{ `(${t(type)}) ${description}` }}
    </div>
    <div
        class="col-span-3 text-xs lg:text-sm py-1 lg:col-span-2 pl-4 capitalize flex items-center"
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
    <div
        class="col-span-3 text-xs lg:text-sm py-1 lg:col-span-2 pl-4 flex items-center"
    >
        Samuel González
    </div>
    <div
        class="col-span-2 text-xs lg:text-sm py-1 pl-4 lg:col-span-1 hidden lg:flex lg:items-center"
    >
        {{ hash }}
    </div>
</template>

<script>
import GraphPoint from './GraphPoint.vue';
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
    components: {
        GraphPoint
    },
    setup() {
        const day = dayjs;
        const { locale, t } = useI18n();
        return { day, locale, t };
    }
};
</script>
