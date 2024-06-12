import axios from 'axios';

// Wrapper for the fetch API to make HTTP requests (Patrón adaptador)
export const httpClientPlugin = {

    get: async (url: string) => {
        const { data } = await axios.get(url);
        return data;

        // const resp = await fetch(url);
        // return await resp.json();
    },

    post: async (url: string, body: any) =>{},
    put: async (url: string, body: any) =>{}, // No poner any en la vida real, debemos ponerle un tipo de dato
    delete: async (url: string) =>{},
};