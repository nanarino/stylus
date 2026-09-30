import { stat, readdir } from "node:fs/promises"
import path from "node:path"

export const INDEX_PAGE_NAME = "readme"
export const normalizeBuilt = (pathname: string) =>
    pathname
        .replace(/\.html$/i, "")
        .replace(/\/index$/i, "")
        .replace(/\/+$/, "") || "/"

export interface page {
    path: string
}
export interface menu extends page {
    children: page[]
}

export const getMenu = async (
    currentDir: string,
    rootDir: string = currentDir,
): Promise<(page | menu)[]> => {
    const children: (page | menu)[] = []
    if ((await stat(path.resolve(currentDir))).isFile()) return []
    for (const fileName of await readdir(currentDir)) {
        const filePath = path.join(currentDir, fileName)
        children.push({
            path: path
                .relative(rootDir, filePath)
                .split(path.sep)
                .join(path.posix.sep)
                .replace(/index\.(mdx|md|astro)$/i, "")
                .replace(/(\.mdx)|(\.md)|(\.astro)$/i, ""),
            ...((await stat(filePath)).isFile()
                ? null
                : {
                      children: await getMenu(filePath, rootDir),
                  }),
        })
    }
    return children
}
