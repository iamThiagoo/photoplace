<template>
    <button 
        :type="type"
        class="flex w-full justify-center rounded-md px-3 py-2.5 text-base font-semibold leading-6 text-white shadow-sm hover:opacity-80 focus:ring-4 focus:ring-purple-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
        :class="computedClass">
        {{ label }}
    </button>
</template>

<script setup lang="ts">

const props = defineProps<{
    label: string;
    type?: string;
    class?: string;
}>()

const { label, type = 'button', class: className } = props
const computedClass = computed(() => className || 'bg-purple-700')
</script>
