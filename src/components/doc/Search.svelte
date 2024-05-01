<script lang="ts">
  import { onMount } from "svelte";

  let dialog: HTMLDialogElement;
  let searchWrapper: HTMLElement;
  export let id: string;
  onMount(() => {
    if (window)
      //@ts-ignore
      new PagefindUI({
        element: `#${id}`,
        showSubResults: true,
        showImages: false,
      });
  });
  const open = () => {
    dialog.showModal();
  };

  const handleClick = (e: MouseEvent) => {
    if (
      (searchWrapper.contains(e.target as HTMLElement) ||
        searchWrapper === e.target) &&
      (e.target as HTMLElement).tagName !== "A"
    )
      return;
    dialog.close();
  };
</script>

<button class=" flex items-center gap-1" on:click={open}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="w-5 h-5"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
    />
  </svg>
  Rechercher</button
>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<dialog
  bind:this={dialog}
  class="w-full md:w-[40rem] backdrop:bg-gray-900/80"
  on:click={handleClick}
>
  <div
    class=" w-full space-y-4 bg-white p-4 min-h-56"
    bind:this={searchWrapper}
  >
    <div class="flex justify-end">
      <button class="" on:click={() => dialog.close()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
    <div {id}></div>
  </div>
</dialog>

<style lang="postcss">
  dialog {
    --pagefind-ui-scale: 1;
    --pagefind-ui-primary: theme(colors.blue.800);
    --pagefind-ui-text: theme(colors.gray.800);
    --pagefind-ui-background: theme(colors.gray.50);
    --pagefind-ui-border: theme(colors.gray.600);
    --pagefind-ui-tag: theme(colors.gray.200);
    --pagefind-ui-border-width: 2px;
    --pagefind-ui-border-radius: 8px;
    --pagefind-ui-image-border-radius: 8px;
    --pagefind-ui-image-box-ratio: 3 / 2;
    --pagefind-ui-font: sans-serif;
  }

  :global(.pagefind-ui mark) {
    background-color: transparent;
    font-weight: bold;
  }
</style>
