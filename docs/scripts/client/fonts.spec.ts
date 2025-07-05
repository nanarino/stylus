import "@fontsource/jetbrains-mono/400.css"

/**
 * 測試非默認字體的效果
 */
function test_set_fonts() {
    const link = document.createElement("link")
    link.rel = "stylesheet"
    link.type = "text/css"
    link.href = `${import.meta.env.BASE_URL}fonts/index.css`
    link.media = "all"
    document.getElementsByTagName("head")[0].appendChild(link)

    const root = document.documentElement
    root.style.setProperty("--font-family-base", "HYWenHei-85W-zh")
    root.style.setProperty("--font-family-mono", "JetBrains Mono")
}

test_set_fonts()
document.addEventListener("astro:after-swap", test_set_fonts)
