import { join } from 'path'
import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms';
import { skeleton } from '@skeletonlabs/tw-plugin'

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {
			fontFamily: {
				quicksand: "Quicksand"
			}
		},
	},
	plugins: [
		forms,
		skeleton({
			themes: {
				preset: [
					{
						name: 'gold-nouveau',
						enhancements: true,
					},
				],
			},
		}),
	],
} satisfies Config;
