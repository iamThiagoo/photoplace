<template>
	<main class="flex flex-col justify-center min-h-screen px-6 py-12 bg-center bg-no-repeat lg:px-8 auth">     
		<div class="p-10 bg-white rounded-lg py-14 sm:mx-auto">
			<div class="sm:mx-auto sm:w-full sm:max-w-sm">
					<h1 class="text-5xl font-black text-center">PhotoPlace</h1>
					<h2 class="mt-6 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">Um lugar seguro para todas as suas fotos</h2>
			</div>
			
			<div class="mt-3 sm:mx-auto sm:w-full sm:max-w-sm">
				<form @submit.prevent="onLogin" class="space-y-8" action="#" method="POST">
						<DangerAlert @closeAlert="onCloseAlert" v-if="message" :message="message" />
						
						<InputGroup @inputChange="onChangeName" type="text" id="name" label="Nome Completo" name="name" required="true" />
						<InputGroup @inputChange="onChangeEmail" type="email" id="email" label="Email" name="email" required="true" />
						
						<InputGroup @inputChange="onChangePassword" type="password" id="password" label="Senha" name="password" required="true" />
						<InputGroup @inputChange="onChangePasswordConfirmation" type="password" id="password-confirmation" label="Confirme sua senha" name="password-confirmation" required="true" />

						<Button type="submit" id="" label="Criar Conta" backgroundClass="bg-primary"></Button>
				</form>
			
				<p class="mt-10 text-sm text-center text-gray-500">
					Já possui uma conta?
					<router-link to="/login" class="font-semibold leading-6 text-primary hover:opacity-80"> Entrar </router-link>
				</p>
			</div>
		</div>
	</main>
</template>