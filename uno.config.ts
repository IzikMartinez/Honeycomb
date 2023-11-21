// uno.config.ts
import extractorSvelte from '@unocss/extractor-svelte'
import { defineConfig, presetUno } from 'unocss'
import presetAttributify from "@unocss/preset-attributify"

export default defineConfig({
  // ...UnoCSS options
  extractors: [
    extractorSvelte(),
  ],
  presets: [
    presetAttributify(),
    presetUno(),
  ],
  theme: {
    fontFamily: {
      ps: "IBM Plex Serif"
    }
  }
})
