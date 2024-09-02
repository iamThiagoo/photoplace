import { jwtDecode } from "jwt-decode";
import { useAuthStore } from '~/stores/auth';

export const checkToken = async(token : string) => {
    try {
        const authStore = useAuthStore();
        const decodedToken: any = jwtDecode(token);
        const currentTime = Math.floor(Date.now() / 1000);

        if (decodedToken.exp < currentTime) {
            authStore.clearUser(); 
        }
    } catch (error) {
        const authStore = useAuthStore();
        console.error('Erro ao decodificar o token:', error);
        authStore.clearUser();
    }
}