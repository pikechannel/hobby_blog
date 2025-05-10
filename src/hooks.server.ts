import { dev } from '$app/environment';
import { sequence } from '@sveltejs/kit/hooks';
import crypto from 'crypto';
import type { Handle } from '@sveltejs/kit';

const generateNonce = () => {
	return crypto.randomBytes(16).toString('base64');
};

const nonceHandler: Handle = async ({ event, resolve }) => {
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