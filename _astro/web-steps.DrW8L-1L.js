import{o as e,t,u as i}from"./lit.PcferLoS.js";import"./iconify-icon.CciI8O2w.js";var s=class extends t{static shadowRootOptions={mode:"open"};static styles=[i(":host{box-sizing:border-box;--step-color:var(--color-primary,#2ebd85);--step-error:var(--color-error,#f5465c);--step-muted:color-mix(in oklab, var(--color-base-content,#fff) 35%, transparent);--core-font:var(--font-sans,system-ui);width:100%;display:block}.web-steps.size-sm{--step-circle-size:20px;--step-num-font:.75rem;--step-label-font:clamp(.65rem, .8vw, .75rem);--step-icon-size:1.5rem;--step-line-h:2px}.web-steps.size-md{--step-circle-size:28px;--step-num-font:.85rem;--step-label-font:clamp(.75rem, .9vw, .875rem);--step-icon-size:2rem;--step-line-h:2px}.web-steps.size-lg{--step-circle-size:36px;--step-num-font:1rem;--step-label-font:clamp(.875rem, 1.1vw, 1rem);--step-icon-size:2.25rem;--step-line-h:3px}.web-steps.size-xl{--step-circle-size:45px;--step-num-font:1.25rem;--step-label-font:clamp(1rem, 1.5vw, 1.25rem);--step-icon-size:2.75rem;--step-line-h:3px}.web-steps{font-family:var(--core-font);width:100%}.steps-head{align-items:center;width:100%;display:grid}.web-steps.steps-vertical .steps-head{align-items:stretch;column-gap:1rem;margin-bottom:0}.icon-cell{justify-content:center;align-items:flex-end;padding-bottom:.5rem;display:flex}.step-icon{font-size:var(--step-icon-size,2rem);color:var(--step-muted);transition:color .3s}.step-icon.done,.step-icon.active{color:var(--step-color)}.step-icon.error{color:var(--step-error)}.circle-cell{justify-content:center;align-items:center;display:flex}.step-circle{width:var(--step-circle-size,28px);height:var(--step-circle-size,28px);font-size:var(--step-num-font,13px);cursor:pointer;z-index:1;border:none;border:2px solid color-mix(in oklab, var(--color-base-content,#000) 20%, transparent);color:var(--step-muted);background-color:#0000;border-radius:50%;outline:none;flex-shrink:0;justify-content:center;align-items:center;font-weight:700;transition:background .3s,box-shadow .3s;display:flex;position:relative}.step-circle.done{background:var(--step-color);color:#fff}.step-circle.active{background:var(--step-color);color:#fff;box-shadow:0 0 0 4px color-mix(in oklab, var(--step-color) 25%, transparent)}.step-circle.error{background:var(--step-error);color:#fff}.step-circle iconify-icon{display:flex}.web-steps.steps-linear .step-circle:not(.done):not(.active):not(.error),.web-steps.steps-linear .step-label:not(.done):not(.active):not(.error){cursor:not-allowed}.line-cell{align-items:center;display:flex}.step-line{width:100%;height:var(--step-line-h,2px);background:color-mix(in oklab, var(--color-base-content,#000) 20%, transparent);border-radius:2px;transition:background .3s}.step-line.done{background:var(--step-color)}.label-cell{text-align:center;justify-content:center;padding-top:.4rem;display:flex}.step-label{font-size:var(--step-label-font,clamp(.75rem, .9vw, .875rem));color:var(--step-muted);white-space:nowrap;font-weight:500;transition:color .3s}.step-label.done,.step-label.active{color:var(--step-color);font-weight:600}.step-label.error{color:var(--step-error)}.spin{animation:1s linear infinite spin;display:inline-flex}@keyframes spin{to{transform:rotate(360deg)}}.steps-content{width:100%}.step-panel{display:none}.step-panel.active{animation:.25s fadeIn;display:block}@keyframes fadeIn{0%{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}.marker-cell{flex-direction:column;align-items:center;gap:.35rem;display:flex}.marker-cell .step-line.vertical{width:var(--step-line-h,2px);flex:auto;min-height:1rem}.content-cell{text-align:left;flex-direction:column;gap:.4rem;padding-bottom:1.25rem;display:flex}.steps-vertical .step-label{white-space:normal;text-align:left;cursor:pointer;font-size:clamp(1rem,1.5vw,1.2rem);font-weight:700}.step-content{line-height:1.65;display:none}.step-content.active{animation:.25s fadeIn;display:block}.step-content ::slotted(*){margin:0}")];static properties={steps:{type:Array},active:{type:String},ui:{type:String},theme:{type:String},size:{type:String},isVertical:{type:Boolean},linear:{type:Boolean},ended:{type:Boolean},mainColors:{type:String},textColor:{type:String},_viewing:{state:!0}};constructor(){super(),this.steps=[],this.active="",this.ui="modern",this.theme="",this.size="md",this.isVertical=!1,this.linear=!1,this.ended=!1,this.mainColors="",this.textColor="",this._viewing=""}get _colors(){const[e="",t="",i="",s="",n=""]=(this.mainColors||"").split("|").map(e=>e.trim());return{primary:e,secondary:t,accent:i,info:s,warning:n}}_applyCSS(){this.theme?this.setAttribute("data-theme",this.theme):this.removeAttribute("data-theme");const e=this._colors,t={"--color-primary":e.primary,"--color-secondary":e.secondary,"--color-accent":e.accent,"--color-info":e.info,"--color-warning":e.warning,"--color-base-content":this.textColor};for(const[i,s]of Object.entries(t))s?this.style.setProperty(i,s):this.style.removeProperty(i)}firstUpdated(){!this.active&&this.steps.length>0&&(this.active=this.steps[0].id)}updated(e){(e.has("theme")||e.has("mainColors")||e.has("textColor"))&&this._applyCSS(),e.has("active")&&this._viewing&&(this._viewing="")}get _activeIndex(){const e=this.steps.findIndex(e=>e.id===this.active);return-1===e?0:e}get _activeId(){return this.steps[this._activeIndex]?.id}get _viewIndex(){if(this.linear&&this._viewing){const e=this.steps.findIndex(e=>e.id===this._viewing);if(-1!==e)return e}return this._activeIndex}get _viewId(){return this.steps[this._viewIndex]?.id}_stepStatus(e,t){if(e.status)return e.status;const i=this._activeIndex;return t<i?"done":t===i?this.ended?"done":"active":"pending"}_lineStatus(e){return e+1<=this._activeIndex?"done":""}_selectStep(e){if(this.linear){const t=this.steps.findIndex(t=>t.id===e);if(-1===t||t>this._activeIndex)return;const i=e===this.active?"":e;if(i===this._viewing)return;return this._viewing=i,void this.dispatchEvent(new CustomEvent("change",{detail:{active:e},bubbles:!0,composed:!0}))}this.active!==e&&(this.active=e,this.dispatchEvent(new CustomEvent("change",{detail:{active:e},bubbles:!0,composed:!0})))}_rbCircleContent(t,i){return"done"===t?e`<iconify-icon icon="ri:check-line"></iconify-icon>`:"active"===t?e`<iconify-icon icon="ri:refresh-line" class="spin"></iconify-icon>`:"error"===t?e`<iconify-icon icon="ri:close-line"></iconify-icon>`:e`<span>${i+1}</span>`}_rfHorizontalCells(t,i,s,n,r,o,l){const c=2*i+1;return e`
            ${r?e`
                <div class="cell icon-cell" style="grid-column:${c};grid-row:1">
                    ${t.icon?e`<iconify-icon class="step-icon ${n}" icon=${t.icon}></iconify-icon>`:""}
                </div>
            `:""}

            <div class="cell circle-cell" style="grid-column:${c};grid-row:${o}">
                <button class="step-circle ${n}" @click=${()=>this._selectStep(t.id)}>
                    ${this._rbCircleContent(n,i)}
                </button>
            </div>

            <div class="cell label-cell" style="grid-column:${c};grid-row:${l}">
                <span class="step-label ${n}">${t.label}</span>
            </div>

            ${i<s-1?e`
                <div class="cell line-cell" style="grid-column:${c+1};grid-row:${o}">
                    <div class="step-line ${this._lineStatus(i)}"></div>
                </div>
            `:""}
        `}_rfVerticalCells(t,i,s,n){const r=i+1,o=this._viewId===t.id;return e`
            <div class="cell marker-cell" style="grid-column:1;grid-row:${r}">
                ${t.icon?e`<iconify-icon class="step-icon ${n}" icon=${t.icon}></iconify-icon>`:""}
                <button class="step-circle ${n}" @click=${()=>this._selectStep(t.id)}>
                    ${this._rbCircleContent(n,i)}
                </button>
                ${i<s-1?e`<div class="step-line vertical ${this._lineStatus(i)}"></div>`:""}
            </div>

            <div class="cell content-cell" style="grid-column:2;grid-row:${r}">
                <span class="step-label ${n}" @click=${()=>this._selectStep(t.id)}>${t.label}</span>
                <div class="step-content ${o?"active":""}"><slot name="${t.id}"></slot></div>
            </div>
        `}render(){const t=this.steps.length;if(!t)return e``;const i=this.isVertical,s=this.steps.some(e=>e.icon),n=this.size||"md",r=i?"auto 1fr":Array.from({length:t},(e,i)=>i<t-1?"auto 1fr":"auto").join(" "),o=s?2:1,l=s?3:2;return e`
            <div class="web-steps ${this.ui||"modern"} size-${n} ${i?"steps-vertical":""} ${this.linear?"steps-linear":""}">
                <div class="steps-head" style="grid-template-columns:${r}">
                    ${this.steps.map((e,n)=>{const r=this._stepStatus(e,n);return i?this._rfVerticalCells(e,n,t,r):this._rfHorizontalCells(e,n,t,r,s,o,l)})}
                </div>

                ${i?"":e`
                    <div class="steps-content">
                        ${this.steps.map(t=>e`
                            <div class="step-panel ${this._viewId===t.id?"active":""}">
                                <slot name="${t.id}"></slot>
                            </div>
                        `)}
                    </div>
                `}
            </div>
        `}};customElements.get("web-steps")||customElements.define("web-steps",s);