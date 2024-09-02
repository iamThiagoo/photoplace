import { useAuthStore } from '~/stores/auth';

export default defineNuxtRouteMiddleware(async(to, from) => {
    const authStore = useAuthStore();
    const token = authStore.getToken;

    if (token) {
        await checkToken(token);
    }
    
    let unathorizedRoutes  = [
        '/auth/login',
        '/auth/register',
        '/auth/sign-in',
        '/auth/reset-password',
    ];
    
    if (
        !token && 
        !unathorizedRoutes.includes(to.path) && 
        to.path != '/'
    ) {
        return navigateTo('/auth/login');
    }

    if (
        token && 
        unathorizedRoutes.includes(to.path)
    ) {
        return navigateTo('/home');
    }
});