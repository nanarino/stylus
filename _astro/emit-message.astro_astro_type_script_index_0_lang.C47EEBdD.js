import{i as l,d as i}from"./message.C6PPYVGP.js";import"./prefix.DdUm4vFL.js";const r=["red","orange","gold","yellow","lime","green","cyan","blue","purple","pinkpurple","magenta","gray"],s=["check","close","exclamation","info"];document.addEventListener("astro:page-load",()=>{const t=document.getElementById("emit-message-kanban");t&&(t.onclick=function(c){const o=c.target;if(o.tagName==="BUTTON"){const a=Object.hasOwn(o.dataset,"primary"),n=s[Math.floor(Math.random()*s.length)];if(a){let e=Reflect.get(o.dataset,"color")||"primary";window.message.emit({content:i`
                            ${l(a,n)}
                            <span>
                                发射成功
                            </span>
                        `,primary:"primary",style:{"--background-color-message":`var(--${e}-5)`,"--box-shadow-color":`var(--${e}-4)`}}),e=r[Math.floor(Math.random()*r.length)],o.innerText=e,o.dataset.color=e,o.style.setProperty("--background-color-button",`var(--${e}-5)`),o.style.setProperty("--background-color-button:focus",`var(--${e}-6)`)}else window.message.info("发射成功",n)}})});
