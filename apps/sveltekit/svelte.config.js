import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import preprocess from "svelte-preprocess";
import preprocessReact from "svelte-preprocess-react/preprocessReact";
import tailwindcss from "tailwindcss";
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		preprocessReact()
	],
	kit: {
		adapter: adapter()
	}
};

export default config;
