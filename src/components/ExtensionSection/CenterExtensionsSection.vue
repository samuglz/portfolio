<template>
    <div class="w-full h-full flex flex-col justify-center items-center">
        <suspense>
            <template #default>
                <Skill
                    :icon="icon"
                    :id="id"
                    :description="description"
                    :rate="rate"
                />
            </template>
            <template #fallback>
                <Loader />
            </template>
        </suspense>
    </div>
</template>

<script>
import Loader from '../Loader.vue';
import Skill from './Skill.vue';
export default {
    name: 'CenterExtensionsSection',
    components: {
        Loader,
        Skill
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
    }
};
</script>

<style></style>
