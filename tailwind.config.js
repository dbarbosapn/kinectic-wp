/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/*.{js,jsx,ts,tsx}",
		"./src/components/*.{js,jsx,ts,tsx}",
		"./src/kinectic-cursor/*.tsx",
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
