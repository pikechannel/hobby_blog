import path from 'path';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { getArticles } from '../../../lib/getArticles';
import { render } from 'svelte/server';

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

        // build時に「.svelte-kit/output/server/entries/pages/article/_id_/_page.server.ts.jsのimport部分のURLに「.js」の拡張子が付与されないため場合分け
        const isDev = process.env.NODE_ENV === 'development';
        const importPath = isDev 
            ? `../../../../contents/articles/${id}.svx`
            : `../../../../contents/articles/${id}.svx.js`;

        const module = await import(importPath /* @vite-ignore */);
        const metadata = module.metadata;
        const Component: any = module.default;
        const { body } = render(Component);

        const articles =  getArticles();;

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