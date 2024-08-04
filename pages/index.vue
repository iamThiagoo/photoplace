<template>

    <!-- Start block -->
    <header class="fixed w-full">
        <nav class="bg-white border-gray-200 py-6 dark:bg-gray-900">
            <div class="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                
                <NuxtLink to="/" class="flex items-center">
                    <span class="app-title self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Photoplace</span>
                </NuxtLink>

                <div class="flex items-center lg:order-2">

                    <button @click="toggleDarkMode($colorMode.preference === 'dark' ? 'light' : 'dark')"
                        class="h-12 w-12 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                        
                        <!-- Moon -->
                        <svg v-if="$colorMode.preference === 'light'" name="moon" class="fill-violet-700 block dark:hidden" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                        </svg>

                        <!-- Sun -->
                        <svg v-else class="fill-yellow-500 hidden dark:block" name="sun" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                fill-rule="evenodd" clip-rule="evenodd"></path>
                        </svg>
                    </button>

                    <NuxtLink to="auth/login" class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-bold rounded-lg font-medium px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Entrar</NuxtLink>
                    <NuxtLink to="auth/sign-in" class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-base px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800 font-bold">Registre-se</NuxtLink>
                </div>
            </div>
        </nav>
    </header>
    <!-- End block -->
    
    <!-- Start block -->
    <section class="bg-white dark:bg-gray-900">
        <div class="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12 lg:py-48">
            <div class="mr-auto place-self-center lg:col-span-7">
                <h1 class="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">Transforme suas fotos em lembranças eternas de forma <br> <span class="text-purple-600">gratuita</span>.</h1>
                <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">oferecemos a você a possibilidade de armazenar suas imagens com segurança e praticidade, sem nenhum custo. Nossa plataforma intuitiva permite que você organize suas fotos com facilidade, acesse-as de qualquer lugar e compartilhe-as com quem você quiser.</p>
                <div class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                    <NuxtLink href="https://github.com/iamThiagoo/photoplace" target="_blank" class="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border-2 border-gray-300 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        <img src="/svg/github.svg" class="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" /> Código do Projeto - Github
                    </NuxtLink>
                </div>
            </div>     
            <div class="hidden flex justify-center lg:mt-0 lg:col-span-5 lg:flex">
                <NuxtImg src="/images/banner.png" class="w-11/12" alt="Banner" />
            </div>        
        </div>
    </section>
    <!-- End block -->
        
    <!-- Start block -->
    <section class="bg-gray-50 dark:bg-gray-800">
        <div class="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
            <!-- Row -->
            <div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                <div class="text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Integre-se com suas ferramentas favoritas</h2>
                    <p class="mb-8 font-light lg:text-xl">Ofereça experiências de armazenamento e compartilhamento de imagens de forma rápida e eficiente, sem a complexidade das soluções tradicionais de gerenciamento de mídia. Acelere o desenvolvimento e facilite a integração com suas ferramentas existentes.</p>
                    <ul role="list" class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                        <li class="flex space-x-3">
                            <svg class="flex-shrink-0 w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Integração contínua com outras plataformas</span>
                        </li>
                        <li class="flex space-x-3">
                            <svg class="flex-shrink-0 w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Fluxo de trabalho simplificado</span>
                        </li>
                        <li class="flex space-x-3">
                            <svg class="flex-shrink-0 w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Gestão de imagens simplificada</span>
                        </li>
                    </ul>
                    <p class="mb-8 font-light lg:text-xl">Ofereça experiências de armazenamento e compartilhamento de imagens de forma rápida e eficiente, sem a complexidade das soluções tradicionais.</p>
                </div>
                <!-- <img class="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src="./images/feature-1.png" alt="imagem de recurso 1">-->
            </div>
            <!-- Row -->
            <div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                <div></div>
                <!-- <img class="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src="./images/feature-2.png" alt="imagem de recurso 2"> -->
                <div class="text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Aprimoramos sua experiência com imagens</h2>
                    <p class="mb-8 font-light lg:text-xl">Nosso compromisso é fornecer uma plataforma que atenda às suas necessidades de armazenamento e compartilhamento de imagens de maneira eficiente e segura, sem complicações desnecessárias.</p>
                    <ul role="list" class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                        <li class="flex space-x-3">
                            <svg class="flex-shrink-0 w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Relatórios e painéis dinâmicos</span>
                        </li>
                        <li class="flex space-x-3">
                            <svg class="flex-shrink-0 w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Modelos personalizados</span>
                        </li>
                        <li class="flex space-x-3">
                            <svg class="flex-shrink-0 w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Fluxo de trabalho otimizado</span>
                        </li>
                        <li class="flex space-x-3">
                            <svg class="flex-shrink-0 w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Automação avançada</span>
                        </li>
                    </ul>
                    <p class="font-light lg:text-xl">Nosso compromisso é oferecer uma plataforma intuitiva e eficiente para suas necessidades de imagens, sem a complexidade dos sistemas tradicionais.</p>
                </div>
            </div>
        </div>
    </section>
    <!-- End block -->

    <!-- Start block -->
    <section class="bg-white dark:bg-gray-900">
        <div class="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
            <div class="col-span-2 mb-8">
                <p class="text-lg font-medium text-purple-600 dark:text-purple-500">Reconhecido Globalmente</p>
                <h2 class="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">Confiado por mais de 1 usuário e 1 equipe no mundo inteiro  🌍</h2>
                <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">Nossos altos padrões de segurança e conformidade estão no centro de tudo o que fazemos. Trabalhamos continuamente para garantir a proteção de suas informações e das de seus clientes.</p>
                <div class="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
                    <div>
                        <NuxtLink href="https://github.com/iamThiagoo/photoplace" target="blank" class="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700">
                            Visite o código fonte no Github
                            <svg class="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </NuxtLink>
                    </div>
                </div>
            </div>
            <div class="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
                <div>
                    <svg class="w-10 h-10 mb-2 text-blue-600 md:w-12 md:h-12 dark:text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 6a2 2 0 012-2h10a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V6zm12 1a1 1 0 11-2 0 1 1 0 012 0zM3 14a2 2 0 012-2h10a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2zm12 1a1 1 0 11-2 0 1 1 0 012 0z" clip-rule="evenodd"></path></svg>
                    <h3 class="mb-2 text-2xl font-bold dark:text-white">99.9% de Disponibilidade</h3>
                    <p class="font-light text-gray-500 dark:text-gray-400">Garantimos alta disponibilidade com apenas pequenas manutenções programadas.</p>
                </div>
                <div>
                    <svg class="w-10 h-10 mb-2 text-blue-600 md:w-12 md:h-12 dark:text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path></svg>
                    <h3 class="mb-2 text-2xl font-bold dark:text-white">Mais de 1 Usuário pelo Mundo</h3>
                    <p class="font-light text-gray-500 dark:text-gray-400">Usado por milhões de pessoas globalmente para gerenciar e armazenar suas imagens.</p>
                </div>
                <div>
                    <svg class="w-10 h-10 mb-2 text-blue-600 md:w-12 md:h-12 dark:text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clip-rule="evenodd"></path></svg>
                    <h3 class="mb-2 text-2xl font-bold dark:text-white">Presença em 1 país</h3>
                    <p class="font-light text-gray-500 dark:text-gray-400">Utilizado em diversos países para armazenamento e compartilhamento de imagens.</p>
                </div>
                <div>
                    <svg class="w-10 h-10 mb-2 text-blue-600 md:w-12 md:h-12 dark:text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
                    <h3 class="mb-2 text-2xl font-bold dark:text-white">Mais de 1 Transição Diária</h3>
                    <p class="font-light text-gray-500 dark:text-gray-400">Gerenciamos uma alta quantidade de transações relacionadas a imagens todos os dias.</p>
                </div>
            </div>
        </div>
    </section>
    <!-- End block -->

    <!-- Start block -->
    <section class="bg-gray-50 dark:bg-gray-800">
        <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
            <figure class="max-w-screen-md mx-auto">
                <svg class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
                </svg> 
                <blockquote>
                    <p class="text-xl font-medium text-gray-900 md:text-2xl dark:text-white">"O Photoplace é incrível! Fiquei realmente surpreso com o que oferecem. O serviço é rápido, ágil e possui uma excelente usabilidade."</p>
                </blockquote>
                <figcaption class="flex items-center justify-center mt-6 space-x-3">
                    <img class="w-6 h-6 rounded-full" src="https://avatars.githubusercontent.com/u/69599810?v=4" alt="profile picture">
                    <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                        <div class="pr-3 font-medium text-gray-900 dark:text-white">Thiago Ferreira</div>
                        <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">Apenas mais um usuário satisfeito</div>
                    </div>
                </figcaption>
            </figure>
        </div>
        </section>
    <!-- End block -->
    
    <footer class="bg-white dark:bg-gray-900">
        <div class="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
            <div class="text-center">
                <a href="#" class="app-title flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white"> Photoplace </a>
                <span class="block text-sm text-center text-gray-500 dark:text-gray-400">© 2024 Photoplace™. Todos os Direitos Reservados. </span>
                <span class="block text-sm text-center text-gray-500 dark:text-gray-400 mt-2">Construído com <a href="https://flowbite.com" class="text-purple-600 hover:underline dark:text-purple-500">Nuxt</a> and <a href="https://tailwindcss.com" class="text-purple-600 hover:underline dark:text-purple-500">Tailwind CSS</a>.</span>
            </div>
        </div>
    </footer>

</template>

<script setup lang="ts">

const colorMode = useColorMode()

useHead({
    title: "Página Inicial"
})

const toggleDarkMode = (theme : 'dark' | 'light') => {
    useColorMode().preference = theme
}

</script>