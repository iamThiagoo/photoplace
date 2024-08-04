<template>
	<main class="flex flex-col justify-center min-h-screen px-6 py-12 bg-center bg-no-repeat lg:px-8 auth">      
		<div class="p-10 bg-white rounded-lg py-14 sm:mx-auto">
			<div class="sm:mx-auto sm:w-full sm:max-w-sm">
				<h1 class="text-5xl font-black text-center">PhotoPlace</h1>
				<h2 class="mt-6 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">Um lugar seguro para todas as suas fotos</h2>
			</div>
		
			<div class="mt-3 sm:mx-auto sm:w-full sm:max-w-sm">
				<form @submit.prevent="onResetPassword" class="space-y-8" action="#" method="POST">
					<SuccessAlert @closeAlert="onCloseAlert" v-if="successMessage" :message="successMessage" />
					<DangerAlert @closeAlert="onCloseAlert" v-if="errorMessage" :message="errorMessage" />
					
					<InputGroup @inputChange="onChangeEmail" type="email" id="email" label="Email" name="email" required="true" />
					<Button type="submit" id="" label="Enviar E-mail de Recuperação" backgroundClass="bg-primary"></Button>
				</form>
		
				<p class="mt-10 text-sm text-center text-gray-500">
					Já possui uma conta?
					<router-link to="/login" class="font-semibold leading-6 text-primary hover:opacity-80"> Entrar </router-link>
				</p>
			</div>
		</div>
	</main>
</template>