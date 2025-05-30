<script lang="ts">
	import { fade } from 'svelte/transition'
	import { click_outside } from 'src/lib/svelteActions/clickOutside.ts'
	import type { languages } from 'src/lib/i18n/ui.ts'
	import { useTranslations } from 'src/lib/i18n/utils.ts'
	import Button from 'src/components/Button.svelte'
	import { createSoundFromTemplate, playSound, TEMPLATES } from 'pfxr'

	export let lang: keyof typeof languages
	const t = useTranslations(lang)

	let isOpen = false

	const soundsOptions = Object.keys(TEMPLATES)

	const audioContext = new AudioContext()

	let seed = 0

	let currentTemplate: keyof typeof TEMPLATES = 'RANDOM'

	const handleKeyDown = (e: KeyboardEvent) => {
		if (e.code === 'Escape') isOpen = false
	}

	const play = () => {
		const sound = createSoundFromTemplate(TEMPLATES[currentTemplate], seed)
		playSound(sound, audioContext, audioContext.destination)
	}
	const copyToClipBoard = () => {
		navigator.clipboard.writeText(`createSound('${currentTemplate}', ${seed})`)
		isOpen = false
	}
</script>

<div class="relative" use:click_outside={() => (isOpen = false)}>
	<Button on:click={() => (isOpen = !isOpen)} on:keydown={handleKeyDown}>
		<slot />
	</Button>
	{#if isOpen}
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		<!-- svelte-ignore a11y-positive-tabindex -->
		<dialog
			class="border p-4 w-80 bg-white bottom-full left-full absolute z-50 flex flex-col"
			transition:fade
			on:keydown={handleKeyDown}
		>
			<div class=" flex flex-col gap-4">
				<div class="flex items-center my-auto gap-2">
					<select
						bind:value={currentTemplate}
						class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-1"
					>
						{#each soundsOptions as value}
							<option {value}>{value}</option>
						{/each}
					</select>
					<input
						type="number"
						bind:value={seed}
						class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-1 text-right"
					/>
				</div>
				<div class="flex gap-4 justify-end">
					<Button on:click={play}>{t('sound.play')}</Button>
					<Button on:click={copyToClipBoard}>{t('sound.copy')}</Button>
				</div>
			</div>
		</dialog>
	{/if}
</div>
