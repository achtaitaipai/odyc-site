<script lang="ts">
	import type { languages } from 'src/lib/i18n/ui.ts'
	import { useTranslations } from 'src/lib/i18n/utils.ts'
	import Button from 'src/components/Button.svelte'
	import Editor from './Editor.svelte'

	export let baseCode: string
	export let solutionCode: string

	let currentCode = baseCode
	export let lang: keyof typeof languages
	const t = useTranslations(lang)

	const solveCode = () => {
		currentCode = solutionCode
	}
	const resetCode = () => {
		currentCode = baseCode
	}
</script>

<main class="grid sm:grid-cols-[auto_1fr]">
	<div class="flex flex-col h-[calc(100svh_-_var(--header-height))] border-r">
		<div class="shrink-0 bg-white items-center shadow-sm">
			<slot name="header" />
		</div>
		<div class="overflow-auto prose grow h-full px-4 pb-4">
			<slot />
		</div>
		<div class="flex h-16 items-center bg-white px-4 shadow">
			<div class="flex gap-4">
				{#if currentCode !== baseCode}
					<Button on:click={resetCode}>{t('tutorial.reset')}</Button>
				{/if}
				{#if currentCode !== solutionCode}
					<Button on:click={solveCode}>{t('tutorial.solve')}</Button>
				{/if}
			</div>
			<nav class="ml-auto">
				<slot name="pagination" />
			</nav>
		</div>
	</div>
	<Editor bind:code={currentCode} {lang} />
</main>
