import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { render } from 'svelte/server';

export const load = (async () => {
    try {
        const module = await import("/contents/profile.svx" /* @vite-ignore */);
        const metadata = module.metadata;
        const Component:any = module.default;
        const { body } = render(Component);

        return {
            htmlContent: body,
            metadata
        };
    } catch (err) {
        console.error('Error loading profile:', err);
        throw error(404, 'Profile not found');
    }
}) satisfies PageServerLoad;