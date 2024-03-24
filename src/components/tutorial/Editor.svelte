<script lang="ts" type="module">
  import { javascript } from "@codemirror/lang-javascript";
  import Editor from "svelte-codemirror-editor";
  import { updateIframe } from "../../lib/processCode.ts";

  export let code = "";
  let iframe: HTMLIFrameElement;

  $: iframe && updateIframe(code, iframe);

  const handleChange = () => {
    updateIframe(code, iframe);
  };
</script>

<div
  class="grid grid-rows-2 grow h-[calc(100svh_-_var(--header-height))] col-span-3"
>
  <Editor
    lang={javascript()}
    class=" overflow-auto w-full h-full border-b row-start-1"
    on:change={handleChange}
    bind:value={code}
  />
  <iframe
    src=""
    frameborder="0"
    class="bg-white w-full h-full row-start-2"
    title="game"
    bind:this={iframe}
  ></iframe>
</div>
