/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

export default function useTeletype({
    texts = [],
    typingTime = 100,
    deletingTime = 30,
    pauseTime = 1000,
}) {
    const [index, setIndex] = useState(0);
    const [output, setOutput] = useState("");

    useEffect(() => {
        let place = "";
        const typingInterval = setInterval(() => {
            if (place.length < texts[index].length) {
                place += texts[index][place.length];
                setOutput(place);
            } else {
                clearInterval(typingInterval);
                setTimeout(() => {
                    const deletingInterval = setInterval(() => {
                        if (place.length > 0) {
                            place = place.slice(0, place.length - 1);
                            setOutput(place);
                        } else {
                            clearInterval(deletingInterval);
                            setIndex((index + 1) % texts.length);
                        }
                    }, deletingTime);
                }, pauseTime);
            }
        }, typingTime);
        return () => clearInterval(typingInterval);
    }, [index]);

    return output;
}
