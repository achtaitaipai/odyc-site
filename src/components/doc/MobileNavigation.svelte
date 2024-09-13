<script lang="ts">
  import Search from "./Search.svelte";
  import type { DocEntries } from "src/lib/types/docEntry.ts";
  import { fade, slide } from "svelte/transition";

  export let lang: string;
  export let items: DocEntries;
  export let currentSection: string;
  let isVisible = false;

  const formatSlug = (fileName: string) => {
    const [_, slug] = fileName.split("/");
    return slug.replace(/\d+-/, "");
  };
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.code === "Escape") isVisible = false;
  };
</script>

<div
  class="sticky top-[var(--header-height)] border-b pl-4 pr-8 py-2 bg-white flex items-center xl:hidden justify-between"
>
  <button on:click={() => (isVisible = !isVisible)} on:keydown={handleKeyDown}>
    Menu
  </button>
  <Search id="searchMobile" />
</div>

{#if isVisible}
  <div class="xl:hidden">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
      class="bg-gray-900/60 fixed inset-0 z-50"
      on:click={() => (isVisible = false)}
      transition:fade
    ></div>

    <ul
      class="fixed top-0 bg-white bottom-0 px-4 min-w-80 py-4 space-y-4 border-r z-50"
      transition:fade
    >
      {#each items as item}
        <li>
          <a
            href={`/${lang}/documentation/${formatSlug(item.slug)}`}
            class=" text-lg hover:underline underline-offset-4 {formatSlug(
              item.slug
            ) === currentSection
              ? 'text-blue-800 underline'
              : ''}">{item.data.title}</a
          >
        </li>
      {/each}
    </ul>
  </div>
{/if}

<style>
</style>
