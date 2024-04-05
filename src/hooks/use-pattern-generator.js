import { useEffect, useState } from "react";
import useChatGpt from "./use-chat-gpt";

const DEFAULT_PATTERN = "0 */12 * * *";

const PROMPT = `You are an API that will ALWAYS respond to me in JSON format.
I will give you a time description and you will always respond to me in CRON format to convert tasks.
If what I tell you is not compatible with a cron, by default give me the pattern \`${DEFAULT_PATTERN}\`.
NO HUMAN TEXT, NO PREFIXES, NO TAGS, NO QUOTES, NO DESCRIPTIONS just the cron.
The text needs to be read by software.
The JSON contract should be as follows:
\`\`\`json
{
   pattern: "<cron-pattern>"
}
\`\`\``;

export default function usePatternGenerator() {
    const [pattern, setPattern] = useState(null);

    const { response, error, thinking, sendMessage } = useChatGpt({ prompt: PROMPT });

    useEffect(() => {
        if (error) {
            setPattern(DEFAULT_PATTERN);
        }

        if (response) {
            const rawContent = response?.message.content;
            const content = JSON.parse(rawContent) || {};
            setPattern(content?.pattern);
        }
    }, [response, error]);

    return [pattern, thinking, sendMessage];
}
