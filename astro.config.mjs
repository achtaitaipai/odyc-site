import { defineConfig } from 'astro/config'
import svelte from '@astrojs/svelte'
import tailwind from '@astrojs/tailwind'
import ghAlerts from 'remark-gh-alerts'
import expressiveCode from 'astro-expressive-code'

// https://astro.build/config
export default defineConfig({
	site: 'https://odyc.dev/',
	integrations: [
		svelte(),
		tailwind(),
		expressiveCode({
			themes: 'github-dark-high-contrast'
		})
	],
	markdown: {
		remarkPlugins: [ghAlerts]
	}
})

