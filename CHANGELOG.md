# 更新日志 17/8/2025

## v1.1.0

變數名格式更改 `--color-button:hover` -> `--color-button--hover`

## v1.0.1

添加頁簽

## v0.12.0

變數名格式更改 `--color-button-hover` -> `--color-button:hover`

修正部分類名拚寫錯誤

## v0.11.1

降低大部分 TAG 選擇器的權重 修正部分變數拚寫錯誤

## v0.10.0

新增 `select` 樣式

## v0.9.0

表單項元件已經校驗信息添加 `input-wrapper` 汎化

## v0.8.0

`lib/font` 等樣式歸入 `lib/common/`

灰階色值修改

## v0.7.0

src 目錄拆分 源碼引入時需要修改

-   `src` -> `docs`
-   `src/lib` -> `lib`

析出了 mixins， 源碼體積有所縮減

移除 [`backdrop-filter()`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter) 的兼容前綴 ~~`-webkit-`~~ （同時修復了 `dialog::backdrop` 的顯示異常）

移除 [`filter()`](https://developer.mozilla.org/en-US/docs/Web/CSS/filter) 的兼容前綴 ~~`-webkit-`~~

移除 [`fit-content`](https://developer.mozilla.org/en-US/docs/Web/CSS/fit-content) 的兼容前綴 ~~`-moz-`~~

移除 [`mask`](https://developer.mozilla.org/en-US/docs/Web/CSS/mask) 的兼容前綴 ~~`-webkit-`~~

## v0.6.0

程式塊樣式修改并添加以下 css 變數

-   `--background-color-pre`
-   `--background-color-pre-dark`
-   `--color-code-dark`

修改變數名 `--badge-processing-weight` → `--weight-badge-processing`

移除關於 [`path()`](https://developer.mozilla.org/en-US/docs/Web/CSS/basic-shape/path) 的兼容支援

## v0.5.0

添加以下 css 變數

-   `--font-family-base`
-   `--font-family-serif`
-   `--font-family-mono`

移除關於 [`:has()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:has) 的兼容支援

移除關於 [`@property`](https://developer.mozilla.org/en-US/docs/Web/CSS/@property) 的兼容支援
