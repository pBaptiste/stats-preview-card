/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'lexend': ['"Lexend Deca Variable"', 'sans-serif'],
			},
			colors: {
				'background' : '#1B1937',
				'accent' : '#AB5CDB',
			},
			boxShadow: {
				'card': '0px 20px 20px -10px rgba(23, 25, 41, 0.20)',
			},
		},
	},
	plugins: [],
}
