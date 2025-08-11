import prefix from "docs/scripts/prefix"
import toggle from "@holy-two/data-theme/dist/toggle"
import type { Theme } from "@holy-two/data-theme"

document.addEventListener("astro:after-swap", () => {
    document.documentElement.dataset["theme"] = window.theme
})

// 监听自定义事件 切换主题的开关时主动触发
window.addEventListener(`${prefix}-theme`, ((_event: CustomEvent<Theme>) => {
    // document.documentElement.dataset["theme"] = event.detail
    // localStorage.setItem("theme", event.detail)
    toggle() // 更簡單的寫法 直接切換 應該不會出問題
}) as (e: Event) => void)
