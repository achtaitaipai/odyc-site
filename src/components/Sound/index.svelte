<script lang="ts">
  import { fade } from "svelte/transition";
  import { click_outside } from "../../lib/svelteActions/clickOutside.ts";
  import type { languages } from "../../lib/i18n/ui.ts";
  import { useTranslations } from "../../lib/i18n/utils.ts";
  import {
    FxEnum,
    SoundPlayer,
    createSound,
    type FxKey,
  } from "../../lib/jfxr/index.ts";
  import { onMount } from "svelte";
  import Button from "../Button.svelte";

  export let lang: keyof typeof languages;
  const t = useTranslations(lang);

  let isOpen = false;

  const soundsOptions = Object.keys(FxEnum);

  let soundPlayer: SoundPlayer;

  onMount(() => {
    soundPlayer = new SoundPlayer({ volume: 0.8 });
  });

  let seed = 0;

  let currentTemplate: FxKey = "RANDOM";

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.code === "Escape") isOpen = false;
  };

  const playSound = () => {
    const sound = createSound(currentTemplate, seed);
    soundPlayer?.play(sound);
  };
  const copyToClipBoard = () => {
    navigator.clipboard.writeText(`createSound('${currentTemplate}', ${seed})`);
    isOpen = false;
  };
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
          <Button on:click={playSound}>{t("sound.play")}</Button>
          <Button on:click={copyToClipBoard}>{t("sound.copy")}</Button>
        </div>
      </div>
    </dialog>
  {/if}
</div>
