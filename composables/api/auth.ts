import type { IUser } from "~/types/User";

const fetch : any = useNuxtApp();
const apiBaseUrl = process.env.APP_API_BASE_URL;

async function onLogin(email : string, password : string) : Promise<IUser> {
    return await fetch('/auth', {
        method: 'POST',
        body: {
            email, 
            password
        },
    });
}


async function onRegister(name: string, email : string, password: string) : Promise<IUser> {
    return await fetch('/auth/create', {
        method: 'POST',
        body: {
            name,
            email, 
            password
        },
    });
}


async function onSendEmailToResetPassword(email: string) : Promise<Boolean> {
    return await fetch('/auth/send-email-reset-password', {
        method: 'POST',
        body: {
            email
        },
    }); 
}


async function onResetPassword(token: string, password: string) : Promise<Boolean> {
    return await fetch('/auth/reset-password', {
        method: 'POST',
        body: {
            token,
            password
        },
    }); 
}