import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { glob } from 'glob';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const svxFiles = glob.sync('contents/**/*.svx').reduce((acc: Record<string, string>, file: string) => {
	acc[file] = resolve(file);
	return acc;
}, {});

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		rollupOptions: {
			input: {
				main: 'src/app.html',
				...svxFiles
			},
			output: {
				manualChunks: undefined
			}
		},
	},
	// 静的ファイルのコピー設定
	publicDir: 'static',
	server: {
		fs: {
			allow: ['contents']
		}
	},
	// ダイナミックインポートの設定
	resolve: {
		alias: {
			'$contents': resolve(__dirname, 'contents')
		}
	}
});
