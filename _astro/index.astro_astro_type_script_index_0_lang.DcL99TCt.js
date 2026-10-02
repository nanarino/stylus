import{t as e}from"./prefix.BPWHgI55.js";var t={light:`:doodle {
    @grid: 8 / 100%;
    border-radius: 50%;
}

transition: .2s @r(.6s);
border-radius: @pick(100% 0, 0 100%);
transform: scale(@r(.25, 1.25));

background: hsla(
    calc(240 - 6 * @x * @y),
    70%, 68%, @r.8
)
`,dark:`:doodle {
    @grid: 7 / 100%;
    border-radius: 50%;
}

transition: .2s @r(.6s);
@shape: clover 5;
background: hsla(-@i(*4), 70%, 68%, @r.8);
transform:
    scale(@r(.2, 1.5))
    translate(@m2.@r(±50%));
`};function n(e=t[window.theme]){let n=document.querySelector(`css-doodle`);n&&(n.compiled?n.update(e):n.innerHTML=e)}n(),document.addEventListener(`astro:after-swap`,()=>n()),window.addEventListener(`${e}-theme`,(e=>n(t[e.detail])));