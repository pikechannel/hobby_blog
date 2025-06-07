import path from 'path';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { render } from 'svelte/server';
import { get } from 'svelte/store';
import { getArticlePath } from '$lib/store';

interface ArticleMetadata {
    date: string;
    title: string;
    description: string;
    tags: string[];
}

export const load = (async ({ params }) => {
    try {
        const { id } = params;
        if (!id) {
            throw error(404, 'Article ID is required');
        }

        const filePath = path.join(process.cwd(), 'contents', 'articles', `${id}.svx`);
        const slug = path.basename(filePath, '.svx');

        const importPath = `/contents/articles/${id}.svx`;
        const module = await import(importPath /* @vite-ignore */);
        const metadata = module.metadata;
        const Component: any = module.default;
        const { body } = render(Component);

        const articles = get(getArticlePath);

        return {
            slug,
            articles,
            htmlContent: body,
            metadata
        };
    } catch (err) {
        console.error('Error loading article:', err);
        throw error(404, 'Article not found');
    }
}) satisfies PageServerLoad;