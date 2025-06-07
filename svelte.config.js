import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			runtime: 'nodejs18.x',
			split: false,
			envPrefix: ['VITE_', 'PUBLIC_']
		})
	},
	preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)],
	extensions: [".svelte", ".svx"]
};

export default config;
