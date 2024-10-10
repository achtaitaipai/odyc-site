<script lang="ts" type="module">
	import { onMount } from 'svelte'
	import Editor from 'svelte-codemirror-editor'
	import { editorConfig } from 'src/lib/editorConfig.ts'
	import { languages } from 'src/lib/i18n/ui.ts'
	import { useTranslations } from 'src/lib/i18n/utils'
	import { parseCode, prepareCode, updateIframe } from 'src/lib/processCode.ts'
	import Button from './Button.svelte'
	import Paint from './Paint/index.svelte'
	import Sound from './Sound/index.svelte'

	export let lang: keyof typeof languages
	const t = useTranslations(lang)
	let currentCode = ''
	let iframe: HTMLIFrameElement
	let inputFile: HTMLInputElement
	let withVim = false

	$: iframe && updateIframe(currentCode, iframe, lang)

	onMount(() => {
		if (localStorage) {
			currentCode = localStorage.getItem('playground-code') ?? ''
		} else {
			currentCode = ''
		}
		if (location && location.hash === '#vim') withVim = true
	})

	const handleChange = () => {
		updateIframe(currentCode, iframe, lang)
		localStorage.setItem('playground-code', currentCode)
	}

	const downloadFile = () => {
		const downloadLink = document.createElement('a')
		const encodedContent = encodeURIComponent(prepareCode(currentCode, lang, false))
		downloadLink.setAttribute('href', 'data:text/html;charset=utf-8,' + encodedContent)
		downloadLink.setAttribute('download', 'odycGame.html')
		downloadLink.style.display = 'none'
		document.body.appendChild(downloadLink)
		downloadLink.click()
		document.body.removeChild(downloadLink)
	}

	let files: FileList

	const handleFileLoad = async () => {
		if (!files) return
		const file = files[0]
		const text = await file.text()
		const matches = parseCode(text)
		if (matches && matches[0]) {
			currentCode = matches[0]
		}
	}
</script>

<main class="flex flex-col h-[calc(100svh_-_var(--header-height)]">
	<div
		class="grid grid-rows-2 grow h-[calc(100svh_-_var(--header-height)-_var(--footer-height))] lg:grid-cols-2 lg:grid-rows-1"
	>
		<Editor
			{...editorConfig({ withVim })}
			class=" overflow-auto w-full h-full border-b lg:border-r lg:border-b-0 row-start-1 bg-white"
			on:change={handleChange}
			bind:value={currentCode}
		/>
		<iframe
			src=""
			frameborder="0"
			class="bg-white w-full h-full row-start-2 lg:row-start-1"
			title="game"
			bind:this={iframe}
		></iframe>
	</div>
	<div class=" bg-white shadow col-span-2 h-[var(--footer-height)] px-4">
		<div class="px-4 flex items-center gap-4 h-full">
			<Paint {lang}>{t('paint')}</Paint>
			<Sound {lang}>{t('sound')}</Sound>
			<span class="grow" aria-hidden="true"></span>
			<Button on:click={() => inputFile.click()}>{t('playground.open')}</Button>
			<input
				type="file"
				class="hidden"
				bind:files
				on:change={handleFileLoad}
				bind:this={inputFile}
			/>
			<Button on:click={downloadFile}>{t('playground.download')}</Button>
		</div>
	</div>
</main>

<style>
	main {
		--footer-height: 3rem;
	}
</style>
