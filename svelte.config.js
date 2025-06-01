import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter(),
		files: {
			assets: 'static',
			lib: 'src/lib',
			routes: 'src/routes',
			serviceWorker: 'src/service-worker',
			appTemplate: 'src/app.html'
		},
		alias: {
			$src: 'src',
			$lib: 'src/lib',
		},
		csp: {
			mode: 'auto',
			directives: {
				'default-src': ["'self'"],
				'script-src': [
					"'self'",
					"nonce-%nonce%",
					'https://cdn.jsdelivr.net',
					'https://cdnjs.cloudflare.com'
				],
				'script-src-attr': ["'none'"],
				'style-src': [
					"'self'",
					"'unsafe-inline'",
					'https://fonts.googleapis.com',
					'https://cdnjs.cloudflare.com'
				],
				'img-src': ["'self'", 'data:', 'https:'],
				'connect-src': ["'self'"],
				'font-src': ["'self'", 'https://fonts.gstatic.com', 'https://cdnjs.cloudflare.com', 'data:'],
				'object-src': ["'none'"],
				'media-src': ["'self'"],
				'frame-src': ["'none'"],
				'base-uri': ["'self'"],
				'form-action': ["'self'"],
				'frame-ancestors': ["'none'"],
				'upgrade-insecure-requests': true,
			}
		}
	}
};

export default config;
