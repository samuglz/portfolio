<template>
    <div
        class="md:text-base text-sm text-center border-b border-t border-coolGray-500 border-solid font-semibold capitalize col-span-1"
    >
        {{ t('git.graph') }}
    </div>
    <div
        class="col-span-5 md:text-base text-sm md:col-span-6 text-center border-b border-t border-coolGray-500 border-solid border-l font-semibold capitalize"
    >
        {{ t('git.description') }}
    </div>
    <div
        class="col-span-3 md:text-base text-sm text-center border-b border-t md:col-span-2 border-coolGray-500 border-solid border-l font-semibold capitalize"
    >
        {{ t('git.date') }}
    </div>
    <div
        class="col-span-3 md:text-base text-sm text-center border-b border-t md:col-span-2 border-coolGray-500 border-solid border-l font-semibold capitalize"
    >
        {{ t('git.author') }}
    </div>
    <div
        class="col-span-2 hidden md:block md:text-base text-sm text-center border-b border-t border-coolGray-500 border-solid border-l font-semibold capitalize md:col-span-1"
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
