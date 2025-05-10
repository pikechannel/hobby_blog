import { dev } from '$app/environment';
import { sequence } from '@sveltejs/kit/hooks';
import crypto from 'crypto';

const generateNonce = () => {
	return crypto.randomBytes(16).toString('base64');
};

const nonceHandler = async ({ event, resolve }) => {
	const nonce = generateNonce();
	event.locals.nonce = nonce;
	
	const response = await resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%nonce%', nonce)
	});

	return response;
};

export const handle = sequence(nonceHandler); 