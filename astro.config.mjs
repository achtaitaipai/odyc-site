import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import ghAlerts from "remark-gh-alerts";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://odyc-site.pages.dev/",
  integrations: [svelte(), tailwind()],
  markdown: {
    shikiConfig: {
      theme: "github-light",
    },
    remarkPlugins: [ghAlerts],
  },
});
