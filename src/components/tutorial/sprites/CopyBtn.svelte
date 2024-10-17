<script lang="ts">
	import type { languages } from 'src/lib/i18n/ui'
	import { useTranslations } from 'src/lib/i18n/utils'
	import { fly } from 'svelte/transition'
	export let toCopy: string
	export let lang: keyof typeof languages
	let copied = false

	const t = useTranslations(lang)
	export const handleClick = () => {
		navigator.clipboard.writeText(`\`
${toCopy}
\``)
		copied = true
		setTimeout(() => (copied = false), 1000)
	}
</script>

{#if copied}
	<span
		class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold bg-gray-50 p-2 rounded"
		transition:fly>{t('sprites.copied')}</span
	>
{:else}
	<button
		transition:fly
		on:click={handleClick}
		class="absolute bottom-2 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 grid content-center bg-gray-200/90 border-gray-500 border w-full h-1/2 rounded justify-center text-gray-900 font-semibold"
		>{t('sprites.copy')}</button
	>
{/if}
