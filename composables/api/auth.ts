import type { IUser } from '~/types/User';
import { useNuxtApp } from '#app';

const useAuthApiApi = () => {

    const nuxtApp = useNuxtApp();
    const fetch : any = nuxtApp.$fetch;

    const onLogin = async (email: string, password: string): Promise<string> => {
        try {
            const response = await fetch('/auth', {
                method: 'POST',
                body: JSON.stringify({ email, password }),
                headers: { 'Content-Type': 'application/json' }
            });

            localStorage.setItem('token', response.data);
            return response.data;
        } catch (error) {
            throw error;
        }
    };

    const onRegister = async (name: string, email: string, password: string): Promise<string>  => {
        try {
            const response = await fetch('/auth/create', {
                method: 'POST',
                body: JSON.stringify({ name, email, password }),
                headers: { 'Content-Type': 'application/json' }
            });

            localStorage.setItem('token', response);
            return response;

        } catch (error) {
            throw error;
        }
    };

    const onSendEmailToResetPassword = async (email: string): Promise<boolean> => {
        try {
            const response = await fetch('/auth/send-email-reset-password', {
                method: 'POST',
                body: JSON.stringify({ email }),
                headers: { 'Content-Type': 'application/json' }
            });
            return response as boolean;
        } catch (error) {
            throw error;
        }
    };

    const onResetPassword = async (token: string, password: string): Promise<boolean> => {
        try {
            const response = await fetch('/auth/reset-password', {
                method: 'POST',
                body: JSON.stringify({ token, password }),
                headers: { 'Content-Type': 'application/json' }
            });
            return response as boolean;
        } catch (error) {
            throw error;
        }
    };

    return {
        onLogin,
        onRegister,
        onSendEmailToResetPassword,
        onResetPassword
    };
};

export default useAuthApiApi;