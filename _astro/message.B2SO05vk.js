import{p as f}from"./prefix.DdUm4vFL.js";function h(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),t.push.apply(t,n)}return t}function w(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?h(Object(t),!0).forEach(function(n){b(r,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(t,n))})}return r}function b(r,e,t){return e=O(e),e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function O(r){var e=P(r,"string");return typeof e=="symbol"?e:String(e)}function P(r,e){if(typeof r!="object"||r===null)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var n=t.call(r,e);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}const l=$({});function $(r){return e.withOptions=t=>$(w(w({},r),t)),e;function e(t,...n){const o=typeof t=="string"?[t]:t.raw,{escapeSpecialCharacters:p=Array.isArray(t),trimWhitespace:a=!0}=r;let i="";for(let c=0;c<o.length;c++){let s=o[c];p&&(s=s.replace(/\\\n[ \t]*/g,"").replace(/\\`/g,"`").replace(/\\\$/g,"$").replace(/\\\{/g,"{")),i+=s,c<n.length&&(i+=n[c])}const m=i.split(`
`);let u=null;for(const c of m){const s=c.match(/^(\s+)\S+/);if(s){const g=s[1].length;u?u=Math.min(u,g):u=g}}if(u!==null){const c=u;i=m.map(s=>s[0]===" "||s[0]==="	"?s.slice(c):s).join(`
`)}return a&&(i=i.trim()),p&&(i=i.replace(/\\n/g,`
`)),i}}function v(r){return new Promise(e=>setTimeout(e,r))}const y=(r,e)=>r?l`
            <svg 
                class="${f}-message-prefix"
                data-icon="tips/fill/${e}-circle-fill"
                viewBox="0 0 48 48"
            >
                <use
                    xlink:href="#ai:local:tips/fill/${e}-circle-fill"
                ></use>
            </svg>
        `:l`
            <svg 
                class="${f}-message-prefix"
                data-icon="tips/outline/${e}-circle"
                data-primary="${{check:"success",close:"danger",exclamation:"warning",info:""}[e]}"
                viewBox="0 0 48 48"
            >
                <use
                    xlink:href="#ai:local:tips/outline/${e}-circle"
                ></use>
            </svg>
        `,d={"--background-color-message":"var(--primary-5)","--box-shadow-color":"var(--primary-4)"};class x{queue;constructor(e=document.body){this.reset(e)}reset(e=document.body){this.queue?.remove(),this.queue=document.createElement("div"),this.queue.className=`${f}-message-queue`,e.append(this.queue)}bind(e){this.queue=e}async emit(e){const t=document.createElement("div");let n=3e3,o="",p={},a=e??"☘";if(typeof a!="string"&&(n=a.duration??3e3,o=`${a.primary??""}`,p=a.style??{},a=`${a.content??"☘"}`),t.innerHTML=l`
            <div class="${f}-message">
                <p class="${f}-paragraph">${a}</p>
            </div>
        `,o){const i=t.firstElementChild;i.dataset.primary=o,Object.entries(p).map(m=>i.style.setProperty(...m))}this.queue.appendChild(t),t.style.height=`${t.offsetHeight}px`,t.style.transition="opacity 1s, height 2s",await v(n),t.style.opacity="0",t.style.height="0",await v(2e3),this.queue.removeChild(t)}async info(e,t="info"){return await this.emit({content:l`
                ${y(!1,t)}
                <span>${e}</span>
            `})}async success(e){return await this.emit({content:l`
                ${y(!0,"check")}
                <span>${e}</span>
            `,primary:"success",style:d})}async danger(e){return await this.emit({content:l`
                ${y(!0,"close")}
                <span>${e}</span>
            `,primary:"danger",style:d})}get error(){return this.danger}async warning(e){return await this.emit({content:l`
                ${y(!0,"exclamation")}
                <span>${e}</span>
            `,primary:"warning",style:d})}}const q=new x;export{q as _,l as d,y as i};
