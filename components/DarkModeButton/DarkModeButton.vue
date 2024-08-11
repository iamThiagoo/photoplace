<template>
    <button @click="toggleDarkMode($colorMode.preference === 'dark' ? 'light' : 'dark')"
        class="h-10 w-10 lg:h-12 lg:w-12 rounded-lg p-1"
        style="margin-top: 0;" 
        :title="colorMode.preference === 'dark' ? 'Mudar para tema claro' : 'Mudar para tema escuro'">
        
        <!-- Moon -->
        <svg v-if="$colorMode.preference === 'light'" name="moon" class="p-1.5 text-violet-500 rounded-lg bg-violet-100 hover:opacity-90 block dark:hidden" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
        </svg>

        <!-- Sun -->
        <svg v-else class="p-1.5 text-yellow-500 rounded-lg dark:bg-gray-800 hidden dark:block hover:bg-gray-700" name="sun" fill="currentColor" viewBox="0 0 20 20">
            <path
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                fill-rule="evenodd" clip-rule="evenodd"></path>
        </svg>
    </button>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

const toggleDarkMode = (theme : 'dark' | 'light') => {
    useColorMode().preference = theme
}
</script>