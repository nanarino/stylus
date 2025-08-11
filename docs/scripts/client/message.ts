import prefix from "docs/scripts/prefix"
import sleep from "docs/scripts/sleep"
import dedent from "dedent"

// const queue = document.createElement("div");

export type MessageDetail =
    | string
    | {
          /**
           * 内容 相当于直接传string
           */
          content?: string
          /**
           * 主题 4种 其他非空值等效于传primary
           */
          primary?: "success" | "danger" | "warning" | "primary" | boolean
          /**
           * 持续时间
           */
          duration?: number
          /**
           * 额外的样式 需要传primary后才生效
           */
          style?: Record<string, string>
      }

// 监听自定义事件 发射消息时主动触发
window.addEventListener(`${prefix}-message`, async event => {
    const queue = document.getElementById("message-queue")
    const msg = document.createElement("div")

    /**
     * `final duration:number;` ❌
     * `var duration:number = 2000;` ✔
     *
     * 由于继承的模板项目配置的松散类型检查，
     * 变量很可能在分配前使用而不报错，
     * 你最好初始化默认值。
     *
     * 检查项目其他地方有没有这个问题
     */
    let duration: number = 2000
    let primary: string | boolean = false
    let style: Record<string, string> = {}
    let content = (event as CustomEvent<MessageDetail>).detail ?? "☘"

    if (typeof content != "string") {
        /**
         * 由于继承的模板项目配置的松散类型检查，
         * undefined 和 null的 `.toString()` 还是会报错
         * 而使用 `${}` 风险更大 需要指定默认值
         */
        duration = content.duration ?? 2000
        primary = content.primary ?? false
        style = content.style ?? {}
        content = `${content.content ?? "☘"}`
    }

    msg.innerHTML = dedent`
            <div class="${prefix}-message">
                <p class="${prefix}-paragraph">${content}</p>
            </div>
        `
    if (primary) {
        const p = msg.firstElementChild as HTMLDivElement
        p.dataset.primary = primary.toString()
        /**
         * 不同于 `Object.assign(p.style, style)`
         *
         * This means that keys take the dash-case form,
         * like "background-color" rather than "backgroundColor",
         * and that any units must be explicitly provided
         */
        Object.entries(style).map(x => p.style.setProperty(...x))
    }

    queue!.appendChild(msg)
    msg.style.height = `${msg.offsetHeight}px`
    msg.style.transition = "opacity 1s, height 2s"
    await sleep(duration)
    msg.style.opacity = "0"
    msg.style.height = "0"
    await sleep(2000) // 2000对应 transition height 2s
    queue!.removeChild(msg)
})
