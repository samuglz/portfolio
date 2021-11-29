<template>
    <div class="text-menu-color w-full overflow-y-auto">
        <div
            id="git"
            class="grid grid-cols-12"
        >
            <GitTableHeader />
            <template
                v-for="(commit, index) in commits"
                :key="index"
            >
                <GitTableInfo
                    :index="index"
                    :total-commits="commits.length"
                    :description="commit.description"
                    :date="commit.date"
                    :hash="commit.hash"
                    :type="commit.type"
                />
            </template>
        </div>
    </div>
</template>

<script setup>
import { defineAsyncComponent, reactive, defineComponent } from 'vue';
import { commitsInfo } from '../../data.js';
const GitTableHeader = defineAsyncComponent(() =>
    import('./GitTableHeader.vue')
);
const GitTableInfo = defineAsyncComponent(() => import('./GitTableInfo.vue'));

defineComponent({
    name: 'GitSection'
});
const commits = reactive(commitsInfo.reverse());
const digestMessage = async message => {
    const msgUint8 = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
    return hashHex;
};
const getHash = async text => {
    const digestBuffer = await digestMessage(text);
    return digestBuffer.substr(0, 8);
};

commits.forEach(async commit => {
    commit.hash = await getHash(commit.description);
});
</script>

<style scoped></style>
