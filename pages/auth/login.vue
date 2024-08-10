<template>
	<NuxtLayout name="auth" :subtitle="'Um lugar seguro para todas as suas fotos'">
		<Form @submit="onLoginForm" :validation-schema="schema">

			<Alert v-if="errorMessage" @closeAlert="onCloseAlert" type="danger" :message="errorMessage" />
					
			<InputGroup @change="onChangeEmail" :type="'email'" :id="'email'" :label="'Email'" :name="'email'" />
			<ErrorMessage name="email" class="text-sm font-bold text-red-900 dark:text-red-700 mt-5" />
	
			<InputLoginPasswordGroup @change="onChangePassword" class="mt-6" />
			<ErrorMessage name="password" class="text-sm font-bold text-red-900 dark:text-red-700 mt-2" />
					
			<Button type="submit" label="Acessar" :class="'bg-purple-700 mt-8'"></Button>
		</Form>
	
		<p class="mt-10 text-sm text-center text-gray-500">
			Não possui uma conta?
			<NuxtLink to="/auth/sign-in" class="text-purple-600 font-bold leading-6 text-primary hover:opacity-80 dark:text-purple-400"> Crie uma conta </NuxtLink>
		</p>
	</NuxtLayout>
</template>

<script setup lang="ts">

import { ref } from 'vue';
import * as yup from 'yup';
import useAuth from '~/composables/api/auth';

const { onLogin } = useAuth();

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
const email: Ref<string> = ref('');
const password: Ref<string> = ref('');
const errorMessage: Ref<string | null> = ref('');

const onLoginForm = async () => {
	try {
		await onLogin(email.value, password.value);
	} catch (error) {
		errorMessage.value = error.response._data.message ?? error.message;
	}
}

const onChangeEmail = (value: string) => {
	email.value = value;
}

const onChangePassword = (value: string) => {
	password.value = value;
}

const onCloseAlert = async () => {
	errorMessage.value = null;
}

</script>