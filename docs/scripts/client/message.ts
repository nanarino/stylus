import prefix from "docs/scripts/prefix"
import sleep from "docs/scripts/sleep"
import dedent from "dedent"

export const icon = (fo: boolean, i: "check" | "close" | "exclamation" | "info") =>
    fo
        ? dedent`
            <svg 
                class="${prefix}-message-prefix"
                data-icon="tips/fill/${i}-circle-fill"
                viewBox="0 0 48 48"
            >
                <use
                    xlink:href="#ai:local:tips/fill/${i}-circle-fill"
                ></use>
            </svg>
        `
        : dedent`
            <svg 
                class="${prefix}-message-prefix"
                data-icon="tips/outline/${i}-circle"
                data-primary="${
                    {
                        check: "success",
                        close: "danger",
                        exclamation: "warning",
                        info: "",
                    }[i]
                }"
                viewBox="0 0 48 48"
            >
                <use
                    xlink:href="#ai:local:tips/outline/${i}-circle"
                ></use>
            </svg>
        `

const style = {
    "--background-color-message": `var(--primary-5)`,
    "--box-shadow-color": `var(--primary-4)`,
}

export class Launcher {
    private queue!: HTMLElement
    constructor(parentElement: HTMLElement = document.body) {
        this.reset(parentElement)
    }
    reset(parentElement: HTMLElement = document.body) {
        this.queue?.remove()
        this.queue = document.createElement("div")
        this.queue.className = `${prefix}-message-queue`
        parentElement.append(this.queue)
    }

    bind(queue: HTMLElement) {
        this.queue = queue
    }

    async emit(
        detail:
            | string
            | {
                  /**
                   * 内容 相当于直接传string
                   */
                  content?: string
                  /**
                   * 主题 4种 其他非空值等效于传primary
                   */
                  primary?: "success" | "danger" | "warning" | "primary"
                  /**
                   * 持续时间
                   */
                  duration?: number
                  /**
                   * 额外的样式 需要设置primary后才生效
                   */
                  style?: Record<string, string>
              }
    ) {
        const msg = document.createElement("div")
        let duration: number = 3000
        let primary: string = ""
        let style: Record<string, string> = {}
        let content = detail ?? "☘"
        if (typeof content != "string") {
            duration = content.duration ?? 3000
            primary = `${content.primary ?? ""}`
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
            p.dataset.primary = primary
            Object.entries(style).map(x => p.style.setProperty(...x))
        }
        this.queue.appendChild(msg)
        msg.style.height = `${msg.offsetHeight}px`
        msg.style.transition = "opacity 1s, height 2s"
        await sleep(duration)
        msg.style.opacity = "0"
        msg.style.height = "0"
        await sleep(2000) // 2000对应 transition height 2s
        this.queue.removeChild(msg)
    }

    async info(content: string, _icon: Parameters<typeof icon>[1] = "info") {
        return await this.emit({
            content: dedent`
                ${icon(false, _icon)}
                <span>${content}</span>
            `,
        })
    }

    async success(content: string) {
        return await this.emit({
            content: dedent`
                ${icon(true, "check")}
                <span>${content}</span>
            `,
            primary: "success",
            style,
        })
    }

    async danger(content: string) {
        return await this.emit({
            content: dedent`
                ${icon(true, "close")}
                <span>${content}</span>
            `,
            primary: "danger",
            style,
        })
    }
    get error() {
        return this.danger
    }

    async warning(content: string) {
        return await this.emit({
            content: dedent`
                ${icon(true, "exclamation")}
                <span>${content}</span>
            `,
            primary: "warning",
            style,
        })
    }
}

const _ = new Launcher()

export default _

export const message = (...args: Parameters<typeof _.emit>) => _.emit(...args)
