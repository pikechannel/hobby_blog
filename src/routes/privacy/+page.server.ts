import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { render } from 'svelte/server';

export const load = (async () => {
    try {
        const module = await import("/contents/privacy.svx" /* @vite-ignore */);
        
        const metadata = module.metadata;
        const Component:any = module.default;
        const { body } = render(Component);

        return {
            htmlContent: body,
            metadata
        };
    } catch (err) {
        console.error('Error loading privacy policy:', err);
        throw error(404, 'Privacy policy not found');
    }
}) satisfies PageServerLoad; 