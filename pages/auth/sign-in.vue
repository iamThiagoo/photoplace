<template>
	<NuxtLayout name="auth" :subtitle="'Um lugar seguro para todas as suas fotos'">
		<Form @submit="onRegister" :validation-schema="schema">

			<DangerAlert @closeAlert="onCloseAlert" v-if="message" :message="message" />
			
			<InputGroup @inputChange="onChangeName" type="text" id="name" label="Nome Completo" name="name" required="true" />
			<ErrorMessage name="name" class="text-sm font-bold text-red-900" />

			<InputGroup @inputChange="onChangeEmail" type="email" id="email" label="Email" name="email" required="true" class="mt-6" />
			<ErrorMessage name="email" class="text-sm font-bold text-red-900" />

			<InputGroup @inputChange="onChangePassword" type="password" id="password" label="Senha" name="password" required="true" class="mt-6" />
			<ErrorMessage name="password" class="text-sm font-bold text-red-900" />

			<Button type="submit" id="" label="Criar Conta" :class="'bg-purple-700 mt-8'"></Button>
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

const onLogin = () => {
	//
}

</script>