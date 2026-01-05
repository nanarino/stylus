import colours from "./colors"
import dedent from "dedent"
import { icon } from "docs/scripts/client/message"

const icons = ["check", "close", "exclamation", "info"] as const

document.addEventListener("astro:page-load", () => {
    const launcher = document.getElementById("emit-message-kanban")

    if (launcher)
        launcher.onclick = function (e) {
            const button = e.target as HTMLButtonElement
            if (button.tagName === "BUTTON") {
                const primary = Object.hasOwn(button.dataset, "primary")
                const i = icons[Math.floor(Math.random() * icons.length)]
                if (primary) {
                    // 取上一次的颜色
                    let color =
                        Reflect.get(button.dataset, "color") || "primary"
                    window.message.emit({
                        content: dedent`
                            ${icon(primary, i)}
                            <span>
                                发射成功
                            </span>
                        `,
                        primary: true,
                        style: {
                            "--background-color-message": `var(--${color}-5)`,
                            "--box-shadow-color": `var(--${color}-4)`,
                        },
                    })
                    // 设置下一次的颜色
                    color = colours[Math.floor(Math.random() * colours.length)]
                    button.innerText = color
                    button.dataset.color = color
                    button.style.setProperty(
                        "--background-color-button",
                        `var(--${color}-5)`
                    )
                    button.style.setProperty(
                        "--background-color-button:focus",
                        `var(--${color}-6)`
                    )
                } else {
                    window.message.info("发射成功", i)
                }
            }
        }
})
