import{o as e,t,u as s}from"./lit.PcferLoS.js";import"./iconify-icon.CciI8O2w.js";var i=class extends t{static shadowRootOptions={mode:"open"};static styles=[s(":host{--step-color:var(--color-primary,#2ebd85);--step-error:var(--color-error,#f5465c);--step-muted:color-mix(in oklab, var(--color-base-content,#fff) 20%, transparent);--core-font:var(--font-sans,system-ui);width:100%;display:block}.web-steps.size-sm{--step-circle-size:20px;--step-num-font:11px;--step-label-font:clamp(.65rem, .8vw, .75rem);--step-icon-size:1.5rem;--step-line-h:2px}.web-steps.size-md{--step-circle-size:28px;--step-num-font:13px;--step-label-font:clamp(.75rem, .9vw, .875rem);--step-icon-size:2rem;--step-line-h:3px}.web-steps.size-lg{--step-circle-size:36px;--step-num-font:15px;--step-label-font:clamp(.875rem, 1.1vw, 1rem);--step-icon-size:2.25rem;--step-line-h:3px}.web-steps.size-xl{--step-circle-size:44px;--step-num-font:17px;--step-label-font:clamp(1rem, 1.5vw, 1.25rem);--step-icon-size:2.75rem;--step-line-h:4px}.web-steps{font-family:var(--core-font);width:100%}.steps-grid{align-items:center;width:100%;margin-bottom:1.25rem;display:grid}.icon-cell{justify-content:center;align-items:flex-end;padding-bottom:.5rem;display:flex}.step-icon{font-size:var(--step-icon-size,2rem);color:var(--step-muted);transition:color .3s}.step-icon.done,.step-icon.active{color:var(--step-color)}.step-icon.error{color:var(--step-error)}.circle-cell{justify-content:center;align-items:center;display:flex}.step-circle{width:var(--step-circle-size,28px);height:var(--step-circle-size,28px);font-size:var(--step-num-font,13px);cursor:pointer;z-index:1;background:var(--step-muted);color:color-mix(in oklab, var(--color-base-content,#fff) 55%, transparent);border:none;border-radius:50%;outline:none;flex-shrink:0;justify-content:center;align-items:center;font-weight:700;transition:background .3s,box-shadow .3s;display:flex;position:relative}.step-circle.done{background:var(--step-color);color:#fff}.step-circle.active{background:var(--step-color);color:#fff;box-shadow:0 0 0 4px color-mix(in oklab, var(--step-color) 25%, transparent)}.step-circle.error{background:var(--step-error);color:#fff}.step-circle iconify-icon{display:flex}.line-cell{align-items:center;display:flex}.step-line{width:100%;height:var(--step-line-h,3px);background:var(--step-muted);border-radius:2px;transition:background .3s}.step-line.done{background:var(--step-color)}.label-cell{text-align:center;justify-content:center;padding-top:.4rem;display:flex}.step-label{font-size:var(--step-label-font,clamp(.75rem, .9vw, .875rem));color:var(--step-muted);white-space:nowrap;font-weight:500;transition:color .3s}.step-label.done,.step-label.active{color:var(--step-color);font-weight:600}.step-label.error{color:var(--step-error)}.spin{animation:1s linear infinite spin;display:inline-flex}@keyframes spin{to{transform:rotate(360deg)}}.steps-content{width:100%}.step-panel{display:none}.step-panel.active{animation:.25s fadeIn;display:block}@keyframes fadeIn{0%{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}.spatial .step-circle.pending{background:color-mix(in oklab, var(--color-base-300,#393939) 40%, transparent);backdrop-filter:blur(8px);border:1px solid #ffffff1f}")];static properties={steps:{type:Array},active:{type:String},ui:{type:String},theme:{type:String},size:{type:String},mainColors:{type:String},textColor:{type:String}};constructor(){super(),this.steps=[],this.active="",this.ui="modern",this.theme="",this.size="md",this.mainColors="",this.textColor=""}get _colors(){const[e="",t="",s="",i="",r=""]=(this.mainColors||"").split("|").map(e=>e.trim());return{primary:e,secondary:t,accent:s,info:i,warning:r}}_applyCSS(){this.theme?this.setAttribute("data-theme",this.theme):this.removeAttribute("data-theme");const e=this._colors,t={"--color-primary":e.primary,"--color-secondary":e.secondary,"--color-accent":e.accent,"--color-info":e.info,"--color-warning":e.warning,"--color-base-content":this.textColor};for(const[s,i]of Object.entries(t))i?this.style.setProperty(s,i):this.style.removeProperty(s)}firstUpdated(){!this.active&&this.steps.length>0&&(this.active=this.steps[0].id)}updated(e){(e.has("theme")||e.has("mainColors")||e.has("textColor"))&&this._applyCSS()}get _activeIndex(){const e=this.steps.findIndex(e=>e.id===this.active);return-1===e?0:e}get _activeId(){return this.steps[this._activeIndex]?.id}_stepStatus(e,t){if(e.status)return e.status;const s=this._activeIndex;return t<s?"done":t===s?"active":"pending"}_lineStatus(e){return e+1<=this._activeIndex?"done":""}_selectStep(e){this.active!==e&&(this.active=e,this.dispatchEvent(new CustomEvent("change",{detail:{active:e},bubbles:!0,composed:!0})))}_rbCircleContent(t,s){return"done"===t?e`<iconify-icon icon="ri:check-line"></iconify-icon>`:"active"===t?e`<iconify-icon icon="ri:refresh-line" class="spin"></iconify-icon>`:"error"===t?e`<iconify-icon icon="ri:close-line"></iconify-icon>`:e`<span>${s+1}</span>`}render(){const t=this.steps.length;if(!t)return e``;const s=this.steps.some(e=>e.icon),i=Array.from({length:t},(e,s)=>s<t-1?"auto 1fr":"auto").join(" "),r=s?2:1,o=s?3:2,n=this.size||"md";return e`
            <div class="web-steps ${this.ui||"modern"} size-${n}">
                <div class="steps-grid" style="grid-template-columns:${i}">
                    ${this.steps.map((i,n)=>{const c=this._stepStatus(i,n),l=2*n+1;return e`
                            ${s?e`
                                <div class="cell icon-cell" style="grid-column:${l};grid-row:1">
                                    ${i.icon?e`<iconify-icon class="step-icon ${c}" icon=${i.icon}></iconify-icon>`:""}
                                </div>
                            `:""}

                            <div class="cell circle-cell" style="grid-column:${l};grid-row:${r}">
                                <button class="step-circle ${c}" @click=${()=>this._selectStep(i.id)}>
                                    ${this._rbCircleContent(c,n)}
                                </button>
                            </div>

                            <div class="cell label-cell" style="grid-column:${l};grid-row:${o}">
                                <span class="step-label ${c}">${i.label}</span>
                            </div>

                            ${n<t-1?e`
                                <div class="cell line-cell" style="grid-column:${l+1};grid-row:${r}">
                                    <div class="step-line ${this._lineStatus(n)}"></div>
                                </div>
                            `:""}
                        `})}
                </div>

                <div class="steps-content">
                    ${this.steps.map(t=>e`
                        <div class="step-panel ${this._activeId===t.id?"active":""}">
                            <slot name="${t.id}"></slot>
                        </div>
                    `)}
                </div>
            </div>
        `}};customElements.get("web-steps")||customElements.define("web-steps",i);