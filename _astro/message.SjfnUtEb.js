import{t as e}from"./prefix.BPWHgI55.js";function t(e){return new Promise(t=>setTimeout(t,e))}function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function r(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]==null?{}:arguments[t];t%2?n(Object(r),!0).forEach(function(t){i(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function i(e,t,n){return t=a(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){var t=o(e,`string`);return typeof t==`symbol`?t:String(t)}function o(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var s=c({});function c(e){return t.withOptions=t=>c(r(r({},e),t)),t;function t(t,...n){let r=typeof t==`string`?[t]:t.raw,{alignValues:i=!1,escapeSpecialCharacters:a=Array.isArray(t),trimWhitespace:o=!0}=e,s=``;for(let e=0;e<r.length;e++){let t=r[e];if(a&&(t=t.replace(/\\\n[ \t]*/g,``).replace(/\\`/g,"`").replace(/\\\$/g,`$`).replace(/\\\{/g,`{`)),s+=t,e<n.length){let t=i?l(n[e],s):n[e];s+=t}}let c=s.split(`
`),u=null;for(let e of c){let t=e.match(/^(\s+)\S+/);if(t){let e=t[1].length;u=u?Math.min(u,e):e}}if(u!==null){let e=u;s=c.map(t=>t[0]===` `||t[0]===`	`?t.slice(e):t).join(`
`)}return o&&(s=s.trim()),a&&(s=s.replace(/\\n/g,`
`).replace(/\\t/g,`	`).replace(/\\r/g,`\r`).replace(/\\v/g,`\v`).replace(/\\b/g,`\b`).replace(/\\f/g,`\f`).replace(/\\0/g,`\0`).replace(/\\x([\da-fA-F]{2})/g,(e,t)=>String.fromCharCode(parseInt(t,16))).replace(/\\u\{([\da-fA-F]{1,6})\}/g,(e,t)=>String.fromCodePoint(parseInt(t,16))).replace(/\\u([\da-fA-F]{4})/g,(e,t)=>String.fromCharCode(parseInt(t,16)))),typeof Bun<`u`&&(s=s.replace(/\\u(?:\{([\da-fA-F]{1,6})\}|([\da-fA-F]{4}))/g,(e,t,n)=>{let r=t??n??``;return String.fromCodePoint(parseInt(r,16))})),s}}function l(e,t){if(typeof e!=`string`||!e.includes(`
`))return e;let n=t.slice(t.lastIndexOf(`
`)+1).match(/^(\s+)/);if(n){let t=n[1];return e.replace(/\n/g,`\n${t}`)}return e}var u=(t,n)=>t?s`
            <svg 
                class="${e}-message-prefix"
                data-icon="tips/fill/${n}-circle-fill"
                viewBox="0 0 48 48"
            >
                <use
                    xlink:href="#ai:local:tips/fill/${n}-circle-fill"
                ></use>
            </svg>
        `:s`
            <svg 
                class="${e}-message-prefix"
                data-icon="tips/outline/${n}-circle"
                data-primary="${{check:`success`,close:`danger`,exclamation:`warning`,info:``}[n]}"
                viewBox="0 0 48 48"
            >
                <use
                    xlink:href="#ai:local:tips/outline/${n}-circle"
                ></use>
            </svg>
        `,d={"--background-color-message":`var(--primary-5)`,"--box-shadow-color":`var(--primary-4)`},f=new class{queue;constructor(e=document.body){this.reset(e)}reset(t=document.body){this.queue?.remove(),this.queue=document.createElement(`div`),this.queue.className=`${e}-message-queue`,t.append(this.queue)}async emit(n){let r=document.createElement(`div`),i=3e3,a=``,o={},c=n??`☘`;if(typeof c!=`string`&&(i=c.duration??3e3,a=`${c.primary||``}`,o=c.style??{},c=`${c.content??`☘`}`),r.innerHTML=s`
            <div class="${e}-message">
                <p class="${e}-paragraph">${c}</p>
            </div>
        `,a){let e=r.firstElementChild;e.dataset.primary=a,Object.entries(o).map(t=>e.style.setProperty(...t))}this.queue.appendChild(r),r.style.height=`${r.offsetHeight}px`,r.style.transition=`opacity 1s, height 2s`,await t(i),r.style.opacity=`0`,r.style.height=`0`,await t(2e3),this.queue.removeChild(r)}async info(e,t=`info`){return await this.emit({content:s`
                ${u(!1,t)}
                <span>${e}</span>
            `})}async success(e){return await this.emit({content:s`
                ${u(!0,`check`)}
                <span>${e}</span>
            `,primary:`success`,style:d})}async danger(e){return await this.emit({content:s`
                ${u(!0,`close`)}
                <span>${e}</span>
            `,primary:`danger`,style:d})}get error(){return this.danger}async warning(e){return await this.emit({content:s`
                ${u(!0,`exclamation`)}
                <span>${e}</span>
            `,primary:`warning`,style:d})}};export{u as n,s as r,f as t};