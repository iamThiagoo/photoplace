import { defineStore } from 'pinia';
import type { IAuthUser } from '~/types/IAuthUser';

export interface IAuthState {
    user: IAuthUser | null;
    userAuthenticated: boolean;
    token: string | null;
}

export const useAuthStore = defineStore('auth', {
    state: (): IAuthState => ({
        token: null,
        user: null,
        userAuthenticated: false,
    }),
    actions: {
        setUser(user: IAuthUser) {
            this.$state.user = user;
            this.$state.userAuthenticated = true;
            localStorage.setItem('user', JSON.stringify(user));
        },
        setToken(token: string) {
            this.$state.token = token;
            localStorage.setItem('token', token);
        },
        clearUser() {
            this.$state.token = null;
            this.$state.user = null;
            this.$state.userAuthenticated = false;
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        },
    },
    getters: {
        isUserAuthenticated: (state: IAuthState): boolean => state.userAuthenticated,
        getUser: (state: IAuthState): IAuthUser | null => state.user,
        getToken: (state: IAuthState): string | null => state.token,
    },
    persist: true
});