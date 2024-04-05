import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_CRONHOOK_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_CRONHOOK_API_KEY;

const cronHookApi = axios.create({
    baseURL: API_URL,
    headers: {
        Authorization: `Bearer ${API_KEY}`,
    },
});

export default cronHookApi;
