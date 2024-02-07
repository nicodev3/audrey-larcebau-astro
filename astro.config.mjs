import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import metaTags from "astro-meta-tags";

// https://astro.build/config
export default defineConfig({
  site: 'https://psy-emdr-cotebasque.fr/n',
  integrations: [tailwind(), sitemap(), metaTags()]
});