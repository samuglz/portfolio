<template>
    <div
        class="text-center border-b border-t border-coolGray-500 border-solid font-semibold capitalize"
    >
        {{ t('git.graph') }}
    </div>
    <div
        class="col-span-6 text-center border-b border-t border-coolGray-500 border-solid border-l font-semibold capitalize"
    >
        {{ t('git.description') }}
    </div>
    <div
        class="text-center border-b border-t col-span-2 border-coolGray-500 border-solid border-l font-semibold capitalize"
    >
        {{ t('git.date') }}
    </div>
    <div
        class="text-center border-b border-t col-span-2 border-coolGray-500 border-solid border-l font-semibold capitalize"
    >
        {{ t('git.author') }}
    </div>
    <div
        class="text-center border-b border-t border-coolGray-500 border-solid border-l font-semibold capitalize"
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
