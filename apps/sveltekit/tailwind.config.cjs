// const config = require("tailwind-config/tailwind.config.js");

// module.exports = config;
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
        './src/**/*.{html,js,svelte,ts}',
        '../../packages/**/*.{js,jsx,ts,tsx}'
    ],
	theme: {
		extend: {}
	},
	plugins: []
};
