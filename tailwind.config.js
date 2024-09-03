/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['Inter', 'sans-serif']
		},
		extend: {
			colors: {
				blue: colors.sky
			},
			borderWidth: {
				1.5: '1.5px'
			}
		}
	},
	plugins: []
};
