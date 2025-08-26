import{p as o}from"./prefix.DdUm4vFL.js";import{d as c}from"./dedent.DVFkJXTl.js";const l=["red","orange","gold","yellow","lime","green","cyan","blue","purple","pinkpurple","magenta","gray"],r=["check","close","exclamation","info"];document.addEventListener("astro:page-load",()=>{const s=document.getElementById("emit-message-kanban");s&&(s.onclick=function(i){const e=i.target;if(e.tagName==="BUTTON"){const n=Object.hasOwn(e.dataset,"primary"),a=r[Math.floor(Math.random()*r.length)];if(n){let t=Reflect.get(e.dataset,"color")||"primary";window.dispatchEvent(new CustomEvent(`${o}-message`,{detail:{content:c`
                                    <svg 
                                        class="${o}-message-prefix"
                                        data-icon="tips/fill/${a}-circle-fill"
                                        viewBox="0 0 48 48"
                                    >
                                        <use
                                            xlink:href="#ai:local:tips/fill/${a}-circle-fill"
                                        ></use>
                                    </svg>
                                    <span>
                                        发射成功
                                    </span>
                                `,primary:n,style:{"--background-color-message":`var(--${t}-5)`,"--box-shadow-color":`var(--${t}-4)`}}})),t=l[Math.floor(Math.random()*l.length)],e.innerText=t,e.dataset.color=t,e.style.setProperty("--background-color-button",`var(--${t}-5)`),e.style.setProperty("--background-color-button:focus",`var(--${t}-6)`)}else window.dispatchEvent(new CustomEvent(`${o}-message`,{detail:{content:c`
                                    <svg 
                                        class="${o}-message-prefix"
                                        data-icon="tips/outline/${a}-circle"
                                        data-primary="${{check:"success",close:"danger",exclamation:"warning",info:""}[a]}"
                                        viewBox="0 0 48 48"
                                    >
                                        <use
                                            xlink:href="#ai:local:tips/outline/${a}-circle"
                                        ></use>
                                    </svg>
                                    <span>
                                        发射成功
                                    </span>
                                `,primary:n}}))}})});
