import prefix from "docs/scripts/prefix"
import dark from "./cover.dark.styl?raw"
import light from "./cover.light.styl?raw"
import type { Theme } from "@holy-two/data-theme"

const style = { light, dark } as const

interface Doodle extends HTMLElement {
    update: (styles: string) => void
    compiled?: Record<string, any>
}

function redraw(css = style[window.theme]) {
    const doodle = document.querySelector("css-doodle") as Doodle | null
    if (!doodle) return
    if (doodle.compiled) {
        doodle.update(css)
    } else {
        doodle.innerHTML = css
    }
}

// 初始化
redraw()
// 路由切換
document.addEventListener("astro:after-swap", () => redraw())
// 响应主题
window.addEventListener(`${prefix}-theme`, ((event: CustomEvent<Theme>) =>
    redraw(style[event.detail])) as (e: Event) => void)
