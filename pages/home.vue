<template>
    <NuxtLayout name="default">
        <template #content>
            <div class="pt-10 font-lg">
                <div class="flex justify-between">
                    <h3 class="text-2xl font-lg dark:text-white">
                        📁 Seus últimos Uploads...
                    </h3>
                    <div class="flex overflow-hidden bg-white border border-gray-700 divide-x divide-gray-700 rounded-lg dark:bg-gray-900 dark:border-gray-700 dark:divide-gray-700">
                        <button class="flex items-center px-3 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-base sm:px-6 dark:hover:bg-gray-800 dark:text-gray-300 gap-x-3 hover:bg-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                            </svg>
                            <span class="text-sm">Upload de Arquivo</span>
                        </button>

                        <button class="flex items-center px-3 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-base sm:px-6 dark:hover:bg-gray-800 dark:text-gray-300 gap-x-3 hover:bg-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                            </svg>
                            <span class="text-sm">Upload de Pasta</span>
                        </button>
                    </div>
                </div>

                <section>
                    <div class="animate-pulse">
                        <div class="grid grid-cols-1 gap-10 mt-6 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-5 2xl:grid-cols-8 lg:grid-cols-3">
                            <div class="w-full cursor-pointer hover:opacity-80">
                                <div class="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600">
                                    <img class="w-full h-64 object-cover rounded-lg" src="https://images.unsplash.com/photo-1723754166148-2ceb2d84890f?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                                </div>
                                
                                <div class="flex flex-row justify-between items-center mt-4">
                                    <div>
                                        <h1 class="w-full h-2 text-gray-800 rounded-lg dark:text-gray-200">screenshoot.png</h1>
                                        <p class="w-full text-sm h-2 mt-4 text-gray-800 rounded-lg dark:text-gray-200">Upload em 18/08/2024 16:30</p>
                                    </div>
                                    <div>
                                        <button class="dark:text-gray-200 rounded-lg text-gray-800 hover:border-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full cursor-pointer hover:opacity-80">
                                <div class="w-full h-64 flex justify-center items-center dark:text-gray-300 text-gray-600 bg-gray-300 rounded-lg dark:bg-gray-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-24 w-24">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                                    </svg>
                                </div>
                                
                                <div class="flex flex-row justify-between items-center mt-4">
                                    <div>
                                        <h1 class="w-full h-2 text-gray-800 rounded-lg dark:text-gray-200">Minhas Atividades</h1>
                                        <p class="w-full text-sm h-2 mt-4 text-gray-800 rounded-lg dark:text-gray-200">Upload em 18/08/2024 17:30</p>
                                    </div>
                                    <div>
                                        <button class="dark:text-gray-200 rounded-lg text-gray-800 hover:border-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <!--<div class="w-full cursor-pointer hover:opacity-80">
                                <div class="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>
                                
                                <h1 class="w-32 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                                <p class="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                            </div>
                            <div class="w-full cursor-pointer hover:opacity-80">
                                <div class="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>
                                
                                <h1 class="w-32 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                                <p class="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                            </div>
                            <div class="w-full cursor-pointer hover:opacity-80">
                                <div class="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>
                                
                                <h1 class="w-32 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                                <p class="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                            </div>
                            <div class="w-full cursor-pointer hover:opacity-80">
                                <div class="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>
                                
                                <h1 class="w-32 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                                <p class="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                            </div>
                            <div class="w-full cursor-pointer hover:opacity-80">
                                <div class="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>
                                
                                <h1 class="w-32 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                                <p class="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                            </div>
                            <div class="w-full cursor-pointer hover:opacity-80">
                                <div class="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>
                                
                                <h1 class="w-32 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                                <p class="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                            </div>-->
                        </div>
                    </div>
                </section>
            </div>
        </template>
	</NuxtLayout>
</template>


<script setup lang="ts">

// Page settings
useHead({
    title: "Home"
})

</script>