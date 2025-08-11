import prefix from "docs/scripts/prefix"
import { type Theme, default as themes } from "@holy-two/data-theme/dist/themes"

document.addEventListener("astro:page-load", () => {
    // 开关触发
    const checkbox = document.getElementById(
        "header-theme-switch"
    ) as HTMLInputElement

    checkbox.checked = window.theme === "dark"

    checkbox.onchange = (e: Event) => {
        const theme = themes[+!(e.target as HTMLInputElement).checked]
        window.dispatchEvent(
            new CustomEvent<Theme>(`${prefix}-theme`, {
                detail: theme,
            })
        )
    }
    delete checkbox.parentElement!.dataset.init
})

document.addEventListener("astro:after-swap", () => {
    const checkbox = document.getElementById(
        "header-theme-switch"
    ) as HTMLInputElement
    checkbox.checked = window.theme === "dark"
})
