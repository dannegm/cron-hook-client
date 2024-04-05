import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

export const cn = (...inputs) => {
    return twMerge(clsx(inputs));
};

export const getMethodColor = (method) => {
    const colors = {
        GET: "green",
        POST: "yellow",
        PUT: "blue",
        DELETE: "red",
        PATCH: "crimson",
    };

    return colors[method] || "slate";
};

export const getStatusColor = (status) => {
    if (status >= 400) {
        return "red";
    }

    if (status >= 300) {
        return "blue";
    }

    if (status >= 200) {
        return "green";
    }

    return "slate";
};

export const getStatusBgClassName = (status) => {
    if (status >= 400) {
        return "bg-red-900/30";
    }

    if (status >= 300) {
        return "bg-blue-900/30";
    }

    if (status >= 200) {
        return "bg-green-900/30";
    }

    return "bg-slate-900/30";
};
