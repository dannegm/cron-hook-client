import { useEffect, useRef } from 'react';

export default function useTimeout(helper, timeInMilliseconds, { autoRun } = { autoRun: true }) {
    const $timeout = useRef();

    const clear = () => {
        clearTimeout($timeout.current);
    };

    const start = () => {
        clear();
        $timeout.current = setTimeout(helper, timeInMilliseconds);
    };

    useEffect(() => {
        if (autoRun) {
            start();
        }

        return () => {
            clear();
        };
    }, []);

    return { start, clear };
}
