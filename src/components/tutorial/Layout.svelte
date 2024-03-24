<script lang="ts">
  import type { languages } from "../../lib/i18n/ui.ts";
  import { useTranslations } from "../../lib/i18n/utils.ts";
  import Editor from "./Editor.svelte";

  export let baseCode: string;
  export let solutionCode: string;

  let currentCode = baseCode;
  export let lang: keyof typeof languages;
  const t = useTranslations(lang);

  const solveCode = () => {
    currentCode = solutionCode;
  };
  const resetCode = () => {
    currentCode = baseCode;
  };
</script>

<main class="grid grid-cols-5">
  <div
    class="flex flex-col col-span-2 h-[calc(100svh_-_var(--header-height))] border-r"
  >
    <div class="shrink-0 bg-white items-center shadow-sm">
      <slot name="header" />
    </div>
    <div class="prose grow overflow-auto h-full px-4 py-4">
      <slot />
    </div>
    <div class="flex h-16 items-center bg-white px-4 shadow">
      <div class="flex gap-4">
        {#if currentCode !== baseCode}
          <button
            class="bg-gray-100 rounded px-2 py-1.5 flex"
            on:click={resetCode}>{t("tutorial.reset")}</button
          >
        {/if}
        {#if currentCode !== solutionCode}
          <button
            class="bg-gray-100 rounded px-2 py-1.5 flex"
            on:click={solveCode}>{t("tutorial.solve")}</button
          >
        {/if}
      </div>
      <nav class="ml-auto">
        <slot name="pagination" />
      </nav>
    </div>
  </div>
  <Editor bind:code={currentCode} />
</main>
