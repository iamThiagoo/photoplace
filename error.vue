<template>
	<NuxtLayout>
		<section class="bg-white dark:bg-gray-900">
			<div class="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
				<div class="wf-ull lg:w-1/2">
					<p class="text-sm font-medium text-primary dark:text-white">404</p>
					<h1 class="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-purple-700">Página não encontrada...</h1>
					<p class="mt-4 text-gray-500">Desculpe, a página que você está procurando não existe. Aqui estão alguns links úteis:</p>
	
					<div class="flex items-center mt-6 gap-x-3">
						<button @click="backToPreviousPage" class="flex items-center justify-center w-1/2 px-5 py-2 font-semibold text-sm hover:opacity-90 text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto hover:bg-gray-100">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
								<path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
							</svg>
							<span>Voltar</span>
						</button>
	
						<NuxtLink to="/" class="w-1/2 px-5 py-2 font-semibold text-sm tracking-wide text-white transition-colors hover:opacity-90 duration-200 bg-purple-700 rounded-lg shrink-0 sm:w-auto hover:bg-primary">
							Ir para Home
						</NuxtLink>
					</div>
				</div>
	
				<div class="relative w-full mt-8 lg:w-1/2 lg:mt-0">
					<img class=" w-full lg:h-[32rem] h-80 md:h-96 rounded-lg object-cover" :src="image" alt="404 Image">
				</div>
			</div>
		</section>
	</NuxtLayout>
</template>

<script setup lang="ts">

import { useRouter } from 'vue-router';
const router = useRouter();

// Page settings
useHead({
    title: "Página não encontrada"
})

const images = [
	'https://images.unsplash.com/photo-1720818897755-bbd343e08e19?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	'https://images.unsplash.com/photo-1722855421013-1a0ab2fb0036?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	'https://images.unsplash.com/photo-1722847488685-eddc49ab5010?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	'https://images.unsplash.com/photo-1722855047132-b4be43ca86ed?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
]

const image = images[Math.floor(Math.random() * images.length)];

const backToPreviousPage = () => {
	router.back();
}

</script>
