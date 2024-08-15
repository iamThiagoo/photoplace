import useAuth from "~/composables/api/auth";

export default defineNuxtRouteMiddleware((to, from) => {

    const isAuthenticated = useAuth().isAuthenticated();

    if (!isAuthenticated) {
        return navigateTo('/auth/login')
    }
});