import copy from "copy-to-clipboard"
import { Launcher } from "./message"

declare global {
    interface Window {
        copy: typeof copy
        readonly message: Launcher
    }
    namespace CSS {
        const paintWorklet: Worklet
    }
}
