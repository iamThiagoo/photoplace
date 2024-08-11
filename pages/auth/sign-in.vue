<template>
	<NuxtLayout name="auth" :subtitle="'Um lugar seguro para todas as suas fotos'">
		<Form @submit="onRegister" :validation-schema="schema">

			<!-- <Alert v-if="errorMessage" @closeAlert="onCloseAlert" :message="errorMessage" />-->
			
			<InputGroup @inputChange="onChangeName" type="text" id="name" label="Nome Completo" name="name" required="true" />
			<ErrorMessage name="name" class="text-sm font-bold text-red-900 dark:text-red-700" />

			<InputGroup @inputChange="onChangeEmail" type="email" id="email" label="Email" name="email" required="true" class="mt-6" />
			<ErrorMessage name="email" class="text-sm font-bold text-red-900 dark:text-red-700" />

			<InputGroup @inputChange="onChangePassword" type="password" id="password" label="Senha" name="password" required="true" class="mt-6" />
			<ErrorMessage name="password" class="text-sm font-bold text-red-900 dark:text-red-700" />

			<Button type="submit" id="" label="Criar Conta" :class="'bg-purple-700 mt-8'"></Button>
			
			<div class="flex items-center justify-between mt-6 mb-6">
				<span class="w-2/5 border-b dark:border-gray-600 lg:w-2/6"></span>
            	<a href="#" class="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">ou</a>
				<span class="w-2/5 border-b dark:border-gray-400 lg:w-2/6"></span>
        	</div>
			
			<a href="#" class="flex items-center justify-center px-6 py-2 mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
				<svg class="w-6 h-6 mx-2" viewBox="0 0 40 40">
					<path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
					<path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
					<path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
					<path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
				</svg>

				<span class="mx-2">Continue com o Google</span>
			</a>
		</Form>
	
		<p class="mt-10 text-sm text-center text-gray-500">
			Já possui uma conta?
			<NuxtLink to="/auth/login" class="text-purple-600 font-bold leading-6 text-primary hover:opacity-80"> Entrar </NuxtLink>
		</p>
	</NuxtLayout>
</template>


<script setup lang="ts">

import * as yup from 'yup';

// Page settings
useHead({
    title: "Registre-se"
})

// Validation
const schema = yup.object({
	name: yup.string().required().min(2).label('Nome Completo'),
  	email: yup.string().required().email().label('E-mail'),
  	password: yup.string().required().min(8).label('Senha'),
});

//
const email = ref()
const password = ref()
const name = ref()
const errorMessage = ref()

const onLogin = () => {
	//
}

</script>