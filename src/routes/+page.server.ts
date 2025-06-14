import type { ServerLoad } from '@sveltejs/kit';
import { get } from 'svelte/store';
import { getArticlePath } from '$lib/store';

interface Article {
    slug: string;
    metadata: {
        date: string;
        title: string;
        description: string;
        tags: string[];
    };
}

export const load: ServerLoad = async () => {
    const articles = get(getArticlePath);
    return { articles };
};
