<template>
	<section class="bg-white">
		<div class="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
			<div class="wf-ull lg:w-1/2">
				<p class="text-sm font-medium text-primary">404</p>
				<h1 class="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">Página não encontrada...</h1>
				<p class="mt-4 text-gray-500">Desculpe, a página que você está procurando não existe. Aqui estão alguns links úteis:</p>

				<div class="flex items-center mt-6 gap-x-3">
					<button @click="backToPreviousPage" class="flex items-center justify-center w-1/2 px-5 py-2 font-semibold text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto hover:bg-gray-100">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
						</svg>
						<span>Voltar</span>
					</button>

					<router-link to="/" class="w-1/2 px-5 py-2 font-semibold text-sm tracking-wide text-white transition-colors duration-200 bg-primary rounded-lg shrink-0 sm:w-auto hover:bg-primary">
						Ir para Home
					</router-link>
				</div>
			</div>

			<div class="relative w-full mt-8 lg:w-1/2 lg:mt-0">
				<img class=" w-full lg:h-[32rem] h-80 md:h-96 rounded-lg object-cover" :src="image" alt="404 Image">
			</div>
		</div>
	</section>
</template>
