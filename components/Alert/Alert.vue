<template>
    <div :class="alertClasses" role="alert">
        <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
        </svg>
        <span class="sr-only">Info</span>
        <div>
            <span class="font-medium text-sm">{{ props.message }}</span>
        </div>
        <button @click="onCloseAlert" type="button" class="ms-auto -mx-1.5 -my-1.5 bg-yellow-50 text-gray-500 rounded-lg focus:ring-2 focus:ring-gray-400 p-1.5 hover:bg-gray-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-yellow-300 dark:hover:bg-gray-700" aria-label="Close">
            <span class="sr-only">Close</span>
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
        </button>
    </div>
</template>
  
<script setup lang="ts">

type AlertType = 'info' | 'danger' | 'success' | 'warning' | 'dark';

const props = defineProps<{
    type: AlertType;
    message: string;
}>();

const emit = defineEmits(['closeAlert']);

const alertClasses = computed(() => {
    switch (props.type) {
        case 'info':
            return 'flex items-center p-2.5 px-4 mb-4 text-blue-800 rounded-lg bg-blue-50 border-2 border-blue-200 dark:bg-gray-800 dark:text-blue-400';
        case 'danger':
            return 'flex items-center p-2.5 px-4 mb-4 text-red-800 rounded-lg bg-red-50 border-2 border-red-200 dark:bg-gray-800 dark:text-red-400';
        case 'success':
            return 'flex items-center p-2.5 px-4 mb-4 text-green-800 rounded-lg bg-green-50 border-2 border-green-200 dark:bg-gray-800 dark:text-green-400';
        case 'warning':
            return 'flex items-center p-2.5 px-4 mb-4 text-yellow-800 rounded-lg bg-yellow-50 border-2 border-yellow-200 dark:bg-gray-800 dark:text-yellow-300';
        case 'dark':
            return 'flex items-center p-2.5 px-4 rounded-lg bg-gray-50 dark:bg-gray-800';
        default:
            return '';
    }
});


const onCloseAlert = () => {
    emit('closeAlert');
}

</script>
  