<template>
    <div>
        <div class="flex items-center justify-between mb-2">
            <label for="password" class="block text-sm font-bold leading-6 text-gray-900">Senha</label>
            <div class="text-sm">
                <NuxtLink to="/auth/reset-password" class="font-semibold text-purple-700 hover:text-purple-600">Esqueceu a Senha?</NuxtLink>
            </div>
        </div>
        <div>
            <Field
                type="password" 
                id="password"
                autocomplete="current-password"
                name="password"
                class="bg-gray-50 border border-slate-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                :rules="'required'" >
            </Field>
        </div>
    </div>
</template>