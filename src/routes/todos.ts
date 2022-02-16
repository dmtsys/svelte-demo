import { api } from './_api';
import { base, assets } from '$app/paths';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ request, locals }) => {
	// locals.userid comes from src/hooks.js
	const response = await api(request, `${base}/todos/${locals.userid}`);

	if (response.status === 404) {
		// user hasn't created a todo list.
		// start with an empty array
		return {
			body: {
				todos: []
			}
		};
	}

	if (response.ok) {
		return {
			body: {
				todos: await response.json()
			}
		};
	}

	return {
		status: response.status
	};
};

export const post: RequestHandler = async ({ request, locals }) => {
	const form = await request.formData();

	return api(request, `${base}/todos/${locals.userid}`, {
		text: form.get('text')
	});
};

export const patch: RequestHandler = async ({ request, locals }) => {
	const form = await request.formData();

	return api(request, `${base}/todos/${locals.userid}/${form.get('uid')}`, {
		text: form.has('text') ? form.get('text') : undefined,
		done: form.has('done') ? !!form.get('done') : undefined
	});
};

export const del: RequestHandler = async ({ request, locals }) => {
	const form = await request.formData();

	return api(request, `${base}/todos/${locals.userid}/${form.get('uid')}`);
};
