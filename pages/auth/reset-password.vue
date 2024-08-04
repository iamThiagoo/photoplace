<template>
	<NuxtLayout name="auth" :subtitle="'Um lugar seguro para todas as suas fotos'">
		<Form @submit="onSendMail" :validation-schema="schema">
			<!-- <DangerAlert @closeAlert="onCloseAlert" v-if="message" :message="message" />-->
					
			<InputGroup :type="'email'" :id="'email'" :label="'Email'" :name="'email'" />
			<ErrorMessage name="email" class="text-sm font-bold text-red-900" />
					
			<Button type="submit" label="Enviar E-mail de Recuperação" :class="'bg-purple-700 mt-8'"></Button>
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

const onSendMail = () => {
	//
}

</script>