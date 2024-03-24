<script lang="ts">
  import { click_outside } from "../lib/svelteActions/clickOutside.ts";
  import { slide } from "svelte/transition";
  let isOpen = false;
  const handleKeydown = (e: KeyboardEvent) => {
    if (e.code === "Escape") isOpen = false;
  };
</script>

<div class="group relative" use:click_outside={() => (isOpen = false)}>
  <button
    on:click={() => (isOpen = !isOpen)}
    on:keydown={handleKeydown}
    class="bg-white px-2 py-3 text-left inline-flex gap-1.5 items-center"
    aria-expanded={isOpen}
    aria-haspopup="menu"
  >
    <slot name="current" />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6 transition-transform duration-300 origin-center"
      class:rotate-180={isOpen}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
    </svg>
  </button>
  {#if isOpen}
    <div class="absolute top-full left-0 bg-white z-10" transition:slide>
      <slot />
    </div>
  {/if}
</div>
