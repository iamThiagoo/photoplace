<template>
    <button @click="toggleDarkMode($colorMode.preference === 'dark' ? 'light' : 'dark')"
        class="h-10 w-10 lg:h-12 lg:w-12 rounded-lg p-1"
        style="margin-top: 0;" 
        :title="title">
        
        <!-- Moon -->
        <svg v-if="$colorMode.preference === 'dark'" name="moon" class="p-1.5 text-violet-500 rounded-lg bg-gray-800 hover:opacity-90 dark:block hidden" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
        </svg>
  
        <!-- Sun -->
        <svg v-else class="p-1.5 text-yellow-500 rounded-lg dark:hidden block hover:bg-violet-100" name="sun" fill="currentColor" viewBox="0 0 20 20">
            <path
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                fill-rule="evenodd" clip-rule="evenodd"></path>
        </svg>
    </button>
</template>
  
<script setup lang="ts">

import { ref, onMounted } from 'vue'
const colorMode = useColorMode()
const title = ref('')
  
onMounted(() => {
    title.value = colorMode.preference === 'dark' ? 'Mudar para tema claro' : 'Mudar para tema escuro'
})
  
const toggleDarkMode = (theme : 'dark' | 'light') => {
    useColorMode().preference = theme
}

</script>  