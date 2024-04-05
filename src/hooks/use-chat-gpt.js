import { useState } from 'react';
import chatGpetApi from '@/services/chatGptApi';

export default function useChatGpt({ prompt }) {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [thinking, setThinking] = useState(false);

    const sendMessage = async ({ message }) => {
        setThinking(true);
        try {
            const resp = await chatGpetApi.post('/chat/completions', {
                model: 'gpt-3.5-turbo',
                messages: [
                    {
                        role: 'system',
                        content: prompt,
                    },
                    {
                        role: 'user',
                        content: message,
                    },
                ],
            });

            const choices = resp.data?.choices[0];
            setResponse(choices);
        } catch (err) {
            console.log(err);
            setError(err);
        } finally {
            setThinking(false);
        }
    };

    return { response, error, thinking, sendMessage };
}
