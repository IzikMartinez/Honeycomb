// uno.config.ts
import extractorSvelte from '@unocss/extractor-svelte'
import { defineConfig, presetAttributify, presetUno } from 'unocss'

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
