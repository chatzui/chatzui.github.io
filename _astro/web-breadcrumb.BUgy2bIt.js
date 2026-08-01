import{d as e,l as t,r}from"./lit.72plP4vO.js";var a=class extends e{static shadowRootOptions={mode:"open"};static styles=[t(':host{--core-font:var(--font-sans,"system-ui");--core-glass:var(--haze-glass,20%);display:block}.web-breadcrumb{font-family:var(--core-font);flex-wrap:wrap;align-items:center;gap:10px;font-size:14px;font-weight:500;display:flex}.breadcrumb-item{color:var(--color-base-content,#fff);opacity:.6;align-items:center;gap:10px;transition:all .3s cubic-bezier(.4,0,.2,1);display:flex}.breadcrumb-item.link{cursor:pointer;text-decoration:none}.breadcrumb-item.link:hover{opacity:1;color:var(--color-primary,#2ebd85);transform:translateY(-1px)}.breadcrumb-item.last{opacity:1;color:var(--color-base-content,#fff);font-weight:700}.separator{opacity:.4;color:var(--color-base-content,#fff);justify-content:center;align-items:center;display:flex}.separator svg{width:16px;height:16px}.spatial.web-breadcrumb{background:color-mix(in oklab, var(--color-base-300,#393939) var(--core-glass), transparent);backdrop-filter:blur(12px);border-color:#ffffff4d;border-radius:999px;width:fit-content;padding:8px 16px}')];static properties={items:{type:Array},theme:{type:String},ui:{type:String}};static get uiConfigs(){return{modern:{wrap:"modern web-breadcrumb"},spatial:{wrap:"spatial web-breadcrumb"}}}constructor(){super(),this.items=[],this.theme="",this.ui="modern"}updated(e){e.has("theme")&&this.theme?this.setAttribute("data-theme",this.theme):e.has("theme")&&!this.theme&&this.removeAttribute("data-theme")}_handleClick(e,t){t.href&&(e.preventDefault(),this.dispatchEvent(new CustomEvent("navigate",{detail:{item:t},bubbles:!0,composed:!0})))}render(){return r`
      <nav class="${this.constructor.uiConfigs[this.ui||"modern"].wrap}">
        ${this.items.map((e,t)=>r`
          <div class="breadcrumb-item ${e.href?"link":""} ${t===this.items.length-1?"last":""}"
               @click=${t=>this._handleClick(t,e)}>
            ${e.label}
          </div>
          ${t<this.items.length-1?r`
            <div class="separator">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          `:""}
        `)}
      </nav>
    `}};customElements.get("web-breadcrumb")||customElements.define("web-breadcrumb",a);