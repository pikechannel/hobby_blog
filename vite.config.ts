import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';
import { glob } from 'glob';

const svxFiles = glob.sync('contents/**/*.svx').reduce((acc: Record<string, string>, file: string) => {
	acc[file] = path.resolve(file);
	return acc;
}, {});

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		rollupOptions: {
			input: {
				main: 'src/app.html',
				...svxFiles
			}
		}
	},
	server: {
		fs: {
			allow: ['..']
		}
	}
});
