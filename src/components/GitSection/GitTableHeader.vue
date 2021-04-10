<template>
    <div
        class="lg:text-base text-sm text-center border-b border-t border-coolGray-500 border-solid font-semibold capitalize col-span-2 lg:col-span-1"
    >
        {{ t('git.graph') }}
    </div>
    <div
        class="col-span-4 lg:text-base text-sm lg:col-span-6 text-center border-b border-t border-coolGray-500 border-solid border-l font-semibold capitalize"
    >
        {{ t('git.description') }}
    </div>
    <div
        class="col-span-3 lg:text-base text-sm text-center border-b border-t lg:col-span-2 border-coolGray-500 border-solid border-l font-semibold capitalize"
    >
        {{ t('git.date') }}
    </div>
    <div
        class="col-span-3 lg:text-base text-sm text-center border-b border-t lg:col-span-2 border-coolGray-500 border-solid border-l font-semibold capitalize"
    >
        {{ t('git.author') }}
    </div>
    <div
        class="col-span-2 hidden lg:block lg:text-base text-sm text-center border-b border-t border-coolGray-500 border-solid border-l font-semibold capitalize lg:col-span-1"
    >
        {{ t('git.commit') }}
    </div>
</template>

<script>
import { useI18n } from 'vue-i18n';
export default {
    name: 'GitTeableHeader',
    setup() {
        const { t } = useI18n();
        return { t };
    }
};
</script>

<style></style>
