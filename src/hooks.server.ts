import { sequence } from '@sveltejs/kit/hooks';
import { randomBytes } from 'crypto';
import type { Handle } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';

const generateNonce = () => {
	return randomBytes(16).toString('base64');
};

const generateContentsList = () => {
	const outputFile = path.join(process.cwd(), 'static', 'json', 'contents-list.json');
	
	const modules = import.meta.glob('/contents/articles/*.svx', { eager: true });
	const contents = Object.keys(modules).map(key => key.replace('/contents/', ''));
	
	fs.writeFileSync(outputFile, JSON.stringify(contents, null, 2));
	console.log('Contents list generated successfully.');
};

const nonceHandler: Handle = async ({ event, resolve }) => {
	generateContentsList();
	const nonce = generateNonce();
	event.locals.nonce = nonce;

	const response = await resolve(event, {
		transformPageChunk: ({ html }) => {
			if (html.includes('%nonce%')) {
				return html.replace(/%nonce%/g, nonce);
			}
			return html;
		}
	});

	return response;
};

export const handle = sequence(nonceHandler);

