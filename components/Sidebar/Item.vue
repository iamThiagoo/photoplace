<template>
    <NuxtLink 
        :to="props.to"
        data-tooltip-target="tooltip-right"
        data-tooltip-placement="right"
        type="button"
        :title="title"
        class="relative p-1.5 inline-block text-violet-700 focus:outline-none transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100"
    >
        <span v-html="props.svgIcon"></span>
    </NuxtLink>
</template>

<script setup lang="ts">

const props = defineProps({
    to: String,
    svgIcon: String,
    title: String
});

</script>

<style scoped>
.tooltip {
  display: none;
}
.tooltip[data-show] {
  display: inline-block;
}
</style>