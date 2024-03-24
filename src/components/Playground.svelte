<script lang="ts" type="module">
  import Paint from "./Paint/index.svelte";
  import Sound from "./Sound/index.svelte";
  import Editor from "svelte-codemirror-editor";
  import { parseCode, prepareCode, updateIframe } from "../lib/processCode.ts";
  import { javascript } from "@codemirror/lang-javascript";
  import { onMount } from "svelte";
  import { languages, ui } from "../lib/i18n/ui.ts";
  import { useTranslations } from "../lib/i18n/utils";
  import Button from "./Button.svelte";
  import { espresso } from "thememirror";
  export let lang: keyof typeof languages;
  const t = useTranslations(lang);
  let currentCode = "";
  let iframe: HTMLIFrameElement;
  let inputFile: HTMLInputElement;

  $: iframe && updateIframe(currentCode, iframe);

  onMount(() => {
    if (localStorage) {
      currentCode = localStorage.getItem("playground-code") ?? "";
    } else {
      currentCode = "";
    }
  });

  const handleChange = () => {
    updateIframe(currentCode, iframe);
    localStorage.setItem("playground-code", currentCode);
  };

  const downloadFile = () => {
    const downloadLink = document.createElement("a");
    const encodedContent = encodeURIComponent(prepareCode(currentCode, false));
    downloadLink.setAttribute(
      "href",
      "data:text/html;charset=utf-8," + encodedContent
    );
    downloadLink.setAttribute("download", "odycGame.html");
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  let files: FileList;

  const handleFileLoad = async () => {
    if (!files) return;
    const file = files[0];
    const text = await file.text();
    const matches = parseCode(text);
    if (matches && matches[0]) {
      currentCode = matches[0];
    }
  };
</script>

<main class="flex flex-col h-[calc(100svh_-_var(--header-height)]">
  <div
    class="grid grid-rows-2 grow h-[calc(100svh_-_var(--header-height)-_var(--footer-height))] lg:grid-cols-2 lg:grid-rows-1"
  >
    <Editor
      lang={javascript()}
      class=" overflow-auto w-full h-full border-b lg:border-r lg:border-b-0 row-start-1 bg-white"
      theme={espresso}
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
    <div class="container mx-auto flex items-center gap-4 h-full">
      <Paint {lang}>{t("paint")}</Paint>
      <Sound {lang}>{t("sound")}</Sound>
      <span class="grow" aria-hidden="true"></span>
      <Button on:click={() => inputFile.click()}>{t("playground.open")}</Button>
      <input
        type="file"
        class="hidden"
        bind:files
        on:change={handleFileLoad}
        bind:this={inputFile}
      />
      <Button on:click={downloadFile}>{t("playground.download")}</Button>
    </div>
  </div>
</main>

<style>
  main {
    --footer-height: 3rem;
  }
</style>
