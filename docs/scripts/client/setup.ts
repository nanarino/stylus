/**
 * CSS Houdini
 */
import smoothCorners from "smooth-corners?url"

if (CSS && "paintWorklet" in CSS) {
    CSS.paintWorklet.addModule(smoothCorners)
}

/**
 * Web Components
 */
import "css-doodle"

/**
 * Auto move to #anchor
 */
window.addEventListener("load", () => {
    const anchor = location.hash
    if (!anchor) return
    const h2 = document.querySelector(anchor)
    h2?.scrollIntoView({ behavior: "smooth" })
})

/**
 * test
 */
if (import.meta.env.DEV && top?.location?.hostname === "127.0.0.1") {
    import("./fonts.spec")
}
