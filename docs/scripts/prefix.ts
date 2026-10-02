import setPrefix from "lib/mixins/prefix.styl?raw"

const prefix = setPrefix.match(/prefix\s*=\s*["']([^"']+)["']/)?.[1] ?? ""

export default prefix
