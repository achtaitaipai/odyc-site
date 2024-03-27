import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import ghAlerts from "remark-gh-alerts";
import { transformerNotationDiff } from "@shikijs/transformers";

// https://astro.build/config
export default defineConfig({
  site: "https://odyc-site.pages.dev/",
  integrations: [svelte(), tailwind()],
  markdown: {
    shikiConfig: {
      theme: "github-light",
      transformers: [transformerNotationDiff()],
    },
    remarkPlugins: [ghAlerts],
  },
});
