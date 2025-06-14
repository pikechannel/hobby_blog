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
		}),
		csrf: {
			checkOrigin: true
		},
		csp: {
			mode: 'auto',
			directives: {
				'default-src': ['self'],
				'script-src': ['self', 'unsafe-inline', 'unsafe-eval', 'https://cdnjs.cloudflare.com', 'https://cdn.jsdelivr.net'],
				'style-src': ['self', 'unsafe-inline', 'https://cdnjs.cloudflare.com', 'https://cdn.jsdelivr.net', 'https://fonts.googleapis.com'],
				'img-src': ['self', 'data:', 'https:'],
				'font-src': ['self', 'https://cdnjs.cloudflare.com', 'https://cdn.jsdelivr.net', 'https://fonts.gstatic.com'],
				'connect-src': ['self'],
				'frame-src': ['self'],
				'object-src': ['none'],
				'base-uri': ['self'],
				'form-action': ['self']
			}
		}
	},
	preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)],
	extensions: [".svelte", ".svx"]
};

export default config;
