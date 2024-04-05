import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_OPENAI_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

const chatGpetApi = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
    },
});

export default chatGpetApi;
