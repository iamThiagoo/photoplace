<template>
	<NuxtLayout name="auth" :subtitle="'Um lugar seguro para todas as suas fotos'">
		<Form @submit="onLogin" :validation-schema="schema">

			<Alert v-if="errorMessage" @closeAlert="onCloseAlert" type="danger" :message="errorMessage" />
					
			<InputGroup :type="'email'" :id="'email'" :label="'Email'" :name="'email'" />
			<ErrorMessage name="email" class="text-sm font-bold text-red-900 dark:text-red-700" />
	
			<InputLoginPasswordGroup class="mt-6" />
			<ErrorMessage name="password" class="text-sm font-bold text-red-900 dark:text-red-700" />
					
			<Button type="submit" label="Acessar" :class="'bg-purple-700 mt-8'"></Button>
		</Form>
	
		<p class="mt-10 text-sm text-center text-gray-500">
			Não possui uma conta?
			<NuxtLink to="/auth/sign-in" class="text-purple-600 font-bold leading-6 text-primary hover:opacity-80 dark:text-purple-400"> Crie uma conta </NuxtLink>
		</p>
	</NuxtLayout>
</template>

<script setup lang="ts">

import * as yup from 'yup';

// Page settings
useHead({
    title: "Entrar"
})

// Validation
const schema = yup.object({
	email: yup.string().required().email().label('E-mail'),
	password: yup.string().required().min(8).label('Senha'),
});

//
const email = ref()
const password = ref()
const errorMessage = ref()

const onLogin = () => {
	//
}

</script>