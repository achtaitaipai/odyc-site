<script lang="ts">
  import { fade } from "svelte/transition";
  import { click_outside } from "../../lib/svelteActions/clickOutside.ts";
  import {
    defaultColors,
    drawGrid,
    getMousePos,
    gridToString,
    initGrid,
    resizeGrid,
    setGrid,
    stringToGrid,
  } from "./utils.ts";
  import { tick } from "svelte";
  import type { languages } from "../../lib/i18n/ui.ts";
  import { useTranslations } from "../../lib/i18n/utils.ts";
  import Button from "../Button.svelte";

  export let lang: keyof typeof languages;
  const t = useTranslations(lang);

  let isOpen = false;
  let colors = defaultColors;
  let currentColor = 0;
  let spriteWidth = 8;
  let spriteHeight = 8;
  let canvas: HTMLCanvasElement;
  let grid = initGrid(spriteWidth, spriteHeight);
  $: ctx = canvas?.getContext("2d");

  $: if (ctx) drawGrid(grid, spriteWidth, spriteHeight, ctx);

  $: if (isOpen) {
    const selectedText = getSelection()?.toString();
    if (selectedText) {
      const currentSprite = stringToGrid(selectedText);
      spriteWidth = currentSprite.width;
      spriteHeight = currentSprite.height;
      grid = currentSprite.grid;
    }
  }

  const handleClick = (e: MouseEvent) => {
    const [x, y] = getMousePos(e, spriteWidth, spriteHeight);
    grid = setGrid(grid, x, y, currentColor);
  };

  const handleMouseMove = (e: MouseEvent) => {
    const [x, y] = getMousePos(e, spriteWidth, spriteHeight);
    const isPressed = e.buttons === 1;
    if (isPressed) {
      grid = setGrid(grid, x, y, currentColor);
    }
  };

  const handleChangeWidth = async (e: Event) => {
    const target = e.target as HTMLInputElement;
    spriteWidth = target.valueAsNumber;
    grid = resizeGrid(grid, spriteWidth, spriteHeight);
    await tick();
    if (ctx) drawGrid(grid, target.valueAsNumber, spriteHeight, ctx);
  };

  const handleChangeHeight = async (e: Event) => {
    const target = e.target as HTMLInputElement;
    spriteHeight = target.valueAsNumber;
    grid = resizeGrid(grid, spriteHeight, spriteHeight);
    await tick();
    if (ctx) drawGrid(grid, spriteWidth, target.valueAsNumber, ctx);
  };

  const copyToClipBoard = () => {
    const text = gridToString(grid, spriteWidth, spriteHeight);
    navigator.clipboard.writeText(text);
    isOpen = false;
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.code === "Escape") isOpen = false;
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
      class="border-gray-800 shadow border-2 rounded p-4 w-80 bg-white bottom-full left-full absolute z-50 flex flex-col"
      transition:fade
      on:keydown={handleKeyDown}
    >
      <div class="h-auto aspect-square flex">
        <canvas
          class="border m-auto max-w-full max-h-full cursor-crosshair"
          class:w-full={spriteWidth >= spriteHeight}
          class:h-full={spriteWidth <= spriteHeight}
          class:h-auto={spriteWidth > spriteHeight}
          class:w-auto={spriteWidth < spriteHeight}
          width={spriteWidth}
          height={spriteHeight}
          bind:this={canvas}
          on:click={handleClick}
          on:mousemove={handleMouseMove}
          style="background-color: {colors[1]};"
        ></canvas>
      </div>
      <div class="shrink-0 px-2">
        <div class="flex flex-wrap py-4 gap-2">
          <label
            class=" w-5 h-5 cursor-pointer outline transition-all outline-gray-600 bg-gradient-to-br from-white from-50% to-50% to-gray-300"
            class:outline-offset-1={currentColor === -1}
          >
            <input type="radio" bind:group={currentColor} value={-1} hidden />
          </label>
          {#each colors as color, index}
            <label
              class=" w-5 h-5 cursor-pointer outline transition-all outline-gray-600"
              style="background-color: {color};"
              class:outline-offset-1={index === currentColor}
            >
              <input
                type="radio"
                bind:group={currentColor}
                value={index}
                hidden
              />
            </label>
          {/each}
        </div>
        <div class="flex flex-col py-1 gap-2">
          <label
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >{t("paint.width")} :
            <input
              type="range"
              min="2"
              max="24"
              value={spriteWidth}
              on:input={handleChangeWidth}
              class="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700"
            />
          </label>

          <label
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >{t("paint.width")} :
            <input
              type="range"
              min="2"
              max="24"
              value={spriteHeight}
              on:input={handleChangeHeight}
              class="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700"
            />
          </label>
        </div>
        <div class="py-1 flex items-center gap-4 justify-end">
          <Button on:click={copyToClipBoard}>{t("paint.copy")}</Button>
        </div>
      </div>
    </dialog>
  {/if}
</div>

<style>
  canvas {
    image-rendering: crisp-edges;
    image-rendering: pixelated;
  }
</style>
