<script lang="ts" type="module">
  import { javascript } from "@codemirror/lang-javascript";
  import Editor from "svelte-codemirror-editor";
  import { editorConfig } from "../../lib/editorConfig.ts";
  import { updateIframe } from "../../lib/processCode.ts";
  import { espresso } from "thememirror";

  export let code = "";
  export let lang: string;
  let iframe: HTMLIFrameElement;

  $: iframe && updateIframe(code, iframe, lang);

  const handleChange = () => {
    updateIframe(code, iframe, lang);
  };
</script>

<div
  class="grid sm:grid-rows-2 grow h-svh sm:h-[calc(100svh_-_var(--header-height))] sm:col-span-3"
>
  <Editor
    {...editorConfig}
    class=" overflow-auto w-full h-full border-b row-start-1 bg-white"
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
