/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				azul_marino_200:"#0C7D74",
				purple_galaxy:"#7021BF",
				lila_galaxy:"#7121A6",
				azul_cielo_500:"#0099DD"
			}
		},
	},
	plugins: [],
}
