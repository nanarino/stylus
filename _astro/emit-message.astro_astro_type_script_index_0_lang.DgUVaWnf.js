import{i as l,d as i}from"./message.CyguZYKm.js";import"./prefix.DdUm4vFL.js";const r=["red","orange","gold","yellow","lime","green","cyan","blue","purple","pinkpurple","magenta","gray"],s=["check","close","exclamation","info"];document.addEventListener("astro:page-load",()=>{const t=document.getElementById("emit-message-kanban");t&&(t.onclick=function(c){const e=c.target;if(e.tagName==="BUTTON"){const a=Object.hasOwn(e.dataset,"primary"),n=s[Math.floor(Math.random()*s.length)];if(a){let o=Reflect.get(e.dataset,"color")||"primary";window.message.emit({content:i`
                            ${l(a,n)}
                            <span>
                                发射成功
                            </span>
                        `,primary:!0,style:{"--background-color-message":`var(--${o}-5)`,"--box-shadow-color":`var(--${o}-4)`}}),o=r[Math.floor(Math.random()*r.length)],e.innerText=o,e.dataset.color=o,e.style.setProperty("--background-color-button",`var(--${o}-5)`),e.style.setProperty("--background-color-button--focus",`var(--${o}-6)`)}else window.message.info("发射成功",n)}})});
