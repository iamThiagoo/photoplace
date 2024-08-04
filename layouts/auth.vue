
<template>
	<main class="flex flex-col justify-center min-h-screen px-6 py-12 bg-center bg-no-repeat lg:px-8 auth">
		<div class="p-10 bg-white rounded-lg py-14 sm:mx-auto">
			<div class="sm:mx-auto sm:w-full sm:max-w-sm">
				<h1 class="app-title text-5xl font-black text-center">PhotoPlace</h1>
				<h2 class="mt-6 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">{{ props.subtitle }}</h2>
			</div>
		
			<div class="mt-3 sm:mx-auto sm:w-full sm:max-w-sm">
				<slot></slot>
			</div>
		</div>
	</main>
</template>

<script setup lang="ts">

const props = defineProps({
    subtitle: {type: String}
})

</script>