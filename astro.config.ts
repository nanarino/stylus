import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import icon from "astro-icon"
import { fileURLToPath } from "node:url"

const stylusMixin = `@require '${fileURLToPath(
    new URL("lib/mixins/*", import.meta.url),
    { windows: false }
)}'`

// https://astro.build/config
export default defineConfig({
    srcDir: "./docs",
    build: {
        format: "preserve",
    },
    integrations: [
        mdx(),
        icon({
            iconDir: "docs/icons",
        }),
    ],
    scopedStyleStrategy: "where",
    markdown: {
        shikiConfig: {
            themes: {
                light: "github-light",
                dark: "github-dark",
            },
        },
    },
    vite: {
        css: {
            preprocessorOptions: {
                // for import '*.styl'
                styl: { additionalData: stylusMixin },
                // for <style lang="stylus">
                stylus: { additionalData: stylusMixin },
            },
        },
    },
})
