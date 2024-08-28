<template>
    <NuxtLink 
        :to="props.to"
        data-tooltip-target="tooltip-right"
        data-tooltip-placement="right"
        type="button"
        class="p-1.5 inline-block text-violet-700 focus:outline-none transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100"
    >
        <span v-html="props.svgIcon"></span>
    </NuxtLink>

    <div 
        id="tooltip-right" 
        role="tooltip" 
        class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
    >
        {{ props.tooltipLabel }}
        <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
</template>

<script setup lang="ts">

import { initFlowbite } from 'flowbite';

const props = defineProps({
    to: String,
    svgIcon: String,
    tooltipLabel: String,
});

onMounted(() => {
    initFlowbite()
})

</script>

<style scoped>
/* Ensure your styles include visibility management */
.tooltip {
  display: none;
}
.tooltip[data-show] {
  display: inline-block;
}
</style>