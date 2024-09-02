import { useNuxtApp } from '#app';

const useAuthApi = () => {

    const nuxtApp = useNuxtApp();
    const fetch : any = nuxtApp.$fetch;

    const onUpload = async (files: any): Promise<string> => {
        try {
            const response = await fetch('/files', {
                method: 'POST',
            });

            return response.data;
        } catch (error) {
            throw error;
        }
    };

    return {
        onUpload
    };
};

export default useAuthApi;