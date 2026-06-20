export const fetcher = async (endpoint, options = {}) => {
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

    const res = await fetch(BASE_URL + endpoint, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            ...options.headers,
        },
        body: options.body
            ? JSON.stringify(options.body)
            : undefined,
    });

    if (!res.ok) {
        const error = await res.json().catch(() => ({}));
        throw new Error(error.message || "API Error");
    }

    return res.json();
};