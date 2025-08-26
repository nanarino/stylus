import{p as d}from"./prefix.DdUm4vFL.js";const t=`:doodle {
    @grid: 7 / 100%;
    border-radius: 50%;
}

transition: .2s @r(.6s);
@shape: clover 5;
background: hsla(-@i(*4), 70%, 68%, @r.8);
transform:
    scale(@r(.2, 1.5))
    translate(@m2.@r(±50%));
`,s=`:doodle {
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
`,o={light:s,dark:t};function e(n=o[window.theme]){const r=document.querySelector("css-doodle");r&&(r.compiled?r.update(n):r.innerHTML=n)}e();document.addEventListener("astro:after-swap",()=>e());window.addEventListener(`${d}-theme`,(n=>e(o[n.detail])));
