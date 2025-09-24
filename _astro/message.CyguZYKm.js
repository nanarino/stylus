import{p}from"./prefix.DdUm4vFL.js";function w(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),r.push.apply(r,n)}return r}function $(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?w(Object(r),!0).forEach(function(n){O(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function O(t,e,r){return e=P(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function P(t){var e=x(t,"string");return typeof e=="symbol"?e:String(e)}function x(t,e){if(typeof t!="object"||t===null)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}const l=v({});function v(t){return e.withOptions=r=>v($($({},t),r)),e;function e(r,...n){const a=typeof r=="string"?[r]:r.raw,{alignValues:f=!1,escapeSpecialCharacters:c=Array.isArray(r),trimWhitespace:m=!0}=t;let i="";for(let o=0;o<a.length;o++){let s=a[o];if(c&&(s=s.replace(/\\\n[ \t]*/g,"").replace(/\\`/g,"`").replace(/\\\$/g,"$").replace(/\\\{/g,"{")),i+=s,o<n.length){const y=f?j(n[o],i):n[o];i+=y}}const h=i.split(`
`);let u=null;for(const o of h){const s=o.match(/^(\s+)\S+/);if(s){const y=s[1].length;u?u=Math.min(u,y):u=y}}if(u!==null){const o=u;i=h.map(s=>s[0]===" "||s[0]==="	"?s.slice(o):s).join(`
`)}return m&&(i=i.trim()),c&&(i=i.replace(/\\n/g,`
`)),i}}function j(t,e){if(typeof t!="string"||!t.includes(`
`))return t;const n=e.slice(e.lastIndexOf(`
`)+1).match(/^(\s+)/);if(n){const a=n[1];return t.replace(/\n/g,`
${a}`)}return t}function b(t){return new Promise(e=>setTimeout(e,t))}const g=(t,e)=>t?l`
            <svg 
                class="${p}-message-prefix"
                data-icon="tips/fill/${e}-circle-fill"
                viewBox="0 0 48 48"
            >
                <use
                    xlink:href="#ai:local:tips/fill/${e}-circle-fill"
                ></use>
            </svg>
        `:l`
            <svg 
                class="${p}-message-prefix"
                data-icon="tips/outline/${e}-circle"
                data-primary="${{check:"success",close:"danger",exclamation:"warning",info:""}[e]}"
                viewBox="0 0 48 48"
            >
                <use
                    xlink:href="#ai:local:tips/outline/${e}-circle"
                ></use>
            </svg>
        `,d={"--background-color-message":"var(--primary-5)","--box-shadow-color":"var(--primary-4)"};class q{queue;constructor(e=document.body){this.reset(e)}reset(e=document.body){this.queue?.remove(),this.queue=document.createElement("div"),this.queue.className=`${p}-message-queue`,e.append(this.queue)}async emit(e){const r=document.createElement("div");let n=3e3,a="",f={},c=e??"☘";if(typeof c!="string"&&(n=c.duration??3e3,a=`${c.primary||""}`,f=c.style??{},c=`${c.content??"☘"}`),r.innerHTML=l`
            <div class="${p}-message">
                <p class="${p}-paragraph">${c}</p>
            </div>
        `,a){const m=r.firstElementChild;m.dataset.primary=a,Object.entries(f).map(i=>m.style.setProperty(...i))}this.queue.appendChild(r),r.style.height=`${r.offsetHeight}px`,r.style.transition="opacity 1s, height 2s",await b(n),r.style.opacity="0",r.style.height="0",await b(2e3),this.queue.removeChild(r)}async info(e,r="info"){return await this.emit({content:l`
                ${g(!1,r)}
                <span>${e}</span>
            `})}async success(e){return await this.emit({content:l`
                ${g(!0,"check")}
                <span>${e}</span>
            `,primary:"success",style:d})}async danger(e){return await this.emit({content:l`
                ${g(!0,"close")}
                <span>${e}</span>
            `,primary:"danger",style:d})}get error(){return this.danger}async warning(e){return await this.emit({content:l`
                ${g(!0,"exclamation")}
                <span>${e}</span>
            `,primary:"warning",style:d})}}const E=new q;export{E as _,l as d,g as i};
