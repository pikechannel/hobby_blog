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
			envPrefix: ['VITE_', 'PUBLIC_'],
			output: {
				format: 'esm',
				chunkFileNames: '[name].js',
				entryFileNames: '[name].js',
				assetFileNames: '[name][extname]'
			}
		}),
		files: {
			assets: 'static',
			lib: 'src/lib',
			routes: 'src/routes',
			serviceWorker: 'src/service-worker',
			appTemplate: 'src/app.html',
			errorTemplate: 'src/error.html'
		}
	},
	preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)],
	extensions: [".svelte", ".svx"]
};

export default config;
