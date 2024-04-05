import { twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';

export const cn = (...inputs) => {
    return twMerge(clsx(inputs));
};

export const getMethodColor = method => {
    const colors = {
        GET: 'green',
        POST: 'yellow',
        PUT: 'blue',
        DELETE: 'red',
        PATCH: 'crimson',
    };

    return colors[method] || 'slate';
};

export const getStatusColor = status => {
    if (status >= 400) {
        return 'red';
    }

    if (status >= 300) {
        return 'blue';
    }

    if (status >= 200) {
        return 'green';
    }

    return 'slate';
};
