<template>
	<NuxtLayout name="auth" :subtitle="'Um lugar seguro para todas as suas fotos'">
		<Form @submit="onSendMail" :validation-schema="schema">

			<!-- <Alert v-if="successMessage" @closeAlert="onCloseAlert" :message="successMessage" /> -->
			<!-- <Alert v-if="errorMessage" @closeAlert="onCloseAlert" :message="errorMessage" /> -->
					
			<InputGroup :type="'email'" :id="'email'" :label="'Email'" :name="'email'" />
			<ErrorMessage name="email" class="mt-5 text-sm font-bold text-red-900 dark:text-red-700" />
					
			<Button type="submit" label="Recuperar Conta" :class="'bg-purple-700 mt-8'"></Button>
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
    title: "Entrar"
})

// Validation
const schema = yup.object({
	email: yup.string().required().email().label('E-mail')
});

//
const email = ref()
const successMessage = ref()
const errorMessage = ref()

const onSendMail = () => {
	//
}

</script>